"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Headphones, Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COLLECTIONS_DATA, CollectionItem } from "./playlistsData";
import { RECITERS_LIST, Reciter } from "./recitersData";

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
    <section id="collections" className="relative py-16 sm:py-24 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header Centered */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Curated{" "}
          <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1.5 shadow-sm">
            Daily Playlists
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-2.5 font-normal">
          Handpicked Surahs for focus, tranquil sleep, and peaceful reflection.
        </p>
      </div>

      {/* Collections Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COLLECTIONS_DATA.map((collection: CollectionItem) => (
          <motion.div
            key={collection.id}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCollection(collection)}
            className="group cursor-pointer select-none flex flex-col"
          >
            {/* Top Box: Visual Image Artwork Box (No text inside) */}
            <div className="relative aspect-square rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden bg-[#05070c] border border-white/5 group-hover:border-white/20 transition-colors duration-300">
              {collection.variant === "focus" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 18% 18%, rgba(6, 182, 212, 0.75) 0%, rgba(30, 64, 175, 0.45) 40%, #03060f 78%)",
                  }}
                >
                  {/* Concentric Focus Rings Wireframe */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              )}

              {collection.variant === "melodic" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 18% 18%, rgba(236, 72, 153, 0.8) 0%, rgba(190, 24, 93, 0.45) 42%, #080309 78%)",
                  }}
                >
                  {/* Sacred 8-Petal Rosette Floral Wireframe */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <g transform="translate(100, 100)">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <ellipse
                          key={deg}
                          cx="0"
                          cy="-28"
                          rx="20"
                          ry="38"
                          stroke="currentColor"
                          strokeWidth="1"
                          transform={`rotate(${deg})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1.2" />
                    </g>
                  </svg>
                </div>
              )}

              {collection.variant === "sleep" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 75% 40%, rgba(37, 99, 235, 0.85) 0%, rgba(30, 27, 75, 0.5) 45%, #03040c 80%)",
                  }}
                >
                  {/* Celestial Planetary Crescent + Zzz Sleep Symbols */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <path
                      d="M 15 170 A 110 110 0 0 1 185 55"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="2"
                    />
                    <text x="110" y="65" fill="rgba(255,255,255,0.22)" className="font-bold text-xs">z</text>
                    <text x="130" y="50" fill="rgba(255,255,255,0.28)" className="font-bold text-sm">z</text>
                    <text x="152" y="36" fill="rgba(255,255,255,0.35)" className="font-bold text-base">Z</text>
                  </svg>
                </div>
              )}

              {collection.variant === "ruqyah" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 18% 85%, rgba(16, 185, 129, 0.75) 0%, rgba(6, 78, 59, 0.45) 45%, #030806 80%)",
                  }}
                >
                  {/* Ascending Divine Light Rays */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    {[-40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((deg, i) => (
                      <line
                        key={i}
                        x1="100"
                        y1="195"
                        x2={100 + Math.sin((deg * Math.PI) / 180) * 190}
                        y2={195 - Math.cos((deg * Math.PI) / 180) * 190}
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
              )}

              {collection.variant === "emotional" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.8) 0%, rgba(55, 48, 163, 0.45) 45%, #06030c 78%)",
                  }}
                >
                  {/* Interlocking Sacred Curves */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle cx="75" cy="90" r="45" stroke="currentColor" strokeWidth="1" />
                    <circle cx="125" cy="90" r="45" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="65" r="40" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="115" r="40" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="90" r="18" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              )}

              {collection.variant === "morning" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 18% 18%, rgba(245, 158, 11, 0.8) 0%, rgba(29, 78, 216, 0.45) 45%, #05060d 78%)",
                  }}
                >
                  {/* Radiant Rising Sun Horizon Beams */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <circle cx="100" cy="105" r="25" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="100" cy="105" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                      <line
                        key={deg}
                        x1={100 + Math.cos((deg * Math.PI) / 180) * 30}
                        y1={105 + Math.sin((deg * Math.PI) / 180) * 30}
                        x2={100 + Math.cos((deg * Math.PI) / 180) * 75}
                        y2={105 + Math.sin((deg * Math.PI) / 180) * 75}
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
              )}

              {collection.variant === "anxiety" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, rgba(2, 132, 199, 0.8) 0%, rgba(30, 58, 138, 0.45) 45%, #03050c 78%)",
                  }}
                >
                  {/* Compass / Anchor Geometric Star */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <polygon
                      points="100,25 118,90 180,95 130,120 150,185 100,140 50,185 70,120 20,95 82,90"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle cx="100" cy="105" r="35" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              )}

              {collection.variant === "tawbah" && (
                <div
                  className="w-full h-full relative"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.8) 0%, rgba(67, 56, 202, 0.45) 45%, #04030a 78%)",
                  }}
                >
                  {/* Celestial Rays and Stars */}
                  <svg
                    className="absolute inset-0 w-full h-full text-white/20 group-hover:text-white/35 transition-colors duration-500"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                      <g key={deg} transform={`translate(100, 95) rotate(${deg})`}>
                        <line x1="0" y1="0" x2="0" y2="60" stroke="currentColor" strokeWidth="1" />
                        <circle cx="0" cy="60" r="3.5" fill="currentColor" />
                      </g>
                    ))}
                    <circle cx="100" cy="95" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                  </svg>
                </div>
              )}

              {/* Hover Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                  <Play size={18} className="fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom Text Area (Outside/Underneath the Box) */}
            <div className="mt-3 text-center sm:text-left px-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {collection.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {collection.tracks.length} Surahs
              </p>
            </div>
          </motion.div>
        ))}
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
              className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-[2.5rem] bg-white/95 dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden text-slate-900 dark:text-white"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-7 border-b border-slate-200/80 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.02] relative flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#155DFC]/10 border border-[#155DFC]/20 text-[#155DFC] text-[11px] font-semibold mb-2 tracking-wide">
                    <span>Curated Playlist</span>
                    <span>•</span>
                    <span>{selectedCollection.tracks.length} Surahs</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {selectedCollection.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1 max-w-lg leading-relaxed font-normal">
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
                            ? "bg-[#155DFC] text-white shadow-md shadow-[#155DFC]/25 scale-[1.02]"
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
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2 custom-scrollbar">
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
                          {track.note && ` • ${track.note}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5 shrink-0 pl-2">
                      <span className="font-arabic text-base sm:text-lg text-slate-800 dark:text-neutral-200">
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
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#155DFC] hover:bg-[#114ecc] text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md shadow-[#155DFC]/25 cursor-pointer"
                >
                  <Play size={13} className="fill-current" />
                  <span>Play Collection</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
