import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
        {/* Decorative Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(21, 93, 252, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: "#155DFC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="28"
              height="28"
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
            <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: -0.5 }}>
              Noor Al-Quran
            </span>
            <span style={{ fontSize: 14, color: "#93c5fd" }}>
              noor-ulquran.vercel.app
            </span>
          </div>
        </div>

        {/* Center Main Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1050 }}>
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
              114 Surahs • Authentic Audio • Namaz Timings • Daily Duas
            </span>
          </div>

          <h1
            style={{
              fontSize: 58,
              fontWeight: 900,
              letterSpacing: -1.5,
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Read, Listen & Explore the Holy Quran with Urdu Translation
          </h1>

          <p style={{ fontSize: 22, color: "#cbd5e1", margin: 0, lineHeight: 1.4 }}>
            Authentic Arabic Uthmani scripture, word-by-word Urdu and English translations, and high-quality MP3 Tilawat recitations by world-renowned Qaris.
          </p>
        </div>

        {/* Footer info */}
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
          <span>Free Digital Islamic Sanctuary • Modern Web Experience</span>
          <span style={{ color: "#60a5fa", fontWeight: 700 }}>noor-ulquran.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
