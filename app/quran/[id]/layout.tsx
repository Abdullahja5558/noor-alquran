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

  const title = `Surah ${meta.englishName} (${meta.name}) with Urdu Translation & MP3 Audio`;
  const description = `Read and listen to Surah ${meta.englishName} (${meta.name} - ${meta.englishNameTranslation}, ${meta.numberOfAyahs} Ayahs). Complete text in Arabic with word-by-word Urdu translation (اردو ترجمہ) and high quality MP3 tilawat by Mishary Rashid Alafasy, Sudais, and Abdul Basit on Noor Al-Quran.`;
  const url = `${BASE_URL}/quran/${meta.number}`;

  return {
    title,
    description,
    keywords: [
      `Surah ${meta.englishName}`,
      `Surah ${meta.englishName} with Urdu translation`,
      `Surah ${meta.englishName} Urdu tarjuma`,
      `Surah ${meta.englishName} MP3`,
      `Surah ${meta.englishName} audio recitation`,
      `Surah ${meta.englishName} English translation`,
      `سورۃ ${meta.name}`,
      `سورۃ ${meta.englishName} اردو ترجمہ`,
      `Surah ${meta.number}`,
      `Quran Chapter ${meta.number}`,
      `Read Surah ${meta.englishName} online`,
      `Quran Surah ${meta.number} tilawat`,
      "Noor Al-Quran",
      "Holy Quran online",
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
          alt: `Surah ${meta.englishName} (${meta.name}) - Noor Al-Quran`,
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
