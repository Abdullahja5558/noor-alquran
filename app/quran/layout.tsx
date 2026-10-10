import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "All 114 Surahs – Holy Quran Index with Audio & Translation",
  description:
    "Browse, search, and read all 114 Surahs of the Holy Quran with Arabic text, word-by-word Urdu and English translation, and audio recitations by Mishary Alafasy, Sudais, and Abdul Basit.",
  keywords: [
    "Quran Surahs list",
    "All 114 Surahs",
    "Quran Index",
    "Read Quran online",
    "Surah list with Urdu translation",
    "Holy Quran MP3",
    "Meccan Surahs",
    "Medinan Surahs",
  ],
  alternates: {
    canonical: `${BASE_URL}/quran`,
  },
  openGraph: {
    title: "All 114 Surahs – Holy Quran Index with Audio & Translation",
    description:
      "Explore and read all 114 Surahs of the Quran with Urdu and English translation and high-quality audio recitation.",
    url: `${BASE_URL}/quran`,
    images: ["/favicon5.png"],
  },
};

export default function QuranIndexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All 114 Surahs of Holy Quran",
    "description": "Complete list of 114 Surahs of the Holy Quran with translations and audio recitations.",
    "url": `${BASE_URL}/quran`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Noor Al-Quran",
      "url": BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
