"use client";
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, Square, Music, Sparkles, Loader2, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [allSurahs, setAllSurahs] = useState<any[]>([]); // To get names for next/prev
  const [loading, setLoading] = useState(true);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [activeAyah, setActiveAyah] = useState<number | null>(null);
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ayahRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const preloadedUrls = useRef<Set<string>>(new Set());

  useEffect(() => {
    const fetchSurahData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        // Fetch Surah Details
        const res = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ur.jalandhry,en.asad,ar.alafasy`);
        const data = await res.json();
        
        // Fetch Surah List (for Next/Prev names)
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
    window.scrollTo(0, 0); // Scroll to top on new surah
  }, [id]);

  // Next/Prev logic
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

  if (loading) return (
    <div className="bg-[#020617] min-h-screen flex items-center justify-center">
      <Loader2 className="text-emerald-500 animate-spin" size={30} />
    </div>
  );

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      <audio ref={audioRef} onEnded={() => currentAyahIndex < ayahs.length - 1 ? playAyah(currentAyahIndex + 1) : setIsPlaying(false)} />

      {/* --- ELITE COMPACT NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="p-2 hover:bg-white/5 rounded-xl transition-all border border-white/5"><ArrowLeft size={18}/></button>
          <div className="text-center">
            <h2 className="text-sm md:text-base font-bold tracking-tight">{surahInfo?.englishName}</h2>
            <p className="text-[9px] text-emerald-500 font-black tracking-[0.2em] uppercase">{surahInfo?.revelationType} • {surahInfo?.numberOfAyahs} Verses</p>
          </div>
          <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20 text-emerald-500"><Sparkles size={14}/></div>
        </div>
      </nav>

      {/* --- SMART COMPACT PLAYER --- */}
      <AnimatePresence>
        {ayahs.length > 0 && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-xs">
            <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  {isBuffering ? <Loader2 size={16} className="animate-spin" /> : <Music size={16} className={isPlaying ? 'animate-pulse' : ''} />}
                </div>
                <div className="max-w-[100px]">
                  <p className="text-[10px] font-bold truncate">{surahInfo?.englishName}</p>
                  <p className="text-[8px] text-emerald-500 font-bold uppercase tracking-tighter">{isBuffering ? 'Buffering' : `Ayah ${activeAyah || 1}`}</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <button onClick={togglePlayback} className="w-9 h-9 rounded-xl bg-emerald-500 text-black flex items-center justify-center hover:scale-105 transition-transform">
                  {isPlaying ? <Pause size={16} fill="currentColor"/> : <Play size={16} fill="currentColor" className="ml-0.5"/>}
                </button>
                <button onClick={() => { audioRef.current?.pause(); setIsPlaying(false); setActiveAyah(null); }} className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/50"><Square size={12} fill="currentColor"/></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-40 px-4 md:px-10 max-w-4xl mx-auto">
        {/* Bismillah Compact */}
        {id !== "1" && id !== "9" && (
          <div className="text-center mb-12 opacity-80">
            <h2 className="text-3xl md:text-4xl font-arabic" style={{ direction: 'rtl' }}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
          </div>
        )}

        {/* Verses List */}
        <div className="space-y-12 md:space-y-16">
          {ayahs.map((ayah, index) => (
            <motion.div 
              key={index}
              ref={(el) => { if (el) ayahRefs.current[ayah.numberInSurah] = el; }}
              className={`relative p-4 rounded-2xl transition-all duration-500 ${activeAyah === ayah.numberInSurah ? 'bg-white/[0.02] ring-1 ring-white/5 shadow-xl' : 'opacity-40 hover:opacity-60'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold text-gray-500 border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">{ayah.numberInSurah}</span>
                  <div className="h-px w-6 bg-emerald-500/20" />
                  <button onClick={() => playAyah(index)} className="text-emerald-500/50 hover:text-emerald-500 transition-colors"><Volume2 size={12}/></button>
                </div>

                <p className={`font-arabic leading-relaxed mb-6 px-2 ${ayah.text.length > 250 ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'} ${activeAyah === ayah.numberInSurah ? 'text-white' : 'text-white/80'}`} style={{ direction: 'rtl' }}>
                  {ayah.text}
                </p>

                <p className={`font-urdu leading-relaxed mb-3 text-emerald-100/70 ${ayah.urduText.length > 150 ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`} style={{ direction: 'rtl' }}>
                  {ayah.urduText}
                </p>

                <p className="text-[10px] md:text-xs font-light text-gray-500 max-w-xl leading-relaxed italic">
                  {ayah.englishText}
                </p>
              </div>
              {activeAyah === ayah.numberInSurah && (
                <div className="absolute inset-0 bg-emerald-500/[0.01] blur-xl -z-10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* --- NAVIGATION BUTTONS (NEXT/PREV) --- */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          {prevSurah ? (
            <button 
              onClick={() => router.push(`/qurann/${prevSurah.number}`)}
              className="w-full md:w-auto flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-emerald-500 transition-colors">
                <ChevronLeft size={20} />
              </div>
              <div className="text-left pr-8">
                <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">previous Surah</p>
                <p className="text-sm font-bold opacity-80">{prevSurah.englishName}</p>
              </div>
            </button>
          ) : <div />}

          {nextSurah ? (
            <button 
              onClick={() => router.push(`/qurann/${nextSurah.number}`)}
              className="w-full md:w-auto flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-emerald-500/30 transition-all group cursor-pointer"
            >
              <div className="text-right pl-8">
                <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Next Surah</p>
                <p className="text-sm font-bold opacity-80">{nextSurah.englishName}</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-emerald-500 transition-colors">
                <ChevronRight size={20} />
              </div>
            </button>
          ) : <div />}
        </div>
      </main>

      <Footer />
    </div>
  );
}