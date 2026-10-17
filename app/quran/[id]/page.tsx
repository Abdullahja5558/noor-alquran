import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_SURAHS_META } from "@/components/surahMeta";
import { getSurahData } from "@/lib/quranData";
import SurahReaderClient from "@/components/quran/SurahReaderClient";

export async function generateStaticParams() {
  return ALL_SURAHS_META.map((s) => ({
    id: s.number.toString(),
  }));
}

export default async function SurahPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  const currentSNum = parseInt(resolved.id, 10);
  if (isNaN(currentSNum) || currentSNum < 1 || currentSNum > 114) {
    notFound();
  }

  const surahData = getSurahData(currentSNum);
  const { surahInfo, ayahs, prevSurah, nextSurah, relatedSurahs, intro } = surahData;

  return (
    <>
      {/* Interactive Audio Player & Reader (Client Component with preload="none") */}
      <SurahReaderClient initialData={surahData} />

      {/* Server-Rendered Semantic HTML for Crawlers & Accessibility (Complete Ayah Text in initial server HTML) */}
      <article
        id="surah-complete-scripture"
        className="sr-only"
        aria-label={`Surah ${surahInfo.englishName} Scripture and Translations`}
      >
        <header>
          <h2>
            About Surah {surahInfo.englishName} ({surahInfo.name})
          </h2>
          <p>{intro.paragraph}</p>
        </header>

        <nav aria-label="Surah Chapter Navigation">
          {prevSurah && (
            <Link href={`/quran/${prevSurah.number}`}>
              Previous Surah: Surah {prevSurah.englishName} ({prevSurah.name})
            </Link>
          )}
          <Link href="/quran">All 114 Holy Quran Surahs Index</Link>
          {nextSurah && (
            <Link href={`/quran/${nextSurah.number}`}>
              Next Surah: Surah {nextSurah.englishName} ({nextSurah.name})
            </Link>
          )}
        </nav>

        <section aria-label="Related Surahs">
          <h3>Related & Frequently Recited Surahs</h3>
          <ul>
            {relatedSurahs.map((related) => (
              <li key={related.number}>
                <Link href={`/quran/${related.number}`}>
                  Surah {related.englishName} ({related.name}) – {related.englishNameTranslation}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Full Arabic Text with Urdu and English Translations">
          <h3>
            Surah {surahInfo.englishName} Complete Ayahs (1 to {ayahs.length})
          </h3>
          <ol>
            {ayahs.map((ayah) => (
              <li key={ayah.numberInSurah} id={`ayah-${ayah.numberInSurah}`}>
                <strong>Ayah {ayah.numberInSurah}</strong>
                <p lang="ar" dir="rtl">
                  {ayah.text}
                </p>
                <p lang="ur" dir="rtl">
                  {ayah.urduText}
                </p>
                <p lang="en" dir="ltr">
                  {ayah.englishText}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </>
  );
}
