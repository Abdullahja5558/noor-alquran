import type { Metadata, Viewport } from "next";
import { Geist, Amiri, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
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
    default: "Read Holy Quran Online with Urdu Translation & Audio MP3 | Noor Al-Quran",
    template: "%s | Noor Al-Quran",
  },
  description:
    "Read and listen to the Holy Quran online with complete 114 Surahs, authentic Urdu translation (قرآن مجید اردو ترجمہ), English meaning, MP3 tilawat by top reciters (Mishary Alafasy, Sudais, Abdul Basit), daily duas, tasbeeh, and accurate namaz prayer times.",
  keywords: [
    // Core English Quran queries
    "Quran",
    "Holy Quran",
    "Read Holy Quran online",
    "Holy Quran with Urdu translation",
    "Quran online read",
    "Quran recitation MP3",
    "Listen Quran online",
    "Full Quran Sharif",
    "114 Surahs of Quran",
    "Quran translation in Urdu",
    "Quran Pak reading",
    "Al Quran Al Kareem",
    // Top searched Surahs
    "Surah Yaseen",
    "Surah Yasin with Urdu translation",
    "Surah Al-Baqarah",
    "Surah Rahman",
    "Surah Mulk",
    "Surah Al-Waqiah",
    "Surah Al-Kahf",
    "Ayatul Kursi",
    "Surah Fatiha",
    "Surah Ikhlas",
    // Urdu Script keywords (crucial for local Google search)
    "قرآن مجید",
    "قرآن پاک",
    "قرآن مجید اردو ترجمہ کے ساتھ",
    "سورۃ یٰس",
    "سورۃ الرحمن",
    "سورۃ الملک",
    "آیت الکرسی",
    "تلاوت قرآن پاک",
    "نماز کے اوقات",
    "مسنون دعائیں",
    // Reciters
    "Mishary Rashid Alafasy Quran",
    "Abdul Basit Abdus Samad recitation",
    "Abdur Rahman As-Sudais tilawat",
    "Saad Al Ghamdi",
    "Maher Al Muaiqly",
    // Islamic utilities
    "Prayer Times Pakistan",
    "Namaz Timings Karachi Lahore Islamabad",
    "Daily Islamic Duas",
    "Masnoon Duain with Urdu translation",
    "Digital Tasbeeh Counter",
    "Hijri Islamic Calendar",
    "Noor Al-Quran",
     "full quran in urdu",
    "read quran in urdu",
    "quran in urdu translation",
    "quran mp3",
    "quran in urdu mp3",
    "quran karim",
    "quran meaning in urdu",
    "quran online",
    "quran sharif",
    "quran with urdu translation",
    "quran with urdu",
  
    "listen quran in urdu",
    "quran urdu",
    "quran in urdu pdf",
    "read quran in urdu online",
    "quran mp3 free download",
    "quran with urdu translation mp3",
    "quran english translation",
    "quran translation in urdu",
    "quran translation in english",
    "quran translation",
    
  
  
   
   
  
  ],
  authors: [{ name: "Noor Al-Quran Team", url: BASE_URL }],
  creator: "Noor Al-Quran",
  publisher: "Noor Al-Quran",
  applicationName: "Noor Al-Quran",
  category: "Islamic Education, Religion & Quran",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ur-PK": "/",
      "ar-SA": "/",
      "x-default": "/",
    },
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
    siteName: "Noor Al-Quran الكريم",
    title: "Read Holy Quran Online with Urdu Translation & Audio MP3 | Noor Al-Quran",
    description:
      "Explore all 114 Surahs of the Holy Quran with authentic Urdu translation, beautiful audio recitations by world renowned Qaris, daily Islamic duas, and prayer times.",
    images: [
      {
        url: "/favicon5.png",
        width: 512,
        height: 512,
        alt: "Noor Al-Quran - Holy Quran Online with Urdu Translation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Read Holy Quran Online with Urdu Translation & Audio MP3 | Noor Al-Quran",
    description:
      "Explore all 114 Surahs of the Holy Quran with authentic Urdu translation, beautiful audio recitations by world renowned Qaris, daily Islamic duas, and prayer times.",
    images: ["/favicon5.png"],
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
        className={`${geistSans.variable} ${amiri.variable} ${notoUrdu.variable} antialiased min-h-screen selection:bg-blue-600/30 selection:text-blue-900 dark:selection:text-blue-200 bg-[#f8fafc] dark:bg-[#000000] text-slate-900 dark:text-slate-100 relative`}
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