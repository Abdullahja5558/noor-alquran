"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, BookOpen, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Al-Quran", href: "/quran" },
  { name: "Prayer Times", href: "/prayer-time" },
  { name: "Daily Dua", href: "/dua" },
  { name: "Tasbeeh", href: "/tasbeeh" },
  { name: "Calendar", href: "/calendar" },
  { name: "Seerah", href: "/seerah" },
  { name: "Noor AI", href: "/ai" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
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
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "pt-2.5 sm:pt-4 px-3 sm:px-6 md:px-8 pointer-events-none"
            : "pt-0 px-4 sm:px-8 md:px-10 pointer-events-auto"
        }`}
      >
        <div
          className={`transition-all duration-500 ease-out flex items-center justify-between ${
            scrolled
              ? "pointer-events-auto max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/40 dark:bg-black/35 backdrop-blur-3xl backdrop-saturate-200 border border-white/60 dark:border-white/15 shadow-[0_8px_32px_0_rgba(31,38,135,0.07),inset_0_1px_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.6),inset_0_1px_1px_0_rgba(255,255,255,0.15)] ring-1 ring-black/[0.03] dark:ring-white/[0.05]"
              : "w-full max-w-7xl mx-auto py-4 sm:py-6 px-4 sm:px-8 bg-transparent border-none shadow-none"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer shrink-0 select-none"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Noor<span className="font-normal text-slate-500 dark:text-neutral-400">Quran</span>
              </span>
              <span className="hidden sm:inline-block font-arabic text-xs text-slate-400 dark:text-neutral-500 opacity-80">
                نور القرآن
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Clean, No Box Container) */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/quran" && pathname.startsWith("/quran"));

              if (link.href === "/ai") {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`ml-1 px-3.5 py-1.5 rounded-full text-[13px] sm:text-sm font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 shadow-xs ${
                      isActive ? "ring-2 ring-blue-400 dark:ring-blue-300 ring-offset-1" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-slate-950 dark:text-white font-semibold bg-white/70 dark:bg-white/15 shadow-sm backdrop-blur-sm border border-white/60 dark:border-white/10"
                      : "text-slate-600 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer select-none"
            >
              {mounted ? (
                isDark ? (
                  <Sun size={17} className="text-amber-400" />
                ) : (
                  <Moon size={17} className="text-slate-700" />
                )
              ) : (
                <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-neutral-800" />
              )}
            </button>

            {/* Clean Minimalist About Link */}
            <Link
              href="/about"
              className="hidden sm:inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full border border-white/60 dark:border-white/15 text-slate-700 dark:text-neutral-200 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-none"
            >
              About
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (Matching Liquid Glassmorphism) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed ${
              scrolled ? "top-16 sm:top-20" : "top-20"
            } inset-x-3 sm:inset-x-6 max-w-md mx-auto rounded-[2rem] p-4 sm:p-5 flex flex-col gap-1.5 lg:hidden bg-white/65 dark:bg-black/55 backdrop-blur-3xl backdrop-saturate-200 border border-white/60 dark:border-white/15 shadow-[0_16px_40px_0_rgba(31,38,135,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.7)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_0_rgba(255,255,255,0.12)] z-50`}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/quran" && pathname.startsWith("/quran"));

              if (link.href === "/ai") {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-2xl text-sm font-semibold flex items-center justify-between transition-colors bg-blue-600 text-white shadow-xs"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs">→</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-sm"
                      : "text-slate-800 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs opacity-40">→</span>
                </Link>
              );
            })}

            <div className="pt-3 mt-1.5 border-t border-slate-200/50 dark:border-white/10 flex justify-between items-center px-1">
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-xs font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                About Project
              </Link>
              <span className="text-[11px] font-arabic text-slate-500 dark:text-neutral-400">
                نور القرآن الكريم
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}