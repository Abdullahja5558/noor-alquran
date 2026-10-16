"use client";

import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Repeat1,
  Volume2,
  VolumeX,
  ListMusic,
} from "lucide-react";
import { useAudioPlayer } from "./AudioPlayerContext";
import { SurahPlaylistDrawer } from "./SurahPlaylistDrawer";

export const BottomAudioPlayer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const {
    currentSurah,
    isPlaying,
    volume,
    isMuted,
    repeatMode,
    isPlaylistOpen,
    pause,
    setVolume,
    toggleMute,
    toggleRepeat,
    setIsPlaylistOpen,
  } = useAudioPlayer();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [scrubPercent, setScrubPercent] = useState<number>(14);
  const scrubberRef = useRef<HTMLDivElement | null>(null);

  // Do NOT show player on /quran or /quran/* or /qurann/* pages
  const isQuranPage =
    Boolean(pathname?.startsWith("/quran")) ||
    Boolean(pathname?.startsWith("/qurann"));

  if (isQuranPage) {
    return null;
  }

  // Clicking play / title takes user directly to /quran/1 to start recitation
  const handlePlayAndNavigate = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    pause();
    router.push(`/quran/${currentSurah.number || 1}?autoplay=true`);
  };

  const handlePrevClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    pause();
    const prevNum = currentSurah.number <= 1 ? 114 : currentSurah.number - 1;
    router.push(`/quran/${prevNum}?autoplay=true`);
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    pause();
    const nextNum = currentSurah.number >= 114 ? 1 : currentSurah.number + 1;
    router.push(`/quran/${nextNum}?autoplay=true`);
  };

  // Scrubber interactive click / drag
  const handleScrubberChange = (clientX: number) => {
    if (!scrubberRef.current) return;
    const rect = scrubberRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((pos / rect.width) * 100);
    setScrubPercent(percentage);
  };

  const onScrubberMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsScrubbing(true);
    handleScrubberChange(e.clientX);

    const onMouseMove = (moveEvent: MouseEvent) => {
      handleScrubberChange(moveEvent.clientX);
    };

    const onMouseUp = () => {
      setIsScrubbing(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      pause();
      router.push(`/quran/${currentSurah.number || 1}?autoplay=true`);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <>
      {/* Floating Bottom Glassmorphic Player */}
      <motion.aside
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 26, stiffness: 280 }}
        aria-label="Quran Audio Player"
        className="fixed bottom-3 sm:bottom-2.5 md:bottom-1.5 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 w-auto sm:w-[560px] md:w-[620px] z-40 select-none"
      >
        {/* Sleek, Slim Frosted Glass Capsule */}
        <div
          className="relative w-full rounded-full px-4 sm:px-5 py-1.5 sm:py-2 transition-all duration-300
                     bg-black/55 dark:bg-black/60 text-white
                     border border-white/20 dark:border-white/15
                     backdrop-blur-2xl backdrop-saturate-150
                     shadow-[0_12px_36px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.22)]
                     flex flex-col gap-0.5 sm:gap-1 overflow-hidden"
        >
          {/* Curved Glass Highlight Reflection */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.14] via-transparent to-black/30 pointer-events-none" />

          {/* Micro Progress Bar on Mobile (hairline along bottom edge) */}
          <div className="sm:hidden absolute bottom-0 inset-x-0 h-[2px] bg-white/15">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${scrubPercent}%` }}
            />
          </div>

          {/* ========================================================= */}
          {/* MAIN ROW: [Arabic Title] [Center Controls] [Right Icons]   */}
          {/* ========================================================= */}
          <div className="flex items-center justify-between w-full z-10">
            {/* ------------------------------------------------------- */}
            {/* LEFT: ONLY Arabic Surah Text (No photo, No reciter name)*/}
            {/* ------------------------------------------------------- */}
            <div
              onClick={handlePlayAndNavigate}
              className="flex items-center group cursor-pointer shrink-0 min-w-0"
              title="Click to start playing Surah Al-Fatihah on /quran/1"
            >
              <span className="font-arabic text-lg sm:text-xl md:text-[22px] font-bold text-white group-hover:text-white/85 transition-colors tracking-wide leading-none select-none cursor-pointer drop-shadow-sm">
                {currentSurah.name || "الفاتحة"}
              </span>
            </div>

            {/* ------------------------------------------------------- */}
            {/* CENTER (Desktop): [<<] [PLAY/PAUSE] [>>] [REPEAT]        */}
            {/* Slimmer, perfectly balanced controls                     */}
            {/* ------------------------------------------------------- */}
            <div className="hidden sm:flex items-center justify-center gap-3.5 sm:gap-4">
              {/* Previous Button (<<) */}
              <button
                type="button"
                onClick={handlePrevClick}
                aria-label="Previous Surah"
                className="text-white/70 hover:text-white p-1 rounded-full active:scale-90 transition-transform cursor-pointer"
                title="Previous Surah"
              >
                <SkipBack size={16} className="fill-current cursor-pointer" />
              </button>

              {/* Main Solid White Circular Play Button */}
              <button
                type="button"
                onClick={handlePlayAndNavigate}
                aria-label="Play Surah Al-Fatihah"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all duration-150 cursor-pointer shrink-0"
                title="Start playing on /quran/1"
              >
                {isPlaying ? (
                  <Pause size={15} className="fill-black cursor-pointer" />
                ) : (
                  <Play size={15} className="fill-black ml-0.5 cursor-pointer" />
                )}
              </button>

              {/* Next Button (>>) */}
              <button
                type="button"
                onClick={handleNextClick}
                aria-label="Next Surah"
                className="text-white/70 hover:text-white p-1 rounded-full active:scale-90 transition-transform cursor-pointer"
                title="Next Surah"
              >
                <SkipForward size={16} className="fill-current cursor-pointer" />
              </button>

              {/* Repeat Button */}
              <button
                type="button"
                onClick={toggleRepeat}
                aria-label="Toggle repeat mode"
                className={`transition-colors p-1 rounded-full cursor-pointer ${
                  repeatMode !== "off"
                    ? "text-white font-bold"
                    : "text-white/50 hover:text-white/90"
                }`}
                title={`Repeat: ${repeatMode}`}
              >
                {repeatMode === "one" ? (
                  <Repeat1 size={15} className="cursor-pointer" />
                ) : (
                  <Repeat size={15} className="cursor-pointer" />
                )}
              </button>
            </div>

            {/* ------------------------------------------------------- */}
            {/* RIGHT (Desktop): Playlist & Volume                       */}
            {/* ------------------------------------------------------- */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Surah Playlist Menu */}
              <button
                type="button"
                onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                aria-label="Surah Playlist"
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  isPlaylistOpen
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                title="Surah Index"
              >
                <ListMusic size={16} className="cursor-pointer" />
              </button>

              {/* Volume Button & Expandable Slider */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={
                    isMuted ? "Unmute" : `Volume ${Math.round(volume * 100)}%`
                  }
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} className="cursor-pointer" />
                  ) : (
                    <Volume2 size={16} className="cursor-pointer" />
                  )}
                </button>

                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 60, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden flex items-center pr-1"
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-12 h-1 rounded-full bg-white/20 accent-white cursor-pointer"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* MOBILE CONTROLS: [<] [PLAY/PAUSE] [>]                    */}
            {/* ------------------------------------------------------- */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handlePrevClick}
                aria-label="Previous Surah"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 active:scale-90 transition-transform cursor-pointer"
              >
                <SkipBack size={15} className="fill-current cursor-pointer" />
              </button>

              <button
                type="button"
                onClick={handlePlayAndNavigate}
                aria-label="Play Surah Al-Fatihah"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-md active:scale-90 transition-transform cursor-pointer"
                title="Start playing on /quran/1"
              >
                <Play size={14} className="fill-black ml-0.5 cursor-pointer" />
              </button>

              <button
                type="button"
                onClick={handleNextClick}
                aria-label="Next Surah"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 active:scale-90 transition-transform cursor-pointer"
              >
                <SkipForward size={15} className="fill-current cursor-pointer" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* BOTTOM ROW (Desktop): [Ayah 1] [=== Track ===] [Ayah 7]  */}
          {/* Slimmer, perfectly aligned track                          */}
          {/* ========================================================= */}
          <div className="hidden sm:flex items-center gap-2.5 w-full px-0.5 z-10">
            {/* Left: Ayah 1 */}
            <span
              onClick={handlePlayAndNavigate}
              className="text-[10px] font-mono text-white/60 min-w-[34px] select-none tabular-nums cursor-pointer hover:text-white leading-none"
            >
              Ayah 1
            </span>

            {/* Slim Scrubber Track */}
            <div
              ref={scrubberRef}
              onMouseDown={onScrubberMouseDown}
              className="relative flex-1 h-1 hover:h-1.5 rounded-full bg-white/20 cursor-pointer group flex items-center transition-all"
              title="Click to seek and open Surah"
            >
              {/* Solid White Progress Fill */}
              <div
                className="h-full bg-white rounded-full relative transition-all duration-75 cursor-pointer"
                style={{
                  width: `${Math.min(100, Math.max(0, scrubPercent))}%`,
                }}
              >
                {/* Micro Thumb */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            </div>

            {/* Right: Ayah 7 */}
            <span
              onClick={handlePlayAndNavigate}
              className="text-[10px] font-mono text-white/60 min-w-[34px] text-right select-none tabular-nums cursor-pointer hover:text-white leading-none"
            >
              Ayah {currentSurah.numberOfAyahs || 7}
            </span>
          </div>
        </div>
      </motion.aside>

      {/* Surah Playlist Popover Modal */}
      <SurahPlaylistDrawer />
    </>
  );
};
