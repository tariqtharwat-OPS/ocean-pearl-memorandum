const fs = require('fs');
const path = require('path');

const filePath = 'd:/Platform/MASTER_HTML.html';
const content = fs.readFileSync(filePath, 'utf8');

console.log('--- STARTING STRUCTURAL AUDIT ---');

// 1. Check for text outside .doc-page
const outsideDocPageRegex = /<\/div>\s*<\/div>\s*([^<>\n\r\t][^<]+)\s*(?:<!-- PAGE|<div class="doc-page)/g;
let match;
let leakageCount = 0;
while ((match = outsideDocPageRegex.exec(content)) !== null) {
    const text = match[1].trim();
    if (text.length > 0) {
        console.log(`[LEAKAGE] Found text outside container near match: "${text.substring(0, 100)}..."`);
        leakageCount++;
    }
}

// 2. Count Divs per Page
const pages = content.split('<div class="doc-page');
console.log(`Total Pages Found: ${pages.length - 1}`);

let imbalanceCount = 0;
for (let i = 1; i < pages.length; i++) {
    const page = pages[i];
    // We expect one more </div> than <div because we split at <div class="doc-page"
    const openDivs = (page.match(/<div/g) || []).length;
    const closeDivs = (page.match(/<\/div>/g) || []).length;
    
    // The doc-page div itself is not in the 'page' string (it was the split point)
    // So if the page is balanced, closeDivs should be openDivs + 1
    if (closeDivs !== openDivs + 1) {
        console.log(`[IMBALANCE] Page ${i} (starting near index ${content.indexOf(page.substring(0,50))}) is imbalanced! Open: ${openDivs}, Close: ${closeDivs}`);
        imbalanceCount++;
    }
}

// 3. Check for Global Balance
const totalOpen = (content.match(/<div/g) || []).length;
const totalClose = (content.match(/<\/div>/g) || []).length;
console.log(`Global Div Count: Open=${totalOpen}, Close=${totalClose}`);

// 4. Forbidden Wording Audit
const forbidden = [
    'unassailable', 'mathematically secure', 'guarantees', 'massive', 'perfect', 
    'flawless', 'dominates', 'monopoly', 'proves', 'price-maker'
];
let wordingIssues = 0;
forbidden.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches) {
        console.log(`[WORDING] Found forbidden word "${word}" ${matches.length} times.`);
        wordingIssues += matches.length;
    }
});

// 5. Audit .exec-footer-text for Grid/Single Item issue
// Search for footer text that might be squeezed
const footerRegex = /<div class="exec-footer-text"[^>]*>\s*([^<]+)\s*<\/div>/g;
let footerCount = 0;
while ((match = footerRegex.exec(content)) !== null) {
    footerCount++;
    // If it's a single text block, it will be squeezed into one column of the grid
}
console.log(`Total .exec-footer-text blocks: ${footerCount}`);

console.log('--- AUDIT COMPLETE ---');
console.log(`Leakage: ${leakageCount}, Imbalance: ${imbalanceCount}, Wording: ${wordingIssues}`);
