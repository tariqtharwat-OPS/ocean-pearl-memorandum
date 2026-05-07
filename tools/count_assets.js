const fs = require('fs');
const html = fs.readFileSync('MASTER_HTML.html', 'utf8');
const assetRegex = /src=["'](assets\/[^"']+)["']/g;
let match;
const counts = {};
while ((match = assetRegex.exec(html)) !== null) {
  counts[match[1]] = (counts[match[1]] || 0) + 1;
}
console.log("Image counts:");
for (const [asset, count] of Object.entries(counts)) {
  console.log(`${asset}: ${count} time(s)`);
}
