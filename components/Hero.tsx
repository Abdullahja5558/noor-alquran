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

const DEFAULT_AYAH: AyahData = {
  arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالأَرْضِ وَاخْتِلافِ اللَّيْلِ وَالنَّهَارِ لآيَاتٍ لِّأُولِي الأَلْبَابِ",
  english: "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding.",
  urdu: "بے شک آسمانوں اور زمین کی پیدائش اور رات اور دن کے باری باری آنے جانے میں عقل والوں کے لیے نشانیاں ہیں",
  surahName: "Aal-e-Imran",
  surahNumber: 3,
  ayahNumber: 190,
  timestamp: 0,
};

// Top searched Surahs on Google worldwide
const POPULAR_SURAHS = [
  { number: 36, name: "Yaseen", urdu: "سورۃ یٰس", link: "/quran/36" },
  { number: 67, name: "Al-Mulk", urdu: "سورۃ الملک", link: "/quran/67" },
  { number: 55, name: "Ar-Rahman", urdu: "سورۃ الرحمن", link: "/quran/55" },
  { number: 2, name: "Al-Baqarah", urdu: "سورۃ البقرۃ", link: "/quran/2" },
  { number: 18, name: "Al-Kahf", urdu: "سورۃ الکہف", link: "/quran/18" },
  { number: 56, name: "Al-Waqi'ah", urdu: "سورۃ الواقعہ", link: "/quran/56" },
];

export default function UltimatePremiumHero() {
  const [ayah, setAyah] = useState<AyahData>(DEFAULT_AYAH);
  const [loading, setLoading] = useState(false);
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

        if (typeof window !== "undefined") {
          try {
            localStorage.setItem("divine_ayah", JSON.stringify(newAyah));
          } catch {}
        }
        setAyah(newAyah);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Hydrate cached ayah if available without delaying initial paint
  useEffect(() => {
    if (typeof window === "undefined") return;
    const cached = localStorage.getItem("divine_ayah");
    if (cached) {
      try {
        const parsed: AyahData = JSON.parse(cached);
        const oneDay = 24 * 60 * 60 * 1000;
        if (Date.now() - parsed.timestamp <= oneDay) {
          setAyah(parsed);
        }
      } catch {
        // Keep default ayah
      }
    }
  }, []);

  const getShareText = () => {
    if (!ayah) return "";
    return `✨ Ayah of the Day ✨\n\n📖 Arabic:\n${ayah.arabic}\n\n📝 English:\n${ayah.english}\n\n🖋️ Urdu:\n${ayah.urdu}\n\n📍 Surah ${ayah.surahName} (${ayah.surahNumber}:${ayah.ayahNumber})\n\nExplore at Noor Al-Quran`;
  };

  const handleCopy = async () => {
    const shareText = getShareText();
    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch {
        // Fallback below
      }
    }
    
    try {
      const textArea = document.createElement("textarea");
      textArea.value = shareText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn("Copy failed", e);
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
    <div className="relative min-h-[90vh] flex flex-col items-center pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 mb-6 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-blue-700 dark:text-blue-300 shadow-sm">
          <Sparkles size={13} className="text-blue-500 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.2em] sm:tracking-[0.25em] uppercase">
            The Light of Guidance in Your Pocket • نور القرآن
          </span>
        </div>

        {/* Main Title - Immediate Semantic H1 for SEO & Instant Paint */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.08] sm:leading-[1.02] text-slate-900 dark:text-white">
          Read Holy Quran & <br />
          <span className="text-blue-600 dark:text-blue-400 italic font-serif">
            Daily Prayer Guidance
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
          Explore all 114 Quran Surahs with authentic audio recitations, Urdu translation (قرآن مجید اردو ترجمہ), daily Islamic duas, and accurate namaz prayer times.
        </p>

        {/* Ayah Card Section - Zero-CLS Stable Dimensions */}
        <div ref={ayahRef} className="relative mt-8 sm:mt-12 mb-6 sm:mb-8 group min-h-[320px] flex items-center justify-center">
          {/* Top Floating Badge */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-slate-900 dark:text-white shadow-lg">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] whitespace-nowrap text-blue-700 dark:text-blue-300">
                Ayah of the Day
              </span>
            </div>
          </div>

          {/* Ayah Card with Crisp Border & Immediate SSR Content for <1s LCP */}
          <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 lg:p-16 shadow-2xl overflow-hidden bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b]">
            <div className={`${loading ? "opacity-40" : "opacity-100"} transition-opacity duration-300`}>
              <div className="flex justify-center mb-6 sm:mb-8">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-widest uppercase bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-blue-700 dark:text-blue-400">
                  Surah {ayah.surahName} • {ayah.surahNumber}:{ayah.ayahNumber}
                </span>
              </div>

              {/* Arabic Ayah - Pre-rendered for Instant Paint */}
              <h2 className="font-arabic text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center leading-[2] sm:leading-loose text-slate-900 dark:text-white">
                {ayah.arabic}
              </h2>

              {/* English & Urdu Translations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left border-t border-slate-200 dark:border-[#141c2b] pt-8 sm:pt-10">
                <div className="space-y-2 sm:space-y-3">
                  <span className="text-[9.5px] sm:text-[10px] tracking-widest uppercase text-blue-600 dark:text-blue-400 font-black">
                    English Interpretation
                  </span>
                  <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed italic text-slate-700 dark:text-slate-300">
                    &quot;{ayah.english}&quot;
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3 text-right">
                  <span className="text-[9.5px] sm:text-[10px] tracking-widest uppercase text-blue-600 dark:text-blue-400 font-black">
                    اردو ترجمہ
                  </span>
                  <p className="font-urdu text-lg sm:text-xl md:text-2xl leading-loose text-slate-800 dark:text-slate-200">
                    {ayah.urdu}
                  </p>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between border-t border-slate-200 dark:border-[#141c2b] pt-5 sm:pt-6 gap-3 sm:gap-4">
                <div className="flex gap-3 sm:gap-4">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 sm:py-2 cursor-pointer active:scale-95"
                  >
                    <Share2 size={14} />
                    <span>Share</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 sm:py-2 cursor-pointer active:scale-95"
                  >
                    {copied ? <Check size={14} className="text-blue-500" /> : <Copy size={14} />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                <Link
                  href={`/quran/${ayah.surahNumber}`}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-sm"
                >
                  <BookOpen size={13} />
                  <span>Read Full Surah</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
          <button
            onClick={fetchAyah}
            disabled={loading}
            className="w-full sm:w-auto group flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30 active:scale-95 disabled:opacity-60 cursor-pointer"
          >
            <RefreshCw size={15} className={`${loading ? "animate-spin" : "group-hover:rotate-180"} transition-transform duration-500`} />
            <span>{loading ? "Seeking Wisdom..." : "New Ayah"}</span>
          </button>

          <Link
            href="/quran"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-slate-900 dark:text-white hover:border-blue-500/60 transition-all duration-300 shadow-sm active:scale-95"
          >
            <span>Explore All 114 Surahs</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* High-Intent Quran Search Links - Direct Mobile SEO Boost */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-[#141c2b]/80">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 sm:mb-4">
            Frequently Read Surahs • اکثر پڑھی جانے والی سورتیں
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {POPULAR_SURAHS.map((s) => (
              <Link
                key={s.number}
                href={s.link}
                className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm active:scale-95"
              >
                <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center">
                  {s.number}
                </span>
                <span className="font-semibold">{s.name}</span>
                <span className="font-arabic text-sm opacity-80">{s.urdu}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}