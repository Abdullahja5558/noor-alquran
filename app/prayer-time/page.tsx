"use client";

import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Sunrise,
  Sun,
  Sunset,
  CloudMoon,
  BellRing,
  ChevronDown,
  Navigation,
  Loader2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRAYER_HADITHS, Hadith } from "@/components/hadithData";

const PAKISTAN_CITIES = [
  { name: "Faisalabad", id: "Faisalabad" },
  { name: "Karachi", id: "Karachi" },
  { name: "Lahore", id: "Lahore" },
  { name: "Islamabad", id: "Islamabad" },
  { name: "Rawalpindi", id: "Rawalpindi" },
  { name: "Multan", id: "Multan" },
  { name: "Peshawar", id: "Peshawar" },
  { name: "Quetta", id: "Quetta" },
  { name: "Sialkot", id: "Sialkot" },
  { name: "Gujranwala", id: "Gujranwala" },
  { name: "Makkah", id: "Makkah" },
  { name: "Madinah", id: "Madinah" },
  { name: "Dubai", id: "Dubai" },
  { name: "London", id: "London" },
];

interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
}

export default function PrayerTimesPage() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("Faisalabad");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationName, setLocationName] = useState("Faisalabad, Pakistan");
  const [times, setTimes] = useState<PrayerTimings | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hadithIndex, setHadithIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [isAdhanPlaying, setIsAdhanPlaying] = useState(false);
  const adhanAudioRef = useRef<HTMLAudioElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clock interval
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch Prayer Timings
  const fetchPrayers = useCallback(async () => {
    setLoading(true);
    try {
      let url = "";
      if (coords) {
        url = `https://api.aladhan.com/v1/timings?latitude=${coords.lat}&longitude=${coords.lng}&method=1&school=1`;
      } else {
        const country = selectedCity === "Makkah" || selectedCity === "Madinah" ? "Saudi Arabia" : selectedCity === "Dubai" ? "UAE" : selectedCity === "London" ? "UK" : "Pakistan";
        url = `https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=${country}&method=1&school=1`;
      }

      const res = await fetch(url);
      const data = await res.json();
      if (data.data?.timings) {
        setTimes(data.data.timings);
      }
    } catch (err) {
      console.error("API Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  }, [coords, selectedCity]);

  useEffect(() => {
    fetchPrayers();
  }, [fetchPrayers]);

  // GPS Location detector
  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsDetectingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLocationName("Your Current Location (GPS)");
        setIsDetectingLocation(false);
        setIsDropdownOpen(false);
      },
      (error) => {
        console.warn("GPS error", error);
        setIsDetectingLocation(false);
        alert("Could not access location. Please select a city manually.");
      }
    );
  };

  const formatTo12H = (time24: string) => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(":");
    let h = parseInt(hours, 10);
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return `${h < 10 ? "0" + h : h}:${minutes} ${ampm}`;
  };

  // Prayer status calculation & countdown
  const prayerStatus = useMemo(() => {
    if (!times) return { active: "", next: { name: "Fajr", time: "05:00" }, countdown: "" };
    const prayerOrder: (keyof PrayerTimings)[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const now = currentTime;
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const currentSecs = now.getSeconds();

    let active = "";
    let nextPrayerName: keyof PrayerTimings = "Fajr";
    let nextPrayerTime = times.Fajr;
    let targetMins = 0;

    for (let i = 0; i < prayerOrder.length; i++) {
      const name = prayerOrder[i];
      const timeStr = times[name];
      if (!timeStr) continue;
      const [h, m] = timeStr.split(":").map(Number);
      const prayerMins = h * 60 + m;

      if (currentMins >= prayerMins) {
        active = name;
      } else {
        nextPrayerName = name;
        nextPrayerTime = times[name];
        targetMins = prayerMins;
        break;
      }
    }

    if (active === "Isha") {
      nextPrayerName = "Fajr";
      nextPrayerTime = times.Fajr;
      const [fh, fm] = times.Fajr.split(":").map(Number);
      targetMins = 24 * 60 + (fh * 60 + fm);
    }

    // Compute remaining time
    let diffSecs = (targetMins - currentMins) * 60 - currentSecs;
    if (diffSecs < 0) diffSecs = 0;
    const remHours = Math.floor(diffSecs / 3600);
    const remMins = Math.floor((diffSecs % 3600) / 60);
    const remS = diffSecs % 60;
    const countdown = `${remHours.toString().padStart(2, "0")}h ${remMins
      .toString()
      .padStart(2, "0")}m ${remS.toString().padStart(2, "0")}s`;

    return { active, next: { name: nextPrayerName, time: nextPrayerTime }, countdown };
  }, [times, currentTime]);

  const prayerIcons: Record<string, React.ReactNode> = {
    Fajr: <Sunrise className="w-5 h-5 sm:w-6 sm:h-6" />,
    Dhuhr: <Sun className="w-5 h-5 sm:w-6 sm:h-6" />,
    Asr: <Sun className="w-5 h-5 sm:w-6 sm:h-6 opacity-75" />,
    Maghrib: <Sunset className="w-5 h-5 sm:w-6 sm:h-6" />,
    Isha: <CloudMoon className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  const toggleAdhanAudio = () => {
    if (!adhanAudioRef.current) return;
    if (isAdhanPlaying) {
      adhanAudioRef.current.pause();
      setIsAdhanPlaying(false);
    } else {
      adhanAudioRef.current.play().then(() => setIsAdhanPlaying(true)).catch(() => {});
    }
  };

  const currentHadith: Hadith = PRAYER_HADITHS[hadithIndex] || PRAYER_HADITHS[0];

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30">
      <Navbar />

      {/* Adhan Audio Stream */}
      <audio
        ref={adhanAudioRef}
        src="https://media.sd.ma/assabile/adhan_3743841/e2e50529dcfc.mp3"
        onEnded={() => setIsAdhanPlaying(false)}
        preload="none"
      />

      <main className="pt-28 sm:pt-32 pb-24 sm:pb-32 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto">
        {/* Top Floating Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Location Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider transition-all active:scale-95 shadow-sm hover:border-emerald-500/50"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="truncate max-w-[120px] sm:max-w-none">{coords ? "GPS Location" : selectedCity}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 8 }}
                    className="absolute top-full mt-2 right-0 w-60 sm:w-64 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-50 p-2"
                  >
                    {/* GPS Detect Option */}
                    <button
                      onClick={handleDetectLocation}
                      disabled={isDetectingLocation}
                      className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-all mb-2"
                    >
                      {isDetectingLocation ? <Loader2 size={15} className="animate-spin" /> : <Navigation size={15} />}
                      <span>Use Exact GPS Location</span>
                    </button>

                    <div className="max-h-56 overflow-y-auto no-scrollbar space-y-1">
                      {PAKISTAN_CITIES.map((city) => (
                        <button
                          key={city.id}
                          onClick={() => {
                            setCoords(null);
                            setSelectedCity(city.id);
                            setLocationName(`${city.name}`);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                            !coords && selectedCity === city.id
                              ? "bg-emerald-600 text-white shadow-md"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                          }`}
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Adhan Audio Button */}
            <button
              onClick={toggleAdhanAudio}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all active:scale-95 ${
                isAdhanPlaying
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/30"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 shadow-sm"
              }`}
            >
              {isAdhanPlaying ? <VolumeX size={15} /> : <Volume2 size={15} />}
              <span className="text-xs font-bold uppercase tracking-wider">{isAdhanPlaying ? "Stop" : "Adhan"}</span>
            </button>
          </div>
        </div>

        {/* --- HERO NEXT PRAYER DISPLAY --- */}
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="h-60 sm:h-72 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-3 sm:gap-4 shadow-sm mb-8 sm:mb-10">
              <Loader2 size={32} className="text-emerald-500 animate-spin" />
              <span className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-emerald-600">
                Calculating Astronomical Timings...
              </span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center mb-8 sm:mb-10 overflow-hidden"
            >
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-700 dark:text-emerald-300">
                  <BellRing size={13} className="text-emerald-500 animate-bounce" />
                  <span className="text-[9.5px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                    Upcoming: {prayerStatus.next.name} in {locationName}
                  </span>
                </div>

                {/* Big Time Display */}
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
                  {formatTo12H(prayerStatus.next.time).split(" ")[0]}
                  <span className="text-2xl sm:text-4xl md:text-5xl text-emerald-500 ml-1.5 sm:ml-2 font-normal italic">
                    {formatTo12H(prayerStatus.next.time).split(" ")[1]}
                  </span>
                </h2>

                {/* Live Countdown */}
                <div className="pt-1 sm:pt-2">
                  <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-black tracking-wider sm:tracking-widest uppercase">
                    Starts in: {prayerStatus.countdown}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- PRAYER TIMINGS CARDS LIST --- */}
        <div className="space-y-3 sm:space-y-4">
          {(["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const).map((name) => {
            const isActive = prayerStatus.active === name;
            const timeStr = times ? times[name] : "00:00";

            return (
              <motion.div
                key={name}
                whileHover={{ scale: 1.01 }}
                className={`p-4 sm:p-6 md:p-7 rounded-[1.6rem] sm:rounded-[2rem] border flex items-center justify-between transition-all duration-200 gap-3 ${
                  isActive
                    ? "bg-emerald-600 text-white border-emerald-400 shadow-xl shadow-emerald-600/30"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 text-slate-900 dark:text-white shadow-sm"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  <div
                    className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all shrink-0 ${
                      isActive
                        ? "bg-black/20 text-white"
                        : "bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400"
                    }`}
                  >
                    {prayerIcons[name]}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black">{name}</h3>
                    <span
                      className={`text-[9px] sm:text-[10px] uppercase font-black tracking-wider sm:tracking-widest ${
                        isActive ? "text-emerald-100" : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {isActive ? "• Active Now" : "Standard Daily"}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
                    {formatTo12H(timeStr)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- SUNNAH HADITH INSPIRATION --- */}
        <section className="mt-12 sm:mt-16">
          <div className="p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xl relative overflow-hidden">
            {/* Header with Prev/Next Controls */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-slate-200 dark:border-slate-800">
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] sm:tracking-[0.3em] text-emerald-600 dark:text-emerald-400">
                Prophetic Inspiration
              </span>

              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() =>
                    setHadithIndex((prev) => (prev > 0 ? prev - 1 : PRAYER_HADITHS.length - 1))
                  }
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-500 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-[11px] sm:text-xs font-bold text-slate-400 px-1">
                  {hadithIndex + 1} / {PRAYER_HADITHS.length}
                </span>
                <button
                  onClick={() =>
                    setHadithIndex((prev) => (prev + 1) % PRAYER_HADITHS.length)
                  }
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-500 cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Prophet Muhammad (PBUH) Said */}
            <h4 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white">
              Hazrat Muhammad <span className="text-emerald-500 font-normal">ﷺ</span> Said:
            </h4>

            {/* Arabic Hadith */}
            <div className="mb-6 sm:mb-8">
              <p className="font-arabic text-2xl sm:text-4xl md:text-5xl leading-loose text-emerald-600 dark:text-emerald-400">
                {currentHadith.arabic}
              </p>
            </div>

            <div className="w-20 sm:w-24 h-px bg-slate-200 dark:bg-slate-800 mx-auto mb-6 sm:mb-8" />

            {/* Urdu Hadith Translation */}
            <div className="mb-4 sm:mb-6">
              <p className="font-urdu text-lg sm:text-2xl md:text-3xl leading-relaxed text-slate-800 dark:text-slate-200">
                {currentHadith.urdu}
              </p>
            </div>

            {/* English Meaning */}
            <div className="max-w-2xl mx-auto mb-5 sm:mb-6">
              <p className="text-xs sm:text-sm md:text-base italic text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                &quot;{currentHadith.english}&quot;
              </p>
            </div>

            {/* Reference Badge */}
            <span className="inline-block px-4 sm:px-5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Source: {currentHadith.ref}
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}