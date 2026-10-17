"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Check, Headphones } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COLLECTIONS_DATA, CollectionItem } from "./playlistsData";
import { RECITERS_LIST, Reciter } from "./recitersData";

const PLAYLIST_IMAGES: Record<string, string> = {
  sleep: "/playlists/sleep.jpg",
  focus: "/playlists/focus.jpg",
  morning: "/playlists/morning.jpg",
  emotional: "/playlists/emotional.jpg",
  melodic: "/playlists/melodic.jpg",
  ruqyah: "/playlists/ruqyah.jpg",
  anxiety: "/playlists/anxiety.jpg",
  tawbah: "/playlists/tawbah.jpg",
};

export default function CollectionsSection() {
  const router = useRouter();
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [selectedReciter, setSelectedReciter] = useState<Reciter>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("noor_selected_reciter");
      if (saved) {
        const found = RECITERS_LIST.find((r) => r.id === saved);
        if (found) return found;
      }
    }
    return RECITERS_LIST[0]; // Mishary Alafasy
  });

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedCollection) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedCollection(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedCollection]);

  const handleSelectReciter = (reciter: Reciter) => {
    setSelectedReciter(reciter);
    if (typeof window !== "undefined") {
      localStorage.setItem("noor_selected_reciter", reciter.id);
    }
  };

  const handlePlaySurah = (surahNumber: number) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("noor_selected_reciter", selectedReciter.id);
    }
    const plId = selectedCollection?.id ? `&playlist=${selectedCollection.id}` : "";
    router.push(`/quran/${surahNumber}?reciter=${selectedReciter.id}&autoplay=true${plId}`);
  };

  return (
    <section id="collections" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Curated{" "}
          <span className="bg-[#155DFC] text-white px-3.5 sm:px-4 py-0.5 rounded-full text-xl sm:text-3xl md:text-4xl font-extrabold align-middle inline-block">
            Daily Playlists
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 mt-2.5 font-normal max-w-md mx-auto leading-relaxed">
          Thematic Quranic journeys handpicked for focus, tranquil sleep, and peaceful reflection.
        </p>
      </div>

      {/* 
        Horizontal Slider Layout (Matching Reciters Section):
        - Exactly 2 full cards visible initially + 3rd card peeking/half visible
        - Smooth horizontal swipe & scroll
        - Soft right-corner gradient fade inviting interaction
      */}
      <div className="relative w-full">
        {/* Left subtle fade gradient */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-[#f8fafc] dark:from-[#000000] to-transparent opacity-80" />

        {/* Right corner shadow/fade gradient over 3rd card */}
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#f8fafc] dark:from-[#000000] to-transparent" />

        {/* Scrollable Container (Shows 2 full + 3rd half across mobile and desktop) */}
        <div className="overflow-x-auto no-scrollbar scroll-smooth flex items-stretch gap-4 sm:gap-6 px-1 py-2 snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing">
          {COLLECTIONS_DATA.map((collection: CollectionItem) => {
            const imageSrc = PLAYLIST_IMAGES[collection.variant] || "/playlists/sleep.png";

            return (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="group cursor-pointer shrink-0 snap-start flex flex-col w-[62vw] xs:w-[54vw] sm:w-[310px] md:w-[335px] lg:w-[340px] max-w-[360px]"
              >
                {/* Image Artwork Box with Hover Glassmorphism Play Button */}
                <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-[2.2rem] overflow-hidden bg-slate-100 dark:bg-neutral-900 border border-slate-200/80 dark:border-white/[0.08] transition-all duration-300 group-hover:border-[#155DFC]/60">
                  <Image
                    src={imageSrc}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 44vw, (max-width: 1024px) 32vw, 340px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Center Glassmorphism Play Button Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                      <Play size={16} className="fill-white text-white ml-0.5 sm:scale-125" />
                    </div>
                  </div>
                </div>

                {/* Below Text: Clean Title & Surah Count */}
                <div className="mt-2.5 sm:mt-3.5 px-0.5 sm:px-1 text-left">
                  <h3 className="font-heading text-xs sm:text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#155DFC] transition-colors leading-snug truncate sm:whitespace-normal">
                    {collection.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-neutral-400 mt-0.5 font-medium">
                    {collection.tracks.length} Surahs
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reciter Picker & Tracklist Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <div
            onClick={() => setSelectedCollection(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-2xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] backdrop-blur-2xl overflow-hidden text-slate-900 dark:text-white"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-7 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02] relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {selectedCollection.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1.5 max-w-lg leading-relaxed font-normal">
                    {selectedCollection.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCollection(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] border border-slate-200/60 dark:border-white/10 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center shrink-0 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Reciter Voice Selection Row */}
              <div className="px-5 sm:px-7 py-4 border-b border-slate-200/80 dark:border-white/[0.08] bg-white dark:bg-[#070709]">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
                    Reciter Voice
                  </span>
                  <span className="text-[11px] text-[#155DFC] font-medium">
                    {selectedReciter.name} ({selectedReciter.country})
                  </span>
                </div>

                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                  {RECITERS_LIST.map((reciter) => {
                    const isSelected = selectedReciter.id === reciter.id;
                    return (
                      <button
                        key={reciter.id}
                        onClick={() => handleSelectReciter(reciter)}
                        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                          isSelected
                            ? "bg-[#155DFC] text-white scale-[1.02]"
                            : "bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200/60 dark:border-white/[0.06] hover:bg-slate-200/70 dark:hover:bg-white/[0.08]"
                        }`}
                      >
                        <div className="relative w-5 h-5 rounded-full overflow-hidden shrink-0 border border-white/20">
                          <Image
                            src={reciter.image}
                            alt={reciter.name}
                            fill
                            sizes="20px"
                            className="object-cover"
                          />
                        </div>
                        <span className="whitespace-nowrap">{reciter.name}</span>
                        {isSelected && <Check size={12} className="ml-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Surah Tracks List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5 no-scrollbar">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-neutral-400 mb-1 px-1">
                  <span>Surahs in this session ({selectedCollection.tracks.length})</span>
                  <span className="text-[11px] text-[#155DFC] font-medium">Click track to play</span>
                </div>

                {selectedCollection.tracks.map((track, idx) => (
                  <div
                    key={track.surahNumber}
                    onClick={() => handlePlaySurah(track.surahNumber)}
                    className="group flex items-center justify-between px-4 sm:px-5 py-3 rounded-full bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/[0.07] hover:border-[#155DFC]/50 dark:hover:border-[#155DFC]/50 hover:bg-slate-100/70 dark:hover:bg-white/[0.04] transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 group-hover:text-[#155DFC] group-hover:border-[#155DFC]/40 font-bold text-xs flex items-center justify-center shrink-0 transition-colors">
                        {idx + 1}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#155DFC] transition-colors truncate">
                          {track.englishName}{" "}
                          <span className="text-[10px] sm:text-xs text-slate-500 dark:text-neutral-400 font-normal">
                            ({track.englishTranslation})
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-neutral-400 truncate mt-0.5">
                          {track.revelationType} • {track.ayahCount} Verses
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 shrink-0 pl-2">
                      <span
                        lang="ar"
                        dir="rtl"
                        className="font-arabic text-base sm:text-lg text-slate-800 dark:text-neutral-200"
                      >
                        {track.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 text-slate-700 dark:text-neutral-300 group-hover:bg-[#155DFC] group-hover:text-white flex items-center justify-center transition-all shrink-0">
                        <Play size={11} className="fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 sm:p-5 bg-slate-50/80 dark:bg-white/[0.02] border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200 dark:border-white/20 shrink-0">
                    <Image
                      src={selectedReciter.image}
                      alt={selectedReciter.name}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 dark:text-neutral-500 font-medium leading-none">
                      Selected Voice
                    </p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight mt-0.5">
                      {selectedReciter.name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handlePlaySurah(selectedCollection.tracks[0].surahNumber)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#155DFC] hover:bg-[#114ecc] text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer"
                >
                  <Play size={13} className="fill-current" />
                  <span>Play All</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
