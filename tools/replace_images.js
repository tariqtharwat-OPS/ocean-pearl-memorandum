const fs = require('fs');
const path = require('path');

// Source image paths from brain directory (need to be dynamic or I can just use copy if I know the paths, but let's just find them or write exact paths from output)
const brainDir = 'C:\\Users\\eg_di\\.gemini\\antigravity\\brain\\306c0e20-3738-4f52-94a1-d2a454168db1';
const tunaSashimiSrc = path.join(brainDir, 'premium_tuna_sashimi_cut_1778167267593.png');
const tunaHorecaSrc = path.join(brainDir, 'premium_tuna_horeca_pack_1778167294423.png');
const cannedRetailSrc = path.join(brainDir, 'canned_seafood_retail_display_1778167318498.png');

const destDir = 'd:\\Platform\\assets\\product_mockups';

// Ensure dir exists
if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

// Copy files
fs.copyFileSync(tunaSashimiSrc, path.join(destDir, 'premium_tuna_sashimi_cut.png'));
fs.copyFileSync(tunaHorecaSrc, path.join(destDir, 'premium_tuna_horeca_pack.png'));
fs.copyFileSync(cannedRetailSrc, path.join(destDir, 'canned_seafood_retail_display.png'));

// Update HTML
let html = fs.readFileSync('MASTER_HTML.html', 'utf8');

let tunaCount = 0;
html = html.replace(/assets\/product_mockups\/premium_tuna\.png/g, (match) => {
    tunaCount++;
    if (tunaCount === 2) return 'assets/product_mockups/premium_tuna_sashimi_cut.png';
    if (tunaCount === 3) return 'assets/product_mockups/premium_tuna_horeca_pack.png';
    return match;
});

let cannedCount = 0;
html = html.replace(/assets\/product_mockups\/canned_seafood\.png/g, (match) => {
    cannedCount++;
    if (cannedCount === 2) return 'assets/product_mockups/canned_seafood_retail_display.png';
    return match;
});

fs.writeFileSync('MASTER_HTML.html', html, 'utf8');
console.log(`Replaced tuna images: ${tunaCount}, canned images: ${cannedCount}`);
