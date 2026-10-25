"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Sparkles,
  Send,
  Plus,
  Sun,
  Moon,
  Copy,
  Check,
  Volume2,
  VolumeX,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const SURAH_KEYWORD_MAP: { [key: string]: { num: number; name: string } } = {
  fatihah: { num: 1, name: "Al-Fatihah" },
  fateha: { num: 1, name: "Al-Fatihah" },
  baqarah: { num: 2, name: "Al-Baqarah" },
  imran: { num: 3, name: "Ali 'Imran" },
  nisa: { num: 4, name: "An-Nisa" },
  maidah: { num: 5, name: "Al-Ma'idah" },
  anam: { num: 6, name: "Al-An'am" },
  kahf: { num: 18, name: "Al-Kahf" },
  maryam: { num: 19, name: "Maryam" },
  taha: { num: 20, name: "Taha" },
  nur: { num: 24, name: "An-Nur" },
  noor: { num: 24, name: "An-Nur" },
  yasin: { num: 36, name: "Yasin" },
  yaseen: { num: 36, name: "Yasin" },
  rahman: { num: 55, name: "Ar-Rahman" },
  rehman: { num: 55, name: "Ar-Rahman" },
  waqiah: { num: 56, name: "Al-Waqi'ah" },
  waqia: { num: 56, name: "Al-Waqi'ah" },
  mulk: { num: 67, name: "Al-Mulk" },
  muzammil: { num: 73, name: "Al-Muzzammil" },
  muddathir: { num: 74, name: "Al-Muddaththir" },
  qiyamah: { num: 75, name: "Al-Qiyamah" },
  naba: { num: 78, name: "An-Naba" },
  ikhlas: { num: 112, name: "Al-Ikhlas" },
  falaq: { num: 113, name: "Al-Falaq" },
  nas: { num: 114, name: "An-Nas" },
};

export default function NoorAiPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pillContainerRef = useRef<HTMLDivElement>(null);
  const [pillSize, setPillSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updatePillSize = () => {
      if (pillContainerRef.current) {
        setPillSize({
          width: pillContainerRef.current.offsetWidth,
          height: pillContainerRef.current.offsetHeight,
        });
      }
    };

    updatePillSize();
    const el = pillContainerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(updatePillSize);
    ro.observe(el);
    window.addEventListener("resize", updatePillSize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updatePillSize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("noor_ai_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem("noor_ai_messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const isDark = mounted ? resolvedTheme === "dark" || theme === "dark" : false;
  const isTypingOrChatting = Boolean(input.trim().length > 0 || messages.length > 0);
  const showBeam = !isLoading && (isHovered || input.trim().length > 0);

  const handleSend = async (userText?: string) => {
    const textToSend = (userText || input).trim();
    if (!textToSend || isLoading) return;

    setIsHovered(false);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.blur();
      textareaRef.current.style.height = "auto";
    }

    const userMessage: Message = {
      id: "u_" + Date.now(),
      role: "user",
      content: textToSend,
      timestamp: Date.now(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    const assistantId = "a_" + Date.now();
    const assistantMessage: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      timestamp: Date.now(),
    };

    setMessages([...newMessages, assistantMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Unable to contact Noor AI");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullContent = "";
      let displayedLength = 0;
      let streamDone = false;

      const typingInterval = setInterval(() => {
        if (displayedLength < fullContent.length) {
          const diff = fullContent.length - displayedLength;
          const step = diff > 80 ? Math.min(diff, 6) : diff > 30 ? 3 : diff > 10 ? 2 : 1;
          displayedLength += step;
          const currentText = fullContent.slice(0, displayedLength);

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantId ? { ...msg, content: currentText } : msg
            )
          );
        } else if (streamDone) {
          clearInterval(typingInterval);
          setIsLoading(false);
        }
      }, 20);

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          streamDone = true;
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;
      }
    } catch {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantId
            ? {
                ...msg,
                content:
                  "Maaf kijiye, response load karne me dushwari pesh aa rahi hai. Baraye meherbani thori der baad dubara koshish farmayein.",
              }
            : msg
        )
      );
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (id: string, text: string) => {
    if (!("speechSynthesis" in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleNewChat = () => {
    setMessages([]);
    sessionStorage.removeItem("noor_ai_messages");
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const target = e.target;
    target.style.height = "auto";
    target.style.height = `${Math.min(target.scrollHeight, 130)}px`;
  };

  const detectDeepLinks = (text: string) => {
    const lower = text.toLowerCase();
    const links: { title: string; href: string; icon: string }[] = [];

    for (const [kw, data] of Object.entries(SURAH_KEYWORD_MAP)) {
      if (lower.includes(kw)) {
        if (!links.some((l) => l.href.includes(`/quran/${data.num}`))) {
          links.push({
            title: `Read Surah ${data.name}`,
            href: `/quran/${data.num}`,
            icon: "📖",
          });
        }
      }
    }

    if (lower.includes("dua") || lower.includes("masnoon") || lower.includes("azkar")) {
      if (!links.some((l) => l.href === "/dua")) {
        links.push({ title: "Open Daily Duas", href: "/dua", icon: "🤲" });
      }
    }

    if (lower.includes("tasbeeh") || lower.includes("tasbih") || lower.includes("dhikr") || lower.includes("zikr")) {
      if (!links.some((l) => l.href === "/tasbeeh")) {
        links.push({ title: "Open Digital Tasbeeh", href: "/tasbeeh", icon: "📿" });
      }
    }

    if (lower.includes("namaz") || lower.includes("salah") || lower.includes("prayer") || lower.includes("waqt")) {
      if (!links.some((l) => l.href === "/prayer-time")) {
        links.push({ title: "Prayer Times", href: "/prayer-time", icon: "🕌" });
      }
    }

    if (lower.includes("seerah") || lower.includes("seerat") || lower.includes("nabawi") || lower.includes("badr") || lower.includes("uhud")) {
      if (!links.some((l) => l.href === "/seerah")) {
        links.push({ title: "Explore Seerah Timeline", href: "/seerah", icon: "📜" });
      }
    }

    return links.slice(0, 3);
  };

  const isPureArabicScripture = (text: string) => {
    const clean = text.replace(/^>\s*/, "").replace(/[*_#`"«»]/g, "").trim();
    if (!clean) return false;
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g;
    const latinRegex = /[a-zA-Z]/g;
    const arabicMatches = clean.match(arabicRegex) || [];
    const latinMatches = clean.match(latinRegex) || [];
    return arabicMatches.length >= 6 && latinMatches.length <= 2;
  };

  const renderQuranAyahCard = (arabicText: string, key: string | number) => {
    const cleanArabic = arabicText.replace(/^>\s*/, "").replace(/[*_#`"«»]/g, "").trim();
    return (
      <div
        key={key}
        dir="rtl"
        className="my-3.5 sm:my-4 p-4 sm:p-5 rounded-2xl bg-slate-50/90 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-right select-text shadow-2xs"
      >
        <p className="font-arabic text-xl sm:text-2xl md:text-[25px] text-slate-900 dark:text-white leading-[2.1] sm:leading-[2.3] tracking-wide font-normal">
          {cleanArabic}
        </p>
      </div>
    );
  };

  const renderFormattedContent = (content: string) => {
    const rawParagraphs = content.split("\n\n");

    return rawParagraphs.map((para, pIdx) => {
      const trimmed = para.trim();
      if (!trimmed) return null;

      if (/^[-*_]{3,}$/.test(trimmed)) {
        return (
          <hr
            key={pIdx}
            className="my-4 border-slate-200 dark:border-white/10"
          />
        );
      }

      const headingMatch = trimmed.match(/^(#{1,6})\s*(.*)/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const rawHeading = headingMatch[2].replace(/[*_#`]/g, "").trim();
        if (level <= 2) {
          return (
            <h3
              key={pIdx}
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-5 mb-2.5 tracking-tight"
            >
              {rawHeading}
            </h3>
          );
        }
        return (
          <h4
            key={pIdx}
            className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white mt-3.5 mb-1.5 tracking-tight"
          >
            {rawHeading}
          </h4>
        );
      }

      if (isPureArabicScripture(trimmed)) {
        return renderQuranAyahCard(trimmed, pIdx);
      }

      if (trimmed.startsWith("> ")) {
        const quoteText = trimmed.replace(/^>\s+/, "").replace(/^"|"$/g, "");
        if (isPureArabicScripture(quoteText)) {
          return renderQuranAyahCard(quoteText, pIdx);
        }
        return (
          <blockquote
            key={pIdx}
            className="my-3 pl-4 border-l-2 border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 italic text-[14.5px] sm:text-[15px] leading-relaxed"
          >
            &ldquo;{renderInlineMarkdown(quoteText)}&rdquo;
          </blockquote>
        );
      }

      if (trimmed.includes("\n")) {
        const subLines = trimmed.split("\n");
        return (
          <div key={pIdx} className="my-2.5 space-y-2">
            {subLines.map((line, lIdx) => {
              const subTrimmed = line.trim();
              if (!subTrimmed) return null;

              const subHeadingMatch = subTrimmed.match(/^(#{1,6})\s*(.*)/);
              if (subHeadingMatch) {
                const rawHeading = subHeadingMatch[2].replace(/[*_#`]/g, "").trim();
                return (
                  <h4
                    key={lIdx}
                    className="text-base sm:text-[17px] font-bold text-slate-900 dark:text-white mt-3.5 mb-1 tracking-tight"
                  >
                    {rawHeading}
                  </h4>
                );
              }

              if (isPureArabicScripture(subTrimmed)) {
                return renderQuranAyahCard(subTrimmed, `${pIdx}-${lIdx}`);
              }

              return (
                <p
                  key={lIdx}
                  dir="ltr"
                  className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-800 dark:text-neutral-200 select-text text-left"
                >
                  {renderInlineMarkdown(subTrimmed)}
                </p>
              );
            })}
          </div>
        );
      }

      if (/^\d+\.\s/.test(trimmed)) {
        const lines = trimmed.split("\n");
        return (
          <ol key={pIdx} dir="ltr" className="my-2.5 space-y-2 text-[14.5px] sm:text-[15.5px] leading-relaxed text-left">
            {lines.map((line, lIdx) => {
              const match = line.match(/^(\d+\.)\s*(.*)/);
              if (match) {
                return (
                  <li key={lIdx} className="text-slate-800 dark:text-neutral-200 flex items-start gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white shrink-0">
                      {match[1]}
                    </span>
                    <span>{renderInlineMarkdown(match[2])}</span>
                  </li>
                );
              }
              return (
                <div key={lIdx} className="text-slate-800 dark:text-neutral-200 pl-4">
                  {renderInlineMarkdown(line)}
                </div>
              );
            })}
          </ol>
        );
      }

      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        const items = trimmed.split("\n").filter(Boolean);
        return (
          <ul key={pIdx} dir="ltr" className="my-2.5 space-y-1.5 pl-4 list-disc text-[14.5px] sm:text-[15.5px] leading-relaxed text-left">
            {items.map((item, iIdx) => (
              <li key={iIdx} className="text-slate-800 dark:text-neutral-200">
                {renderInlineMarkdown(item.replace(/^[-*]\s*/, ""))}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p
          key={pIdx}
          dir="ltr"
          className="my-2 text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-800 dark:text-neutral-200 whitespace-pre-line select-text text-left"
        >
          {renderInlineMarkdown(trimmed)}
        </p>
      );
    });
  };

  const renderInlineMarkdown = (text: string) => {
    const cleanText = text.replace(/^#{1,6}\s*/gm, "");
    const parts = cleanText.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-semibold text-slate-950 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <em key={idx} className="italic text-slate-700 dark:text-neutral-300">
            {part.slice(1, -1)}
          </em>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div
      className="fixed inset-0 h-[100dvh] w-full bg-[#fafafa] dark:bg-[#070709] text-slate-900 dark:text-white selection:bg-slate-200 dark:selection:bg-neutral-800 transition-colors duration-300 flex flex-col overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0">
        <div className="absolute top-[-15%] left-[25%] w-[500px] h-[500px] rounded-full bg-slate-300/20 dark:bg-neutral-700/10 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] w-[450px] h-[450px] rounded-full bg-slate-300/20 dark:bg-neutral-700/10 blur-[120px]" />
      </div>

      {/* Top Header Bar */}
      <header className="relative z-30 shrink-0 flex items-center justify-between px-3.5 sm:px-8 py-2.5 sm:py-4 w-full max-w-7xl mx-auto backdrop-blur-md bg-[#fafafa]/80 dark:bg-[#070709]/80">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="group flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors mr-1 sm:mr-3"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="hidden sm:inline">Back</span>
          </Link>

          <Link href="/ai" onClick={handleNewChat} className="flex items-center gap-2 select-none group">
            <span className="text-lg text-slate-950 dark:text-white group-hover:scale-110 transition-transform duration-200">
              ✦
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Noor <span className="font-light text-slate-500 dark:text-neutral-400">AI</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleNewChat}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 backdrop-blur-md shadow-xs transition-all cursor-pointer text-slate-700 dark:text-neutral-200 hover:text-slate-950 dark:hover:text-white"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Chat</span>
          </button>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 hover:bg-white dark:hover:bg-neutral-800 backdrop-blur-md text-slate-700 dark:text-neutral-200 transition-all cursor-pointer"
          >
            {mounted ? (
              isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>

          <Link
            href="/quran"
            className="hidden sm:inline-flex items-center px-3 sm:px-3.5 py-1.5 text-xs font-medium rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 transition-opacity"
          >
            Read Quran
          </Link>
        </div>
      </header>

      {/* Main Center Area (Scrollable container when messages exist) */}
      <main
        ref={scrollContainerRef}
        className="relative z-10 flex-1 flex flex-col w-full max-w-3xl mx-auto px-4 sm:px-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {messages.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-3 sm:px-4 select-none pb-36 sm:pb-48 -translate-y-8 sm:-translate-y-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-xl mx-auto space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center justify-center text-slate-900 dark:text-white text-xl sm:text-3xl mb-0.5 animate-pulse">
                ✦
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                As-salamu <span className="font-normal text-slate-400 dark:text-neutral-500">Alaykum</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-neutral-400 max-w-md mx-auto font-normal leading-relaxed px-2">
                I&apos;m your Islamic AI companion. Ask me anything about the Quran, Seerah, Duas, daily guidance, and I&apos;ll help you get things done.
              </p>
            </motion.div>
          </div>
        ) : (
          <div className="w-full pt-3 sm:pt-4 pb-32 sm:pb-36 space-y-6 sm:space-y-8">
            {messages.map((message) => {
              const isUser = message.role === "user";
              const deepLinks = !isUser && message.content ? detectDeepLinks(message.content) : [];

              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"} w-full`}
                >
                  {isUser ? (
                    <div className="max-w-[85%] sm:max-w-[75%] px-4 sm:px-5 py-3 rounded-2xl bg-slate-900 dark:bg-neutral-200 text-white dark:text-slate-950 font-normal text-[15px] sm:text-[15.5px] leading-relaxed shadow-xs">
                      {message.content}
                    </div>
                  ) : (
                    <div className="w-full space-y-2 select-text">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-neutral-400 mb-1 select-none">
                        <span className="text-sm text-slate-900 dark:text-white">✦</span>
                        <span className="font-semibold text-slate-900 dark:text-white">Noor AI</span>
                        <span>•</span>
                        <span className="text-[11px]">Islamic Intelligence</span>
                      </div>

                      <div className="w-full py-1">
                        {message.content ? (
                          renderFormattedContent(message.content)
                        ) : (
                          <div className="flex items-center gap-2 py-2 text-sm text-slate-500 dark:text-neutral-400">
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
                            <span>Thinking & researching authentic sources...</span>
                          </div>
                        )}

                        {deepLinks.length > 0 && (
                          <div className="mt-4 pt-3 flex flex-wrap gap-2">
                            {deepLinks.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                href={link.href}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/40 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
                              >
                                <span>{link.icon}</span>
                                <span>{link.title}</span>
                                <ChevronRight className="w-3 h-3 opacity-50" />
                              </Link>
                            ))}
                          </div>
                        )}

                        {message.content && (
                          <div className="mt-3 flex items-center gap-2 text-slate-400 dark:text-neutral-500 text-xs">
                            <button
                              onClick={() => handleCopy(message.id, message.content)}
                              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                              title="Copy answer"
                            >
                              {copiedId === message.id ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                                  <span className="text-slate-900 dark:text-white font-medium">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => handleSpeak(message.id, message.content)}
                              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-800 dark:hover:text-neutral-200 transition-colors cursor-pointer"
                              title="Listen to answer"
                            >
                              {speakingId === message.id ? (
                                <>
                                  <VolumeX className="w-3.5 h-3.5 text-red-500" />
                                  <span className="text-red-500">Stop</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3.5 h-3.5" />
                                  <span>Listen</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => handleSend(messages[messages.indexOf(message) - 1]?.content || "")}
                              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-800 dark:hover:text-neutral-200 transition-colors cursor-pointer ml-auto"
                              title="Regenerate"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              <span>Retry</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* BOTTOM SECTION: Wave Graphic + Floating Input */}
      <div className="absolute bottom-0 inset-x-0 z-40 pointer-events-none flex flex-col justify-end">
        <AnimatePresence>
          {!isTypingOrChatting && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0.9 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0.8 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute -bottom-6 sm:-bottom-8 inset-x-0 h-36 sm:h-56 md:h-72 overflow-hidden pointer-events-none select-none"
            >
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full flex flex-col justify-end"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1440 280"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="waveGlowLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="35%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="70%" stopColor="#ffffff" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                    </linearGradient>

                    <linearGradient id="waveBodyLight" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#0a0e17" stopOpacity="0.98" />
                      <stop offset="50%" stopColor="#05080c" stopOpacity="1" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="waveGlowDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="70%" stopColor="#e2e8f0" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                    </linearGradient>

                    <linearGradient id="waveBodyDark" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.98" />
                      <stop offset="100%" stopColor="#e2e8f0" stopOpacity="1" />
                    </linearGradient>

                    <linearGradient id="waveSecondaryDark" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,130 C320,50 520,180 820,100 C1120,20 1320,140 1440,110 L1440,320 L0,320 Z"
                    fill={isDark ? "url(#waveSecondaryDark)" : "#0f172a"}
                    opacity={isDark ? "0.4" : "0.5"}
                  />

                  <path
                    d="M0,90 C280,10 480,150 760,70 C1060,-10 1260,120 1440,70 L1440,320 L0,320 Z"
                    fill={isDark ? "url(#waveBodyDark)" : "url(#waveBodyLight)"}
                  />

                  <path
                    d="M0,90 C280,10 480,150 760,70 C1060,-10 1260,120 1440,70"
                    stroke={isDark ? "url(#waveGlowDark)" : "url(#waveGlowLight)"}
                    strokeWidth={isDark ? "3" : "2.5"}
                    fill="none"
                    strokeLinecap="round"
                  />

                  <path
                    d="M100,110 C380,35 560,135 840,85 C1140,30 1320,105 1440,80"
                    stroke={isDark ? "#ffffff" : "url(#waveGlowLight)"}
                    strokeWidth="1"
                    strokeOpacity={isDark ? "0.6" : "0.35"}
                    fill="none"
                  />
                </svg>

                <div className={`w-full h-8 shrink-0 ${isDark ? "bg-[#e2e8f0]" : "bg-black"}`} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative px-3 sm:px-6 pb-3 sm:pb-6 pt-2 sm:pt-3 pointer-events-auto">
          <div className="w-full max-w-2xl mx-auto">
            <div
              ref={pillContainerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group rounded-full shadow-[0_12px_45px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_50px_rgba(0,0,0,0.85)] transition-all"
            >
              {pillSize.width > 0 && pillSize.height > 0 && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-hidden z-20"
                  style={{ width: "100%", height: "100%" }}
                >
                  <rect
                    x="1"
                    y="1"
                    width={Math.max(0, pillSize.width - 2)}
                    height={Math.max(0, pillSize.height - 2)}
                    rx={Math.min(pillSize.height / 2, 28)}
                    ry={Math.min(pillSize.height / 2, 28)}
                    fill="none"
                    stroke={isDark ? "#ffffff" : "#0f172a"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    pathLength="100"
                    className="border-beam-line transition-opacity duration-200"
                    style={{
                      opacity: showBeam ? 1 : 0,
                      animationPlayState: showBeam ? "running" : "paused",
                    }}
                  />
                </svg>
              )}

              <div className="relative flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-white dark:bg-[#18181c] border border-slate-300/80 dark:border-white/15 w-full backdrop-blur-2xl">
                <button
                  type="button"
                  onClick={handleNewChat}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer ml-1"
                  title="New conversation"
                >
                  <Sparkles className="w-4 h-4" />
                </button>

                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={handleTextareaInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 bg-transparent border-none outline-none resize-none px-2 py-1.5 text-sm sm:text-[15px] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 leading-normal max-h-[130px]"
                />

                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                    input.trim() && !isLoading
                      ? "bg-slate-950 dark:bg-white text-white dark:text-slate-950 hover:scale-105 shadow-md"
                      : "bg-slate-100 dark:bg-white/10 text-slate-300 dark:text-neutral-600 cursor-not-allowed"
                  }`}
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 translate-x-px" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}