import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  title: "Stories of the Prophets (Qisas al-Anbiya) – Authentic Quranic Chronicles & Wisdom",
  description:
    "Explore authentic A-to-Z chronicles of the Prophets of Allah (Qisas al-Anbiya) in English, Urdu, and Arabic. Detailed historical narratives of Adam, Idris, Nuh, Hud, Saleh, Ibrahim, Lut, Ismail, Ishaq, Yaqub, and Yunus (A.S.) with divine lessons.",
  keywords: [
    "Stories of the Prophets",
    "Qisas al-Anbiya",
    "Qisas ul Anbiya",
    "Prophet Adam story",
    "Prophet Ibrahim fire miracle",
    "Prophet Yunus whale supplication",
    "Prophet Nuh ark flood",
    "Prophet Ismail sacrifice Mina",
    "Prophet Saleh she-camel Thamud",
    "Prophet Hud Ad wind storm",
    "Prophet Yaqub Sabrun Jameel",
    "Prophet Idris pen wisdom",
    "Prophet Lut Sodom history",
    "Prophet Ishaq Canaan",
    "Islamic history in English",
    "Qisas al Anbiya in Urdu",
    "قصص الأنبياء",
    "Noor Al-Quran stories",
  ],
  alternates: {
    canonical: `${BASE_URL}/stories`,
  },
  openGraph: {
    title: "Stories of the Prophets (Qisas al-Anbiya) – Noor Al-Quran",
    description:
      "Authentic, comprehensive chronicles of the Prophets of Allah in English, Urdu, and Arabic with divine reflections, moral wisdom, and authentic Quranic citations.",
    url: `${BASE_URL}/stories`,
    siteName: "Noor Al-Quran",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/stories/covers/adam-v2.jpg`,
        width: 1200,
        height: 630,
        alt: "Stories of the Prophets – Noor Al-Quran",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories of the Prophets (Qisas al-Anbiya) – Noor Al-Quran",
    description:
      "Explore comprehensive A-to-Z authentic chronicles of the Prophets of Allah in English, Urdu, and Arabic.",
    images: [`${BASE_URL}/stories/covers/adam-v2.jpg`],
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
        name: "Stories of the Prophets (Qisas al-Anbiya)",
        description:
          "Authentic Islamic chronicles and moral wisdom of the Prophets of Allah from Adam (A.S.) to the final messengers with multilingual text.",
        publisher: {
          "@type": "Organization",
          name: "Noor Al-Quran",
          url: BASE_URL,
        },
        inLanguage: ["en", "ur", "ar"],
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
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: 11,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Prophet Adam (A.S.)",
            description: "The Father of Mankind and the first Prophet created from clay.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Prophet Idris (A.S.)",
            description: "The pioneer of written revelation, tailoring, and celestial wisdom.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Prophet Nuh (A.S.)",
            description: "Built the Ark on dry land, persevering for 950 years through the Great Deluge.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Prophet Hud (A.S.)",
            description: "Dispatched to the ancient giants of 'Ad in the dunes of Al-Ahqaf.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Prophet Saleh (A.S.)",
            description: "Sent to Thamud who carved mountain palaces, witnessing the miraculous She-Camel.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Prophet Ibrahim (A.S.)",
            description: "The Intimate Friend of Allah who survived the inferno and built the Ka'bah.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Prophet Lut (A.S.)",
            description: "Defended moral purity and hospitality in the cities of Sodom and Gomorrah.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Prophet Ismail (A.S.)",
            description: "Submitted to the supreme sacrifice in Mina and raised the walls of the Ka'bah.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Prophet Ishaq (A.S.)",
            description: "Miraculous son of glad tidings born to Sarah in her old age in Canaan.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 10,
            name: "Prophet Yaqub (A.S.)",
            description: "Exemplified Sabrun Jameel (beautiful patience) across decades of separation from Yusuf.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
          {
            "@type": "ListItem",
            position: 11,
            name: "Prophet Yunus (A.S.)",
            description: "Swallowed by the whale in Nineveh, supplicating from the three darknesses.",
            image: `${BASE_URL}/stories/covers/-v2.jpg`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What are the Stories of the Prophets (Qisas al-Anbiya)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Stories of the Prophets (Qisas al-Anbiya) are authentic Quranic narratives and historical chronicles detailing the lives, miracles, tribulations, and moral teachings of the messengers chosen by Allah to guide humanity to monotheism (Tawheed).",
            },
          },
          {
            "@type": "Question",
            name: "Who was the first Prophet according to Islamic belief?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prophet Adam (A.S.) is revered as the first human being, the Father of Mankind, and the very first Prophet of Allah, endowed with divine knowledge and vicegerency upon Earth.",
            },
          },
          {
            "@type": "Question",
            name: "What was the supplication of Prophet Yunus (A.S.) in the belly of the whale?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Prophet Yunus (A.S.) supplicated from the belly of the whale: 'La ilaha illa Anta, Subhanaka inni kuntu minaz-zalimeen' (There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers), as commemorated in Surah Al-Anbiya (21:87).",
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
