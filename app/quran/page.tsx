"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, BookOpen } from 'lucide-react';
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
  const router = useRouter(); // Router initialize kiya

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

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-emerald-500/30">
      
      {/* --- HEADER SECTION --- */}
      <div className="relative pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Back Button */}
          <motion.button 
            onClick={() => router.push( '/' )} // Yahan Home page par navigate karne ka logic hai
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-10 group cursor-pointer bg-white/5 px-5 py-2 rounded-full border border-white/5"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-bold tracking-widest uppercase">Go Back</span>
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-b from-white to-white/40">
                Al-Quran <span className="text-emerald-500 text-3xl md:text-4xl ml-2">الكريم</span>
              </h1>
              <p className="text-gray-400 mt-4 max-w-lg font-light">
                Explore all 114 Surahs with divine wisdom and deep interpretations.
              </p>
            </div>

            {/* Premium Search Bar */}
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search Surah (e.g. Al-Fatiha)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-emerald-500/50 transition-all text-sm backdrop-blur-md"
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
                <div key={i} className="h-32 bg-white/5 rounded-3xl animate-pulse border border-white/5" />
              ))}
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredSurahs.map((surah) => (
                <motion.div
                  key={surah.number}
                  // Yahan Navigation Logic add ki hai 👇
                  onClick={() => router.push(`/qurann/${surah.number}`)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 rounded-4xl bg-white/2 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer overflow-hidden"
                >
                  {/* Surah Number Background */}
                  <div className="absolute -right-4 -bottom-4 text-8xl font-bold text-white/2 group-hover:text-emerald-500/3 transition-colors pointer-events-none">
                    {surah.number}
                  </div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      {/* Number Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                        {surah.number}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {surah.englishName}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                          {surah.revelationType} • {surah.numberOfAyahs} Verses
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <h2 className="text-2xl font-arabic text-white group-hover:text-emerald-400 transition-colors" style={{ fontFamily: "'Amiri', serif" }}>
                        {surah.name}
                      </h2>
                      <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tighter">
                        {surah.englishNameTranslation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* --- FOOTER CALL --- */}
      <Footer />
    </div>
  );
}