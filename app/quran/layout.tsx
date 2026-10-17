import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Holy Quran Index – All 114 Surahs with Urdu Translation",
  description:
    "Browse, search, and read all 114 Surahs of the Holy Quran with Arabic scripture, word-by-word Urdu and English translation, and MP3 audio tilawat.",
  alternates: {
    canonical: `${BASE_URL}/quran`,
  },
  openGraph: {
    title: "Holy Quran Index – All 114 Surahs with Urdu Translation",
    description:
      "Explore and read all 114 Surahs of the Quran with Urdu and English translation and high-quality audio recitation.",
    url: `${BASE_URL}/quran`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "All 114 Surahs of the Holy Quran – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holy Quran Index – All 114 Surahs with Urdu Translation",
    description:
      "Explore and read all 114 Surahs of the Quran with Urdu and English translation.",
    images: [`${BASE_URL}/opengraph-image`],
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
