import React from "react";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

// Two rows of testimonials — the top row scrolls left→right, the bottom row right→left.
const ROW_ONE: Testimonial[] = [
  {
    name: "Ahmed Raza",
    location: "Lahore, Pakistan",
    quote:
      "The Uthmani script is so crisp and clean. I finally read the Quran daily on my phone without straining my eyes.",
  },
  {
    name: "Fatima Zahra",
    location: "Casablanca, Morocco",
    quote:
      "Listening to Sheikh Mishary verse-by-verse while following the translation has completely changed my Tilawat routine.",
  },
  {
    name: "Yusuf Abdullah",
    location: "London, UK",
    quote:
      "Accurate prayer times, beautiful design and zero ads. This is exactly what a modern Islamic app should feel like.",
  },
  {
    name: "Aisha Siddiqui",
    location: "Karachi, Pakistan",
    quote:
      "The Urdu translation is a blessing for my parents. They use it every morning after Fajr, Alhamdulillah.",
  },
  {
    name: "Omar Farooq",
    location: "Dubai, UAE",
    quote:
      "Fast, minimal and respectful of the Quran. The audio player keeps playing smoothly even while I browse other Surahs.",
  },
  {
    name: "Maryam Hassan",
    location: "Cairo, Egypt",
    quote:
      "I love the curated Duas section. Having authentic supplications for every moment in one place is priceless.",
  },
];

const ROW_TWO: Testimonial[] = [
  {
    name: "Bilal Khan",
    location: "Toronto, Canada",
    quote:
      "My kids are memorising Juz Amma with the repeat feature. Clean interface, no distractions — just the Quran.",
  },
  {
    name: "Khadija Noor",
    location: "Kuala Lumpur, Malaysia",
    quote:
      "Switching between reciters is effortless. Sheikh Abdul Basit's Tilawat of Surah Ar-Rahman brings me to tears.",
  },
  {
    name: "Hamza Ali",
    location: "Istanbul, Türkiye",
    quote:
      "Dark mode is gorgeous for late-night reading during Ramadan. Everything feels premium and thoughtfully crafted.",
  },
  {
    name: "Zainab Malik",
    location: "Riyadh, Saudi Arabia",
    quote:
      "Authentic sources and verified references give me real confidence. I recommend it to every sister in my halaqa.",
  },
  {
    name: "Ibrahim Yusuf",
    location: "Jakarta, Indonesia",
    quote:
      "It loads instantly even on a slow connection. Reading Surah Al-Kahf every Friday has become a beautiful habit.",
  },
  {
    name: "Sana Tariq",
    location: "Islamabad, Pakistan",
    quote:
      "Simple, elegant and free. May Allah reward the team for building something so beneficial for the Ummah.",
  },
];

// Curated avatar gradients that stay harmonious with the brand blue (#155DFC)
const AVATAR_GRADIENTS = [
  "from-[#155DFC] to-indigo-500",
  "from-cyan-500 to-[#155DFC]",
  "from-indigo-500 to-violet-500",
  "from-sky-500 to-blue-600",
  "from-blue-600 to-cyan-400",
  "from-violet-500 to-[#155DFC]",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <figure className="relative h-full flex flex-col w-[270px] sm:w-[340px] lg:w-[380px] p-5 sm:p-6 lg:p-7 rounded-[1.5rem] sm:rounded-[1.75rem] bg-white dark:bg-[#07090e] border border-slate-200 dark:border-[#141c2b] select-none">
      {/* Decorative quote mark */}
      <Quote
        aria-hidden="true"
        className="absolute top-5 right-5 w-8 h-8 sm:w-9 sm:h-9 text-slate-100 dark:text-white/[0.05] fill-current"
      />

      {/* Rating */}
      <div className="flex items-center gap-0.5" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      <blockquote className="relative flex-1 mt-3.5 text-[13px] sm:text-sm lg:text-[15px] leading-relaxed text-slate-600 dark:text-neutral-300">
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-3">
        <div
          aria-hidden="true"
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${
            AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]
          } text-white text-xs sm:text-sm font-bold flex items-center justify-center shrink-0`}
        >
          {getInitials(t.name)}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold text-slate-900 dark:text-white truncate">{t.name}</div>
          <div className="text-[11px] sm:text-xs text-slate-500 dark:text-neutral-400 truncate">
            {t.location}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

/**
 * Infinite marquee row.
 * The track holds two identical halves and is translated by -50%, so the loop is
 * perfectly seamless. Each half repeats the list twice, guaranteeing it is always
 * wider than the viewport (no empty gap even on ultra-wide screens).
 * Padding-right on each half equals the gap, keeping spacing identical at the seam.
 *
 * direction="left"  → cards travel right → left
 * direction="right" → cards travel left → right
 */
function MarqueeRow({
  items,
  direction = "left",
  duration = 60,
  colorOffset = 0,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  duration?: number;
  colorOffset?: number;
}) {
  const half = [...items, ...items];

  return (
    <div
      className={`marquee ${direction === "right" ? "marquee-reverse" : ""}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      <div className="marquee-track py-3 sm:py-4">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            className="flex shrink-0 items-stretch gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-6"
          >
            {half.map((t, i) => (
              <li
                key={`${copy}-${i}-${t.name}`}
                className="shrink-0"
                aria-hidden={i >= items.length ? true : undefined}
              >
                <TestimonialCard t={t} index={(i % items.length) + colorOffset} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      <div className="px-4 sm:px-6 text-center mb-10 sm:mb-14">
        <h2
          id="testimonials-heading"
          className="font-heading text-[2rem] leading-[1.15] sm:text-5xl md:text-6xl sm:leading-tight font-extrabold text-slate-900 dark:text-white tracking-tight text-balance"
        >
          Where Hearts{" "}
          <span className="whitespace-nowrap">
            Find{" "}
            <span className="inline-block bg-[#155DFC] text-white px-3 sm:px-4.5 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl mx-0.5 sm:mx-1">
              Peace
            </span>
          </span>
        </h2>
      </div>
        
     

      <div className="relative flex flex-col gap-1 sm:gap-3">
        {/* Row 1 (top): right → left */}
        <MarqueeRow items={ROW_ONE} direction="left" duration={70} />
        {/* Row 2 (bottom): left → right */}
        <MarqueeRow items={ROW_TWO} direction="right" duration={75} colorOffset={3} />
      </div>
    </section>
  );
}
