const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Platform', 'MASTER_HTML.html');
let content = fs.readFileSync(filePath, 'utf8');

// The bug is: 
// </div> </div> </div>  <- Page closed prematurely
// <div class="exec-footer-text"> ... </div> <- Dangling footer
// </div> <- Orphan closing tag (sometimes)

// 1. Fix the "dangling footer" pattern
// Find cases where exec-footer-text is immediately preceded by a close-page sequence
// we want to move the footer inside the page.
const danglingRegex = /<\/div>\s*<\/div>\s*<div class="exec-footer-text"/g;
content = content.replace(danglingRegex, '</div><div class="exec-footer-text"');

// 2. Fix triple-closings that should be double-closings
// (Closing visual box + closing page)
const tripleCloseRegex = /<\/div>\s*<\/div>\s*<\/div>\s*(?=<div class="exec-footer-text"|<!-- PAGE)/g;
content = content.replace(tripleCloseRegex, '</div></div>');

// 3. Ensure every doc-page has a closing tag at the very end
// We'll use a more robust approach:
// Split by <!-- PAGE, and for each chunk, ensure div balance.
const chunks = content.split('<!-- PAGE');
let newContent = chunks[0];

for (let i = 1; i < chunks.length; i++) {
    let chunk = chunks[i];
    
    // Count divs in this chunk (excluding the opening <div class="doc-page"> if it's there)
    const openDivs = (chunk.match(/<div(?!\s+class="doc-page")/g) || []).length;
    const closeDivs = (chunk.match(/<\/div>/g) || []).length;
    
    // We expect closeDivs == openDivs + 1 (the +1 is for the <div class="doc-page">)
    if (closeDivs > openDivs + 1) {
        // Too many closings. Remove the extra ones from the middle (usually before the footer)
        console.log(`Fixing chunk ${i}: Open=${openDivs}, Close=${closeDivs}`);
        for (let j = 0; j < (closeDivs - (openDivs + 1)); j++) {
            chunk = chunk.replace(/<\/div>\s*<\/div>\s*(?=<div class="exec-footer-text")/, '</div>');
        }
    } else if (closeDivs < openDivs + 1) {
        // Missing closings. Add at the end.
        console.log(`Adding closings to chunk ${i}`);
        for (let j = 0; j < ((openDivs + 1) - closeDivs); j++) {
            chunk += '\n    </div>';
        }
    }
    
    newContent += '<!-- PAGE' + chunk;
}

content = newContent;

// 4. Final Language Sweep (just in case)
content = content.replace(/unassailable/g, 'infrastructure-backed');

fs.writeFileSync(filePath, content);
console.log('Structural repair complete.');
