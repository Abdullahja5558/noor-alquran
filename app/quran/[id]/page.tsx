"use client";

import React, { useEffect, useState, useRef, useCallback, use } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Play,
  Pause,
  Square,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Disc,
  Copy,
  Check,
  Bookmark,
  Repeat,
  SlidersHorizontal,
  CloudRain,
  Flame,
  Trees,
  Waves,
  Volume2,
  VolumeX,
  X,
  Headphones,
} from "lucide-react";

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
type AmbientType = "none" | "rain" | "birds" | "fire" | "river";

interface AmbientTrack {
  id: AmbientType;
  title: string;
  src: string;
  icon: React.ElementType;
}

const AMBIENT_TRACKS: AmbientTrack[] = [
  {
    id: "none",
    title: "Off",
    src: "",
    icon: VolumeX,
  },
  {
    id: "rain",
    title: "Rain",
    src: "/ambient/rain.mp3",
    icon: CloudRain,
  },
  {
    id: "birds",
    title: "Birds",
    src: "/ambient/birds.mp3",
    icon: Trees,
  },
  {
    id: "fire",
    title: "Fire",
    src: "/ambient/fire.mp3",
    icon: Flame,
  },
  {
    id: "river",
    title: "River",
    src: "/ambient/river.mp3",
    icon: Waves,
  },
];

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
  const [loading, setLoading] = useState(true);

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [activeAyahIndex, setActiveAyahIndex] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>("ar_ur"); // Arabic + Urdu Sequential
  const [audioPhase, setAudioPhase] = useState<AudioPhase>("arabic");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLoopingSingleAyah, setIsLoopingSingleAyah] = useState(false);
  const [copiedAyah, setCopiedAyah] = useState<number | null>(null);
  const [bookmarkedAyah, setBookmarkedAyah] = useState<number | null>(null);

  // Ambient & Mixer State
  const [selectedAmbience, setSelectedAmbience] = useState<AmbientType>("none");
  const [ambienceVolume, setAmbienceVolume] = useState<number>(0.3);
  const [quranVolume, setQuranVolume] = useState<number>(1);
  const [isMixerOpen, setIsMixerOpen] = useState(false);

  // Refs for continuous uninterrupted playback
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedUrls = useRef<Set<string>>(new Set());

  const currentIndexRef = useRef(0);
  const currentPhaseRef = useRef<AudioPhase>("arabic");
  const currentModeRef = useRef<AudioMode>("ar_ur");
  const isPlayingRef = useRef(false);
  const ayahsRef = useRef<Ayah[]>([]);
  const isLoopingRef = useRef(false);
  const quranVolRef = useRef(1);

  // Sync refs
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

  useEffect(() => {
    isLoopingRef.current = isLoopingSingleAyah;
  }, [isLoopingSingleAyah]);

  useEffect(() => {
    quranVolRef.current = quranVolume;
    if (audioRef.current) {
      audioRef.current.volume = quranVolume;
    }
  }, [quranVolume]);

  useEffect(() => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.volume = ambienceVolume;
    }
  }, [ambienceVolume]);

  // Handle ambient sound selection
  const handleSelectAmbience = (type: AmbientType) => {
    setSelectedAmbience(type);
    const sound = AMBIENT_TRACKS.find((t) => t.id === type);

    if (!ambientAudioRef.current) return;

    if (!sound || type === "none" || !sound.src) {
      ambientAudioRef.current.pause();
      ambientAudioRef.current.src = "";
    } else {
      ambientAudioRef.current.src = sound.src;
      ambientAudioRef.current.volume = ambienceVolume;
      ambientAudioRef.current.load();
      ambientAudioRef.current
        .play()
        .catch((e) => console.warn("Ambient play prevented", e));
    }
  };

  // Converts western digits to Arabic numeral symbols
  const toArabicNumber = (num: number) => {
    const arabicDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return num
      .toString()
      .split("")
      .map((d) => arabicDigits[parseInt(d, 10)])
      .join("");
  };

  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  const fastPreload = useCallback((data: Ayah[], startIndex: number, count: number) => {
    if (!data || data.length === 0) return;
    const end = Math.min(startIndex + count, data.length);
    for (let i = startIndex; i < end; i++) {
      if (!data[i]) continue;
      const urls = [data[i].audio, data[i].audioUrdu, data[i].audioEnglish].filter(Boolean);
      urls.forEach((url) => {
        if (url && !audioCache.current.has(url)) {
          const audioObj = new Audio();
          audioObj.preload = "auto";
          audioObj.src = url;
          audioCache.current.set(url, audioObj);
        }
      });
    }
  }, []);

  // Fetch Surah data
  useEffect(() => {
    let isMounted = true;
    const cacheKey = `surah_data_v4_${surahId}`;
    const cachedData = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;

    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        setSurahInfo(parsed.surahInfo);
        setAyahs(parsed.ayahs);
        ayahsRef.current = parsed.ayahs;
        setLoading(false);
        fastPreload(parsed.ayahs, 0, 8);
      } catch (e) {
        console.warn("Cache parse error", e);
      }
    }

    const fetchSurahData = async () => {
      try {
        if (!cachedData) setLoading(true);

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

          if (typeof window !== "undefined") {
            localStorage.setItem(
              cacheKey,
              JSON.stringify({
                surahInfo: data.data[0],
                ayahs: combinedAyahs,
              })
            );
          }

          fastPreload(combinedAyahs, 0, 8);
        }
      } catch (err) {
        console.error("Fetch Surah Error:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchSurahData();

    const savedBookmark = localStorage.getItem(`bookmark_surah_${surahId}`);
    if (savedBookmark) {
      setBookmarkedAyah(parseInt(savedBookmark, 10));
    }

    return () => {
      isMounted = false;
    };
  }, [surahId, fastPreload]);

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

  // Play Ayah - Instant & Gapless Transition
  const playAyah = useCallback(
    (index: number, phase: AudioPhase = "arabic", mode: AudioMode = currentModeRef.current) => {
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs[index] || !audioRef.current) return;

      setActiveAyahIndex(index);
      setAudioPhase(phase);
      currentIndexRef.current = index;
      currentPhaseRef.current = phase;
      currentModeRef.current = mode;

      let targetUrl = getAudioUrl(index, phase, mode);

      if (!targetUrl) {
        if (mode === "ar_ur" || mode === "ar_en") {
          if (phase === "arabic") {
            targetUrl = currentAyahs[index].audio;
          } else {
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

      // Seamless switch without discarding buffer
      if (audioRef.current.src !== targetUrl) {
        audioRef.current.src = targetUrl;
      }
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.volume = quranVolRef.current;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsBuffering(false);
            setIsPlaying(true);
            isPlayingRef.current = true;
            // Resume ambient background audio if enabled
            if (ambientAudioRef.current && ambientAudioRef.current.src && ambientAudioRef.current.paused) {
              ambientAudioRef.current.play().catch(() => {});
            }
          })
          .catch((e) => {
            console.warn("Audio play error", e);
            setIsBuffering(false);
          });
      }

      // Preload upcoming 6 audio files immediately into memory
      fastPreload(currentAyahs, index, 6);
    },
    [ayahs, getAudioUrl, playbackRate, fastPreload]
  );

  // Handle Audio Ended - 0ms instant transition to next track
  const handleAudioEnded = useCallback(() => {
    const currentAyahs = ayahsRef.current;
    const curIndex = currentIndexRef.current;
    const curPhase = currentPhaseRef.current;
    const curMode = currentModeRef.current;
    const isLooping = isLoopingRef.current;

    if (!currentAyahs || currentAyahs.length === 0) return;

    if (isLooping) {
      if (curMode === "ar_ur" && curPhase === "arabic") {
        playAyah(curIndex, "translation", curMode);
      } else {
        playAyah(curIndex, "arabic", curMode);
      }
      return;
    }

    if (curMode === "ar_ur") {
      if (curPhase === "arabic") {
        playAyah(curIndex, "translation", curMode);
      } else {
        if (curIndex < currentAyahs.length - 1) {
          playAyah(curIndex + 1, "arabic", curMode);
        } else {
          setIsPlaying(false);
          isPlayingRef.current = false;
          ambientAudioRef.current?.pause();
        }
      }
    } else if (curMode === "ar_en") {
      if (curPhase === "arabic") {
        playAyah(curIndex, "translation", curMode);
      } else {
        if (curIndex < currentAyahs.length - 1) {
          playAyah(curIndex + 1, "arabic", curMode);
        } else {
          setIsPlaying(false);
          isPlayingRef.current = false;
          ambientAudioRef.current?.pause();
        }
      }
    } else {
      if (curIndex < currentAyahs.length - 1) {
        playAyah(curIndex + 1, "arabic", curMode);
      } else {
        setIsPlaying(false);
        isPlayingRef.current = false;
        ambientAudioRef.current?.pause();
      }
    }
  }, [playAyah]);

  const handleAudioError = useCallback(() => {
    handleAudioEnded();
  }, [handleAudioEnded]);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      ambientAudioRef.current?.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      playAyah(activeAyahIndex, audioPhase, audioMode);
      if (selectedAmbience !== "none" && ambientAudioRef.current && ambientAudioRef.current.src) {
        ambientAudioRef.current.play().catch(() => {});
      }
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

  const fallbackCopyText = (text: string, ayahNum: number) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedAyah(ayahNum);
      setTimeout(() => setCopiedAyah(null), 2000);
    } catch (err) {
      console.warn("Fallback copy failed:", err);
    }
  };

  const copyAyahText = (ayah: Ayah) => {
    const text = `📖 Surah ${surahInfo?.englishName} (${surahInfo?.number}:${ayah.numberInSurah})\n\n${ayah.text}\n\nاردو: ${ayah.urduText}\n\nEnglish: ${ayah.englishText}`;
    
    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedAyah(ayah.numberInSurah);
          setTimeout(() => setCopiedAyah(null), 2000);
        })
        .catch(() => {
          fallbackCopyText(text, ayah.numberInSurah);
        });
    } else {
      fallbackCopyText(text, ayah.numberInSurah);
    }
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

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === "Space") {
        e.preventDefault();
        togglePlayback();
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNextAyah();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handlePrevAyah();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, activeAyahIndex, ayahs.length]);

  const currentAyah = ayahs[activeAyahIndex];
  const activeAmbientItem = AMBIENT_TRACKS.find((t) => t.id === selectedAmbience);

  // MediaSession API & Screen WakeLock (Guarantees uninterrupted background tab & lock screen playback)
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("mediaSession" in navigator && currentAyah && surahInfo) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${surahInfo.englishName} • Verse ${currentAyah.numberInSurah}`,
        artist:
          audioPhase === "arabic"
            ? "Mishary Rashid Alafasy"
            : "Fateh Muhammad Jalandhry (Urdu)",
        album: "Noor Al-Quran الكريم",
        artwork: [
          { src: "/favicon5.png", sizes: "512x512", type: "image/png" },
        ],
      });

      navigator.mediaSession.playbackState = isPlaying ? "playing" : "paused";

      try {
        navigator.mediaSession.setActionHandler("play", () => {
          if (!isPlayingRef.current) togglePlayback();
        });
        navigator.mediaSession.setActionHandler("pause", () => {
          if (isPlayingRef.current) togglePlayback();
        });
        navigator.mediaSession.setActionHandler("nexttrack", () => handleNextAyah());
        navigator.mediaSession.setActionHandler("previoustrack", () => handlePrevAyah());
      } catch (e) {
        // Safe fallback for older browsers
      }
    }
  }, [currentAyah, surahInfo, audioPhase, isPlaying]);

  // Keep screen awake while Quran is playing
  useEffect(() => {
    let wakeLockSentinel: any = null;

    const requestWakeLock = async () => {
      try {
        if (typeof window !== "undefined" && "wakeLock" in navigator && isPlaying) {
          wakeLockSentinel = await (navigator as any).wakeLock.request("screen");
        }
      } catch (err) {
        // Wake lock is optional
      }
    };

    if (isPlaying) {
      requestWakeLock();
    }

    return () => {
      if (wakeLockSentinel) {
        wakeLockSentinel.release().catch(() => {});
        wakeLockSentinel = null;
      }
    };
  }, [isPlaying]);

  if (loading && ayahs.length === 0) {
    return (
      <div className="h-screen h-[100dvh] w-full relative flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-white animate-spin drop-shadow-md" />
          <p className="text-xs uppercase tracking-widest font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Loading Surah...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] font-sans text-white overflow-hidden flex flex-col justify-between select-none pt-[max(0.4rem,env(safe-area-inset-top))] pb-[max(0.4rem,env(safe-area-inset-bottom))] px-2.5 sm:px-5 md:px-6 z-10 overscroll-none">
      {/* --- NATURAL BACKGROUND VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover -z-20 pointer-events-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Contrast Backdrop */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/65 -z-10 pointer-events-none" />

      {/* Hidden Native Audio Element for Quran Recitation */}
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onCanPlay={() => setIsBuffering(false)}
        onCanPlayThrough={() => setIsBuffering(false)}
        onLoadedData={() => setIsBuffering(false)}
        preload="auto"
      />

      {/* Hidden Native Audio Element for Ambient Vocals/Soundscape */}
      <audio ref={ambientAudioRef} loop preload="auto" />

      {/* --- TOP COMPACT HEADER --- */}
      <header className="shrink-0 flex-none z-30 w-full flex items-center justify-between pointer-events-auto py-0.5 sm:py-1">
        {/* Left: Back Button */}
        <button
          onClick={() => router.push("/quran")}
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-emerald-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors cursor-pointer active:scale-95"
        >
          <ArrowLeft size={16} />
          <span>Surahs</span>
        </button>

        {/* Center: Surah Title */}
        <div className="text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
          <h1 className="text-xs sm:text-sm md:text-base font-black tracking-wide text-white">
            {surahInfo?.englishName}{" "}
            <span className="font-arabic text-emerald-300 font-normal ml-1">
              ({surahInfo?.name})
            </span>
          </h1>
          <p className="text-[8.5px] sm:text-[10px] font-bold tracking-widest text-emerald-200/90 uppercase">
            Ayah {activeAyahIndex + 1} of {ayahs.length}
          </p>
        </div>

        {/* Right: Quick Tools */}
        <div className="flex items-center gap-1 sm:gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {currentAyah && (
            <>
              <button
                onClick={() => toggleBookmark(currentAyah.numberInSurah)}
                title="Bookmark"
                className={`p-1.5 transition-colors cursor-pointer ${
                  bookmarkedAyah === currentAyah.numberInSurah
                    ? "text-amber-400"
                    : "text-white/80 hover:text-amber-300"
                }`}
              >
                <Bookmark
                  size={16}
                  fill={bookmarkedAyah === currentAyah.numberInSurah ? "currentColor" : "none"}
                />
              </button>

              <button
                onClick={() => copyAyahText(currentAyah)}
                title="Copy Ayah"
                className="p-1.5 text-white/80 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                {copiedAyah === currentAyah.numberInSurah ? (
                  <Check size={16} className="text-emerald-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>

              <button
                onClick={() => setIsLoopingSingleAyah(!isLoopingSingleAyah)}
                title={isLoopingSingleAyah ? "Loop Single Ayah: ON" : "Loop Single Ayah: OFF"}
                className={`p-1.5 transition-colors cursor-pointer ${
                  isLoopingSingleAyah ? "text-emerald-400" : "text-white/80 hover:text-white"
                }`}
              >
                <Repeat size={16} />
              </button>
            </>
          )}
        </div>
      </header>

      {/* --- CENTER STAGE: BALANCED & RESPONSIVE PROPORTIONED TYPOGRAPHY (ZERO BOXES) --- */}
      <main className="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-2 sm:px-6 md:px-12 max-w-4xl lg:max-w-5xl mx-auto text-center z-20 overflow-y-auto no-scrollbar py-0.5 sm:py-2">
        {currentAyah && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentAyah.numberInSurah}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col items-center justify-center gap-1.5 sm:gap-3 md:gap-4 m-auto py-1"
            >
              {/* --- ARABIC TEXT (PERFECTLY SIZED & CRISP) --- */}
              <div className="w-full">
                <p
                  dir="rtl"
                  className="font-arabic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-normal text-center leading-[1.8] sm:leading-[1.9] md:leading-[2] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
                >
                  {currentAyah.text}
                  {/* End Ayah Symbol */}
                  <span className="inline-flex items-center justify-center relative mx-1.5 sm:mx-2 text-emerald-300 align-middle font-serif">
                    <span className="text-lg sm:text-2xl md:text-3xl">۝</span>
                    <span className="absolute text-[8px] sm:text-[10px] md:text-xs font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5 text-emerald-200">
                      {toArabicNumber(currentAyah.numberInSurah)}
                    </span>
                  </span>
                </p>
              </div>

              {/* --- URDU TRANSLATION (COMPACT & BEAUTIFULLY PROPORTIONED) --- */}
              <div className="w-full">
                <p
                  dir="rtl"
                  className={`font-urdu text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-normal sm:leading-relaxed transition-colors duration-300 drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)] ${
                    isPlaying && audioPhase === "translation" && audioMode.includes("ur")
                      ? "text-emerald-300 font-bold"
                      : "text-emerald-100/95 font-medium"
                  }`}
                >
                  {currentAyah.urduText}
                </p>
              </div>

              {/* --- ENGLISH TRANSLATION (CLEAN SUBTITLE) --- */}
              {currentAyah.englishText && (
                <div className="w-full max-w-2xl px-2">
                  <p
                    className={`text-[11px] sm:text-xs md:text-sm italic text-center font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
                      isPlaying && audioPhase === "translation" && audioMode.includes("en")
                        ? "text-emerald-300 font-normal"
                        : "text-slate-200/85"
                    }`}
                  >
                    &quot;{currentAyah.englishText}&quot;
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* --- MINIMALIST, PREMIUM & CLEAN SOUNDSCAPES MODAL (ALL ENGLISH / NO CLUTTER) --- */}
      <AnimatePresence>
        {isMixerOpen && (
          <div
            onClick={() => setIsMixerOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xs sm:max-w-sm rounded-3xl bg-[#090d16]/95 border border-white/10 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col gap-4 text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Headphones size={16} className="text-emerald-400" />
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                    Soundscapes & Mixer
                  </h3>
                </div>
                <button
                  onClick={() => setIsMixerOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Sound Selector Row / Grid */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Background Ambience
                </span>
                <div className="grid grid-cols-5 gap-1.5">
                  {AMBIENT_TRACKS.map((t) => {
                    const Icon = t.icon;
                    const isSelected = selectedAmbience === t.id;

                    return (
                      <button
                        key={t.id}
                        onClick={() => handleSelectAmbience(t.id)}
                        className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-600 border-emerald-400 text-white shadow-md shadow-emerald-950 scale-[1.03]"
                            : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Icon size={16} />
                        <span className="text-[9px] font-bold mt-1 tracking-tight">
                          {t.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dual Volume Sliders */}
              <div className="flex flex-col gap-3 pt-2.5 border-t border-white/10">
                {/* Quran Recitation Volume */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Volume2 size={13} className="text-emerald-400" />
                      <span>Quran Volume</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-emerald-400">
                      {Math.round(quranVolume * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={quranVolume}
                    onChange={(e) => setQuranVolume(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-white/15 rounded-full appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                  />
                </div>

                {/* Ambience Volume */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-bold text-slate-200">
                      <Headphones size={13} className="text-emerald-400" />
                      <span>
                        Ambience ({activeAmbientItem && activeAmbientItem.id !== "none" ? activeAmbientItem.title : "Off"})
                      </span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-emerald-400">
                      {selectedAmbience === "none" ? "Muted" : `${Math.round(ambienceVolume * 100)}%`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    disabled={selectedAmbience === "none"}
                    value={ambienceVolume}
                    onChange={(e) => setAmbienceVolume(parseFloat(e.target.value))}
                    className={`w-full h-1.5 rounded-full appearance-none cursor-pointer accent-emerald-400 focus:outline-none ${
                      selectedAmbience === "none"
                        ? "bg-white/10 opacity-30 cursor-not-allowed"
                        : "bg-white/15"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- BOTTOM COMPACT CONTROLLER (CLEAN & SLEEK) --- */}
      <footer className="shrink-0 flex-none z-30 w-full flex flex-col items-center gap-1.5 sm:gap-2 max-w-xl mx-auto pb-0.5">
        {/* Audio Mode Switcher */}
        <div className="flex items-center justify-center gap-1 p-0.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md">
          {[
            { id: "ar_ur", short: "Ar + Urdu" },
            { id: "ar_en", short: "Ar + Eng" },
            { id: "ar", short: "Arabic" },
            { id: "ur", short: "Urdu" },
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
              className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                audioMode === m.id
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-950"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {m.short}
            </button>
          ))}
        </div>

        {/* Floating Player Controls Bar */}
        <div className="w-full p-1.5 sm:p-2.5 rounded-full bg-black/55 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center justify-between gap-1.5 sm:gap-2">
          {/* Left: Info & Disc */}
          <div className="flex items-center gap-1.5 sm:gap-2 pl-1 sm:pl-1.5 min-w-0 flex-1">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md shrink-0">
              <motion.div
                animate={isPlaying ? { rotate: 360 } : {}}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              >
                <Disc size={14} />
              </motion.div>
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">
                Ayah {activeAyahIndex + 1} of {ayahs.length}
              </p>
              <p className="text-[8px] sm:text-[9px] text-emerald-300 uppercase tracking-widest font-medium truncate">
                {audioPhase === "arabic"
                  ? "Mishary Alafasy"
                  : audioMode.includes("ur")
                  ? "Urdu Tarjuma"
                  : "English Audio"}
              </p>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 pr-0.5 sm:pr-1 shrink-0">
            {/* Ambient Sound / Mixer Button */}
            <button
              onClick={() => setIsMixerOpen(true)}
              title="Ambience & Mixer"
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full border text-[8.5px] sm:text-[10px] font-bold transition-all cursor-pointer ${
                selectedAmbience !== "none"
                  ? "bg-emerald-600/30 border-emerald-400 text-emerald-300 shadow-sm"
                  : "bg-white/10 border-white/10 text-white/90 hover:text-emerald-300 hover:bg-white/15"
              }`}
            >
              <SlidersHorizontal size={12} className={selectedAmbience !== "none" ? "text-emerald-400" : ""} />
              <span className="hidden xs:inline">
                {activeAmbientItem && activeAmbientItem.id !== "none" ? activeAmbientItem.title : "Ambience"}
              </span>
            </button>

            {/* Speed */}
            <button
              onClick={handleSpeedChange}
              title="Speed"
              className="px-1.5 py-0.5 rounded-full bg-white/10 text-[8px] sm:text-[9px] font-bold text-white hover:text-emerald-400 cursor-pointer"
            >
              {playbackRate}x
            </button>

            {/* Prev */}
            <button
              onClick={handlePrevAyah}
              disabled={activeAyahIndex === 0}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-emerald-400 disabled:opacity-30 cursor-pointer active:scale-90 transition-transform"
            >
              <ChevronLeft size={14} />
            </button>

            {/* Main Play / Pause */}
            <button
              onClick={togglePlayback}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/50 cursor-pointer active:scale-95 transition-all"
            >
              {isBuffering ? (
                <Loader2 size={15} className="animate-spin" />
              ) : isPlaying ? (
                <Pause size={15} fill="currentColor" />
              ) : (
                <Play size={15} fill="currentColor" className="ml-0.5" />
              )}
            </button>

            {/* Next */}
            <button
              onClick={handleNextAyah}
              disabled={activeAyahIndex === ayahs.length - 1}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-emerald-400 disabled:opacity-30 cursor-pointer active:scale-90 transition-transform"
            >
              <ChevronRight size={14} />
            </button>

            {/* Stop */}
            <button
              onClick={() => {
                audioRef.current?.pause();
                ambientAudioRef.current?.pause();
                setIsPlaying(false);
                isPlayingRef.current = false;
              }}
              title="Stop"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-rose-400 cursor-pointer active:scale-90 transition-transform"
            >
              <Square size={10} fill="currentColor" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
