"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Instagram, Github, ArrowUpRight, Check } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const footerNav = [
    {
      title: "Read & Listen",
      links: [
        { name: "Holy Quran (114 Surahs)", href: "/quran" },
        { name: "Surah Al-Fatihah", href: "/quran/1" },
        { name: "Surah Yaseen", href: "/quran/36" },
        { name: "Surah Al-Mulk", href: "/quran/67" },
        { name: "Surah Ar-Rahman", href: "/quran/55" },
      ],
    },
    {
      title: "Spiritual Essentials",
      links: [
        { name: "Prayer Times (Namaz)", href: "/prayer-time" },
        { name: "Namaz Time Lahore", href: "/prayer-time/lahore" },
        { name: "Namaz Time Karachi", href: "/prayer-time/karachi" },
        { name: "Noor AI Assistant", href: "/ai" },
        { name: "Daily Duas & Azkar", href: "/dua" },
        { name: "Digital Tasbeeh Counter", href: "/tasbeeh" },
        { name: "Islamic Hijri Calendar", href: "/calendar" },
        { name: "Prophetic Seerah", href: "/seerah" },
      ],
    },
    {
      title: "Project",
      links: [
        { name: "About Noor Al-Quran", href: "/about" },
        { name: "Developer GitHub", href: "https://github.com/Abdullahja5558" },
        { name: "Instagram Community", href: "https://www.instagram.com/mian.abdullah.9/" },
        { name: "Feedback & Contact", href: "/about" },
      ],
    },
  ];

  return (
    <footer className="w-full px-3 sm:px-6 md:px-8 pt-10 sm:pt-14 md:pt-16 pb-0 mb-0 mt-auto">
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        
        {/* Left Card: Fully rounded on mobile, flush bottom on desktop */}
        <div className="lg:col-span-4 bg-[#f8fafc] text-neutral-900 dark:bg-neutral-900 dark:text-white rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-b-none p-6 sm:p-8 md:p-10 pb-8 sm:pb-10 lg:pb-36 xl:pb-40 flex flex-col justify-between transition-colors duration-300 shadow-xl dark:shadow-none border border-neutral-200/60 dark:border-neutral-800">
          <div className="space-y-4 sm:space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center font-bold shrink-0 transition-transform duration-200 group-hover:scale-105 shadow-sm">
                <BookOpen size={18} />
              </div>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="text-xl sm:text-2xl font-bold tracking-tight">
                  Noor<span className="font-light opacity-80">Quran</span>
                </span>
                <span className="font-arabic text-sm text-neutral-500 dark:text-neutral-400 ml-1.5">
                  نور القرآن الكريم
                </span>
              </div>
            </Link>

            {/* Heading / Tagline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug">
              Illuminating hearts with authentic Quranic wisdom.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              An open-source Islamic sanctuary providing authentic Quranic recitations, accurate translations, prayer timings, and spiritual guidance without distractions.
            </p>
          </div>

          {/* Bottom Social Links inside Left Card */}
          <div className="pt-8 sm:pt-10 flex items-center justify-between border-t border-neutral-200/50 dark:border-neutral-800/80 mt-6 lg:mt-0">
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Connect with us
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Abdullahja5558"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.instagram.com/mian.abdullah.9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Card: Solid Black, always touches the bottom edge flush */}
        <div className="lg:col-span-8 bg-black text-white dark:bg-white dark:text-neutral-900 rounded-t-[2rem] sm:rounded-t-[2.5rem] rounded-b-none p-6 sm:p-8 md:p-10 pb-32 sm:pb-36 md:pb-40 flex flex-col justify-between transition-colors duration-300 shadow-xl dark:shadow-none">
          
          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-neutral-800 dark:border-neutral-200">
            {footerNav.map((col) => (
              <div key={col.title} className="space-y-3 sm:space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  {col.title}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-neutral-900 transition-colors"
                      >
                        <span className="break-words">{link.name}</span>
                        {link.href.startsWith("http") && (
                          <ArrowUpRight
                            size={12}
                            className="shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Copyright Section: stacked on mobile, row on tablet/desktop */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-2 w-full sm:max-w-md">
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                Stay updated with daily wisdom.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-white dark:text-neutral-900">
                Join the Noor Al-Quran community.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="relative pt-2 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-full py-2.5 sm:py-3 pl-4 pr-24 sm:pr-28 text-xs sm:text-sm bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-300 text-white dark:text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-3.5 bottom-1 px-3 sm:px-4 rounded-full text-xs font-semibold bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1 shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check size={13} />
                      <span>Saved</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
            </div>

            {/* Copyright */}
            <div className="text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
              <p>© {currentYear} Noor Al-Quran. Free for the Ummah.</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}