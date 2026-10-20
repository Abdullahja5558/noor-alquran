"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import {
  ALL_SURAHS_META,
  getSurahMetaByNumber,
  SurahStaticMeta,
} from "@/components/surahMeta";
import { RECITERS_LIST } from "@/components/recitersData";

export type RepeatMode = "off" | "one" | "all";

interface AudioPlayerContextType {
  currentSurah: SurahStaticMeta;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  progress: number; // 0 to 100 percentage
  volume: number; // 0 to 1
  isMuted: boolean;
  isShuffle: boolean;
  repeatMode: RepeatMode;
  isPlaylistOpen: boolean;
  reciterId: string;
  reciterName: string;

  hideBottomPlayer: boolean;
  setHideBottomPlayer: (hide: boolean) => void;

  // Actions
  play: () => Promise<void>;
  pause: () => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  nextSurah: () => void;
  prevSurah: () => void;
  playSurah: (surahNumber: number, autoPlay?: boolean) => void;
  setIsPlaylistOpen: (open: boolean) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

const getSurahAudioUrl = (surahNumber: number, fallback = false): string => {
  if (fallback) {
    const s = String(surahNumber).padStart(3, "0");
    return `https://server8.mp3quran.net/afs/${s}.mp3`;
  }
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`;
};

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSurah, setCurrentSurah] = useState<SurahStaticMeta>(() =>
    getSurahMetaByNumber(1)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(48); // default estimated duration for Al-Fatihah
  const [volume, setVolumeState] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState<RepeatMode>("all");
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
  const [hideBottomPlayer, setHideBottomPlayer] = useState(false);
  const [reciterId] = useState("ar.alafasy");
  const [reciterName] = useState("Mishary Rashid Alafasy");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();

  // Automatically pause background full-surah player whenever user navigates to Quran reading pages (/quran/*)
  useEffect(() => {
    if (pathname && (pathname.startsWith("/quran") || pathname.startsWith("/qurann"))) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [pathname]);

  // Listen for stop-global-audio event from any dedicated player
  useEffect(() => {
    const handleStopGlobal = () => {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
    window.addEventListener("stop-global-audio", handleStopGlobal);
    return () => window.removeEventListener("stop-global-audio", handleStopGlobal);
  }, []);

  const isFallbackUrlRef = useRef(false);

  // Initialize Audio instance once
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.preload = "none";
    audio.src = getSurahAudioUrl(1, false);
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const onLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
      setIsLoading(false);
    };

    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);
    const onPlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };
    const onPause = () => setIsPlaying(false);

    const onError = () => {
      if (!isFallbackUrlRef.current) {
        // Attempt fallback URL
        isFallbackUrlRef.current = true;
        audio.src = getSurahAudioUrl(currentSurah.number, true);
        if (isPlaying) {
          audio.play().catch(() => setIsPlaying(false));
        }
      } else {
        setIsLoading(false);
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    // Retrieve saved volume if available
    try {
      const savedVol = localStorage.getItem("noor_audio_volume");
      if (savedVol !== null) {
        const parsed = parseFloat(savedVol);
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
          setVolumeState(parsed);
          audio.volume = parsed;
        }
      }
    } catch {}

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audio.src = "";
    };
  }, []);

  // Sync volume with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Update MediaSession API for OS and lock-screen controls
  useEffect(() => {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `Surah ${currentSurah.englishName} (${currentSurah.name})`,
        artist: reciterName,
        album: "Noor Al-Quran",
        artwork: [
          {
            src: "/favicon5.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        play();
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        pause();
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        prevSurah();
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        nextSurah();
      });
      navigator.mediaSession.setActionHandler("seekto", (details) => {
        if (details.seekTime !== undefined) {
          seek(details.seekTime);
        }
      });
    } catch {}
  }, [currentSurah, reciterName]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      setIsLoading(true);
      await audioRef.current.play();
      setIsPlaying(true);
      setIsLoading(false);
    } catch (err) {
      console.warn("Playback error:", err);
      setIsPlaying(false);
      setIsLoading(false);
    }
  }, []);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((seconds: number) => {
    if (!audioRef.current) return;
    const clamped = Math.max(0, Math.min(seconds, audioRef.current.duration || seconds));
    audioRef.current.currentTime = clamped;
    setCurrentTime(clamped);
  }, []);

  const setVolume = useCallback((newVol: number) => {
    const clamped = Math.max(0, Math.min(1, newVol));
    setVolumeState(clamped);
    if (isMuted && clamped > 0) {
      setIsMuted(false);
    }
    if (audioRef.current) {
      audioRef.current.volume = clamped;
    }
    try {
      localStorage.setItem("noor_audio_volume", clamped.toString());
    } catch {}
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const toggleShuffle = useCallback(() => {
    setIsShuffle((prev) => !prev);
  }, []);

  const toggleRepeat = useCallback(() => {
    setRepeatMode((prev) => {
      if (prev === "off") return "all";
      if (prev === "all") return "one";
      return "off";
    });
  }, []);

  const playSurah = useCallback(
    (surahNumber: number, autoPlay = true) => {
      const meta = getSurahMetaByNumber(surahNumber);
      setCurrentSurah(meta);
      setCurrentTime(0);
      isFallbackUrlRef.current = false;

      if (!audioRef.current) return;

      const url = getSurahAudioUrl(surahNumber, false);
      audioRef.current.src = url;
      audioRef.current.currentTime = 0;

      if (autoPlay) {
        setIsLoading(true);
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch(() => {
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    },
    []
  );

  const nextSurah = useCallback(() => {
    if (isShuffle) {
      const randomNum = Math.floor(Math.random() * 114) + 1;
      playSurah(randomNum, true);
      return;
    }

    const nextNum = currentSurah.number >= 114 ? 1 : currentSurah.number + 1;
    playSurah(nextNum, true);
  }, [currentSurah.number, isShuffle, playSurah]);

  const prevSurah = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 5) {
      // If played more than 5 seconds, restart current track
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    if (isShuffle) {
      const randomNum = Math.floor(Math.random() * 114) + 1;
      playSurah(randomNum, true);
      return;
    }

    const prevNum = currentSurah.number <= 1 ? 114 : currentSurah.number - 1;
    playSurah(prevNum, true);
  }, [currentSurah.number, isShuffle, playSurah]);

  // Handle track end event
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      if (repeatMode === "one") {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else if (repeatMode === "all") {
        nextSurah();
      } else {
        setIsPlaying(false);
        audio.currentTime = 0;
        setCurrentTime(0);
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("ended", onEnded);
    };
  }, [repeatMode, nextSurah]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSurah,
        isPlaying,
        isLoading,
        currentTime,
        duration,
        progress,
        volume,
        isMuted,
        isShuffle,
        repeatMode,
        isPlaylistOpen,
        hideBottomPlayer,
        setHideBottomPlayer,
        reciterId,
        reciterName,
        play,
        pause,
        togglePlay,
        seek,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleRepeat,
        nextSurah,
        prevSurah,
        playSurah,
        setIsPlaylistOpen,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error("useAudioPlayer must be used within an AudioPlayerProvider");
  }
  return context;
};
