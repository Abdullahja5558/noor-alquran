'use client';
import React, { useEffect, useState } from 'react';
import { Shield, Book, Heart, Zap } from 'lucide-react';

export default function Feature() {
  // --- THEME SYNC LOGIC ---
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsLight(!isDark);
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`py-24 px-6 transition-all duration-1000 ${
        isLight ? "bg-[#F8FAFC]" : "bg-[#020617]"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Large Feature Card */}
        <div className={`md:col-span-2 p-10 md:p-14 rounded-[3rem] border transition-all duration-700 group hover:shadow-2xl ${
          isLight 
            ? "bg-white border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]" 
            : "bg-linear-to-br from-white/5 to-transparent border-white/10"
        }`}>
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-6 ${
            isLight ? "bg-emerald-50" : "bg-emerald-500/10"
          }`}>
            <Book className="text-emerald-600 dark:text-emerald-500" size={32} />
          </div>
          <h3 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            Complete Digital Mushaf
          </h3>
          <p className={`text-lg font-light leading-relaxed max-w-md ${
            isLight ? "text-slate-500" : "text-gray-400"
          }`}>
            Experience the Quran with high-definition Uthmani script and word-by-word translations.
          </p>
        </div>

        {/* Daily Reminders Card */}
        <div className={`p-10 rounded-[3rem] border transition-all duration-700 hover:scale-[1.02] ${
          isLight 
            ? "bg-white border-slate-200 shadow-xl" 
            : "bg-[#050b1d] border-white/10"
        }`}>
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-8">
            <Heart className="text-pink-500" size={28} />
          </div>
          <h4 className={`text-xl font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            Daily Reminders
          </h4>
          <p className={`text-sm italic leading-relaxed ${isLight ? "text-slate-500" : "text-gray-500"}`}>
            "Verily, in the remembrance of Allah do hearts find rest."
          </p>
        </div>

        {/* Verified Sources Card */}
        <div className={`p-10 rounded-[3rem] border transition-all duration-700 hover:scale-[1.02] ${
          isLight 
            ? "bg-white border-slate-200 shadow-xl" 
            : "bg-[#050b1d] border-white/10"
        }`}>
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-8">
            <Shield className="text-blue-500" size={28} />
          </div>
          <h4 className={`text-xl font-bold mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            Verified Sources
          </h4>
          <p className={`text-sm leading-relaxed ${isLight ? "text-slate-500" : "text-gray-500"}`}>
            Authenticated Tafsir from world-renowned scholars and institutions.
          </p>
        </div>

        {/* Interactive Action Card (Bottom) */}
        <div className={`md:col-span-2 p-10 md:p-12 rounded-[3rem] border flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${
          isLight 
            ? "bg-emerald-600 border-transparent shadow-2xl shadow-emerald-200" 
            : "bg-emerald-500/5 border-emerald-500/20"
        }`}>
          <div className="space-y-2">
            <p className={`text-2xl font-bold tracking-tight ${
              isLight ? "text-white" : "text-white"
            }`}>
              Ready to start your spiritual journey?
            </p>
            <p className={`text-sm ${isLight ? "text-emerald-50/80" : "text-emerald-500/60"}`}>
              Join thousands of students of knowledge today.
            </p>
          </div>
          
          <button 
            className={`px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg cursor-pointer whitespace-nowrap ${
              isLight 
                ? "bg-white text-emerald-700 hover:bg-slate-100" 
                : "bg-white text-black hover:bg-emerald-400"
            }`}
            onClick={() => window.location.href = '/quran'}
          >
            Get Started Free
          </button>
        </div>

      </div>
    </section>
  );
}