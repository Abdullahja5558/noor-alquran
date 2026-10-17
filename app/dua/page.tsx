"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Heart,
  Copy,
  BookOpen,
  CheckCircle2,
  Volume2,
  VolumeX,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DUA_DATA, Dua } from "@/components/duaData";

export default function DuaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copyStatus, setCopyStatus] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [speakingDuaId, setSpeakingDuaId] = useState<number | null>(null);

  const categories = ["All", "Protection", "Success", "Peace of Mind", "Forgiveness", "Guidance"];

  const filteredDuas = DUA_DATA.filter((dua) => {
    const matchesCategory = activeCategory === "All" || dua.category === activeCategory;
    const matchesSearch =
      dua.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dua.urdu.includes(searchTerm) ||
      dua.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dua.arabic.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const copyToClipboard = async (dua: Dua) => {
    const fullText = `🤲 ${dua.title}\n\n${dua.arabic}\n\nاردو: ${dua.urdu}\n\nEnglish: ${dua.english}\n\nRef: ${dua.ref}`;
    let success = false;

    // Tier 1: Modern Navigator Clipboard API
    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(fullText);
        success = true;
      } catch (err) {
        console.warn("navigator.clipboard.writeText failed, using mobile fallback:", err);
      }
    }

    // Tier 2: 100% Reliable Fallback for iOS Safari, Android Webview & In-App Browsers
    if (!success && typeof document !== "undefined") {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = fullText;
        textarea.style.position = "fixed";
        textarea.style.top = "0";
        textarea.style.left = "0";
        textarea.style.width = "2em";
        textarea.style.height = "2em";
        textarea.style.padding = "0";
        textarea.style.border = "none";
        textarea.style.outline = "none";
        textarea.style.boxShadow = "none";
        textarea.style.background = "transparent";
        textarea.style.opacity = "0.01";
        textarea.setAttribute("readonly", "");
        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Critical for iOS Safari

        success = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch (fallbackErr) {
        console.error("document.execCommand fallback failed:", fallbackErr);
      }
    }

    if (success) {
      setCopyStatus(dua.id);
      setToastMessage(`"${dua.title}" copied to clipboard!`);
      setTimeout(() => setCopyStatus(null), 2500);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  // Web Speech Pronunciation for Arabic Supplications
  const speakDua = (dua: Dua) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    if (speakingDuaId === dua.id) {
      window.speechSynthesis.cancel();
      setSpeakingDuaId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(dua.arabic);
    utterance.lang = "ar-SA";
    utterance.rate = 0.85;

    utterance.onend = () => setSpeakingDuaId(null);
    utterance.onerror = () => setSpeakingDuaId(null);

    setSpeakingDuaId(dua.id);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
            {filteredDuas.length} Supplications Available
          </span>
        </div>

        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 text-center">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            Daily <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">Duas & Azkar</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal mt-2 leading-relaxed">
            Authentic supplications from the Holy Quran and Sunnah with Arabic audio pronunciation, Urdu tarjuma, and English meaning.
          </p>

          {/* Underline Search Bar */}
          <div className="relative max-w-xl mx-auto my-6 sm:my-8">
            <div className="relative flex items-center border-b border-slate-300 dark:border-neutral-700 focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC] pb-2 transition-colors">
              <Search className="w-5 h-5 text-slate-400 shrink-0 ml-1" />
              <input
                type="text"
                placeholder="Search Dua (e.g. forgiveness, anxiety, protection)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-3 pr-8 bg-transparent border-none rounded-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs px-2 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-8 justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#155DFC] text-white"
                  : "bg-white dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200/80 dark:border-white/[0.08] hover:bg-slate-100 dark:hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Duas List */}
        <div className="space-y-4 sm:space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredDuas.map((dua: Dua) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={`dua-${dua.id}`}
                className="relative p-6 sm:p-8 rounded-[2.2rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] transition-all"
              >
                {/* Dua Header */}
                <div className="flex items-center justify-between mb-5 pb-3.5 border-b border-slate-200/80 dark:border-white/[0.08] gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[#155DFC] flex items-center justify-center shrink-0">
                      <BookOpen size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                        {dua.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#155DFC] block">
                        {dua.category}
                      </span>
                    </div>
                  </div>

                  {/* Actions (Audio & Copy) */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <button
                      onClick={() => speakDua(dua)}
                      title="Listen Arabic Recitation"
                      aria-label={speakingDuaId === dua.id ? `Stop recitation for ${dua.title}` : `Listen to Arabic recitation for ${dua.title}`}
                      className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                        speakingDuaId === dua.id
                          ? "bg-[#155DFC] border-[#155DFC] text-white"
                          : "bg-slate-100 dark:bg-white/[0.05] border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-neutral-300 hover:text-[#155DFC]"
                      }`}
                    >
                      {speakingDuaId === dua.id ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    </button>

                    <button
                      onClick={() => copyToClipboard(dua)}
                      title="Copy Dua Text"
                      aria-label={`Copy ${dua.title}`}
                      className={`h-9 sm:h-9.5 px-3 sm:px-3.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 text-xs font-semibold select-none ${
                        copyStatus === dua.id
                          ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-white/[0.05] border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] hover:border-[#155DFC]/40"
                      }`}
                    >
                      {copyStatus === dua.id ? (
                        <>
                          <CheckCircle2 size={14} className="text-white shrink-0" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} className="shrink-0" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Arabic Text (Fully selectable on mobile) */}
                <div className="text-center my-6 sm:my-8 px-2 select-text">
                  <p
                    lang="ar"
                    dir="rtl"
                    className="font-arabic text-2xl sm:text-3xl md:text-4xl leading-loose text-slate-900 dark:text-white select-text selection:bg-[#155DFC]/30"
                  >
                    {dua.arabic}
                  </p>
                </div>

                {/* Urdu Translation */}
                <div className="text-right mb-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] select-text">
                  <span className="text-[11px] font-bold text-[#155DFC] block mb-1 select-none">
                    اردو ترجمہ
                  </span>
                  <p
                    lang="ur"
                    dir="rtl"
                    className="font-urdu text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-neutral-200 select-text selection:bg-[#155DFC]/30"
                  >
                    {dua.urdu}
                  </p>
                </div>

                {/* English Meaning */}
                <div className="mb-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] select-text">
                  <span className="text-[11px] font-bold text-[#155DFC] block mb-1 select-none">
                    English Meaning
                  </span>
                  <p
                    lang="en"
                    dir="ltr"
                    className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed select-text selection:bg-[#155DFC]/30"
                  >
                    &quot;{dua.english}&quot;
                  </p>
                </div>

                {/* Reference */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.08] text-center">
                  <span className="inline-block text-[10px] font-semibold text-slate-500 dark:text-neutral-400 px-4 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10">
                    Reference: {dua.ref}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Floating Copy Feedback Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-emerald-500/50 backdrop-blur-xl whitespace-nowrap"
            >
              <CheckCircle2 size={15} className="text-white shrink-0" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}