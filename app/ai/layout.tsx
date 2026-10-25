import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Noor AI – Intelligent Islamic AI Assistant & Quranic Companion | Noor Al-Quran",
  description:
    "Consult Noor AI for authentic Quranic Tafseer, daily Masnoon Duas, Seerah insights, Hadith references, and compassionate Islamic life guidance in English, Urdu, Roman Urdu, and Arabic.",
  keywords: [
    "Noor AI",
    "Islamic AI",
    "Islamic AI assistant",
    "Quran AI chatbot",
    "Islamic questions answer AI",
    "Quran Tafseer AI",
    "Masnoon Dua AI",
    "Roman Urdu Islamic AI",
    "Urdu Islamic AI",
    "Hadith search online",
    "Islamic scholar companion",
    "Surah meaning online",
    "Daily Islamic reminders",
    "Noor Al-Quran AI",
    "نور القرآن",
    "اسلامی مصنوعی ذہانت",
  ],
  authors: [{ name: "Noor Al-Quran Team" }],
  creator: "Noor Al-Quran",
  publisher: "Noor Al-Quran",
  alternates: {
    canonical: `${BASE_URL}/ai`,
    languages: {
      "en-US": `${BASE_URL}/ai`,
      "ur-PK": `${BASE_URL}/ai`,
      "ar-SA": `${BASE_URL}/ai`,
    },
  },
  openGraph: {
    title: "Noor AI – Intelligent Islamic AI Assistant & Quranic Companion",
    description:
      "Deeply knowledgeable, authentic, and compassionate Islamic AI companion for Quran, Duas, and Seerah. Ask questions in Urdu, Roman Urdu, English, and Arabic.",
    url: `${BASE_URL}/ai`,
    siteName: "Noor Al-Quran",
    locale: "en_US",
    alternateLocale: ["ur_PK", "ar_SA"],
    type: "website",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Noor AI – Intelligent Islamic AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor AI – Intelligent Islamic AI Assistant | Noor Al-Quran",
    description:
      "Authentic, compassionate Islamic AI companion for Quran, Duas, and spiritual life guidance in Urdu, Roman Urdu, and English.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Religion & Spirituality",
};

export default function NoorAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Structured Data for Google Rich Results (WebApplication & FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${BASE_URL}/ai#webapp`,
        name: "Noor AI – Intelligent Islamic Assistant",
        url: `${BASE_URL}/ai`,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "All",
        browserRequirements: "Requires modern web browser with JavaScript support",
        description:
          "Conversational Islamic AI assistant offering authentic Quranic guidance, Hadith references, Masnoon duas, and compassionate spiritual guidance.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: {
          "@type": "Organization",
          name: "Noor Al-Quran",
          url: BASE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/favicon5.png`,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/ai#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Noor AI?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Noor AI is an authentic, compassionate Islamic AI companion on Noor Al-Quran designed to provide Quranic guidance, Tafseer, Masnoon Duas, and Seerah insights in English, Urdu, Roman Urdu, and Arabic.",
            },
          },
          {
            "@type": "Question",
            name: "Can I ask Noor AI questions in Roman Urdu?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Noor AI natively understands and fluently communicates in Roman Urdu, Urdu script, English, and Arabic.",
            },
          },
          {
            "@type": "Question",
            name: "Does Noor AI provide citations for Quranic verses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Noor AI provides pure Arabic verses with proper Tashkeel followed by Surah name and Verse numbers, along with clear translations.",
            },
          },
        ],
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
