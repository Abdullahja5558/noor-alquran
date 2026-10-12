"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  ArrowDown, 
  Search, 
  X, 
  ChevronDown 
} from "lucide-react";
import { ALL_SURAHS_META, SurahStaticMeta } from "@/components/surahMeta";

const INITIAL_COUNT = 10;

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Filter Surahs based on search query
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

  // Determine which Surahs to display
  const displayedSurahs = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredSurahs;
    }
    return showAll ? filteredSurahs : filteredSurahs.slice(0, INITIAL_COUNT);
  }, [filteredSurahs, showAll, searchQuery]);

  return (
    <div className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* --- HERO HEADER --- */}
      <div className="text-center max-w-6xl mx-auto">
        {/* Strictly 2-Line Desktop Heading with Bricolage Grotesque font */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] sm:leading-[1.16] max-w-6xl mx-auto">
          <span className="block whitespace-normal md:whitespace-nowrap">
            Read, Listen & Explore the Holy Quran
          </span>
          <span className="block mt-2 sm:mt-3">
            with{" "}
            <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl">
              Divine Guidance
            </span>
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Access all 114 Surahs with authentic Urdu and English translations, crystal-clear MP3 recitations, and verse-by-verse spiritual reflection.
        </p>

        {/* Action Buttons (Flat, No Glow, No Heavy Colored Shadow) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
          <Link
            href="/quran/1"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm bg-[#155DFC] text-white hover:bg-[#124bc9] transition-colors active:scale-98"
          >
            <BookOpen size={16} />
            <span>Start Reading (Surah Al-Fatihah)</span>
          </Link>

          <a
            href="#surah-explorer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm border border-slate-300 dark:border-neutral-800 text-slate-800 dark:text-neutral-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors active:scale-98"
          >
            <span>Browse 114 Surahs</span>
            <ArrowDown size={15} />
          </a>
        </div>
      </div>

      {/* --- 114 SURAHS EXPLORER SECTION --- */}
      <div id="surah-explorer" className="mt-16 sm:mt-20 scroll-mt-24">
        {/* Search Header Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
              <span>All 114 Surahs</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-neutral-300">
                {filteredSurahs.length}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-0.5">
              Select any Surah to read the Uthmani script with translations and audio.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80 md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Surah (e.g. Yasin, 36, Rahman)..."
              className="w-full pl-10 pr-9 py-3 rounded-full text-xs sm:text-sm bg-slate-100 dark:bg-white/[0.06] border-none outline-none ring-0 focus:ring-0 focus:outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* 3-Column Surahs Grid matching User Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {displayedSurahs.map((surah: SurahStaticMeta) => {
            const arabicTitle = surah.name.startsWith("سورة") || surah.name.startsWith("سُورَة")
              ? surah.name
              : `سُورَةُ ${surah.name}`;

            return (
              <Link
                key={surah.number}
                href={`/quran/${surah.number}`}
                className="group relative overflow-hidden p-3.5 sm:p-4 rounded-2xl sm:rounded-[1.4rem] bg-white dark:bg-black border border-slate-200/90 dark:border-white/10 hover:border-slate-400 dark:hover:border-neutral-600 transition-colors flex items-center justify-between"
              >
                {/* Left side: Number badge + Surah English Name & Verses */}
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

                {/* Right side: Arabic Name + English Meaning uppercase */}
                <div className="flex flex-col items-end shrink-0 pl-2 z-10">
                  <span className="font-arabic text-base sm:text-lg font-bold text-slate-900 dark:text-white text-right leading-tight">
                    {arabicTitle}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 dark:text-neutral-500 font-semibold mt-0.5 text-right truncate max-w-[120px]">
                    {surah.englishNameTranslation}
                  </span>
                </div>

                {/* Faint corner number watermark matching Screenshot 2 */}
                <span className="absolute right-2 -bottom-2 text-3xl sm:text-4xl font-black text-slate-100 dark:text-neutral-900/60 pointer-events-none select-none z-0">
                  {surah.number}
                </span>
              </Link>
            );
          })}
        </div>

        {/* No Results Empty State */}
        {displayedSurahs.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-white/10">
            <p className="text-slate-500 dark:text-neutral-400 text-sm">
              No Surah found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs font-semibold text-[#155DFC] hover:underline"
            >
              Reset search
            </button>
          </div>
        )}

        {/* View More Button (Shown when not searching) */}
        {!searchQuery.trim() && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-neutral-900 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-colors active:scale-98 cursor-pointer"
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
          </div>
        )}
      </div>
    </div>
  );
}