import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "About Noor Al-Quran – Mission & Islamic Digital Platform",
  description:
    "Learn about the mission, authentic Quranic sources, and technology powering Noor Al-Quran, a free ad-free Islamic sanctuary for the global Ummah.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Noor Al-Quran – Mission & Islamic Digital Platform",
    description: "Learn about the mission and technology behind Noor Al-Quran.",
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "About Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Noor Al-Quran – Mission & Islamic Digital Platform",
    description: "Learn about the mission and technology behind Noor Al-Quran.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function AboutLayout({
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
            "name": "About Noor Al-Quran",
            "item": `${BASE_URL}/about`,
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": `${BASE_URL}/about#page`,
        "name": "About Noor Al-Quran",
        "url": `${BASE_URL}/about`,
        "description": "Learn about the mission and technology behind Noor Al-Quran.",
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
