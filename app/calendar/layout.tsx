import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Islamic Hijri Calendar 1446 – Today Date & Holy Events",
  description:
    "Islamic Hijri calendar with Gregorian conversion, today's Islamic date, Ramadan timings, Eid-ul-Fitr, Eid-ul-Adha, and holy Islamic events.",
  alternates: {
    canonical: `${BASE_URL}/calendar`,
  },
  openGraph: {
    title: "Islamic Hijri Calendar 1446 – Today Date & Holy Events",
    description: "Check today's Hijri date, Islamic months, and upcoming holy Islamic events.",
    url: `${BASE_URL}/calendar`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Islamic Hijri Calendar – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Hijri Calendar 1446 – Today Date & Holy Events",
    description: "Check today's Hijri date, Islamic months, and holy Islamic events.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function CalendarLayout({
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
            "name": "Islamic Hijri Calendar",
            "item": `${BASE_URL}/calendar`,
          },
        ],
      },
      {
        "@type": "ItemPage",
        "@id": `${BASE_URL}/calendar#page`,
        "name": "Islamic Hijri Calendar",
        "url": `${BASE_URL}/calendar`,
        "description": "Accurate Islamic Hijri calendar with Gregorian conversion and holy events.",
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
