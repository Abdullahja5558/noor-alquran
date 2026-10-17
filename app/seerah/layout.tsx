import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Seerah of Prophet Muhammad ﷺ – Timeline & Milestones",
  description:
    "Chronological life timeline and pivotal events of Prophet Muhammad ﷺ from noble birth and Cave Hira revelation to migration and the Farewell Pilgrimage.",
  alternates: {
    canonical: `${BASE_URL}/seerah`,
  },
  openGraph: {
    title: "Seerah of Prophet Muhammad ﷺ – Timeline & Milestones",
    description: "Detailed chronological timeline of the life and legacy of the Prophet Muhammad ﷺ.",
    url: `${BASE_URL}/seerah`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Seerah of Prophet Muhammad – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seerah of Prophet Muhammad ﷺ – Timeline & Milestones",
    description: "Chronological history of the life of Prophet Muhammad ﷺ.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function SeerahLayout({
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
            "name": "Prophetic Seerah",
            "item": `${BASE_URL}/seerah`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${BASE_URL}/seerah#article`,
        "headline": "Seerah of Prophet Muhammad ﷺ – Life Timeline",
        "description": "Chronological history and pivotal milestones of the life of the Prophet Muhammad ﷺ.",
        "url": `${BASE_URL}/seerah`,
        "publisher": {
          "@type": "Organization",
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
