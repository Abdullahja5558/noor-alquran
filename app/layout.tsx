import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noor Al-Quran – Read & Listen to Quran with Tafsir",
  description:
    "Noor Al-Quran: Read all 114 Surahs, listen to Quran recitations, view Islamic calendar, prayer timings, Seerah, and daily duas.",
  keywords:
    "Quran, Surah, Tafsir, Quran Audio, Islamic Calendar, Prayer Times, Seerah, Daily Dua, Noor Al-Quran, Quran Recitations, Quran Recitations Online, Quran Recitations in Urdu, Quran Recitations in Urdu Online, Quran with Tafsir, Islamic Resources Online for Quran, Quran with Tafsir in Urdu ",
   // Inside your metadata object
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
      "Read, listen, and explore Quran with tafsir, Islamic calendar, prayer timings, Seerah, and daily duas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
