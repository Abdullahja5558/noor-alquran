import { NextRequest, NextResponse } from "next/server";

// Split long text into natural sentence chunks of <= 180 characters for Google TTS
function splitTextIntoChunks(text: string, maxLen = 170): string[] {
  if (!text) return [];
  if (text.length <= maxLen) return [text];

  // Delimiters for Urdu, Arabic, English
  const sentenceDelimiters = /[۔،.!?؛\n]+/;
  const sentences = text.split(sentenceDelimiters).map((s) => s.trim()).filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  for (const s of sentences) {
    if (s.length > maxLen) {
      // If single sentence is too long, split by words
      const words = s.split(/\s+/);
      for (const w of words) {
        if ((current + " " + w).trim().length > maxLen) {
          if (current) chunks.push(current.trim());
          current = w;
        } else {
          current = (current + " " + w).trim();
        }
      }
    } else if ((current + " " + s).trim().length > maxLen) {
      if (current) chunks.push(current.trim());
      current = s;
    } else {
      current = (current + " " + s).trim();
    }
  }

  if (current) {
    chunks.push(current.trim());
  }

  return chunks.length > 0 ? chunks : [text.slice(0, maxLen)];
}

async function fetchAudioChunk(chunkText: string, lang: string): Promise<Buffer> {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=gtx&tl=${lang}&q=${encodeURIComponent(
    chunkText
  )}`;

  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch TTS chunk: ${res.status}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const text = searchParams.get("text");
    const lang = searchParams.get("lang") || "ur";

    if (!text || !text.trim()) {
      return new NextResponse("Text parameter is required", { status: 400 });
    }

    // Supported language codes: 'ur' (Urdu), 'ar' (Arabic), 'en' (English)
    const validLang = lang === "ur" ? "ur" : lang === "ar" ? "ar" : "en";

    const chunks = splitTextIntoChunks(text, 160);
    const audioBuffers: Buffer[] = [];

    for (const chunk of chunks) {
      try {
        const buf = await fetchAudioChunk(chunk, validLang);
        audioBuffers.push(buf);
      } catch (err) {
        console.error("TTS chunk fetch error:", err);
      }
    }

    if (audioBuffers.length === 0) {
      return new NextResponse("Could not generate audio", { status: 500 });
    }

    const combined = Buffer.concat(audioBuffers);

    return new NextResponse(combined, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=604800, immutable",
      },
    });
  } catch (error: any) {
    console.error("TTS API Route Error:", error);
    return new NextResponse(error.message || "TTS Error", { status: 500 });
  }
}
