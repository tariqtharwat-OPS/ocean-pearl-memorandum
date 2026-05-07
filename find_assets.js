const fs = require('fs');
const html = fs.readFileSync('MASTER_HTML.html', 'utf8');
const assetRegex = /src=["'](assets\/[^"']+)["']/g;
let match;
const assets = new Set();
while ((match = assetRegex.exec(html)) !== null) {
  assets.add(match[1]);
}
console.log("Images found:");
assets.forEach(a => console.log(a));
