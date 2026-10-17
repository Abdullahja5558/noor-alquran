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
  Compass,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRAYER_HADITHS } from "@/components/hadithData";
import { CITIES_LIST, getPrayerTimesForCity, PrayerResult } from "@/lib/prayerTimes";

export default function PrayerTimesClient({
  initialCitySlug = "lahore",
}: {
  initialCitySlug?: string;
}) {
  const initialData: PrayerResult = useMemo(
    () => getPrayerTimesForCity(initialCitySlug),
    [initialCitySlug]
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState(initialData.city.name);
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationName, setLocationName] = useState(
    `${initialData.city.name}, ${initialData.city.country}`
  );
  const [times, setTimes] = useState<Record<string, string>>(initialData.timings24);
  const [loading, setLoading] = useState(false);
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

  // Fetch or calculate prayer times on city/coords change
  const fetchPrayers = useCallback(async () => {
    if (coords) {
      setLoading(true);
      try {
        const url = `https://api.aladhan.com/v1/timings?latitude=${coords.lat}&longitude=${coords.lng}&method=1&school=1`;
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
    } else {
      const cityResult = getPrayerTimesForCity(selectedCity);
      setTimes(cityResult.timings24);
      setLocationName(`${cityResult.city.name}, ${cityResult.city.country}`);
      setLoading(false);
    }
  }, [coords, selectedCity]);

  useEffect(() => {
    // Only fetch if coords changed or city changed from initial
    if (coords || selectedCity !== initialData.city.name) {
      fetchPrayers();
    }
  }, [coords, selectedCity, fetchPrayers, initialData.city.name]);

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
    if (!times) return { active: "Fajr", next: { name: "Dhuhr", time: "12:15" }, countdown: "00h 00m 00s" };
    const prayerOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

    const nowMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    const nowSeconds = currentTime.getSeconds();
    const totalNowSec = nowMinutes * 60 + nowSeconds;

    const timingsInSec: Record<string, number> = {};
    prayerOrder.forEach((name) => {
      const timeStr = times[name] || "00:00";
      const [h, m] = timeStr.split(":").map((v) => parseInt(v, 10));
      timingsInSec[name] = (h || 0) * 3600 + (m || 0) * 60;
    });

    let active = "Isha";
    let nextPrayerName = "Fajr";
    let nextPrayerTime = times.Fajr || "05:00";
    let diffSec = 0;

    if (totalNowSec >= timingsInSec.Fajr && totalNowSec < timingsInSec.Dhuhr) {
      active = "Fajr";
      nextPrayerName = "Dhuhr";
      nextPrayerTime = times.Dhuhr || "12:15";
      diffSec = timingsInSec.Dhuhr - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Dhuhr && totalNowSec < timingsInSec.Asr) {
      active = "Dhuhr";
      nextPrayerName = "Asr";
      nextPrayerTime = times.Asr || "15:45";
      diffSec = timingsInSec.Asr - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Asr && totalNowSec < timingsInSec.Maghrib) {
      active = "Asr";
      nextPrayerName = "Maghrib";
      nextPrayerTime = times.Maghrib || "17:45";
      diffSec = timingsInSec.Maghrib - totalNowSec;
    } else if (totalNowSec >= timingsInSec.Maghrib && totalNowSec < timingsInSec.Isha) {
      active = "Maghrib";
      nextPrayerName = "Isha";
      nextPrayerTime = times.Isha || "19:00";
      diffSec = timingsInSec.Isha - totalNowSec;
    } else {
      active = "Isha";
      nextPrayerName = "Fajr";
      nextPrayerTime = times.Fajr || "05:00";
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

  // Pause adhan when global audio triggers
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
        .catch((err) => console.warn("Adhan audio play error", err));
    }
  };

  const currentHadith = PRAYER_HADITHS[hadithIndex];

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-[#155DFC]/20">
      <Navbar />

      {/* Hidden Adhan audio with preload="none" */}
      <audio
        ref={adhanAudioRef}
        src="/adhan.mp3"
        preload="none"
        onEnded={() => setIsAdhanPlaying(false)}
        onError={() => setIsAdhanPlaying(false)}
      />

      <main className="flex-1 pt-28 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 md:px-8 max-w-4xl mx-auto w-full">
        {/* Top Navigation & Action Controls */}
        <div className="flex items-center justify-between gap-3 mb-8 sm:mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors active:scale-95"
          >
            <ArrowLeft size={14} />
            <span>Return Home</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* City Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label="Select city for prayer times"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-slate-900 dark:text-white font-semibold text-xs transition-colors hover:border-[#155DFC]/50 cursor-pointer"
              >
                <div className="w-2 h-2 bg-[#155DFC] rounded-full" />
                <span className="truncate max-w-[120px] sm:max-w-none">
                  {coords ? "GPS Location" : selectedCity}
                </span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 6 }}
                    className="absolute top-full mt-2 right-0 w-60 sm:w-64 rounded-3xl bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.09] overflow-hidden z-50 p-2 shadow-xl"
                  >
                    <button
                      onClick={handleDetectLocation}
                      disabled={isDetectingLocation}
                      className="w-full flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs font-bold text-[#155DFC] bg-[#155DFC]/10 hover:bg-[#155DFC]/15 transition-all mb-2 cursor-pointer"
                    >
                      {isDetectingLocation ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Navigation size={14} />
                      )}
                      <span>Use Exact GPS Location</span>
                    </button>

                    <div className="max-h-56 overflow-y-auto no-scrollbar space-y-1">
                      {CITIES_LIST.map((city) => (
                        <button
                          key={city.slug}
                          onClick={() => {
                            setCoords(null);
                            setSelectedCity(city.name);
                            setLocationName(`${city.name}, ${city.country}`);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                            !coords && selectedCity === city.name
                              ? "bg-[#155DFC] text-white"
                              : "text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                          }`}
                        >
                          {city.name} ({city.country})
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
              aria-label={isAdhanPlaying ? "Pause Adhan" : "Play Adhan (Mishary Rashid Alafasy)"}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                isAdhanPlaying
                  ? "bg-[#155DFC] text-white border-[#155DFC] shadow-sm shadow-[#155DFC]/20"
                  : "bg-white dark:bg-white/[0.04] border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] hover:border-[#155DFC]/40"
              }`}
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
        <section className="text-center mb-8 sm:mb-10">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            Prayer{" "}
            <span className="bg-[#155DFC] text-white px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">
              Times (Namaz)
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-normal mt-2 leading-relaxed">
            Daily Namaz timings in {locationName} with live countdown, Azan audio notification, and Qibla direction.
          </p>
        </section>

        {/* Next Prayer Display Card */}
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="h-60 sm:h-72 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Loader2 size={30} className="text-[#155DFC] animate-spin" />
              <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">
                Updating Astronomical Timings...
              </span>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] text-center mb-8 sm:mb-10 overflow-hidden shadow-sm"
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
        <div className="space-y-3 sm:space-y-3.5 mb-8 sm:mb-10">
          {(["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const).map((name) => {
            const isActive = prayerStatus.active === name;
            const timeStr = times[name] || "05:00";

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

        {/* Method Note & Qibla Direction */}
        <section className="mb-10 p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">
              Calculation Method & Juristic Standard
            </span>
            <p className="text-slate-500 dark:text-neutral-400 leading-relaxed">
              {initialData.city.methodDescription}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.05] text-[#155DFC] font-semibold shrink-0">
            <Compass size={14} />
            <span>Qibla: {initialData.qibla}° from North</span>
          </div>
        </section>

        {/* Major Cities Navigation */}
        <section className="mb-12">
          <h3 className="font-heading text-base sm:text-lg font-bold mb-3 text-slate-900 dark:text-white">
            Daily Namaz Timings by City
          </h3>
          <div className="flex flex-wrap gap-2">
            {CITIES_LIST.map((city) => (
              <Link
                key={city.slug}
                href={`/prayer-time/${city.slug}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  city.slug === initialCitySlug
                    ? "bg-[#155DFC] text-white border-[#155DFC]"
                    : "bg-white dark:bg-white/[0.04] border-slate-200/80 dark:border-white/[0.08] text-slate-700 dark:text-neutral-300 hover:border-[#155DFC]/40"
                }`}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Hadith Inspiration Section */}
        <section className="mt-8">
          <div className="p-6 sm:p-10 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#070709] border border-slate-200/80 dark:border-white/[0.08] text-center relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 sm:mb-8 pb-3.5 border-b border-slate-200/80 dark:border-white/[0.08]">
              <span className="text-xs font-semibold text-[#155DFC]">
                Prophetic Hadith on Salah
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setHadithIndex((prev) => (prev > 0 ? prev - 1 : PRAYER_HADITHS.length - 1))
                  }
                  aria-label="Previous Hadith"
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
                  aria-label="Next Hadith"
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
              <p
                lang="ar"
                dir="rtl"
                className="font-arabic text-2xl sm:text-4xl md:text-5xl leading-loose text-slate-900 dark:text-white"
              >
                {currentHadith.arabic}
              </p>
            </div>

            <div className="w-16 h-px bg-slate-200 dark:bg-white/10 mx-auto mb-6" />

            {/* Urdu Hadith Translation */}
            <div className="mb-4 sm:mb-6">
              <p
                lang="ur"
                dir="rtl"
                className="font-urdu text-lg sm:text-2xl leading-relaxed text-slate-800 dark:text-neutral-200"
              >
                {currentHadith.urdu}
              </p>
            </div>

            {/* English Meaning */}
            <div className="max-w-2xl mx-auto mb-5 sm:mb-6">
              <p
                lang="en"
                dir="ltr"
                className="text-xs sm:text-sm italic text-slate-600 dark:text-neutral-400 font-normal leading-relaxed"
              >
                &quot;{currentHadith.english}&quot;
              </p>
            </div>

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
