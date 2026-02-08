"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Heart, Share2, Copy, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DUA_DATA, Dua } from '@/components/duaData';
import Footer from '@/components/Footer';

export default function DuaPage() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsLight(!isDark);
      document.body.style.backgroundColor = !isDark ? "#F1F5F9" : "#020617";
    };
    updateTheme();
    setMounted(true);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const categories = ["All", "Protection", "Success", "Peace of Mind", "Forgiveness"];

  const filteredDuas = DUA_DATA.filter(dua => 
    (activeCategory === "All" || dua.category === activeCategory) &&
    (dua.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     dua.urdu.includes(searchTerm))
  );

  // FIX: Safe Copy Logic
  const copyToClipboard = (dua: Dua) => {
    const fullText = `${dua.title}\n\n${dua.arabic}\n\n${dua.urdu}\n\nRef: ${dua.ref}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText).then(() => {
        setCopyStatus(String(dua.id));
        setTimeout(() => setCopyStatus(null), 2000);
      });
    }
  };

  // FIX: Safe Audio Player Logic (Error 1 & 2 Fix)
  const playAudio = (url: string | undefined) => {
    if (!url || !audioRef.current) return;
    
    // Yahan hum check kar rahe hain ke URL hai ya nahi (Fixes 'replace' error)
    const secureUrl = url.replace("http://", "https://");
    
    audioRef.current.pause();
    audioRef.current.src = secureUrl;
    audioRef.current.load();
    audioRef.current.play().catch(e => console.log("Audio play blocked or failed"));
  };

  if (!mounted) return null;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-all duration-700"
      style={{ backgroundColor: isLight ? "#F1F5F9" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      <audio ref={audioRef} className="hidden" />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri&family=Scheherazade+New:wght@400;700&display=swap');
        .font-arabic-premium { font-family: 'Scheherazade New', serif; direction: rtl; }
        .font-urdu-premium { font-family: 'Amiri', serif; direction: rtl; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-3xl border-b px-4 md:px-8 py-4 transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`p-2.5 rounded-xl border transition-all ${
            isLight ? "bg-slate-100 border-slate-200" : "bg-white/5 border-white/5 hover:bg-white/10"
          }`}>
            <ArrowLeft size={20} />
          </button>
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-emerald-600">Al-Munajat</span>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <Heart size={18} className="text-emerald-500" />
          </div>
        </div>
      </nav>

      <main className="pt-28 md:pt-40 pb-24 px-4 max-w-5xl mx-auto">
        <section className="mb-10 md:mb-16 text-center">
           <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
             Ask & <span className="text-emerald-600 italic font-light">Receive.</span>
           </motion.h1>
           <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-600/50" size={18} />
              <input 
                type="text"
                placeholder="Search Dua..."
                className={`w-full border rounded-full py-4 pl-14 pr-8 focus:outline-none transition-all ${
                  isLight ? "bg-white border-slate-200" : "bg-white/5 border-white/10 text-white"
                }`}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </section>

        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                activeCategory === cat ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-white/5 border-white/5 text-gray-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:gap-16">
          <AnimatePresence mode='popLayout'>
            {filteredDuas.map((dua: Dua, idx: number) => (
              <motion.div 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={`dua-${dua.id}-${idx}`} // FIX: Unique key (Error 3 Fix)
                className={`group relative p-8 md:p-20 rounded-[3rem] md:rounded-[6rem] border transition-all duration-700 ${
                  isLight ? "bg-white border-slate-200" : "bg-white/[0.02] border-white/5 shadow-2xl"
                }`}
              >
                <div className="flex justify-between items-start mb-10 md:mb-16">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                         <BookOpen size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl md:text-4xl font-black">{dua.title}</h3>
                         <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">{dua.category}</span>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <button onClick={() => copyToClipboard(dua)} className="p-3 rounded-xl border border-white/10 hover:bg-emerald-600 hover:text-white transition-all">
                        {copyStatus === String(dua.id) ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                      </button>
                   </div>
                </div>

                <div className="space-y-12 md:space-y-20 text-center">
                   <p className="text-4xl md:text-7xl font-arabic-premium text-emerald-500 leading-snug">
                      {dua.arabic}
                   </p>
                   <div className="h-px w-24 mx-auto bg-emerald-500/20" />
                   <p className="text-2xl md:text-5xl font-urdu-premium text-white/90 leading-relaxed">
                      {dua.urdu}
                   </p>
                   <p className="text-xs md:text-xl italic opacity-50 max-w-3xl mx-auto font-light">
                      "{dua.english}"
                   </p>
                </div>

                <div className="mt-12 text-center">
                   <span className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-6 py-2 border rounded-full border-white/5">
                      Ref: {dua.ref}
                   </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </div>
  );
}