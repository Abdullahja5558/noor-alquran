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
    theme_color: "#2563eb",
    orientation: "portrait",
    categories: ["books", "education", "lifestyle"],
    lang: "en",
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
