"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollectionsSection from "@/components/CollectionsSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PlaylistsPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      <Navbar />

      <main className="pt-28 sm:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
          >
            <ArrowLeft size={15} />
            <span>Return Home</span>
          </Link>
        </div>

        <CollectionsSection />
      </main>

      <Footer />
    </div>
  );
}
