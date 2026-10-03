import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-arabic",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Noor Al-Quran – Read & Listen to Quran with Tafsir",
  description:
    "Noor Al-Quran: Read all 114 Surahs, listen to Quran recitations with translation, view Islamic calendar, prayer timings, Seerah, and daily duas.",
  keywords:
    "Quran, Surah, Tafsir, Quran Audio, Islamic Calendar, Prayer Times, Seerah, Daily Dua, Noor Al-Quran, Quran Recitations Online, Quran with Urdu Translation",
  icons: {
    icon: [
      {
        url: "/favicon5.png",
        href: "/favicon5.png",
      },
    ],
  },
  authors: [{ name: "Noor Al-Quran" }],
  openGraph: {
    type: "website",
    url: "https://www.noor.alquran.vercel.app",
    title: "Noor Al-Quran – Read & Listen to Quran with Tafsir",
    description:
      "Read, listen, and explore Quran with translations, Islamic calendar, prayer timings, Seerah, and daily duas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} ${notoUrdu.variable} antialiased min-h-screen selection:bg-blue-600/30 selection:text-blue-900 dark:selection:text-blue-200 bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 relative`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Ambient Dark Mode Background: Pure pitch black with dark blue corner glows */}
          <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#000000] transition-colors duration-300" />
            
            {/* Dark mode corner glow orbs (deep royal and navy blue in 4 corners) */}
            <div className="hidden dark:block absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-700/20 blur-[140px] pointer-events-none" />
            <div className="hidden dark:block absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-700/18 blur-[140px] pointer-events-none" />
            <div className="hidden dark:block absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-900/25 blur-[150px] pointer-events-none" />
            <div className="hidden dark:block absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/18 blur-[140px] pointer-events-none" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}