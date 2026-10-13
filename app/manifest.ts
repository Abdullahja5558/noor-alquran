import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Noor Al-Quran – Holy Quran & Daily Prayer Guidance",
    short_name: "Noor Al-Quran",
    description:
      "Read Holy Quran online with 114 Surahs, authentic Urdu translation, audio recitations by top Qaris, daily Islamic duas, and accurate namaz prayer times.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#155DFC",
    orientation: "portrait",
    categories: ["books", "education", "lifestyle", "religion"],
    lang: "en",
    dir: "ltr",
    prefer_related_applications: false,
    shortcuts: [
      {
        name: "Holy Quran (All 114 Surahs)",
        short_name: "Al-Quran",
        description: "Read complete Holy Quran with Urdu translation",
        url: "/quran",
        icons: [{ src: "/favicon5.png", sizes: "192x192" }],
      },
      {
        name: "Surah Yaseen (سورۃ یٰس)",
        short_name: "Surah Yaseen",
        description: "Read Surah Yaseen with Urdu translation and MP3 audio",
        url: "/quran/36",
        icons: [{ src: "/favicon5.png", sizes: "192x192" }],
      },
      {
        name: "Prayer Times (نماز کے اوقات)",
        short_name: "Prayer Times",
        description: "Daily accurate Namaz prayer timings",
        url: "/prayer-time",
        icons: [{ src: "/favicon5.png", sizes: "192x192" }],
      },
    ],
    icons: [
      {
        src: "/favicon5.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon5.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
