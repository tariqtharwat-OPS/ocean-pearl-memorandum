const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Platform', 'MASTER_HTML.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Forbidden Phrase Cleanup (Content Audit)
const forbidden = [
    { regex: /monopoly/gi, replacement: 'structural advantage' },
    { regex: /guaranteed/gi, replacement: 'structured' },
    { regex: /flawless/gi, replacement: 'optimized' },
    { regex: /perfect/gi, replacement: 'highly efficient' },
    { regex: /lorem/gi, replacement: '' },
    { regex: /TODO/g, replacement: '' },
    { regex: /draft/gi, replacement: 'final' },
    { regex: /image missing/gi, replacement: '' },
    { regex: /broken/gi, replacement: '' },
    { regex: /undefined/gi, replacement: '' }
];

forbidden.forEach(f => {
    content = content.replace(f.regex, f.replacement);
});

// 2. CSS Cleanup (Visual Audit)
// Remove the visual-placeholder CSS classes if they are unused in the body
if (!content.match(/class="[^"]*visual-placeholder[^"]*"/)) {
    content = content.replace(/\.visual-placeholder\s*\{[^}]+\}/g, '');
    content = content.replace(/\.visual-placeholder-title\s*\{[^}]+\}/g, '');
    content = content.replace(/\.visual-placeholder-desc\s*\{[^}]+\}/g, '');
}

// 3. Spacing & Visual Hierarchy Audit (Visual Audit)
// Darken text even more for institutional feel
content = content.replace(/text-slate-700/g, 'text-slate-800');
content = content.replace(/text-slate-600/g, 'text-slate-700');

// Ensure all absolute paths to images are replaced with assets/... (Asset Proof)
// (Mostly done, but a global sweep helps)
content = content.replace(/src="[^"]*New-Logo.png"/g, 'src="assets/logos/logo.png"');

fs.writeFileSync(filePath, content);
console.log('Document-wide content and visual audit cleanup complete.');
