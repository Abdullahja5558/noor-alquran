import { Metadata } from "next";
import { notFound } from "next/navigation";
import PrayerTimesClient from "@/components/prayer/PrayerTimesClient";
import { CITIES_DATA, CITIES_LIST } from "@/lib/prayerTimes";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export async function generateStaticParams() {
  return CITIES_LIST.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const city = CITIES_DATA[resolved.city.toLowerCase()];
  if (!city) {
    notFound();
  }

  const title = `Prayer Times in ${city.name} Today – Namaz Timings & Azan`;
  const description = `Accurate Namaz prayer times today in ${city.name}, ${city.country} (Fajr, Dhuhr, Asr, Maghrib, Isha) with live countdown, Azan audio, and Qibla compass.`;
  const url = `${BASE_URL}/prayer-time/${city.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Noor Al-Quran",
      images: [
        {
          url: `${BASE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `Prayer Times in ${city.name} – Noor Al-Quran`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/opengraph-image`],
    },
  };
}

export default async function CityPrayerTimePage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const resolved = await params;
  const city = CITIES_DATA[resolved.city.toLowerCase()];
  if (!city) {
    notFound();
  }

  const url = `${BASE_URL}/prayer-time/${city.slug}`;

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
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${city.name} Prayer Times`,
            "item": url,
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        "name": `Prayer Times in ${city.name}`,
        "url": url,
        "applicationCategory": "UtilitiesApplication",
        "description": `Accurate Islamic prayer times in ${city.name}, ${city.country} calculated via ${city.methodName}.`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrayerTimesClient initialCitySlug={city.slug} isCityPage={true} />
    </>
  );
}
