"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Share2, Copy, Check, Loader2, Star } from 'lucide-react';

export default function UltimatePremiumHero() {
  const [ayah, setAyah] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const ayahRef = useRef<HTMLDivElement>(null);
  
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const currentLightMode = !isDark;
      setIsLight(currentLightMode);
      document.body.style.backgroundColor = currentLightMode ? "#F8FAFC" : "#020617";
    };

    updateTheme();
    setMounted(true);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const fetchAyah = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 6236) + 1;
      const res = await fetch(`https://api.alquran.cloud/v1/ayah/${randomId}/editions/quran-uthmani,en.asad,ur.jalandhry`);
      const data = await res.json();
      
      const newAyah = {
        arabic: data.data[0].text,
        english: data.data[1].text,
        urdu: data.data[2].text,
        surahName: data.data[0].surah.englishName,
        surahNumber: data.data[0].surah.number,
        ayahNumber: data.data[0].numberInSurah,
        timestamp: Date.now(),
      };
      
      localStorage.setItem('divine_ayah', JSON.stringify(newAyah));
      setAyah(newAyah);

      if (ayahRef.current) {
        ayahRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (err) { 
      console.error("Fetch Error:", err); 
    } finally { 
      setLoading(false); 
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem('divine_ayah');
    if (cached) {
      const parsed = JSON.parse(cached);
      const oneDay = 24 * 60 * 60 * 1000;
      if (Date.now() - parsed.timestamp > oneDay) {
        fetchAyah();
      } else {
        setAyah(parsed);
        setLoading(false);
      }
    } else {
      fetchAyah();
    }
  }, []);

  const getShareText = () => {
    if (!ayah) return "";
    return `✨ *Ayah of the Day* ✨\n\n📖 *Arabic:*\n${ayah.arabic}\n\n📝 *English:*\n${ayah.english}\n\n🖋️ *Urdu:*\n${ayah.urdu}\n\n📍 *Surah ${ayah.surahName} (${ayah.surahNumber}:${ayah.ayahNumber})*`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = getShareText();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    const text = getShareText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Ayah from Surah ${ayah.surahName}`,
          text: text,
          url: window.location.href,
        });
      } catch (err) { console.log("Share failed", err); }
    } else {
      handleCopy();
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-transparent" />;
  }

  return (
    <div 
      className="transition-all duration-700 ease-in-out selection:bg-emerald-500/30"
      style={{ backgroundColor: isLight ? "#F8FAFC" : "#020617" }}
    >
      {/* Premium Font Injection */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=Scheherazade+New:wght@500;600;700&display=swap');
        .premium-arabic-hero {
          font-family: 'Scheherazade New', 'Amiri', serif;
          direction: rtl;
          line-height: 1.6;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 md:pt-40 px-4 overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div 
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-250 h-125 blur-[150px] rounded-full opacity-60 transition-colors duration-1000 ${
              isLight ? "bg-emerald-100" : "bg-emerald-500/10"
            }`} 
          />
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dxi99wtly/image/upload/v1635414361/noise_ov9f7f.png')] opacity-[0.03] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-2 mb-8 border backdrop-blur-xl rounded-full transition-all duration-700 ${
              isLight ? "border-slate-200 bg-white/50 text-slate-600" : "border-white/10 bg-white/5 text-emerald-100/70"
            }`}
          >
            <Sparkles size={14} className="text-emerald-500" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
              The Light of Guidance in Your Pocket
            </span>
          </motion.div>
 
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] transition-colors duration-700 ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Experience the <br /> 
            <span className={`text-transparent bg-clip-text bg-linear-to-b ${
              isLight ? "from-emerald-600 to-slate-800" : "from-white via-white to-white/30"
            }`}>Divine Beauty</span>
          </motion.h1>

          <div ref={ayahRef} className="relative mt-20 group min-h-100 flex items-center justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 z-30"
            >
              <div className="relative group/tag">
                <div className="absolute -inset-1 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-md opacity-50 group-hover/tag:opacity-100 transition duration-500" />
                <div className={`relative flex items-center gap-3 border px-6 py-3 rounded-2xl backdrop-blur-3xl shadow-2xl transition-colors duration-700 ${
                  isLight ? "bg-white border-slate-200" : "bg-[#050b1d] border-white/20"
                }`}>
                  <Star size={16} className="text-emerald-500 fill-emerald-500 animate-pulse" />
                  <span className={`text-[11px] font-black uppercase tracking-[0.4em] whitespace-nowrap ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}>
                    Ayah of the Day
                  </span>
                </div>
              </div>
            </motion.div>

            <div className={`absolute -inset-1 rounded-[3rem] blur-2xl transition duration-1000 ${
              isLight ? "bg-slate-200/50 opacity-40 group-hover:opacity-60" : "bg-linear-to-r from-emerald-500/20 to-blue-500/20 opacity-40 group-hover:opacity-70"
            }`} />
            
            <div className={`relative w-full backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-16 lg:p-24 shadow-2xl overflow-hidden transition-all duration-700 border ${
              isLight ? "bg-white/80 border-slate-200 shadow-slate-200/50" : "bg-[#050b1d]/90 border-white/10"
            }`}>
              
              <AnimatePresence mode='wait'>
                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className={`absolute inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center ${
                      isLight ? "bg-white/60" : "bg-[#050b1d]/60"
                    }`}
                  >
                    <Loader2 className="text-emerald-500 animate-spin mb-4" size={40} />
                    <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/70 font-bold">Fetching Wisdom...</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`${loading ? 'opacity-20 blur-sm' : 'opacity-100 blur-0'} transition-all duration-700`}>
                {ayah && (
                  <>
                    <div className="flex justify-center mb-10">
                      <span className={`px-4 py-1 border rounded-full text-[10px] font-bold tracking-widest uppercase italic transition-colors duration-700 ${
                        isLight ? "border-slate-200 bg-slate-50 text-slate-600" : "border-emerald-500/30 bg-emerald-500/5 text-emerald-400"
                      }`}>
                          Surah {ayah.surahName} • {ayah.surahNumber}:{ayah.ayahNumber}
                      </span>
                    </div>

                    {/* PREMIUM ARABIC APPLIED HERE */}
                    <h2 
                      className={`premium-arabic-hero text-4xl md:text-6xl lg:text-7xl mb-16 text-center transition-colors duration-700 ${
                        isLight ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {ayah.arabic}
                    </h2>

                    <div className={`grid md:grid-cols-2 gap-12 text-left border-t pt-12 transition-colors duration-700 ${
                      isLight ? "border-slate-100" : "border-white/5"
                    }`}>
                      <div className="space-y-4">
                        <span className="text-[10px] tracking-widest uppercase text-emerald-500 font-black">Interpretation</span>
                        <p className={`text-lg font-light leading-relaxed tracking-wide italic transition-colors duration-700 ${
                          isLight ? "text-slate-600" : "text-gray-400"
                        }`}>
                          "{ayah.english}"
                        </p>
                      </div>
                      <div className="space-y-4 text-right">
                        <span className="text-[10px] tracking-widest uppercase text-emerald-500 font-black">اردو ترجمہ</span>
                        <p className={`text-2xl font-urdu leading-loose transition-colors duration-700 ${
                          isLight ? "text-slate-800" : "text-white"
                        }`} style={{ direction: 'rtl' }}>
                          {ayah.urdu}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-12 flex items-center justify-between border-t pt-8 transition-colors duration-700 ${
                      isLight ? "border-slate-100" : "border-white/5"
                    }`}>
                      <div className="flex gap-4 md:gap-6">
                          <button onClick={handleShare} className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors py-2 cursor-pointer ${isLight ? 'text-slate-400' : 'text-white/70'}`}>
                              <Share2 size={14} /> <span className="hidden sm:inline">Share</span>
                          </button>
                          <button onClick={handleCopy} className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors py-2 cursor-pointer ${isLight ? 'text-slate-400' : 'text-white/70'}`}>
                              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />} 
                              {copied ? "Copied!" : <span className="hidden sm:inline">Copy</span>}
                          </button>
                      </div>
                      <button className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors py-2 cursor-pointer ${isLight ? 'text-slate-600' : 'text-white/70'}`}>
                        <BookOpen size={14} /> <span className="hidden sm:inline">Full Surah</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-16"
          >
            <button 
              onClick={fetchAyah}
              disabled={loading}
              className={`group flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all duration-500 transform hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer shadow-xl ${
                isLight 
                  ? "bg-slate-900 text-white hover:bg-emerald-600 shadow-slate-300" 
                  : "bg-white text-black hover:bg-emerald-400 shadow-white/5"
              }`}
            >
              {loading ? "Seeking..." : "Get Random Ayah"} 
              <ArrowRight size={20} className={`${loading ? 'opacity-0' : 'group-hover:translate-x-1'} transition-transform`} />
            </button>
          </motion.div>

        </div>
      </section>
    </div>
  );
}