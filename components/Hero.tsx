"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ArrowDown, 
  ArrowRight, 
  Search, 
  X, 
  ChevronDown 
} from "lucide-react";
import { ALL_SURAHS_META, SurahStaticMeta } from "@/components/surahMeta";

const INITIAL_COUNT = 10;

function getDynamicListenersCount(): string {
  const START_DATE = new Date("2026-10-01T00:00:00Z").getTime();
  const BASE_COUNT = 2.6;
  const now = Date.now();
  const elapsedDays = Math.max(0, Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24)));

  let currentCount = BASE_COUNT;
  let remainingDays = elapsedDays;
  let seed = 42;

  while (remainingDays > 0) {
    seed = (seed * 9301 + 49297) % 233280;
    const intervalDays = 14 + (seed % 17);
    if (remainingDays >= intervalDays) {
      currentCount = Math.round((currentCount + 0.1) * 10) / 10;
      remainingDays -= intervalDays;
    } else {
      break;
    }
  }

  return `${currentCount.toFixed(1)}M+`;
}

function TrustBadge({ isMobile }: { isMobile: boolean }) {
  const [listenerCount, setListenerCount] = useState("2.6M+");

  useEffect(() => {
    setListenerCount(getDynamicListenersCount());
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: isMobile ? 0.35 : 0.65, 
        delay: 0, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="mb-4 sm:mb-6 inline-flex items-center gap-2 sm:gap-3 select-none"
    >
      <div className="relative w-7 h-10 sm:w-9 sm:h-12 md:w-10 md:h-14 shrink-0">
        <Image
          src="/weather-L.png"
          alt="Laurel Left"
          fill
          sizes="40px"
          className="object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
          priority
        />
      </div>

      <p className="text-xs sm:text-sm md:text-base font-medium tracking-tight text-slate-800 dark:text-neutral-200 whitespace-nowrap">
        Trusted by{" "}
        <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white font-bold px-2 sm:px-2.5 py-0.5 rounded-lg shadow-sm mx-1">
          {listenerCount}
        </span>{" "}
        Quran listeners worldwide
      </p>

      <div className="relative w-7 h-10 sm:w-9 sm:h-12 md:w-10 md:h-14 shrink-0">
        <Image
          src="/weather-R.png"
          alt="Laurel Right"
          fill
          sizes="40px"
          className="object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]"
          priority
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredSurahs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ALL_SURAHS_META;

    return ALL_SURAHS_META.filter((surah) => {
      const matchName = surah.englishName.toLowerCase().includes(q);
      const matchArabic = surah.name.includes(q);
      const matchTranslation = surah.englishNameTranslation.toLowerCase().includes(q);
      const matchNumber = surah.number.toString() === q;

      return matchName || matchArabic || matchTranslation || matchNumber;
    });
  }, [searchQuery]);

  const displayedSurahs = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredSurahs;
    }
    return showAll ? filteredSurahs : filteredSurahs.slice(0, INITIAL_COUNT);
  }, [filteredSurahs, showAll, searchQuery]);

  return (
    <div className="relative w-full">
      {/* 100vh Hero Section */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 pt-14 sm:pt-16 pb-20 sm:pb-24 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/bg-hero-light.png"
            alt="Hero background light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center dark:hidden"
          />

          <Image
            src="/bg-hero-dark.png"
            alt="Hero background dark"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hidden dark:block"
          />

          <div className="absolute inset-0 bg-white/25 dark:bg-black/35 backdrop-blur-[0.5px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 sm:h-64 md:h-80 bg-gradient-to-t from-[#f8fafc] dark:from-[#000000] via-[#f8fafc]/80 dark:via-[#000000]/85 to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center -mt-6 sm:-mt-8 md:mt-2 lg:mt-3">
          <TrustBadge isMobile={isMobile} />

          {/* Heading: Snappy on mobile, gentle on desktop */}
          <motion.h1 
            initial={{ opacity: 0, y: isMobile ? 8 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.38 : 0.75, 
              delay: isMobile ? 0.05 : 0.1, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.22] sm:leading-[1.16] max-w-5xl mx-auto drop-shadow-sm text-balance"
          >
            <span className="block md:whitespace-nowrap">
              Read, Listen & Explore the Holy Quran
            </span>
            <span className="block mt-2 sm:mt-3">
              with{" "}
              <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3 sm:px-5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl shadow-sm">
                Divine Guidance
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: isMobile ? 6 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.38 : 0.75, 
              delay: isMobile ? 0.1 : 0.2, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-slate-700 dark:text-neutral-200 max-w-xl md:max-w-2xl mx-auto font-normal leading-relaxed px-2 drop-shadow-sm"
          >
            Access all 114 Surahs with authentic Urdu and English translations, crystal-clear MP3 recitations, and verse-by-verse spiritual reflection.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: isMobile ? 6 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: isMobile ? 0.35 : 0.7, 
              delay: isMobile ? 0.14 : 0.28, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0 max-w-md sm:max-w-none"
          >
            <Link
              href="/quran/1"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm bg-[#155DFC] text-white hover:bg-[#124bc9] shadow-lg shadow-blue-500/20 transition-all active:scale-98"
            >
              <BookOpen size={16} />
              <span>Start Reading (Surah Al-Fatihah)</span>
            </Link>

            <a
              href="#surah-explorer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm bg-white/80 dark:bg-black/40 hover:bg-white dark:hover:bg-white/10 backdrop-blur-md border border-slate-300 dark:border-white/20 text-slate-800 dark:text-neutral-100 hover:text-slate-950 dark:hover:text-white transition-all active:scale-98 shadow-sm"
            >
              <span>Browse 114 Surahs</span>
              <ArrowDown size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 114 Surahs Explorer Section */}
      <section id="surah-explorer" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 pb-20 sm:pb-28 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            All{" "}
            <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1.5 shadow-sm">
              Surah 114
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-2.5 font-normal">
            Select any Surah to read the Uthmani script with translations and audio.
          </p>
        </div>

        {/* Minimal Underline Search Input */}
        <div className="w-full max-w-md mx-auto mb-10 sm:mb-12">
          <div className="relative flex items-center border-b border-slate-300 dark:border-neutral-700 focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC] pb-2 transition-colors">
            <Search className="w-4 h-4 text-slate-400 shrink-0 ml-0.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Surah (e.g. Yasin, 36, Rahman)..."
              className="w-full pl-3 pr-8 bg-transparent border-none rounded-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 transition-colors"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Surahs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-4.5">
          {displayedSurahs.map((surah: SurahStaticMeta) => {
            const arabicTitle = surah.name.startsWith("سورة") || surah.name.startsWith("سُورَة")
              ? surah.name
              : `سُورَةُ ${surah.name}`;

            return (
              <Link
                key={surah.number}
                href={`/quran/${surah.number}`}
                className="group relative overflow-hidden px-4.5 sm:px-5 md:px-6 py-3.5 sm:py-4 rounded-full bg-white dark:bg-black border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-neutral-500 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 z-10">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-[#155DFC] font-bold text-xs flex items-center justify-center shrink-0">
                    {surah.number}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-slate-900 dark:text-white truncate">
                      {surah.englishName}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-neutral-400 truncate mt-0.5">
                      {surah.revelationType} • {surah.numberOfAyahs} Verses
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0 pl-2 z-10">
                  <span className="font-arabic text-base sm:text-lg font-bold text-slate-900 dark:text-white text-right leading-tight">
                    {arabicTitle}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 dark:text-neutral-500 font-semibold mt-0.5 text-right truncate max-w-[120px]">
                    {surah.englishNameTranslation}
                  </span>
                </div>

                <span className="absolute right-4 -bottom-2 text-3xl sm:text-4xl font-black text-slate-100 dark:text-neutral-900/60 pointer-events-none select-none z-0">
                  {surah.number}
                </span>
              </Link>
            );
          })}
        </div>

        {/* No Results Empty State */}
        {displayedSurahs.length === 0 && (
          <div className="py-16 text-center rounded-3xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 max-w-md mx-auto">
            <p className="text-slate-500 dark:text-neutral-400 text-sm">
              No Surah found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-semibold text-[#155DFC] hover:underline cursor-pointer"
            >
              Reset search
            </button>
          </div>
        )}

        {/* View More & Complete Index Buttons */}
        {!searchQuery.trim() && (
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-neutral-900 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-colors active:scale-98 cursor-pointer"
            >
              <span>
                {showAll
                  ? "Show Less (First 10 Surahs)"
                  : `View More Surahs (${ALL_SURAHS_META.length - INITIAL_COUNT} More)`}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
            <Link
              href="/quran"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-[#155DFC] hover:bg-[#124bc9] text-white transition-colors shadow-sm"
            >
              <span>Explore Complete 114 Surah Index</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}