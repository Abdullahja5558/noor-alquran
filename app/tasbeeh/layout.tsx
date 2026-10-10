import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Digital Tasbeeh Counter Online – Dhikr, Zikr & SubhanAllah Tracker",
  description:
    "Free online digital Tasbeeh counter with sound effects, haptic vibration, reset capability, custom targets, and daily Dhikr tracking (SubhanAllah, Alhamdulillah, Allahu Akbar).",
  keywords: [
    "Digital Tasbeeh online",
    "Tasbeeh counter web",
    "Dhikr counter",
    "Zikr counter online",
    "SubhanAllah counter",
    "Free online tasbih",
    "Noor Al-Quran Tasbeeh",
  ],
  alternates: {
    canonical: `${BASE_URL}/tasbeeh`,
  },
  openGraph: {
    title: "Digital Tasbeeh Counter Online – Noor Al-Quran",
    description: "Count your daily dhikr with our modern interactive digital Tasbeeh counter.",
    url: `${BASE_URL}/tasbeeh`,
    images: ["/favicon5.png"],
  },
};

export default function TasbeehLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Digital Tasbeeh Counter",
    "url": `${BASE_URL}/tasbeeh`,
    "applicationCategory": "UtilitiesApplication",
    "description": "Interactive online digital Tasbeeh counter for daily dhikr and remembrance of Allah.",
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
