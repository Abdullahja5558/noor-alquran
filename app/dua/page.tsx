"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Search,
  Heart,
  Copy,
  BookOpen,
  Sparkles,
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

  const copyToClipboard = (dua: Dua) => {
    const fullText = `🤲 ${dua.title}\n\n${dua.arabic}\n\nاردو: ${dua.urdu}\n\nEnglish: ${dua.english}\n\nRef: ${dua.ref}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText).then(() => {
        setCopyStatus(dua.id);
        setTimeout(() => setCopyStatus(null), 2000);
      });
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

  return  (
    <div className="min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden pb-24">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
            <Heart size={13} />
            <span>Al-Munajat</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 shadow-sm">
            <Sparkles size={12} />
            <span>Sacred Supplications</span>
          </div>

          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tight mb-3 sm:mb-4 text-slate-900 dark:text-white">
            Ask & <span className="text-blue-600 dark:text-blue-400 italic font-serif">Receive.</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light mb-6 sm:mb-8">
            Authentic Duas from the Holy Quran and Sahih Sunnah with Arabic text, Urdu tarjuma, and English meaning.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              type="text"
              placeholder="Search Dua (e.g. forgiveness, anxiety, protection)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full py-3.5 sm:py-4 pl-12 sm:pl-14 pr-6 sm:pr-8 outline-none transition-all text-xs md:text-sm bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-slate-900 dark:text-white focus:border-blue-500 shadow-sm"
            />
          </div>
        </section>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 sm:pb-6 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                  : "bg-white dark:bg-[#07090e] border-slate-200 dark:border-[#141c2b] text-slate-600 dark:text-slate-400 hover:border-blue-500/50 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Duas List */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredDuas.map((dua: Dua) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={`dua-${dua.id}`}
                className="relative p-6 sm:p-8 md:p-12 rounded-[1.8rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm transition-all duration-300 hover:border-blue-500/60"
              >
                {/* Dua Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200 dark:border-[#141c2b] gap-2">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm shrink-0">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white truncate">
                        {dua.title}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 truncate block">
                        {dua.category}
                      </span>
                    </div>
                  </div>

                  {/* Actions (Audio & Copy) */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <button
                      onClick={() => speakDua(dua)}
                      title="Listen Arabic Recitation"
                      className={`p-2 sm:p-3 rounded-2xl border transition-all ${
                        speakingDuaId === dua.id
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-slate-50 dark:bg-[#0c111a] border-slate-200 dark:border-[#1a2538] text-slate-600 dark:text-slate-300 hover:text-blue-500"
                      }`}
                    >
                      {speakingDuaId === dua.id ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    <button
                      onClick={() => copyToClipboard(dua)}
                      title="Copy Dua Text"
                      className="p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-all cursor-pointer active:scale-90"
                    >
                      {copyStatus === dua.id ? (
                        <CheckCircle2 size={16} className="text-blue-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Arabic Text */}
                <div className="text-center mb-6 sm:mb-8">
                  <p className="font-arabic text-2xl sm:text-4xl md:text-5xl leading-loose text-slate-900 dark:text-white">
                    {dua.arabic}
                  </p>
                </div>

                <div className="w-20 sm:w-24 h-px bg-slate-200 dark:border-[#141c2b] mx-auto mb-6 sm:mb-8" />

                {/* Urdu Translation */}
                <div className="text-right mb-4 sm:mb-6">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                    اردو ترجمہ
                  </span>
                  <p className="font-urdu text-lg sm:text-2xl md:text-3xl leading-relaxed text-slate-800 dark:text-slate-200">
                    {dua.urdu}
                  </p>
                </div>

                {/* English Meaning */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                    English Meaning
                  </span>
                  <p className="text-xs sm:text-sm md:text-base italic text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                    &quot;{dua.english}&quot;
                  </p>
                </div>

                {/* Reference */}
                <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-[#141c2b] text-center">
                  <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 px-4 sm:px-5 py-1.5 rounded-full bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538]">
                    Reference: {dua.ref}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}