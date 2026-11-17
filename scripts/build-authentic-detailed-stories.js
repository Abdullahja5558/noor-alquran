const fs = require('fs');
const path = require('path');

const group1 = require('./prophets_data/group1');
const group2 = require('./prophets_data/group2');
const group3 = require('./prophets_data/group3');
const group4 = require('./prophets_data/group4');
const group5 = require('./prophets_data/group5');

const allStories = [
  ...group1,
  ...group2,
  ...group3,
  ...group4,
  ...group5
];

console.log(`Loaded ${allStories.length} stories across all 5 groups.`);

if (allStories.length !== 25) {
  console.error(`ERROR: Expected 25 stories, got ${allStories.length}`);
  process.exit(1);
}

// Validation
allStories.forEach((s, idx) => {
  const expectedOrder = idx + 1;
  if (s.order !== expectedOrder) {
    console.error(`Order mismatch for ${s.id}: expected ${expectedOrder}, got ${s.order}`);
    process.exit(1);
  }

  if (!s.fullStory || !s.fullStory.en || !s.fullStory.ur || !s.fullStory.ar) {
    console.error(`Missing fullStory in ${s.id}`);
    process.exit(1);
  }

  if (s.fullStory.en.length < 5 || s.fullStory.ur.length < 5 || s.fullStory.ar.length < 5) {
    console.error(`fullStory has too few paragraphs in ${s.id}`);
    process.exit(1);
  }

  // Check keyLessons
  if (!s.keyLessons || s.keyLessons.en.length !== 3 || s.keyLessons.ur.length !== 3 || s.keyLessons.ar.length !== 3) {
    console.error(`keyLessons invalid in ${s.id}`);
    process.exit(1);
  }

  // Ensure cover image
  if (!s.image.endsWith('-v2.webp')) {
    s.image = `/stories/covers/${s.id}-v2.webp`;
  }
});

const tsContent = `export interface ProphetStory {
  id: string;
  order: number;
  nameEn: string;
  nameUr: string;
  nameAr: string;
  honorific: string;
  titleEn: string;
  titleUr: string;
  titleAr: string;
  image: string;
  quranMention: string;
  summaryEn: string;
  summaryUr: string;
  summaryAr: string;
  fullStory: {
    en: string[];
    ur: string[];
    ar: string[];
  };
  keyLessons: {
    en: string[];
    ur: string[];
    ar: string[];
  };
}

export const STORIES_DATA: ProphetStory[] = ${JSON.stringify(allStories, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../data/storiesData.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`Successfully generated ${outputPath}! File size: ${(fs.statSync(outputPath).size / 1024).toFixed(1)} KB`);
