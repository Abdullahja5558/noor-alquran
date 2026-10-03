"use client";

import React, { useState, useMemo } from "react";
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

  // Group by country for organized view (clean headers without flag emojis)
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-white/80 dark:bg-[#07090e]/80 backdrop-blur-md border border-slate-200/80 dark:border-[#141c2b] text-slate-800 dark:text-slate-200 shadow-sm">
            <Mic size={14} className="text-blue-500" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Renowned Quran Reciters • مشاهير القراء
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Listen by Reciter{" "}
            <span className="font-arabic font-normal text-2xl sm:text-4xl text-blue-600 dark:text-blue-400 ml-2">
              القراء
            </span>
          </h2>
          
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            Experience the recitation of all 114 Surahs by the most esteemed and beloved reciters of the Islamic world.
          </p>

          {/* Centered Search Box */}
          <div className="relative w-full max-w-md mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reciter or city..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/80 dark:bg-[#07090e]/80 backdrop-blur-xl border border-slate-200/80 dark:border-[#141c2b] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Centered Country Filter Pills (Clean names, no flag emojis) */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 pt-6">
            {countries.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCountry(c.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all backdrop-blur-md cursor-pointer ${
                  selectedCountry === c.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30 scale-105"
                    : "bg-white/60 dark:bg-[#07090e]/60 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-[#0c111a] border border-slate-200/80 dark:border-[#141c2b]"
                }`}
              >
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* --- GROUPED SECTIONS --- */}
        <div className="space-y-14">
          {groupedByCountry.map(([code, group]) => (
            <div key={code} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-slate-200/70 dark:border-[#141c2b] pb-3.5">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {group.country}
                </h3>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {group.list.length} {group.list.length === 1 ? "Reciter" : "Reciters"}
                </span>
              </div>

              {/* Liquid Glass Circular Avatars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 pt-2">
                {group.list.map((reciter) => (
                  <motion.div
                    key={reciter.id}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => openReciterSurahs(reciter)}
                    className="group cursor-pointer flex flex-col items-center text-center select-none"
                  >
                    {/* Clean Circular Avatar without outer border rings */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-slate-100 dark:bg-[#0c111a] transition-all duration-300 shadow-md">
                      <Image
                        src={reciter.image}
                        alt={reciter.name}
                        fill
                        sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Liquid Glass Light Reflection Sheen */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                      {/* Frosted Liquid Glass Play Overlay */}
                      <div className="absolute inset-0 bg-black/25 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/20 dark:bg-white/15 backdrop-blur-xl border border-white/40 dark:border-white/30 text-white flex items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transform scale-80 group-hover:scale-100 transition-all duration-300">
                          <Play size={17} className="fill-white text-white ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Centered Name Underneath */}
                    <h4 className="mt-3.5 text-xs sm:text-sm md:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug px-1 max-w-[170px]">
                      {reciter.name}
                    </h4>

                    {/* City & Style */}
                    <p className="mt-0.5 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
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
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                No reciter found matching &quot;{searchQuery}&quot;.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- SURAH PICKER MODAL (114 SURAHS) --- */}
      <AnimatePresence>
        {selectedReciterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-[#0c111a] border-b border-slate-200 dark:border-[#141c2b] relative">
                <button
                  onClick={() => setSelectedReciterModal(null)}
                  className="absolute right-4 top-4 w-9 h-9 rounded-full bg-slate-200/80 dark:bg-[#141c2b] hover:bg-slate-300 dark:hover:bg-[#1a2538] text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-4 sm:gap-5 pr-10">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden p-1 bg-white dark:bg-[#0c111a] border-2 border-slate-300 dark:border-[#1a2538] shadow-md shrink-0">
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
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {selectedReciterModal.country}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white truncate">
                      {selectedReciterModal.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-arabic text-blue-600 dark:text-blue-400 mt-0.5">
                      {selectedReciterModal.arabicName} • {selectedReciterModal.city}
                    </p>
                  </div>
                </div>

                {/* Search Surah inside Modal */}
                <div className="relative mt-4">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={surahSearch}
                    onChange={(e) => setSurahSearch(e.target.value)}
                    placeholder={`Search 114 Surahs for ${selectedReciterModal.name.split(" ")[0]}...`}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
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
                      className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-[#0c111a]/60 hover:bg-slate-100 dark:hover:bg-[#141c2b] border border-slate-200/80 dark:border-[#141c2b] hover:border-slate-300 dark:hover:border-[#1a2538] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white dark:bg-[#141c2b] text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center shadow-sm border border-slate-200 dark:border-[#1a2538]">
                          {surah.number}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {surah.englishName}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                            {surah.numberOfAyahs} Verses
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-arabic text-base sm:text-lg text-slate-800 dark:text-slate-200">
                          {surah.name}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-[#141c2b] text-slate-700 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                          <Play size={14} className="fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 dark:bg-[#0c111a] border-t border-slate-200 dark:border-[#141c2b] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Select any Surah to start audio playback</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
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
