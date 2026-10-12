import { MetadataRoute } from "next";
import { ALL_SURAHS_META } from "@/components/surahMeta";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/quran`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/prayer-time`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dua`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/calendar`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tasbeeh`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/seerah`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/playlists`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Top searched Surahs globally (Yaseen, Rahman, Mulk, Baqarah, Kahf, Waqiah, Fatiha, Ikhlas, Falaq, Nas)
  const HIGH_PRIORITY_SURAHS = new Set([1, 2, 18, 36, 55, 56, 67, 112, 113, 114]);

  // Dynamic routes for all 114 Surahs
  const surahRoutes: MetadataRoute.Sitemap = ALL_SURAHS_META.map((surah) => ({
    url: `${BASE_URL}/quran/${surah.number}`,
    lastModified: now,
    changeFrequency: HIGH_PRIORITY_SURAHS.has(surah.number) ? "daily" : "weekly",
    priority: HIGH_PRIORITY_SURAHS.has(surah.number) ? 0.98 : 0.9,
  }));

  return [...staticRoutes, ...surahRoutes];
}
