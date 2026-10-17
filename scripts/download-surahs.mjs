import fs from "fs";
import path from "path";

const OUT_DIR = path.join(process.cwd(), "data", "surahs");
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function fetchWithRetry(url, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

async function main() {
  console.log("Downloading 114 Surahs data (uthmani, ur.jalandhry, en.asad)...");
  const missing = [];
  for (let i = 1; i <= 114; i++) {
    const file = path.join(OUT_DIR, `${i}.json`);
    if (!fs.existsSync(file)) {
      missing.push(i);
    }
  }

  console.log(`Found ${114 - missing.length} existing files. Need to fetch ${missing.length} surahs.`);

  const CONCURRENCY = 5;
  for (let i = 0; i < missing.length; i += CONCURRENCY) {
    const batch = missing.slice(i, i + CONCURRENCY);
    await Promise.all(
      batch.map(async (num) => {
        try {
          const url = `https://api.alquran.cloud/v1/surah/${num}/editions/quran-uthmani,ur.jalandhry,en.asad`;
          const json = await fetchWithRetry(url);
          if (json && json.data && json.data.length >= 3) {
            const file = path.join(OUT_DIR, `${num}.json`);
            fs.writeFileSync(file, JSON.stringify(json, null, 0), "utf-8");
            process.stdout.write(`✓ ${num} `);
          } else {
            console.error(`Failed structure for surah ${num}`);
          }
        } catch (err) {
          console.error(`Error fetching surah ${num}:`, err.message);
        }
      })
    );
  }
  console.log("\nFinished downloading surahs.");
}

main().catch(console.error);
