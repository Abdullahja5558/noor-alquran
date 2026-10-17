import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Namaz Prayer Times Today – Accurate Azan & Salah Schedule",
  description:
    "Accurate daily Islamic prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) for Lahore, Karachi, Islamabad, and global cities with Azan audio alerts.",
  alternates: {
    canonical: `${BASE_URL}/prayer-time`,
  },
  openGraph: {
    title: "Namaz Prayer Times Today – Accurate Azan & Salah Schedule",
    description:
      "Check daily Namaz timings, upcoming prayer countdown, and authentic Azan notifications for Lahore, Karachi, and any city worldwide.",
    url: `${BASE_URL}/prayer-time`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Prayer Times & Azan – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namaz Prayer Times Today – Accurate Azan & Salah Schedule",
    description:
      "Check daily Namaz timings, upcoming prayer countdown, and authentic Azan notifications.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function PrayerTimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            "name": "Prayer Times",
            "item": `${BASE_URL}/prayer-time`,
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": `${BASE_URL}/prayer-time#app`,
        "name": "Noor Al-Quran Prayer Times & Qibla",
        "url": `${BASE_URL}/prayer-time`,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "description": "Real-time calculation of Islamic prayer times with Azan alerts and Qibla direction.",
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
