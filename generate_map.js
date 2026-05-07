const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
const content = fs.readFileSync(filePath, 'utf8');

const pages = [];
const pageRegex = /<div class="doc-page(?:[^"]*)">[\s\S]*?<span class="section-title">([^<]*)<\/span>[\s\S]*?<span class="page-num">([^<]*)<\/span>[\s\S]*?<h2 class="exec-headline">([^<]*)<\/h2>/g;

let match;
while ((match = pageRegex.exec(content)) !== null) {
    pages.push({
        section: match[1].trim(),
        num: match[2].trim(),
        title: match[3].trim()
    });
}

// Also find divider pages
const dividerRegex = /<div class="doc-page divider-page">[\s\S]*?<h1 class="text-6xl[^>]*>Section ([^<]*)<\/h1>[\s\S]*?<h2 class="text-4xl[^>]*>([^<]*)<\/h2>/g;
const dividers = [];
while ((match = dividerRegex.exec(content)) !== null) {
    dividers.push({
        id: match[1].trim(),
        title: match[2].trim()
    });
}

console.log('--- FULL PAGE MAP ---');
pages.forEach(p => console.log(`P${p.num}: [${p.section}] ${p.title}`));
console.log('--- DIVIDERS ---');
dividers.forEach(d => console.log(`Section ${d.id}: ${d.title}`));
