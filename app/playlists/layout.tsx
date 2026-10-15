import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Quran Recitations & Curated Audio Playlists – Noor Al-Quran",
  description:
    "Listen to hand-picked Quran audio playlists, heart-touching Tilawat collections, morning and evening Athkar, Ruqyah Shariah, and emotional recitations by famous Qaris.",
  keywords: [
    "Quran playlists",
    "Quran audio collection",
    "Heart touching Quran recitation",
    "Ruqyah Shariah audio",
    "Quran Tilawat MP3",
    "Relaxing Quran audio",
    "Noor Al-Quran Playlists",
  ],
  alternates: {
    canonical: `${BASE_URL}/playlists`,
  },
  openGraph: {
    title: "Quran Recitations & Curated Audio Playlists – Noor Al-Quran",
    description: "Curated Quran playlists and emotional Tilawat by world-renowned Qaris.",
    url: `${BASE_URL}/playlists`,
    images: ["/favicon5.png"],
  },
};

export default function PlaylistsLayout({
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
            "name": "Quran Playlists",
            "item": `${BASE_URL}/playlists`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/playlists#collection`,
        "name": "Curated Quran Audio Playlists",
        "description": "Curated Quran recitations and playlists for tranquil sleep, deep focus, and emotional peace.",
        "url": `${BASE_URL}/playlists`,
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
