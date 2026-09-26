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
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 mb-6 sm:mb-8 transition-colors active:scale-95 shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Return Home</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4">
                <Sparkles size={12} />
                <span>Holy Scripture</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
                Al-Quran <span className="font-arabic text-emerald-500 text-2xl sm:text-4xl md:text-5xl ml-2 font-normal">الكريم</span>
              </h1>
              <p className="mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">
                Explore all 114 Surahs with authentic text, verse-by-verse recitation audio, and English/Urdu translations.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
                <input
                  type="text"
                  placeholder="Search Surah (e.g. Yaseen, 36)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-2xl py-3 sm:py-3.5 pl-11 pr-4 outline-none transition-all text-xs md:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-emerald-500 shadow-sm"
                />
              </div>

              {/* Type Filter Pill */}
              <div className="flex items-center justify-center gap-1 p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm self-start sm:self-auto w-full sm:w-auto">
                {(["ALL", "Meccan", "Medinan"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`flex-1 sm:flex-none px-3.5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer text-center ${
                      filterType === type
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                        : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-28 sm:h-32 rounded-[1.8rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 animate-pulse" />
            ))}
          </div>
        ) : filteredSurahs.length === 0 ? (
          <div className="p-12 sm:p-16 text-center rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <BookOpen size={44} className="mx-auto text-emerald-500/40 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">No Surah Found</h3>
            <p className="text-xs sm:text-sm text-slate-500">Try searching with a different Surah name or number.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSurahs.map((surah) => (
              <motion.div
                key={surah.number}
                layout
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={`/quran/${surah.number}`}
                  className="block relative p-5 sm:p-6 rounded-[1.8rem] sm:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/70 dark:hover:border-emerald-500/70 transition-all duration-200 group shadow-sm hover:shadow-md overflow-hidden"
                >
                  {/* Surah Number Background Watermark */}
                  <span className="absolute -right-2 -bottom-4 text-6xl sm:text-7xl font-black text-slate-100 dark:text-slate-800/40 select-none pointer-events-none group-hover:scale-105 transition-transform">
                    {surah.number}
                  </span>

                  <div className="flex items-center justify-between relative z-10 gap-3">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      {/* Number Badge with Crisp Border */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shadow-sm shrink-0">
                        {surah.number}
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                          {surah.englishName}
                        </h3>
                        <p className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 sm:gap-1.5 truncate">
                          <span>{surah.revelationType}</span>
                          <span>•</span>
                          <span>{surah.numberOfAyahs} Verses</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <h4 className="font-arabic text-xl sm:text-2xl text-slate-900 dark:text-emerald-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                        {surah.name}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {surah.englishNameTranslation}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}