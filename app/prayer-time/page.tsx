"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Volume2, Sunrise, Sun, Sunset, CloudMoon, BellRing } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { PRAYER_HADITHS, Hadith } from '@/components/hadithData';

export default function PrayerTimes() {
  const router = useRouter();
  const [times, setTimes] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    if (PRAYER_HADITHS.length > 0) {
      const randomIndex = Math.floor(Math.random() * PRAYER_HADITHS.length);
      setSelectedHadith(PRAYER_HADITHS[randomIndex]);
    }
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Faisalabad&country=Pakistan&method=1&school=1`);
        const data = await res.json();
        setTimes(data.data.timings);
      } catch (err) {
        console.error("API Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPrayers();
  }, []);

  const formatTo12H = (time24: string) => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(':');
    let h = parseInt(hours);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h < 10 ? '0' + h : h}:${minutes} ${ampm}`;
  };

  const prayerStatus = useMemo(() => {
    if (!times) return { active: "", next: { name: "", time: "" } };
    const prayerOrder = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    
    let active = "";
    let next = { name: "Fajr", time: times["Fajr"] };

    for (let i = 0; i < prayerOrder.length; i++) {
      const name = prayerOrder[i];
      const [h, m] = times[name].split(':').map(Number);
      const prayerMins = h * 60 + m;
      if (currentMins >= prayerMins) active = name; 
      else {
        next = { name, time: times[name] };
        break;
      }
    }
    if (active === "Isha") next = { name: "Fajr", time: times["Fajr"] };
    return { active, next };
  }, [times, currentTime]);

  const prayerIcons: any = {
    Fajr: <Sunrise size={24} />,
    Dhuhr: <Sun size={24} />,
    Asr: <Sun size={24} className="opacity-60" />,
    Maghrib: <Sunset size={24} />,
    Isha: <CloudMoon size={24} />,
  };

  if (loading || !selectedHadith) return (
    <div className="bg-[#020617] min-h-screen flex items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-14 h-14 border-b-2 border-emerald-500 rounded-full" />
    </div>
  );

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      
      {/* --- ELITE NAV --- */}
      <nav className="fixed top-0 w-full z-100 bg-[#020617]/90 backdrop-blur-2xl border-b border-white/5 px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className="group flex items-center gap-2 md:gap-3 bg-white/5 px-3 md:px-5 py-2 rounded-2xl border border-white/5 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} className="text-gray-400 group-hover:text-emerald-500" />
            <span className="text-[9px] md:text-[10px] font-black tracking-widest uppercase">Back</span>
          </button>
          
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/70">Faisalabad Live</span>
             </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-[11px] md:text-[13px] font-mono text-emerald-500 font-bold hidden xs:block">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
            <div className="w-9 h-9 md:w-11 md:h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 text-emerald-500 shadow-inner">
              <Clock size={18} />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 md:pt-40 pb-32 px-4 md:px-6 max-w-5xl mx-auto">
        
        {/* --- PREMIUM NEXT PRAYER HERO --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[5rem] bg-emerald-950/20 border border-emerald-500/10 mb-12 md:mb-20 overflow-hidden text-center"
        >
          <div className="relative z-10">
            <motion.div 
              animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6"
            >
               <BellRing size={12} className="text-emerald-400 animate-bounce" />
               <span className="text-[9px] font-black tracking-[0.3em] uppercase text-emerald-400/80">Next Adhan</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none">
              {formatTo12H(prayerStatus.next.time).split(' ')[0]}
              <span className="text-xl md:text-4xl text-emerald-500 ml-2 md:ml-4 uppercase font-light italic">{formatTo12H(prayerStatus.next.time).split(' ')[1]}</span>
            </h2>
            <p className="text-sm md:text-xl font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-emerald-500/40 mt-6">{prayerStatus.next.name} Prayer</p>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/3 blur-[100px] -z-10" />
        </motion.div>

        {/* --- PRAYER CARDS GRID --- */}
        <div className="grid gap-4 md:gap-6">
          {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((name, idx) => {
            const isActive = prayerStatus.active === name;
            const formattedTime = formatTo12H(times[name]);
            
            return (
              <motion.div 
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 md:p-10 rounded-4xl md:rounded-[3.5rem] border transition-all duration-700 flex items-center justify-between ${isActive ? 'bg-emerald-600 border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-[1.01]' : 'bg-white/3 border-white/5 hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-4 md:gap-8 z-10">
                   <div className={`w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-black text-emerald-500' : 'bg-white/5 text-gray-500 group-hover:text-emerald-400'}`}>
                      {prayerIcons[name]}
                   </div>
                   <div>
                      <h4 className={`text-xl md:text-4xl font-bold tracking-tight ${isActive ? 'text-black' : 'text-white'}`}>{name}</h4>
                      <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1 ${isActive ? 'text-black/60' : 'text-gray-500'}`}>{isActive ? 'Live Now' : 'Timing'}</p>
                   </div>
                </div>

                <div className="flex items-center gap-4 md:gap-10 z-10">
                   <div className="text-right">
                      <p className={`text-2xl md:text-5xl font-black tracking-tighter ${isActive ? 'text-black' : 'text-white'}`}>{formattedTime}</p>
                   </div>
                   <div className={`hidden xs:flex w-10 h-10 md:w-14 md:h-14 rounded-full items-center justify-center border transition-all ${isActive ? 'border-black/20 text-black' : 'border-white/10 text-gray-600'}`}>
                      <Volume2 size={20} />
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- DYNAMIC HADITH SECTION --- */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-32 relative"
        >
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-4 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 text-center overflow-hidden">
              <div className="mb-8 md:mb-12">
                <span className="text-[9px] md:text-[11px] font-black tracking-[0.5em] text-emerald-500 uppercase block mb-4">Daily Inspiration</span>
                <h3 className="text-xl md:text-3xl font-bold text-white/90">
                  Hazrat Muhammad <span className="text-emerald-500">ﷺ</span>
                </h3>
              </div>

              <div className="space-y-8 md:space-y-12">
                <p className="text-3xl md:text-6xl font-arabic leading-relaxed text-emerald-400 px-2" style={{ direction: 'rtl' }}>
                  {selectedHadith.arabic}
                </p>
                <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent via-emerald-500/30 to-transparent mx-auto" />
                <p className="text-xl md:text-4xl font-urdu leading-loose md:leading-[2.2] text-white/90 px-2" style={{ direction: 'rtl' }}>
                  {selectedHadith.urdu}
                </p>
                <p className="text-xs md:text-lg text-gray-400 font-light italic max-w-2xl mx-auto leading-relaxed">
                  "{selectedHadith.english}"
                </p>
              </div>

              <div className="mt-10 md:mt-16 inline-flex items-center gap-3 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-emerald-500/60">{selectedHadith.ref}</span>
              </div>
            </div>
          </div>
        </motion.section>

      </main>
      <Footer />
    </div>
  );
}