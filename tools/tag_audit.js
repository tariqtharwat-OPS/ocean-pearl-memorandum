const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Platform', 'MASTER_HTML.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Audit Tag Consistency
const pages = content.split('<div class="doc-page');
console.log(`Number of doc-page starts: ${pages.length - 1}`);

pages.forEach((page, i) => {
    if (i === 0) return; // Before first page
    
    // Count divs inside this page
    // We expect each page to be self-contained: <div class="doc-page"> ... </div>
    // So the 'page' string should have ONE more </div> than <div (excluding the start tag we split on)
    const openDivs = (page.match(/<div/g) || []).length;
    const closeDivs = (page.match(/<\/div>/g) || []).length;
    
    if (closeDivs !== openDivs + 1) {
        console.log(`PAGE ${i} MISMATCH: Open=${openDivs}, Close=${closeDivs}. Difference=${closeDivs - (openDivs + 1)}`);
        // If difference is negative, it's missing a closing tag.
        // If positive, it has too many.
    }
});

// 2. Identify and fix Page 23/24 specifically
// Subagent said: "Text starting with 'The true value of Ocean Pearl lies not in any single geographic hub...' is visible in the grey area."
// I found this text at line 204.
// Let's see the context around line 204.
const lines = content.split('\n');
const startLine = 190;
const endLine = 220;
console.log('--- CONTEXT AROUND LINE 204 ---');
for (let i = startLine; i <= endLine && i < lines.length; i++) {
    console.log(`${i}: ${lines[i-1]}`);
}

// 3. Remove columns: 2 from footer-text (as requested to prevent leakage)
content = content.replace(/columns:\s*2;/g, '/* columns: 2; */ display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;');

fs.writeFileSync(filePath, content);
