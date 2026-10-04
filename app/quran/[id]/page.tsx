"use client";

import React, { useEffect, useState, useRef, useCallback, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { getSurahMetaByNumber, SurahStaticMeta } from "@/components/surahMeta";

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

type AudioMode = "ar" | "ar_ur" | "ar_en" | "ur";
type AudioPhase = "arabic" | "translation";
type AmbientType = "none" | "rain" | "birds" | "fire";

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
];

const EVERYAYAH_RECITERS: Record<string, string> = {
  "ar.alafasy": "Alafasy_128kbps",
  "ar.abdulbasitmurattal": "Abdul_Basit_Murattal_192kbps",
  "ar.minshawi": "Minshawy_Murattal_128kbps",
  "ar.husary": "Husary_128kbps",
  "ar.yasseraldossari": "Yasser_Ad-Dussary_128kbps",
  "ar.mahermuaiqly": "Maher_AlMuaiqly_64kbps",
  "ar.abdurrahmaansudais": "Abdurrahmaan_As-Sudais_192kbps",
  "ar.saoodshuraym": "Saood_ash-Shuraym_128kbps",
  "ar.hudhaify": "Hudhaify_128kbps",
  "ar.ahmedajamy": "Ahmed_ibn_Ali_al-Ajamy_128kbps_ketaballah.net",
  "ar.abdullahbasfar": "Abdullah_Basfar_192kbps",
  "ar.aymanswoid": "Ayman_Sowaid_64kbps",
  "ar.muhammadayyoub": "Muhammad_Ayyoob_128kbps",
  "ar.haniurrifai": "Hani_Rifai_192kbps",
  "ar.abubakrashshaatree": "Abu_Bakr_Ash-Shaatree_128kbps",
  "ar.idrisabkar": "Idrees_Abkar_64kbps",
  "ar.muhammadjibreel": "Muhammad_Jibreel_128kbps",
};

const getEveryAyahUrl = (reciterId: string, surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  const folder = EVERYAYAH_RECITERS[reciterId] || "Alafasy_128kbps";
  return `https://everyayah.com/data/${folder}/${s}${a}.mp3`;
};

const getUrduAudioUrl = (surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/${s}${a}.mp3`;
};

const getEnglishAudioUrl = (surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `https://everyayah.com/data/translations/english_walk_192kbps/${s}${a}.mp3`;
};

// Global in-memory cache for ultra-fast instant 0ms switching
const globalSurahMemoryCache = new Map<string, { surahInfo: SurahMeta; ayahs: Ayah[] }>();

// Helper to generate instant placeholders with deterministic audio URLs
const createInitialAyahs = (sNum: number, reciterId: string, count: number): Ayah[] => {
  return Array.from({ length: count }, (_, i) => ({
    numberInSurah: i + 1,
    text: i === 0 && sNum !== 9 ? "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ" : `آية ${i + 1}`,
    urduText: i === 0 && sNum !== 9 ? "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے" : "",
    englishText: i === 0 && sNum !== 9 ? "In the name of Allah, the Entirely Merciful, the Especially Merciful." : "",
    audio: getEveryAyahUrl(reciterId, sNum, i + 1),
    audioUrdu: getUrduAudioUrl(sNum, i + 1),
    audioEnglish: getEnglishAudioUrl(sNum, i + 1),
  }));
};

export default function SurahDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const surahId = resolvedParams.id;
  const router = useRouter();
  const searchParams = useSearchParams();
  const reciterParam = searchParams.get("reciter");
  const autoplayParam = searchParams.get("autoplay");
  const playlistParam = searchParams.get("playlist");

  const currentSNum = parseInt(surahId, 10) || 1;
  const staticMeta: SurahStaticMeta = getSurahMetaByNumber(currentSNum);

  const prevSurahNum = currentSNum > 1 ? currentSNum - 1 : null;
  const nextSurahNum = currentSNum < 114 ? currentSNum + 1 : null;

  const [selectedReciter, setSelectedReciter] = useState<Reciter>(() => {
    if (reciterParam) {
      const found = RECITERS_LIST.find((r) => r.id === reciterParam);
      if (found) return found;
    }
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("noor_selected_reciter");
      if (saved) {
        const found = RECITERS_LIST.find((r) => r.id === saved);
        if (found) return found;
      }
    }
    return RECITERS_LIST[0]; // Mishary Rashid Alafasy
  });

  // Keep reciter synchronized if query parameter changes
  useEffect(() => {
    if (reciterParam) {
      const found = RECITERS_LIST.find((r) => r.id === reciterParam);
      if (found && found.id !== selectedReciter.id) {
        setSelectedReciter(found);
        if (typeof window !== "undefined") {
          localStorage.setItem("noor_selected_reciter", found.id);
        }
        audioCache.current.clear();
      }
    }
  }, [reciterParam, selectedReciter.id]);

  const [activeMixerTab, setActiveMixerTab] = useState<"reciters" | "soundscapes">("reciters");

  // Zero-Wait State: Initialize immediately with static meta & instant audio URLs
  const [surahInfo, setSurahInfo] = useState<SurahMeta>(() => {
    const cacheKey = `surah_fast_v11_${surahId}_${selectedReciter.id}`;
    if (globalSurahMemoryCache.has(cacheKey)) {
      return globalSurahMemoryCache.get(cacheKey)!.surahInfo;
    }
    return staticMeta;
  });

  const [ayahs, setAyahs] = useState<Ayah[]>(() => {
    const cacheKey = `surah_fast_v11_${surahId}_${selectedReciter.id}`;
    if (globalSurahMemoryCache.has(cacheKey)) {
      return globalSurahMemoryCache.get(cacheKey)!.ayahs;
    }
    return createInitialAyahs(currentSNum, selectedReciter.id, staticMeta.numberOfAyahs);
  });

  // Audio Playback State
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAyahIndex, setActiveAyahIndex] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>("ar_ur"); // Default: Arabic + Urdu
  const [audioPhase, setAudioPhase] = useState<AudioPhase>("arabic");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLoopingSingleAyah, setIsLoopingSingleAyah] = useState(false);
  const [copiedAyah, setCopiedAyah] = useState<number | null>(null);
  const [bookmarkedAyah, setBookmarkedAyah] = useState<number | null>(null);
  const [isScrubberHovered, setIsScrubberHovered] = useState(false);
  const [scrubPreviewAyah, setScrubPreviewAyah] = useState<number | null>(null);

  // Ambient & Mixer State
  const [selectedAmbience, setSelectedAmbience] = useState<AmbientType>("none");
  const [ambienceVolume, setAmbienceVolume] = useState<number>(0.3);
  const [quranVolume, setQuranVolume] = useState<number>(1);
  const [isMixerOpen, setIsMixerOpen] = useState(false);

  // Refs for continuous uninterrupted playback
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);

  const currentIndexRef = useRef(0);
  const currentPhaseRef = useRef<AudioPhase>("arabic");
  const currentModeRef = useRef<AudioMode>("ar_ur");
  const isPlayingRef = useRef(false);
  const ayahsRef = useRef<Ayah[]>(ayahs);
  const isLoopingRef = useRef(false);
  const quranVolRef = useRef(1);

  // Audio Preload Cache
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map());

  const fastPreload = useCallback((data: Ayah[], startIndex: number, count: number) => {
    if (!data || data.length === 0) return;
    const end = Math.min(startIndex + count, data.length);
    for (let i = startIndex; i < end; i++) {
      if (!data[i]) continue;
      const urls = [data[i].audio, data[i].audioUrdu].filter(Boolean);
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

  // Handle live reciter selection
  const handleSelectReciter = (reciter: Reciter) => {
    setSelectedReciter(reciter);
    if (typeof window !== "undefined") {
      localStorage.setItem("noor_selected_reciter", reciter.id);
    }
    audioCache.current.clear();
    setAyahs((prev) => {
      const updated = prev.map((a) => ({
        ...a,
        audio: getEveryAyahUrl(reciter.id, currentSNum, a.numberInSurah),
      }));
      ayahsRef.current = updated;
      return updated;
    });

    if (isPlayingRef.current && audioRef.current) {
      const nextUrl = getEveryAyahUrl(reciter.id, currentSNum, activeAyahIndex + 1);
      audioRef.current.src = nextUrl;
      audioRef.current.play().catch(() => {});
    }
  };

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

  // Determine current audio URL based on mode and phase
  const getAudioUrl = useCallback(
    (index: number, phase: AudioPhase, mode: AudioMode) => {
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs[index]) return "";

      if (mode === "ar") return currentAyahs[index].audio;
      if (mode === "ur") return currentAyahs[index].audioUrdu;
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

  // Play Ayah - Instant & 0ms Zero-Lag Audio Engine
  const playAyah = useCallback(
    (index: number, phase: AudioPhase = "arabic", mode: AudioMode = currentModeRef.current) => {
      const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
      if (!currentAyahs[index] || !audioRef.current) return;

      setActiveAyahIndex(index);
      setAudioPhase(phase);
      currentIndexRef.current = index;
      currentPhaseRef.current = phase;
      currentModeRef.current = mode;
      setIsPlaying(true);
      isPlayingRef.current = true;

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

      if (!targetUrl) return;

      if (audioRef.current.src !== targetUrl) {
        audioRef.current.src = targetUrl;
      }
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.volume = quranVolRef.current;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (ambientAudioRef.current && ambientAudioRef.current.src && ambientAudioRef.current.paused) {
              ambientAudioRef.current.play().catch(() => {});
            }
          })
          .catch((e) => {
            console.warn("Audio play error", e);
          });
      }

      fastPreload(currentAyahs, index, 10);
    },
    [ayahs, getAudioUrl, playbackRate, fastPreload]
  );

  // Next and Previous Surah Navigation
  const handleGoToNextSurah = useCallback(() => {
    if (nextSurahNum) {
      router.push(`/quran/${nextSurahNum}?reciter=${selectedReciter.id}&autoplay=true`);
    }
  }, [nextSurahNum, router, selectedReciter.id]);

  const handleGoToPrevSurah = useCallback(() => {
    if (prevSurahNum) {
      router.push(`/quran/${prevSurahNum}?reciter=${selectedReciter.id}&autoplay=true`);
    }
  }, [prevSurahNum, router, selectedReciter.id]);

  // Handle Surah Completion - Seamless auto-advance without popup
  const handleSurahCompletion = useCallback(() => {
    if (playlistParam) {
      const foundPlaylist = COLLECTIONS_DATA.find((p) => p.id === playlistParam);
      if (foundPlaylist && foundPlaylist.tracks.length > 0) {
        const currentTrackIdx = foundPlaylist.tracks.findIndex(
          (t) => t.surahNumber === parseInt(surahId, 10)
        );
        if (currentTrackIdx !== -1 && currentTrackIdx < foundPlaylist.tracks.length - 1) {
          const nextTrack = foundPlaylist.tracks[currentTrackIdx + 1];
          if (nextTrack) {
            router.push(
              `/quran/${nextTrack.surahNumber}?reciter=${selectedReciter.id}&autoplay=true&playlist=${playlistParam}`
            );
            return;
          }
        }
      }
    }
    if (nextSurahNum) {
      handleGoToNextSurah();
    } else {
      setIsPlaying(false);
      isPlayingRef.current = false;
      setActiveAyahIndex(0);
      currentIndexRef.current = 0;
    }
  }, [playlistParam, surahId, selectedReciter.id, router, nextSurahNum, handleGoToNextSurah]);

  // Handle Audio Ended - 0ms instant transition
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
          handleSurahCompletion();
        }
      }
    } else if (curMode === "ar_en") {
      if (curPhase === "arabic") {
        playAyah(curIndex, "translation", curMode);
      } else {
        if (curIndex < currentAyahs.length - 1) {
          playAyah(curIndex + 1, "arabic", curMode);
        } else {
          handleSurahCompletion();
        }
      }
    } else {
      if (curIndex < currentAyahs.length - 1) {
        playAyah(curIndex + 1, "arabic", curMode);
      } else {
        handleSurahCompletion();
      }
    }
  }, [playAyah, handleSurahCompletion]);

  const handleAudioError = useCallback(() => {
    handleAudioEnded();
  }, [handleAudioEnded]);

  // Fetch full Surah text in background without blocking audio or player
  useEffect(() => {
    let isMounted = true;
    const cacheKey = `surah_fast_v11_${surahId}_${selectedReciter.id}`;

    // Immediately preload first 12 audio files on mount
    fastPreload(ayahsRef.current, 0, 12);

    // Check in-memory global cache first
    if (globalSurahMemoryCache.has(cacheKey)) {
      const cached = globalSurahMemoryCache.get(cacheKey)!;
      setSurahInfo(cached.surahInfo);
      setAyahs(cached.ayahs);
      ayahsRef.current = cached.ayahs;
      fastPreload(cached.ayahs, 0, 12);

      if (autoplayParam === "true" || autoplayParam === "1") {
        setTimeout(() => {
          playAyah(0, "arabic", audioMode);
        }, 50);
      }
      return;
    }

    // Check localStorage cache
    const cachedData = typeof window !== "undefined" ? localStorage.getItem(cacheKey) : null;
    if (cachedData) {
      try {
        const parsed = JSON.parse(cachedData);
        globalSurahMemoryCache.set(cacheKey, parsed);
        setSurahInfo(parsed.surahInfo);
        setAyahs(parsed.ayahs);
        ayahsRef.current = parsed.ayahs;
        fastPreload(parsed.ayahs, 0, 12);

        if (autoplayParam === "true" || autoplayParam === "1") {
          setTimeout(() => {
            playAyah(0, "arabic", audioMode);
          }, 50);
        }
        return;
      } catch (e) {
        console.warn("Cache parse error", e);
      }
    }

    // Auto-play immediately if requested
    if (autoplayParam === "true" || autoplayParam === "1") {
      setTimeout(() => {
        playAyah(0, "arabic", audioMode);
      }, 50);
    }

    const fetchSurahData = async () => {
      try {
        const res = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,ur.jalandhry,en.asad`
        );
        const data = await res.json();

        if (!isMounted) return;

        if (data.data && data.data[0]) {
          const combinedAyahs: Ayah[] = data.data[0].ayahs.map(
            (a: { numberInSurah: number; text: string }, i: number) => {
              return {
                numberInSurah: a.numberInSurah,
                text: a.text,
                urduText: data.data[1]?.ayahs[i]?.text || "",
                englishText: data.data[2]?.ayahs[i]?.text || "",
                audio: getEveryAyahUrl(selectedReciter.id, currentSNum, a.numberInSurah),
                audioUrdu: getUrduAudioUrl(currentSNum, a.numberInSurah),
                audioEnglish: getEnglishAudioUrl(currentSNum, a.numberInSurah),
              };
            }
          );

          const payload = {
            surahInfo: data.data[0],
            ayahs: combinedAyahs,
          };

          globalSurahMemoryCache.set(cacheKey, payload);
          setSurahInfo(data.data[0]);
          setAyahs(combinedAyahs);
          ayahsRef.current = combinedAyahs;

          if (typeof window !== "undefined") {
            try {
              localStorage.setItem(cacheKey, JSON.stringify(payload));
            } catch {}
          }

          fastPreload(combinedAyahs, currentIndexRef.current, 12);

          // Background pre-fetch next Surah so next button is 0ms instant
          if (currentSNum < 114) {
            const nextSurahKey = `surah_fast_v11_${currentSNum + 1}_${selectedReciter.id}`;
            if (!globalSurahMemoryCache.has(nextSurahKey)) {
              fetch(`https://api.alquran.cloud/v1/surah/${currentSNum + 1}/editions/quran-uthmani,ur.jalandhry,en.asad`)
                .then((r) => r.json())
                .then((nd) => {
                  if (nd.data && nd.data[0]) {
                    const nextAyahs: Ayah[] = nd.data[0].ayahs.map(
                      (na: { numberInSurah: number; text: string }, ni: number) => ({
                        numberInSurah: na.numberInSurah,
                        text: na.text,
                        urduText: nd.data[1]?.ayahs[ni]?.text || "",
                        englishText: nd.data[2]?.ayahs[ni]?.text || "",
                        audio: getEveryAyahUrl(selectedReciter.id, currentSNum + 1, na.numberInSurah),
                        audioUrdu: getUrduAudioUrl(currentSNum + 1, na.numberInSurah),
                        audioEnglish: getEnglishAudioUrl(currentSNum + 1, na.numberInSurah),
                      })
                    );
                    globalSurahMemoryCache.set(nextSurahKey, {
                      surahInfo: nd.data[0],
                      ayahs: nextAyahs,
                    });
                  }
                })
                .catch(() => {});
            }
          }
        }
      } catch (err) {
        console.error("Fetch Surah Error:", err);
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
  }, [surahId, selectedReciter.id, autoplayParam, currentSNum, audioMode, fastPreload, playAyah]);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      ambientAudioRef.current?.pause();
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      setIsPlaying(true);
      isPlayingRef.current = true;
      const targetUrl = getAudioUrl(activeAyahIndex, audioPhase, audioMode);
      if (audioRef.current) {
        if (audioRef.current.src !== targetUrl || !audioRef.current.src) {
          audioRef.current.src = targetUrl;
        }
        audioRef.current.volume = quranVolRef.current;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.play().catch((err) => {
          console.warn("Playback prevented or interrupted", err);
        });
      }
      if (selectedAmbience !== "none" && ambientAudioRef.current && ambientAudioRef.current.src) {
        ambientAudioRef.current.play().catch(() => {});
      }
      fastPreload(ayahsRef.current.length > 0 ? ayahsRef.current : ayahs, activeAyahIndex, 10);
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
    const text = `📖 Surah ${surahInfo.englishName} (${surahInfo.number}:${ayah.numberInSurah})\n\n${ayah.text}\n\nاردو: ${ayah.urduText}\n\nEnglish: ${ayah.englishText}`;

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
        handleGoToNextSurah();
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        handleGoToPrevSurah();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, handleGoToNextSurah, handleGoToPrevSurah]);

  const currentAyah = ayahs[activeAyahIndex] || ayahs[0];
  const activeAmbientItem = AMBIENT_TRACKS.find((t) => t.id === selectedAmbience);

  // MediaSession API & Screen WakeLock
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("mediaSession" in navigator && currentAyah && surahInfo) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${surahInfo.englishName} • Verse ${currentAyah.numberInSurah}`,
        artist:
          audioPhase === "arabic"
            ? `${selectedReciter.name} (${selectedReciter.city})`
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
        navigator.mediaSession.setActionHandler("nexttrack", () => handleGoToNextSurah());
        navigator.mediaSession.setActionHandler("previoustrack", () => handleGoToPrevSurah());
      } catch (e) {
        // Safe fallback
      }
    }
  }, [currentAyah, surahInfo, audioPhase, isPlaying, handleGoToNextSurah, handleGoToPrevSurah, selectedReciter]);

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

  return (
    <div className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] font-sans text-white overflow-hidden flex flex-col justify-between select-none pt-[max(0.4rem,env(safe-area-inset-top))] pb-[max(0.4rem,env(safe-area-inset-bottom))] px-3 sm:px-6 md:px-8 z-10 overscroll-none">
      {/* --- NATURAL BACKGROUND VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
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
        preload="auto"
      />

      {/* Hidden Native Audio Element for Ambient Vocals/Soundscape */}
      <audio ref={ambientAudioRef} loop preload="auto" />

      {/* --- TOP HEADER (NATURAL FULL-WIDTH DISTRIBUTION) --- */}
      <header className="shrink-0 flex-none z-30 w-full flex items-center justify-between pointer-events-auto py-1.5 sm:py-2.5 max-w-7xl mx-auto">
        {/* Left: Back Button */}
        <button
          onClick={() => router.push("/quran")}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 hover:text-blue-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] transition-colors cursor-pointer active:scale-95"
        >
          <ArrowLeft size={16} />
          <span>Surahs</span>
        </button>

        {/* Center: Surah Title */}
        <div className="text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2">
          <h1 className="text-xs sm:text-sm md:text-base font-black tracking-wide text-white">
            {surahInfo.englishName}{" "}
            <span className="font-arabic text-blue-300 font-normal ml-1">
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

      {/* --- CENTER STAGE: BALANCED & REFINED TYPOGRAPHY (NEVER OVERFLOWS 100VH) --- */}
      <main className="flex-1 min-h-0 w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 max-w-4xl lg:max-w-5xl mx-auto text-center z-20 overflow-y-auto no-scrollbar py-1 sm:py-2">
        {currentAyah && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentAyah.numberInSurah}-${audioMode}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 my-auto py-1"
            >
              {/* --- 1. ARABIC TEXT (Balanced Size, Crisp & Elegant) --- */}
              {(audioMode === "ar" || audioMode === "ar_ur" || audioMode === "ar_en") && (
                <div className="w-full">
                  <p
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
                    {/* End Ayah Symbol */}
                    <span className="inline-flex items-center justify-center relative mx-1 sm:mx-1.5 text-blue-300 align-middle font-serif">
                      <span className="text-sm sm:text-base md:text-xl">۝</span>
                      <span className="absolute text-[7px] sm:text-[8px] md:text-[9.5px] font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5 text-blue-200">
                        {toArabicNumber(currentAyah.numberInSurah)}
                      </span>
                    </span>
                  </p>
                </div>
              )}

              {/* --- 2. URDU TRANSLATION (Shown ONLY in 'ar_ur' and 'ur' modes) --- */}
              {(audioMode === "ar_ur" || audioMode === "ur") && currentAyah.urduText && (
                <div className="w-full max-w-2xl px-2">
                  <p
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

              {/* --- 3. ENGLISH TRANSLATION (Shown ONLY in 'ar_en' mode) --- */}
              {audioMode === "ar_en" && currentAyah.englishText && (
                <div className="w-full max-w-xl px-2">
                  <p
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
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* --- MINIMALIST, PREMIUM RECITERS & SOUNDSCAPES MODAL --- */}
      <AnimatePresence>
        {isMixerOpen && (
          <div
            onClick={() => setIsMixerOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-md"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm sm:max-w-md max-h-[85vh] rounded-3xl bg-[#07090e]/95 border border-white/10 p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex flex-col gap-3 text-white overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2">
                  <Headphones size={16} className="text-blue-400" />
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                    Audio Settings & Reciters
                  </h3>
                </div>
                <button
                  onClick={() => setIsMixerOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Modal Tabs Switcher */}
              <div className="grid grid-cols-2 p-1 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold shrink-0">
                <button
                  onClick={() => setActiveMixerTab("reciters")}
                  className={`py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMixerTab === "reciters"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Mic size={13} />
                  <span>Reciters ({RECITERS_LIST.length})</span>
                </button>
                <button
                  onClick={() => setActiveMixerTab("soundscapes")}
                  className={`py-1.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMixerTab === "soundscapes"
                      ? "bg-blue-600 text-white shadow-md shadow-blue-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <SlidersHorizontal size={13} />
                  <span>Ambience & Mixer</span>
                </button>
              </div>

              {/* Tab 1: Reciters Selection */}
              {activeMixerTab === "reciters" && (
                <div className="flex-1 overflow-y-auto space-y-2 pr-1 no-scrollbar max-h-[50vh]">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                    Select Voice of Reciter (مشاهير القراء)
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {RECITERS_LIST.map((reciter) => {
                      const isSelected = selectedReciter.id === reciter.id;
                      return (
                        <button
                          key={reciter.id}
                          onClick={() => handleSelectReciter(reciter)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer text-left ${
                            isSelected
                              ? "bg-blue-600/30 border-blue-400 shadow-md shadow-blue-950/40"
                              : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10 shrink-0 bg-slate-800">
                              <Image
                                src={reciter.image}
                                alt={reciter.name}
                                fill
                                sizes="36px"
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div className="min-w-0">
                              <p className={`text-xs font-bold truncate ${isSelected ? "text-blue-300" : "text-white"}`}>
                                {reciter.name}
                              </p>
                              <p className="text-[10px] text-slate-400 truncate">
                                {reciter.flag} {reciter.city}, {reciter.country} • <span className="text-blue-400/90">{reciter.style}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="font-arabic text-xs text-slate-300">
                              {reciter.arabicName}
                            </span>
                            {isSelected && (
                              <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                <Check size={12} strokeWidth={3} />
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 2: Soundscapes & Dual Volumes */}
              {activeMixerTab === "soundscapes" && (
                <div className="flex flex-col gap-3.5 py-1">
                  {/* Sound Selector Row / Grid */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Background Ambience
                    </span>
                    <div className="grid grid-cols-4 gap-1.5">
                      {AMBIENT_TRACKS.map((t) => {
                        const Icon = t.icon;
                        const isSelected = selectedAmbience === t.id;

                        return (
                          <button
                            key={t.id}
                            onClick={() => handleSelectAmbience(t.id)}
                            className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-950 scale-[1.03]"
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
                          <Volume2 size={13} className="text-blue-400" />
                          <span>Quran Volume ({selectedReciter.name.split(" ")[0]})</span>
                        </span>
                        <span className="font-mono text-[11px] font-bold text-blue-400">
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
                        className="w-full h-1.5 bg-white/15 rounded-full appearance-none cursor-pointer accent-blue-400 focus:outline-none"
                      />
                    </div>

                    {/* Ambience Volume */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 font-bold text-slate-200">
                          <Headphones size={13} className="text-blue-400" />
                          <span>
                            Ambience ({activeAmbientItem && activeAmbientItem.id !== "none" ? activeAmbientItem.title : "Off"})
                          </span>
                        </span>
                        <span className="font-mono text-[11px] font-bold text-blue-400">
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
                        className={`w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-400 focus:outline-none ${
                          selectedAmbience === "none"
                            ? "bg-white/10 opacity-30 cursor-not-allowed"
                            : "bg-white/15"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- SLEEK GLASSMORHPIC FLOATING PLAYER BAR --- */}
      <footer className="shrink-0 flex-none z-30 w-full flex flex-col items-center gap-1.5 sm:gap-2 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto pb-1 sm:pb-2">
        {/* Audio Mode Switcher Chips (Glassmorphism Pill) */}
        <div className="flex items-center justify-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-full bg-black/45 backdrop-blur-xl backdrop-saturate-180 border border-white/15 shadow-xl shadow-black/50">
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
                if (isPlaying) {
                  playAyah(activeAyahIndex, "arabic", newMode);
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

        {/* Floating Capsule Bar (Ultra-Premium Glassmorphism) */}
        <div className="w-full rounded-[2rem] sm:rounded-full bg-black/50 sm:bg-black/40 backdrop-blur-2xl backdrop-saturate-200 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] px-3.5 sm:px-5 py-2 sm:py-2.5 flex flex-col gap-1.5">
          {/* Top Row: Left Info | Center Controls | Right Tools */}
          <div className="w-full flex items-center justify-between gap-2">
            {/* Left: Reciter Photo Avatar & Surah Title */}
            <button
              onClick={() => {
                setActiveMixerTab("reciters");
                setIsMixerOpen(true);
              }}
              className="flex items-center gap-2.5 min-w-0 shrink-0 text-left hover:opacity-90 transition-opacity cursor-pointer group"
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

            {/* Center: Playback Controls (Prev Surah | Play/Pause | Next Surah | Speed | Repeat) */}
            <div className="flex items-center justify-center gap-1 sm:gap-2.5 shrink-0">
              {/* Speed Button */}
              <button
                onClick={handleSpeedChange}
                title="Playback Speed"
                className="hidden xs:flex px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-[8.5px] sm:text-[9.5px] font-bold text-white/80 hover:text-white cursor-pointer transition-colors"
              >
                {playbackRate}x
              </button>

              {/* Previous Surah Button (SkipBack <<) */}
              <button
                onClick={handleGoToPrevSurah}
                disabled={!prevSurahNum}
                title={prevSurahNum ? `Previous Surah (${prevSurahNum})` : "First Surah"}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white hover:text-blue-300 disabled:opacity-30 disabled:hover:text-white cursor-pointer active:scale-90 transition-transform"
                aria-label="Previous Surah"
              >
                <SkipBack size={15} className="fill-white" />
              </button>

              {/* Main Play / Pause Button (Clean Solid White - No Glow) */}
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

              {/* Next Surah Button (SkipForward >>) */}
              <button
                onClick={handleGoToNextSurah}
                disabled={!nextSurahNum}
                title={nextSurahNum ? `Next Surah (${nextSurahNum})` : "Last Surah"}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white hover:text-blue-300 disabled:opacity-30 disabled:hover:text-white cursor-pointer active:scale-90 transition-transform"
                aria-label="Next Surah"
              >
                <SkipForward size={15} className="fill-white" />
              </button>

              {/* Repeat Single Ayah Toggle */}
              <button
                onClick={() => setIsLoopingSingleAyah(!isLoopingSingleAyah)}
                title={isLoopingSingleAyah ? "Loop Single Ayah: ON" : "Loop Single Ayah: OFF"}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
                  isLoopingSingleAyah ? "text-blue-400 bg-blue-500/20" : "text-white/60 hover:text-white"
                }`}
                aria-label="Loop"
              >
                <Repeat size={13} />
              </button>
            </div>

            {/* Right: Drawer & Soundscape Volume */}
            <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0 justify-end">
              {/* Reciters Drawer List Icon */}
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

              {/* Ambience & Mixer Icon */}
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

          {/* Bottom Row: Full Surah Progress Scrubber (Minimalist Flat Clean Track - Zero Glow) */}
          <div className="w-full flex items-center gap-2 sm:gap-2.5 px-0.5 pt-0.5">
            {/* Current Ayah */}
            <span className="text-[9px] sm:text-[10px] font-mono text-white/60 shrink-0 min-w-[38px]">
              Ayah {activeAyahIndex + 1}
            </span>

            {/* Scrubber Track with Solid Flat White Fill & Floating Tooltip Pill */}
            <div 
              className="relative flex-1 h-1.5 rounded-full bg-white/15 cursor-pointer group flex items-center"
              onMouseEnter={() => setIsScrubberHovered(true)}
              onMouseLeave={() => {
                setIsScrubberHovered(false);
                setScrubPreviewAyah(null);
              }}
            >
              {/* Solid Flat White Progress Fill (Zero Glow) */}
              <div
                className="h-full bg-white rounded-full transition-all duration-75 shadow-none"
                style={{ 
                  width: `${ayahs.length > 0 ? (((scrubPreviewAyah !== null ? scrubPreviewAyah - 1 : activeAyahIndex) + 1) / ayahs.length) * 100 : 0}%` 
                }}
              />

              {/* Floating White Tooltip Pill */}
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

              {/* Native invisible Range Input for 100% reliable drag & scrub across all devices */}
              <input
                type="range"
                min="1"
                max={Math.max(ayahs.length, 1)}
                step="1"
                value={scrubPreviewAyah ?? (activeAyahIndex + 1)}
                onInput={(e) => {
                  const val = parseInt((e.target as HTMLInputElement).value, 10);
                  setScrubPreviewAyah(val);
                  const targetIdx = val - 1;
                  const currentAyahs = ayahsRef.current.length > 0 ? ayahsRef.current : ayahs;
                  if (currentAyahs[targetIdx]) {
                    fastPreload(currentAyahs, targetIdx, 3);
                  }
                }}
                onChange={(e) => {
                  const targetAyah = parseInt(e.target.value, 10);
                  const targetIndex = targetAyah - 1;
                  setScrubPreviewAyah(null);
                  if (targetIndex >= 0 && targetIndex < ayahs.length) {
                    playAyah(targetIndex, "arabic", audioMode);
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              />
            </div>

            {/* Total Ayahs in Surah */}
            <span className="text-[9px] sm:text-[10px] font-mono text-white/60 shrink-0 min-w-[38px] text-right">
              Ayah {ayahs.length}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
