"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Play,
  Search,
  X,
} from "lucide-react";
import { RECITERS_LIST, Reciter } from "./recitersData";

// Popular Surahs for quick listening inside the modal
const POPULAR_SURAHS = [
  { number: 1, englishName: "Al-Fatihah", name: "الفاتحة", numberOfAyahs: 7 },
  { number: 36, englishName: "Yaseen", name: "يس", numberOfAyahs: 83 },
  { number: 55, englishName: "Ar-Rahman", name: "الرحمن", numberOfAyahs: 78 },
  { number: 67, englishName: "Al-Mulk", name: "الملك", numberOfAyahs: 30 },
  { number: 18, englishName: "Al-Kahf", name: "الكهف", numberOfAyahs: 110 },
  { number: 2, englishName: "Al-Baqarah", name: "البقرة", numberOfAyahs: 286 },
  { number: 112, englishName: "Al-Ikhlas", name: "الإخلاص", numberOfAyahs: 4 },
  { number: 114, englishName: "An-Nas", name: "الناس", numberOfAyahs: 6 },
];

export default function RecitersSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedReciterModal, setSelectedReciterModal] = useState<Reciter | null>(null);
  const [surahSearch, setSurahSearch] = useState("");
  const [allSurahs, setAllSurahs] = useState<
    { number: number; name: string; englishName: string; numberOfAyahs: number }[]
  >([]);
  const [loadingSurahs, setLoadingSurahs] = useState(false);

  // Country filter pills (clean names without flag emojis)
  const countries = useMemo(() => {
    return [
      { id: "all", name: "All Reciters" },
      { id: "sa", name: "Saudi Arabia" },
      { id: "eg", name: "Egypt" },
      { id: "kw", name: "Kuwait" },
      { id: "sy", name: "Syria" },
    ];
  }, []);

  // Filter reciters
  const filteredReciters = useMemo(() => {
    return RECITERS_LIST.filter((r) => {
      const matchQuery =
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.arabicName.includes(searchQuery) ||
        r.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.style.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCountry = selectedCountry === "all" || r.countryCode === selectedCountry;

      return matchQuery && matchCountry;
    });
  }, [searchQuery, selectedCountry]);

  // Group by country for organized view
  const groupedByCountry = useMemo(() => {
    const groups: { [key: string]: { country: string; list: Reciter[] } } = {
      kw: { country: "From Kuwait", list: [] },
      eg: { country: "From Egypt", list: [] },
      sa: { country: "From Saudi Arabia", list: [] },
      sy: { country: "From Syria", list: [] },
    };

    filteredReciters.forEach((r) => {
      if (groups[r.countryCode]) {
        groups[r.countryCode].list.push(r);
      }
    });

    return Object.entries(groups).filter(([_, val]) => val.list.length > 0);
  }, [filteredReciters]);

  // Open modal and load 114 Surahs
  const openReciterSurahs = (reciter: Reciter) => {
    setSelectedReciterModal(reciter);
    setSurahSearch("");

    if (allSurahs.length === 0) {
      setLoadingSurahs(true);
      fetch("https://api.alquran.cloud/v1/surah")
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            setAllSurahs(data.data);
          }
        })
        .catch((e) => console.warn("Surah fetch failed", e))
        .finally(() => setLoadingSurahs(false));
    }
  };

  const handlePlaySurah = (surahNumber: number, reciterId: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("noor_selected_reciter", reciterId);
    }
    router.push(`/quran/${surahNumber}?reciter=${reciterId}&autoplay=true`);
  };

  const filteredSurahsInModal = useMemo(() => {
    if (allSurahs.length === 0) return POPULAR_SURAHS;
    return allSurahs.filter(
      (s) =>
        s.englishName.toLowerCase().includes(surahSearch.toLowerCase()) ||
        s.name.includes(surahSearch) ||
        s.number.toString() === surahSearch.trim()
    );
  }, [allSurahs, surahSearch]);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 relative font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- CENTERED SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Listen by Reciter{" "}
            <span className="font-arabic font-normal text-2xl sm:text-4xl text-blue-600 dark:text-blue-400 ml-2">
              القراء
            </span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-xl font-normal leading-relaxed">
            Experience the recitation of all 114 Surahs by the most esteemed and beloved reciters of the Islamic world.
          </p>

          {/* Centered Borderless Search Box */}
          <div className="relative w-full max-w-md mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reciter or city..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-slate-100 dark:bg-white/[0.06] border-none outline-none ring-0 focus:ring-0 focus:outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                aria-label="Clear reciter search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* 
            Horizontal Tab Slider:
            - Exactly 2 full tabs visible + 3rd tab half visible (inviting scroll)
            - Corner shadow/fade gradient on the right
            - No left/right arrow buttons
          */}
          <div className="relative w-full max-w-[280px] sm:max-w-[290px] mx-auto mt-6 pt-1">
            {/* Left subtle shadow (when scrolled) */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-6 z-10 bg-gradient-to-r from-[#f8fafc] dark:from-black to-transparent" />

            {/* Right corner shadow overlaying the half-visible 3rd item */}
            <div className="pointer-events-none absolute right-0 inset-y-0 w-12 sm:w-14 z-10 bg-gradient-to-l from-[#f8fafc] dark:from-black to-transparent" />

            {/* Scrollable Container (Shows 2 full + 3rd half) */}
            <div
              className="overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 px-1 py-1 snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing"
            >
              {countries.map((c) => {
                const isSelected = selectedCountry === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={(e) => {
                      setSelectedCountry(c.id);
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }}
                    className={`shrink-0 snap-center px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#155DFC] text-white"
                        : "bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span>{c.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- GROUPED SECTIONS --- */}
        <div className="space-y-14">
          {groupedByCountry.map(([code, group]) => (
            <div key={code} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-white/10 pb-3.5">
                <h3 className="font-heading text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {group.country}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
                  {group.list.length} {group.list.length === 1 ? "Reciter" : "Reciters"}
                </span>
              </div>

              {/* Reciters Circular Avatars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 pt-2">
                {group.list.map((reciter) => (
                  <motion.div
                    key={reciter.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => openReciterSurahs(reciter)}
                    className="group cursor-pointer flex flex-col items-center text-center select-none"
                  >
                    {/* Clean Circular Avatar */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-slate-100 dark:bg-neutral-900 transition-all duration-300">
                      <Image
                        src={reciter.image}
                        alt={reciter.name}
                        fill
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white flex items-center justify-center">
                          <Play size={17} className="fill-white text-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Centered Name Underneath */}
                    <h4 className="mt-3.5 text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#155DFC] dark:group-hover:text-[#155DFC] transition-colors leading-snug px-1 max-w-[170px]">
                      {reciter.name}
                    </h4>

                    {/* City & Style */}
                    <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500 dark:text-neutral-400 font-medium">
                      {reciter.city}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {groupedByCountry.length === 0 && (
            <div className="text-center py-16">
              <Mic size={40} className="mx-auto text-slate-400 mb-3" />
              <p className="text-slate-500 dark:text-neutral-400 font-medium">
                No reciter found matching &quot;{searchQuery}&quot;.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- SURAH PICKER MODAL (114 SURAHS) --- */}
      <AnimatePresence>
        {selectedReciterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-50 dark:bg-neutral-900 border-b border-slate-200 dark:border-white/10 relative">
                <button
                  onClick={() => setSelectedReciterModal(null)}
                  className="absolute right-4 top-4 w-9 h-9 rounded-full bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-600 dark:text-neutral-300 flex items-center justify-center transition-all"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-4 sm:gap-5 pr-10">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-0.5 bg-white dark:bg-neutral-900 border border-slate-300 dark:border-white/20 shrink-0">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={selectedReciterModal.image}
                        alt={selectedReciterModal.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-600 dark:text-neutral-400 uppercase tracking-wider">
                      {selectedReciterModal.country}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white truncate">
                      {selectedReciterModal.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-arabic text-[#155DFC] mt-0.5">
                      {selectedReciterModal.arabicName} • {selectedReciterModal.city}
                    </p>
                  </div>
                </div>

                {/* Borderless Search Surah inside Modal */}
                <div className="relative mt-4">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={surahSearch}
                    onChange={(e) => setSurahSearch(e.target.value)}
                    placeholder={`Search 114 Surahs for ${selectedReciterModal.name.split(" ")[0]}...`}
                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/[0.06] border-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
                  />
                  {surahSearch && (
                    <button
                      onClick={() => setSurahSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Surahs Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5 custom-scrollbar">
                {loadingSurahs ? (
                  <div className="py-12 text-center text-slate-400 text-sm animate-pulse">
                    Loading Surahs list...
                  </div>
                ) : filteredSurahsInModal.length === 0 ? (
                  <div className="py-10 text-center text-slate-400 text-sm">
                    No Surah found matching &quot;{surahSearch}&quot;.
                  </div>
                ) : (
                  filteredSurahsInModal.map((surah) => (
                    <div
                      key={surah.number}
                      onClick={() => handlePlaySurah(surah.number, selectedReciterModal.id)}
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200/80 dark:border-white/10 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-white/10">
                          {surah.number}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#155DFC] transition-colors">
                            {surah.englishName}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-500 dark:text-neutral-400">
                            {surah.numberOfAyahs} Verses
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-arabic text-base sm:text-lg text-slate-800 dark:text-neutral-200">
                          {surah.name}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 text-slate-700 dark:text-neutral-200 group-hover:bg-[#155DFC] group-hover:text-white flex items-center justify-center transition-colors">
                          <Play size={13} className="fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 dark:bg-neutral-900 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-neutral-400">
                <span>Select any Surah to start audio playback</span>
                <span className="font-semibold text-slate-700 dark:text-neutral-300">
                  114 Surahs Available
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
