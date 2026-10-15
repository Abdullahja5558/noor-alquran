import { MetadataRoute } from "next";
import { ALL_SURAHS_META } from "@/components/surahMeta";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable release date prevents misleading search engines with fluctuating timestamps
  const contentDate = new Date("2025-02-15T00:00:00.000Z");

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: contentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/quran`,
      lastModified: contentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/prayer-time`,
      lastModified: contentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dua`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/calendar`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tasbeeh`,
      lastModified: contentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/seerah`,
      lastModified: contentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/playlists`,
      lastModified: contentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: contentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Top searched Surahs globally (Yaseen, Rahman, Mulk, Baqarah, Kahf, Waqiah, Fatiha, Ikhlas, Falaq, Nas)
  const HIGH_PRIORITY_SURAHS = new Set([1, 2, 18, 36, 55, 56, 67, 112, 113, 114]);

  // Dynamic routes for all 114 Surahs
  const surahRoutes: MetadataRoute.Sitemap = ALL_SURAHS_META.map((surah) => ({
    url: `${BASE_URL}/quran/${surah.number}`,
    lastModified: contentDate,
    changeFrequency: HIGH_PRIORITY_SURAHS.has(surah.number) ? "weekly" : "monthly",
    priority: HIGH_PRIORITY_SURAHS.has(surah.number) ? 0.98 : 0.9,
  }));

  return [...staticRoutes, ...surahRoutes];
}
