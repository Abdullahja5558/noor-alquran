"use client";

import React from "react";
import {
  ArrowLeft,
  BookOpen,
  Heart,
  Clock,
  Calendar,
  ShieldCheck,
  Github,
  Instagram,
  Code2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PremiumAbout() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-6xl mx-auto w-full">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
            Open-Source Islamic Initiative
          </span>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            About <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">Noor Al-Quran</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-normal leading-relaxed text-slate-600 dark:text-neutral-400 mt-2">
            An authentic, ad-free Islamic platform built with sincere devotion to bring the Word of Allah, authentic prophetic recitations, and spiritual essentials to believers worldwide.
          </p>

          {/* Pillars Highlights */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-8 sm:mt-10">
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#155DFC]">
                100% Free
              </p>
              <p className="text-[11px] text-slate-500 dark:text-neutral-400 font-medium mt-0.5">
                Zero Ads • No Subscriptions
              </p>
            </div>

            <div className="w-px h-8 bg-slate-200 dark:bg-white/10 hidden sm:block" />

            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#155DFC]">
                114 Surahs
              </p>
              <p className="text-[11px] text-slate-500 dark:text-neutral-400 font-medium mt-0.5">
                EveryAyah Audio & Translations
              </p>
            </div>

            <div className="w-px h-8 bg-slate-200 dark:bg-white/10 hidden sm:block" />

            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-extrabold text-[#155DFC]">
                15 Reciters
              </p>
              <p className="text-[11px] text-slate-500 dark:text-neutral-400 font-medium mt-0.5">
                World-Renowned Qaris
              </p>
            </div>
          </div>
        </section>

        {/* Feature Architecture Grid */}
        <section className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2 p-6 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[#155DFC] flex items-center justify-center mb-5">
                  <BookOpen size={18} />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Authentic Scripture & Verse Recitation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed max-w-lg mb-6">
                  Complete Uthmani Arabic scripture paired with verse-synchronized Urdu and English translations. Seamless audio playback driven by high-reliability EveryAyah CDNs.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-[11px] font-semibold text-slate-700 dark:text-neutral-300">
                  114 Surahs
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-[11px] font-semibold text-slate-700 dark:text-neutral-300">
                  Ayah-by-Ayah Sync
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-[11px] font-semibold text-slate-700 dark:text-neutral-300">
                  Background Ambience Mixer
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[#155DFC] flex items-center justify-center mb-5">
                <Clock size={18} />
              </div>
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                  Astronomical Prayer Timings
                </h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
                  Accurate Namaz schedules calculated via AlAdhan coordinates with live Adhan audio and countdown to next prayer.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[#155DFC] flex items-center justify-center mb-5">
                <Calendar size={18} />
              </div>
              <div>
                <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5">
                  Islamic Lunar Hijri Calendar
                </h4>
                <p className="text-xs text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
                  Live moon-phase Hijri dates alongside Gregorian records, Sunnah fasting milestones, and sacred Islamic events.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 p-6 sm:p-8 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#155DFC]/10 text-[#155DFC] text-[11px] font-semibold mb-3">
                  <Heart size={12} fill="currentColor" />
                  <span>Spiritual Essentials</span>
                </div>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                  Daily Duas, Digital Tasbeeh & Noble Seerah
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
                  Authentic Quranic and Masnoon supplications with Arabic voice pronunciation, tactile digital tasbeeh counter, and the chronological Prophetic timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sincere Dedication & Open Source */}
        <section className="p-8 sm:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] text-center mb-8">
          <div className="max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-[#155DFC]">
              <Code2 size={14} />
              <span>Sadaqah Jariyah Initiative</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Crafted for the Global Ummah
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
              Noor Al-Quran is maintained with love and reverence as an open-source contribution to Muslim technology. May Allah accept this work and make it a source of continuous blessing for all who read, listen, and learn.
            </p>

            <div className="pt-4 flex justify-center items-center gap-4">
              <Link
                href="https://github.com/Abdullahja5558"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#155DFC] hover:bg-[#114ecc] text-white text-xs font-semibold transition-all active:scale-95"
              >
                <Github size={14} />
                <span>Developer GitHub</span>
              </Link>
              <Link
                href="https://www.instagram.com/mian.abdullah.9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] text-xs font-semibold transition-colors"
              >
                <Instagram size={14} />
                <span>Instagram Community</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}