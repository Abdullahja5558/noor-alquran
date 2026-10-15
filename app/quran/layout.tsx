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
    "full quran in urdu",
    "read quran in urdu",
    "quran in urdu translation",
    "quran mp3",
    "quran in urdu mp3",
    "quran karim",
    "quran meaning in urdu",
    "quran online",
    "quran sharif",
    "quran with urdu translation",
    "quran with urdu",
    "quran with urdu pdf",
    "listen quran in urdu",
    "quran urdu",
    "read quran in urdu online",
    "quran english translation",
    "quran translation in urdu",
    "quran translation in english",
    "quran translation online",
    "quran urdu translation",
    "quran sharif in urdu",
    "quran sharif in urdu mp3",
    "quran sharif mp3 free download",
    "قرآن مجید کی تمام 114 سورتیں",
    "قرآن پاک کی فہرست",
    "قرآن مجید اردو ترجمہ کے ساتھ",
    "سورتوں کی فہرست",
    "تلاوت قرآن پاک mp3",
    "القرآن الكريم فهرس السور",
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
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Holy Quran Index",
            "item": `${BASE_URL}/quran`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/quran#collection`,
        "name": "All 114 Surahs of Holy Quran",
        "description": "Complete index of 114 Surahs of the Holy Quran with Arabic scripture, Urdu translation, and MP3 audio tilawat.",
        "url": `${BASE_URL}/quran`,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Noor Al-Quran",
          "url": BASE_URL,
        },
      },
    ],
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
