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
    title: "Patience (Sabr)",
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
    title: "Gratitude (Shukr)",
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
    title: "True Success (Falah)",
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
    title: "Inner Peace (Sakina)",
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
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase px-4 sm:px-5 py-2 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-blue-700 dark:text-blue-300 shadow-sm">
            Divine Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mt-4 sm:mt-6 tracking-tight text-slate-900 dark:text-white">
            Wisdom for every <br />
            <span className="text-blue-600 dark:text-blue-400 italic">
              human emotion.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Click on any emotion to discover comforting Quranic verses and timeless spiritual remedies.
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
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 bg-white dark:bg-[#07090e] shadow-2xl border border-slate-200 dark:border-[#141c2b] overscroll-contain"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                aria-label="Close modal"
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-6 pr-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  {selectedTopic.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    {selectedTopic.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                    {selectedTopic.reference}
                  </span>
                </div>
              </div>

              {/* Arabic Verse */}
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-[#0c111a]/60 border border-slate-200 dark:border-[#141c2b] text-center mb-5 sm:mb-6">
                <p className="font-arabic text-xl sm:text-2xl md:text-3xl leading-loose text-slate-900 dark:text-white">
                  {selectedTopic.ayahArabic}
                </p>
              </div>

              {/* Urdu Translation */}
              <div className="mb-4 text-right">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  اردو ترجمہ
                </span>
                <p className="font-urdu text-lg sm:text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                  {selectedTopic.ayahUrdu}
                </p>
              </div>

              {/* English Translation */}
              <div className="mb-6 sm:mb-8">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                  English Meaning
                </span>
                <p className="text-xs sm:text-sm md:text-base italic text-slate-700 dark:text-slate-300 leading-relaxed">
                  &quot;{selectedTopic.ayahEnglish}&quot;
                </p>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-5 sm:pt-6 border-t border-slate-200 dark:border-[#141c2b]">
                <Link
                  href={selectedTopic.surahLink}
                  onClick={() => setSelectedTopic(null)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/30 text-center"
                >
                  <BookOpen size={15} />
                  <span>Open Full Surah</span>
                </Link>

                <button
                  onClick={() => setSelectedTopic(null)}
                  className="px-6 py-3 rounded-full bg-slate-100 dark:bg-[#0c111a] border border-slate-200 dark:border-[#1a2538] text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider hover:bg-blue-500/10 transition-all cursor-pointer text-center"
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