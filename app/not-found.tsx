"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sun, Moon } from "lucide-react";
import { useAudioPlayer } from "@/components/audio/AudioPlayerContext";
import { useTheme } from "next-themes";

export default function NotFound() {
  const { setHideBottomPlayer, pause } = useAudioPlayer();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Explicitly hide the bottom audio player on 404 page
    setHideBottomPlayer(true);
    // Pause any active audio playing in the background
    pause();

    return () => {
      // Restore player when user navigates away from 404
      setHideBottomPlayer(false);
    };
  }, [setHideBottomPlayer, pause]);

  // Determine current active theme accurately
  const isDark = mounted
    ? resolvedTheme === "dark" || theme === "dark"
    : true;

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const currentIsDark =
      resolvedTheme === "dark" ||
      theme === "dark" ||
      (typeof document !== "undefined" && document.documentElement.classList.contains("dark"));

    const nextTheme = currentIsDark ? "light" : "dark";
    setTheme(nextTheme);

    // Direct synchronous DOM update for instant theme flip
    if (typeof document !== "undefined") {
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  return (
    <main
      id="not-found-page"
      data-not-found-page="true"
      className="relative w-full h-screen min-h-screen overflow-hidden flex flex-col justify-between selection:bg-[#155DFC]/30 selection:text-white"
    >
      {/* ========================================================================= */}
      {/* DYNAMIC BACKGROUND IMAGES (Light: 404-bg.png | Dark: 404-bg2.png)         */}
      {/* Direct state + class bindings for 100% reliable switching & smooth fade    */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Light Mode: 404-bg.png */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            mounted
              ? isDark
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
              : "dark:opacity-0 opacity-100"
          }`}
        >
          <Image
            src="/404-bg.png"
            alt="Page Not Found Background Light"
            fill
            priority
            quality={100}
            className="object-cover object-center select-none pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Dark Mode: 404-bg2.png */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            mounted
              ? isDark
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
              : "dark:opacity-100 opacity-0"
          }`}
        >
          <Image
            src="/404-bg2.png"
            alt="Page Not Found Background Dark"
            fill
            priority
            quality={100}
            className="object-cover object-center select-none pointer-events-none"
            sizes="100vw"
          />
        </div>

        {/* Subtle atmospheric tint */}
        <div className="absolute inset-0 bg-black/5 dark:bg-black/25 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* TOP HEADER: BRAND LOGO + THEME TOGGLE                                      */}
      {/* ========================================================================= */}
      <header className="relative z-20 w-full px-5 sm:px-8 md:px-12 pt-5 sm:pt-7 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group cursor-pointer shrink-0 select-none"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-105 shrink-0">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white drop-shadow-sm">
              Noor<span className="font-normal text-slate-600 dark:text-neutral-300">Quran</span>
            </span>
            <span className="hidden sm:inline-block font-arabic text-xs text-slate-600 dark:text-neutral-400 opacity-90 drop-shadow-sm">
              نور القرآن
            </span>
          </div>
        </Link>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/75 dark:bg-black/60 border border-slate-300/80 dark:border-white/20 text-slate-800 dark:text-neutral-100 hover:scale-105 active:scale-95 backdrop-blur-md transition-all shadow-md cursor-pointer select-none"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {mounted ? (
            isDark ? (
              <Sun size={18} className="text-amber-400 drop-shadow-sm" />
            ) : (
              <Moon size={18} className="text-slate-800" />
            )
          ) : (
            <div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-neutral-700" />
          )}
        </button>
      </header>

      {/* ========================================================================= */}
      {/* CENTER CONTENT: THORA SA UPAR CENTER SE, 404 + PARAGRAPH + BUTTON + LINKS  */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full px-4 sm:px-6 flex-1 flex flex-col items-center justify-center text-center -translate-y-6 sm:-translate-y-10 md:-translate-y-14">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* 404 in Website's Own Heading Font */}
          <h1 className="font-bricolage text-8xl sm:text-9xl md:text-[140px] lg:text-[160px] font-black tracking-tight leading-none text-slate-900 dark:text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.6)] dark:drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] mb-3 sm:mb-4 select-none">
            404
          </h1>

          {/* Clean Paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 max-w-md mx-auto leading-relaxed mb-6 sm:mb-7 drop-shadow-sm">
            This page could not be found, but you can always find your way back home.
          </p>

          {/* Primary Action Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#155DFC] hover:bg-blue-700 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Back to Home</span>
            <span className="text-base">→</span>
          </Link>

          {/* Quick Simple Underlined Links (No borders, no boxes, simple and small) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 select-none">
            <Link
              href="/quran"
              className="text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 hover:text-[#155DFC] dark:hover:text-blue-400 underline underline-offset-4 decoration-slate-400/80 dark:decoration-neutral-500 hover:decoration-[#155DFC] transition-colors cursor-pointer"
            >
              Explore Surahs
            </Link>

            <span className="text-slate-400 dark:text-neutral-600 text-xs hidden sm:inline">•</span>

            <Link
              href="/tasbeeh"
              className="text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 hover:text-[#155DFC] dark:hover:text-blue-400 underline underline-offset-4 decoration-slate-400/80 dark:decoration-neutral-500 hover:decoration-[#155DFC] transition-colors cursor-pointer"
            >
              Tasbeeh
            </Link>

            <span className="text-slate-400 dark:text-neutral-600 text-xs hidden sm:inline">•</span>

            <Link
              href="/prayer-time"
              className="text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 hover:text-[#155DFC] dark:hover:text-blue-400 underline underline-offset-4 decoration-slate-400/80 dark:decoration-neutral-500 hover:decoration-[#155DFC] transition-colors cursor-pointer"
            >
              Prayer Times
            </Link>

            <span className="text-slate-400 dark:text-neutral-600 text-xs hidden sm:inline">•</span>

            <Link
              href="/dua"
              className="text-xs sm:text-sm font-medium text-slate-800 dark:text-neutral-200 hover:text-[#155DFC] dark:hover:text-blue-400 underline underline-offset-4 decoration-slate-400/80 dark:decoration-neutral-500 hover:decoration-[#155DFC] transition-colors cursor-pointer"
            >
              Daily Duas
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM FOOTNOTE                                                           */}
      {/* ========================================================================= */}
      <footer className="relative z-10 w-full px-5 sm:px-8 md:px-12 pb-5 sm:pb-6 text-xs text-slate-700 dark:text-neutral-400 font-medium flex items-center justify-between drop-shadow-sm">
        <span>© {new Date().getFullYear()} Noor Al-Quran</span>
        <span className="font-arabic text-sm opacity-90">
          وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ
        </span>
      </footer>
    </main>
  );
}
