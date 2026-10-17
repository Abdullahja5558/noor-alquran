import { ImageResponse } from "next/og";
import { getSurahMetaByNumber } from "@/components/surahMeta";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolved = await params;
  const num = parseInt(resolved.id, 10) || 1;
  const meta = getSurahMetaByNumber(num);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #05070f 0%, #0c1222 50%, #030712 100%)",
          color: "#ffffff",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Decorative Gradient Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(21, 93, 252, 0.28) 0%, transparent 70%)",
          }}
        />

        {/* Top Brand Banner */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: "#155DFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5 }}>
              Noor Al-Quran
            </span>
            <span style={{ fontSize: 13, color: "#94a3b8" }}>
              noor-ulquran.vercel.app
            </span>
          </div>
        </div>

        {/* Center: Surah Title & Verse Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 1000 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 2,
                color: "#60a5fa",
                background: "rgba(96, 165, 250, 0.15)",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(96, 165, 250, 0.3)",
              }}
            >
              Surah {meta.number} • {meta.revelationType} • {meta.numberOfAyahs} Ayahs
            </span>
          </div>

          <h1
            style={{
              fontSize: 60,
              fontWeight: 900,
              letterSpacing: -1.5,
              margin: 0,
              display: "flex",
              alignItems: "baseline",
              gap: 16,
            }}
          >
            Surah {meta.englishName}
          </h1>

          <p style={{ fontSize: 24, color: "#cbd5e1", margin: 0, lineHeight: 1.4 }}>
            {meta.englishNameTranslation} • Full Arabic Text with Urdu Translation & MP3 Recitation
          </p>
        </div>

        {/* Bottom Bar: Features */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: 22,
            fontSize: 16,
            color: "#94a3b8",
          }}
        >
          <span>Authentic Uthmani Text • Word-by-Word Urdu Translation • High-Quality MP3 Tilawat</span>
          <span style={{ color: "#60a5fa", fontWeight: 700 }}>100% Free & Ad-Free</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
