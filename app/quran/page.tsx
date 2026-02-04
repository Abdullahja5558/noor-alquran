"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import Footer from '@/components/Footer';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function QuranPage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false); 
  const router = useRouter();

  // --- 100% ANTI-FLICKER THEME LOGIC ---
  useEffect(() => {
    const syncTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsLight(!isDark);
      // Theme set hone ke baad mount true karein
      setMounted(true);
    };

    // Initial check
    syncTheme();

    // Listen for theme changes (agar toggle ho)
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch('https://api.alquran.cloud/v1/surah')
      .then(res => res.json())
      .then(data => {
        setSurahs(data.data);
        setLoading(false);
      });
  }, []);

  const filteredSurahs = surahs.filter(s => 
    s.englishName.toLowerCase().includes(search.toLowerCase()) || 
    s.number.toString().includes(search)
  );

  // Flicker Prevention: Jab tak mounted na ho, screen khali rakhein ya default dark background
  if (!mounted) {
    return <div className="min-h-screen bg-[#020617]" />; 
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-emerald-500/30 ${
        isLight ? "bg-[#F1F5F9] text-slate-900" : "bg-[#020617] text-white"
      }`}
    >
      
      {/* --- HEADER SECTION --- */}
      <div className="relative pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.button 
            onClick={() => router.push( '/' )}
            whileHover={{ x: -5 }}
            className={`flex items-center gap-2 transition-all mb-10 group cursor-pointer px-5 py-2 rounded-full border ${
              isLight 
              ? "bg-white border-slate-200 text-slate-600 shadow-sm" 
              : "bg-white/5 border-white/5 text-gray-400 hover:text-emerald-400"
            }`}
          >
            <ArrowLeft size={20} className="text-emerald-600" />
            <span className="text-sm font-bold tracking-widest uppercase">Go Back</span>
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter transition-colors ${
                isLight ? "text-slate-900" : "bg-clip-text text-transparent bg-linear-to-b from-white to-white/40"
              }`}>
                Al-Quran <span className="text-emerald-500 text-3xl md:text-4xl ml-2 font-normal italic">الكريم</span>
              </h1>
              <p className={`mt-4 max-w-lg font-light transition-colors ${
                isLight ? "text-slate-500" : "text-gray-400"
              }`}>
                Explore all 114 Surahs with divine wisdom and deep interpretations.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                isLight ? "text-slate-400" : "text-gray-500"
              }`} size={18} />
              <input 
                type="text" 
                placeholder="Search Surah..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full rounded-2xl py-4 pl-12 pr-4 outline-none transition-all text-sm border ${
                  isLight 
                  ? "bg-white border-slate-200 text-slate-900 shadow-sm focus:border-emerald-500" 
                  : "bg-white/5 border-white/10 text-white backdrop-blur-md focus:border-emerald-500/50"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- SURAH GRID --- */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`h-32 rounded-3xl animate-pulse border ${
                  isLight ? "bg-white border-slate-100" : "bg-white/5 border-white/5"
                }`} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSurahs.map((surah) => (
                <motion.div
                  key={surah.number}
                  layout
                  onClick={() => router.push(`/qurann/${surah.number}`)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative p-6 rounded-[2.5rem] border transition-all cursor-pointer overflow-hidden ${
                    isLight 
                    ? "bg-white border-slate-200 shadow-sm hover:border-emerald-500/30" 
                    : "bg-white/2 border-white/5 hover:border-emerald-500/30"
                  }`}
                >
                  <div className={`absolute -right-4 -bottom-4 text-8xl font-bold transition-colors pointer-events-none ${
                    isLight ? "text-slate-100/50" : "text-white/2 group-hover:text-emerald-500/3"
                  }`}>
                    {surah.number}
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold border transition-all ${
                        isLight 
                        ? "bg-slate-50 border-slate-100 text-slate-900 group-hover:bg-emerald-600 group-hover:text-white" 
                        : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black"
                      }`}>
                        {surah.number}
                      </div>
                      
                      <div>
                        <h3 className={`text-xl font-bold transition-colors ${
                          isLight ? "text-slate-900 group-hover:text-emerald-600" : "text-white group-hover:text-emerald-400"
                        }`}>
                          {surah.englishName}
                        </h3>
                        <p className={`text-xs font-medium tracking-wide uppercase ${
                          isLight ? "text-slate-400" : "text-gray-500"
                        }`}>
                          {surah.revelationType} • {surah.numberOfAyahs} Verses
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <h2 className={`text-2xl font-arabic transition-colors ${
                        isLight ? "text-emerald-700" : "text-white group-hover:text-emerald-400"
                      }`} style={{ fontFamily: "'Amiri', serif" }}>
                        {surah.name}
                      </h2>
                      <p className={`text-[10px] font-bold uppercase tracking-tighter ${
                        isLight ? "text-slate-400" : "text-gray-600"
                      }`}>
                        {surah.englishNameTranslation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </motion.div>
  );
}