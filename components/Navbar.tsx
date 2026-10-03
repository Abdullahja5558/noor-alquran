"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, BookOpen, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Al-Quran", href: "/quran" },
  { name: "Prayer Times", href: "/prayer-time" },
  { name: "Daily Dua", href: "/dua" },
  { name: "Tasbeeh", href: "/tasbeeh" },
  { name: "Islamic Calendar", href: "/calendar" },
  { name: "Seerah", href: "/seerah" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setMounted(true));

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isDark = mounted ? (resolvedTheme === "dark" || theme === "dark") : true;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 px-3 sm:px-6 md:px-8 ${
        scrolled ? "top-2 sm:top-3" : "top-3 sm:top-5"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 rounded-[2rem] sm:rounded-[2.2rem] transition-all duration-300 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-xl border border-slate-200 dark:border-[#141c2b] ${
          scrolled ? "shadow-lg shadow-black/5 dark:shadow-black/60" : "shadow-md shadow-black/3 dark:shadow-black/30"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/25 group-hover:rotate-12 transition-transform duration-300 shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-0.5 sm:gap-1">
              Noor<span className="text-blue-500 font-semibold">Quran</span>
            </span>
            <span className="text-[7.5px] sm:text-[8px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 -mt-1">
              Al-Kareem
            </span>
          </div>
        </Link>

        {/* Desktop Links (Large Screens) */}
        <div className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-slate-100 dark:bg-[#0c111a] border border-slate-200/80 dark:border-[#1a2538]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/quran" && pathname.startsWith("/quran"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-white bg-blue-600 shadow-md shadow-blue-600/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Medium Screen Navigation (Tablet 1024px - 1280px) */}
        <div className="hidden lg:flex xl:hidden items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-[#0c111a] border border-slate-200/80 dark:border-[#1a2538]">
          {navLinks.slice(0, 4).map((link) => {
            const isActive = pathname === link.href || (link.href === "/quran" && pathname.startsWith("/quran"));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide transition-all ${
                  isActive
                    ? "text-white bg-blue-600 shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-200 hover:border-blue-500/40 transition-all cursor-pointer overflow-hidden active:scale-95"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && isDark ? (
                <motion.div
                  key="sun"
                  initial={{ y: 12, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -12, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  <Sun size={17} className="text-amber-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: 12, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: -12, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.15 }}
                >
                  <Moon size={17} className="text-blue-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <Link href="/about">
            <button className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold rounded-2xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-sm">
              <Sparkles size={13} className="text-blue-500" />
              <span>About</span>
            </button>
          </Link>
        </div>

        {/* Mobile & Tablet Toggle Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-200 active:scale-95 transition-transform"
          >
            {mounted && isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-blue-500" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-blue-600 dark:text-blue-400 active:scale-95 transition-transform"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Solid Background & Full Width Touch Targets) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 sm:top-20 left-3 right-3 sm:left-4 sm:right-4 rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 lg:hidden bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] shadow-2xl z-50 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/quran" && pathname.startsWith("/quran"));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-bold flex items-center justify-between transition-all active:scale-98 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/70"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs opacity-60">→</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-1 border-t border-slate-200 dark:border-[#141c2b] flex justify-between items-center">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 py-2 px-3 hover:underline"
              >
                About Noor Al-Quran
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}