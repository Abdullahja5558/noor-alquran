"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Play, Volume2, Sparkles } from "lucide-react";
import { ALL_SURAHS_META, SurahStaticMeta } from "@/components/surahMeta";
import { useAudioPlayer } from "./AudioPlayerContext";

const POPULAR_SURAH_NUMBERS = [1, 2, 18, 36, 55, 56, 67, 112, 113, 114];

export const SurahPlaylistDrawer: React.FC = () => {
  const {
    currentSurah,
    isPlaying,
    isPlaylistOpen,
    setIsPlaylistOpen,
    playSurah,
  } = useAudioPlayer();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "meccan" | "medinan" | "popular">("all");

  const filteredSurahs = useMemo(() => {
    return ALL_SURAHS_META.filter((surah) => {
      const matchesSearch =
        surah.englishName.toLowerCase().includes(search.toLowerCase()) ||
        surah.name.includes(search) ||
        surah.englishNameTranslation.toLowerCase().includes(search.toLowerCase()) ||
        surah.number.toString() === search.trim();

      if (!matchesSearch) return false;

      if (filter === "popular") {
        return POPULAR_SURAH_NUMBERS.includes(surah.number);
      }
      if (filter === "meccan") {
        return surah.revelationType === "Meccan";
      }
      if (filter === "medinan") {
        return surah.revelationType === "Medinan";
      }
      return true;
    });
  }, [search, filter]);

  if (!isPlaylistOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsPlaylistOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal / Drawer Content */}
        <motion.div
          initial={{ y: "100%", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full sm:max-w-xl max-h-[85vh] sm:max-h-[80vh] flex flex-col bg-[#0f1115]/95 dark:bg-[#07090e]/95 text-white rounded-t-3xl sm:rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  Quran Audio Playlist
                  <span className="text-xs font-normal text-white/50 font-mono">
                    (114 Surahs)
                  </span>
                </h3>
                <p className="text-xs text-white/60">
                  Select any Surah to play instantly
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPlaylistOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          {/* Search Bar & Filters */}
          <div className="p-4 border-b border-white/[0.08] bg-black/20 shrink-0 space-y-3">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Surah (e.g. Al-Fatihah, 36, Yasin)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.07] border border-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Badges */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs scrollbar-none">
              {(
                [
                  { id: "all", label: "All Surahs" },
                  { id: "popular", label: "Popular" },
                  { id: "meccan", label: "Meccan" },
                  { id: "medinan", label: "Medinan" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-all text-xs font-medium ${
                    filter === tab.id
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "bg-white/[0.06] text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Surah List */}
          <div className="flex-1 overflow-y-auto divide-y divide-white/[0.06] p-2 space-y-1">
            {filteredSurahs.map((surah) => {
              const isCurrent = currentSurah.number === surah.number;
              return (
                <div
                  key={surah.number}
                  onClick={() => {
                    playSurah(surah.number, true);
                    setIsPlaylistOpen(false);
                  }}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isCurrent
                      ? "bg-white/[0.12] border border-white/20 shadow-sm"
                      : "hover:bg-white/[0.06] border border-transparent"
                  }`}
                >
                  {/* Left: Number & Titles */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-white text-black"
                          : "bg-white/[0.08] text-white/80"
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <div className="flex items-end gap-0.5 h-3">
                          <span className="w-0.5 h-full bg-black animate-pulse" />
                          <span className="w-0.5 h-2 bg-black animate-pulse delay-75" />
                          <span className="w-0.5 h-3 bg-black animate-pulse delay-150" />
                        </div>
                      ) : (
                        surah.number
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold text-sm truncate ${
                            isCurrent ? "text-white" : "text-white/90"
                          }`}
                        >
                          {surah.englishName}
                        </span>
                        {isCurrent && (
                          <span className="px-1.5 py-0.2 rounded text-[10px] bg-white/20 text-white font-medium">
                            Now Playing
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/50 truncate">
                        {surah.englishNameTranslation} • {surah.numberOfAyahs} Ayahs
                      </p>
                    </div>
                  </div>

                  {/* Right: Arabic Name & Play Button */}
                  <div className="flex items-center gap-3 shrink-0 ml-2">
                    <span className="font-arabic text-sm text-white/70">
                      {surah.name}
                    </span>
                    <button
                      aria-label={`Play Surah ${surah.englishName}`}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                        isCurrent && isPlaying
                          ? "bg-white text-black scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white"
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <Volume2 size={14} />
                      ) : (
                        <Play size={13} className="ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

            {filteredSurahs.length === 0 && (
              <div className="py-12 text-center text-white/50 text-sm">
                No Surah found matching &quot;{search}&quot;
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
