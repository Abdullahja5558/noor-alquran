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
import { STORY_REFERENCES, SURAH_NAMES, GENERAL_SOURCES } from "@/data/storyReferences";

// Book cover color matching themes for the directory cards (Clean, harmonious, elegant dark palette)
const PROPHET_BOX_COLORS: Record<string, string> = {
  adam: "bg-[#283b27] border-[#486546]/70",       // Paradise Forest Green
  idris: "bg-[#1a2735] border-[#32465c]/70",      // Celestial Deep Slate Blue
  nuh: "bg-[#213038] border-[#3d5461]/70",        // Ocean Storm Slate
  hud: "bg-[#293a3a] border-[#4a6464]/70",        // Sandstorm Slate Teal
  saleh: "bg-[#413025] border-[#6f5443]/70",      // Terracotta Mountain Clay
  ibrahim: "bg-[#263343] border-[#455972]/70",    // Midnight Sanctuary Navy
  lut: "bg-[#3b2728] border-[#654648]/70",        // Deep Burgundy Oasis
  ismail: "bg-[#55361b] border-[#8e5e34]/70",     // Desert Amber Ochre
  ishaq: "bg-[#5b3121] border-[#97563d]/70",      // Canaan Russet Bronze
  yaqub: "bg-[#403e2c] border-[#6d6a4e]/70",      // Olive Sage Earth
  yusuf: "bg-[#240a18] border-[#421a2f]/70",      // Royal Egyptian Damson Plum
  ayyub: "bg-[#48261c] border-[#7a4535]/70",      // Patience Warm Rust
  shuayb: "bg-[#1f2327] border-[#3a4046]/70",     // Madyan Charcoal Slate
  musa: "bg-[#1b2c35] border-[#344e5c]/70",       // Parted Red Sea Deep Teal
  harun: "bg-[#271214] border-[#462629]/70",      // High Priesthood Crimson Mahogany
  dhulkifl: "bg-[#19232b] border-[#31404d]/70",   // Midnight Covenant Slate
  dawud: "bg-[#261934] border-[#45315b]/70",      // Royal Psalms Deep Purple / Violet
  sulayman: "bg-[#311518] border-[#562b2f]/70",   // Imperial Wine Red / Maroon
  ilyas: "bg-[#171a25] border-[#2e3243]/70",      // Mount Carmel Night Indigo
  alyasa: "bg-[#191e2a] border-[#31394b]/70",     // Jordan Valley Deep Navy
  yunus: "bg-[#1b2735] border-[#34465c]/70",      // Deep Abyssal Ocean Navy
  zakariyya: "bg-[#171d26] border-[#2e3745]/70",  // Sanctuary Mihrab Midnight
  yahya: "bg-[#201b21] border-[#3c343d]/70",      // Pure Ascetic Forest Dark
  isa: "bg-[#161624] border-[#2c2c42]/70",        // Celestial Midnight Indigo
  muhammad: "bg-[#221a11] border-[#3f3120]/70",   // Warm Antique Gold & Bronze (Clean dark harmony)
};

// Reader background = EXACT color sampled from each Prophet's book cover (solid, no glow)
// `light: true` means the cover is bright (golden), so text switches to dark for readability.
const PROPHET_MODAL_THEMES: Record<string, { bg: string; light?: boolean }> = {
  adam: { bg: "#2a3d28" },       // Paradise Forest Green
  idris: { bg: "#172531" },      // Deep Slate Blue
  nuh: { bg: "#212f37" },        // Ocean Storm Slate
  hud: { bg: "#293939" },        // Desert Slate Teal
  saleh: { bg: "#402f24" },      // Terracotta Clay
  ibrahim: { bg: "#273444" },    // Midnight Navy
  lut: { bg: "#352526" },        // Deep Burgundy
  ismail: { bg: "#6e4523" },     // Desert Amber
  ishaq: { bg: "#5e3322" },      // Russet Bronze
  yaqub: { bg: "#403e2c" },      // Olive Sage
  yusuf: { bg: "#220916" },      // Royal Plum
  ayyub: { bg: "#45241c" },      // Warm Rust
  shuayb: { bg: "#1c1f22" },     // Charcoal Slate
  musa: { bg: "#192a31" },       // Deep Sea Teal
  harun: { bg: "#231213" },      // Mahogany
  dhulkifl: { bg: "#182128" },   // Covenant Slate
  dawud: { bg: "#261a33" },      // Royal Purple
  sulayman: { bg: "#311418" },   // Imperial Wine Red
  ilyas: { bg: "#161925" },      // Night Indigo
  alyasa: { bg: "#171a25" },     // Deep Navy
  yunus: { bg: "#1a2632" },      // Abyssal Ocean Navy
  zakariyya: { bg: "#181a25" },  // Mihrab Midnight
  yahya: { bg: "#201b20" },      // Ascetic Dusk
  isa: { bg: "#13121f" },        // Celestial Indigo
  muhammad: { bg: "#fddc73", light: true }, // Golden (as requested)
};

// Helper: Ensure Prophet Muhammad always has (S.A.W.) and all others have (A.S.)
function getProphetEnglishTitle(story: ProphetStory): string {
  if (story.id === "muhammad") {
    return "Prophet Muhammad (S.A.W.)";
  }
  const clean = story.nameEn.replace(/\s*\((A\.S\.|S\.A\.W\.)\)/i, "").trim();
  return `Prophet ${clean} (A.S.)`;
}

// Scroll Word Reveal (original animation restored)
// Words fade up from a soft blur one-by-one as each paragraph scrolls into view.
function WordReveal({
  text,
  className,
  rootRef,
}: {
  text: string;
  className?: string;
  rootRef: React.RefObject<HTMLDivElement | null>;
}) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        root: rootRef,
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
        <React.Fragment key={idx}>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(3px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
              },
            }}
            className="inline-block"
          >
            {word}
          </motion.span>{" "}
        </React.Fragment>
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
  // Dedicated Ref for the Modal Scroll Container
  const modalRef = useRef<HTMLDivElement | null>(null);

  const scrollToModalTop = useCallback(() => {
    modalRef.current?.scrollTo({ top: 0, behavior: "smooth" });
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
            const titleDisplay = getProphetEnglishTitle(story);
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
                    alt={`${titleDisplay} - Stories of the Prophets (Qisas al-Anbiya) | Noor Al-Quran`}
                    fill
                    unoptimized
                    priority={story.order <= 4}
                    loading={story.order <= 4 ? "eager" : "lazy"}
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

                {/* Separate Themed Box (Clean, Elegant, Matching Book Cover) */}
                <div className={`mt-3 p-4 rounded-2xl ${boxStyle} backdrop-blur-md border shadow-none text-center transition-all flex flex-col justify-between flex-1`}>
                  <div>
                    {/* Name: "Prophet [Name] (A.S.)" or "Prophet Muhammad (S.A.W.)" */}
                    <h3 className="font-heading text-base font-bold text-white leading-snug">
                      {titleDisplay}
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
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm transition-all border border-white/20 bg-white/15 hover:bg-white/25 text-white active:scale-95 cursor-pointer"
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
      {/* Clean, Serene Dark Reading Atmosphere (Zero Harsh Glowing) */}
      <AnimatePresence>
        {isReaderOpen && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-lenis-prevent
            className="fixed inset-0 z-50 text-white flex flex-col overflow-y-auto overscroll-contain transition-colors duration-300"
            style={{ backgroundColor: modalTheme.bg, WebkitOverflowScrolling: "touch" }}
          >
            {/* Top Navigation Bar: Close (X) + Font Size + Chapter Selector + Language Toggle */}
            <header
              className={`sticky top-0 z-30 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/[0.12] backdrop-blur-xl backdrop-saturate-150 shadow-[0_4px_24px_rgba(0,0,0,0.12)] ${modalTheme.light ? "reader-light" : ""}`}
              style={{ backgroundColor: `${modalTheme.bg}99`, WebkitBackdropFilter: "blur(20px) saturate(150%)" }}
            >
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
                    <span className="text-[10px] text-neutral-500">{STORIES_DATA.length} Prophets</span>
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
                      <span className={selectedLanguage === "ur" ? "font-urdu text-sm" : selectedLanguage === "ar" ? "font-arabic text-sm" : ""}>
                        {selectedLanguage === "ur"
                          ? story.nameUr
                          : selectedLanguage === "ar"
                          ? story.nameAr
                          : getProphetEnglishTitle(story)}
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* MAIN CENTERED READING CONTAINER */}
            <div
              lang={selectedLanguage}
              dir={selectedLanguage === "ur" || selectedLanguage === "ar" ? "rtl" : "ltr"}
              className={`relative z-10 flex-1 max-w-3xl sm:max-w-4xl mx-auto w-full px-5 sm:px-8 md:px-12 py-10 sm:py-16 ${modalTheme.light ? "reader-light" : ""}`}
            >
              
              {/* HERO HEADER: Centered 2:3 Book Cover with Ambient Shadow */}
              <div className="text-center mb-10 sm:mb-14">
                <div className="relative aspect-[2/3] w-48 sm:w-56 md:w-64 mx-auto rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-white/15 mb-6 bg-neutral-950">
                  <Image
                    src={activeStory.image}
                    alt={`Prophet ${activeStory.nameEn} (${activeStory.nameUr} / ${activeStory.nameAr}) - Stories of the Prophets | Noor Al-Quran`}
                    fill
                    unoptimized
                    priority
                    loading="eager"
                    sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, 512px"
                    className="object-cover"
                  />
                  {/* Subtle inner frame */}
                  <div className="pointer-events-none absolute inset-2 rounded-xl border border-white/15" />
                </div>

                {/* Prophet Full Title in Selected Language */}
                <h1 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2.5 ${
                  selectedLanguage === "ur"
                    ? "font-urdu py-2 leading-[1.8] text-3xl sm:text-5xl"
                    : selectedLanguage === "ar"
                    ? "font-arabic py-1 leading-snug"
                    : "font-heading leading-tight"
                }`}>
                  {selectedLanguage === "ur"
                    ? activeStory.nameUr
                    : selectedLanguage === "ar"
                    ? activeStory.nameAr
                    : getProphetEnglishTitle(activeStory)}
                </h1>

                {/* Subtitle strictly in selected language (English in EN, Urdu in UR, Arabic in AR) */}
                <p className={`text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed ${
                  selectedLanguage === "ur"
                    ? "font-urdu py-1 text-base sm:text-xl leading-[2.2]"
                    : selectedLanguage === "ar"
                    ? "font-arabic text-base sm:text-xl leading-loose"
                    : ""
                }`}>
                  {selectedLanguage === "ur"
                    ? activeStory.titleUr
                    : selectedLanguage === "ar"
                    ? activeStory.titleAr
                    : activeStory.titleEn}
                </p>

                {/* Quranic Reference Tag */}
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
                  <WordReveal
                    key={`${activeStory.id}-${selectedLanguage}-${idx}`}
                    text={paragraph}
                    className="text-white/95"
                    rootRef={modalRef}
                  />
                ))}
              </article>

              {/* DIVINE LESSONS & WISDOM (No Emojis) */}
              <div className="mt-14 sm:mt-18 pt-10 border-t border-white/10">
                <div className="text-center mb-8">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 ${
                    selectedLanguage === "ur"
                      ? "font-urdu py-1 text-2xl sm:text-4xl"
                      : selectedLanguage === "ar"
                      ? "font-arabic py-1"
                      : "font-heading"
                  }`}>
                    {selectedLanguage === "ur"
                      ? "قرآنی اسباق و حکمت"
                      : selectedLanguage === "ar"
                      ? "الدروس والعبر الربانية"
                      : "Divine Lessons & Spiritual Wisdom"}
                  </h3>
                  <p className={`text-xs sm:text-sm text-white/60 ${
                    selectedLanguage === "ur"
                      ? "font-urdu py-1 text-sm sm:text-base leading-[2.2]"
                      : selectedLanguage === "ar"
                      ? "font-arabic text-sm leading-loose"
                      : ""
                  }`}>
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
                      className="p-5 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex flex-col justify-start"
                    >
                      <div className="flex items-center gap-2 mb-2.5 text-amber-400/90">
                        <CheckCircle2 size={15} />
                        <span className={`text-xs font-semibold uppercase tracking-wider ${
                          selectedLanguage === "ur" ? "font-urdu text-xs" : selectedLanguage === "ar" ? "font-arabic text-xs" : ""
                        }`}>
                          {selectedLanguage === "ur"
                            ? `سبق نمبر ${idx + 1}`
                            : selectedLanguage === "ar"
                            ? `الدرس ${idx + 1}`
                            : `Lesson ${idx + 1}`}
                        </span>
                      </div>
                      <p
                        className={`text-xs sm:text-sm text-white/85 ${
                          selectedLanguage === "ur"
                            ? "text-right font-urdu leading-[2.4] text-sm sm:text-base"
                            : selectedLanguage === "ar"
                            ? "text-right font-arabic leading-loose text-sm sm:text-base"
                            : "text-left leading-relaxed font-normal"
                        }`}
                      >
                        {lesson}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* AUTHENTIC SOURCES: Quran ayat + Sahih hadith references */}
              <section
                aria-label="Quranic references and hadith sources"
                className="mt-14 sm:mt-18 pt-10 border-t border-white/10"
              >
                <div className="text-center mb-7">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 ${
                    selectedLanguage === "ur"
                      ? "font-urdu py-1 text-2xl sm:text-4xl"
                      : selectedLanguage === "ar"
                      ? "font-arabic py-1"
                      : "font-heading"
                  }`}>
                    {selectedLanguage === "ur"
                      ? "حوالہ جات (قرآن و حدیث)"
                      : selectedLanguage === "ar"
                      ? "المراجع من القرآن والسنة"
                      : "References from Quran & Hadith"}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {(STORY_REFERENCES[activeStory.id] || []).map((ref, idx) => {
                    const lang = selectedLanguage;
                    const label =
                      ref.kind === "quran"
                        ? `${lang === "ur" ? "سورۃ " : lang === "ar" ? "سورة " : "Surah "}${SURAH_NAMES[ref.surah]?.[lang] ?? ref.surah} ${ref.surah}:${ref.ayat}`
                        : ref.source[lang];
                    return (
                      <li
                        key={`${activeStory.id}-ref-${idx}`}
                        className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 p-4 rounded-2xl bg-white/[0.06] border border-white/[0.1]"
                      >
                        {ref.kind === "quran" ? (
                          <a
                            href={`/quran/${ref.surah}`}
                            target="_blank"
                            rel="noopener"
                            className={`shrink-0 inline-flex items-center gap-1.5 text-amber-400/90 font-semibold hover:underline ${
                              lang === "ur" ? "font-urdu text-sm leading-[2]" : lang === "ar" ? "font-arabic text-sm" : "text-xs sm:text-sm"
                            }`}
                          >
                            <BookOpen size={14} className="shrink-0" />
                            <span dir={lang === "en" ? "ltr" : "rtl"}>{label}</span>
                          </a>
                        ) : (
                          <span
                            className={`shrink-0 inline-flex items-center gap-1.5 text-amber-400/90 font-semibold ${
                              lang === "ur" ? "font-urdu text-sm leading-[2]" : lang === "ar" ? "font-arabic text-sm" : "text-xs sm:text-sm"
                            }`}
                          >
                            <CheckCircle2 size={14} className="shrink-0" />
                            <span>{label}</span>
                          </span>
                        )}
                        <span
                          className={`text-white/85 ${
                            lang === "ur"
                              ? "font-urdu text-sm sm:text-base leading-[2.2]"
                              : lang === "ar"
                              ? "font-arabic text-sm sm:text-base leading-loose"
                              : "text-xs sm:text-sm leading-relaxed"
                          }`}
                        >
                          {ref.topic[lang]}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className={`mt-5 text-white/60 text-center ${
                  selectedLanguage === "ur"
                    ? "font-urdu text-xs sm:text-sm leading-[2.2]"
                    : selectedLanguage === "ar"
                    ? "font-arabic text-xs sm:text-sm leading-loose"
                    : "text-[11px] sm:text-xs leading-relaxed"
                }`}>
                  {GENERAL_SOURCES[selectedLanguage]}
                </p>
              </section>

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
                    <span className={`block font-bold ${
                      selectedLanguage === "ur" ? "font-urdu text-sm" : selectedLanguage === "ar" ? "font-arabic text-sm" : ""
                    }`}>
                      {selectedLanguage === "ur"
                        ? prevStory.nameUr
                        : selectedLanguage === "ar"
                        ? prevStory.nameAr
                        : getProphetEnglishTitle(prevStory)}
                    </span>
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
                    <span className={`block font-bold ${
                      selectedLanguage === "ur" ? "font-urdu text-sm" : selectedLanguage === "ar" ? "font-arabic text-sm" : ""
                    }`}>
                      {selectedLanguage === "ur"
                        ? nextStory.nameUr
                        : selectedLanguage === "ar"
                        ? nextStory.nameAr
                        : getProphetEnglishTitle(nextStory)}
                    </span>
                  </div>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* End of Chronicle Ornament */}
              <div className="text-center mt-12 sm:mt-16 text-xs text-white/40">
                <p className="font-arabic text-sm sm:text-base">الحمد لله رب العالمين</p>
                <p className="mt-1 text-[11px] text-white/30">Noor Al-Quran • Stories of the Prophets</p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Semantic SEO & Accessibility Section for Search Engines */}
      <section className="sr-only" aria-label="Stories of the Prophets Overview and Knowledge Base">
        <h2>About Stories of the Prophets (Qisas al-Anbiya - قصص الأنبياء - 25 Ambiya)</h2>
        <p>
          Welcome to the comprehensive, authentic chronicles of all 25 Prophets of Allah mentioned in the Holy Quran on Noor Al-Quran:
          Prophet Adam, Prophet Idris, Prophet Nuh, Prophet Hud, Prophet Saleh, Prophet Ibrahim, Prophet Lut, Prophet Ismail,
          Prophet Ishaq, Prophet Yaqub, Prophet Yusuf, Prophet Ayyub, Prophet Shu&apos;ayb, Prophet Musa, Prophet Harun,
          Prophet Dhul-Kifl, Prophet Dawud, Prophet Sulayman, Prophet Ilyas, Prophet Al-Yasa, Prophet Yunus, Prophet Zakariyya,
          Prophet Yahya, Prophet Isa, and Prophet Muhammad (peace and blessings be upon them all).
          Read authentic chronicles with Quranic citations in English, Urdu (اردو), and Arabic (العربية).
        </p>
        <div>
          <h3>Frequently Asked Questions about Qisas al-Anbiya</h3>
          <article>
            <h4>How many Prophets are mentioned by name in the Holy Quran?</h4>
            <p>
              There are 25 Prophets of Allah mentioned explicitly by name in the Holy Quran, beginning with Prophet Adam (A.S.) and concluding with the Seal of the Prophets, Prophet Muhammad (S.A.W.).
            </p>
          </article>
          <article>
            <h4>Who was Prophet Idris (A.S.)?</h4>
            <p>
              Prophet Idris (A.S.) is an exalted prophet praised in Surah Maryam (&apos;And We raised him to an exalted station&apos;).
              He was the first human to write with a reed pen, weave cloth and sew garments, and study celestial astronomy in contemplation of the Creator.
            </p>
          </article>
          <article>
            <h4>Who was the first prophet created by Allah?</h4>
            <p>
              Prophet Adam (A.S.) was the first human created from dust and clay and appointed as Allah&apos;s first vicegerent (Khalifah) on Earth.
            </p>
          </article>
          <article>
            <h4>What was the supplication of Prophet Yunus (A.S.) in the whale?</h4>
            <p>
              Prophet Yunus (A.S.) prayed: &apos;La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen&apos; (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers).
            </p>
          </article>
          <article>
            <h4>What was the miracle of Prophet Musa (A.S.) at the Red Sea?</h4>
            <p>
              By Allah&apos;s divine command, Prophet Musa (A.S.) struck the sea with his staff, parting the waters into towering walls like great mountains so the Children of Israel could cross safely.
            </p>
          </article>
        </div>
      </section>

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
