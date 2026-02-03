"use client";
import React, { useState } from 'react';
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

  const categories = ["All", "Protection", "Success", "Peace of Mind", "Forgiveness"];

  const filteredDuas = DUA_DATA.filter(dua => 
    (activeCategory === "All" || dua.category === activeCategory) &&
    (dua.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     dua.urdu.includes(searchTerm) || 
     dua.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // --- 100% WORKING MOBILE COPY LOGIC ---
  const copyToClipboard = (dua: Dua) => {
    const fullText = `${dua.title}\n\n${dua.arabic}\n\n${dua.urdu}\n\nRef: ${dua.ref}`;

    const handleSuccess = () => {
      setCopyStatus(String(dua.id));
      if (typeof window !== 'undefined' && window.navigator.vibrate) {
        window.navigator.vibrate(50); // Haptic feedback for mobile
      }
      setTimeout(() => setCopyStatus(null), 2000);
    };

    // Try modern Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(fullText)
        .then(handleSuccess)
        .catch(() => fallbackCopy(fullText, handleSuccess));
    } else {
      // Fallback for older mobile browsers
      fallbackCopy(fullText, handleSuccess);
    }
  };

  const fallbackCopy = (text: string, onSuccess: () => void) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      onSuccess();
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  // --- NATIVE SHARE LOGIC ---
  const shareDua = async (dua: Dua) => {
    const shareText = `✨ *${dua.title}* ✨\n\n📖 *Arabic:* ${dua.arabic}\n\n📝 *Urdu:* ${dua.urdu}\n\n📚 *Ref:* ${dua.ref}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: dua.title,
          text: shareText,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
    }
  };

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- PREMIUM NAV --- */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020617]/90 backdrop-blur-3xl border-b border-white/5 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-2 md:gap-3 bg-white/5 px-3 md:px-5 py-2 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase">Back</span>
          </button>
          
          <div className="flex flex-col items-center">
             <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-emerald-500">Al-Munajat</span>
             <span className="text-[8px] text-gray-500 uppercase font-bold tracking-widest hidden md:block">Daily Supplications</span>
          </div>

          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 text-emerald-500">
            <Heart size={18} />
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-44 pb-24 px-4 md:px-6 max-w-5xl mx-auto">
        
        {/* --- HERO SEARCH --- */}
        <section className="mb-12 md:mb-20 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
             className="text-4xl md:text-8xl font-black tracking-tighter mb-6 md:mb-10 leading-tight"
           >
             Ask & <span className="text-emerald-500 italic font-light">Receive.</span>
           </motion.h1>

           <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-emerald-500 transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Search for a dua (e.g. Sukoon, Success)..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] py-4 md:py-6 pl-14 md:pl-16 pr-8 text-sm md:text-base focus:outline-none focus:border-emerald-500/50 focus:bg-white/[0.05] transition-all shadow-2xl"
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
              className={`px-6 md:px-10 py-3 md:py-4 rounded-full text-[9px] md:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap border snap-start ${activeCategory === cat ? 'bg-emerald-600 border-emerald-400 text-black shadow-lg shadow-emerald-900/40' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/10 hover:text-white'}`}
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
                  key={dua.id}
                  className="group relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[5rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all duration-700 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 md:mb-16">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-emerald-500/10 rounded-2xl md:rounded-3xl flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                           <BookOpen size={24} className="md:w-8 md:h-8" />
                        </div>
                        <div>
                           <h3 className="text-xl md:text-3xl font-bold tracking-tight">{dua.title}</h3>
                           <span className="text-[8px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">{dua.category}</span>
                        </div>
                     </div>
                     
                     <div className="flex gap-2 md:gap-3 w-full md:w-auto">
                        <button 
                          onClick={() => copyToClipboard(dua)} 
                          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl transition-all border ${copyStatus === String(dua.id) ? 'bg-emerald-500 border-emerald-500 text-black' : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'}`}
                        >
                          {copyStatus === String(dua.id) ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                          <span className="text-[10px] font-bold uppercase md:hidden">Copy Full Dua</span>
                        </button>
                        <button 
                          onClick={() => shareDua(dua)}
                          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 hover:bg-emerald-500 hover:text-black transition-all text-gray-400 border border-white/5 group/share"
                        >
                          <Share2 size={18} className="group-hover/share:scale-110 transition-transform" />
                          <span className="text-[10px] font-bold uppercase md:hidden">Share</span>
                        </button>
                     </div>
                  </div>

                  {/* DUA TEXTS */}
                  <div className="space-y-10 md:space-y-16 text-center">
                     <p className="text-3xl md:text-6xl font-arabic leading-[1.7] md:leading-[1.8] text-emerald-400 px-2 md:px-4" style={{ direction: 'rtl' }}>
                        {dua.arabic}
                     </p>
                     <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mx-auto" />
                     <p className="text-xl md:text-4xl font-urdu leading-relaxed text-white/90 px-2 md:px-4" style={{ direction: 'rtl' }}>
                        {dua.urdu}
                     </p>
                     <p className="text-xs md:text-lg text-gray-500 italic max-w-3xl mx-auto font-light leading-relaxed px-2">
                        "{dua.english}"
                     </p>
                  </div>

                  <div className="mt-12 md:mt-20 text-center">
                     <span className="text-[8px] md:text-[10px] font-bold text-gray-600 uppercase tracking-[0.4em] px-6 py-2 border border-white/5 rounded-full bg-black/20">
                        Ref: {dua.ref}
                     </span>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-10 transition-all duration-1000 rotate-12">
                     <Sparkles className="text-emerald-500" size={60} />
                  </div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 uppercase tracking-widest text-xs">No Dua found matching your search.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* --- PREMIUM TOAST NOTIFICATION --- */}
        <AnimatePresence>
          {copyStatus && (
            <motion.div 
              initial={{ opacity: 0, y: 50, x: "-50%" }} 
              animate={{ opacity: 1, y: 0, x: "-50%" }} 
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className="fixed bottom-10 left-1/2 z-[200] bg-emerald-500 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-3 border-2 border-white/20"
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