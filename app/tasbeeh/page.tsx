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

  // Vibration aur Sound Function
  const handlePress = () => {
    setCount(prev => prev + 1);
    
    // Mobile vibration (Haptic feedback)
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

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-emerald-500/30 overflow-hidden">
      
      {/* --- NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-3xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-emerald-500 transition-all" />
            <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Back</span>
          </button>
          <div className="text-center">
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-500 block">Digital Tasbeeh</span>
          </div>
          <button onClick={() => setIsSound(!isSound)} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5">
            {isSound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 flex flex-col items-center justify-center min-h-screen">
        
        {/* --- TARGET SELECTOR --- */}
        <div className="flex gap-4 mb-12 bg-white/5 p-2 rounded-3xl border border-white/5">
          {[33, 100, 1000].map((t) => (
            <button 
              key={t}
              onClick={() => { setTarget(t); setCount(0); }}
              className={`px-6 py-2 rounded-2xl text-[10px] font-black tracking-widest transition-all ${target === t ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20' : 'text-gray-500 hover:text-white'}`}
            >
              {t === 1000 ? 'MAX' : t}
            </button>
          ))}
        </div>

        {/* --- MAIN COUNTER DISPLAY --- */}
        <div className="relative group cursor-pointer" onClick={handlePress}>
          {/* Animated Glow Ring */}
          <div className="absolute -inset-8 bg-emerald-500/10 rounded-full blur-[80px] group-active:bg-emerald-500/20 transition-all duration-500" />
          
          {/* Progress Circle SVG */}
          <svg className="w-72 h-72 md:w-96 md:h-96 transform -rotate-90 relative z-10">
            <circle cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
            <motion.circle 
              cx="50%" cy="50%" r="45%" stroke="currentColor" strokeWidth="12" fill="transparent" 
              strokeDasharray="100" 
              animate={{ strokeDashoffset: 100 - progress }}
              transition={{ type: "spring", stiffness: 50 }}
              strokeLinecap="round"
              className="text-emerald-500"
              style={{ strokeDasharray: '283', strokeDashoffset: `${283 - (283 * progress) / 100}` }}
            />
          </svg>

          {/* Counter Number */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <motion.span 
              key={count}
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-8xl md:text-9xl font-black tracking-tighter"
            >
              {count}
            </motion.span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mt-2">SubhanAllah</span>
          </div>
        </div>

        {/* --- ACTIONS --- */}
        <div className="mt-20 flex items-center gap-12">
           <button onClick={resetCount} className="p-6 rounded-full bg-white/5 border border-white/5 hover:border-red-500/50 hover:text-red-500 transition-all active:scale-90">
             <RotateCcw size={24} />
           </button>
           
           <motion.button 
             whileTap={{ scale: 0.9 }}
             onClick={handlePress}
             className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-2xl shadow-emerald-500/40 border-4 border-emerald-400"
           >
             <Fingerprint size={40} />
           </motion.button>

           <button className="p-6 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-emerald-500 transition-all">
             <Settings2 size={24} />
           </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}