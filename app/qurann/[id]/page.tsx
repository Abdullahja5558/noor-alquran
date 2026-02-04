"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, Square, Music, Sparkles, Loader2, Volume2, ChevronLeft, ChevronRight, Mic2, Disc } from 'lucide-react';
import Footer from '@/components/Footer';

interface Ayah {
  numberInSurah: number;
  text: string;
  urduText: string;
  englishText: string;
  audio: string;
}

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

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayahRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const preloadedUrls = useRef<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsLight(!isDark);
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchSurahData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ur.jalandhry,en.asad,ar.alafasy`);
        const data = await res.json();
        
        const listRes = await fetch(`https://api.alquran.cloud/v1/surah`);
        const listData = await listRes.json();
        setAllSurahs(listData.data);

        const combinedAyahs = data.data[0].ayahs.map((a: any, i: number) => ({
          numberInSurah: a.numberInSurah,
          text: a.text,
          urduText: data.data[1].ayahs[i].text,
          englishText: data.data[2].ayahs[i].text,
          audio: data.data[3].ayahs[i].audio
        }));

        setSurahInfo(data.data[0]);
        setAyahs(combinedAyahs);
        setLoading(false);
        preloadAudioRange(combinedAyahs, 0, 5);
      } catch (err) { console.error(err); setLoading(false); }
    };
    fetchSurahData();
    window.scrollTo(0, 0);
  }, [id]);

  const currentIdNum = parseInt(id as string);
  const prevSurah = allSurahs[currentIdNum - 2];
  const nextSurah = allSurahs[currentIdNum];

  const preloadAudioRange = (data: Ayah[], start: number, count: number) => {
    const end = Math.min(start + count, data.length);
    for (let i = start; i < end; i++) {
      const url = data[i].audio;
      if (!preloadedUrls.current.has(url)) {
        const a = new Audio(); a.src = url; a.preload = "auto";
        preloadedUrls.current.add(url);
      }
    }
  };

  const playAyah = (index: number) => {
    if (audioRef.current && ayahs[index]) {
      setIsBuffering(true);
      setActiveAyah(ayahs[index].numberInSurah);
      setCurrentAyahIndex(index);
      audioRef.current.src = ayahs[index].audio;
      audioRef.current.load();
      audioRef.current.oncanplaythrough = () => {
        setIsBuffering(false);
        audioRef.current?.play();
        setIsPlaying(true);
      };
      if (index % 5 === 2) preloadAudioRange(ayahs, index + 3, 5);
      ayahRefs.current[ayahs[index].numberInSurah]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        playAyah(currentAyahIndex);
      }
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#F1F5F9]" />;

  if (loading) return (
    <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-[#F1F5F9]" : "bg-[#020617]"}`}>
      <Loader2 className="text-emerald-600 animate-spin" size={30} />
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-700 font-sans selection:bg-emerald-500/30 overflow-x-hidden ${
      isLight ? "bg-[#F8FAFC] text-slate-900" : "bg-[#020617] text-white"
    }`}>
      <audio ref={audioRef} onEnded={() => currentAyahIndex < ayahs.length - 1 ? playAyah(currentAyahIndex + 1) : setIsPlaying(false)} />

      {/* --- PREMIUM NAV --- */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-all duration-500 px-6 py-4 ${
        isLight ? "bg-white/70 backdrop-blur-xl border-slate-200" : "bg-[#020617]/80 backdrop-blur-xl border-white/5"
      }`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`p-2 rounded-xl transition-all border cursor-pointer hover:scale-110 ${
            isLight ? "bg-slate-50 border-slate-200 text-slate-600" : "bg-white/5 border-white/5"
          }`}><ArrowLeft size={18}/></button>
          
          <div className="text-center">
            <h2 className={`text-base font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>{surahInfo?.englishName}</h2>
            <p className="text-[10px] text-emerald-600 font-black tracking-[0.2em] uppercase">{surahInfo?.revelationType} • {surahInfo?.numberOfAyahs} Verses</p>
          </div>

          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border cursor-help ${
            isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
          }`}><Sparkles size={16}/></div>
        </div>
      </nav>

      {/* --- PREMIUM MINI PLAYER CONTROL --- */}
      <AnimatePresence>
        {ayahs.length > 0 && (
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-100 w-[95%] max-w-md">
            <div className={`backdrop-blur-3xl border rounded-[2.5rem] p-3 md:p-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all ${
              isLight ? "bg-white/90 border-slate-200" : "bg-slate-900/80 border-white/10"
            }`}>
              {/* Left: Info & Artist */}
              <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center overflow-hidden transition-all ${
                  isLight ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                }`}>
                   <motion.div 
                    animate={isPlaying ? { rotate: 360 } : {}} 
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="flex items-center justify-center"
                   >
                     <Disc size={24} className={isPlaying ? 'opacity-100' : 'opacity-40'} />
                   </motion.div>
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`text-xs md:text-sm font-black truncate ${isLight ? "text-slate-900" : "text-white"}`}>{surahInfo?.englishName}</p>
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase">Ayah {activeAyah || 1}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Mic2 size={10} className="text-emerald-500" />
                    <p className="text-[9px] md:text-[10px] text-emerald-600 font-bold uppercase tracking-wider truncate">Mishary Rashid Alafasy</p>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-2 ml-2">
                <button 
                  onClick={togglePlayback} 
                  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-emerald-600/30"
                >
                  {isBuffering ? <Loader2 size={20} className="animate-spin" /> : isPlaying ? <Pause size={20} fill="currentColor"/> : <Play size={20} fill="currentColor" className="ml-1"/>}
                </button>
                <button 
                  onClick={() => { audioRef.current?.pause(); setIsPlaying(false); setActiveAyah(null); }} 
                  className={`w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                    isLight ? "bg-slate-50 border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-500" : "bg-white/5 border-white/10 text-white/30 hover:bg-red-500/10 hover:text-red-400"
                  }`}
                >
                  <Square size={14} fill="currentColor"/>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-32 pb-48 px-6 max-w-5xl mx-auto">
        {/* Bismillah */}
        {id !== "1" && id !== "9" && (
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-arabic transition-all tracking-normal ${isLight ? "text-emerald-900" : "text-emerald-50/80"}`} style={{ direction: 'rtl', fontFamily: "'Amiri', serif" }}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
        )}

        {/* Verses List */}
        <div className="space-y-8 md:space-y-12">
          {ayahs.map((ayah, index) => (
            <motion.div 
              key={index}
              ref={(el) => { if (el) ayahRefs.current[ayah.numberInSurah] = el; }}
              whileHover={{ scale: 1.01 }}
              onClick={() => playAyah(index)}
              className={`relative p-6 md:p-10 rounded-[2.5rem] transition-all duration-500 border cursor-pointer ${
                activeAyah === ayah.numberInSurah 
                ? (isLight ? 'bg-white border-emerald-300 shadow-xl ring-1 ring-emerald-100' : 'bg-white/5 border-emerald-500/30 ring-1 ring-emerald-500/20 shadow-[0_0_40px_rgba(16,185,129,0.1)]')
                : (isLight ? 'bg-white/40 border-slate-100 hover:border-emerald-200' : 'bg-white/2 border-transparent hover:border-white/10')
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-[9px] font-black border px-3 py-1 rounded-full uppercase tracking-widest ${
                    isLight ? "bg-slate-50 border-slate-200 text-slate-400" : "border-white/10 text-gray-500"
                  }`}>{ayah.numberInSurah}</span>
                  <div className={`h-px w-6 ${isLight ? "bg-emerald-100" : "bg-emerald-500/10"}`} />
                  <div className={`${activeAyah === ayah.numberInSurah ? "text-emerald-500" : "text-emerald-500/20"} transition-all`}>
                    <Volume2 size={14}/>
                  </div>
                </div>

                <p className={`font-arabic leading-[1.8] mb-8 transition-all ${
                  ayah.text.length > 200 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
                } ${activeAyah === ayah.numberInSurah ? (isLight ? 'text-slate-900 font-medium' : 'text-white') : (isLight ? 'text-slate-600' : 'text-slate-400')}`} style={{ direction: 'rtl', fontFamily: "'Amiri', serif" }}>
                  {ayah.text}
                </p>

                <p className={`font-urdu leading-loose mb-6 font-medium ${
                  ayah.urduText.length > 150 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
                } ${isLight ? "text-emerald-800/80" : "text-emerald-100/60"}`} style={{ direction: 'rtl' }}>
                  {ayah.urduText}
                </p>

                <p className={`text-[11px] md:text-xs font-medium max-w-2xl leading-relaxed italic uppercase tracking-wide ${
                  isLight ? "text-slate-400" : "text-gray-500"
                }`}>
                  {ayah.englishText}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- NAVIGATION --- */}
        <div className={`mt-32 pt-16 border-t flex flex-col md:flex-row gap-6 items-center justify-between ${
          isLight ? "border-slate-200" : "border-white/5"
        }`}>
          {prevSurah ? (
            <button onClick={() => router.push(`/qurann/${prevSurah.number}`)} className={`w-full md:w-auto flex items-center gap-6 p-6 rounded-4xl border transition-all group cursor-pointer ${
              isLight ? "bg-white border-slate-200 shadow-sm hover:border-emerald-300" : "bg-white/2 border-white/5 hover:border-emerald-500/30"
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                isLight ? "bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white" : "bg-white/5"
              }`}><ChevronLeft size={24} /></div>
              <div className="text-left">
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Previous</p>
                <p className={`text-base font-black ${isLight ? "text-slate-900" : "opacity-80"}`}>{prevSurah.englishName}</p>
              </div>
            </button>
          ) : <div />}

          {nextSurah ? (
            <button onClick={() => router.push(`/qurann/${nextSurah.number}`)} className={`w-full md:w-auto flex items-center gap-6 p-6 rounded-4xl border transition-all group cursor-pointer ${
              isLight ? "bg-white border-slate-200 shadow-sm hover:border-emerald-300" : "bg-white/2 border-white/5 hover:border-emerald-500/30"
            }`}>
              <div className="text-right">
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Next</p>
                <p className={`text-base font-black ${isLight ? "text-slate-900" : "opacity-80"}`}>{nextSurah.englishName}</p>
              </div>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                isLight ? "bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white" : "bg-white/5"
              }`}><ChevronRight size={24} /></div>
            </button>
          ) : <div />}
        </div>
      </main>

      <Footer />
    </div>
  );
}