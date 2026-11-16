const fs = require('fs');
const path = require('path');

const storiesPath = path.join(__dirname, '..', 'data', 'storiesData.ts');
let content = fs.readFileSync(storiesPath, 'utf8');

const imageUpdates = {
  adam: '/stories/covers/adam.jpg',
  idris: '/stories/covers/idris.jpg',
  nuh: '/stories/covers/nuh.jpg',
  hud: '/stories/covers/hud.jpg',
  saleh: '/stories/covers/saleh.jpg',
  ibrahim: '/stories/covers/ibrahim.jpg',
  lut: '/stories/covers/lut.jpg',
  ismail: '/stories/covers/ismail.jpg',
  ishaq: '/stories/covers/ishaq.jpg',
  yaqub: '/stories/covers/yaqub.jpg',
  yunus: '/stories/covers/yunus.jpg'
};

for (const [id, newPath] of Object.entries(imageUpdates)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*")[^"]+(")`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${newPath}$2`);
    console.log(`Updated image for ${id} -> ${newPath}`);
  } else {
    console.warn(`Could not find id: "${id}" in storiesData.ts`);
  }
}

fs.writeFileSync(storiesPath, content, 'utf8');
console.log('Successfully updated data/storiesData.ts!');
