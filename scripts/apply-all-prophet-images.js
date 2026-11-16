const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const uploadsDir = 'C:/Users/LENOVO/.gemini/antigravity/brain/d60a80d5-1b34-4fa7-bb01-5aed545897f4/.user_uploaded';
const storiesDir = path.join(__dirname, '..', 'public', 'stories');

async function processAll() {
  console.log('Applying all Prophet images from user uploads...');

  // 1. Hazrat Ishaq (A.S) - Image 1 (media_1794776705259_c487f11e.jpg)
  const ishaqSrc = path.join(uploadsDir, 'media_1794776705259_c487f11e.jpg');
  await sharp(ishaqSrc)
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-ishaq.jpg'));
  console.log('✓ Applied Hazrat Ishaq (Image 1)');

  // 2. Hazrat Idris (A.S) - Image 2 (media_1794776721254_ad4d3613.jpg)
  // Shift color from green to Deep Royal Sapphire / Indigo Blue
  const idrisSrc = path.join(uploadsDir, 'media_1794776721254_ad4d3613.jpg');
  await sharp(idrisSrc)
    .modulate({ hue: 140, brightness: 0.95 })
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-idris.jpg'));
  console.log('✓ Applied Hazrat Idris (Image 2) with Royal Indigo / Blue color shift');

  // 3. Hazrat Ismail (A.S) - Image 3 (media_1794776754225_abd94f35.jpg)
  const ismailSrc = path.join(uploadsDir, 'media_1794776754225_abd94f35.jpg');
  await sharp(ismailSrc)
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-ismail.jpg'));
  console.log('✓ Applied Hazrat Ismail (Image 3)');

  // 4. Hazrat Nuh (A.S) - Image 4 (media_1794776779287_2aaeae40.jpg)
  const nuhSrc = path.join(uploadsDir, 'media_1794776779287_2aaeae40.jpg');
  await sharp(nuhSrc)
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-nuh.jpg'));
  console.log('✓ Applied Hazrat Nuh (Image 4)');

  // 5. Hazrat Ibrahim (A.S) - Image 5 (media_1794776805095_47155763.jpg)
  const ibrahimSrc = path.join(uploadsDir, 'media_1794776805095_47155763.jpg');
  await sharp(ibrahimSrc)
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-ibrahim.jpg'));
  console.log('✓ Applied Hazrat Ibrahim (Image 5)');

  // 6. Hazrat Saleh (A.S) - Image 6 (media_1794776839814_e0676689.jpg)
  // Shift color to Terracotta / Warm Desert Amber Crimson
  const salehSrc = path.join(uploadsDir, 'media_1794776839814_e0676689.jpg');
  await sharp(salehSrc)
    .modulate({ hue: 280, saturation: 1.15 })
    .jpeg({ quality: 95 })
    .toFile(path.join(storiesDir, 'hazrat-saleh.jpg'));
  console.log('✓ Applied Hazrat Saleh (Image 6) with Terracotta Crimson color shift');

  // Also remove test files
  const testFiles = ['test-idris-blue.jpg', 'test-saleh-crimson.jpg'];
  testFiles.forEach(f => {
    const p = path.join(storiesDir, f);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });

  console.log('All Prophet images successfully processed and mapped!');
}

processAll().catch(err => {
  console.error('Error applying images:', err);
  process.exit(1);
});
