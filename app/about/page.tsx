"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Heart,
  Calendar,
  Clock,
  BookOpen,
  Sparkles,
  Smartphone,
  Apple,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PremiumAbout() {
  const [userCount, setUserCount] = useState(128450);

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden pb-24">
      <Navbar />

      <main className="pt-28 sm:pt-36 px-3 sm:px-6 md:px-8 max-w-6xl mx-auto">
        {/* Top Floating Badge */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Return Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
            <Sparkles size={13} />
            <span>Version 3.0 Elite</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16 sm:mb-24 md:mb-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tight mb-6 sm:mb-8 text-slate-900 dark:text-white leading-[0.95] sm:leading-[0.9]">
              Digital <br />
              <span className="text-blue-600 dark:text-blue-400 italic font-serif">
                Spiritualism.
              </span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed text-slate-600 dark:text-slate-300 mb-8 sm:mb-12">
              An elegant, modern Islamic web portal crafted with deep reverence and precision for the modern believer who seeks beauty and peace in worship.
            </p>

            <div className="flex justify-center items-center gap-6 sm:gap-8">
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  {userCount.toLocaleString()}+
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                  Daily Listeners
                </p>
              </div>

              <div className="w-px h-8 sm:h-10 bg-slate-200 dark:bg-[#141c2b]" />

              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  114
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                  Surahs with Audio
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Ecosystem Grid */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2 p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Sacred Scripture with Audio
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-lg mb-5 sm:mb-6">
                  Experience full Arabic recitation coupled with synchronized verse-by-verse Urdu and English translations.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  114 Surahs
                </span>
                <span className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Sequential Mode
                </span>
                <span className="px-3.5 sm:px-4 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  HD Audio
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm flex flex-col justify-between">
              <Clock className="text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 w-8 h-8 sm:w-9 sm:h-9" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  Astronomical Prayer Timings
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Automatic GPS calculation and countdown timers for daily prayers worldwide.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm flex flex-col justify-between">
              <Calendar className="text-indigo-500 mb-4 sm:mb-6 w-8 h-8 sm:w-9 sm:h-9" />
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2">
                  Islamic Lunar Calendar
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Live moon-phase Hijri dates alongside Gregorian records and Sunnah fasting days.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider mb-3 sm:mb-4">
                  <Heart size={11} fill="currentColor" />
                  <span>Spiritual Arsenal</span>
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Duas, Digital Tasbeeh & Seerah
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  Authentic supplications with audio pronunciation, tactile digital tasbeeh counter, and the Prophetic timeline.
                </p>
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] flex items-center justify-center text-blue-500 shrink-0 shadow-sm">
                <Star className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Dual Vision */}
        <section className="mb-16 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm space-y-3 sm:space-y-4">
              <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-600 dark:text-blue-400 block">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Faith, Redefined for <span className="text-blue-600 dark:text-blue-400 italic">Today.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                A digital sanctuary designed with zero ads, ultra-fast performance, and serene aesthetic harmony to keep you connected to the words of Allah.
              </p>
            </div>

            <div className="p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm space-y-3 sm:space-y-4 text-right">
              <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-600 dark:text-blue-400 block font-sans">
                ہمارا عزم
              </span>
              <h3 className="font-urdu text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                خوبصورتی اور <span className="text-blue-600 dark:text-blue-400">روحانی سکون</span>
              </h3>
              <p className="font-urdu text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                ایک ایسا پاکیزہ ڈیجیٹل پلیٹ فارم جو بغیر کسی اشتہار کے آپ کو قرآن، دعا اور سنتِ نبوی ﷺ سے جوڑے۔
              </p>
            </div>
          </div>
        </section>

        {/* Mobile App Teaser */}
        <section className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-center shadow-xl relative overflow-hidden mb-12 sm:mb-16">
          <div className="relative z-10 space-y-3 sm:space-y-4 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-blue-600 dark:text-blue-400">
              <Sparkles size={12} />
              <span>Project Noor Mobile</span>
            </div>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              The Light in Your Pocket
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              We are currently crafting progressive native apps for iOS & Android with offline Mushaf and Adhan alarms.
            </p>

            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-slate-500">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Apple size={17} />
                <span>iOS App (Coming Soon)</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-[#141c2b]" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <Smartphone size={17} />
                <span>Android App (Coming Soon)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}