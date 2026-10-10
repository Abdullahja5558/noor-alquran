import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Daily Islamic Duas & Supplications with Urdu & English Translation",
  description:
    "Explore authentic daily Islamic Duas (Masnoon Duain) categorized by protection, success, peace of mind, forgiveness, and guidance with Arabic audio, Urdu tarjuma, and English translation.",
  keywords: [
    "Islamic Duas",
    "Masnoon Duain",
    "Daily Duas with Urdu translation",
    "Dua for protection",
    "Dua for forgiveness",
    "Quranic Duas",
    "Rabana Duas",
    "Morning and evening duas",
    "Noor Al-Quran Duas",
  ],
  alternates: {
    canonical: `${BASE_URL}/dua`,
  },
  openGraph: {
    title: "Daily Islamic Duas & Supplications – Noor Al-Quran",
    description:
      "Collection of authentic daily Islamic Duas with Arabic text, Urdu tarjuma, English translation, and audio voice playback.",
    url: `${BASE_URL}/dua`,
    images: ["/favicon5.png"],
  },
};

export default function DuaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Daily Islamic Duas & Supplications",
    "description": "Authentic Masnoon Duain and Quranic Duas with Urdu & English translation.",
    "url": `${BASE_URL}/dua`,
    "breadcrumb": {
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
          "name": "Islamic Duas",
          "item": `${BASE_URL}/dua`,
        },
      ],
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
