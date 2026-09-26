"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Heart, ShieldCheck, History, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROPHETS_DATA, SEERAH_TIMELINE } from "@/components/seerahData";

export default function SeerahPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden pb-24">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition-colors shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Star size={13} />
            <span>The Noble Seerah</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="text-center mb-16 sm:mb-20 md:mb-28">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[9.5px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-emerald-600 dark:text-emerald-400 mb-3 sm:mb-4 shadow-sm">
              <Sparkles size={12} />
              <span>Sacred History & Legacy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-3 sm:mb-4 text-slate-900 dark:text-white leading-[1.08] sm:leading-[1.05]">
              Prophetic <br />
              <span className="text-emerald-600 italic font-serif">Heritage.</span>
            </h1>
            <p className="max-w-lg mx-auto text-[11px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest text-slate-500 font-bold">
              A journey through the blessed life of Prophet Muhammad ﷺ and the Messengers of Allah
            </p>
          </motion.div>
        </section>

        {/* --- PROPHET MUHAMMAD (PBUH) TIMELINE --- */}
        <section className="relative mb-20 sm:mb-28 md:mb-36">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block p-3.5 sm:p-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-500 mb-3 sm:mb-4 shadow-sm">
              <Heart fill="currentColor" size={24} />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              Prophet Muhammad <span className="text-emerald-500 font-normal">ﷺ</span>
            </h2>
            <p className="text-emerald-600 dark:text-emerald-400 mt-1.5 sm:mt-2 tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[10px] sm:text-[11px] font-black">
              Key Chronological Milestones
            </p>
          </div>

          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-[92%] top-28 z-0 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8 sm:space-y-12 md:space-y-20 relative z-10">
            {SEERAH_TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 w-full pl-8 sm:pl-10 md:pl-0">
                  <div className="p-6 sm:p-8 md:p-10 rounded-[1.8rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm relative group">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-emerald-600 dark:text-emerald-400 font-black text-xl sm:text-2xl md:text-3xl">
                        {item.year}
                      </span>
                      <History className="text-slate-300 dark:text-slate-700" size={22} />
                    </div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-slate-900 dark:text-white">
                      {item.event}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 font-light mb-3 sm:mb-4">
                      {item.desc_en}
                    </p>

                    <div className="h-px w-full bg-slate-100 dark:bg-slate-800 my-3 sm:my-4" />

                    <p className="font-urdu text-base sm:text-lg md:text-2xl leading-relaxed text-right text-slate-800 dark:text-emerald-100">
                      {item.desc_ur}
                    </p>
                  </div>
                </div>

                {/* Pulsing Node */}
                <div className="absolute left-1.5 md:relative md:left-0 z-20">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROPHETS DIRECTORY --- */}
        <section>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
              The Messengers of Allah
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-widest mt-1.5 sm:mt-2 font-bold">
              Stories and titles of selected Prophets (Peace Be Upon Them)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {PROPHETS_DATA.map((prophet, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 md:p-10 rounded-[1.8rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 sm:mb-6 shadow-sm">
                  <ShieldCheck size={22} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {prophet.name}
                </h3>
                <span className="text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-3 sm:mb-4">
                  {prophet.title}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-3 sm:mb-4">
                  {prophet.desc_en}
                </p>

                <div className="h-px w-14 sm:w-16 bg-slate-200 dark:bg-slate-800 my-3 sm:my-4" />

                <p className="font-urdu text-base sm:text-lg md:text-xl text-right text-slate-800 dark:text-slate-200 leading-relaxed">
                  {prophet.desc_ur}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}