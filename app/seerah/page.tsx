"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, History } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROPHETS_DATA, SEERAH_TIMELINE } from "@/components/seerahData";

export default function SeerahPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
            Prophetic Chronicles
          </span>
        </div>

        {/* Hero Banner */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            Prophetic <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">Seerah & Heritage</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed mt-2">
            Chronological milestones of the blessed life of Prophet Muhammad ﷺ and the revered Messengers of Allah.
          </p>
        </section>

        {/* --- PROPHET MUHAMMAD (PBUH) TIMELINE --- */}
        <section className="relative mb-20 sm:mb-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Prophet Muhammad <span className="text-[#155DFC]">ﷺ</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1 font-medium">
              Key Chronological Milestones
            </p>
          </div>

          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-[92%] top-24 z-0 bg-slate-200 dark:bg-white/[0.08]" />

          <div className="space-y-6 sm:space-y-10 relative z-10">
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
                  <div className="p-6 sm:p-8 rounded-[2.2rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] transition-all relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#155DFC]">
                        {item.year}
                      </span>
                      <History className="text-slate-400 dark:text-neutral-600" size={18} />
                    </div>

                    <h3 className="font-heading text-base sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">
                      {item.event}
                    </h3>

                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-neutral-400 font-normal mb-3">
                      {item.desc_en}
                    </p>

                    <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                      <p className="font-urdu text-base sm:text-lg leading-relaxed text-right text-slate-800 dark:text-neutral-200">
                        {item.desc_ur}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-2.5 md:relative md:left-0 z-20">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#155DFC] border-2 sm:border-3 border-white dark:border-black flex items-center justify-center" />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROPHETS DIRECTORY --- */}
        <section>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              The Messengers of <span className="text-[#155DFC]">Allah</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-neutral-400 mt-1 font-medium">
              Chronicles and titles of the Prophets (Peace Be Upon Them)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {PROPHETS_DATA.map((prophet, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-[2.2rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[#155DFC] flex items-center justify-center mb-4">
                  <ShieldCheck size={18} />
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-0.5">
                  {prophet.name}
                </h3>
                <span className="text-[11px] font-semibold text-[#155DFC] block mb-3">
                  {prophet.title}
                </span>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal leading-relaxed mb-3">
                  {prophet.desc_en}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                  <p className="font-urdu text-base sm:text-lg text-right text-slate-800 dark:text-neutral-200 leading-relaxed">
                    {prophet.desc_ur}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}