"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, Info, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: "Al-Quran", href: "/quran" },
    { name: "Prayer Times", href: "/prayer-time" },
    { name: "Daily Dua", href: "/dua" },
    { name: "Islamic Calendar", href: "/calendar" },
    { name: "Seerah", href: "/seerah" },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-700 px-4 md:px-8 ${scrolled ? "top-0 py-3" : "top-6 py-2"}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-[2.2rem] transition-all duration-700 border ${
          scrolled 
            ? isDarkMode 
                ? "bg-[#020617]/80 backdrop-blur-xl border-white/10 shadow-2xl" 
                : "bg-white/80 backdrop-blur-xl border-slate-200 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className={`p-2.5 rounded-2xl group-hover:rotate-15 transition-all duration-500 shadow-lg ${
            isDarkMode ? "bg-emerald-600 shadow-emerald-500/20" : "bg-slate-900 shadow-slate-900/10"
          }`}>
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Noor<span className="text-emerald-500 font-medium tracking-tighter ml-0.5">Quran</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-[13px] font-bold tracking-tight transition-all relative group ${
              isDarkMode ? "text-gray-300 hover:text-emerald-400" : "text-slate-600 hover:text-emerald-600"
            }`}>
              {link.name}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer hover:scale-105 active:scale-95 ${
              isDarkMode 
                ? "bg-white/5 border-white/10 text-emerald-400 hover:bg-white/10" 
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link href="/about">
            <button className={`flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl border transition-all cursor-pointer ${
              isDarkMode 
                ? "text-gray-300 bg-white/5 border-white/5 hover:bg-white/10" 
                : "text-slate-600 bg-slate-50 border-slate-200 hover:bg-slate-100"
            }`}>
              <Info size={16} className="text-emerald-500" />
              About
            </button>
          </Link>
          
          <Link href="/quran">
            <button className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all cursor-pointer shadow-lg active:scale-95 ${
              isDarkMode 
                ? "bg-white text-black hover:bg-emerald-400 shadow-white/5" 
                : "bg-slate-900 text-white hover:bg-emerald-600 shadow-slate-900/20"
            }`}>
              Al-Quran
            </button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className={`p-2.5 rounded-xl ${isDarkMode ? "bg-white/5 text-emerald-400" : "bg-slate-100 text-slate-600"}`}>
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className={`p-2.5 rounded-xl ${isDarkMode ? "bg-white/5 text-emerald-400" : "bg-slate-100 text-slate-600"}`}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-24 left-4 right-4 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border p-8 flex flex-col gap-5 md:hidden ${
              isDarkMode ? "bg-[#050b1d]/95 border-white/5" : "bg-white/95 border-slate-200 shadow-slate-200"
            }`}
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-xl font-bold flex items-center justify-between ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                {link.name} <span className="text-emerald-500">→</span>
              </Link>
            ))}
            <hr className={isDarkMode ? "border-white/5" : "border-slate-100"} />
            <Link href="/quran" onClick={() => setIsOpen(false)}>
              <button className={`w-full py-4 rounded-2xl font-black shadow-xl ${
                isDarkMode ? "bg-white text-black" : "bg-slate-900 text-white"
              }`}>Start Reading</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;