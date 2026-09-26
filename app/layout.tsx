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
        className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} ${notoUrdu.variable} antialiased min-h-screen selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-200 bg-[#f8fafc] dark:bg-[#030712] text-slate-900 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}