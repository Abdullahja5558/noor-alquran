"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export default function SurahLoading() {
  return (
    <div className="h-screen h-[100dvh] w-full relative flex flex-col items-center justify-center overflow-hidden bg-black text-white select-none">
      {/* Pure Natural Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Pure Text Centered Loading (No Box) */}
      <div className="flex flex-col items-center text-center p-6 max-w-lg mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
        <h2 className="font-arabic text-2xl sm:text-4xl text-white font-normal leading-loose mb-2">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h2>

        <div className="flex items-center gap-2.5 text-blue-300 text-xs sm:text-sm font-bold tracking-widest uppercase mt-2">
          <Loader2 size={18} className="animate-spin text-white" />
          <span>Opening Surah...</span>
        </div>
      </div>
    </div>
  );
}
