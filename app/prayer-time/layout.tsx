import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Accurate Prayer Times, Azan & Qibla Direction | Namaz Timings Today",
  description:
    "Get accurate daily prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) for Karachi, Lahore, Islamabad, and global cities with countdown to next prayer, Azan audio alerts, and Qibla compass.",
  keywords: [
    "Prayer Times Pakistan",
    "Namaz Timings Today",
    "Fajr time Karachi",
    "Maghrib time Lahore",
    "Isha time Islamabad",
    "Azan time online",
    "Qibla direction compass",
    "Islamic prayer schedule",
    "Noor Al-Quran Prayer Times",
  ],
  alternates: {
    canonical: `${BASE_URL}/prayer-time`,
  },
  openGraph: {
    title: "Accurate Prayer Times, Azan & Qibla Direction | Noor Al-Quran",
    description:
      "Check daily Namaz timings, upcoming prayer countdown, and authentic Azan notifications for any city worldwide.",
    url: `${BASE_URL}/prayer-time`,
    images: ["/favicon5.png"],
  },
};

export default function PrayerTimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Noor Al-Quran Prayer Times & Qibla",
    "url": `${BASE_URL}/prayer-time`,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "description": "Real-time calculation of Islamic prayer times with Azan alerts and Qibla direction.",
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
