"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
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
import { ALL_SURAHS_META } from "./surahMeta";

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
  >(ALL_SURAHS_META);
  const [loadingSurahs, setLoadingSurahs] = useState(false);

  // Country Carousel Slider (iPhone Camera Style)
  const countryScrollRef = useRef<HTMLDivElement | null>(null);
  const [isDraggingCountry, setIsDraggingCountry] = useState(false);
  const [countryStartX, setCountryStartX] = useState(0);
  const [countryScrollLeft, setCountryScrollLeft] = useState(0);
  const countryMovedRef = useRef(false);

  // Wheel listener for ultra-smooth trackpad and mouse-wheel horizontal scrolling
  useEffect(() => {
    const el = countryScrollRef.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY * 1.2,
          behavior: "smooth",
        });
      }
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const handleCountryMouseDown = (e: React.MouseEvent) => {
    if (!countryScrollRef.current) return;
    setIsDraggingCountry(true);
    countryMovedRef.current = false;
    setCountryStartX(e.pageX - countryScrollRef.current.offsetLeft);
    setCountryScrollLeft(countryScrollRef.current.scrollLeft);
  };

  const handleCountryMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingCountry || !countryScrollRef.current) return;
    const x = e.pageX - countryScrollRef.current.offsetLeft;
    const walk = (x - countryStartX) * 1.3;
    if (Math.abs(walk) > 4) {
      countryMovedRef.current = true;
    }
    countryScrollRef.current.scrollLeft = countryScrollLeft - walk;
  };

  const handleCountryMouseUpOrLeave = () => {
    setIsDraggingCountry(false);
  };

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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Listen with{" "}
            <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1.5 shadow-sm">
              Beloved Reciters
            </span>{" "}
            <span className="font-arabic font-normal text-2xl sm:text-4xl text-[#155DFC] ml-1 sm:ml-2">
              القراء
            </span>
          </h2>
          
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-neutral-400 max-w-md font-normal leading-relaxed">
            Soulful Tilawat of 114 Surahs by the Islamic world&apos;s most revered Qaris.
          </p>

          {/* Centered Minimal Underline Search Input */}
          <div className="w-full max-w-md mx-auto mt-6">
            <div className="relative flex items-center border-b border-slate-300 dark:border-neutral-700 focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC] pb-2 transition-colors">
              <Search className="w-4 h-4 text-slate-400 shrink-0 ml-0.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reciter or city..."
                className="w-full pl-3 pr-8 bg-transparent border-none rounded-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 transition-colors"
                  aria-label="Clear reciter search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Country Filter Carousel - iPhone Camera Mode Style Slider */}
          <div className="relative w-full max-w-[300px] xs:max-w-[330px] sm:max-w-[360px] mx-auto mt-6 pt-1 select-none">
            {/* Left Edge Subtle Fade */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-8 z-10 bg-gradient-to-r from-[#f8fafc] dark:from-[#000000] to-transparent" />

            {/* Right Edge Subtle Fade */}
            <div className="pointer-events-none absolute right-0 inset-y-0 w-8 z-10 bg-gradient-to-l from-[#f8fafc] dark:from-[#000000] to-transparent" />

            {/* Drag & Touch Scroll Track (2 to 3 pills show with next peeking) */}
            <div
              ref={countryScrollRef}
              onMouseDown={handleCountryMouseDown}
              onMouseMove={handleCountryMouseMove}
              onMouseUp={handleCountryMouseUpOrLeave}
              onMouseLeave={handleCountryMouseUpOrLeave}
              style={{
                WebkitOverflowScrolling: "touch",
                overscrollBehaviorX: "contain",
                scrollSnapType: isDraggingCountry ? "none" : "x mandatory",
                scrollBehavior: isDraggingCountry ? "auto" : "smooth",
              }}
              className="flex items-center gap-2 overflow-x-auto no-scrollbar px-8 py-1.5 cursor-grab active:cursor-grabbing select-none"
            >
              {countries.map((c) => {
                const isSelected = selectedCountry === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={(e) => {
                      if (countryMovedRef.current) return;
                      setSelectedCountry(c.id);
                      e.currentTarget.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                    }}
                    className={`shrink-0 snap-center px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#155DFC] text-white shadow-sm scale-[1.02]"
                        : "bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/[0.08]"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white/95 dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] rounded-[2.5rem] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden flex flex-col max-h-[88vh] text-slate-900 dark:text-white"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-7 bg-slate-50/50 dark:bg-white/[0.02] border-b border-slate-200/80 dark:border-white/[0.08] relative">
                <button
                  onClick={() => setSelectedReciterModal(null)}
                  className="absolute right-5 top-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] border border-slate-200/60 dark:border-white/10 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
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
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#155DFC]/10 border border-[#155DFC]/20 text-[#155DFC] text-[10px] font-bold uppercase tracking-wider mb-1">
                      {selectedReciterModal.country}
                    </span>
                    <h3 className="font-heading text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white truncate">
                      {selectedReciterModal.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-arabic text-slate-600 dark:text-neutral-300 mt-0.5">
                      {selectedReciterModal.arabicName} • {selectedReciterModal.city}
                    </p>
                  </div>
                </div>

                {/* Minimal Underline Search Surah inside Modal */}
                <div className="relative mt-5">
                  <div className="relative flex items-center border-b border-slate-300 dark:border-neutral-700 focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC] pb-1.5 transition-colors">
                    <Search className="w-4 h-4 text-slate-400 shrink-0 ml-0.5" />
                    <input
                      type="text"
                      value={surahSearch}
                      onChange={(e) => setSurahSearch(e.target.value)}
                      placeholder={`Search 114 Surahs for ${selectedReciterModal.name.split(" ")[0]}...`}
                      className="w-full pl-3 pr-8 bg-transparent border-none rounded-none outline-none ring-0 focus:ring-0 focus:outline-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500"
                    />
                    {surahSearch && (
                      <button
                        onClick={() => setSurahSearch("")}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs px-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Surahs Scrollable List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 custom-scrollbar">
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
                      className="group flex items-center justify-between px-4 sm:px-5 py-3 rounded-full bg-slate-50/80 dark:bg-white/[0.02] hover:bg-slate-100/70 dark:hover:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.07] hover:border-[#155DFC]/50 dark:hover:border-[#155DFC]/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 font-bold text-xs flex items-center justify-center border border-slate-200 dark:border-white/[0.08] group-hover:text-[#155DFC] group-hover:border-[#155DFC]/40 transition-colors">
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

                      <div className="flex items-center gap-3.5">
                        <span className="font-arabic text-base sm:text-lg text-slate-800 dark:text-neutral-200">
                          {surah.name}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 text-slate-700 dark:text-neutral-300 group-hover:bg-[#155DFC] group-hover:text-white flex items-center justify-center transition-all shrink-0">
                          <Play size={11} className="fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 bg-slate-50/50 dark:bg-white/[0.02] border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 dark:text-neutral-400">
                <span>Select any Surah to begin recitation</span>
                <span className="font-semibold text-slate-700 dark:text-neutral-300">
                  114 Surahs
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
