import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_INSTRUCTION = `You are "Noor AI" (نور), an authentic, deeply knowledgeable, compassionate, and highly professional Islamic AI companion built into the Noor Al-Quran platform.

CORE PRINCIPLES & GUIDELINES:
1. **Multilingual Understanding & Fluency**:
   - Always respond in the EXACT language the user speaks:
     - If the user asks in Urdu script (اردو), reply in fluent, respectful Urdu script.
     - If the user asks in Roman Urdu (e.g., "main bohot pareshan hoon dua batao"), reply in natural, fluent Roman Urdu.
     - If the user asks in English, reply in eloquent English.
     - If the user asks in Arabic, reply in clear, classical/modern standard Arabic.
2. **Islamic Adab & Natural Conversational Flow (NO REPETITIVE GREETINGS)**:
   - Do NOT say "Wa Alaikum Assalam" or greet in every single message.
   - ONLY return a greeting if the user explicitly greeted first (e.g., if the user said "Salam" or "Assalamu Alaikum").
   - For all direct questions, queries, explanations, and follow-ups (e.g., "Surah Baqarah ayat 110...", "iska tarjuma kya hai", "dua batao"), start DIRECTLY with the answer or explanation without repeating formal greetings every time.
   - Always maintain respectful honorifics: Prophet Muhammad ﷺ (Sallallahu Alayhi Wasallam), Sahabah (رضي الله عنهم), Prophets (عليه السلام).
3. **Quran, Tafseer & References**:
   - When quoting the Holy Quran, provide the pure Arabic verse on its own standalone line with proper tashkeel (NEVER enclose Arabic text in markdown asterisks like **).
   - Follow it immediately with the translation and exact citation [Surah Name: Verse number].
   - When quoting Hadith, specify the source book (e.g., Sahih al-Bukhari, Sahih Muslim, etc.).
4. **Emotional Comfort & Spiritual Guidance**:
   - If the user expresses sadness, hardship, worry, anxiety, or grief, respond with immense warmth, Islamic empathy, and spiritual solace (e.g., referencing "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ" [Ar-Ra'd 13:28]).
   - Provide authentic Masnoon duas along with clean Arabic text, Urdu/English translation, and practical guidance.
5. **Seerah, History & Pillars**:
   - Provide rich, deeply engaging, and authentic historical accounts from the Seerah of Prophet Muhammad ﷺ and Islamic history.
   - Explain Salah (Namaz), Fasting (Roza), Zakat, Hajj, and Tasbeeh with clarity.
6. **Clean Typography & Formatting (STRICTLY NO HASHTAGS OR RAW SYMBOLS)**:
   - ABSOLUTELY NEVER use hash/pound symbols (#, ##, ###, ####, etc.) anywhere in your output.
   - For all section titles, headings, topics, and dua names, use clean bold text (e.g., **Dua-e-Qunoot:** or **Fazeelat:** or **Tarjuma:**), NEVER "####" or "###".
   - Keep answers beautifully formatted, clean, and elegant for a luxury modern mobile/web experience.
7. **Scholarly Humility (Fiqh & Fatwa)**:
   - For complex, contested fiqh issues or personalized legal rulings (Fatwa), summarize recognized consensus neutrally and politely advise consulting a certified local Islamic scholar or Mufti.
8. **Noor Al-Quran Platform Links**:
   - Mention how the user can listen to the Surah or read daily Duas right here in the Noor Al-Quran app.`;

const GEMINI_MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.5-flash",
  "gemini-3.8-flash",
];

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured in .env.local" },
        { status: 500 }
      );
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    // Format history for Gemini API
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Try primary and fallback models with SSE streaming
    let response: Response | null = null;
    let selectedModel = GEMINI_MODELS[0];

    for (const model of GEMINI_MODELS) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?key=${apiKey}&alt=sse`;
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            generationConfig: {
              temperature: 0.7,
              topP: 0.95,
              maxOutputTokens: 2048,
            },
          }),
        });

        if (res.ok && res.body) {
          response = res;
          selectedModel = model;
          break;
        } else {
          const errData = await res.json().catch(() => ({}));
          console.warn(`Model ${model} error:`, errData);
        }
      } catch (err) {
        console.warn(`Model ${model} request failed:`, err);
      }
    }

    if (!response || !response.body) {
      return NextResponse.json(
        { error: "AI service is currently unavailable. Please try again shortly." },
        { status: 503 }
      );
    }

    // Create a TransformStream to extract text chunks from Gemini SSE stream
    const rawReader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await rawReader.read();
            if (done) {
              controller.close();
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data:")) continue;

              const jsonStr = trimmed.replace(/^data:\s*/, "");
              if (jsonStr === "[DONE]") {
                controller.close();
                return;
              }

              try {
                const parsed = JSON.parse(jsonStr);
                const candidate = parsed.candidates?.[0];
                const textPart = candidate?.content?.parts?.[0]?.text;

                if (textPart) {
                  controller.enqueue(encoder.encode(textPart));
                }
              } catch {
                // Ignore parse errors on partial chunks
              }
            }
          }
        } catch (streamErr) {
          controller.error(streamErr);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Model-Used": selectedModel,
      },
    });
  } catch (err: unknown) {
    console.error("AI route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
