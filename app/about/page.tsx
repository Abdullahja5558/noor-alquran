"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Users, Globe, Star, Heart, Calendar, Clock, BookOpen, Download, Sparkles, ShieldCheck, Smartphone, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function PremiumAbout() {
  const router = useRouter();
  const [userCount, setUserCount] = useState(12450);

  // Live User Counter Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- FLOATING NAV --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-100 bg-white/3 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-4xl flex items-center justify-between shadow-2xl">
        <button onClick={() => router.back()} className="flex items-center gap-2 group">
          <ArrowLeft size={18} className="text-emerald-500 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black tracking-widest uppercase">Back</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs font-black tracking-[0.5em] text-emerald-500 uppercase">Noor Al-Quran</span>
          <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Version 2.0 Elite</span>
        </div>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[9px] font-bold text-emerald-500 uppercase">{userCount.toLocaleString()} Active</span>
            </div>
            <Star size={16} className="text-emerald-500" fill="currentColor" />
        </div>
      </nav>

      <main className="pt-48">
        
        {/* --- HERO: THE DIGITAL REVOLUTION --- */}
        <section className="px-6 max-w-7xl mx-auto text-center mb-40">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12"
          >
            Digital <br/> <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-emerald-600 bg-clip-text text-transparent italic">Spiritualism.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
            The world's most elegant Islamic ecosystem. Crafted for the modern believer who seeks beauty in worship.
          </p>
          
          <div className="flex justify-center gap-8">
             <div className="text-center">
                <p className="text-3xl font-black text-white">{userCount.toLocaleString()}+</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Daily Listeners</p>
             </div>
             <div className="w-px h-12 bg-white/10" />
             <div className="text-center">
                <p className="text-3xl font-black text-white">114</p>
                <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Surahs with Audio</p>
             </div>
          </div>
        </section>

        {/* --- THE CORE ECOSYSTEM (BENTO GRID) --- */}
        <section className="px-6 max-w-7xl mx-auto mb-40">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Al-Quran Premium Card */}
              <div className="md:col-span-2 relative p-10 rounded-[3rem] bg-linear-to-br from-emerald-900/20 to-[#020617] border border-emerald-500/20 overflow-hidden group">
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-emerald-500/30">
                          <Play size={20} fill="currentColor" />
                       </div>
                       <h3 className="text-2xl font-black tracking-tight">Noble Al-Quran</h3>
                    </div>
                    <p className="text-gray-400 max-w-md mb-8">Every Surah at your fingertips. High-definition audio recitations paired with crystal-clear typography and deep translations.</p>
                    <div className="flex gap-2">
                       <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-emerald-400">114 Surahs</span>
                       <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-emerald-400">MP3 Audio</span>
                    </div>
                 </div>
                 <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700" />
              </div>

              {/* Prayer Times Mini Card */}
              <div className="p-10 rounded-[3rem] bg-white/2 border border-white/5 flex flex-col justify-between">
                 <Clock className="text-emerald-500" size={32} />
                 <div>
                    <h4 className="text-xl font-bold mb-2">Precise Prayer</h4>
                    <p className="text-sm text-gray-500">Astronomical accuracy for your specific location. Never miss a Salah.</p>
                 </div>
              </div>

              {/* Seerah & Calendar Grid */}
              <div className="p-10 rounded-[3rem] bg-white/2 border border-white/5 flex flex-col justify-between">
                 <Calendar className="text-cyan-400" size={32} />
                 <div>
                    <h4 className="text-xl font-bold mb-2">Islamic Calendar</h4>
                    <p className="text-sm text-gray-500">Track Hijri dates and significant Islamic events with ease.</p>
                 </div>
              </div>

              <div className="md:col-span-2 p-10 rounded-[3rem] bg-[#0f172a]/40 border border-white/5 flex flex-col md:flex-row items-center gap-8">
                 <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-full mb-4 border border-purple-500/20">
                       <Heart size={10} className="text-purple-500" fill="currentColor" />
                       <span className="text-[8px] font-black uppercase tracking-widest text-purple-400">History & Dua</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Seerah & Daily Supplications</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Dive deep into the life of Prophet Muhammad ﷺ and access a library of authentic Duas for every moment of your life.</p>
                 </div>
                 <div className="w-40 h-40 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                    <BookOpen size={48} className="text-emerald-500/50" />
                 </div>
              </div>

           </div>
        </section>

      {/* --- THE COMPACT DUAL VISION (PREMIUM GLASS) --- */}
<section className="px-6 mb-40 relative">
  <div className="max-w-4xl mx-auto">
    <div className="grid md:grid-cols-2 gap-4">
      
      {/* English Vision Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="p-10 rounded-[2.5rem] bg-white/3 backdrop-blur-xl border border-white/10 flex flex-col justify-between group shadow-2xl"
      >
        <div>
          <span className="text-[9px] font-black tracking-[0.4em] text-emerald-500 uppercase mb-6 block">Our Vision</span>
          <h2 className="text-3xl font-bold leading-tight mb-4">
            Faith, Redefined for <span className="text-emerald-500 italic font-medium">Today.</span>
          </h2>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-light">
          A digital sanctuary for elegance, removing the noise of the world for a pure spiritual connection.
        </p>
      </motion.div>

      {/* Urdu Vision Card */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="p-10 rounded-[2.5rem] bg-emerald-500/2 backdrop-blur-xl border border-emerald-500/10 flex flex-col justify-between text-right shadow-2xl"
        style={{ direction: 'rtl' }}
      >
        <div>
          <span className="text-[9px] font-black tracking-[0.4em] text-emerald-500 uppercase mb-6 block">ہمارا عزم</span>
          <h2 className="text-4xl font-urdu leading-tight mb-4 text-white">
            خوبصورتی اور <span className="text-emerald-400">سادگی</span>
          </h2>
        </div>
        <p className="text-emerald-100/60 text-lg font-urdu leading-relaxed">
          جدید دور کے مسلمانوں کے لیے ایک ایسا ڈیجیٹل مرکز جو بغیر اشتہار کے آپ کو دین سے جوڑ دے۔
        </p>
      </motion.div>

    </div>
    
    {/* Subtle Background Glow under the cards */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
  </div>
</section>

        {/* --- ULTIMATE DOWNLOAD SECTION --- */}
{/* --- THE ELITE PRODUCT REVEAL (DOWNLOAD SECTION) --- */}
<section className="px-6 max-w-5xl mx-auto mb-40 relative group">
  
  {/* Outer Glowing Shell */}
  <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-[5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

  <div className="relative bg-[#020617] rounded-[4.5rem] border border-white/5 overflow-hidden">
    
    {/* Animated Mesh Gradient Background */}
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/30 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>

    <div className="relative z-10 p-16 md:p-28 flex flex-col items-center">
      
      {/* Floating Dynamic Badge */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mb-10 px-6 py-2 rounded-full bg-white/3 border border-white/10 backdrop-blur-md flex items-center gap-3"
      >
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-400">Project: Noor 2026</span>
      </motion.div>

      <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-center leading-none">
        The Light <br/> <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent italic font-light">In Your Pocket.</span>
      </h2>

      <p className="text-gray-500 max-w-md mx-auto mb-16 text-center text-lg font-light leading-relaxed">
        We are crafting the ultimate spiritual companion. No ads, no subscriptions, just pure devotion.
      </p>

      {/* ULTRA-PREMIUM COMING SOON BUTTON */}
      <div className="relative group/btn">
        {/* Animated Glow Aura */}
        <div className="absolute -inset-1 bg-linear-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-20 group-hover/btn:opacity-60 transition duration-500"></div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative px-12 py-6 bg-white text-black rounded-full flex items-center gap-6 overflow-hidden transition-all shadow-2xl"
        >
          {/* Internal Button Shine */}
          <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-[-30deg] group-hover/btn:left-full transition-all duration-1000"></div>
          
          <div className="flex flex-col items-start leading-none">
            <span className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-1">Mobile App</span>
            <span className="text-sm font-black uppercase tracking-widest">Coming Soon</span>
          </div>

          <div className="h-8 w-px bg-black/10"></div>

          <div className="flex items-center gap-3">
            <Smartphone size={20} className="text-black" />
          </div>
        </motion.button>
      </div>

      {/* Platform Icons */}
      <div className="mt-16 flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
         <div className="flex flex-col items-center gap-2">
            <Apple size={24} />
            <span className="text-[8px] font-bold uppercase tracking-widest">App Store</span>
         </div>
         <div className="w-px h-6 bg-white/20"></div>
         <div className="flex flex-col items-center gap-2">
            <Play size={24} />
            <span className="text-[8px] font-bold uppercase tracking-widest">Play Store</span>
         </div>
      </div>

    </div>

    {/* Abstract UI Elements Decoration */}
    <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full blur-3xl bg-emerald-500/10"></div>
    <div className="absolute bottom-10 left-10 w-40 h-40 border border-white/5 rounded-full blur-3xl bg-cyan-500/10"></div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
}