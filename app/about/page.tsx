"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Users, Globe, Star, Heart, Calendar, Clock, BookOpen, Download, Sparkles, ShieldCheck, Smartphone, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function PremiumAbout() {
  const router = useRouter();
  const [userCount, setUserCount] = useState(9560459);
  
  // --- FLICKER FIX STATES ---
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

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 5));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-transparent" />; 
  }

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-all duration-700"
      style={{ backgroundColor: isLight ? "#F1F5F9" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      
      {/* --- FLOATING NAV --- */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-[100] backdrop-blur-2xl border px-8 py-4 rounded-[2.5rem] flex items-center justify-between transition-all duration-700 ${
        isLight 
        ? "bg-white/80 border-slate-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]" 
        : "bg-white/3 border-white/10 shadow-2xl"
      }`}>
        <button onClick={() => router.back()} className="flex items-center gap-2 group cursor-pointer bg-transparent border-none outline-none">
          <ArrowLeft size={18} className="text-emerald-600 group-hover:-translate-x-1 transition-transform" />
          <span className={`text-[10px] font-black tracking-widest uppercase ${isLight ? "text-slate-500" : "text-white"}`}>Back</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-xs font-black tracking-[0.5em] text-emerald-600 uppercase">Noor Al-Quran</span>
          <span className={`text-[8px] font-bold uppercase tracking-widest ${isLight ? "text-slate-400" : "text-gray-500"}`}>Version 2.0 Elite</span>
        </div>

        <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-2 px-3 py-1 rounded-full border transition-all ${
              isLight ? "bg-emerald-100/40 border-emerald-200" : "bg-emerald-500/10 border-emerald-500/20"
            }`}>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[9px] font-bold text-emerald-600 uppercase">{userCount.toLocaleString()} Active</span>
            </div>
            <Star size={16} className="text-emerald-500" fill="currentColor" />
        </div>
      </nav>

      <main className="pt-48">
        {/* --- HERO SECTION --- */}
        <section className="px-6 max-w-7xl mx-auto text-center mb-40">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12"
          >
            Digital <br/> <span className="bg-gradient-to-r from-emerald-600 via-cyan-500 to-emerald-700 bg-clip-text text-transparent italic">Spiritualism.</span>
          </motion.h1>
          <p className={`text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12 transition-colors ${
            isLight ? "text-slate-500" : "text-gray-400"
          }`}>
            The world's most elegant Islamic ecosystem. Crafted for the modern believer who seeks beauty in worship.
          </p>
          
          <div className="flex justify-center gap-8">
             <div className="text-center">
                <p className={`text-3xl font-black transition-colors ${isLight ? "text-slate-900" : "text-white"}`}>{userCount.toLocaleString()}+</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Daily Listeners</p>
             </div>
             <div className={`w-px h-12 ${isLight ? "bg-slate-300" : "bg-white/10"}`} />
             <div className="text-center">
                <p className={`text-3xl font-black transition-colors ${isLight ? "text-slate-900" : "text-white"}`}>114</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Surahs with Audio</p>
             </div>
          </div>
        </section>

        {/* --- CORE ECOSYSTEM --- */}
        <section className="px-6 max-w-7xl mx-auto mb-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`md:col-span-2 relative p-10 rounded-[3.5rem] border overflow-hidden group transition-all duration-700 ${
                isLight ? "bg-white border-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]" : "bg-gradient-to-br from-emerald-900/20 to-[#020617] border-emerald-500/20"
              }`}>
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-colors ${
                         isLight ? "bg-slate-900 text-white" : "bg-emerald-500 text-black shadow-emerald-500/30"
                       }`}>
                          <Play size={22} fill="currentColor" />
                       </div>
                       <h3 className={`text-3xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>Noble Al-Quran</h3>
                    </div>
                    <p className={`max-w-md mb-8 text-lg ${isLight ? "text-slate-500" : "text-gray-400"}`}>Every Surah at your fingertips. High-definition audio recitations paired with crystal-clear typography.</p>
                    <div className="flex gap-2">
                       <span className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest ${isLight ? "bg-slate-50 border-slate-200 text-emerald-700" : "bg-white/5 border-white/10 text-emerald-400"}`}>114 Surahs</span>
                       <span className={`px-4 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest ${isLight ? "bg-slate-50 border-slate-200 text-emerald-700" : "bg-white/5 border-white/10 text-emerald-400"}`}>MP3 Audio</span>
                    </div>
                 </div>
                 <div className={`absolute -right-10 -bottom-10 w-64 h-64 rounded-full blur-[80px] transition-all duration-700 ${isLight ? "bg-emerald-100/40" : "bg-emerald-500/10"}`} />
              </div>

              <div className={`p-10 rounded-[3.5rem] border flex flex-col justify-between transition-all duration-700 ${isLight ? "bg-white border-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]" : "bg-white/2 border-white/5"}`}>
                 <Clock className="text-emerald-600" size={36} />
                 <div>
                    <h4 className={`text-2xl font-black mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Precise Prayer</h4>
                    <p className={`text-sm ${isLight ? "text-slate-500" : "text-gray-500"}`}>Astronomical accuracy for your specific location.</p>
                 </div>
              </div>

              <div className={`p-10 rounded-[3.5rem] border flex flex-col justify-between transition-all duration-700 ${isLight ? "bg-white border-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]" : "bg-white/2 border-white/5"}`}>
                 <Calendar className="text-cyan-600" size={36} />
                 <div>
                    <h4 className={`text-2xl font-black mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Islamic Calendar</h4>
                    <p className={`text-sm ${isLight ? "text-slate-500" : "text-gray-500"}`}>Track Hijri dates and significant Islamic events.</p>
                 </div>
              </div>

              <div className={`md:col-span-2 p-10 rounded-[3.5rem] border flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${isLight ? "bg-white border-slate-200 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]" : "bg-[#0f172a]/40 border-white/5"}`}>
                 <div className="flex-1 text-center md:text-left">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border ${isLight ? "bg-purple-50 border-purple-200" : "bg-purple-500/10 border-purple-500/20"}`}>
                       <Heart size={12} className="text-purple-600" fill="currentColor" />
                       <span className={`text-[10px] font-black uppercase tracking-widest ${isLight ? "text-purple-700" : "text-purple-400"}`}>History & Dua</span>
                    </div>
                    <h4 className={`text-3xl font-black mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>Seerah & Supplications</h4>
                    <p className={`text-base leading-relaxed ${isLight ? "text-slate-500" : "text-gray-500"}`}>Dive deep into the life of Prophet Muhammad ﷺ and access authentic Duas.</p>
                 </div>
                 <div className={`w-40 h-40 rounded-3xl border flex items-center justify-center ${isLight ? "bg-slate-50 border-slate-200" : "bg-white/5 border-white/10"}`}>
                    <BookOpen size={48} className="text-emerald-600/30" />
                 </div>
              </div>
            </div>
        </section>

        {/* --- DUAL VISION --- */}
        <section className="px-6 mb-40 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -5 }} className={`p-12 rounded-[3rem] border flex flex-col justify-between transition-all duration-500 ${isLight ? "bg-white border-slate-200 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)]" : "bg-white/3 border-white/10"}`}>
                <div>
                  <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase mb-8 block">Our Vision</span>
                  <h2 className={`text-4xl font-black leading-tight mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>Faith, Redefined for <span className="text-emerald-600 italic font-medium">Today.</span></h2>
                </div>
                <p className={`text-lg leading-relaxed ${isLight ? "text-slate-500" : "text-gray-400"}`}>A digital sanctuary for elegance, removing the noise of the world for a pure spiritual connection.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className={`p-12 rounded-[3rem] border flex flex-col justify-between text-right transition-all duration-500 ${isLight ? "bg-[#E2E8F0] border-slate-300 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.08)]" : "bg-emerald-500/2 border-emerald-500/10"}`} style={{ direction: 'rtl' }}>
                <div>
                  <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase mb-8 block font-sans">ہمارا عزم</span>
                  <h2 className={`text-5xl font-urdu leading-tight mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>خوبصورتی اور <span className="text-emerald-600">سادگی</span></h2>
                </div>
                <p className={`text-xl font-urdu leading-relaxed ${isLight ? "text-slate-600" : "text-emerald-100/60"}`}>جدید دور کے مسلمانوں کے لیے ایک ایسا ڈیجیٹل مرکز جو بغیر اشتہار کے آپ کو دین سے جوڑ دے۔</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- DOWNLOAD SECTION (FIXED NESTED BUTTON ERROR) --- */}
        <section className="px-6 max-w-5xl mx-auto mb-40 relative group">
          <div className={`absolute -inset-1 rounded-[5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 ${isLight ? "bg-emerald-200" : "bg-emerald-500/20"}`}></div>

          <div className={`relative rounded-[4.5rem] border overflow-hidden transition-all duration-1000 ${isLight ? "bg-white border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]" : "bg-[#020617] border-white/5"}`}>
            <div className="relative z-10 p-16 md:p-24 flex flex-col items-center text-center">
              <div className={`mb-10 px-6 py-2 rounded-full border flex items-center gap-3 ${isLight ? "bg-slate-100 border-slate-200" : "bg-white/3 border-white/10"}`}>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isLight ? "text-slate-600" : "text-emerald-400"}`}>Project: Noor 2026</span>
              </div>

              <h2 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none ${isLight ? "text-slate-900" : "text-white"}`}>
                The Light <br/> <span className="bg-gradient-to-b from-emerald-600 to-emerald-900 bg-clip-text text-transparent italic font-light">In Your Pocket.</span>
              </h2>

              <p className={`max-w-md mx-auto mb-16 text-lg font-light leading-relaxed ${isLight ? "text-slate-500" : "text-gray-500"}`}>We are crafting the ultimate spiritual companion. No ads, just pure devotion.</p>

              {/* Error Fixed: Removed nested button */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-not-allowed px-12 py-6 rounded-full flex items-center gap-6 shadow-2xl transition-all ${isLight ? "bg-slate-900 text-white" : "bg-white text-black"}`}
              >
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-1">Mobile App</span>
                  <span className="text-sm font-black uppercase tracking-widest cursor-not-allowed">Coming Soon</span>
                </div>
                <div className={`h-8 w-px ${isLight ? "bg-white/20" : "bg-black/10"}`}></div>
                <Smartphone size={22} />
              </motion.div>

              <div className={`mt-16 flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 ${isLight ? "text-slate-900" : "text-white"}`}>
                  <div className="flex flex-col items-center gap-2">
                    <Apple size={24} />
                    <span className="text-[8px] font-bold uppercase tracking-widest">App Store</span>
                  </div>
                  <div className={`w-px h-6 ${isLight ? "bg-slate-200" : "bg-white/20"}`}></div>
                  <div className="flex flex-col items-center gap-2">
                    <Play size={24} />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Play Store</span>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}