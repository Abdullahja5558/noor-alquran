"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Instagram, 
  Twitter, 
  Github, 
  Mail, 
  Heart, 
  ArrowUpRight,
  Globe,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isLight, setIsLight] = useState(false);

  // --- THEME SYNC ---
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

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Prayer Times", href: "/prayer-time" },
        { name: "Noble Quran", href: "/quran" },
        { name: "Daily Duas", href: "/dua" },
        { name: "Digital Tasbeeh", href: "/tasbeeh" }
      ]
    },
    {
      title: "Content",
      links: [
        { name: "Prophetic Seerah", href: "/seerah" },
        { name: "Islamic Calendar", href: "/calendar" },
        { name: "About Noor", href: "/about" }
      ]
    },
    {
      title: "Legal & More",
      links: [
        { name: "Open Source", href: "https://github.com/Abdullahja5558" }
      ]
    }
  ];

  return (
    <footer 
      className={`relative pt-32 pb-12 px-8 overflow-hidden border-t transition-all duration-1000 ${
        isLight ? "bg-[#F8FAFC] border-slate-200" : "bg-[#020617] border-white/5"
      }`}
    >
      
      {/* Background Glow - Cinematic Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] blur-[150px] rounded-full pointer-events-none transition-colors duration-1000 ${
        isLight ? "bg-emerald-100/50" : "bg-emerald-500/[0.03]"
      }`} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          
          {/* --- LEFT: BRAND & NEWSLETTER --- */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group w-fit">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:rotate-[15deg] ${
                isLight ? "bg-slate-900 shadow-slate-300" : "bg-emerald-500 shadow-emerald-500/20"
              }`}>
                <Globe className={isLight ? "text-white" : "text-black"} size={24} />
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black tracking-tighter uppercase italic ${isLight ? "text-slate-900" : "text-white"}`}>Noor</span>
                <span className="text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase -mt-1">Al-Quran</span>
              </div>
            </Link>
            
            <h3 className={`text-4xl md:text-5xl font-black max-w-md leading-[1.1] tracking-tighter ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              Bringing <span className="text-emerald-600 italic">Noor</span> to your digital daily life.
            </h3>

            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Stay updated via email" 
                className={`w-full border rounded-2xl py-5 px-8 outline-none transition-all text-sm pr-40 backdrop-blur-xl ${
                  isLight 
                  ? "bg-white border-slate-200 focus:border-emerald-500 text-slate-900" 
                  : "bg-white/[0.03] border-white/10 focus:border-emerald-500/50 text-white"
                }`}
              />
              <button className={`absolute right-2 top-2 bottom-2 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer shadow-lg active:scale-95 ${
                isLight ? "bg-slate-900 text-white hover:bg-emerald-600" : "bg-emerald-500 text-black hover:bg-white"
              }`}>
                Join Us
              </button>
            </div>
          </div>

          {/* --- RIGHT: LINKS GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-8">
                <h4 className={`text-[9px] font-black tracking-[0.5em] uppercase flex items-center gap-2 ${
                  isLight ? "text-slate-400" : "text-emerald-500/60"
                }`}>
                   <Sparkles size={10} className="text-emerald-500" /> {section.title}
                </h4>
                <ul className="space-y-5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`group flex items-center gap-1 transition-all text-[13px] font-medium tracking-tight ${
                          isLight ? "text-slate-500 hover:text-emerald-600" : "text-gray-500 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-10 ${
          isLight ? "border-slate-200" : "border-white/5"
        }`}>
          
          {/* Social Pillars */}
          <div className="flex items-center gap-4">
            {[Instagram].map((Icon, i) => (
              <a 
                key={i} 
                href="https://www.instagram.com/mian.abdullah.9/" 
                className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                  isLight 
                  ? "border-slate-200 bg-white text-slate-400 hover:text-emerald-600 hover:border-emerald-200 shadow-sm" 
                  : "border-white/5 bg-white/[0.02] text-gray-500 hover:text-emerald-500 hover:border-emerald-500/20"
                }`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Made with Love Badge */}
          <div className={`px-6 py-2 rounded-full border text-[9px] font-black tracking-[0.3em] flex items-center gap-3 ${
            isLight ? "bg-white border-slate-200 text-slate-400" : "bg-white/[0.02] border-white/5 text-gray-500"
          }`}>
            CRAFTED WITH <Heart size={12} className="text-emerald-500 fill-emerald-500 animate-pulse" /> IN PAKISTAN © {currentYear}
          </div>

          {/* Tech Status */}
          <div className={`flex gap-8 text-[10px] font-black tracking-[0.2em] ${
            isLight ? "text-slate-400" : "text-gray-600"
          }`}>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
               <span className={isLight ? "text-slate-900" : "text-white"}>SYSTEM ONLINE</span>
            </div>
            <span>V 2.6.0</span>
          </div>

        </div>
      </div>
    </footer>
  );
}