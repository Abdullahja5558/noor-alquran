"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, BookOpen, Share2, Copy, Check, Loader2, Star, RefreshCw } from "lucide-react";
import Link from "next/link";

interface AyahData {
  arabic: string;
  english: string;
  urdu: string;
  surahName: string;
  surahNumber: number;
  ayahNumber: number;
  timestamp: number;
}

export default function UltimatePremiumHero() {
  const [ayah, setAyah] = useState<AyahData | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const ayahRef = useRef<HTMLDivElement>(null);

  const fetchAyah = useCallback(async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 6236) + 1;
      const res = await fetch(
        `https://api.alquran.cloud/v1/ayah/${randomId}/editions/quran-uthmani,en.asad,ur.jalandhry`
      );
      const data = await res.json();

      if (data.data && data.data.length >= 3) {
        const newAyah: AyahData = {
          arabic: data.data[0].text,
          english: data.data[1].text,
          urdu: data.data[2].text,
          surahName: data.data[0].surah.englishName,
          surahNumber: data.data[0].surah.number,
          ayahNumber: data.data[0].numberInSurah,
          timestamp: Date.now(),
        };

        localStorage.setItem("divine_ayah", JSON.stringify(newAyah));
        setAyah(newAyah);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cached = localStorage.getItem("divine_ayah");
    if (cached) {
      try {
        const parsed: AyahData = JSON.parse(cached);
        const oneDay = 24 * 60 * 60 * 1000;
        if (Date.now() - parsed.timestamp > oneDay) {
          fetchAyah();
        } else {
          setAyah(parsed);
          setLoading(false);
        }
      } catch {
        fetchAyah();
      }
    } else {
      fetchAyah();
    }
  }, [fetchAyah]);

  const getShareText = () => {
    if (!ayah) return "";
    return `✨ Ayah of the Day ✨\n\n📖 Arabic:\n${ayah.arabic}\n\n📝 English:\n${ayah.english}\n\n🖋️ Urdu:\n${ayah.urdu}\n\n📍 Surah ${ayah.surahName} (${ayah.surahNumber}:${ayah.ayahNumber})\n\nExplore at Noor Al-Quran`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = getShareText();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const text = getShareText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Ayah from Surah ${ayah?.surahName}`,
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share skipped or failed", err);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 mb-6 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-300 shadow-sm"
        >
          <Sparkles size={13} className="text-emerald-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            The Light of Guidance in Your Pocket
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 sm:mb-8 leading-[1.08] sm:leading-[1.02] text-slate-900 dark:text-white"
        >
          Experience the <br />
          <span className="text-emerald-600 dark:text-emerald-400 italic font-serif">
            Divine Beauty
          </span>
        </motion.h1>

        {/* Ayah Card Section */}
        <div ref={ayahRef} className="relative mt-8 sm:mt-12 mb-6 sm:mb-8 group min-h-[340px] sm:min-h-[380px] flex items-center justify-center">
          {/* Top Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-lg">
              <Star size={13} className="text-amber-400 fill-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] whitespace-nowrap text-emerald-700 dark:text-emerald-300">
                Ayah of the Day
              </span>
            </div>
          </motion.div>

          {/* Ayah Card with Crisp Border */}
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 lg:p-16 shadow-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
                >
                  <Loader2 className="text-emerald-500 animate-spin mb-3" size={32} />
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-400 font-bold">
                    Fetching Wisdom...
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className={`${loading ? "opacity-20 blur-sm" : "opacity-100 blur-0"} transition-all duration-300`}>
              {ayah && (
                <>
                  <div className="flex justify-center mb-6 sm:mb-8">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-400">
                      Surah {ayah.surahName} • {ayah.surahNumber}:{ayah.ayahNumber}
                    </span>
                  </div>

                  {/* Arabic Ayah */}
                  <h2 className="font-arabic text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center leading-[2] sm:leading-loose text-slate-900 dark:text-emerald-50">
                    {ayah.arabic}
                  </h2>

                  {/* English & Urdu Translations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left border-t border-slate-200 dark:border-slate-800 pt-8 sm:pt-10">
                    <div className="space-y-2 sm:space-y-3">
                      <span className="text-[9.5px] sm:text-[10px] tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-black">
                        English Interpretation
                      </span>
                      <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed italic text-slate-700 dark:text-slate-300">
                        &quot;{ayah.english}&quot;
                      </p>
                    </div>

                    <div className="space-y-2 sm:space-y-3 text-right">
                      <span className="text-[9.5px] sm:text-[10px] tracking-widest uppercase text-emerald-600 dark:text-emerald-400 font-black">
                        اردو ترجمہ
                      </span>
                      <p className="font-urdu text-lg sm:text-xl md:text-2xl leading-loose text-slate-800 dark:text-slate-200">
                        {ayah.urdu}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-5 sm:pt-6 gap-3 sm:gap-4">
                    <div className="flex gap-3 sm:gap-4">
                      <button
                        onClick={handleShare}
                        className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1.5 sm:py-2 cursor-pointer active:scale-95"
                      >
                        <Share2 size={14} />
                        <span>Share</span>
                      </button>

                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-1.5 sm:py-2 cursor-pointer active:scale-95"
                      >
                        {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        <span>{copied ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>

                    <Link
                      href={`/quran/${ayah.surahNumber}`}
                      className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                    >
                      <BookOpen size={13} />
                      <span>Read Full Surah</span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
        >
          <button
            onClick={fetchAyah}
            disabled={loading}
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/30 active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw size={15} className={`${loading ? "animate-spin" : "group-hover:rotate-180"} transition-transform duration-500`} />
            <span>{loading ? "Seeking Wisdom..." : "New Ayah"}</span>
          </button>

          <Link
            href="/quran"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-emerald-500/60 transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Explore All Surahs</span>
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}