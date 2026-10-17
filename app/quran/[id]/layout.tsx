import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ALL_SURAHS_META, getSurahMetaByNumber } from "@/components/surahMeta";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export async function generateStaticParams() {
  return ALL_SURAHS_META.map((surah) => ({
    id: surah.number.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const surahNumber = parseInt(resolved.id, 10);
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }
  const meta = getSurahMetaByNumber(surahNumber);

  const title = `Surah ${meta.englishName} (${meta.name}) – Urdu Translation`;
  const description = `Read & listen to Surah ${meta.englishName} (${meta.englishNameTranslation}, ${meta.numberOfAyahs} ayahs) with Arabic Uthmani text, Urdu translation & MP3 recitation.`;
  const url = `${BASE_URL}/quran/${meta.number}`;
  const ogImage = `${url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "Noor Al-Quran",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Surah ${meta.englishName} (${meta.name}) – Noor Al-Quran`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SurahLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  const surahNumber = parseInt(resolved.id, 10);
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }
  const meta = getSurahMetaByNumber(surahNumber);
  const url = `${BASE_URL}/quran/${meta.number}`;
  const sNumPadded = String(meta.number).padStart(3, "0");
  const audioStreamUrl = `https://everyayah.com/data/Alafasy_128kbps/${sNumPadded}001.mp3`;

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
            "name": "Quran",
            "item": `${BASE_URL}/quran`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Surah ${meta.englishName}`,
            "item": url,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        "headline": `Surah ${meta.englishName} (${meta.name}) with Urdu Translation`,
        "description": `Read and listen to Surah ${meta.englishName} with Arabic text, Urdu translation, and MP3 Tilawat.`,
        "inLanguage": ["ar", "ur", "en"],
        "mainEntityOfPage": url,
        "author": {
          "@type": "Organization",
          "name": "Noor Al-Quran",
          "url": BASE_URL,
        },
        "publisher": {
          "@type": "Organization",
          "name": "Noor Al-Quran",
          "url": BASE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/opengraph-image`,
          },
        },
      },
      {
        "@type": "AudioObject",
        "name": `Surah ${meta.englishName} (${meta.name}) MP3 Tilawat`,
        "description": `High-quality recitation of Surah ${meta.englishName} with Urdu & English translation.`,
        "contentUrl": audioStreamUrl,
        "encodingFormat": "audio/mpeg",
        "inLanguage": ["ar", "ur", "en"],
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
