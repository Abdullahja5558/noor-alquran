import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Seerah of Prophet Muhammad ﷺ – Life Timeline & Islamic History",
  description:
    "Explore the complete, inspiring life timeline of Prophet Muhammad ﷺ from noble birth, first revelation at Cave Hira, migration to Madinah, to the Farewell Pilgrimage.",
  keywords: [
    "Seerah of Prophet Muhammad",
    "Life of Prophet Muhammad",
    "Seerat un Nabi timeline",
    "Prophet Muhammad history",
    "Cave Hira revelation",
    "Hijrah to Madinah",
    "Islamic history",
    "Noor Al-Quran Seerah",
  ],
  alternates: {
    canonical: `${BASE_URL}/seerah`,
  },
  openGraph: {
    title: "Seerah of Prophet Muhammad ﷺ – Noor Al-Quran",
    description: "Detailed chronological timeline of the life and legacy of the Prophet Muhammad ﷺ.",
    url: `${BASE_URL}/seerah`,
    images: ["/favicon5.png"],
  },
};

export default function SeerahLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Seerah of Prophet Muhammad ﷺ – Life Timeline",
    "description": "Chronological history and pivotal milestones of the life of the Prophet Muhammad ﷺ.",
    "url": `${BASE_URL}/seerah`,
    "publisher": {
      "@type": "Organization",
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
