import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "About Noor Al-Quran – Our Mission & Digital Islamic Platform",
  description:
    "Learn about Noor Al-Quran, our mission to spread Quranic wisdom freely worldwide, modern technological features, authentic sources, and community impact.",
  keywords: [
    "About Noor Al-Quran",
    "Islamic web app mission",
    "Holy Quran digital learning",
    "Authentic Quran recitation platform",
  ],
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Noor Al-Quran – Our Mission & Digital Islamic Platform",
    description: "Learn about the mission and technology behind Noor Al-Quran.",
    url: `${BASE_URL}/about`,
    images: ["/favicon5.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Noor Al-Quran",
    "url": `${BASE_URL}/about`,
    "description": "Learn about the mission and technology behind Noor Al-Quran.",
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
