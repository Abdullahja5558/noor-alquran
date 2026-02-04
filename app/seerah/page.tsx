"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, ShieldCheck, History } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PROPHETS_DATA, SEERAH_TIMELINE } from '@/components/seerahData';
import Footer from '@/components/Footer';

export default function SeerahPage() {
  const router = useRouter();

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

  // Prevent hydration flash
  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-colors duration-700"
      style={{ backgroundColor: isLight ? "#F8FAFC" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      
      {/* --- PREMIUM NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] backdrop-blur-3xl border-b px-4 md:px-8 py-5 transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`group flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-2xl border transition-all ${
            isLight ? "bg-slate-100 border-slate-200 hover:bg-slate-200" : "bg-white/5 border-white/5 hover:bg-white/10"
          }`}>
            <ArrowLeft size={18} className={isLight ? "text-slate-600" : "text-gray-400 group-hover:text-emerald-500"} />
            <span className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase ${isLight ? "text-slate-900" : "text-white"}`}>Back</span>
          </button>
          
          <div className="text-center">
             <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-emerald-600 block">The Noble Seerah</span>
             <span className={`text-[7px] md:text-[9px] uppercase tracking-widest font-bold ${isLight ? "text-slate-400" : "text-gray-500"}`}>History & Legacy</span>
          </div>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
            isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
          }`}>
            <Star size={18} />
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-44 pb-24 px-4 md:px-6 max-w-5xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <section className="text-center mb-20 md:mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className={`text-5xl md:text-9xl font-black tracking-tighter mb-6 leading-[0.9] ${
                isLight ? "text-slate-900" : "bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent"
              }`}>
                Prophetic <br/> <span className="text-emerald-600 italic font-light">Heritage.</span>
              </h1>
              <p className={`max-w-xl mx-auto text-[9px] md:text-xs uppercase tracking-[0.3em] font-black mt-8 ${isLight ? "text-slate-400" : "text-gray-500"}`}>
                A journey from the creation of Adam (A.S) to the Beloved Muhammad ﷺ
              </p>
            </motion.div>
        </section>

        {/* --- SECTION: LIFE OF MUHAMMAD ﷺ --- */}
        <section className="relative mb-32 md:mb-48">
          <div className="text-center mb-16 md:mb-28">
             <motion.div 
               whileInView={{ scale: [0.9, 1.1, 1] }}
               className={`inline-block p-4 md:p-6 rounded-full border mb-6 md:mb-8 shadow-2xl transition-all ${
                 isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600 shadow-emerald-200/50" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 shadow-emerald-500/10"
               }`}
             >
                <Heart fill="currentColor" size={28} />
             </motion.div>
             <h2 className={`text-3xl md:text-7xl font-black tracking-tight uppercase leading-none ${isLight ? "text-slate-900" : "text-white"}`}>Prophet Muhammad ﷺ</h2>
             <p className="text-emerald-600/60 mt-4 md:mt-6 tracking-[0.3em] md:tracking-[0.5em] uppercase text-[8px] md:text-[11px] font-black">Timeline of the Final Messenger</p>
          </div>

          {/* Timeline Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-px h-[95%] z-0 ${
            isLight ? "bg-slate-200" : "bg-linear-to-b from-emerald-500/50 via-emerald-500/5 to-transparent"
          }`}></div>

          <div className="space-y-16 md:space-y-32 relative z-10">
            {SEERAH_TIMELINE.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                key={idx}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 w-full pl-10 md:pl-0">
                   <div className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all duration-500 relative group backdrop-blur-sm ${
                     isLight ? "bg-white border-slate-200 shadow-lg hover:border-emerald-200" : "bg-white/3 border-white/5 hover:border-emerald-500/30"
                   }`}>
                      <div className="flex justify-between items-center mb-6 md:mb-8">
                         <span className="text-emerald-600 font-black text-xl md:text-4xl tracking-tighter">{item.year}</span>
                         <History className={`${isLight ? "text-slate-200" : "text-white/10"} group-hover:text-emerald-500/20 transition-colors`} size={28} />
                      </div>
                      <h4 className={`text-xl md:text-3xl font-bold mb-4 md:mb-8 group-hover:text-emerald-600 transition-colors ${isLight ? "text-slate-900" : "text-white"}`}>{item.event}</h4>
                      
                      <div className="space-y-6">
                        <p className={`text-xs md:text-base leading-relaxed font-light ${isLight ? "text-slate-500" : "text-gray-400"}`}>{item.desc_en}</p>
                        <div className={`h-px w-full ${isLight ? "bg-slate-100" : "bg-white/5"}`} />
                        <p className={`text-lg md:text-3xl font-urdu leading-[1.8] text-right ${isLight ? "text-emerald-900" : "text-emerald-100/90"}`} style={{ direction: 'rtl' }}>
                          {item.desc_ur}
                        </p>
                      </div>
                      
                      <div className={`absolute -inset-1 rounded-[2.5rem] md:rounded-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${isLight ? "bg-emerald-500/10" : "bg-emerald-500/5"}`} />
                   </div>
                </div>

                <div className="absolute -left-0.75 md:relative md:left-0 z-20">
                   <div className={`w-9 h-9 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center shadow-2xl transition-all ${
                     isLight ? "bg-white border-emerald-100" : "bg-[#020617] border-emerald-500/20"
                   }`}>
                      <div className="w-2.5 h-2.5 md:w-5 md:h-5 bg-emerald-600 rounded-full animate-pulse shadow-[0_0_20px_#10b981]"></div>
                   </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION: PROPHETS OVERVIEW --- */}
        <section className="mb-20 md:mb-40">
          <div className="flex items-center gap-4 md:gap-8 mb-16 md:mb-24 px-4">
             <div className={`h-px flex-1 ${isLight ? "bg-slate-200" : "bg-linear-to-r from-transparent to-white/10"}`}></div>
             <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-emerald-600 whitespace-nowrap">The Messengers of Allah</h2>
             <div className={`h-px flex-1 ${isLight ? "bg-slate-200" : "bg-linear-to-l from-transparent to-white/10"}`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {PROPHETS_DATA.map((prophet, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                key={idx}
                className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border transition-all group relative overflow-hidden ${
                  isLight ? "bg-white border-slate-200 shadow-md hover:border-emerald-200" : "bg-white/2 border-white/5 hover:border-emerald-500/20"
                }`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 border transition-transform group-hover:scale-110 ${
                  isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/10 text-emerald-500"
                }`}>
                   <ShieldCheck size={28} />
                </div>
                <h3 className={`text-2xl md:text-4xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>{prophet.name}</h3>
                <p className="text-[8px] md:text-[10px] text-emerald-600 uppercase font-black tracking-[0.3em] mb-6 md:mb-10">{prophet.title}</p>
                
                <div className="space-y-6 md:space-y-8">
                  <p className={`text-xs md:text-lg leading-relaxed font-light ${isLight ? "text-slate-500" : "text-gray-400"}`}>{prophet.desc_en}</p>
                  <div className={`h-px w-12 ${isLight ? "bg-emerald-100" : "bg-emerald-500/20"}`} />
                  <p className={`text-xl md:text-4xl font-urdu leading-relaxed text-right ${isLight ? "text-slate-800" : "text-emerald-50/80"}`} style={{ direction: 'rtl' }}>
                    {prophet.desc_ur}
                  </p>
                </div>

                <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] rounded-full transition-colors ${
                  isLight ? "bg-emerald-500/5 group-hover:bg-emerald-500/10" : "bg-emerald-500/5 group-hover:bg-emerald-500/10"
                }`} />
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}