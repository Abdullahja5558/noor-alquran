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
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    notFound();
  }
  const meta = getSurahMetaByNumber(surahNumber);
  const prevMeta = surahNumber > 1 ? getSurahMetaByNumber(surahNumber - 1) : null;
  const nextMeta = surahNumber < 114 ? getSurahMetaByNumber(surahNumber + 1) : null;
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
        "name": `Surah ${meta.englishName} (${meta.name}) Tilawat & Audio Recitation`,
        "description": `Listen to authentic high-quality recitation of Surah ${meta.englishName} with Urdu & English translation.`,
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
      {/* Search Engine & Accessibility Server-Side Semantic Navigation */}
      <nav aria-label="Surah Breadcrumb & Internal Navigation" className="sr-only">
        <a href={`${BASE_URL}/`}>Home</a>
        <a href={`${BASE_URL}/quran`}>All 114 Holy Quran Surahs</a>
        {prevMeta && (
          <a href={`${BASE_URL}/quran/${prevMeta.number}`}>
            Previous Surah: Surah {prevMeta.englishName} ({prevMeta.name})
          </a>
        )}
        {nextMeta && (
          <a href={`${BASE_URL}/quran/${nextMeta.number}`}>
            Next Surah: Surah {nextMeta.englishName} ({nextMeta.name})
          </a>
        )}
      </nav>
      <section className="sr-only" aria-label="Surah Details">
        <h2>About Surah {meta.englishName} ({meta.name})</h2>
        <p>
          Surah {meta.englishName} ({meta.englishNameTranslation}) is Chapter {meta.number} of the Holy Quran, containing {meta.numberOfAyahs} verses.
          It is a {meta.revelationType} Surah. Read the complete Arabic scripture with word-by-word Urdu translation (اردو ترجمہ), English meaning, and crystal-clear audio tilawat by Mishary Rashid Alafasy, Sudais, and Abdul Basit.
        </p>
      </section>
      {children}
    </>
  );
}
