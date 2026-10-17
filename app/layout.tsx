import { Geist, Amiri, Noto_Nastaliq_Urdu, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AudioPlayerProvider } from "@/components/audio/AudioPlayerContext";
import { BottomAudioPlayer } from "@/components/audio/BottomAudioPlayer";
import { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
  preload: true,
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Noor Al-Quran – Read & Listen Quran with Urdu Translation",
    template: "%s | Noor Al-Quran",
  },
  description:
    "Read & listen to the Holy Quran online with 114 Surahs, authentic Urdu translation (قرآن اردو ترجمہ), English meaning, MP3 tilawat, and Namaz prayer times.",
  authors: [{ name: "Noor Al-Quran Team", url: BASE_URL }],
  creator: "Noor Al-Quran",
  publisher: "Noor Al-Quran",
  applicationName: "Noor Al-Quran",
  category: "Islamic Education, Religion & Quran",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      {
        url: "/favicon5.png",
        href: "/favicon5.png",
      },
    ],
    shortcut: "/favicon5.png",
    apple: "/favicon5.png",
  },
  verification: {
    google: "googlefc24be5cd256c9a9",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ur_PK", "ar_SA"],
    url: BASE_URL,
    siteName: "Noor Al-Quran",
    title: "Noor Al-Quran – Read & Listen Quran with Urdu Translation",
    description:
      "Explore all 114 Surahs of the Holy Quran with authentic Urdu translation, beautiful audio recitations by world renowned Qaris, daily Islamic duas, and prayer times.",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Noor Al-Quran - Holy Quran Online with Urdu Translation & Audio MP3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Al-Quran – Read & Listen Quran with Urdu Translation",
    description:
      "Explore all 114 Surahs of the Holy Quran with authentic Urdu translation, beautiful audio recitations, daily Islamic duas, and prayer times.",
    images: [`${BASE_URL}/opengraph-image`],
  },
  appleWebApp: {
    capable: true,
    title: "Noor Al-Quran",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Noor Al-Quran",
      "alternateName": ["Noor Quran", "Noor Al-Quran Al-Kareem", "نور القرآن"],
      "description":
        "Read and listen to the Holy Quran with Urdu & English translations, authentic MP3 recitations, prayer timings, Hijri calendar, and daily duas.",
      "inLanguage": ["en", "ur", "ar"],
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/quran?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Noor Al-Quran",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon5.png`,
        "width": 512,
        "height": 512,
      },
    },
    {
      "@type": "WebApplication",
      "@id": `${BASE_URL}/#app`,
      "name": "Noor Al-Quran Web App",
      "url": BASE_URL,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${BASE_URL}/#navigation`,
      "name": "Main Navigation",
      "hasPart": [
        {
          "@type": "WebPage",
          "name": "Al-Quran (114 Surahs)",
          "url": `${BASE_URL}/quran`,
          "description": "Complete 114 Surahs of the Holy Quran with Urdu translation and MP3 audio tilawat.",
        },
        {
          "@type": "WebPage",
          "name": "Prayer Times",
          "url": `${BASE_URL}/prayer-time`,
          "description": "Daily accurate Namaz prayer timings with Azan audio notifications.",
        },
        {
          "@type": "WebPage",
          "name": "Daily Duas",
          "url": `${BASE_URL}/dua`,
          "description": "Authentic daily Islamic Duas and Azkar with Urdu translation.",
        },
        {
          "@type": "WebPage",
          "name": "Digital Tasbeeh",
          "url": `${BASE_URL}/tasbeeh`,
          "description": "Online digital Tasbeeh counter for daily Zikr and Astaghfar.",
        },
        {
          "@type": "WebPage",
          "name": "Islamic Calendar",
          "url": `${BASE_URL}/calendar`,
          "description": "Hijri lunar Islamic calendar with important Islamic events.",
        },
        {
          "@type": "WebPage",
          "name": "Quran Playlists",
          "url": `${BASE_URL}/playlists`,
          "description": "Curated Quran recitations for focus, sleep, and emotional peace.",
        },
        {
          "@type": "WebPage",
          "name": "Prophetic Seerah",
          "url": `${BASE_URL}/seerah`,
          "description": "Inspiring life timeline and pivotal events of Prophet Muhammad ﷺ.",
        },
        {
          "@type": "WebPage",
          "name": "About Project",
          "url": `${BASE_URL}/about`,
          "description": "Mission, philosophy, and authentic sources behind Noor Al-Quran.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I read and listen to the Holy Quran online with Urdu translation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can read all 114 Surahs of the Holy Quran online on Noor Al-Quran with authentic verse-by-verse Urdu translation, English meaning, and crystal clear MP3 Tilawat recitations by world renowned Qaris including Mishary Rashid Alafasy and Abdul Basit.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Noor Al-Quran completely free to access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Noor Al-Quran is completely 100% free with no ads or subscriptions for the global Muslim Ummah across mobile, tablet, and desktop devices.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I listen to Surah Al-Fatihah, Surah Yaseen, and Surah Al-Baqarah audio online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can listen to Surah Al-Fatihah, Surah Yaseen, Surah Al-Baqarah, Surah Ar-Rahman, Surah Al-Mulk, and all 114 Surahs with continuous audio playback, ayah highlighting, and recitation controls.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        {/* Preconnect to critical audio and API CDNs to eliminate mobile latency */}
        <link rel="preconnect" href="https://api.alquran.cloud" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://everyayah.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.alquran.cloud" />
        <link rel="dns-prefetch" href="https://everyayah.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${bricolageGrotesque.variable} ${amiri.variable} ${notoUrdu.variable} antialiased min-h-screen selection:bg-blue-600/30 selection:text-blue-900 dark:selection:text-blue-200 bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 relative`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AudioPlayerProvider>
            {children}
            <BottomAudioPlayer />
          </AudioPlayerProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}