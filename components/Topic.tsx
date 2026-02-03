"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Heart, Anchor, Sun, Target } from 'lucide-react';

export default function Topics() {
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

  const topics = [
    { title: 'Patience', icon: <Anchor size={20} />, color: 'from-blue-500/20', lightColor: 'from-blue-100' },
    { title: 'Gratitude', icon: <Heart size={20} />, color: 'from-emerald-500/20', lightColor: 'from-emerald-100' },
    { title: 'Success', icon: <Target size={20} />, color: 'from-amber-500/20', lightColor: 'from-amber-100' },
    { title: 'Peace', icon: <Sun size={20} />, color: 'from-purple-500/20', lightColor: 'from-purple-100' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } }
  };

  return (
    <section 
      className={`relative py-40 px-6 overflow-hidden transition-colors duration-1000 ${
        isLight ? "bg-[#F8FAFC]" : "bg-[#020617]"
      }`}
    >
      
      {/* 1. Ambient Background Light */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 blur-[120px] rounded-full pointer-events-none transition-colors duration-1000 ${
        isLight ? "bg-emerald-200/20" : "bg-emerald-500/5"
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className={`text-[10px] font-bold tracking-[0.5em] uppercase px-4 py-1.5 border rounded-full transition-all duration-700 ${
            isLight ? "text-emerald-700 border-emerald-200 bg-emerald-50" : "text-emerald-500 border-emerald-500/20 bg-emerald-500/5"
          }`}>
            Deep Dive
          </span>
          <h2 className={`text-4xl md:text-7xl font-bold mt-8 tracking-tighter transition-colors duration-700 ${
            isLight 
            ? "text-slate-900" 
            : "text-transparent bg-clip-text bg-linear-to-b from-white to-white/40"
          }`}>
            Wisdom for every <br /> human emotion.
          </h2>
        </motion.div>
        
        {/* Topics Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {topics.map((item) => (
            <motion.div 
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Outer Glow on Hover */}
              <div className={`absolute -inset-0.5 bg-linear-to-b rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm ${
                isLight ? item.lightColor : item.color
              } to-transparent`} />
              
              <div className={`relative h-full py-16 rounded-[2.5rem] border backdrop-blur-md overflow-hidden flex flex-col items-center justify-center transition-all duration-700 ${
                isLight 
                ? "bg-white border-slate-100 group-hover:bg-white group-hover:border-emerald-200 shadow-sm" 
                : "border-white/5 bg-white/3 group-hover:bg-white/[0.07] group-hover:border-white/10"
              }`}>
                
                {/* Icon Circle */}
                <div className={`mb-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isLight 
                  ? "bg-slate-50 text-slate-400 group-hover:text-emerald-600 group-hover:bg-emerald-50" 
                  : "bg-white/5 text-gray-400 group-hover:text-emerald-400 group-hover:bg-emerald-500/10"
                }`}>
                  {item.icon}
                </div>

                <h4 className={`text-xl font-medium tracking-tight transition-colors duration-500 ${
                  isLight ? "text-slate-600 group-hover:text-slate-900" : "text-gray-300 group-hover:text-white"
                }`}>
                  {item.title}
                </h4>

                {/* Subtle Bottom Zap */}
                <div className="absolute bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500">
                  <Zap size={16} className={`${isLight ? "text-emerald-600 fill-emerald-100" : "text-emerald-500 fill-emerald-500/20"}`} />
                </div>

                {/* Corner Decorative Gradient */}
                <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-linear-to-br blur-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                  isLight ? item.lightColor : item.color
                } to-transparent`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Bottom Decorative Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={`h-px bg-linear-to-r from-transparent via-current to-transparent mt-32 opacity-10 ${
            isLight ? "text-slate-900" : "text-white"
          }`} 
        />
      </div>
    </section>
  );
}