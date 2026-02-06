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
    // --- SCROLL TO TOP FIX ---
    // Force browser to start at top on refresh/load
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Thora sa delay taake render complete ho jaye
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' 
      });
    }, 10);
    

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 10);
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
    <nav
      className={`fixed w-full z-100 transition-all duration-500 px-4 md:px-8 ${scrolled ? "top-4" : "top-8"}`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-[2.8rem] transition-all duration-500 
        ${
          scrolled
            ? isDarkMode
              ? "bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
              : "bg-white/40 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]"
            : "bg-transparent border-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div
            className={`p-2 rounded-2xl group-hover:rotate-12 transition-all duration-500 ${
              isDarkMode
                ? "bg-emerald-600 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900"
            }`}
          >
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <span
            className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Noor
            <span className="text-emerald-500 font-medium tracking-tighter ml-0.5">
              Quran
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold tracking-tight transition-all relative group ${
                isDarkMode
                  ? "text-gray-300 hover:text-emerald-400"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Actions - Premium Dark/Light Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden
      ${
        isDarkMode
          ? "bg-white/5 border border-white/10 hover:border-emerald-500/50 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]"
          : "bg-slate-100 border border-slate-200 hover:border-emerald-600/30 shadow-[inset_0_0_10px_rgba(0,0,0,0.02)]"
      }`}
          >
            <div
              className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 
      ${isDarkMode ? "bg-emerald-500/10" : "bg-emerald-600/5"}`}
            />

            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ y: 20, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                >
                  <Sun size={20} className="text-emerald-400 relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 20, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -20, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                >
                  <Moon size={20} className="text-slate-700 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link href="/about">
            <button
              className={`px-6 py-2.5 text-sm font-bold rounded-2xl transition-all border cursor-pointer ${
                isDarkMode
                  ? "text-white border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20"
                  : "text-slate-900 border-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10"
              }`}
            >
              About
            </button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl ${isDarkMode ? "text-emerald-400" : "text-slate-600"}`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute top-24 left-4 right-4 backdrop-blur-2xl rounded-4xl border p-8 flex flex-col gap-6 md:hidden shadow-2xl ${
              isDarkMode
                ? "bg-slate-900/95 border-white/10"
                : "bg-white/95 border-slate-200"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold flex items-center justify-between ${
                  isDarkMode ? "text-white" : "text-slate-900"
                }`}
              >
                {link.name} <span className="text-emerald-500">→</span>
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className={isDarkMode ? "text-gray-400" : "text-slate-500"}>
                Switch Theme
              </span>
              <button
                onClick={toggleTheme}
                className="p-2 bg-emerald-500/10 rounded-lg"
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-emerald-400" />
                ) : (
                  <Moon size={20} className="text-emerald-600" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;