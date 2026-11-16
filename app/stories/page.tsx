"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  X,
  Type,
  List,
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { STORIES_DATA, ProphetStory } from "@/data/storiesData";
import Lenis from "lenis";

// Book cover color matching themes for the directory cards
const PROPHET_BOX_COLORS: Record<string, string> = {
  adam: "bg-[#233122] border-[#374c35]/70",       // Emerald Paradise Green
  idris: "bg-[#182338] border-[#29395a]/70",      // Royal Indigo Blue
  nuh: "bg-[#241c22] border-[#3d2f39]/70",        // Deep Storm Maroon
  hud: "bg-[#1a2b2f] border-[#2c474d]/70",        // Slate Teal
  saleh: "bg-[#33211c] border-[#52352c]/70",      // Terracotta Clay
  ibrahim: "bg-[#141b2b] border-[#24304d]/70",    // Midnight Kaaba Navy
  lut: "bg-[#2b1822] border-[#472738]/70",        // Burgundy Oasis
  ismail: "bg-[#2f2519] border-[#4d3c29]/70",     // Desert Sand Ochre
  ishaq: "bg-[#2c201a] border-[#4a352b]/70",      // Earthy Brown
  yaqub: "bg-[#202920] border-[#334233]/70",      // Olive Sage
  yunus: "bg-[#122233] border-[#1e3854]/70",      // Deep Ocean Blue
};

// Subtle reader atmospheric backgrounds (Gentle and low-glow as requested)
const PROPHET_MODAL_THEMES: Record<string, { bg: string; radial: string }> = {
  adam: {
    bg: "bg-[#0b140d]",
    radial: "from-[#233122]/30 via-[#132014]/15 to-[#0b140d]",
  },
  idris: {
    bg: "bg-[#09101c]",
    radial: "from-[#182338]/30 via-[#101828]/15 to-[#09101c]",
  },
  nuh: {
    bg: "bg-[#120d13]",
    radial: "from-[#2b1b28]/30 via-[#181119]/15 to-[#120d13]",
  },
  hud: {
    bg: "bg-[#0b1416]",
    radial: "from-[#1a2b2f]/30 via-[#101d20]/15 to-[#0b1416]",
  },
  saleh: {
    bg: "bg-[#160d09]",
    radial: "from-[#33211c]/30 via-[#1e130f]/15 to-[#160d09]",
  },
  ibrahim: {
    bg: "bg-[#090d16]",
    radial: "from-[#141b2b]/30 via-[#0d131f]/15 to-[#090d16]",
  },
  lut: {
    bg: "bg-[#150a10]",
    radial: "from-[#2b1822]/30 via-[#1c0f17]/15 to-[#150a10]",
  },
  ismail: {
    bg: "bg-[#150f08]",
    radial: "from-[#2f2519]/30 via-[#1c140c]/15 to-[#150f08]",
  },
  ishaq: {
    bg: "bg-[#130d0a]",
    radial: "from-[#2c201a]/30 via-[#1a120e]/15 to-[#130d0a]",
  },
  yaqub: {
    bg: "bg-[#0e130e]",
    radial: "from-[#202920]/30 via-[#131913]/15 to-[#0e130e]",
  },
  yunus: {
    bg: "bg-[#08111a]",
    radial: "from-[#122233]/30 via-[#0c1825]/15 to-[#08111a]",
  },
};

// Professional Scroll Word Reveal Component
// Accurately tied to the modal's internal scroll container (containerRef)
// Words reveal naturally as each paragraph reaches view, not prematurely
function ScrollWordReveal({
  text,
  className,
  isRtl,
  containerRef,
}: {
  text: string;
  className?: string;
  isRtl?: boolean;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const words = useMemo(() => text.split(" ").filter(Boolean), [text]);

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        root: containerRef,
        once: true,
        margin: "-50px 0px -30px 0px",
        amount: 0.25,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.022,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
              filter: "blur(3px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.45,
                ease: [0.25, 1, 0.5, 1],
              },
            },
          }}
          className={`inline-block ${isRtl ? "ms-1" : "me-1.5"}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

function StoriesContent() {
  const searchParams = useSearchParams();
  const storyParam = searchParams.get("id");

  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "ur" | "ar">("en");
  const [activeStory, setActiveStory] = useState<ProphetStory>(STORIES_DATA[0]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Immersive Fullscreen Book Reader View
  const [isReaderOpen, setIsReaderOpen] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg" | "xl">("lg");
  const [isChapterDrawerOpen, setIsChapterDrawerOpen] = useState<boolean>(false);

  // Dedicated Ref for the Modal Scroll Container & Lenis instance
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalLenisRef = useRef<Lenis | null>(null);

  // Initialize dedicated Lenis instance on the reader modal for ultra-smooth inertia scrolling
  useEffect(() => {
    if (!isReaderOpen || !modalRef.current) return;

    const lenis = new Lenis({
      wrapper: modalRef.current,
      content: (modalRef.current.firstElementChild as HTMLElement) || modalRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    modalLenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      modalLenisRef.current = null;
    };
  }, [isReaderOpen]);

  const scrollToModalTop = useCallback(() => {
    if (modalLenisRef.current) {
      modalLenisRef.current.scrollTo(0, { duration: 1.0 });
    } else {
      modalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  // Background Scroll Lock when reader modal is open
  useEffect(() => {
    if (isReaderOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isReaderOpen]);

  // Open story from URL parameter if present
  useEffect(() => {
    if (storyParam) {
      const found = STORIES_DATA.find((s) => s.id === storyParam);
      if (found) {
        setActiveStory(found);
        setIsReaderOpen(true);
      }
    }
  }, [storyParam]);

  // Paragraphs for current language
  const storyParagraphs = useMemo(() => {
    if (selectedLanguage === "ur") return activeStory.fullStory.ur;
    if (selectedLanguage === "ar") return activeStory.fullStory.ar;
    return activeStory.fullStory.en;
  }, [selectedLanguage, activeStory]);

  // Lessons for current language
  const currentLessons = useMemo(() => {
    if (selectedLanguage === "ur") return activeStory.keyLessons.ur;
    if (selectedLanguage === "ar") return activeStory.keyLessons.ar;
    return activeStory.keyLessons.en;
  }, [selectedLanguage, activeStory]);

  // Modal theme matching the active Prophet's cover
  const modalTheme = useMemo(() => {
    return PROPHET_MODAL_THEMES[activeStory.id] || PROPHET_MODAL_THEMES.adam;
  }, [activeStory.id]);

  const openReader = useCallback((story: ProphetStory) => {
    setActiveStory(story);
    setIsReaderOpen(true);
  }, []);

  const closeReader = useCallback(() => {
    setIsReaderOpen(false);
    setIsChapterDrawerOpen(false);
  }, []);

  const cycleFontSize = () => {
    if (fontSize === "sm") setFontSize("base");
    else if (fontSize === "base") setFontSize("lg");
    else if (fontSize === "lg") setFontSize("xl");
    else setFontSize("sm");
  };

  // Navigate to previous or next Prophet with smooth scroll to top
  const currentIndex = STORIES_DATA.findIndex((s) => s.id === activeStory.id);
  const prevStory = currentIndex > 0 ? STORIES_DATA[currentIndex - 1] : STORIES_DATA[STORIES_DATA.length - 1];
  const nextStory = currentIndex < STORIES_DATA.length - 1 ? STORIES_DATA[currentIndex + 1] : STORIES_DATA[0];

  // Filtered stories list
  const filteredStories = STORIES_DATA.filter((story) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      story.nameEn.toLowerCase().includes(q) ||
      story.titleEn.toLowerCase().includes(q) ||
      story.nameAr.includes(q) ||
      story.nameUr.includes(q) ||
      story.order.toString() === q
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-[#080B10] text-slate-800 dark:text-neutral-200 transition-colors duration-300">
      <Navbar />

      {/* --- MAIN PAGE: STORIES DIRECTORY --- */}
      <main className="flex-1 pt-28 sm:pt-32 pb-36 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:text-[#155DFC] dark:hover:text-[#155DFC] transition-colors active:scale-95 shadow-sm dark:shadow-none"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Clean Centered Header (No Pill Badges) */}
        <section className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Stories of the{" "}
            <span className="bg-[#155DFC] text-white px-3.5 sm:px-4 py-0.5 rounded-full text-2xl sm:text-4xl md:text-5xl font-extrabold align-middle inline-block">
              Prophets
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 mt-3 font-normal leading-relaxed max-w-lg mx-auto">
            Authentic, detailed chronicles of the Prophets of Allah (Qisas al-Anbiya) from Adam (A.S.) to the final messengers, complete with divine reflections and moral wisdom.
          </p>
        </section>

        {/* Minimalist Search Bar: Only Bottom Line, No Box Border, No Shadow */}
        <div className="max-w-xl mx-auto mb-14 sm:mb-16">
          <div className="relative border-b border-slate-300 dark:border-white/20 pb-2 flex items-center transition-colors focus-within:border-[#155DFC] dark:focus-within:border-[#155DFC]">
            <Search
              size={18}
              className="text-slate-400 dark:text-neutral-500 mr-3 flex-shrink-0"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Prophet chronicle (e.g. Adam, Ibrahim, Yunus, Nuh)..."
              className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-neutral-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white ml-2 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Responsive Stories Grid: 2:3 Portrait Book Covers + Themed Boxes with Scroll Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
          {filteredStories.map((story) => {
            const cleanName = story.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim();
            const boxStyle = PROPHET_BOX_COLORS[story.id] || "bg-[#141b2b] border-[#24304d]";

            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: (story.order % 4) * 0.07, ease: "easeOut" }}
                onClick={() => openReader(story)}
                className="group cursor-pointer flex flex-col w-full"
              >
                {/* 2:3 Portrait Book Cover (No Outer Box, Full Image) */}
                <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-none border border-slate-200/50 dark:border-white/[0.08]">
                  <Image
                    src={story.image}
                    alt={`Prophet ${cleanName} (A.S.)`}
                    fill
                    quality={95}
                    priority={story.order <= 4}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />

                  {/* Light Reflection Sheen Sweep on Hover (Only on hover, resets on leave) */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-[150%] transition-all duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-10" />

                  {/* Center Glassmorphism Book Read Button on Hover */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="w-13 h-13 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-white/20 text-white flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform shadow-lg shadow-black/20">
                      <BookOpen size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Separate Themed Box (No Shadow, Matching Book Color, Glassmorphism) */}
                <div className={`mt-3 p-4 rounded-2xl ${boxStyle} backdrop-blur-md border shadow-none text-center transition-all flex flex-col justify-between flex-1`}>
                  <div>
                    {/* Name: "Prophet [Name] (A.S.)" */}
                    <h3 className="font-heading text-base font-bold text-white leading-snug">
                      Prophet {cleanName} (A.S.)
                    </h3>

                    {/* Concise Professional Story Paragraph */}
                    <p className="text-xs text-white/80 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                      {story.summaryEn}
                    </p>
                  </div>

                  {/* Centered "Read Story" Button */}
                  <div className="flex justify-center mt-3 pt-2.5 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openReader(story);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-sm transition-all border border-white/20 active:scale-95 cursor-pointer"
                    >
                      <BookOpen size={12} className="text-white" />
                      <span>Read Story</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      {/* --- IMMERSIVE FULLSCREEN BOOK READER MODAL --- */}
      {/* Centered, Grand, Seamless Flowing Typography with Precision Scroll-Linked Word Reveal */}
      <AnimatePresence>
        {isReaderOpen && (
          <motion.div
            ref={modalRef}
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 ${modalTheme.bg} backdrop-blur-2xl text-white flex flex-col overflow-y-auto overscroll-contain`}
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Soft, Understated Atmospheric Background (Glow Reduced as requested) */}
            <div className={`pointer-events-none fixed inset-0 bg-gradient-to-br ${modalTheme.radial} z-0 opacity-30`} />

            {/* Top Navigation Bar: Close (X) + Font Size + Chapter Selector + Language Toggle */}
            <header className="sticky top-0 z-30 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-xl bg-black/40">
              {/* Close Button */}
              <button
                onClick={closeReader}
                className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close Reader (Esc)"
              >
                <X size={18} />
              </button>

              {/* Controls Group */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Font Size Cycle (T) */}
                <button
                  onClick={cycleFontSize}
                  title="Adjust Reading Text Size"
                  className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-xs font-bold"
                >
                  <Type size={15} />
                </button>

                {/* Chapters Drawer Trigger */}
                <button
                  onClick={() => setIsChapterDrawerOpen(!isChapterDrawerOpen)}
                  title="All Prophets List"
                  className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer relative"
                >
                  <List size={16} />
                </button>

                {/* Multi-language Switch */}
                <div className="flex items-center bg-white/[0.08] rounded-full p-0.5 border border-white/[0.1]">
                  <button
                    onClick={() => setSelectedLanguage("en")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      selectedLanguage === "en"
                        ? "bg-[#155DFC] text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setSelectedLanguage("ur")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer font-urdu ${
                      selectedLanguage === "ur"
                        ? "bg-[#155DFC] text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    اردو
                  </button>
                  <button
                    onClick={() => setSelectedLanguage("ar")}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer font-arabic ${
                      selectedLanguage === "ar"
                        ? "bg-[#155DFC] text-white shadow-sm"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </header>

            {/* Quick Prophets Drawer Popup */}
            <AnimatePresence>
              {isChapterDrawerOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-16 right-4 sm:right-8 z-40 w-72 max-h-96 overflow-y-auto rounded-2xl bg-neutral-900/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-2"
                >
                  <div className="px-3 py-2 text-xs font-bold text-neutral-400 border-b border-white/[0.08] mb-1 flex items-center justify-between">
                    <span>Select Prophet Chronicle</span>
                    <span className="text-[10px] text-neutral-500">11 Prophets</span>
                  </div>
                  {STORIES_DATA.map((story) => (
                    <button
                      key={story.id}
                      onClick={() => {
                        setActiveStory(story);
                        setIsChapterDrawerOpen(false);
                        scrollToModalTop();
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                        activeStory.id === story.id
                          ? "bg-[#155DFC] text-white font-bold"
                          : "text-neutral-300 hover:bg-white/[0.06]"
                      }`}
                    >
                      <span>
                        {selectedLanguage === "ur"
                          ? story.nameUr
                          : selectedLanguage === "ar"
                          ? story.nameAr
                          : `Prophet ${story.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim()} (A.S.)`}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* MAIN CENTERED READING CONTAINER */}
            <div className="relative z-10 flex-1 max-w-3xl sm:max-w-4xl mx-auto w-full px-5 sm:px-8 md:px-12 py-10 sm:py-16">
              
              {/* HERO HEADER: Centered 2:3 Book Cover with Ambient Shadow */}
              <div className="text-center mb-10 sm:mb-14">
                <div className="relative aspect-[2/3] w-48 sm:w-56 md:w-64 mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 mb-6 bg-neutral-950">
                  <Image
                    src={activeStory.image}
                    alt={activeStory.nameEn}
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, 512px"
                    className="object-cover"
                  />
                  {/* Subtle inner frame */}
                  <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/15" />
                </div>

                {/* Prophet Full Title in Selected Language */}
                <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-2.5">
                  {selectedLanguage === "ur"
                    ? activeStory.nameUr
                    : selectedLanguage === "ar"
                    ? activeStory.nameAr
                    : `Prophet ${activeStory.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim()} (A.S.)`}
                </h1>

                {/* Subtitle strictly in selected language (English in EN, Urdu in UR, Arabic in AR) */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                  {selectedLanguage === "ur"
                    ? activeStory.titleUr
                    : selectedLanguage === "ar"
                    ? activeStory.titleAr
                    : activeStory.titleEn}
                </p>

                {/* Quranic Reference Tag (No Emojis) */}
                <div className="inline-flex items-center mt-3.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-white/80">
                  <span>{activeStory.quranMention}</span>
                </div>

                {/* Classical Islamic Ornamental Divider (Maintained as requested) */}
                <div className="flex items-center justify-center gap-3 my-8 sm:my-12 text-white/20">
                  <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-white/25" />
                  <span className="text-base sm:text-lg text-amber-400/80">۞</span>
                  <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-white/25" />
                </div>
              </div>

              {/* FULL DETAILED A-TO-Z CHRONICLE - Clean Flowing Paragraphs with Precision Scroll Reveal (No Boxes) */}
              <article
                className={`space-y-6 sm:space-y-8 text-slate-100 ${
                  selectedLanguage === "ur"
                    ? "text-right font-urdu leading-[2.5]"
                    : selectedLanguage === "ar"
                    ? "text-right font-arabic leading-[2.5]"
                    : "text-left font-serif leading-relaxed sm:leading-loose"
                } ${
                  fontSize === "sm"
                    ? "text-sm sm:text-base"
                    : fontSize === "base"
                    ? "text-base sm:text-lg"
                    : fontSize === "lg"
                    ? "text-lg sm:text-xl md:text-2xl"
                    : "text-xl sm:text-2xl md:text-3xl"
                }`}
              >
                {storyParagraphs.map((paragraph, idx) => (
                  <ScrollWordReveal
                    key={`${activeStory.id}-${selectedLanguage}-${idx}`}
                    text={paragraph}
                    className="text-white/95"
                    isRtl={selectedLanguage === "ur" || selectedLanguage === "ar"}
                    containerRef={modalRef}
                  />
                ))}
              </article>

              {/* DIVINE LESSONS & WISDOM (No Emojis) */}
              <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10">
                <div className="text-center mb-8">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    {selectedLanguage === "ur"
                      ? "قرآنی اسباق و حکمت"
                      : selectedLanguage === "ar"
                      ? "الدروس والعبر الربانية"
                      : "Divine Lessons & Spiritual Wisdom"}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60">
                    {selectedLanguage === "ur"
                      ? "قصص الانبیاء سے زندگی کے لیے ابدی رہنمائی"
                      : selectedLanguage === "ar"
                      ? "عظات خالدة للمؤمنين"
                      : "Timeless moral teachings from the Quranic chronicle"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  {currentLessons.map((lesson, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ root: modalRef, once: true, margin: "-30px", amount: 0.2 }}
                      transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-2 mb-2.5 text-amber-400/90">
                        <CheckCircle2 size={15} />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          {selectedLanguage === "ur"
                            ? `سبق نمبر ${idx + 1}`
                            : selectedLanguage === "ar"
                            ? `الدرس ${idx + 1}`
                            : `Lesson ${idx + 1}`}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm text-white/85 leading-relaxed ${
                          selectedLanguage === "ur"
                            ? "text-right font-urdu"
                            : selectedLanguage === "ar"
                            ? "text-right font-arabic"
                            : "text-left"
                        }`}
                      >
                        {lesson}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BOTTOM NAVIGATION: PREVIOUS & NEXT PROPHET (Reduced Glow Effect, Smooth Scroll to Top) */}
              <div className="mt-14 sm:mt-20 pt-8 border-t border-white/10 flex items-center justify-between gap-4">
                {/* Previous Prophet */}
                <button
                  onClick={() => {
                    setActiveStory(prevStory);
                    scrollToModalTop();
                  }}
                  className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-95 text-left"
                >
                  <ChevronLeft size={18} />
                  <div>
                    <span className="block text-[10px] text-white/50">Previous Chronicle</span>
                    <span className="block font-bold">Prophet {prevStory.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim()}</span>
                  </div>
                </button>

                {/* Next Prophet */}
                <button
                  onClick={() => {
                    setActiveStory(nextStory);
                    scrollToModalTop();
                  }}
                  className="flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 rounded-2xl bg-[#155DFC] hover:bg-blue-600 border border-blue-500/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-95 text-right shadow-none"
                >
                  <div>
                    <span className="block text-[10px] text-blue-200">Next Chronicle</span>
                    <span className="block font-bold">Prophet {nextStory.nameEn.replace(/\s*\(A\.S\.\)/i, "").trim()}</span>
                  </div>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* End of Chronicle Ornament */}
              <div className="text-center mt-12 sm:mt-16 text-xs text-white/40">
                <p>الحمد لله رب العالمين</p>
                <p className="mt-1 text-[11px] text-white/30">Noor Al-Quran • Stories of the Prophets</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function StoriesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] dark:bg-[#080B10]" />}>
      <StoriesContent />
    </Suspense>
  );
}
