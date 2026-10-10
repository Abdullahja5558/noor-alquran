import React from "react";
import Link from "next/link";
import { BookOpen, Home, Clock, Heart, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100">
      {/* Ambient background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Arabic Basmala / Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest shadow-sm">
          <Sparkles size={14} />
          <span>Page Not Found • 404</span>
        </div>

        {/* 404 Heading */}
        <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-blue-600 dark:text-blue-500 mb-4 font-serif">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
          Lost your way? Let guidance light your path.
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been moved, removed, or never existed. Explore these popular sections instead:
        </p>

        {/* Quick helpful links grid */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          <Link
            href="/quran"
            className="p-4 rounded-2xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all shadow-sm group"
          >
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-slate-900 dark:text-white">Read Quran</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">All 114 Surahs</div>
          </Link>

          <Link
            href="/prayer-time"
            className="p-4 rounded-2xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all shadow-sm group"
          >
            <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-slate-900 dark:text-white">Prayer Times</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Namaz timings & Azan</div>
          </Link>

          <Link
            href="/dua"
            className="p-4 rounded-2xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all shadow-sm group"
          >
            <Heart className="w-5 h-5 text-pink-600 dark:text-pink-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-slate-900 dark:text-white">Daily Duas</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Masnoon supplications</div>
          </Link>

          <Link
            href="/tasbeeh"
            className="p-4 rounded-2xl bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all shadow-sm group"
          >
            <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-sm font-bold text-slate-900 dark:text-white">Tasbeeh Counter</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Digital dhikr tracker</div>
          </Link>
        </div>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
        >
          <Home size={16} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
