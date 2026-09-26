"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Instagram, 
  Heart, 
  ArrowUpRight,
  Globe,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail("");
    }
  };

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Al-Quran", href: "/quran" },
        { name: "Prayer Times", href: "/prayer-time" },
        { name: "Daily Duas", href: "/dua" },
        { name: "Digital Tasbeeh", href: "/tasbeeh" },
      ],
    },
    {
      title: "Spiritual",
      links: [
        { name: "Prophetic Seerah", href: "/seerah" },
        { name: "Islamic Calendar", href: "/calendar" },
        { name: "About Noor", href: "/about" },
      ],
    },
    {
      title: "Developer",
      links: [
        { name: "GitHub Repository", href: "https://github.com/Abdullahja5558" },
        { name: "Contact & Feedback", href: "/about" },
      ],
    },
  ];

  return (
    <footer className="relative pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-8 md:px-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 mb-12 sm:mb-16">
          {/* Left Brand & Newsletter */}
          <div className="space-y-6 sm:space-y-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/25 group-hover:rotate-12 transition-all duration-300">
                <Globe size={22} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  Noor<span className="text-emerald-500">Quran</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-black tracking-[0.4em] text-emerald-600 dark:text-emerald-400 uppercase -mt-1">
                  Al-Kareem
                </span>
              </div>
            </Link>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-md leading-snug tracking-tight text-slate-900 dark:text-white">
              Bringing <span className="text-emerald-600 dark:text-emerald-400 italic">Noor</span> to your digital daily life.
            </h3>

            {/* Newsletter Input */}
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Stay updated via email"
                className="w-full rounded-2xl py-3.5 sm:py-4 pl-5 sm:pl-6 pr-32 sm:pr-36 outline-none transition-all text-xs md:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:border-emerald-500 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 sm:right-2 top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 px-4 sm:px-6 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={13} />
                    <span>Joined!</span>
                  </>
                ) : (
                  <span>Join Us</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4 sm:space-y-6">
                <h4 className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase flex items-center gap-1.5 sm:gap-2 text-emerald-600 dark:text-emerald-400">
                  <Sparkles size={11} /> {section.title}
                </h4>
                <ul className="space-y-3 sm:space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-500"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-xs text-center md:text-left">
          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/mian.abdullah.9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm"
            >
              <Instagram size={17} />
            </a>
          </div>

          {/* Crafted with love */}
          <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase flex items-center justify-center gap-1.5 sm:gap-2 text-slate-700 dark:text-slate-300 shadow-sm text-center">
            CRAFTED WITH <Heart size={11} className="text-emerald-500 fill-emerald-500 animate-pulse" /> BY AJ CODE IN PAKISTAN © {currentYear}
          </div>

          {/* Version badge */}
          <div className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] font-black tracking-widest text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
              <span className="text-slate-900 dark:text-white font-bold">SYSTEM ACTIVE</span>
            </div>
            <span>V 3.0 ELITE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}