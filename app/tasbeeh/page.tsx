"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Fingerprint, Settings2, Volume2, VolumeX } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function TasbeehPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [isSound, setIsSound] = useState(true);

  // --- ANTI-FLICKER & THEME LOGIC ---
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const currentLightMode = !isDark;
      setIsLight(currentLightMode);
      // Immediate background fix to prevent dark flash
      document.body.style.backgroundColor = currentLightMode ? "#F8FAFC" : "#020617";
    };

    updateTheme();
    setMounted(true);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Vibration aur Sound Function
  const handlePress = () => {
    setCount(prev => prev + 1);
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(50); 
    }
  };

  const resetCount = () => {
    setCount(0);
    if (window.navigator.vibrate) window.navigator.vibrate([100, 50, 100]);
  };

  // Progress Calculation
  const progress = (count / target) * 100;

  // Prevent hydration flash
  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: isLight ? "#F8FAFC" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      
      {/* --- NAV --- */}
      <nav className={`fixed top-0 w-full z-50 border-b px-6 py-5 backdrop-blur-3xl transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/80 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`group flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all ${
            isLight ? "bg-slate-100 border-slate-200 hover:bg-slate-200" : "bg-white/5 border-white/5"
          }`}>
            <ArrowLeft size={18} className={isLight ? "text-slate-600" : "text-gray-400 group-hover:text-emerald-500"} />
            <span className={`text-[10px] font-black tracking-widest uppercase ${isLight ? "text-slate-900" : "text-gray-400"}`}>Back</span>
          </button>
          <div className="text-center">
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-600 block">Digital Tasbeeh</span>
          </div>
          <button onClick={() => setIsSound(!isSound)} className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
            isLight ? "bg-slate-100 border-slate-200 text-slate-600" : "bg-white/5 border-white/5"
          }`}>
            {isSound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-screen">
        
        {/* --- TARGET SELECTOR --- */}
        <div className={`flex gap-4 mb-12 p-2 rounded-3xl border transition-all ${
          isLight ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/5"
        }`}>
          {[33, 100, 1000].map((t) => (
            <button 
              key={t}
              onClick={() => { setTarget(t); setCount(0); }}
              className={`px-6 py-2 rounded-2xl text-[10px] font-black tracking-widest transition-all ${
                target === t 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
                : isLight ? 'text-slate-400 hover:text-slate-900' : 'text-gray-500 hover:text-white'
              }`}
            >
              {t === 1000 ? 'MAX' : t}
            </button>
          ))}
        </div>

        {/* --- MAIN COUNTER DISPLAY --- */}
        <div className="relative group cursor-pointer" onClick={handlePress}>
          {/* Animated Glow Ring */}
          <div className={`absolute -inset-8 rounded-full blur-[80px] group-active:bg-emerald-500/20 transition-all duration-500 ${
            isLight ? "bg-emerald-500/5" : "bg-emerald-500/10"
          }`} />
          
          {/* Progress Circle SVG */}
          <svg className="w-72 h-72 md:w-96 md:h-96 transform -rotate-90 relative z-10">
            <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" 
              className={isLight ? "text-slate-100" : "text-white/5"} 
            />
            <motion.circle 
              cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="12" fill="transparent" 
              strokeDasharray="283" 
              animate={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
              transition={{ type: "spring", stiffness: 40, damping: 15 }}
              strokeLinecap="round"
              className="text-emerald-600"
            />
          </svg>

          {/* Counter Number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.span 
              key={count}
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className={`text-8xl md:text-9xl font-black tracking-tighter ${isLight ? "text-slate-900" : "text-white"}`}
            >
              {count}
            </motion.span>
            <span className={`text-[10px] font-black uppercase tracking-[0.5em] mt-2 ${isLight ? "text-slate-400" : "text-gray-500"}`}>
              {count >= target ? "MashaAllah" : "SubhanAllah"}
            </span>
          </div>
        </div>

        {/* --- ACTIONS --- */}
        <div className="mt-20 flex items-center gap-12">
           <button onClick={resetCount} className={`p-6 rounded-full border transition-all active:scale-90 ${
             isLight ? "bg-white border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 shadow-sm" : "bg-white/5 border-white/5 hover:border-red-500/50 hover:text-red-500"
           }`}>
             <RotateCcw size={24} />
           </button>
           
           <motion.button 
             whileTap={{ scale: 0.9 }}
             onClick={handlePress}
             className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 border-4 border-emerald-400/50"
           >
             <Fingerprint size={40} />
           </motion.button>

           <button className={`p-6 rounded-full border transition-all ${
             isLight ? "bg-white border-slate-200 text-slate-400 hover:text-emerald-600 shadow-sm" : "bg-white/5 border-white/5 text-gray-400 hover:text-emerald-500"
           }`}>
             <Settings2 size={24} />
           </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}