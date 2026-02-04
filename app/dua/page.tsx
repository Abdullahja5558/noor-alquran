"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Heart, Share2, Copy, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { DUA_DATA, Dua } from '@/components/duaData';
import Footer from '@/components/Footer';

export default function DuaPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  // --- THEME & ANTI-FLICKER LOGIC ---
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const currentLightMode = !isDark;
      setIsLight(currentLightMode);
      document.body.style.backgroundColor = currentLightMode ? "#F1F5F9" : "#020617";
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
     dua.urdu.includes(searchTerm) || 
     dua.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // --- COPY LOGIC ---
  const copyToClipboard = (dua: Dua) => {
    const fullText = `${dua.title}\n\n${dua.arabic}\n\n${dua.urdu}\n\nRef: ${dua.ref}`;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(fullText).then(() => {
        setCopyStatus(String(dua.id));
        if (window.navigator.vibrate) window.navigator.vibrate(50);
        setTimeout(() => setCopyStatus(null), 2000);
      });
    }
  };

  // --- SHARE LOGIC ---
  const shareDua = async (dua: Dua) => {
    const shareText = `✨ *${dua.title}* ✨\n\n📖 *Arabic:* ${dua.arabic}\n\n📝 *Urdu:* ${dua.urdu}\n\n📚 *Ref:* ${dua.ref}`;
    if (navigator.share) {
      try { await navigator.share({ title: dua.title, text: shareText }); } 
      catch (err) { console.log("Share cancelled"); }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-all duration-700"
      style={{ backgroundColor: isLight ? "#F1F5F9" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      
      {/* --- ELITE NAV --- */}
      <nav className={`fixed top-0 w-full z-[100] backdrop-blur-3xl border-b px-4 md:px-8 py-4 md:py-6 transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`group flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 rounded-2xl border transition-all ${
            isLight ? "bg-slate-100 border-slate-200 hover:bg-slate-200" : "bg-white/5 border-white/5 hover:bg-white/10"
          }`}>
            <ArrowLeft size={18} className={isLight ? "text-slate-600" : "text-gray-400"} />
            <span className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase ${isLight ? "text-slate-900" : "text-white"}`}>Back</span>
          </button>
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-emerald-600">Al-Munajat</span>
             <span className={`text-[8px] uppercase font-bold tracking-widest hidden md:block ${isLight ? "text-slate-400" : "text-gray-500"}`}>Daily Supplications</span>
          </div>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
            isLight ? "bg-emerald-100 border-emerald-200 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
          }`}>
            <Heart size={18} fill={isLight ? "currentColor" : "none"} />
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-44 pb-24 px-4 md:px-6 max-w-5xl mx-auto">
        
        {/* --- HERO SEARCH --- */}
        <section className="mb-12 md:mb-20 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             className={`text-4xl md:text-8xl font-black tracking-tighter mb-6 md:mb-10 leading-tight ${isLight ? "text-slate-900" : "text-white"}`}
           >
             Ask & <span className="text-emerald-600 italic font-light">Receive.</span>
           </motion.h1>

           <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-600 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search for a dua (e.g. Sukoon, Success)..."
                className={`w-full border rounded-3xl md:rounded-4xl py-4 md:py-6 pl-14 md:pl-16 pr-8 text-sm md:text-base focus:outline-none focus:border-emerald-500/50 transition-all shadow-2xl ${
                  isLight ? "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400" : "bg-white/3 border-white/10 text-white placeholder:text-gray-500"
                }`}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
        </section>

        {/* --- CATEGORY TABS --- */}
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-6 md:pb-10 no-scrollbar mb-8 md:mb-12 snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap border snap-start ${
                activeCategory === cat 
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg' 
                : isLight ? 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50' : 'bg-white/5 border-white/5 text-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- DUA CARDS GRID --- */}
        <div className="grid gap-6 md:gap-12">
          <AnimatePresence mode='popLayout'>
            {filteredDuas.length > 0 ? (
              filteredDuas.map((dua: Dua, idx: number) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={`dua-card-${dua.id}-${idx}`} // FIXED: Unique key ensures no duplicate key error
                  className={`group relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[5rem] border transition-all duration-700 overflow-hidden ${
                    isLight ? "bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200" : "bg-white/2 border-white/5 hover:border-emerald-500/20"
                  }`}
                >
                  {/* CARD HEADER */}
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 md:mb-16">
                     <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center border transition-all ${
                          isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                        }`}>
                            <BookOpen size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                            <h3 className={`text-xl md:text-3xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>{dua.title}</h3>
                            <span className="text-[8px] md:text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{dua.category}</span>
                        </div>
                     </div>
                     
                     <div className="flex gap-2 md:gap-3 w-full md:w-auto">
                        <button 
                          onClick={() => copyToClipboard(dua)} 
                          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl transition-all border ${
                            copyStatus === String(dua.id) 
                            ? 'bg-emerald-600 border-emerald-600 text-white' 
                            : isLight ? 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100' : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'
                          }`}
                        >
                          {copyStatus === String(dua.id) ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                          <span className="text-[10px] font-bold uppercase md:hidden">Copy Full Dua</span>
                        </button>
                        <button 
                          onClick={() => shareDua(dua)}
                          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl transition-all border group/share ${
                            isLight ? 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-emerald-600 hover:text-white' : 'bg-white/5 border-white/5 text-gray-400 hover:bg-emerald-500 hover:text-black'
                          }`}
                        >
                          <Share2 size={18} className="group-hover/share:scale-110 transition-transform" />
                          <span className="text-[10px] font-bold uppercase md:hidden">Share</span>
                        </button>
                     </div>
                  </div>

                  {/* DUA CONTENT */}
                  <div className="space-y-10 md:space-y-16 text-center">
                     <p className={`text-3xl md:text-6xl font-arabic leading-[1.7] md:leading-[1.8] px-2 md:px-4 ${isLight ? "text-emerald-700" : "text-emerald-400"}`} style={{ direction: 'rtl' }}>
                        {dua.arabic}
                     </p>
                     <div className={`h-px w-20 md:w-40 mx-auto ${isLight ? "bg-emerald-100" : "bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"}`} />
                     <p className={`text-xl md:text-4xl font-urdu leading-relaxed px-2 md:px-4 ${isLight ? "text-slate-800" : "text-white/90"}`} style={{ direction: 'rtl' }}>
                        {dua.urdu}
                     </p>
                     <p className={`text-xs md:text-lg italic max-w-3xl mx-auto font-light leading-relaxed px-2 ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                        "{dua.english}"
                     </p>
                  </div>

                  {/* REFERENCE */}
                  <div className="mt-12 md:mt-20 text-center">
                     <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] px-6 py-2 border rounded-full ${
                       isLight ? "bg-slate-50 border-slate-200 text-slate-400" : "bg-black/20 border-white/5 text-gray-600"
                     }`}>
                        Ref: {dua.ref}
                     </span>
                  </div>

                  {/* DECO */}
                  <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-10 transition-all duration-1000 rotate-12">
                     <Sparkles className="text-emerald-500" size={60} />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 uppercase tracking-widest text-xs">No Dua found matching your search.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* --- TOAST --- */}
        <AnimatePresence>
          {copyStatus && (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: "-50%" }} animate={{ opacity: 1, y: 0, x: "-50%" }} exit={{ opacity: 0, y: 50, x: "-50%" }}
              className="fixed bottom-10 left-1/2 z-[200] bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 border-2 border-white/20"
            >
              <CheckCircle2 size={20} />
              <span className="text-xs uppercase tracking-widest">Full Dua Copied</span>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      <Footer />
    </div>
  );
}