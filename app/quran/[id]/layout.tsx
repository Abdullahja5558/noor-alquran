import { Metadata } from "next";
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
  const meta = getSurahMetaByNumber(surahNumber);

  const title = `Surah ${meta.englishName} (${meta.name}) - Read & Listen with Urdu Translation`;
  const description = `Read, listen to Surah ${meta.englishName} (${meta.englishNameTranslation} - ${meta.numberOfAyahs} Ayahs, ${meta.revelationType}). High quality audio recitations by Mishary Rashid Alafasy, Abdul Basit, and Sudais with word-by-word Urdu and English translation.`;
  const url = `${BASE_URL}/quran/${meta.number}`;

  return {
    title,
    description,
    keywords: [
      `Surah ${meta.englishName}`,
      `Surah ${meta.englishName} Urdu translation`,
      `Surah ${meta.englishName} MP3`,
      `Surah ${meta.englishName} audio`,
      `Surah ${meta.englishName} English translation`,
      meta.name,
      `Surah ${meta.number}`,
      `Read Surah ${meta.englishName} online`,
      `Quran Surah ${meta.number}`,
      "Noor Al-Quran",
    ],
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
          url: "/favicon5.png",
          width: 512,
          height: 512,
          alt: `Surah ${meta.englishName} - Noor Al-Quran`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/favicon5.png"],
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
  const meta = getSurahMetaByNumber(surahNumber);
  const url = `${BASE_URL}/quran/${meta.number}`;

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
        "@type": "Chapter",
        "@id": `${url}#chapter`,
        "name": `Surah ${meta.englishName} (${meta.name})`,
        "alternateName": meta.name,
        "description": `Surah ${meta.englishName} (${meta.englishNameTranslation}) consists of ${meta.numberOfAyahs} verses revealed in ${meta.revelationType}.`,
        "position": meta.number,
        "isPartOf": {
          "@type": "Book",
          "name": "Holy Quran",
          "inLanguage": ["ar", "ur", "en"],
        },
      },
      {
        "@type": "AudioObject",
        "name": `Surah ${meta.englishName} Tilawat & Audio Recitation`,
        "description": `Listen to full recitation of Surah ${meta.englishName} with Urdu & English translation.`,
        "contentUrl": url,
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
