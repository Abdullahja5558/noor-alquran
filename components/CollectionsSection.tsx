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
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Collections
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 font-light">
          Curated Quranic playlists for your daily spiritual states & routines
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-[2rem] sm:rounded-[2.5rem] bg-[#07090e] border border-[#141c2b] shadow-2xl overflow-hidden text-white"
            >
              {/* Modal Header */}
              <div className="p-5 sm:p-6 border-b border-[#141c2b] bg-[#0c111a]/60 relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    {selectedCollection.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 max-w-lg font-light">
                    {selectedCollection.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCollection(null)}
                  className="w-9 h-9 rounded-full bg-[#141c2b] border border-[#1a2538] text-slate-300 hover:text-white flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Reciter Selection Row */}
              <div className="p-4 sm:p-5 border-b border-[#141c2b] bg-[#07090e]">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2.5">
                  <Headphones size={12} className="text-blue-500" />
                  <span>Choose Reciter Voice</span>
                </label>

                <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1">
                  {RECITERS_LIST.map((reciter) => {
                    const isSelected = selectedReciter.id === reciter.id;
                    return (
                      <button
                        key={reciter.id}
                        onClick={() => handleSelectReciter(reciter)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-2xl border text-xs font-bold transition-all shrink-0 cursor-pointer ${
                          isSelected
                            ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30"
                            : "bg-[#0c111a] border-[#1a2538] text-slate-300 hover:border-blue-500/50"
                        }`}
                      >
                        <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20">
                          <Image
                            src={reciter.image}
                            alt={reciter.name}
                            fill
                            sizes="24px"
                            className="object-cover"
                          />
                        </div>
                        <span className="whitespace-nowrap">{reciter.name}</span>
                        {isSelected && <Check size={13} className="ml-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Surah Tracks List */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-2.5 custom-scrollbar">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-1 px-1">
                  <span>Included Surahs ({selectedCollection.tracks.length})</span>
                  <span className="text-[11px] text-blue-400">Click any Surah to start</span>
                </div>

                {selectedCollection.tracks.map((track, idx) => (
                  <div
                    key={track.surahNumber}
                    onClick={() => handlePlaySurah(track.surahNumber)}
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#0c111a] hover:bg-[#141c2b] border border-[#141c2b] hover:border-blue-500/50 transition-all cursor-pointer shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-[#141c2b] border border-[#1a2538] text-slate-200 font-bold text-xs flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        {idx + 1}
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                          {track.englishName}{" "}
                          <span className="text-[10px] text-slate-400 font-normal">
                            ({track.englishTranslation})
                          </span>
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate">
                          {track.revelationType} • {track.ayahCount} Verses
                          {track.note && ` • ${track.note}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-arabic text-base sm:text-lg text-slate-200">
                        {track.name}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#141c2b] text-blue-400 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                        <Play size={11} className="fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer CTA */}
              <div className="p-4 bg-[#0c111a] border-t border-[#141c2b] flex items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  Voice: <span className="font-bold text-white">{selectedReciter.name}</span>
                </div>

                <button
                  onClick={() => handlePlaySurah(selectedCollection.tracks[0].surahNumber)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 cursor-pointer"
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
