"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function QuranPage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"ALL" | "Meccan" | "Medinan">("ALL");
  const [navigatingId, setNavigatingId] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setSurahs(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load surahs", err);
        setLoading(false);
      });
  }, []);

  const filteredSurahs = surahs.filter((s) => {
    const matchesSearch =
      s.englishName.toLowerCase().includes(search.toLowerCase()) ||
      s.name.includes(search) ||
      s.englishNameTranslation.toLowerCase().includes(search.toLowerCase()) ||
      s.number.toString() === search.trim();

    const matchesFilter =
      filterType === "ALL" || s.revelationType.toLowerCase() === filterType.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] mb-6 sm:mb-8 transition-colors active:scale-95"
          >
            <ArrowLeft size={14} />
            <span>Return Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div>
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                The Noble <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">Quran 114</span>
              </h1>
              <p className="mt-2.5 max-w-xl text-xs sm:text-sm md:text-base text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
                Explore all 114 Surahs with authentic Arabic scripture, verse-by-verse recitation audio, and Urdu/English translations.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
              <div className="relative w-full sm:w-72">
                <div className="relative flex items-center border-b border-slate-300 dark:border-neutral-700 focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC] pb-1.5 transition-colors">
                  <Search className="w-4 h-4 text-slate-400 shrink-0 ml-0.5" />
                  <input
                    type="text"
                    placeholder="Search Surah (e.g. Yaseen, 36)..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-3 pr-8 bg-transparent border-none rounded-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs px-1 cursor-pointer"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Type Filter Pill */}
              <div className="flex items-center justify-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] self-start sm:self-auto w-full sm:w-auto">
                {(["ALL", "Meccan", "Medinan"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`flex-1 sm:flex-none px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-center ${
                      filterType === type
                        ? "bg-[#155DFC] text-white shadow-sm"
                        : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Surahs Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-20 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06] animate-pulse" />
            ))}
          </div>
        ) : filteredSurahs.length === 0 ? (
          <div className="p-12 sm:p-16 text-center rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08]">
            <BookOpen size={40} className="mx-auto text-slate-400 mb-3" />
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">No Surah Found</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400">Try searching with a different Surah name or number.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
            {filteredSurahs.map((surah) => {
              const isOpening = navigatingId === surah.number;

              return (
                <div key={surah.number}>
                  <Link
                    href={`/quran/${surah.number}`}
                    onClick={() => setNavigatingId(surah.number)}
                    className={`flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white dark:bg-[#070709] border transition-all duration-200 group ${
                      isOpening
                        ? "border-[#155DFC] ring-2 ring-[#155DFC]/30 bg-[#155DFC]/[0.04]"
                        : "border-slate-200/80 dark:border-white/[0.08] hover:border-[#155DFC]/60 dark:hover:border-[#155DFC]/60 hover:bg-slate-50/70 dark:hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                      {/* Number Badge or Spinner when opening */}
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                          isOpening
                            ? "bg-[#155DFC] text-white"
                            : "bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 group-hover:text-[#155DFC] group-hover:border-[#155DFC]/40"
                        }`}
                      >
                        {isOpening ? (
                          <span className="inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          surah.number
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#155DFC] transition-colors truncate">
                          {surah.englishName}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-slate-500 dark:text-neutral-400 truncate mt-0.5 font-medium">
                          {surah.revelationType} • {surah.numberOfAyahs} Verses
                          {isOpening && (
                            <span className="text-[#155DFC] font-semibold ml-1">
                              • Loading...
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 pl-3">
                      <h4 className="font-arabic text-lg sm:text-xl text-slate-900 dark:text-neutral-100 group-hover:text-[#155DFC] transition-colors">
                        {surah.name}
                      </h4>
                      <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-medium truncate">
                        {surah.englishNameTranslation}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}