import { Metadata } from "next";
import { STORIES_DATA } from "@/data/storiesData";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Stories of the Prophets (Qisas al-Anbiya) – Authentic Quranic Chronicles & Wisdom",
  description:
    "Explore authentic A-to-Z chronicles of the Prophets of Allah (Qisas al-Anbiya / قصص الأنبياء) in English, Urdu (اردو), and Arabic. Detailed historical narratives of Prophet Adam, Idris, Nuh, Hud, Saleh, Ibrahim, Lut, Ismail, Ishaq, Yaqub, and Yunus (A.S.) with divine lessons and Quranic verses.",
  keywords: [
    "Stories of the Prophets",
    "Qisas al-Anbiya",
    "Qisas ul Anbiya",
    "Prophet Idris story",
    "Hazrat Idris AS story",
    "Prophet Adam story",
    "Hazrat Adam AS story",
    "Prophet Ibrahim fire miracle",
    "Prophet Yunus whale supplication",
    "Prophet Nuh ark flood",
    "Prophet Ismail sacrifice Mina",
    "Prophet Saleh she-camel Thamud",
    "Prophet Hud Ad wind storm",
    "Prophet Yaqub Sabrun Jameel",
    "Prophet Lut Sodom history",
    "Prophet Ishaq Canaan",
    "Islamic history in English",
    "Qisas al Anbiya in Urdu",
    "قصص الأنبياء",
    "قصص القرآن",
    "انبیاء کرام کے واقعات",
    "Life of Prophets in Islam",
    "Prophets mentioned in Quran",
    "Noor Al-Quran stories",
  ],
  alternates: {
    canonical: `${BASE_URL}/stories`,
    languages: {
      "en-US": `${BASE_URL}/stories`,
      "ur-PK": `${BASE_URL}/stories`,
      "ar-SA": `${BASE_URL}/stories`,
      "x-default": `${BASE_URL}/stories`,
    },
  },
  openGraph: {
    title: "Stories of the Prophets (Qisas al-Anbiya) – Noor Al-Quran",
    description:
      "Authentic, comprehensive chronicles of the Prophets of Allah in English, Urdu, and Arabic with divine reflections, moral wisdom, and authentic Quranic citations.",
    url: `${BASE_URL}/stories`,
    siteName: "Noor Al-Quran",
    locale: "en_US",
    alternateLocale: ["ur_PK", "ar_SA"],
    type: "website",
    images: [
      {
        url: `${BASE_URL}/stories/covers/idris-v2.webp`,
        width: 1200,
        height: 1800,
        alt: "Prophet Idris (A.S.) – Stories of the Prophets | Noor Al-Quran",
      },
      {
        url: `${BASE_URL}/stories/covers/adam-v2.webp`,
        width: 1200,
        height: 1800,
        alt: "Prophet Adam (A.S.) – Stories of the Prophets | Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories of the Prophets (Qisas al-Anbiya) – Noor Al-Quran",
    description:
      "Explore comprehensive A-to-Z authentic chronicles of the Prophets of Allah in English, Urdu, and Arabic.",
    images: [`${BASE_URL}/stories/covers/idris-v2.webp`],
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
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE_URL}/stories#webpage`,
        url: `${BASE_URL}/stories`,
        name: "Stories of the Prophets (Qisas al-Anbiya) – Noor Al-Quran",
        description:
          "Authentic Islamic chronicles and moral wisdom of the Prophets of Allah from Adam (A.S.) to the final messengers with multilingual text in English, Urdu, and Arabic.",
        publisher: {
          "@type": "Organization",
          name: "Noor Al-Quran",
          url: BASE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/favicon5.png`,
          },
        },
        inLanguage: ["en", "ur", "ar"],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "p"],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Stories of the Prophets",
            item: `${BASE_URL}/stories`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Prophets of Allah (Qisas al-Anbiya)",
        description: "Complete chronicles and moral teachings of the Prophets of Allah.",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: STORIES_DATA.length,
        itemListElement: STORIES_DATA.map((story, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "Article",
            "@id": `${BASE_URL}/stories?id=${story.id}#article`,
            url: `${BASE_URL}/stories?id=${story.id}`,
            name: `Prophet ${story.nameEn} (${story.nameUr} / ${story.nameAr})`,
            headline: `${story.nameEn}: ${story.titleEn}`,
            description: story.summaryEn,
            image: `${BASE_URL}${story.image}`,
            inLanguage: ["en", "ur", "ar"],
            author: {
              "@type": "Organization",
              name: "Noor Al-Quran",
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
            mainEntityOfPage: `${BASE_URL}/stories?id=${story.id}`,
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the Stories of the Prophets (Qisas al-Anbiya)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Stories of the Prophets (Qisas al-Anbiya / قصص الأنبياء) are authentic Quranic narratives and historical chronicles detailing the lives, divine missions, miracles, tribulations, and moral teachings of the noble messengers chosen by Allah to guide humanity to monotheism (Tawheed).",
            },
          },
          {
            "@type": "Question",
            name: "Who was Prophet Idris (A.S.) and what were his notable achievements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prophet Idris (A.S.) was an exalted prophet commended by Allah in Surah Maryam ('And We raised him to an exalted station'). Classical Islamic tradition records that he was the first human to write with a reed pen, weave cloth and sew garments, and map celestial astronomy in contemplation of the Creator.",
            },
          },
          {
            "@type": "Question",
            name: "Who was the first Prophet in Islam?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prophet Adam (A.S.) is the first human being, the Father of Mankind, and the very first Prophet of Allah, fashioned directly from clay and endowed with divine intellect as Earth's first vicegerent (Khalifah).",
            },
          },
          {
            "@type": "Question",
            name: "In what languages are the Prophet stories available on Noor Al-Quran?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All Prophet stories on Noor Al-Quran are provided in three languages: English, Urdu (اردو), and Arabic (العربية), with authentic Quranic citations and key spiritual lessons.",
            },
          },
          {
            "@type": "Question",
            name: "What was the supplication of Prophet Yunus (A.S.) in the whale?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prophet Yunus (A.S.) prayed from the belly of the whale: 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen' (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers), as commemorated in Surah Al-Anbiya (21:87).",
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
