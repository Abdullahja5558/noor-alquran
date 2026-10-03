const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NoorAlQuranApp/1.0 (contact@nooralquran.app)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', reject);
  });
}

const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&titles=File%3AAbdul+Basit+%27Abd+us-Samad+with+King+Faisal.jpg&prop=imageinfo&iiprop=url&format=json";

https.get(apiUrl, { headers: { 'User-Agent': 'NoorAlQuranApp/1.0 (contact@nooralquran.app)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    try {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      const page = Object.values(pages)[0];
      const imgUrl = page?.imageinfo?.[0]?.url;
      console.log('Image URL:', imgUrl);
      if (imgUrl) {
        await download(imgUrl, 'public/reciters/abdulbasit.jpg');
        console.log('Successfully saved abdulbasit.jpg, size:', fs.statSync('public/reciters/abdulbasit.jpg').size);
      }
    } catch (e) {
      console.error(e);
    }
  });
});
