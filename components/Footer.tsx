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
    <footer className="w-full px-3 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-0 mt-auto">
      {/* 
        Inverted High-Contrast Monolithic Footer:
        - Light Mode: Pure Black Background, White Text
        - Dark Mode: Pure White Background, Black Text
        - Top Corners: Full Rounded Gol (rounded-t-[2.5rem] to rounded-t-[4rem])
        - Bottom: Flush with zero bottom padding/margin
      */}
      <div className="w-full bg-black text-white dark:bg-white dark:text-black rounded-t-[2.5rem] sm:rounded-t-[3.5rem] md:rounded-t-[4rem] rounded-b-none pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28 px-6 sm:px-10 md:px-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Top Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-neutral-800 dark:border-neutral-200">
            {/* Left Brand Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-2xl bg-white text-black dark:bg-black dark:text-white flex items-center justify-center font-bold shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <BookOpen size={18} />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight">
                    Noor<span className="font-light opacity-80">Quran</span>
                  </span>
                  <span className="font-arabic text-sm text-neutral-400 dark:text-neutral-500 ml-1.5">
                    نور القرآن الكريم
                  </span>
                </div>
              </Link>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-600 font-normal leading-relaxed max-w-md">
                An open-source Islamic sanctuary providing authentic Quranic recitations, accurate translations, prayer timings, and spiritual guidance without distractions.
              </p>

              {/* Minimal Newsletter / Daily Verse Subscription */}
              <form onSubmit={handleSubscribe} className="relative max-w-sm pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email for daily reflections"
                  className="w-full rounded-full py-3 pl-4 sm:pl-5 pr-28 text-xs sm:text-sm bg-neutral-900 dark:bg-neutral-100 border border-neutral-800 dark:border-neutral-300 text-white dark:text-black placeholder:text-neutral-500 focus:outline-none focus:border-neutral-600 dark:focus:border-neutral-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-3.5 bottom-1.5 px-4 sm:px-5 rounded-full text-xs font-semibold bg-white text-black dark:bg-black dark:text-white hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-1"
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

            {/* Right Nav Links Columns (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {footerNav.map((col) => (
                <div key={col.title} className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    {col.title}
                  </h3>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black transition-colors"
                        >
                          <span>{link.name}</span>
                          {link.href.startsWith("http") && (
                            <ArrowUpRight
                              size={12}
                              className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-neutral-400 dark:text-neutral-500 text-center sm:text-left">
            <div>
              <p>
                © {currentYear} Noor Al-Quran. Open & free for the global Muslim Ummah.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/Abdullahja5558"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <Github size={16} />
              </a>

              <a
                href="https://www.instagram.com/mian.abdullah.9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}