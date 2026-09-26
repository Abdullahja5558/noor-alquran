"use client";

import React, { useEffect, useState, useRef, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  Square,
  Sparkles,
  Loader2,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Disc,
  Waves,
  Copy,
  Check,
  Bookmark,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Ayah {
  numberInSurah: number;
  text: string;
  urduText: string;
  englishText: string;
  audio: string;
  audioUrdu: string;
  audioEnglish: string;
}

interface SurahMeta {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

type AudioMode = "ar_ur" | "ar_en" | "ar" | "ur" | "en";
type AudioPhase = "arabic" | "translation";

// Global cache to prevent re-fetching Surah metadata
let cachedSurahList: SurahMeta[] | null = null;

export default function SurahDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const surahId = resolvedParams.id;
  const router = useRouter();

  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [surahInfo, setSurahInfo] = useState<SurahMeta | null>(null);
  const [allSurahs, setAllSurahs] = useState<SurahMeta[]>([]);
  const [loading, setLoading] = useState(true);

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [activeAyahIndex, setActiveAyahIndex] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>("ar_ur"); // Arabic + Urdu Sequential
  const [audioPhase, setAudioPhase] = useState<AudioPhase>("arabic");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [copiedAyah, setCopiedAyah] = useState<number | null>(null);
  const [bookmarkedAyah, setBookmarkedAyah] = useState<number | null>(null);

  // Mutable refs to prevent any stale closure issues in continuous playback
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayahRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const preloadedUrls = useRef<Set<string>>(new Set());

  const currentIndexRef = useRef(0);
  const currentPhaseRef = useRef<AudioPhase>("arabic");
  const currentModeRef = useRef<AudioMode>("ar_ur");
  const isPlayingRef = useRef(false);
  const ayahsRef = useRef<Ayah[]>([]);

  // Synchronize refs
  useEffect(() => {
    currentIndexRef.current = activeAyahIndex;
  }, [activeAyahIndex]);

  useEffect(() => {
    currentPhaseRef.current = audioPhase;
  }, [audioPhase]);

  useEffect(() => {
    currentModeRef.current = audioMode;
  }, [audioMode]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    ayahsRef.current = ayahs;
  }, [ayahs]);

  // Converts western digits to Arabic numeral symbols
  const toArabicNumber = (num: number) => {
    const arabicDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num
      .toString()
      .split("")
      .map((d) => arabicDigits[parseInt(d, 10)])
      .join("");
  };

  const fastPreload = (data: Ayah[], startIndex: number, count: number) => {
    const end = Math.min(startIndex + count, data.length);
    for (let i = startIndex; i < end; i++) {
      if (!data[i]) continue;
      const urls = [data[i].audio, data[i].audioUrdu, data[i].audioEnglish].filter(Boolean);
      urls.forEach((url) => {
        if (url && !preloadedUrls.current.has(url)) {
          const audioObj = new Audio();
          audioObj.src = url;
          audioObj.preload = "auto";
          preloadedUrls.current.add(url);
        }
      });
    }
  };

  // Ultra-Fast Cached Surah Fetcher
  useEffect(() => {
    let isMounted = true;

    // Check Local Storage Cache first for Instant 0ms Load
    const cacheKey = `surah_data_v3_${surahId}`;
    const cachedData = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;

    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        setSurahInfo(parsed.surahInfo);
        setAyahs(parsed.ayahs);
        ayahsRef.current = parsed.ayahs;
        setLoading(false);
        fastPreload(parsed.ayahs, 0, 5);
      } catch (e) {
        console.warn("Cache parse failed, fetching fresh", e);
      }
    }

    const fetchSurahData = async () => {
      try {
        if (!cachedData) setLoading(true);

        // Fetch Surah List if not in memory
        if (!cachedSurahList) {
          const listRes = await fetch("https://api.alquran.cloud/v1/surah");
          const listData = await listRes.json();
          if (listData.data) {
            cachedSurahList = listData.data;
          }
        }
        if (isMounted && cachedSurahList) {
          setAllSurahs(cachedSurahList);
        }

        // Fetch full 6-edition Surah audio and texts
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,ur.jalandhry,en.asad,ar.alafasy,ur.khan,en.walk`
        );
        const data = await res.json();

        if (!isMounted) return;

        if (data.data && data.data[0]) {
          const combinedAyahs: Ayah[] = data.data[0].ayahs.map(
            (a: { numberInSurah: number; text: string }, i: number) => ({
              numberInSurah: a.numberInSurah,
              text: a.text,
              urduText: data.data[1]?.ayahs[i]?.text || "",
              englishText: data.data[2]?.ayahs[i]?.text || "",
              audio: data.data[3]?.ayahs[i]?.audio || "",
              audioUrdu: data.data[4]?.ayahs[i]?.audio || "",
              audioEnglish: data.data[5]?.ayahs[i]?.audio || "",
            })
          );

          setSurahInfo(data.data[0]);
          setAyahs(combinedAyahs);
          ayahsRef.current = combinedAyahs;

          // Save to local cache for instant future loads
          if (typeof window !== "undefined") {
            localStorage.setItem(
              cacheKey,
              JSON.stringify({
                surahInfo: data.data[0],
                ayahs: combinedAyahs,
              })
            );
          }

          fastPreload(combinedAyahs, 0, 5);
        }
      } catch (err) {
        console.error("Fetch Surah Error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchSurahData();
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Load Bookmark
    const savedBookmark = localStorage.getItem(`bookmark_surah_${surahId}`);
    if (savedBookmark) {
      setBookmarkedAyah(parseInt(savedBookmark, 10));
    }

    return () => {
      isMounted = false;
    };
  }, [surahId]);

  // Determine current audio URL based on mode and phase
  const getAudioUrl = useCallback(
    (index: number, phase: AudioPhase, mode: AudioMode) => {
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs[index]) return "";

      if (mode === "ar") return currentAyahs[index].audio;
      if (mode === "ur") return currentAyahs[index].audioUrdu;
      if (mode === "en") return currentAyahs[index].audioEnglish;
      if (mode === "ar_ur") {
        return phase === "arabic" ? currentAyahs[index].audio : currentAyahs[index].audioUrdu;
      }
      if (mode === "ar_en") {
        return phase === "arabic" ? currentAyahs[index].audio : currentAyahs[index].audioEnglish;
      }
      return currentAyahs[index].audio;
    },
    [ayahs]
  );

  // Play a specific Ayah (with fail-safe skipping so it NEVER gets stuck)
  const playAyah = useCallback(
    (index: number, phase: AudioPhase = "arabic", mode: AudioMode = currentModeRef.current) => {
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs[index] || !audioRef.current) return;

      setIsBuffering(true);
      setActiveAyahIndex(index);
      setAudioPhase(phase);
      currentIndexRef.current = index;
      currentPhaseRef.current = phase;
      currentModeRef.current = mode;

      let targetUrl = getAudioUrl(index, phase, mode);

      // If translation track is missing, fallback to next track/phase seamlessly
      if (!targetUrl) {
        if (mode === "ar_ur" || mode === "ar_en") {
          if (phase === "arabic") {
            targetUrl = currentAyahs[index].audio;
          } else {
            // Skip directly to next ayah arabic if translation audio is missing
            if (index < currentAyahs.length - 1) {
              playAyah(index + 1, "arabic", mode);
              return;
            }
          }
        }
      }

      if (!targetUrl) {
        setIsBuffering(false);
        return;
      }

      audioRef.current.src = targetUrl;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.load();

      audioRef.current
        .play()
        .then(() => {
          setIsBuffering(false);
          setIsPlaying(true);
          isPlayingRef.current = true;
        })
        .catch((e) => {
          console.warn("Audio play prevented or interrupted", e);
          setIsBuffering(false);
        });

      // Preload next batch
      fastPreload(currentAyahs, index + 1, 4);

      // Auto-scroll to active Ayah
      const ayahElement = ayahRefs.current[currentAyahs[index].numberInSurah];
      if (ayahElement) {
        ayahElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    [ayahs, getAudioUrl, playbackRate]
  );

  // Uninterrupted Audio Ended Handler (Guaranteed by Refs)
  const handleAudioEnded = useCallback(() => {
    const currentAyahs = ayahsRef.current;
    const curIndex = currentIndexRef.current;
    const curPhase = currentPhaseRef.current;
    const curMode = currentModeRef.current;

    if (!currentAyahs || currentAyahs.length === 0) return;

    if (curMode === "ar_ur") {
      if (curPhase === "arabic") {
        // Play Urdu translation for this same Ayah
        playAyah(curIndex, "translation", curMode);
      } else {
        // Translation finished, move to next Ayah Arabic
        if (curIndex < currentAyahs.length - 1) {
          playAyah(curIndex + 1, "arabic", curMode);
        } else {
          setIsPlaying(false);
          isPlayingRef.current = false;
        }
      }
    } else if (curMode === "ar_en") {
      if (curPhase === "arabic") {
        // Play English translation for this same Ayah
        playAyah(curIndex, "translation", curMode);
      } else {
        // Move to next Ayah Arabic
        if (curIndex < currentAyahs.length - 1) {
          playAyah(curIndex + 1, "arabic", curMode);
        } else {
          setIsPlaying(false);
          isPlayingRef.current = false;
        }
      }
    } else {
      // Single track modes (Arabic only, Urdu only, English only)
      if (curIndex < currentAyahs.length - 1) {
        playAyah(curIndex + 1, "arabic", curMode);
      } else {
        setIsPlaying(false);
        isPlayingRef.current = false;
      }
    }
  }, [playAyah]);

  // Fail-safe: If an audio URL errors out, auto-skip without freezing
  const handleAudioError = useCallback(() => {
    console.warn("Track failed to load, automatically progressing to next track...");
    handleAudioEnded();
  }, [handleAudioEnded]);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      playAyah(activeAyahIndex, audioPhase, audioMode);
    }
  };

  const handleNextAyah = () => {
    if (activeAyahIndex < ayahs.length - 1) {
      playAyah(activeAyahIndex + 1, "arabic", audioMode);
    }
  };

  const handlePrevAyah = () => {
    if (activeAyahIndex > 0) {
      playAyah(activeAyahIndex - 1, "arabic", audioMode);
    }
  };

  const handleSpeedChange = () => {
    const speeds = [1, 1.25, 1.5, 0.75];
    const nextSpeed = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    setPlaybackRate(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const copyAyahText = (ayah: Ayah) => {
    const text = `📖 Surah ${surahInfo?.englishName} (${surahInfo?.number}:${ayah.numberInSurah})\n\n${ayah.text}\n\nاردو: ${ayah.urduText}\n\nEnglish: ${ayah.englishText}`;
    navigator.clipboard.writeText(text);
    setCopiedAyah(ayah.numberInSurah);
    setTimeout(() => setCopiedAyah(null), 2000);
  };

  const toggleBookmark = (num: number) => {
    if (bookmarkedAyah === num) {
      localStorage.removeItem(`bookmark_surah_${surahId}`);
      setBookmarkedAyah(null);
    } else {
      localStorage.setItem(`bookmark_surah_${surahId}`, num.toString());
      setBookmarkedAyah(num);
    }
  };

  const currentSurahNumber = parseInt(surahId, 10);
  const prevSurah = allSurahs.find((s) => s.number === currentSurahNumber - 1);
  const nextSurah = allSurahs.find((s) => s.number === currentSurahNumber + 1);

  if (loading && ayahs.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Navbar />
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-500 animate-spin" />
          <p className="text-xs uppercase tracking-widest font-black text-emerald-600 dark:text-emerald-400">
            Loading Sacred Verses...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 pb-36 text-slate-900 dark:text-white">
      <Navbar />

      {/* Robust Native Audio Element with continuous handlers */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        preload="auto"
      />

      {/* --- SURAH HERO HEADER --- */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12 px-3 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button
            onClick={() => router.push("/quran")}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer active:scale-95 shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>All Surahs</span>
          </button>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Sparkles size={13} />
            <span>Surah {surahInfo?.number} of 114</span>
          </div>
        </div>

        {/* Surah Title Banner with Crisp Border */}
        <div className="relative p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="relative z-10 space-y-2.5 sm:space-y-4">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-emerald-600 dark:text-emerald-400 block">
              {surahInfo?.revelationType} Revelation • {surahInfo?.numberOfAyahs} Verses
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
              {surahInfo?.englishName}
            </h1>

            <h2 className="font-arabic text-2xl sm:text-4xl md:text-5xl text-emerald-600 dark:text-emerald-400 font-normal">
              {surahInfo?.name}
            </h2>

            <p className="text-xs sm:text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold">
              {surahInfo?.englishNameTranslation}
            </p>
          </div>
        </div>

        {/* Bismillah */}
        {surahId !== "1" && surahId !== "9" && (
          <div className="my-8 sm:my-12 text-center">
            <h3 className="font-arabic text-2xl sm:text-4xl md:text-5xl text-slate-900 dark:text-emerald-100 leading-loose">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 sm:mt-2 font-medium">
              In the Name of Allah, the Most Compassionate, the Most Merciful
            </p>
          </div>
        )}
      </section>

      {/* --- AYAH LIST SECTION --- */}
      <main className="px-3 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {ayahs.map((ayah, index) => {
          const isActive = isPlaying && activeAyahIndex === index;
          const isSelected = activeAyahIndex === index;
          const isBookmarked = bookmarkedAyah === ayah.numberInSurah;

          return (
            <motion.div
              key={ayah.numberInSurah}
              ref={(el) => {
                ayahRefs.current[ayah.numberInSurah] = el;
              }}
              onClick={() => playAyah(index, "arabic", audioMode)}
              className={`relative p-5 sm:p-8 md:p-10 rounded-[1.8rem] sm:rounded-[2.2rem] transition-all duration-200 border cursor-pointer group shadow-sm ${
                isActive
                  ? "bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-lg scale-[1.01]"
                  : isSelected
                  ? "bg-white dark:bg-slate-900 border border-emerald-500/50"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50"
              }`}
            >
              {/* Header inside Card */}
              <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-2xl flex items-center justify-center font-bold text-xs transition-all border ${
                      isActive
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/40"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {ayah.numberInSurah}
                  </span>

                  {isActive && (
                    <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                      <Waves size={11} className="animate-pulse" />
                      <span>
                        {audioPhase === "arabic"
                          ? "Reciting Arabic"
                          : audioMode.includes("ur")
                          ? "Urdu Tarjuma"
                          : "English Meaning"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Quick Actions */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(ayah.numberInSurah);
                    }}
                    title="Bookmark Ayah"
                    className={`p-1.5 sm:p-2 rounded-xl border transition-all ${
                      isBookmarked
                        ? "text-amber-500 bg-amber-500/10 border-amber-500/30"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-400"
                    }`}
                  >
                    <Bookmark size={14} fill={isBookmarked ? "currentColor" : "none"} />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      copyAyahText(ayah);
                    }}
                    title="Copy Ayah"
                    className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all"
                  >
                    {copiedAyah === ayah.numberInSurah ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>

                  <div className="p-1.5 sm:p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                    {isActive ? <Volume2 size={15} /> : <Play size={15} fill="currentColor" />}
                  </div>
                </div>
              </div>

              {/* Arabic Verse Text */}
              <div className="text-center md:text-right mb-6 sm:mb-8">
                <p
                  className={`font-arabic text-xl sm:text-3xl md:text-4xl leading-[2] sm:leading-[2.2] transition-colors ${
                    isActive
                      ? "text-emerald-700 dark:text-emerald-300 font-bold"
                      : "text-slate-900 dark:text-slate-100"
                  }`}
                >
                  {ayah.text}
                  {/* End Ayah Symbol */}
                  <span className="inline-flex items-center justify-center relative mx-2 sm:mx-3 text-emerald-600 dark:text-emerald-400 select-none align-middle font-serif">
                    <span className="text-xl sm:text-3xl">۝</span>
                    <span className="absolute text-[9px] sm:text-xs font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5">
                      {toArabicNumber(ayah.numberInSurah)}
                    </span>
                  </span>
                </p>
              </div>

              {/* Urdu Translation */}
              <div className="text-right mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800">
                <p
                  className={`font-urdu text-base sm:text-xl md:text-2xl leading-relaxed sm:leading-loose ${
                    isActive && audioPhase === "translation" && audioMode.includes("ur")
                      ? "text-emerald-700 dark:text-emerald-300 font-semibold"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {ayah.urduText}
                </p>
              </div>

              {/* English Translation */}
              <div className="text-left pt-1.5 sm:pt-2">
                <p
                  className={`text-xs sm:text-sm font-light leading-relaxed italic ${
                    isActive && audioPhase === "translation" && audioMode.includes("en")
                      ? "text-emerald-700 dark:text-emerald-300 font-medium"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                >
                  &quot;{ayah.englishText}&quot;
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* --- BOTTOM SURAH NAVIGATION --- */}
        <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {prevSurah ? (
            <button
              onClick={() => router.push(`/quran/${prevSurah.number}`)}
              className="w-full sm:w-auto flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group active:scale-95 shadow-sm"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shrink-0">
                <ChevronLeft size={18} />
              </div>
              <div className="text-left">
                <span className="text-[8.5px] sm:text-[9px] font-black uppercase tracking-widest text-slate-500 block">
                  Previous Surah
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {prevSurah.englishName}
                </span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextSurah ? (
            <button
              onClick={() => router.push(`/quran/${nextSurah.number}`)}
              className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group active:scale-95 shadow-sm"
            >
              <div className="text-right">
                <span className="text-[8.5px] sm:text-[9px] font-black uppercase tracking-widest text-slate-500 block">
                  Next Surah
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {nextSurah.englishName}
                </span>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all shrink-0">
                <ChevronRight size={18} />
              </div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </main>

      {/* --- SOLID FLOATING RESPONSIVE AUDIO BAR --- */}
      {ayahs.length > 0 && (
        <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 w-[96%] sm:w-[92%] max-w-2xl flex flex-col gap-1.5 sm:gap-2">
          {/* Top Audio Mode Selector Pill */}
          <div className="flex items-center justify-center gap-1 p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md self-center overflow-x-auto max-w-full">
            {[
              { id: "ar_ur", label: "Arabic + Urdu Translation", short: "Ar + Urdu" },
              { id: "ar_en", label: "Arabic + English", short: "Ar + Eng" },
              { id: "ar", label: "Arabic Only", short: "Arabic" },
              { id: "ur", label: "Urdu Only", short: "Urdu" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  const newMode = m.id as AudioMode;
                  setAudioMode(newMode);
                  currentModeRef.current = newMode;
                  if (isPlaying) {
                    playAyah(activeAyahIndex, "arabic", newMode);
                  }
                }}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  audioMode === m.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {m.short}
              </button>
            ))}
          </div>

          {/* Main Solid Audio Player Bar */}
          <div className="p-2.5 sm:p-4 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-between gap-2 sm:gap-3">
            {/* Left: Surah & Ayah Info */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shrink-0 overflow-hidden">
                <motion.div
                  animate={isPlaying ? { rotate: 360 } : {}}
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                  <Disc size={18} />
                </motion.div>
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs sm:text-sm font-black truncate text-slate-900 dark:text-white">
                    {surahInfo?.englishName} • {ayahs[activeAyahIndex]?.numberInSurah}
                  </p>
                  {isPlaying && (
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  )}
                </div>

                <p className="text-[9px] sm:text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider truncate">
                  {audioPhase === "arabic"
                    ? "Mishary (Ar)"
                    : audioMode.includes("ur")
                    ? "Jalandhry (Ur)"
                    : "Ibrahim Walk (En)"}
                </p>
              </div>
            </div>

            {/* Right: Audio Playback Controls */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
              {/* Speed Controller */}
              <button
                onClick={handleSpeedChange}
                title="Playback Speed"
                className="px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-[9px] sm:text-[10px] font-black text-slate-800 dark:text-slate-200 hover:text-emerald-500 cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
              >
                {playbackRate}x
              </button>

              {/* Prev Ayah */}
              <button
                onClick={handlePrevAyah}
                disabled={activeAyahIndex === 0}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-500 disabled:opacity-30 cursor-pointer active:scale-90 transition-transform border border-slate-200/60 dark:border-slate-700/60"
              >
                <ChevronLeft size={15} />
              </button>

              {/* Main Play / Pause */}
              <button
                onClick={togglePlayback}
                className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-600/35 cursor-pointer active:scale-95 transition-all"
              >
                {isBuffering ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : isPlaying ? (
                  <Pause size={16} fill="currentColor" />
                ) : (
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                )}
              </button>

              {/* Next Ayah */}
              <button
                onClick={handleNextAyah}
                disabled={activeAyahIndex === ayahs.length - 1}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-emerald-500 disabled:opacity-30 cursor-pointer active:scale-90 transition-transform border border-slate-200/60 dark:border-slate-700/60"
              >
                <ChevronRight size={15} />
              </button>

              {/* Stop Button */}
              <button
                onClick={() => {
                  audioRef.current?.pause();
                  setIsPlaying(false);
                  isPlayingRef.current = false;
                }}
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-rose-500 cursor-pointer active:scale-90 transition-transform border border-slate-200/60 dark:border-slate-700/60"
              >
                <Square size={11} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
