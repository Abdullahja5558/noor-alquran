"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Moon,
  Sun,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface HijriInfo {
  day: string;
  month: {
    en: string;
    ar: string;
    number: number;
  };
  year: string;
  designation: {
    abbreviated: string;
  };
  holidays: string[];
}

export default function IslamicCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(new Date().getDate());
  const [hijriData, setHijriData] = useState<HijriInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch Live Hijri Date from AlAdhan API
  const fetchHijri = useCallback(async (date: Date) => {
    setLoading(true);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    try {
      const res = await fetch(`https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`);
      const data = await res.json();
      if (data.data?.hijri) {
        setHijriData(data.data.hijri);
      }
    } catch (err) {
      console.error("Calendar API Error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHijri(new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay));
  }, [currentDate, selectedDay, fetchHijri]);

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    setSelectedDay(1);
  };

  const islamicEvents = [
    { title: "Ramadan Mubarak", date: "9th Hijri Month", icon: <Moon size={15} />, color: "bg-blue-500" },
    { title: "Eid-ul-Fitr", date: "1st Shawwal", icon: <Star size={15} />, color: "bg-amber-500" },
    { title: "Day of Arafah (Hajj)", date: "9th Dhul-Hijjah", icon: <Sun size={15} />, color: "bg-indigo-500" },
    { title: "Eid-ul-Adha", date: "10th Dhul-Hijjah", icon: <Star size={15} />, color: "bg-purple-500" },
    { title: "Ashura", date: "10th Muharram", icon: <Moon size={15} />, color: "bg-rose-500" },
    { title: "Mawlid an-Nabi ﷺ", date: "12th Rabi' al-Awwal", icon: <Moon size={15} />, color: "bg-[#155DFC]" },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {/* --- LEFT: CALENDAR ENGINE & HERO --- */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Home</span>
            </Link>

            <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
              Hijri & Gregorian Records
            </span>
          </div>

          <div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Islamic <span className="bg-[#155DFC] text-white px-3.5 py-0.5 rounded-full text-xl sm:text-3xl font-extrabold align-middle inline-block">Hijri Calendar</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-neutral-400 font-normal">
              Astronomical moon-phase dates, Gregorian sync, and Sunnah fasting schedules.
            </p>
          </div>

          {/* Hijri Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-6 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] overflow-hidden"
          >
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#155DFC]/10 text-[#155DFC] border border-[#155DFC]/20">
                Selected Hijri Date
              </span>

              {loading ? (
                <div className="h-16 sm:h-20 flex items-center gap-3">
                  <Loader2 size={20} className="animate-spin text-[#155DFC]" />
                  <span className="text-xs text-slate-400">Calculating Moon Phases...</span>
                </div>
              ) : (
                <div className="pt-1">
                  <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {hijriData?.day} {hijriData?.month?.en}
                  </h2>
                  <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#155DFC] mt-1">
                    {hijriData?.year} هـ ({hijriData?.month?.ar})
                  </p>
                </div>
              )}

              <p className="text-xs font-semibold text-slate-500 dark:text-neutral-400 pt-1">
                Gregorian: {new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toDateString()}
              </p>
            </div>

            <Moon
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-slate-100 dark:text-white/[0.03] pointer-events-none"
              size={130}
              fill="currentColor"
            />
          </motion.div>

          {/* Interactive Calendar Grid */}
          <div className="p-5 sm:p-7 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08]">
            {/* Month & Year Bar */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {currentDate.toLocaleString("default", { month: "long" })}
                </h3>
                <span className="text-xs text-[#155DFC] font-semibold">
                  Year {currentDate.getFullYear()}
                </span>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] cursor-pointer active:scale-90 transition-all"
                >
                  <ChevronLeft size={15} />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] cursor-pointer active:scale-90 transition-all"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-[10px] sm:text-xs font-semibold text-slate-400 uppercase py-1.5">
                  {day}
                </div>
              ))}

              {[...Array(firstDayOfMonth)].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}

              {[...Array(daysInMonth)].map((_, i) => {
                const dayNum = i + 1;
                const isSelected = selectedDay === dayNum;
                const isToday =
                  dayNum === new Date().getDate() &&
                  currentDate.getMonth() === new Date().getMonth() &&
                  currentDate.getFullYear() === new Date().getFullYear();

                return (
                  <button
                    key={dayNum}
                    onClick={() => setSelectedDay(dayNum)}
                    className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#155DFC] text-white font-bold"
                        : isToday
                        ? "bg-slate-100 dark:bg-white/10 border border-[#155DFC] text-[#155DFC] font-bold"
                        : "bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04] text-slate-700 dark:text-neutral-300 hover:border-[#155DFC]/40"
                    }`}
                  >
                    <span>{dayNum}</span>
                    {isToday && (
                      <span className="w-1.5 h-1.5 bg-[#155DFC] rounded-full mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- RIGHT: ISLAMIC EVENTS & SUNNAH FASTING --- */}
        <div className="lg:col-span-4 space-y-5 sm:space-y-6">
          {/* Islamic Major Events Card */}
          <div className="p-5 sm:p-7 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08]">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-slate-500 dark:text-neutral-400 flex items-center gap-2">
              <CalendarIcon size={13} className="text-[#155DFC]" />
              <span>Major Islamic Milestones</span>
            </h3>

            <div className="space-y-2.5">
              {islamicEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] hover:border-[#155DFC]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="p-1 rounded-full bg-slate-200 dark:bg-white/10 text-[#155DFC]">
                      {event.icon}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-neutral-500">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#155DFC] transition-colors">
                    {event.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Sunnah Fasting Card */}
          <div className="p-5 sm:p-7 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08]">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-[#155DFC] block">
                Sunnah Practice
              </span>
              <h4 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Monday & Thursday Fasting
              </h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-neutral-400 font-normal">
                &quot;The deeds of people are presented on Monday and Thursday, and I love that my deeds be presented while I am fasting.&quot;
              </p>
              <span className="text-[10px] font-semibold text-slate-400 dark:text-neutral-500 block pt-1">
                Sunan an-Nasa&apos;i 2358 | Sahih
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}