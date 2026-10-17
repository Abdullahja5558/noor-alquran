import { Metadata } from "next";
import { DUA_DATA } from "@/components/duaData";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Daily Islamic Duas & Masnoon Duain with Urdu Translation",
  description:
    "Authentic daily Islamic Duas and Azkar with Arabic audio, Urdu translation, and English meaning for protection, forgiveness, and guidance.",
  alternates: {
    canonical: `${BASE_URL}/dua`,
  },
  openGraph: {
    title: "Daily Islamic Duas & Masnoon Duain with Urdu Translation",
    description:
      "Collection of authentic daily Islamic Duas with Arabic text, Urdu tarjuma, English meaning, and audio voice playback.",
    url: `${BASE_URL}/dua`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Daily Islamic Duas – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Islamic Duas & Masnoon Duain with Urdu Translation",
    description:
      "Authentic daily Islamic Duas with Arabic text, Urdu tarjuma, and English translation.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function DuaLayout({
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
            "name": "Daily Duas",
            "item": `${BASE_URL}/dua`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/dua#list`,
        "name": "Daily Islamic Duas & Masnoon Duain",
        "description": "Authentic Masnoon Duain and Quranic Duas with Urdu & English translation.",
        "numberOfItems": DUA_DATA.length,
        "itemListElement": DUA_DATA.map((dua, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": dua.title,
          "description": `${dua.english} (${dua.urdu}) - Reference: ${dua.ref}`,
        })),
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
