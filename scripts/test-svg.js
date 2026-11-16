const sharp = require('sharp');
const fs = require('fs');

const svg = `<svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
  <rect width="1024" height="1024" fill="#071A1C"/>
  <circle cx="512" cy="512" r="200" fill="#D4AF37"/>
</svg>`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 95 })
  .toFile('public/stories/test-sharp-svg.jpg')
  .then(() => {
    console.log('SVG to JPEG rendered successfully!');
  })
  .catch(err => {
    console.error('Error rendering SVG:', err);
  });
