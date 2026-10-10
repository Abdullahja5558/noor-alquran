import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Islamic Hijri Calendar (1446 AH) – Islamic Dates & Upcoming Events",
  description:
    "Explore the complete Islamic Hijri calendar with Gregorian date conversion, today's Islamic date, Ramadan countdown, Eid-ul-Fitr, Eid-ul-Adha, and Islamic holidays.",
  keywords: [
    "Islamic Calendar 1446",
    "Hijri Calendar online",
    "Today Islamic Date",
    "Ramadan 2026 date",
    "Eid ul Fitr date",
    "Eid ul Adha date",
    "Muharram date",
    "Islamic holidays calendar",
  ],
  alternates: {
    canonical: `${BASE_URL}/calendar`,
  },
  openGraph: {
    title: "Islamic Hijri Calendar (1446 AH) – Noor Al-Quran",
    description: "Check today's Hijri date, Islamic months, and upcoming holy Islamic events.",
    url: `${BASE_URL}/calendar`,
    images: ["/favicon5.png"],
  },
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Islamic Hijri Calendar",
    "url": `${BASE_URL}/calendar`,
    "description": "Accurate Islamic Hijri calendar with Gregorian conversion and holy events.",
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
