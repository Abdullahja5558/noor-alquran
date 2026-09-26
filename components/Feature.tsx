"use client";

import React from "react";
import Link from "next/link";
import { Shield, Book, Heart, Sparkles, ArrowRight } from "lucide-react";

export default function Feature() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Large Feature Card */}
        <div className="md:col-span-2 p-7 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 group hover:border-emerald-500/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-105 transition-transform shadow-sm">
              <Book className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight text-slate-900 dark:text-white">
              Complete Digital Mushaf
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg text-slate-600 dark:text-slate-300">
              Experience the Noble Quran with high-definition Uthmani script, authentic Urdu and English translations, and sequential audio recitations.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <Link
              href="/quran"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:gap-3 transition-all"
            >
              <span>Explore all 114 Surahs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Daily Reminders Card */}
        <div className="p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-emerald-500/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-500 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">
              Daily Reminders
            </h4>
            <p className="text-xs sm:text-sm italic leading-relaxed text-slate-600 dark:text-slate-400">
              &quot;Verily, in the remembrance of Allah do hearts find rest.&quot;
            </p>
          </div>

          <Link
            href="/dua"
            className="mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5"
          >
            <span>Read Duas</span>
            <span>→</span>
          </Link>
        </div>

        {/* Verified Sources Card */}
        <div className="p-7 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-emerald-500/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">
              Authentic Sources
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Authenticated Tafsir, Hadith references from Sahih al-Bukhari and Muslim, and verified prayer calculations.
            </p>
          </div>

          <Link
            href="/prayer-time"
            className="mt-6 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5"
          >
            <span>Prayer Timings</span>
            <span>→</span>
          </Link>
        </div>

        {/* Interactive Action Card (Bottom) */}
        <div className="md:col-span-2 lg:col-span-2 p-7 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-emerald-700 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 shadow-xl border border-emerald-600">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} />
              <span>Free & Open Source</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              Ready to start your spiritual journey?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-md">
              Read, listen, and reflect on the Holy Quran with high quality digital tools.
            </p>
          </div>

          <Link
            href="/quran"
            className="w-full md:w-auto text-center px-7 py-3.5 sm:py-4 rounded-full font-bold text-xs sm:text-sm bg-white text-emerald-900 hover:bg-emerald-50 transition-all active:scale-95 shadow-lg cursor-pointer whitespace-nowrap"
          >
            Get Started Free
          </Link>
        </div>

      </div>
    </section>
  );
}