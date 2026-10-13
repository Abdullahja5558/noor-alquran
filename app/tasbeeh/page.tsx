"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  RotateCcw,
  Fingerprint,
  Settings2,
  Volume2,
  VolumeX,
  Trophy,
  X,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DhikrPreset {
  id: string;
  arabic: string;
  transliteration: string;
  urdu: string;
  meaning: string;
  defaultTarget: number;
}

const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: "subhanallah",
    arabic: "سُبْحَانَ ٱللَّٰهِ",
    transliteration: "SubhanAllah",
    urdu: "اللہ پاک ہے",
    meaning: "Glory be to Allah",
    defaultTarget: 33,
  },
  {
    id: "alhamdulillah",
    arabic: "ٱلْحَمْدُ لِلَّٰهِ",
    transliteration: "Alhamdulillah",
    urdu: "تمام تعریفیں اللہ کے لیے ہیں",
    meaning: "All praise is due to Allah",
    defaultTarget: 33,
  },
  {
    id: "allahuakbar",
    arabic: "ٱللَّٰهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    urdu: "اللہ سب سے بڑا ہے",
    meaning: "Allah is the Greatest",
    defaultTarget: 34,
  },
  {
    id: "astaghfirullah",
    arabic: "أَسْتَغْفِرُ ٱللَّٰهَ",
    transliteration: "Astaghfirullah",
    urdu: "میں اللہ سے بخشش مانگتا ہوں",
    meaning: "I seek forgiveness from Allah",
    defaultTarget: 100,
  },
  {
    id: "durood",
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ",
    transliteration: "Allahumma Salli Ala Muhammad",
    urdu: "اے اللہ! محمد ﷺ پر رحمتیں نازل فرما",
    meaning: "O Allah, send blessings upon Muhammad",
    defaultTarget: 100,
  },
  {
    id: "tahlil",
    arabic: "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ",
    transliteration: "La Ilaha Illallah",
    urdu: "اللہ کے سوا کوئی معبود نہیں",
    meaning: "There is no deity except Allah",
    defaultTarget: 100,
  },
];

export default function TasbeehPage() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [isSound, setIsSound] = useState(true);
  const [activeDhikr, setActiveDhikr] = useState<DhikrPreset>(DHIKR_PRESETS[0]);
  const [totalLifetime, setTotalLifetime] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("tasbeeh_total_count");
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [customTargetInput, setCustomTargetInput] = useState("33");

  // Lock background scroll when settings modal is open
  useEffect(() => {
    if (isSettingsOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isSettingsOpen]);

  // Synthetic Tactile Click Sound Generator
  const playClickSound = useCallback(() => {
    if (!isSound) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(850, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext fallback
    }
  }, [isSound]);

  const handleCountPress = () => {
    playClickSound();

    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(35);
    }

    setCount((prev) => prev + 1);

    setTotalLifetime((prev) => {
      const nextTotal = prev + 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("tasbeeh_total_count", nextTotal.toString());
      }
      return nextTotal;
    });
  };

  const resetCurrent = () => {
    setCount(0);
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate([60, 40, 60]);
    }
  };

  const handleSelectDhikr = (preset: DhikrPreset) => {
    setActiveDhikr(preset);
    setTarget(preset.defaultTarget);
    setCount(0);
  };

  const progress = Math.min((count / target) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
        {/* Top Header Controls */}
        <div className="w-full flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300">
            <Trophy size={13} className="text-[#155DFC]" />
            <span>Lifetime: {totalLifetime.toLocaleString()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSound(!isSound)}
              aria-label="Toggle Sound"
              className={`p-2.5 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] transition-all cursor-pointer ${
                isSound ? "text-[#155DFC]" : "text-slate-400"
              }`}
            >
              {isSound ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <button
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Tasbeeh Settings"
              className="p-2.5 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] transition-all cursor-pointer"
            >
              <Settings2 size={15} />
            </button>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Digital <span className="bg-[#155DFC] text-white px-3.5 py-0.5 rounded-full text-xl sm:text-3xl font-extrabold align-middle inline-block">Tasbeeh Counter</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 mt-1.5 font-normal">
            Track daily dhikr with haptic feedback, synthetic click sound, and customizable targets.
          </p>
        </div>

        {/* Dhikr Selector Pills */}
        <div className="w-full overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-8 flex gap-2 justify-start sm:justify-center">
          {DHIKR_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectDhikr(preset)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                activeDhikr.id === preset.id
                  ? "bg-[#155DFC] text-white border-[#155DFC]"
                  : "bg-white dark:bg-white/[0.04] border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/[0.08]"
              }`}
            >
              {preset.transliteration}
            </button>
          ))}
        </div>

        {/* Dedicated Tasbeeh Center Card */}
        <div className="w-full p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col items-center text-center">
          {/* Active Dhikr Title */}
          <div className="mb-6 sm:mb-8 space-y-1 sm:space-y-1.5">
            <h2 className="font-arabic text-3xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white leading-tight">
              {activeDhikr.arabic}
            </h2>
            <p className="font-urdu text-lg sm:text-xl text-slate-700 dark:text-neutral-200">
              {activeDhikr.urdu}
            </p>
            <p className="text-xs text-[#155DFC] font-semibold">
              {activeDhikr.meaning}
            </p>
          </div>

          {/* Counter Progress Circle */}
          <div
            onClick={handleCountPress}
            className="relative group cursor-pointer select-none my-2 sm:my-4 active:scale-95 transition-transform"
          >
            <svg className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 transform -rotate-90 relative z-10">
              <circle
                cx="50%"
                cy="50%"
                r="43%"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-slate-100 dark:text-neutral-900"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="43%"
                stroke="currentColor"
                strokeWidth="9"
                fill="transparent"
                strokeDasharray="276"
                animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                strokeLinecap="round"
                className="text-[#155DFC]"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <motion.span
                key={count}
                initial={{ scale: 0.85, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white"
              >
                {count}
              </motion.span>
              <span className="text-xs font-semibold text-[#155DFC] mt-1 sm:mt-2">
                {count >= target ? "MashaAllah Target Met" : `Target: ${target}`}
              </span>
            </div>
          </div>

          {/* Action Buttons Bar */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={resetCurrent}
              title="Reset Counter"
              className="p-3.5 sm:p-4 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-600 dark:text-neutral-400 hover:text-rose-500 hover:border-rose-500/40 transition-all cursor-pointer active:scale-90"
            >
              <RotateCcw size={16} />
            </button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={handleCountPress}
              className="w-18 h-18 sm:w-20 sm:h-20 p-4 rounded-full bg-[#155DFC] hover:bg-[#114ecc] flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer"
            >
              <Fingerprint className="w-8 h-8 sm:w-9 sm:h-9" />
            </motion.button>

            <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08]">
              {[33, 100, 1000].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTarget(t);
                    setCount(0);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    target === t
                      ? "bg-[#155DFC] text-white"
                      : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {t === 1000 ? "1k" : t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div
            onClick={() => setIsSettingsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md p-6 sm:p-8 rounded-[2.5rem] bg-white/95 dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] backdrop-blur-2xl relative text-slate-900 dark:text-white"
            >
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="absolute top-5 sm:top-6 right-5 sm:right-6 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/10 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              <h3 className="font-heading text-lg sm:text-xl font-extrabold mb-5 sm:mb-6 text-slate-900 dark:text-white flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#155DFC]/10 border border-[#155DFC]/20 text-[#155DFC] flex items-center justify-center">
                  <Settings2 size={16} />
                </div>
                <span>Tasbeeh Settings</span>
              </h3>

              <div className="space-y-2 mb-6">
                <label className="text-xs font-semibold text-slate-600 dark:text-neutral-400 block">
                  Custom Target Count
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={customTargetInput}
                    onChange={(e) => setCustomTargetInput(e.target.value)}
                    className="flex-1 rounded-full py-2.5 px-4 bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm outline-none focus:border-[#155DFC]"
                  />
                  <button
                    onClick={() => {
                      const num = parseInt(customTargetInput, 10);
                      if (num > 0) {
                        setTarget(num);
                        setCount(0);
                        setIsSettingsOpen(false);
                      }
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#155DFC] hover:bg-[#114ecc] text-white text-xs font-semibold tracking-wide transition-all active:scale-95 cursor-pointer"
                  >
                    Set
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">Clear Lifetime History</span>
                <button
                  onClick={() => {
                    localStorage.removeItem("tasbeeh_total_count");
                    setTotalLifetime(0);
                    setIsSettingsOpen(false);
                  }}
                  className="px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 border border-rose-500/20 text-xs font-semibold hover:bg-rose-500/20 transition-all cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}