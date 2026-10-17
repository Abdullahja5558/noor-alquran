import fs from "fs";
import path from "path";
import { ALL_SURAHS_META, getSurahMetaByNumber, SurahStaticMeta } from "@/components/surahMeta";

export interface Ayah {
  numberInSurah: number;
  text: string;
  urduText: string;
  englishText: string;
  audio: string;
  audioUrdu: string;
  audioEnglish: string;
}

export interface SurahDetailData {
  surahInfo: {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
  };
  ayahs: Ayah[];
  prevSurah: SurahStaticMeta | null;
  nextSurah: SurahStaticMeta | null;
  relatedSurahs: SurahStaticMeta[];
  intro: {
    place: string;
    meaning: string;
    versesCount: number;
    paragraph: string;
  };
}

const EVERYAYAH_DEFAULT_RECITER = "Alafasy_128kbps";

const getEveryAyahUrl = (surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `https://everyayah.com/data/${EVERYAYAH_DEFAULT_RECITER}/${s}${a}.mp3`;
};

const getUrduAudioUrl = (surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `https://everyayah.com/data/translations/urdu_shamshad_ali_khan_46kbps/${s}${a}.mp3`;
};

const getEnglishAudioUrl = (surahNum: number, ayahNum: number) => {
  const s = String(surahNum).padStart(3, "0");
  const a = String(ayahNum).padStart(3, "0");
  return `https://everyayah.com/data/translations/Ibrahim_Walk_192kbps_Quran_with_English/${s}${a}.mp3`;
};

export function getSurahData(surahNumber: number): SurahDetailData {
  if (isNaN(surahNumber) || surahNumber < 1 || surahNumber > 114) {
    throw new Error(`Invalid Surah number: ${surahNumber}`);
  }

  const meta = getSurahMetaByNumber(surahNumber);
  const filePath = path.join(process.cwd(), "data", "surahs", `${surahNumber}.json`);

  let dataJson: any = null;
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      dataJson = JSON.parse(content);
    } catch (e) {
      console.warn(`Failed reading cached JSON for Surah ${surahNumber}:`, e);
    }
  }

  let ayahs: Ayah[] = [];
  let surahInfo = {
    number: meta.number,
    name: meta.name,
    englishName: meta.englishName,
    englishNameTranslation: meta.englishNameTranslation,
    numberOfAyahs: meta.numberOfAyahs,
    revelationType: meta.revelationType,
  };

  if (dataJson && dataJson.data && dataJson.data[0]) {
    const rawArabic = dataJson.data[0];
    const rawUrdu = dataJson.data[1];
    const rawEnglish = dataJson.data[2];

    surahInfo = {
      number: rawArabic.number || meta.number,
      name: rawArabic.name || meta.name,
      englishName: rawArabic.englishName || meta.englishName,
      englishNameTranslation: rawArabic.englishNameTranslation || meta.englishNameTranslation,
      numberOfAyahs: rawArabic.numberOfAyahs || meta.numberOfAyahs,
      revelationType: rawArabic.revelationType || meta.revelationType,
    };

    ayahs = rawArabic.ayahs.map((a: { numberInSurah: number; text: string }, i: number) => ({
      numberInSurah: a.numberInSurah,
      text: a.text,
      urduText: rawUrdu?.ayahs?.[i]?.text || "",
      englishText: rawEnglish?.ayahs?.[i]?.text || "",
      audio: getEveryAyahUrl(meta.number, a.numberInSurah),
      audioUrdu: getUrduAudioUrl(meta.number, a.numberInSurah),
      audioEnglish: getEnglishAudioUrl(meta.number, a.numberInSurah),
    }));
  }

  const prevSurah = surahNumber > 1 ? getSurahMetaByNumber(surahNumber - 1) : null;
  const nextSurah = surahNumber < 114 ? getSurahMetaByNumber(surahNumber + 1) : null;

  // Curate 6 highly relevant related surahs (top read Surahs + adjacent)
  const priorityIds = [1, 2, 18, 36, 55, 56, 67, 112, 113, 114];
  const candidateIds = [
    ...(prevSurah ? [prevSurah.number] : []),
    ...(nextSurah ? [nextSurah.number] : []),
    ...priorityIds,
  ].filter((id) => id !== surahNumber);

  const uniqueIds = Array.from(new Set(candidateIds)).slice(0, 6);
  const relatedSurahs = uniqueIds.map((id) => getSurahMetaByNumber(id));

  const revelationPlace = meta.revelationType === "Meccan" ? "Makkah" : "Madinah";
  const introParagraph = `Surah ${meta.englishName} (Arabic: ${meta.name}, meaning "${meta.englishNameTranslation}") is Chapter ${meta.number} of the Holy Quran, containing ${meta.numberOfAyahs} verses (ayahs). It was revealed in ${revelationPlace} (${meta.revelationType} surah). Explore the complete Arabic scripture with authentic verse-by-verse Urdu translation (قرآن مجید مع اردو ترجمہ), English meaning, and crystal-clear audio tilawat recitation.`;

  return {
    surahInfo,
    ayahs,
    prevSurah,
    nextSurah,
    relatedSurahs,
    intro: {
      place: revelationPlace,
      meaning: meta.englishNameTranslation,
      versesCount: meta.numberOfAyahs,
      paragraph: introParagraph,
    },
  };
}
