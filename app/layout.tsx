import type { Metadata } from "next";
import { Geist, Geist_Mono, Amiri, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-arabic",
  weight: ["400", "700"],
  subsets: ["arabic"],
});

const notoUrdu = Noto_Nastaliq_Urdu({
  variable: "--font-urdu",
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://noor-ulquran.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Noor Al-Quran – Read Quran Surahs & Daily Prayer",
    template: "%s | Noor Al-Quran",
  },
  description:
    "Read Holy Quran online with 114 Surahs, Urdu translation, audio MP3, daily Islamic duas, tasbeeh counter, and accurate namaz prayer times on Noor Al-Quran.",
  keywords: [
    "Quran",
    "Holy Quran",
    "Quran with Urdu Translation",
    "Quran Online",
    "Listen Quran MP3",
    "Surah Yaseen",
    "Surah Al-Baqarah",
    "Surah Rahman",
    "Surah Mulk",
    "Islamic Calendar",
    "Prayer Times Pakistan",
    "Namaz Timings",
    "Daily Duas",
    "Masnoon Duain",
    "Digital Tasbeeh Counter",
    "Seerah of Prophet Muhammad",
    "Noor Al-Quran",
    "Mishary Rashid Alafasy",
    "Abdul Basit",
    "Abdur Rahman As-Sudais",
  ],
  authors: [{ name: "Noor Al-Quran Team", url: BASE_URL }],
  creator: "Noor Al-Quran",
  publisher: "Noor Al-Quran",
  applicationName: "Noor Al-Quran",
  category: "Islamic Education & Quran",
  alternates: {
    canonical: "/",
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
    url: BASE_URL,
    siteName: "Noor Al-Quran",
    title: "Noor Al-Quran – Read Quran Surahs & Daily Prayer",
    description:
      "Read Holy Quran online with 114 Surahs, Urdu translation, audio MP3, daily Islamic duas, tasbeeh counter, and accurate namaz prayer times on Noor Al-Quran.",
    images: [
      {
        url: "/favicon5.png",
        width: 512,
        height: 512,
        alt: "Noor Al-Quran Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noor Al-Quran – Read Quran Surahs & Daily Prayer",
    description:
      "Read Holy Quran online with 114 Surahs, Urdu translation, audio MP3, daily Islamic duas, tasbeeh counter, and accurate namaz prayer times on Noor Al-Quran.",
    images: ["/favicon5.png"],
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
      "description": "Read and listen to the Holy Quran with Urdu & English translations, prayer timings, Hijri calendar, and daily duas.",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/quran?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Noor Al-Quran",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon5.png`
      }
    }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiri.variable} ${notoUrdu.variable} antialiased min-h-screen selection:bg-blue-600/30 selection:text-blue-900 dark:selection:text-blue-200 bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 relative`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Ambient Dark Mode Background: Desktop rich ambient lights, Mobile pure black with subtle corner blue */}
          <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none" aria-hidden="true">
            <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#000000] transition-colors duration-300" />
            
            {/* Top-Left: Mobile compact & subtle (w-32), Desktop rich full size (w-[600px], 22% opacity) */}
            <div className="hidden dark:block absolute -top-12 -left-12 w-32 h-32 sm:-top-40 sm:-left-40 sm:w-[600px] sm:h-[600px] rounded-full bg-blue-700/[0.07] sm:bg-blue-700/22 blur-[45px] sm:blur-[140px] pointer-events-none" />

            {/* Top-Right: Desktop rich full size (20% opacity) */}
            <div className="hidden sm:dark:block absolute -top-40 -right-40 sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-700/20 sm:blur-[140px] pointer-events-none" />

            {/* Bottom-Left: Desktop rich full size (25% opacity) */}
            <div className="hidden sm:dark:block absolute -bottom-40 -left-40 sm:w-[600px] sm:h-[600px] rounded-full bg-blue-900/28 sm:blur-[150px] pointer-events-none" />

            {/* Bottom-Right: Mobile compact & subtle (w-32), Desktop rich full size (20% opacity) */}
            <div className="hidden dark:block absolute -bottom-12 -right-12 w-32 h-32 sm:-bottom-40 sm:-right-40 sm:w-[600px] sm:h-[600px] rounded-full bg-blue-600/[0.06] sm:bg-blue-600/20 blur-[45px] sm:blur-[140px] pointer-events-none" />
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}