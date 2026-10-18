"use client";

import React, { useEffect, useState, useRef, useCallback, Suspense } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Copy,
  Check,
  Bookmark,
  Repeat,
  SlidersHorizontal,
  CloudRain,
  Flame,
  Trees,
  Volume2,
  VolumeX,
  X,
  Headphones,
  Mic,
  ListMusic,
} from "lucide-react";
import { RECITERS_LIST, Reciter } from "@/components/recitersData";
import { COLLECTIONS_DATA } from "@/components/playlistsData";
import { SurahDetailData, Ayah } from "@/lib/quranData";

interface SurahMeta {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

type AudioMode = "ar" | "ar_ur" | "ar_en" | "ur";
type AudioPhase = "bismillah" | "arabic" | "translation";
type AmbientType = "none" | "rain" | "birds" | "fire";

interface AmbientTrack {
  id: AmbientType;
  title: string;
  src: string;
  icon: React.ElementType;
}

const AMBIENT_TRACKS: AmbientTrack[] = [
  { id: "none", title: "Off", src: "", icon: VolumeX },
  { id: "rain", title: "Rain", src: "/ambient/rain.mp3", icon: CloudRain },
  { id: "birds", title: "Birds", src: "/ambient/birds.mp3", icon: Trees },
  { id: "fire", title: "Fire", src: "/ambient/fire.mp3", icon: Flame },
];

const EVERYAYAH_RECITERS: Record<string, string> = {
  "ar.alafasy": "Alafasy_128kbps",
  "ar.abdulbasitmurattal": "Abdul_Basit_Murattal_192kbps",
  "ar.minshawi": "Minshawy_Murattal_128kbps",
  "ar.husary": "Husary_128kbps",
  "ar.muhammadjibreel": "Muhammad_Jibreel_128kbps",
  "ar.mahermuaiqly": "Maher_AlMuaiqly_64kbps",
  "ar.abdurrahmaansudais": "Abdurrahmaan_As-Sudais_192kbps",
  "ar.saoodshuraym": "Saood_ash-Shuraym_128kbps",
  "ar.yasseraldossari": "Yasser_Ad-Dussary_128kbps",
  "ar.hudhaify": "Hudhaify_128kbps",
  "ar.shaatree": "Abu_Bakr_Ash-Shaatree_128kbps",
  "ar.ahmedajamy": "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net",
  "ar.muhammadayyoub": "Muhammad_Ayyoub_64kbps",
  "ar.hanirifai": "Hani_Rifai_192kbps",
  "ar.aymanswoaid": "Ayman_Sowaid_64kbps",
};

const NO_000_RECITERS = new Set(["ar.husary", "ar.hanirifai", "ar.aymanswoaid"]);

const getBismillahAudioUrl = (reciterId: string, surahNum: number) => {
  const folder = EVERYAYAH_RECITERS[reciterId] || "Alafasy_128kbps";
  if (NO_000_RECITERS.has(reciterId)) {
    return `https://everyayah.com/data/${folder}/001001.mp3`;
  }
  const s = String(surahNum).padStart(3, "0");
  return `https://everyayah.com/data/${folder}/${s}000.mp3`;
};

const getEveryAyahUrl = (reciterId: string, surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  const folder = EVERYAYAH_RECITERS[reciterId] || "Alafasy_128kbps";
  return `https://everyayah.com/data/${folder}/${s}${a}.mp3`;
};

export default function SurahReaderClient({
  initialData,
}: {
  initialData: SurahDetailData;
}) {
  const router = useRouter();
  const currentSNum = initialData.surahInfo.number;
  const surahId = String(currentSNum);
  const prevSurahNum = initialData.prevSurah?.number ?? null;
  const nextSurahNum = initialData.nextSurah?.number ?? null;

  const [selectedReciter, setSelectedReciter] = useState<Reciter>(RECITERS_LIST[0]);

  const [isMixerOpen, setIsMixerOpen] = useState(false);
  const [activeMixerTab, setActiveMixerTab] = useState<"reciters" | "soundscapes">("reciters");

  const [surahInfo, setSurahInfo] = useState<SurahMeta>(initialData.surahInfo);
  const [ayahs, setAyahs] = useState<Ayah[]>(initialData.ayahs);

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAyahIndex, setActiveAyahIndex] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>("ar_ur"); // Default: Arabic + Urdu
  const [audioPhase, setAudioPhase] = useState<AudioPhase>(() => {
    return currentSNum !== 1 && currentSNum !== 9 ? "bismillah" : "arabic";
  });
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLoopingSingleAyah, setIsLoopingSingleAyah] = useState(false);
  const [copiedAyah, setCopiedAyah] = useState<number | null>(null);
  const [bookmarkedAyah, setBookmarkedAyah] = useState<number | null>(null);

  // Scrubber preview state for smooth dragging
  const [scrubPreviewAyah, setScrubPreviewAyah] = useState<number | null>(null);
  const [isScrubberHovered, setIsScrubberHovered] = useState(false);

  // Audio Elements & State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Ambient soundscape volume & active track
  const [selectedAmbience, setSelectedAmbience] = useState<AmbientType>("none");
  const [ambienceVolume, setAmbienceVolume] = useState(0.35);

  const currentPhaseRef = useRef<AudioPhase>(currentSNum !== 1 && currentSNum !== 9 ? "bismillah" : "arabic");
  const currentModeRef = useRef<AudioMode>("ar_ur");
  const currentIndexRef = useRef(0);
  const isPlayingRef = useRef(false);
  const isLoopingRef = useRef(false);
  const ayahsRef = useRef<Ayah[]>(initialData.ayahs);
  const hasAutoplayedRef = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    ayahsRef.current = ayahs;
  }, [ayahs]);

  useEffect(() => {
    isLoopingRef.current = isLoopingSingleAyah;
  }, [isLoopingSingleAyah]);

  useEffect(() => {
    currentModeRef.current = audioMode;
  }, [audioMode]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    currentIndexRef.current = activeAyahIndex;
  }, [activeAyahIndex]);

  // Audio play handler
  const playAudioSource = useCallback(async (url: string) => {
    if (!audioRef.current) return;
    try {
      audioRef.current.src = url;
      audioRef.current.playbackRate = playbackRate;
      await audioRef.current.play();
      setIsPlaying(true);
      isPlayingRef.current = true;
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.warn("Audio playback note:", err);
      }
    }
  }, [playbackRate]);

  // Play Ayah by index and phase
  const playAyah = useCallback(
    (index: number, phase: AudioPhase = "arabic", modeOverride?: AudioMode) => {
      const mode = modeOverride || currentModeRef.current;
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs || index < 0 || index >= currentAyahs.length) return;

      const effectivePhase: AudioPhase = mode === "ur" ? "translation" : phase;

      setActiveAyahIndex(index);
      currentIndexRef.current = index;
      setAudioPhase(effectivePhase);
      currentPhaseRef.current = effectivePhase;

      const targetAyah = currentAyahs[index];
      if (!targetAyah) return;

      if (effectivePhase === "bismillah") {
        const bismillahUrl = getBismillahAudioUrl(selectedReciter.id, currentSNum);
        playAudioSource(bismillahUrl);
      } else if (effectivePhase === "arabic") {
        playAudioSource(targetAyah.audio);
      } else if (effectivePhase === "translation") {
        if (mode.includes("ur")) {
          playAudioSource(targetAyah.audioUrdu);
        } else if (mode.includes("en")) {
          playAudioSource(targetAyah.audioEnglish);
        }
      }
    },
    [ayahs, currentSNum, playAudioSource, selectedReciter.id]
  );

  const playAyahRef = useRef(playAyah);
  useEffect(() => {
    playAyahRef.current = playAyah;
  }, [playAyah]);

  // Advance to next audio phase or next ayah
  const handleAudioEnded = useCallback(() => {
    const currentMode = currentModeRef.current;
    const currentIdx = currentIndexRef.current;
    const currentPhase = currentPhaseRef.current;
    const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;

    if (isLoopingRef.current) {
      const loopPhase: AudioPhase = currentMode === "ur" ? "translation" : "arabic";
      playAyah(currentIdx, loopPhase, currentMode);
      return;
    }

    if (currentPhase === "bismillah") {
      playAyah(currentIdx, "arabic", currentMode);
      return;
    }

    if (currentPhase === "arabic") {
      if (currentMode === "ar_ur" || currentMode === "ar_en") {
        playAyah(currentIdx, "translation", currentMode);
        return;
      }
    }

    // Move to next Ayah
    if (currentIdx + 1 < currentAyahs.length) {
      const nextPhase: AudioPhase = currentMode === "ur" ? "translation" : "arabic";
      playAyah(currentIdx + 1, nextPhase, currentMode);
    } else {
      // Reached end of Surah
      if (nextSurahNum) {
        router.push(`/quran/${nextSurahNum}?autoplay=true`);
      } else {
        setIsPlaying(false);
        isPlayingRef.current = false;
      }
    }
  }, [ayahs, nextSurahNum, playAyah, router]);

  const handleAudioError = useCallback(() => {
    console.warn("Audio load error, advancing to next phase/ayah");
    handleAudioEnded();
  }, [handleAudioEnded]);

  // Toggle play/pause
  const togglePlayback = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("stop-global-audio"));
      }
      const targetPhase: AudioPhase = audioMode === "ur" ? "translation" : audioPhase;
      playAyah(activeAyahIndex, targetPhase, audioMode);
    }
  };

  const handleSpeedChange = () => {
    const speeds = [0.75, 1, 1.25, 1.5];
    const nextIdx = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    setPlaybackRate(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  const handleSelectReciter = (reciter: Reciter) => {
    setSelectedReciter(reciter);
    if (typeof window !== "undefined") {
      localStorage.setItem("noor_selected_reciter", reciter.id);
    }
    const updated = ayahs.map((a) => ({
      ...a,
      audio: getEveryAyahUrl(reciter.id, currentSNum, a.numberInSurah),
    }));
    setAyahs(updated);
    ayahsRef.current = updated;
    setIsMixerOpen(false);
    if (isPlaying) {
      const startingPhase: AudioPhase = audioMode === "ur" ? "translation" : "arabic";
      playAyah(activeAyahIndex, startingPhase, audioMode);
    }
  };

  const handleSelectAmbience = (type: AmbientType) => {
    setSelectedAmbience(type);
    if (!ambientAudioRef.current) return;
    if (type === "none") {
      ambientAudioRef.current.pause();
      ambientAudioRef.current.src = "";
    } else {
      const track = AMBIENT_TRACKS.find((t) => t.id === type);
      if (track && track.src) {
        ambientAudioRef.current.src = track.src;
        ambientAudioRef.current.volume = ambienceVolume;
        ambientAudioRef.current.play().catch(() => {});
      }
    }
  };

  const handleGoToPrevSurah = () => {
    if (prevSurahNum) {
      router.push(`/quran/${prevSurahNum}`);
    }
  };

  const handleGoToNextSurah = () => {
    if (nextSurahNum) {
      router.push(`/quran/${nextSurahNum}`);
    }
  };

  const copyAyahText = (ayah: Ayah) => {
    const textToCopy = `${ayah.text}\n\nUrdu: ${ayah.urduText}\n\nEnglish: ${ayah.englishText}\n\n[Surah ${surahInfo.englishName} : Ayah ${ayah.numberInSurah}]`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedAyah(ayah.numberInSurah);
      setTimeout(() => setCopiedAyah(null), 2500);
    }
  };

  const toggleBookmark = (ayahNum: number) => {
    if (typeof window === "undefined") return;
    if (bookmarkedAyah === ayahNum) {
      localStorage.removeItem(`bookmark_surah_${surahId}`);
      setBookmarkedAyah(null);
    } else {
      localStorage.setItem(`bookmark_surah_${surahId}`, ayahNum.toString());
      setBookmarkedAyah(ayahNum);
    }
  };

  // Convert digits to Arabic-Indic digits
  const toArabicNumber = (n: number) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return n
      .toString()
      .split("")
      .map((d) => arabicDigits[parseInt(d, 10)])
      .join("");
  };

  // Autoplay, reciter selection and bookmark effects on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const reciterParam = params.get("reciter");
      const autoplayParam = params.get("autoplay");

      if (reciterParam) {
        const found = RECITERS_LIST.find((r) => r.id === reciterParam);
        if (found) setSelectedReciter(found);
      } else {
        const saved = localStorage.getItem("noor_selected_reciter");
        if (saved) {
          const found = RECITERS_LIST.find((r) => r.id === saved);
          if (found) setSelectedReciter(found);
        }
      }

      const savedBookmark = localStorage.getItem(`bookmark_surah_${surahId}`);
      if (savedBookmark) {
        setBookmarkedAyah(parseInt(savedBookmark, 10));
      }

      if ((autoplayParam === "true" || autoplayParam === "1") && !hasAutoplayedRef.current[surahId]) {
        hasAutoplayedRef.current[surahId] = true;
        setTimeout(() => {
          const initialPhase = currentSNum !== 1 && currentSNum !== 9 ? "bismillah" : "arabic";
          playAyahRef.current?.(0, initialPhase, "ar_ur");
        }, 150);
      }
    }
  }, [currentSNum, surahId]);

  // Clean up Quran reader audio when navigating away
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("stop-global-audio"));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      if (ambientAudioRef.current) {
        ambientAudioRef.current.pause();
        ambientAudioRef.current.src = "";
      }
    };
  }, []);

  const currentAyah = ayahs[activeAyahIndex] || ayahs[0];

  return (
    <div className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] font-sans text-white overflow-hidden flex flex-col justify-between select-none pt-[max(0.4rem,env(safe-area-inset-top))] pb-[max(0.4rem,env(safe-area-inset-bottom))] px-3 sm:px-6 md:px-8 z-10 overscroll-none">
      {/* Background Video */}
      <video
        ref={(el) => {
          if (el) {
            el.muted = true;
            el.volume = 0;
          }
        }}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Contrast Backdrop */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65 -z-10 pointer-events-none" />

      {/* Hidden Native Audio Element for Quran Recitation with preload="none" */}
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        onEnded={handleAudioEnded}
        onError={handleAudioError}
        preload="none"
      />

      {/* Hidden Native Audio Element for Ambient Vocals/Soundscape with preload="none" */}
      <audio ref={ambientAudioRef} loop preload="none" crossOrigin="anonymous" />

      {/* --- TOP HEADER --- */}
      <header className="shrink-0 flex-none z-30 w-full flex items-center justify-between pointer-events-auto py-1.5 sm:py-2.5 max-w-7xl mx-auto">
        {/* Left: Back Link */}
        <Link
          href="/quran"
          className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 hover:text-blue-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors active:scale-95"
        >
          <ArrowLeft size={16} />
          <span>Surahs</span>
        </Link>

        {/* Center: Surah Title */}
        <div className="text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
          <h1 className="text-xs sm:text-sm md:text-base font-black tracking-wide text-white">
            {surahInfo.englishName}{" "}
            <span lang="ar" dir="rtl" className="font-arabic text-blue-300 font-normal ml-1">
              ({surahInfo.name})
            </span>
          </h1>
          <p className="text-[8px] sm:text-[9.5px] font-bold tracking-widest text-blue-200/90 uppercase">
            Ayah {activeAyahIndex + 1} of {ayahs.length}
          </p>
        </div>

        {/* Right: Quick Tools */}
        <div className="flex items-center gap-1.5 sm:gap-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {currentAyah && (
            <>
              <button
                onClick={() => toggleBookmark(currentAyah.numberInSurah)}
                title="Bookmark Ayah"
                aria-label="Bookmark Ayah"
                className={`p-1.5 transition-colors cursor-pointer rounded-full hover:bg-white/10 ${
                  bookmarkedAyah === currentAyah.numberInSurah
                    ? "text-amber-400"
                    : "text-white/80 hover:text-amber-300"
                }`}
              >
                <Bookmark
                  size={15}
                  fill={bookmarkedAyah === currentAyah.numberInSurah ? "currentColor" : "none"}
                />
              </button>

              <button
                onClick={() => copyAyahText(currentAyah)}
                title="Copy Ayah"
                aria-label="Copy Ayah"
                className="p-1.5 text-white/80 hover:text-blue-300 transition-colors cursor-pointer rounded-full hover:bg-white/10"
              >
                {copiedAyah === currentAyah.numberInSurah ? (
                  <Check size={15} className="text-blue-400" />
                ) : (
                  <Copy size={15} />
                )}
              </button>

              <button
                onClick={() => setIsLoopingSingleAyah(!isLoopingSingleAyah)}
                title={isLoopingSingleAyah ? "Loop Single Ayah: ON" : "Loop Single Ayah: OFF"}
                aria-label={isLoopingSingleAyah ? "Loop Single Ayah ON" : "Loop Single Ayah OFF"}
                className={`p-1.5 transition-colors cursor-pointer rounded-full hover:bg-white/10 ${
                  isLoopingSingleAyah ? "text-blue-400" : "text-white/80 hover:text-white"
                }`}
              >
                <Repeat size={15} />
              </button>
            </>
          )}
        </div>
      </header>

      {/* --- CENTER STAGE: BALANCED & REFINED TYPOGRAPHY --- */}
      <main className="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 max-w-4xl lg:max-w-5xl mx-auto text-center z-20 overflow-y-auto no-scrollbar py-1 sm:py-2">
        {currentAyah && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentAyah.numberInSurah}-${audioMode}-${audioPhase}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 my-auto py-1"
            >
              {/* --- BISMILLAH INTRO STAGE --- */}
              {audioPhase === "bismillah" ? (
                <div className="w-full py-3">
                  <p
                    lang="ar"
                    dir="rtl"
                    className="font-arabic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-200 font-normal text-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)] leading-loose"
                  >
                    بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                  </p>
                  <p className="text-xs sm:text-sm text-blue-300/80 font-mono tracking-widest uppercase mt-2">
                    In the Name of Allah, the Most Gracious, the Most Merciful
                  </p>
                </div>
              ) : (
                <>
                  {/* --- 1. ARABIC TEXT --- */}
                  {(audioMode === "ar" || audioMode === "ar_ur" || audioMode === "ar_en") && (
                    <div className="w-full">
                      <p
                        lang="ar"
                        dir="rtl"
                        className={`font-arabic text-white font-normal text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] ${
                          audioMode === "ar"
                            ? currentAyah.text.length > 250
                              ? "text-base sm:text-lg md:text-2xl lg:text-3xl leading-[1.8] sm:leading-[1.9]"
                              : currentAyah.text.length > 120
                              ? "text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-[1.8] sm:leading-[2]"
                              : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.8] sm:leading-[2]"
                            : currentAyah.text.length > 250
                            ? "text-xs sm:text-sm md:text-base lg:text-lg leading-[1.7] sm:leading-[1.8]"
                            : currentAyah.text.length > 120
                            ? "text-sm sm:text-base md:text-lg lg:text-xl leading-[1.7] sm:leading-[1.8]"
                            : "text-base sm:text-xl md:text-2xl lg:text-3xl leading-[1.7] sm:leading-[1.8]"
                        }`}
                      >
                        {currentAyah.text}
                        <span className="inline-flex items-center justify-center relative mx-1 sm:mx-1.5 text-blue-300 align-middle font-serif">
                          <span className="text-sm sm:text-base md:text-xl">۝</span>
                          <span className="absolute text-[7px] sm:text-[8px] md:text-[9.5px] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5 text-blue-200">
                            {toArabicNumber(currentAyah.numberInSurah)}
                          </span>
                        </span>
                      </p>
                    </div>
                  )}

                  {/* --- 2. URDU TRANSLATION --- */}
                  {(audioMode === "ar_ur" || audioMode === "ur") && currentAyah.urduText && (
                    <div className="w-full max-w-2xl px-2">
                      <p
                        lang="ur"
                        dir="rtl"
                        className={`font-urdu text-center transition-colors duration-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                          audioMode === "ur"
                            ? "text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white font-semibold"
                            : currentAyah.urduText.length > 250
                            ? "text-[10px] sm:text-xs md:text-sm leading-relaxed"
                            : currentAyah.urduText.length > 120
                            ? "text-xs sm:text-sm md:text-base leading-relaxed"
                            : "text-sm sm:text-base md:text-lg leading-relaxed"
                        } ${
                          isPlaying && audioPhase === "translation" && audioMode.includes("ur")
                            ? "text-blue-300 font-bold"
                            : "text-slate-100/95 font-medium"
                        }`}
                      >
                        {currentAyah.urduText}
                      </p>
                    </div>
                  )}

                  {/* --- 3. ENGLISH TRANSLATION --- */}
                  {audioMode === "ar_en" && currentAyah.englishText && (
                    <div className="w-full max-w-xl px-2">
                      <p
                        lang="en"
                        dir="ltr"
                        className={`italic text-center font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                          currentAyah.englishText.length > 250
                            ? "text-[9px] sm:text-[10.5px] md:text-xs leading-snug"
                            : "text-[10px] sm:text-xs md:text-sm leading-relaxed"
                        } ${
                          isPlaying && audioPhase === "translation" && audioMode === "ar_en"
                            ? "text-blue-300 font-normal"
                            : "text-slate-200/85"
                        }`}
                      >
                        &quot;{currentAyah.englishText}&quot;
                      </p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* --- AUDIO SETTINGS & RECITERS MODAL --- */}
      <AnimatePresence>
        {isMixerOpen && (
          <div
            onClick={() => setIsMixerOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md sm:max-w-xl max-h-[85vh] rounded-[2.5rem] bg-[#070709] border border-white/[0.09] p-5 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-2xl flex flex-col gap-3.5 text-white overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08] shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#155DFC]/10 border border-[#155DFC]/20 flex items-center justify-center text-[#155DFC]">
                    <Headphones size={16} />
                  </div>
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                      Audio & Reciter Settings
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-normal">
                      Studio control • Reciters & Ambient soundscapes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMixerOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close settings"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Segmented Controls Tabs Switcher */}
              <div className="grid grid-cols-2 p-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-xs font-semibold shrink-0">
                <button
                  onClick={() => setActiveMixerTab("reciters")}
                  className={`py-2 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMixerTab === "reciters"
                      ? "bg-[#155DFC] text-white shadow-md shadow-[#155DFC]/25 font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Mic size={14} />
                  <span>Reciters ({RECITERS_LIST.length})</span>
                </button>
                <button
                  onClick={() => setActiveMixerTab("soundscapes")}
                  className={`py-2 rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMixerTab === "soundscapes"
                      ? "bg-[#155DFC] text-white shadow-md shadow-[#155DFC]/25 font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <SlidersHorizontal size={14} />
                  <span>Ambience & Mixer</span>
                </button>
              </div>

              {/* Tab 1: Reciters Grid */}
              {activeMixerTab === "reciters" && (
                <div className="flex-1 overflow-y-auto px-0.5 py-1 custom-scrollbar max-h-[58vh]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {RECITERS_LIST.map((reciter) => {
                      const isSelected = selectedReciter.id === reciter.id;
                      return (
                        <button
                          key={reciter.id}
                          onClick={() => handleSelectReciter(reciter)}
                          className={`group flex items-center gap-3 p-2.5 sm:p-3 rounded-2xl transition-all cursor-pointer text-left ${
                            isSelected
                              ? "bg-[#155DFC]/15 border border-[#155DFC] text-white shadow-sm ring-1 ring-[#155DFC]/30"
                              : "bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] text-neutral-300"
                          }`}
                        >
                          <div
                            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border-2 transition-all ${
                              isSelected
                                ? "border-[#155DFC] ring-2 ring-[#155DFC]/40"
                                : "border-white/15 group-hover:border-white/30"
                            }`}
                          >
                            <Image
                              src={reciter.image}
                              alt={reciter.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs sm:text-sm font-bold truncate text-white">
                              {reciter.name}
                            </h4>
                            <p lang="ar" dir="rtl" className="text-[11px] font-arabic text-neutral-400 truncate">
                              {reciter.arabicName}
                            </p>
                            <p className="text-[10px] text-neutral-500 truncate">
                              {reciter.city}, {reciter.country}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: Ambience & Soundscapes */}
              {activeMixerTab === "soundscapes" && (
                <div className="flex-1 overflow-y-auto px-1 py-2 flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 mb-2 block">
                      Background Soundscape
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {AMBIENT_TRACKS.map((t) => {
                        const Icon = t.icon;
                        const isSelected = selectedAmbience === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => handleSelectAmbience(t.id)}
                            className={`flex items-center gap-2.5 p-3 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#155DFC]/20 border-[#155DFC] text-white font-bold"
                                : "bg-white/[0.03] border-white/10 hover:border-white/20 text-neutral-300"
                            }`}
                          >
                            <Icon size={16} className={isSelected ? "text-blue-400" : "text-neutral-400"} />
                            <span className="text-xs">{t.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {selectedAmbience !== "none" && (
                    <div>
                      <div className="flex justify-between items-center text-xs text-neutral-300 mb-1.5">
                        <span>Ambience Volume</span>
                        <span>{Math.round(ambienceVolume * 100)}%</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={ambienceVolume}
                        aria-label="Ambience volume"
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          setAmbienceVolume(v);
                          if (ambientAudioRef.current) {
                            ambientAudioRef.current.volume = v;
                          }
                        }}
                        className="w-full accent-[#155DFC] cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- BOTTOM FLOATING CONTROLS DOCK --- */}
      <footer className="shrink-0 flex-none z-30 w-full flex flex-col items-center gap-1.5 sm:gap-2 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto pb-1 sm:pb-2">
        {/* Mode Selector Pill */}
        <div className="inline-flex items-center gap-1 p-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 drop-shadow-md">
          {[
            { id: "ar", label: "Arabic" },
            { id: "ar_ur", label: "Ar + Urdu" },
            { id: "ar_en", label: "Ar + Eng" },
            { id: "ur", label: "Urdu" },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => {
                const newMode = m.id as AudioMode;
                setAudioMode(newMode);
                currentModeRef.current = newMode;
                const startingPhase: AudioPhase = newMode === "ur" ? "translation" : "arabic";
                if (isPlaying) {
                  playAyah(activeAyahIndex, startingPhase, newMode);
                } else {
                  setAudioPhase(startingPhase);
                  currentPhaseRef.current = startingPhase;
                }
              }}
              className={`px-3 sm:px-3.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                audioMode === m.id
                  ? "bg-blue-600 text-white shadow-none scale-[1.02]"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Floating Capsule Bar */}
        <div className="w-full rounded-[2rem] sm:rounded-full bg-black/50 sm:bg-black/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] px-3.5 sm:px-5 py-2 sm:py-2.5 flex flex-col gap-1.5">
          <div className="w-full flex items-center justify-between gap-2">
            {/* Left: Reciter Info */}
            <button
              onClick={() => {
                setActiveMixerTab("reciters");
                setIsMixerOpen(true);
              }}
              className="flex items-center gap-2.5 min-w-0 shrink-0 text-left hover:opacity-90 transition-opacity cursor-pointer group"
              aria-label="Select reciter"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-1 ring-white/30 shrink-0 bg-slate-800 shadow-md">
                <Image
                  src={selectedReciter.image}
                  alt={selectedReciter.name}
                  fill
                  sizes="36px"
                  className="object-cover group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              <div className="flex flex-col min-w-0 max-w-[90px] sm:max-w-[120px] md:max-w-[150px]">
                <p className="text-xs sm:text-[13px] font-bold text-white truncate group-hover:text-blue-300 transition-colors leading-tight">
                  {surahInfo.englishName}
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/55 truncate leading-tight">
                  {selectedReciter.name}
                </p>
              </div>
            </button>

            {/* Center: Playback Controls */}
            <div className="flex items-center justify-center gap-1 sm:gap-2.5 shrink-0">
              <button
                onClick={handleSpeedChange}
                title="Playback Speed"
                aria-label={`Playback speed: ${playbackRate}x`}
                className="hidden xs:flex px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[8.5px] sm:text-[9.5px] font-bold text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                {playbackRate}x
              </button>

              <button
                onClick={handleGoToPrevSurah}
                disabled={!prevSurahNum}
                title={prevSurahNum ? `Previous Surah (${prevSurahNum})` : "First Surah"}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white hover:text-blue-300 disabled:opacity-30 disabled:hover:text-white cursor-pointer active:scale-90 transition-transform"
                aria-label="Previous Surah"
              >
                <SkipBack size={15} className="fill-white" />
              </button>

              <button
                onClick={togglePlayback}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause size={15} fill="black" />
                ) : (
                  <Play size={15} fill="black" className="ml-0.5" />
                )}
              </button>

              <button
                onClick={handleGoToNextSurah}
                disabled={!nextSurahNum}
                title={nextSurahNum ? `Next Surah (${nextSurahNum})` : "Last Surah"}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white hover:text-blue-300 disabled:opacity-30 disabled:hover:text-white cursor-pointer active:scale-90 transition-transform"
                aria-label="Next Surah"
              >
                <SkipForward size={15} className="fill-white" />
              </button>

              <button
                onClick={() => setIsLoopingSingleAyah(!isLoopingSingleAyah)}
                title={isLoopingSingleAyah ? "Loop Single Ayah: ON" : "Loop Single Ayah: OFF"}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  isLoopingSingleAyah ? "text-blue-400 bg-blue-500/20" : "text-white/60 hover:text-white"
                }`}
                aria-label="Loop single ayah"
              >
                <Repeat size={13} />
              </button>
            </div>

            {/* Right: Drawer & Soundscape Volume */}
            <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0 justify-end">
              <button
                onClick={() => {
                  setActiveMixerTab("reciters");
                  setIsMixerOpen(true);
                }}
                title="Reciters List"
                className="p-1.5 sm:p-2 rounded-full text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Reciters List"
              >
                <ListMusic size={16} />
              </button>

              <button
                onClick={() => {
                  setActiveMixerTab("soundscapes");
                  setIsMixerOpen(true);
                }}
                title="Ambience & Volume"
                className={`p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer ${
                  selectedAmbience !== "none"
                    ? "text-blue-400 bg-blue-500/20"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Ambience & Volume"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>

          {/* Bottom Row: Scrubber Track */}
          <div className="w-full flex items-center gap-2 sm:gap-2.5 px-0.5 pt-0.5">
            <span className="text-[9px] sm:text-[10px] font-mono text-white/60 shrink-0 min-w-[38px]">
              Ayah {activeAyahIndex + 1}
            </span>

            <div 
              className="relative flex-1 h-1.5 rounded-full bg-white/15 cursor-pointer group flex items-center"
              onMouseEnter={() => setIsScrubberHovered(true)}
              onMouseLeave={() => {
                setIsScrubberHovered(false);
                setScrubPreviewAyah(null);
              }}
            >
              <div
                className="h-full bg-white rounded-full transition-all duration-75 shadow-none"
                style={{ 
                  width: `${ayahs.length > 0 ? (((scrubPreviewAyah !== null ? scrubPreviewAyah - 1 : activeAyahIndex) + 1) / ayahs.length) * 100 : 0}%` 
                }}
              />

              {isScrubberHovered && (
                <div
                  className="absolute -top-6 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white text-black text-[9px] font-bold shadow-lg pointer-events-none transition-all duration-75 whitespace-nowrap z-30"
                  style={{ 
                    left: `${ayahs.length > 0 ? Math.min(Math.max((((scrubPreviewAyah !== null ? scrubPreviewAyah - 1 : activeAyahIndex) + 1) / ayahs.length) * 100, 4), 96) : 0}%` 
                  }}
                >
                  Ayah {scrubPreviewAyah ?? (activeAyahIndex + 1)}
                </div>
              )}

              <input
                type="range"
                min="1"
                max={Math.max(ayahs.length, 1)}
                step="1"
                value={scrubPreviewAyah ?? (activeAyahIndex + 1)}
                aria-label="Ayah scrubber"
                onInput={(e) => {
                  const val = parseInt((e.target as HTMLInputElement).value, 10);
                  setScrubPreviewAyah(val);
                }}
                onChange={(e) => {
                  const targetAyah = parseInt(e.target.value, 10);
                  const targetIndex = targetAyah - 1;
                  setScrubPreviewAyah(null);
                  if (targetIndex >= 0 && targetIndex < ayahs.length) {
                    const startingPhase: AudioPhase = audioMode === "ur" ? "translation" : "arabic";
                    playAyah(targetIndex, startingPhase, audioMode);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
            </div>

            <span className="text-[9px] sm:text-[10px] font-mono text-white/60 shrink-0 min-w-[38px] text-right">
              Ayah {ayahs.length}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
