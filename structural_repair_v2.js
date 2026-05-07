const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix Structural Imbalance
// We split by doc-page and for those identified as imbalanced, we append a </div> before the next page.
const pageSplitter = '<div class="doc-page';
let sections = content.split(pageSplitter);
// sections[0] is everything before first page.

for (let i = 1; i < sections.length; i++) {
    const page = sections[i];
    const openDivs = (page.match(/<div/g) || []).length;
    const closeDivs = (page.match(/<\/div>/g) || []).length;
    
    // We expect closeDivs == openDivs + 1 (to close the doc-page itself)
    if (closeDivs === openDivs) {
        console.log(`Fixing Page ${i}: Adding missing </div>`);
        // Find the last </div> and see if we can append one after it but before the end of the section.
        // Actually, we can just append it to the end of the section string.
        sections[i] = page.trimEnd() + '\n    </div>';
    } else if (closeDivs > openDivs + 1) {
        console.log(`Fixing Page ${i}: Removing ${closeDivs - (openDivs + 1)} extra </div> tags`);
        // This is harder. Let's try to find them at the end.
        let extra = closeDivs - (openDivs + 1);
        for (let j = 0; j < extra; j++) {
            sections[i] = sections[i].replace(/<\/div>\s*$/, '');
        }
    }
}

content = sections.join(pageSplitter);

// 2. Global Wording Repair
const replacements = [
    { from: /unassailable/gi, to: 'highly defensible' },
    { from: /mathematically secure/gi, to: 'disciplined' },
    { from: /guarantees/gi, to: 'is designed to support' },
    { from: /massive/gi, to: 'material' },
    { from: /proves/gi, to: 'indicates' },
    { from: /perfect/gi, to: 'refined' },
    { from: /flawless/gi, to: 'optimized' },
    { from: /dominates/gi, to: 'strategically positions in' },
    { from: /monopoly/gi, to: 'market-leading position' },
    { from: /price-maker/gi, to: 'improved pricing resilience' }
];

replacements.forEach(r => {
    content = content.replace(r.from, r.to);
});

// 3. Fix contrast by adding .dark-panel or ensuring .bg-corp-navy has light text
// We already added CSS for .bg-corp-navy .exec-footer-text.
// Let's ensure any h4 or other text in those blocks is also light.
// The CSS I added handles .exec-footer-text.

fs.writeFileSync(filePath, content);
console.log('Structural and Wording repair complete.');
