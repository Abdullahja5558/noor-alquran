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
  Sparkles,
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
    { title: "Mawlid an-Nabi ﷺ", date: "12th Rabi' al-Awwal", icon: <Sparkles size={15} />, color: "bg-blue-600" },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden pb-24">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
        {/* --- LEFT: CALENDAR ENGINE & HERO --- */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
            >
              <ArrowLeft size={15} />
              <span>Home</span>
            </Link>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
              <CalendarIcon size={13} />
              <span>Hijri & Gregorian</span>
            </div>
          </div>

          {/* Hijri Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] overflow-hidden shadow-sm"
          >
            <div className="relative z-10 space-y-2 sm:space-y-3">
              <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Selected Hijri Date
              </span>

              {loading ? (
                <div className="h-16 sm:h-20 flex items-center gap-3">
                  <Loader2 size={22} className="animate-spin text-blue-500" />
                  <span className="text-xs text-slate-400">Calculating Moon Phases...</span>
                </div>
              ) : (
                <div className="pt-1 sm:pt-2">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
                    {hijriData?.day} {hijriData?.month?.en}
                  </h2>
                  <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mt-1">
                    {hijriData?.year} هـ ({hijriData?.month?.ar})
                  </p>
                </div>
              )}

              <p className="text-xs sm:text-sm font-bold tracking-wider sm:tracking-widest uppercase text-slate-500 pt-1 sm:pt-2">
                Gregorian: {new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toDateString()}
              </p>
            </div>

            <Moon
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-slate-100 dark:text-[#0c111a]/50 pointer-events-none"
              size={140}
              fill="currentColor"
            />
          </motion.div>

          {/* Interactive Calendar Grid */}
          <div className="p-4 sm:p-6 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm">
            {/* Month & Year Bar */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 px-1 sm:px-2">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                  {currentDate.toLocaleString("default", { month: "long" })}
                </h3>
                <span className="text-[11px] sm:text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
                  Year {currentDate.getFullYear()}
                </span>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-300 hover:text-blue-500 cursor-pointer active:scale-90 transition-all"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 sm:p-3 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-300 hover:text-blue-500 cursor-pointer active:scale-90 transition-all"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-[9px] sm:text-[10px] font-black text-slate-400 uppercase py-1 sm:py-2">
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
                  <motion.button
                    key={dayNum}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDay(dayNum)}
                    className={`relative aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/35"
                        : isToday
                        ? "bg-white dark:bg-[#07090e] border-blue-500 text-blue-600 dark:text-blue-400 font-black shadow-sm"
                        : "bg-slate-50 dark:bg-[#0c111a] border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-300 hover:border-blue-500/50"
                    }`}
                  >
                    <span>{dayNum}</span>
                    {isToday && (
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-blue-500 rounded-full mt-0.5 sm:mt-1" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- RIGHT: ISLAMIC EVENTS & SUNNAH FASTING --- */}
        <div className="lg:col-span-4 space-y-5 sm:space-y-6">
          {/* Islamic Major Events Card */}
          <div className="p-5 sm:p-6 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm">
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 sm:mb-6 text-slate-500 flex items-center gap-2">
              <Sparkles size={13} className="text-amber-500" />
              <span>Major Islamic Milestones</span>
            </h3>

            <div className="space-y-2.5 sm:space-y-3">
              {islamicEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="p-1 rounded-lg bg-slate-200 dark:bg-[#141c2b] text-blue-600 dark:text-blue-400">
                      {event.icon}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-slate-400">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Sunnah Fasting Card with Solid Clean Styling */}
          <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-sm relative overflow-hidden">
            <div className="relative z-10 space-y-2.5 sm:space-y-3">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-blue-600 dark:text-blue-400 block">
                Sunnah Practice
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Monday & Thursday Fasting
              </h4>
              <p className="text-xs leading-relaxed italic text-slate-600 dark:text-slate-400 font-light">
                &quot;The deeds of people are presented on Monday and Thursday, and I love that my deeds be presented while I am fasting.&quot;
              </p>
              <span className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 block pt-1 sm:pt-2">
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