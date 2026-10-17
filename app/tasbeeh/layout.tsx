import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Digital Tasbeeh Counter Online – Dhikr & Zikr Tracker",
  description:
    "Free online digital Tasbeeh counter with vibration, reset feature, custom targets, and daily Dhikr tracking for SubhanAllah, Alhamdulillah, and Astaghfar.",
  alternates: {
    canonical: `${BASE_URL}/tasbeeh`,
  },
  openGraph: {
    title: "Digital Tasbeeh Counter Online – Dhikr & Zikr Tracker",
    description: "Count your daily dhikr with our modern interactive digital Tasbeeh counter.",
    url: `${BASE_URL}/tasbeeh`,
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Digital Tasbeeh Counter – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Tasbeeh Counter Online – Dhikr & Zikr Tracker",
    description: "Free online digital Tasbeeh counter with custom targets and sound effects.",
    images: [`${BASE_URL}/opengraph-image`],
  },
};

export default function TasbeehLayout({
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
            "name": "Digital Tasbeeh",
            "item": `${BASE_URL}/tasbeeh`,
          },
        ],
      },
      {
        "@type": "WebApplication",
        "@id": `${BASE_URL}/tasbeeh#app`,
        "name": "Digital Tasbeeh Counter",
        "url": `${BASE_URL}/tasbeeh`,
        "applicationCategory": "UtilitiesApplication",
        "description": "Interactive online digital Tasbeeh counter for daily dhikr and remembrance of Allah.",
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
