import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Quran Audio Playlists – Heart Touching Tilawat MP3",
  description:
    "Listen to curated Quran recitations and audio playlists for tranquil sleep, deep focus, and emotional peace by world-renowned Qaris.",
  alternates: {
    canonical: `${BASE_URL}/playlists`,
  },
  openGraph: {
    title: "Quran Audio Playlists – Heart Touching Tilawat MP3",
    description: "Curated Quran playlists and emotional Tilawat by world-renowned Qaris.",
    url: `${BASE_URL}/playlists`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Quran Audio Playlists – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Audio Playlists – Heart Touching Tilawat MP3",
    description: "Curated Quran playlists and emotional Tilawat by world-renowned Qaris.",
    images: [`${BASE_URL}/opengraph-image`],
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
