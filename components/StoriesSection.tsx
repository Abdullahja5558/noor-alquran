"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import { STORIES_DATA, ProphetStory } from "@/data/storiesData";

const PROPHET_BOX_COLORS: Record<string, string> = {
  adam: "bg-[#233122] border-[#374c35]/70",
  idris: "bg-[#182338] border-[#29395a]/70",
  nuh: "bg-[#241c22] border-[#3d2f39]/70",
  hud: "bg-[#1a2b2f] border-[#2c474d]/70",
  saleh: "bg-[#33211c] border-[#52352c]/70",
  ibrahim: "bg-[#141b2b] border-[#24304d]/70",
  lut: "bg-[#2b1822] border-[#472738]/70",
  ismail: "bg-[#2f2519] border-[#4d3c29]/70",
  ishaq: "bg-[#2c201a] border-[#4a352b]/70",
  yaqub: "bg-[#202920] border-[#334233]/70",
  yunus: "bg-[#122233] border-[#1e3854]/70",
};

export default function StoriesSection() {
  const router = useRouter();

  // Show only 4 featured stories on the homepage
  const featuredStories = STORIES_DATA.slice(0, 4);

  const handleCardClick = (storyId: string) => {
    router.push(`/stories?id=${storyId}`);
  };

  return (
    <section id="stories" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Centered Section Header (No Pill Badge) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Stories of the{" "}
          <span className="bg-[#155DFC] text-white px-3.5 sm:px-4 py-0.5 rounded-full text-xl sm:text-3xl md:text-4xl font-extrabold align-middle inline-block">
            Prophets
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 mt-2.5 font-normal max-w-md mx-auto leading-relaxed">
          Authentic Quranic chronicles and timeless wisdom from Qisas al-Anbiya for daily contemplation.
        </p>
      </div>

      {/* Responsive 4-Column Grid (No Horizontal Scroll, Clean Layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {featuredStories.map((story: ProphetStory, idx: number) => {
          const cleanName = story.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim();
          const boxStyle = PROPHET_BOX_COLORS[story.id] || "bg-[#141b2b] border-[#24304d]";

          return (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              onClick={() => handleCardClick(story.id)}
              className="group cursor-pointer flex flex-col w-full"
            >
              {/* 2:3 Portrait Book Cover (No Hover-Up, No Extra Shadow) */}
              <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-none border border-slate-200/60 dark:border-white/[0.08]">
                <Image
                  src={story.image}
                  alt={`Prophet ${cleanName} (A.S.)`}
                  fill
                  quality={95}
                  priority={idx < 2}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Light Reflection Sheen Sweep: Only on hover, disappears immediately on mouse leave */}
                <div className="pointer-events-none absolute inset-0 -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-[150%] transition-all duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10" />

                {/* Navbar-style Glassmorphism Read Button on Hover */}
                <div className="absolute inset-0 bg-black/15 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/20 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-black/20">
                    <BookOpen size={22} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Separate Glassmorphism Box matching Book Color (#233122 for Adam, etc., No Shadow) */}
              <div className={`mt-3 p-4 rounded-2xl ${boxStyle} backdrop-blur-md border shadow-none text-center transition-all flex flex-col justify-between flex-1`}>
                <div>
                  <h3 className="font-heading text-base font-bold text-white leading-snug">
                    Prophet {cleanName} (A.S.)
                  </h3>

                  {/* Concise Professional Story Paragraph */}
                  <p className="text-xs text-white/80 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                    {story.summaryEn}
                  </p>
                </div>

                {/* Centered Read Story CTA */}
                <div className="flex justify-center mt-3 pt-2.5 border-t border-white/10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 group-hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-sm transition-all border border-white/20">
                    <BookOpen size={12} className="text-white" />
                    <span>Read Story</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Centered "View All Stories" Button */}
      <div className="text-center mt-12 sm:mt-14">
        <Link
          href="/stories"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#155DFC] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all active:scale-95 group"
        >
          <span>View All Stories</span>
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
