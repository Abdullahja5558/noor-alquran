"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Moon, Sun, Star, ChevronLeft, ChevronRight, Bell, Sparkles, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function IslamicCalendar() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hijriData, setHijriData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // --- ANTI-FLICKER & THEME LOGIC ---
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const currentLightMode = !isDark;
      setIsLight(currentLightMode);
      // Force immediate body background to prevent color jump
      document.body.style.backgroundColor = currentLightMode ? "#F8FAFC" : "#020617";
    };

    updateTheme();
    setMounted(true);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Fetch Live Hijri Date
  useEffect(() => {
    const fetchHijri = async () => {
      setLoading(true);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      
      try {
        const res = await fetch(`https://api.aladhan.com/v1/gToH/${day}-${month}-${year}`);
        const data = await res.json();
        setHijriData(data.data.hijri);
        setLoading(false);
      } catch (err) {
        console.error("Calendar API Error:", err);
      }
    };
    fetchHijri();
  }, [currentDate]);

  const islamicEvents = [
    { title: "Ramadan 1447", date: "Feb 18, 2026", icon: <Moon size={16} />, color: "bg-emerald-500" },
    { title: "Eid-ul-Fitr", date: "March 20, 2026", icon: <Star size={16} />, color: "bg-amber-500" },
    { title: "Day of Arafah", date: "May 26, 2026", icon: <Sun size={16} />, color: "bg-blue-500" },
    { title: "Eid-ul-Adha", date: "May 27, 2026", icon: <Star size={16} />, color: "bg-purple-500" },
    { title: "Ashura", date: "July 25, 2026", icon: <Moon size={16} />, color: "bg-rose-500" },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  // Prevent hydration flash
  if (!mounted) return <div className="min-h-screen bg-transparent" />;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-colors duration-700"
      style={{ backgroundColor: isLight ? "#F8FAFC" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      
      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 border-b px-6 py-5 backdrop-blur-2xl transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`group flex items-center gap-3 px-4 py-2 rounded-2xl border transition-all cursor-pointer ${
            isLight ? "bg-slate-100 border-slate-200 hover:bg-slate-200" : "bg-white/5 border-white/5"
          }`}>
            <ArrowLeft size={18} className={isLight ? "text-slate-600" : "text-gray-400"} />
            <span className={`text-[10px] font-black tracking-widest uppercase ${isLight ? "text-slate-900" : "text-gray-400"}`}>Back</span>
          </button>
          
          <div className="flex flex-col items-center">
             <h1 className="text-lg font-bold tracking-tight uppercase">Islamic Calendar</h1>
             <p className="text-[9px] text-emerald-600 font-bold flex items-center gap-1 uppercase tracking-widest">
               <MapPin size={8}/> Global Hijri Timing
             </p>
          </div>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
            isLight ? "bg-emerald-50 border-emerald-100 text-emerald-600" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
          }`}>
            <Bell size={18} />
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT: CALENDAR GRID --- */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* HIJRI HERO CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className={`relative p-10 rounded-[3.5rem] border overflow-hidden transition-all duration-700 ${
              isLight ? "bg-white border-slate-200 shadow-xl" : "bg-linear-to-br from-emerald-600/20 via-transparent to-transparent border-emerald-500/20"
            }`}
          >
            <div className="relative z-10">
              <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                isLight ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-emerald-500/20 text-emerald-400 border-emerald-500/20"
              }`}>
                Today's Hijri
              </span>
              {loading ? (
                <div className={`h-16 w-64 animate-pulse mt-6 rounded-xl ${isLight ? "bg-slate-100" : "bg-white/5"}`} />
              ) : (
                <div className="mt-6">
                  <h2 className={`text-5xl md:text-6xl font-bold tracking-tighter ${isLight ? "text-slate-900" : "text-white"}`}>
                    {hijriData?.day} {hijriData?.month.en}
                  </h2>
                  <p className="text-2xl text-emerald-600 font-arabic mt-2">{hijriData?.year} Hijri</p>
                </div>
              )}
              <p className={`mt-6 font-bold text-sm tracking-widest uppercase ${isLight ? "text-slate-400" : "text-gray-500"}`}>
                {currentDate.toDateString()}
              </p>
            </div>
            <Moon className={`absolute right-10 top-1/2 -translate-y-1/2 transition-all ${isLight ? "text-slate-100" : "text-emerald-500/5"}`} size={200} fill="currentColor" />
          </motion.div>

          {/* CALENDAR ENGINE */}
          <div className={`p-8 rounded-[3rem] border backdrop-blur-md transition-all duration-700 ${
            isLight ? "bg-white border-slate-200 shadow-lg" : "bg-white/2 border-white/5"
          }`}>
            <div className="flex items-center justify-between mb-10 px-2">
               <div>
                  <h3 className={`text-2xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                    {currentDate.toLocaleString('default', { month: 'long' })}
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{currentDate.getFullYear()}</p>
               </div>
               <div className="flex gap-3">
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className={`p-3 rounded-2xl transition-all cursor-pointer ${
                    isLight ? "bg-slate-100 text-slate-600 hover:bg-emerald-600 hover:text-white" : "bg-white/5 hover:bg-emerald-500 hover:text-black"
                  }`}><ChevronLeft size={18}/></button>
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className={`p-3 rounded-2xl transition-all cursor-pointer ${
                    isLight ? "bg-slate-100 text-slate-600 hover:bg-emerald-600 hover:text-white" : "bg-white/5 hover:bg-emerald-500 hover:text-black"
                  }`}><ChevronRight size={18}/></button>
               </div>
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-4">
               {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                 <div key={day} className="text-center text-[9px] font-black text-gray-400 uppercase mb-4">{day}</div>
               ))}
               
               {[...Array(firstDayOfMonth)].map((_, i) => (
                 <div key={`empty-${i}`} className="aspect-square" />
               ))}

               {[...Array(daysInMonth)].map((_, i) => {
                 const isToday = i + 1 === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
                 return (
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     key={i} 
                     className={`relative aspect-square rounded-2xl md:rounded-3xl flex flex-col items-center justify-center text-sm font-bold border transition-all cursor-pointer ${
                       isToday 
                       ? 'bg-emerald-600 border-emerald-500 text-white shadow-xl' 
                       : isLight ? 'bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-500/50' : 'bg-white/3 border-white/5 hover:border-emerald-500/50'
                     }`}
                   >
                     {i + 1}
                     {isToday && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />}
                   </motion.div>
                 );
               })}
            </div>
          </div>
        </div>

        {/* --- RIGHT: EVENTS --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className={`p-6 rounded-[2.5rem] border transition-all duration-700 ${
            isLight ? "bg-white border-slate-200 shadow-md" : "bg-white/2 border-white/5"
          }`}>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-gray-400 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-500" /> Key Observations
            </h3>
            
            <div className="space-y-4">
              {islamicEvents.map((event, idx) => (
                <div key={idx} className={`group p-4 rounded-2xl border transition-all ${
                  isLight ? "bg-slate-50 border-slate-100 hover:border-emerald-200" : "bg-white/2 border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`p-2 rounded-xl ${event.color} bg-opacity-20 ${isLight ? "text-emerald-700" : "text-white"}`}>{event.icon}</span>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{event.date}</span>
                  </div>
                  <h4 className={`font-bold text-sm transition-colors ${isLight ? "text-slate-800 group-hover:text-emerald-600" : "group-hover:text-emerald-400"}`}>{event.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-8 rounded-[3rem] border relative overflow-hidden group transition-all duration-700 ${
            isLight ? "bg-white border-slate-200 shadow-md" : "bg-linear-to-br from-indigo-600/20 to-emerald-600/20 border-white/10"
          }`}>
             <div className="relative z-10">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 mb-4">Sunnah Fasting</p>
               <h4 className={`text-lg font-bold leading-tight ${isLight ? "text-slate-900" : "text-white"}`}>Monday & Thursday Fasting</h4>
               <p className={`text-xs mt-4 leading-relaxed italic ${isLight ? "text-slate-500" : "text-gray-500"}`}>
                 "The deeds of people are presented on Monday and Thursday, and I love that my deeds be presented while I am fasting."
               </p>
             </div>
             <div className={`absolute -right-5 -bottom-5 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 ${
               isLight ? "bg-slate-100" : "bg-white/5"
             }`} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}