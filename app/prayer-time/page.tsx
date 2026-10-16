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
        const country =
          selectedCity === "Makkah" || selectedCity === "Madinah"
            ? "Saudi Arabia"
            : selectedCity === "Dubai"
            ? "UAE"
            : selectedCity === "London"
            ? "UK"
            : "Pakistan";
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

    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const nowSeconds = currentTime.getSeconds();
    const totalNowSec = nowMinutes * 60 + nowSeconds;

    const timingsInSec: Record<string, number> = {};
    for (const name of prayerOrder) {
      const [h, m] = times[name].split(":").map(Number);
      timingsInSec[name] = (h * 60 + m) * 60;
    }

    let active = "";
    let nextPrayerName = "Fajr";
    let nextPrayerTime = times.Fajr;
    let diffSec = 0;

    if (totalNowSec >= timingsInSec.Fajr && totalNowSec < timingsInSec.Dhuhr) {
      active = "Fajr";
      nextPrayerName = "Dhuhr";
      nextPrayerTime = times.Dhuhr;
      diffSec = timingsInSec.Dhuhr - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Dhuhr && totalNowSec < timingsInSec.Asr) {
      active = "Dhuhr";
      nextPrayerName = "Asr";
      nextPrayerTime = times.Asr;
      diffSec = timingsInSec.Asr - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Asr && totalNowSec < timingsInSec.Maghrib) {
      active = "Asr";
      nextPrayerName = "Maghrib";
      nextPrayerTime = times.Maghrib;
      diffSec = timingsInSec.Maghrib - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Maghrib && totalNowSec < timingsInSec.Isha) {
      active = "Maghrib";
      nextPrayerName = "Isha";
      nextPrayerTime = times.Isha;
      diffSec = timingsInSec.Isha - totalNowSec;
    } else {
      active = "Isha";
      nextPrayerName = "Fajr";
      nextPrayerTime = times.Fajr;
      if (totalNowSec >= timingsInSec.Isha) {
        diffSec = 24 * 3600 - totalNowSec + timingsInSec.Fajr;
      } else {
        diffSec = timingsInSec.Fajr - totalNowSec;
      }
    }

    const remHours = Math.floor(diffSec / 3600);
    const remMins = Math.floor((diffSec % 3600) / 60);
    const remS = diffSec % 60;
    const countdown = `${remHours.toString().padStart(2, "0")}h ${remMins
      .toString()
      .padStart(2, "0")}m ${remS.toString().padStart(2, "0")}s`;

    return { active, next: { name: nextPrayerName, time: nextPrayerTime }, countdown };
  }, [times, currentTime]);

  const prayerIcons: Record<string, React.ReactNode> = {
    Fajr: <Sunrise className="w-5 h-5 sm:w-6 sm:h-6" />,
    Dhuhr: <Sun className="w-5 h-5 sm:w-6 sm:h-6" />,
    Asr: <Sun className="w-5 h-5 sm:w-6 sm:h-6 opacity-80" />,
    Maghrib: <Sunset className="w-5 h-5 sm:w-6 sm:h-6" />,
    Isha: <CloudMoon className="w-5 h-5 sm:w-6 sm:h-6" />,
  };

  // Listen to stop-global-audio event to pause Adhan when other players activate
  useEffect(() => {
    const handleStop = () => {
      if (adhanAudioRef.current && !adhanAudioRef.current.paused) {
        adhanAudioRef.current.pause();
        setIsAdhanPlaying(false);
      }
    };
    window.addEventListener("stop-global-audio", handleStop);
    return () => {
      window.removeEventListener("stop-global-audio", handleStop);
      if (adhanAudioRef.current) {
        adhanAudioRef.current.pause();
      }
    };
  }, []);

  const toggleAdhanAudio = () => {
    if (!adhanAudioRef.current) return;
    if (isAdhanPlaying) {
      adhanAudioRef.current.pause();
      setIsAdhanPlaying(false);
    } else {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("stop-global-audio"));
      }
      adhanAudioRef.current
        .play()
        .then(() => setIsAdhanPlaying(true))
        .catch((err) => {
          console.warn("Adhan playback prevented", err);
          setIsAdhanPlaying(false);
        });
    }
  };

  const currentHadith: Hadith = PRAYER_HADITHS[hadithIndex] || PRAYER_HADITHS[0];

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      {/* Authentic Adhan Audio Stream (Local 0ms instant playback) */}
      <audio
        ref={adhanAudioRef}
        src="/audio/adhan.mp3"
        onPlay={() => setIsAdhanPlaying(true)}
        onPause={() => setIsAdhanPlaying(false)}
        onEnded={() => setIsAdhanPlaying(false)}
        preload="auto"
      />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
        {/* Top Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Location Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-900 dark:text-white font-semibold text-xs transition-colors hover:border-[#155DFC]/50 cursor-pointer"
              >
                <div className="w-2 h-2 bg-[#155DFC] rounded-full" />
                <span className="truncate max-w-[120px] sm:max-w-none">{coords ? "GPS Location" : selectedCity}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 6 }}
                    className="absolute top-full mt-2 right-0 w-60 sm:w-64 rounded-3xl bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] overflow-hidden z-50 p-2"
                  >
                    {/* GPS Detect Option */}
                    <button
                      onClick={handleDetectLocation}
                      disabled={isDetectingLocation}
                      className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-[#155DFC] bg-[#155DFC]/10 hover:bg-[#155DFC]/15 transition-all mb-2 cursor-pointer"
                    >
                      {isDetectingLocation ? <Loader2 size={14} className="animate-spin" /> : <Navigation size={14} />}
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
                          className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                            !coords && selectedCity === city.id
                              ? "bg-[#155DFC] text-white"
                              : "text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
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
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                isAdhanPlaying
                  ? "bg-[#155DFC] text-white border-[#155DFC] shadow-sm shadow-[#155DFC]/20"
                  : "bg-white dark:bg-white/[0.04] border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] hover:border-[#155DFC]/40"
              }`}
              title={isAdhanPlaying ? "Pause Adhan" : "Play Adhan (Mishary Rashid Alafasy)"}
            >
              {isAdhanPlaying ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <VolumeX size={14} />
                  <span>Stop Adhan</span>
                </>
              ) : (
                <>
                  <Volume2 size={14} />
                  <span>Play Adhan</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Title */}
        <section className="text-center mb-10 sm:mb-12">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            Prayer <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">Times (Namaz)</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal mt-2 leading-relaxed">
            Astronomical prayer timings, live countdown to next Salah, GPS location tracking, and authentic Adhan audio.
          </p>
        </section>

        {/* Next Prayer Display Card */}
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="h-60 sm:h-72 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Loader2 size={30} className="text-[#155DFC] animate-spin" />
              <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
                Calculating Astronomical Timings...
              </span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] text-center mb-8 sm:mb-10 overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 text-xs font-semibold">
                  <BellRing size={13} className="text-[#155DFC]" />
                  <span>
                    Upcoming: {prayerStatus.next.name} in {locationName}
                  </span>
                </div>

                {/* Big Time Display */}
                <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                  {formatTo12H(prayerStatus.next.time).split(" ")[0]}
                  <span className="text-2xl sm:text-4xl md:text-5xl text-[#155DFC] ml-2 font-bold align-middle">
                    {formatTo12H(prayerStatus.next.time).split(" ")[1]}
                  </span>
                </h2>

                {/* Live Countdown */}
                <div className="pt-1 sm:pt-2">
                  <span className="inline-block px-5 py-2 rounded-full bg-[#155DFC]/10 border border-[#155DFC]/20 text-[#155DFC] text-xs sm:text-sm font-bold tracking-wide">
                    Starts in: {prayerStatus.countdown}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Prayer Timings List */}
        <div className="space-y-3 sm:space-y-3.5">
          {(["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const).map((name) => {
            const isActive = prayerStatus.active === name;
            const timeStr = times ? times[name] : "00:00";

            return (
              <div
                key={name}
                className={`p-4 sm:p-5 md:p-6 rounded-full border flex items-center justify-between transition-colors duration-200 gap-3 ${
                  isActive
                    ? "bg-[#155DFC] text-white border-[#155DFC]"
                    : "bg-white dark:bg-[#070709] border-slate-200/80 dark:border-white/[0.08] hover:border-[#155DFC]/40 text-slate-900 dark:text-white"
                }`}
              >
                <div className="flex items-center gap-3.5 sm:gap-5">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/[0.08] text-[#155DFC]"
                    }`}
                  >
                    {prayerIcons[name]}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg sm:text-2xl font-bold">{name}</h3>
                    <span
                      className={`text-[10px] sm:text-xs font-semibold ${
                        isActive ? "text-white/80" : "text-slate-500 dark:text-neutral-400"
                      }`}
                    >
                      {isActive ? "• Active Now" : "Standard Daily"}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0 pr-2">
                  <p className="font-heading text-lg sm:text-2xl font-bold tracking-tight">
                    {formatTo12H(timeStr)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hadith Inspiration Section */}
        <section className="mt-12 sm:mt-16">
          <div className="p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] text-center relative overflow-hidden">
            {/* Header Controls */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3.5 border-b border-slate-200/80 dark:border-white/[0.08]">
              <span className="text-xs font-semibold text-[#155DFC]">
                Prophetic Hadith
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setHadithIndex((prev) => (prev > 0 ? prev - 1 : PRAYER_HADITHS.length - 1))
                  }
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-neutral-300 hover:text-[#155DFC] cursor-pointer"
                >
                  <ChevronLeft size={15} />
                </button>
                <span className="text-xs font-semibold text-slate-400 px-1">
                  {hadithIndex + 1} / {PRAYER_HADITHS.length}
                </span>
                <button
                  onClick={() =>
                    setHadithIndex((prev) => (prev + 1) % PRAYER_HADITHS.length)
                  }
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-600 dark:text-neutral-300 hover:text-[#155DFC] cursor-pointer"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            <h4 className="font-heading text-lg sm:text-2xl font-bold mb-6 text-slate-900 dark:text-white">
              Hazrat Muhammad <span className="text-[#155DFC]">ﷺ</span> Said:
            </h4>

            {/* Arabic Hadith */}
            <div className="mb-6 sm:mb-8 px-2">
              <p className="font-arabic text-2xl sm:text-4xl md:text-5xl leading-loose text-slate-900 dark:text-white">
                {currentHadith.arabic}
              </p>
            </div>

            <div className="w-16 h-px bg-slate-200 dark:bg-white/10 mx-auto mb-6" />

            {/* Urdu Hadith Translation */}
            <div className="mb-4 sm:mb-6">
              <p className="font-urdu text-lg sm:text-2xl leading-relaxed text-slate-800 dark:text-neutral-200">
                {currentHadith.urdu}
              </p>
            </div>

            {/* English Meaning */}
            <div className="max-w-2xl mx-auto mb-5 sm:mb-6">
              <p className="text-xs sm:text-sm italic text-slate-600 dark:text-neutral-400 font-normal leading-relaxed">
                &quot;{currentHadith.english}&quot;
              </p>
            </div>

            {/* Reference Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-neutral-400">
              Source: {currentHadith.ref}
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}