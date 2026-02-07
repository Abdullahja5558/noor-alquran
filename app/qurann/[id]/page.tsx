"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Pause, Square, Sparkles, Loader2, Volume2, ChevronLeft, ChevronRight, Disc, Waves } from 'lucide-react';
import Footer from '@/components/Footer';

interface Ayah {
  numberInSurah: number;
  text: string;
  urduText: string;
  englishText: string;
  audio: string;
  audioUrdu: string;
  audioEnglish: string;
}

type AudioMode = 'ar' | 'ur' | 'en';

export default function SurahDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [surahInfo, setSurahInfo] = useState<any>(null);
  const [allSurahs, setAllSurahs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false); 

  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [activeAyah, setActiveAyah] = useState<number | null>(null);
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  const [audioMode, setAudioMode] = useState<AudioMode>('ar');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayahRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const preloadedUrls = useRef<Set<string>>(new Set());

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsLight(!isDark);
    setMounted(true);
    const updateTheme = () => setIsLight(!document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const fastPreload = (data: Ayah[], startIndex: number, count: number) => {
    const end = Math.min(startIndex + count, data.length);
    for (let i = startIndex; i < end; i++) {
      const urls = [data[i].audio, data[i].audioUrdu, data[i].audioEnglish].filter(Boolean);
      urls.forEach(url => {
        if (!preloadedUrls.current.has(url)) {
          const audioObj = new Audio();
          audioObj.src = url;
          audioObj.preload = "auto";
          preloadedUrls.current.add(url);
        }
      });
    }
  };

  useEffect(() => {
    const fetchSurahData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ur.jalandhry,en.asad,ar.alafasy,ur.khan,en.walk`);
        const data = await res.json();
        const listRes = await fetch(`https://api.alquran.cloud/v1/surah`);
        const listData = await listRes.json();
        setAllSurahs(listData.data);

        if (data.data) {
          const combinedAyahs = data.data[0].ayahs.map((a: any, i: number) => ({
            numberInSurah: a.numberInSurah,
            text: a.text,
            urduText: data.data[1].ayahs[i].text,
            englishText: data.data[2].ayahs[i].text,
            audio: data.data[3].ayahs[i].audio,
            audioUrdu: data.data[4].ayahs[i].audio,
            audioEnglish: data.data[5].ayahs[i].audio
          }));

          setSurahInfo(data.data[0]);
          setAyahs(combinedAyahs);
        }
        setLoading(false);
        setTimeout(() => fastPreload(ayahs, 0, 5), 500);
      } catch (err) { 
        console.error("Fetch Error:", err); 
        setLoading(false); 
      }
    };
    fetchSurahData();
    window.scrollTo(0, 0);
  }, [id]);

  const playAyah = (index: number) => {
    if (!ayahs[index] || !audioRef.current) return;
    
    setIsBuffering(true);
    setActiveAyah(ayahs[index].numberInSurah);
    setCurrentAyahIndex(index);

    let selectedUrl = ayahs[index].audio;
    if (audioMode === 'ur') selectedUrl = ayahs[index].audioUrdu;
    if (audioMode === 'en') selectedUrl = ayahs[index].audioEnglish;

    if (!selectedUrl) {
      setIsBuffering(false);
      return;
    }

    audioRef.current.src = selectedUrl;
    audioRef.current.load();
    
    audioRef.current.play()
      .then(() => { 
        setIsBuffering(false); 
        setIsPlaying(true); 
      })
      .catch(() => setIsBuffering(false));

    if ((index + 1) % 5 === 3 || index === 0) fastPreload(ayahs, index + 3, 5);
    ayahRefs.current[ayahs[index].numberInSurah]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const togglePlayback = () => {
    if (isPlaying) { audioRef.current?.pause(); setIsPlaying(false); }
    else { playAyah(currentAyahIndex); }
  };

  const currentSurahNumber = parseInt(id as string);
  const prevSurah = allSurahs.find(s => s.number === currentSurahNumber - 1);
  const nextSurah = allSurahs.find(s => s.number === currentSurahNumber + 1);

  if (!mounted || loading) return (
    <div className={`min-h-screen flex flex-col items-center justify-center gap-8 ${isLight ? "bg-[#F8FAFC]" : "bg-[#020617]"}`}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-12 h-12 border-2 border-emerald-500 border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans selection:bg-emerald-500/30 overflow-x-hidden ${isLight ? "bg-[#F8FAFC] text-slate-900" : "bg-[#020617] text-white"}`}>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700&family=Scheherazade+New:wght@400;500;600;700&display=swap');
        
        .premium-arabic {
          font-family: 'Scheherazade New', 'Amiri', serif;
          direction: rtl;
          line-height: 2.2;
          text-rendering: optimizeLegibility;
          word-spacing: 4px;
        }

        .ayah-end-symbol {
          font-family: 'Amiri', serif;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 0 12px;
          color: #10b981;
          vertical-align: middle;
          user-select: none;
        }

        .ayah-number-badge {
          font-family: 'sans-serif';
          font-size: 0.35em;
          position: absolute;
          font-weight: 800;
          top: 52%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <audio 
        ref={audioRef} 
        onEnded={() => currentAyahIndex < ayahs.length - 1 ? playAyah(currentAyahIndex + 1) : setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onError={() => { setIsBuffering(false); setIsPlaying(false); }}
        preload="auto"
      />

      <nav className={`fixed top-0 w-full z-50 border-b px-6 py-4 backdrop-blur-xl transition-all ${isLight ? "bg-white/70 border-slate-200" : "bg-[#020617]/80 border-white/5"}`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="p-2 rounded-xl border border-white/10 cursor-pointer hover:bg-emerald-500/10 transition-all active:scale-90"><ArrowLeft size={18}/></button>
          <div className="text-center">
            <h2 className="text-base font-black tracking-tight">{surahInfo?.englishName}</h2>
            <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{surahInfo?.numberOfAyahs} Ayahs</p>
          </div>
          <div className="w-9 h-9 rounded-xl border border-emerald-500/20 flex items-center justify-center text-emerald-500"><Sparkles size={16}/></div>
        </div>
      </nav>

      {/* Control Bar */}
      {ayahs.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-lg flex flex-col gap-3">
          <div className={`flex items-center justify-center gap-1.5 p-1 rounded-full border backdrop-blur-3xl self-center shadow-2xl ${isLight ? "bg-white/80 border-slate-200" : "bg-slate-900/60 border-white/10"}`}>
            {(['ar', 'ur', 'en'] as AudioMode[]).map((mode) => (
              <button key={mode} onClick={() => { setAudioMode(mode); if(isPlaying) playAyah(currentAyahIndex); }} className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.15em] transition-all cursor-pointer ${audioMode === mode ? "bg-emerald-600 text-white shadow-lg" : "text-gray-400 hover:text-emerald-500"}`}>
                {mode === 'ar' ? 'Arabic' : mode === 'ur' ? 'Urdu' : 'English'}
              </button>
            ))}
          </div>

          <div className={`backdrop-blur-3xl border rounded-[2.5rem] p-3 md:p-4 flex items-center justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${isLight ? "bg-white/95 border-slate-200" : "bg-slate-900/90 border-white/10"}`}>
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg overflow-hidden shrink-0">
                <motion.div animate={isPlaying ? { rotate: 360 } : {}} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
                  <Disc size={26} className="text-white/90"/>
                </motion.div>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs md:text-sm font-black truncate">{surahInfo?.englishName}</p>
                  {isPlaying && <Waves size={12} className="text-emerald-500 animate-pulse shrink-0" />}
                </div>
                <p className="text-emerald-500 font-bold text-[9px] uppercase tracking-wider mt-0.5 truncate">
                  {audioMode === 'ar' ? 'Mishary Alafasy' : audioMode === 'ur' ? 'Fateh Muhammad Jalandhry' : 'Ibrahim Walk'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              <button onClick={togglePlayback} className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center cursor-pointer shadow-lg active:scale-90 transition-all">
                {isBuffering ? <Loader2 size={22} className="animate-spin" /> : isPlaying ? <Pause size={22} fill="currentColor"/> : <Play size={22} fill="currentColor" className="ml-1"/>}
              </button>
              <button onClick={() => { audioRef.current?.pause(); setIsPlaying(false); setActiveAyah(null); }} className="w-11 h-11 rounded-full border border-white/5 bg-white/5 flex items-center justify-center cursor-pointer text-gray-500 hover:text-red-500 transition-all active:scale-90">
                <Square size={14} fill="currentColor"/>
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="pt-32 pb-48 px-6 max-w-5xl mx-auto">
        {id !== "1" && id !== "9" && (
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl premium-arabic ${isLight ? "text-emerald-900" : "text-emerald-50/80"}`}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
        )}

        <div className="space-y-8 md:space-y-12">
          {ayahs.map((ayah, index) => (
            <motion.div 
              key={index}
              ref={(el) => { if (el) ayahRefs.current[ayah.numberInSurah] = el; }}
              onClick={() => playAyah(index)}
              className={`relative p-6 md:p-10 rounded-[2.5rem] transition-all duration-300 border cursor-pointer group ${
                activeAyah === ayah.numberInSurah 
                ? (isLight ? 'bg-white border-emerald-300' : 'bg-white/5 border-emerald-500/30')
                : (isLight ? 'bg-white/40 border-slate-100 hover:border-emerald-200' : 'bg-white/2 border-transparent hover:border-white/10')
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-[9px] font-black border px-3 py-1 rounded-full uppercase tracking-widest ${activeAyah === ayah.numberInSurah ? "bg-emerald-500 border-emerald-500 text-white" : (isLight ? "bg-slate-50 border-slate-200 text-slate-400" : "border-white/10 text-gray-500")}`}>{ayah.numberInSurah}</span>
                  <div className={`${activeAyah === ayah.numberInSurah ? "text-emerald-500 scale-110" : "text-emerald-500/20 group-hover:text-emerald-500/40"} transition-all`}><Volume2 size={14}/></div>
                </div>

                <p 
                  className={`premium-arabic transition-all duration-500 text-2xl md:text-4xl ${
                    activeAyah === ayah.numberInSurah 
                    ? (isLight ? 'text-slate-900' : 'text-white') 
                    : (isLight ? 'text-slate-600' : 'text-slate-400')
                  }`}
                >
                  {ayah.text}
                  <span className="ayah-end-symbol text-emerald-500 scale-125 md:scale-100">
                    <span className="ayah-number-badge">{ayah.numberInSurah}</span>
                    <span className="opacity-90">۝</span>
                  </span>
                </p>

                <p className={`font-urdu leading-loose mb-6 mt-8 font-medium ${ayah.urduText.length > 150 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} ${isLight ? "text-emerald-800/80" : "text-emerald-100/60"}`} style={{ direction: 'rtl' }}>{ayah.urduText}</p>
                <p className={`text-[11px] md:text-xs font-medium max-w-2xl leading-relaxed italic uppercase tracking-wide ${isLight ? "text-slate-400" : "text-gray-500"}`}>{ayah.englishText}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={`mt-32 pt-16 border-t flex flex-col md:flex-row gap-6 items-center justify-between ${isLight ? "border-slate-200" : "border-white/5"}`}>
          {prevSurah && (
            <button onClick={() => router.push(`/qurann/${prevSurah.number}`)} className={`w-full md:w-auto flex items-center gap-6 p-6 rounded-4xl border transition-all group cursor-pointer active:scale-95 ${isLight ? "bg-white border-slate-200 hover:border-emerald-300 shadow-sm" : "bg-white/2 border-white/5 hover:border-emerald-500/30 shadow-2xl"}`}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-500 flex items-center justify-center transition-all group-hover:bg-emerald-600 group-hover:text-white"><ChevronLeft size={24} /></div>
              <div className="text-left"><p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Previous</p><p className="text-base font-black">{prevSurah.englishName}</p></div>
            </button>
          )}
          {nextSurah && (
            <button onClick={() => router.push(`/qurann/${nextSurah.number}`)} className={`w-full md:w-auto flex items-center gap-6 p-6 rounded-4xl border transition-all group cursor-pointer active:scale-95 ${isLight ? "bg-white border-slate-200 hover:border-emerald-300 shadow-sm" : "bg-white/2 border-white/5 hover:border-emerald-500/30 shadow-2xl"}`}>
              <div className="text-right"><p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Next</p><p className="text-base font-black">{nextSurah.englishName}</p></div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-500 flex items-center justify-center transition-all group-hover:bg-emerald-600 group-hover:text-white"><ChevronRight size={24} /></div>
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}