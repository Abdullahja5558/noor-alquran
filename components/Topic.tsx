"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, Heart, Target, Sun, BookOpen, X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TopicItem {
  id: string;
  title: string;
  arabicTitle: string;
  icon: React.ReactNode;
  color: string;
  badge: string;
  ayahArabic: string;
  ayahUrdu: string;
  ayahEnglish: string;
  reference: string;
  surahLink: string;
}

const TOPICS: TopicItem[] = [
  {
    id: "patience",
    title: "Patience ",
    arabicTitle: "الصَّبْرُ",
    icon: <Anchor size={22} />,
    color: "from-blue-500/20 to-cyan-500/20",
    badge: "Strength in Hardship",
    ayahArabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    ayahUrdu: "اے ایمان والو! صبر اور نماز کے ذریعے مدد طلب کرو، بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
    ayahEnglish: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
    reference: "Surah Al-Baqarah (2:153)",
    surahLink: "/quran/2",
  },
  {
    id: "gratitude",
    title: "Gratitude",
    arabicTitle: "الشُّكْرُ",
    icon: <Heart size={22} />,
    color: "from-blue-500/20 to-indigo-500/20",
    badge: "Countless Blessings",
    ayahArabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    ayahUrdu: "اگر تم شکر ادا کرو گے تو میں تمہیں ضرور زیادہ دوں گا۔",
    ayahEnglish: "If you are grateful, I will surely increase you [in favor].",
    reference: "Surah Ibrahim (14:7)",
    surahLink: "/quran/14",
  },
  {
    id: "success",
    title: "True Success",
    arabicTitle: "الْفَلَاحُ",
    icon: <Target size={22} />,
    color: "from-amber-500/20 to-yellow-500/20",
    badge: "Victory of Soul",
    ayahArabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    ayahUrdu: "یقیناً وہ مومنین کامیاب ہو گئے جو اپنی نمازوں میں عاجزی اختیار کرتے ہیں۔",
    ayahEnglish: "Certainly will the believers have succeeded: They who are during their prayer humbly submissive.",
    reference: "Surah Al-Mu'minun (23:1-2)",
    surahLink: "/quran/23",
  },
  {
    id: "peace",
    title: "Inner Peace",
    arabicTitle: "السَّكِينَةُ",
    icon: <Sun size={22} />,
    color: "from-purple-500/20 to-indigo-500/20",
    badge: "Heart's Rest",
    ayahArabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    ayahUrdu: "سن لو! اللہ کی یاد ہی سے دلوں کو اطمینان اور سکون ملتا ہے۔",
    ayahEnglish: "Unquestionably, by the remembrance of Allah hearts are assured.",
    reference: "Surah Ar-Ra'd (13:28)",
    surahLink: "/quran/13",
  },
];

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState<TopicItem | null>(null);

  // Lock background scroll completely when popup is open
  useEffect(() => {
    if (selectedTopic) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedTopic(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [selectedTopic]);

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Divine Wisdom for{" "}
            <span className="inline-block whitespace-nowrap bg-[#155DFC] text-white px-3.5 sm:px-4.5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-1.5 shadow-sm">
              Every Emotion
            </span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-500 dark:text-neutral-400 max-w-md mx-auto font-normal">
            Comforting verses and spiritual remedies for every state of the heart.
          </p>
        </div>

        {/* Topics Grid with Responsive Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TOPICS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTopic(item)}
              className="group relative cursor-pointer"
            >
              <div className="relative h-full py-8 sm:py-10 px-5 sm:px-6 rounded-[2rem] sm:rounded-[2.2rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] hover:border-blue-500/70 dark:hover:border-blue-500/70 overflow-hidden flex flex-col items-center text-center transition-all duration-200 shadow-sm hover:shadow-md">
                {/* Icon Box with Border */}
                <div className="mb-5 sm:mb-6 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                  {item.icon}
                </div>

                <span className="font-arabic text-xl sm:text-2xl mb-1 text-blue-600 dark:text-blue-400 font-normal">
                  {item.arabicTitle}
                </span>

                <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>

                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
                  {item.badge}
                </span>

                <div className="mt-auto pt-3 sm:pt-4 flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>Read Verse</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed Position Modal - Body Scroll Locked */}
      <AnimatePresence>
        {selectedTopic && (
          <div 
            onClick={() => setSelectedTopic(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-[2.5rem] p-6 sm:p-8 md:p-10 bg-white/95 dark:bg-[#070709] shadow-[0_30px_90px_rgba(0,0,0,0.6)] border border-slate-200/80 dark:border-white/[0.09] backdrop-blur-2xl overscroll-contain text-slate-900 dark:text-white custom-scrollbar"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                aria-label="Close modal"
                className="absolute top-5 sm:top-7 right-5 sm:right-7 w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.06] border border-slate-200/60 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-3.5 mb-6 pr-10">
                <div className="w-12 h-12 rounded-2xl bg-[#155DFC]/10 border border-[#155DFC]/20 text-[#155DFC] flex items-center justify-center shrink-0">
                  {selectedTopic.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {selectedTopic.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-[11px] font-semibold text-[#155DFC] border border-slate-200/60 dark:border-white/10 mt-1">
                    {selectedTopic.reference}
                  </span>
                </div>
              </div>

              {/* Arabic Verse */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.07] text-center my-6 relative">
                <p className="font-arabic text-2xl sm:text-3xl leading-loose text-slate-900 dark:text-neutral-100">
                  {selectedTopic.ayahArabic}
                </p>
              </div>

              {/* Urdu Translation */}
              <div className="mb-4 p-4 sm:p-5 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05] text-right">
                <span className="text-[11px] font-bold text-[#155DFC] block mb-1">
                  اردو ترجمہ
                </span>
                <p className="font-urdu text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-neutral-200">
                  {selectedTopic.ayahUrdu}
                </p>
              </div>

              {/* English Translation */}
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05]">
                <span className="text-[11px] font-bold text-[#155DFC] block mb-1">
                  English Translation
                </span>
                <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-neutral-300 leading-relaxed font-normal">
                  &quot;{selectedTopic.ayahEnglish}&quot;
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 border-t border-slate-200/80 dark:border-white/[0.08]">
                <Link
                  href={selectedTopic.surahLink}
                  onClick={() => setSelectedTopic(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#155DFC] hover:bg-[#114ecc] text-white font-semibold text-xs sm:text-sm transition-all active:scale-95 shadow-md shadow-[#155DFC]/25 text-center"
                >
                  <BookOpen size={14} />
                  <span>Open Full Surah</span>
                </Link>

                <button
                  onClick={() => setSelectedTopic(null)}
                  className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer text-center"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}