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

  // Fetch Live Hijri Date from API
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

  // Upcoming Islamic Events (2026/2027)
  const islamicEvents = [
    { title: "Ramadan 1447", date: "Feb 18, 2026", icon: <Moon size={16} />, color: "bg-emerald-500" },
    { title: "Eid-ul-Fitr", date: "March 20, 2026", icon: <Star size={16} />, color: "bg-amber-500" },
    { title: "Day of Arafah", date: "May 26, 2026", icon: <Sun size={16} />, color: "bg-blue-500" },
    { title: "Eid-ul-Adha", date: "May 27, 2026", icon: <Star size={16} />, color: "bg-purple-500" },
    { title: "Ashura", date: "July 25, 2026", icon: <Moon size={16} />, color: "bg-rose-500" },
  ];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-emerald-500/30">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-2xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 cursor-pointer">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-emerald-500 transition-all" />
            <span className="text-[10px] font-black tracking-widest uppercase text-gray-400">Back</span>
          </button>
          
          <div className="flex flex-col items-center">
             <h1 className="text-lg font-bold tracking-tight uppercase">Islamic Calendar</h1>
             <p className="text-[9px] text-emerald-500 font-bold flex items-center gap-1 uppercase tracking-widest">
               <MapPin size={8}/> Global Hijri Timing
             </p>
          </div>

          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <Bell size={18} className="text-emerald-500" />
          </div>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT: LIVE DATE & GRID --- */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* HIJRI HERO CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="relative p-10 rounded-[3.5rem] bg-gradient-to-br from-emerald-600/20 via-transparent to-transparent border border-emerald-500/20 overflow-hidden"
          >
            <div className="relative z-10">
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">
                Today's Hijri
              </span>
              {loading ? (
                <div className="h-16 w-64 bg-white/5 animate-pulse mt-6 rounded-xl" />
              ) : (
                <div className="mt-6">
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
                    {hijriData?.day} {hijriData?.month.en}
                  </h2>
                  <p className="text-2xl text-emerald-500/80 font-arabic mt-2">{hijriData?.year} Hijri</p>
                </div>
              )}
              <p className="text-gray-500 mt-6 font-bold text-sm tracking-widest uppercase">{currentDate.toDateString()}</p>
            </div>
            <Moon className="absolute right-10 top-1/2 -translate-y-1/2 text-emerald-500/5" size={200} fill="currentColor" />
          </motion.div>

          {/* CALENDAR ENGINE */}
          <div className="p-8 rounded-[3rem] bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <div className="flex items-center justify-between mb-10 px-2">
               <div>
                  <h3 className="text-2xl font-bold">{currentDate.toLocaleString('default', { month: 'long' })}</h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{currentDate.getFullYear()}</p>
               </div>
               <div className="flex gap-3">
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))} className="p-3 bg-white/5 hover:bg-emerald-500 hover:text-black rounded-2xl transition-all cursor-pointer"><ChevronLeft size={18}/></button>
                  <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))} className="p-3 bg-white/5 hover:bg-emerald-500 hover:text-black rounded-2xl transition-all cursor-pointer"><ChevronRight size={18}/></button>
               </div>
            </div>

            <div className="grid grid-cols-7 gap-2 md:gap-4">
               {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                 <div key={day} className="text-center text-[9px] font-black text-gray-600 uppercase mb-4">{day}</div>
               ))}
               
               {/* Empty cells for previous month padding */}
               {[...Array(firstDayOfMonth)].map((_, i) => (
                 <div key={`empty-${i}`} className="aspect-square" />
               ))}

               {/* Month Days */}
               {[...Array(daysInMonth)].map((_, i) => {
                 const isToday = i + 1 === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
                 return (
                   <motion.div 
                     whileHover={{ scale: 1.05 }}
                     key={i} 
                     className={`relative aspect-square rounded-2xl md:rounded-[1.5rem] flex flex-col items-center justify-center text-sm font-bold border transition-all cursor-pointer ${isToday ? 'bg-emerald-500 border-emerald-500 text-black shadow-2xl shadow-emerald-500/40' : 'bg-white/[0.03] border-white/5 hover:border-emerald-500/50'}`}
                   >
                     {i + 1}
                     {isToday && <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full" />}
                   </motion.div>
                 );
               })}
            </div>
          </div>
        </div>

        {/* --- RIGHT: EVENTS --- */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-gray-400 flex items-center gap-2">
              <Sparkles size={14} className="text-amber-500" /> Key Observations
            </h3>
            
            <div className="space-y-4">
              {islamicEvents.map((event, idx) => (
                <div key={idx} className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`p-2 rounded-xl ${event.color} bg-opacity-20 text-white`}>{event.icon}</span>
                    <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">{event.date}</span>
                  </div>
                  <h4 className="font-bold text-sm group-hover:text-emerald-400 transition-colors">{event.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* LUXURY BANNER */}
          <div className="p-8 rounded-[3rem] bg-gradient-to-br from-indigo-600/20 to-emerald-600/20 border border-white/10 relative overflow-hidden group">
             <div className="relative z-10">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-4">Sunnah Fasting</p>
               <h4 className="text-lg font-bold leading-tight">Monday & Thursday Fasting</h4>
               <p className="text-xs text-gray-500 mt-4 leading-relaxed italic">"The deeds of people are presented on Monday and Thursday, and I love that my deeds be presented while I am fasting."</p>
             </div>
             <div className="absolute -right-5 -bottom-5 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}