const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Platform', 'MASTER_HTML.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Language Correction (Institutional wording)
const aggressiveText = `The financial logic of Ocean Pearl is unassailable. By deploying heavy infrastructure at the point of harvest, the company secures an asset-backed procurement advantage. By utilizing trade finance, it scales globally without trapping equity. By integrating the USA retail node, it captures the final margin multiplier. The resulting 10-year model—generating a stabilized 25.0% EBITDA margin and 22.8% IRR—proves that Ocean Pearl is a highly disciplined, sovereign-grade platform capable of absorbing massive tier-1 capital deployment.`;

const safeText = `The financial logic of Ocean Pearl is infrastructure-backed and disciplined. By deploying heavy infrastructure at the point of harvest, the company is designed to secure an asset-backed procurement advantage. By utilizing trade finance, it aims to scale globally without trapping excessive equity. By integrating the USA retail node, it seeks to capture downstream margin expansion. The resulting 10-year model—showing a preliminary stabilized 25.0% EBITDA margin and 22.8% target IRR, subject to validation—indicates that Ocean Pearl may represent a disciplined, sovereign-grade platform capable of absorbing large-scale institutional capital deployment.`;

// Replace all occurrences of aggressive text with safe text
content = content.split(aggressiveText).join(safeText);

// 2. Fix the specific duplication at Page 79
// Based on the grep, there was a duplicate block outside the doc-page.
// I'll search for the safe text block that is not followed by a new page or body end properly.
// Or more simply, I'll find all cases where a footer-text block is duplicated immediately.

// Let's look for the specific lines identified:
const duplicatePattern = /<\/div>\s*<\/div>\s*<div class="exec-footer-text"[^>]*>\s*The financial logic of Ocean Pearl is infrastructure-backed and disciplined.*?<\/div>\s*<\/div>/s;
if (duplicatePattern.test(content)) {
    content = content.replace(duplicatePattern, '</div>\n    </div>');
    console.log('Removed duplicated Page 79 footer outside container.');
}

// 3. Structural Audit: Count Divs
const openDivs = (content.match(/<div/g) || []).length;
const closeDivs = (content.match(/<\/div>/g) || []).length;
console.log(`Div count: Open=${openDivs}, Close=${closeDivs}`);

// 4. CSS Guardrails
const cssGuardrails = `
        .doc-page { overflow: hidden; }
        .exec-footer-text { break-inside: avoid; page-break-inside: avoid; column-break-inside: avoid; }
`;
content = content.replace('</style>', cssGuardrails + '\n    </style>');

// 5. Global Search for other escaped text
// I'll search for content between </div>\n    </div> and <!-- PAGE or <div class="doc-page"
// This indicates content accidentally placed between pages.
const leakageRegex = /<\/div>\s*<\/div>\s*([^<>\n\r\t][^<]+)\s*<!-- PAGE/g;
let match;
while ((match = leakageRegex.exec(content)) !== null) {
    console.log(`Potential Leakage Found: "${match[1].substring(0, 50)}..."`);
    content = content.replace(match[0], '</div>\n    </div>\n    <!-- PAGE');
}

fs.writeFileSync(filePath, content);
console.log('Formatting and language fix complete.');
