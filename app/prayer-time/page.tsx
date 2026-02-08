"use client";
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, Volume2, Sunrise, Sun, Sunset, CloudMoon, BellRing, ChevronDown, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';
import { PRAYER_HADITHS, Hadith } from '@/components/hadithData';

const PAKISTAN_CITIES = [
  { name: "Faisalabad", id: "Faisalabad" },
  { name: "Karachi", id: "Karachi" },
  { name: "Lahore", id: "Lahore" },
  { name: "Islamabad", id: "Islamabad" },
  { name: "Rawalpindi", id: "Rawalpindi" },
  { name: "Multan", id: "Multan" },
  { name: "Peshawar", id: "Peshawar" },
  { name: "Quetta", id: "Quetta" },
  { name: "Sialkot", id: "Sialkot" },
  { name: "Gujranwala", id: "Gujranwala" },
];

export default function PrayerTimes() {
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedCity, setSelectedCity] = useState("Faisalabad");
  const [times, setTimes] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedHadith, setSelectedHadith] = useState<Hadith | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsLight(!isDark);
      document.body.style.backgroundColor = !isDark ? "#F1F5F9" : "#020617";
    };
    updateTheme();
    setMounted(true);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    if (PRAYER_HADITHS.length > 0) {
      setSelectedHadith(PRAYER_HADITHS[Math.floor(Math.random() * PRAYER_HADITHS.length)]);
    }
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchPrayers = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${selectedCity}&country=Pakistan&method=1&school=1`);
        const data = await res.json();
        setTimes(data.data.timings);
      } catch (err) {
        console.error("API Fetch Error:", err);
      } finally {
        setTimeout(() => setLoading(false), 800);
      }
    };
    fetchPrayers();
  }, [selectedCity]);

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
      else { next = { name, time: times[name] }; break; }
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

  if (!mounted || !selectedHadith) return null;

  return (
    <div 
      className="min-h-screen font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-all duration-700"
      style={{ backgroundColor: isLight ? "#F1F5F9" : "#020617", color: isLight ? "#0F172A" : "#FFFFFF" }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri&family=Scheherazade+New:wght@400;700&display=swap');
        .font-arabic-premium { font-family: 'Scheherazade New', serif; line-height: 1.8; }
        .font-urdu-premium { font-family: 'Amiri', serif; line-height: 2.2; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(16, 185, 129, 0.2); border-radius: 10px; }
      `}</style>

      {/* --- ELITE NAV --- */}
      <nav className={`fixed top-0 w-full z-[100] backdrop-blur-2xl border-b px-4 md:px-8 py-4 transition-all duration-700 ${
        isLight ? "bg-white/80 border-slate-200 shadow-sm" : "bg-[#020617]/90 border-white/5"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => router.back()} className={`p-2.5 rounded-xl border transition-all ${
            isLight ? "bg-slate-100 border-slate-200" : "bg-white/5 border-white/5 hover:bg-white/10"
          }`}>
            <ArrowLeft size={20} />
          </button>
          
          {/* PREMIUM DROPDOWN */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all active:scale-95 shadow-lg ${
                isLight ? "bg-white border-emerald-100 text-emerald-800" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
              }`}
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[12px] font-black uppercase tracking-[0.2em]">{selectedCity}</span>
              <ChevronDown size={16} className={`transition-transform duration-500 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-56 rounded-3xl border shadow-2xl overflow-hidden z-[110] backdrop-blur-3xl ${
                    isLight ? "bg-white/95 border-slate-200" : "bg-slate-900/95 border-white/10"
                  }`}
                >
                  <div className="max-h-72 overflow-y-auto custom-scrollbar p-2">
                    {PAKISTAN_CITIES.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => { setSelectedCity(city.id); setIsDropdownOpen(false); }}
                        className={`w-full text-left px-5 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all mb-1 ${
                          selectedCity === city.id 
                            ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30" 
                            : isLight ? "hover:bg-slate-100 text-slate-600" : "hover:bg-white/5 text-gray-400"
                        }`}
                      >
                        {city.name}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-10 h-10 rounded-full border border-emerald-500/20 flex items-center justify-center">
            <Clock size={18} className="text-emerald-500" />
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-32 px-4 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              key="loader" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="h-[50vh] flex flex-col items-center justify-center gap-6"
            >
              <div className="relative">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="w-16 h-16 border-2 border-emerald-500/10 border-t-emerald-500 rounded-full" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500 animate-pulse" size={20} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/60">Aligning with Sun...</span>
            </motion.div>
          ) : (
            <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              
              {/* NEXT PRAYER HERO */}
              <div className={`relative p-10 md:p-20 rounded-[4rem] md:rounded-[6rem] border mb-16 text-center overflow-hidden shadow-2xl transition-all duration-1000 ${
                isLight ? "bg-white border-slate-200" : "bg-emerald-950/10 border-emerald-500/10"
              }`}>
                <div className="relative z-10">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
                    <BellRing size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-emerald-500">Next Adhan In {selectedCity}</span>
                  </motion.div>
                  <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4">
                    {formatTo12H(prayerStatus.next.time).split(' ')[0]}
                    <span className="text-2xl md:text-5xl text-emerald-500 ml-3 uppercase font-light italic">{formatTo12H(prayerStatus.next.time).split(' ')[1]}</span>
                  </h2>
                  <p className="text-xs md:text-xl font-bold tracking-[0.6em] uppercase opacity-40">{prayerStatus.next.name} Prayer</p>
                </div>
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full`} />
              </div>

              {/* PRAYER CARDS */}
              <div className="grid gap-5">
                {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((name, idx) => {
                  const isActive = prayerStatus.active === name;
                  return (
                    <motion.div 
                      key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}
                      className={`group p-6 md:p-12 rounded-[3rem] border flex items-center justify-between transition-all duration-700 ${
                        isActive ? 'bg-emerald-600 border-emerald-400 shadow-2xl scale-[1.01]' 
                        : isLight ? 'bg-white border-slate-200 hover:border-emerald-200' : 'bg-white/3 border-white/5 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-6 md:gap-10">
                        <div className={`w-14 h-14 md:w-24 md:h-24 rounded-[2rem] md:rounded-[3rem] flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isActive ? 'bg-black text-emerald-500' : isLight ? 'bg-slate-50 text-slate-300' : 'bg-white/5 text-gray-700'
                        }`}>
                          {prayerIcons[name]}
                        </div>
                        <div>
                          <h4 className={`text-2xl md:text-5xl font-bold ${isActive ? 'text-white' : ''}`}>{name}</h4>
                          <span className={`text-[9px] md:text-[11px] uppercase font-black tracking-widest opacity-50 ${isActive ? 'text-white' : ''}`}>{isActive ? '• Active Now' : 'Upcoming'}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-3xl md:text-6xl font-black tracking-tighter ${isActive ? 'text-white' : ''}`}>{formatTo12H(times[name])}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* DYNAMIC HADITH SECTION */}
              <section className="mt-32 relative">
                <div className={`relative backdrop-blur-3xl border rounded-[4rem] md:rounded-[6rem] p-10 md:p-24 text-center transition-all shadow-2xl ${
                  isLight ? "bg-white border-slate-200" : "bg-slate-900/40 border-white/5"
                }`}>
                  <div className="mb-16">
                    <span className="text-[11px] font-black tracking-[0.5em] text-emerald-500 uppercase block mb-6">Sunnah Inspiration</span>
                    <h3 className={`text-2xl md:text-5xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                      Hazrat Muhammad <span className="text-emerald-500">ﷺ</span> Said:
                    </h3>
                  </div>
                  
                  <div className="space-y-12">
                    <p className="text-5xl md:text-8xl font-arabic-premium text-emerald-500 leading-snug" dir="rtl">
                      {selectedHadith.arabic}
                    </p>
                    <div className="h-px w-32 mx-auto bg-emerald-500/20" />
                    <p className="text-3xl md:text-6xl font-urdu-premium text-white/90 leading-[1.8]" dir="rtl">
                      {selectedHadith.urdu}
                    </p>
                    <div className="max-w-2xl mx-auto pt-8">
                      <p className="text-sm md:text-xl font-light italic opacity-50 leading-relaxed">
                        "{selectedHadith.english}"
                      </p>
                      <div className="mt-10 inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-bold tracking-widest opacity-40 uppercase">
                        Source: {selectedHadith.ref}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}