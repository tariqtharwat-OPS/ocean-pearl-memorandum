const fs = require('fs');
const path = 'd:/Platform/MASTER_HTML.html';
let html = fs.readFileSync(path, 'utf8');

// 1. Fix disclaimer broken sentence
html = html.replace(/Projections are not is designed to support of future performance\./g,
  'Projections are not guarantees of future performance and are provided solely for preliminary analytical discussion, subject to validation through independent legal, tax, financial, technical, operational, and market due diligence.');

// 2. Remove 100% repatriation language / rewrite value repatriation phrase
html = html.replace(/Value Repatriation → Indonesian HQ/g,
  'International expansion is structured to consolidate group-level value under Indonesian‑led governance through compliant dividends, management fees, procurement coordination, IP/technology ownership, and long‑term enterprise‑value growth, subject to Indonesian and host‑country legal, tax, foreign‑exchange, and transfer‑pricing rules');

// 3. Replace aggressive margin capture phrasing
html = html.replace(/capture the entire margin curve/g,
  'increase downstream margin participation through integrated infrastructure, processing, distribution, and brand ownership');

// 4. Fix duplicated structural wording
html = html.replace(/structural structural/g, 'structural');

// 5. Replace "scale infinitely" phrasing
html = html.replace(/scale infinitely/g,
  'scale in a disciplined manner through structured trade‑finance facilities, subject to bank limits, collateral eligibility, buyer credit quality, and working‑capital controls');

// 6. Replace DIFC references with Labuan (or remove)
html = html.replace(/DIFC/g, 'Labuan');
html = html.replace(/UAE/g, 'selected jurisdiction'); // generic placeholder

// 7. ESG claims caveats
html = html.replace(/99\.2% Resource Utilization/g, 'Targeted high biomass utilization — subject to technical validation');
html = html.replace(/Zero Wastewater Discharge/g, 'Wastewater minimization strategy — subject to engineering design and local environmental permitting');
html = html.replace(/Certified MSC \/ FIP Compliant/g, 'Potential alignment with MSC/FIP pathways where applicable and commercially feasible');

// 8. Financial outputs caveats – add after each key number
const financialCaveat = ' (Preliminary model output — subject to full validation of assumptions, tax treatment, discount rate, terminal multiple, debt terms, market pricing, capex quotations, and operating execution)';
html = html.replace(/\$785M/g, `$785M${financialCaveat}`);
html = html.replace(/USD 785M/g, `USD 785M${financialCaveat}`);
html = html.replace(/22\.8%/g, `22.8%${financialCaveat}`);
html = html.replace(/2\.45x DSCR/g, `2.45x DSCR${financialCaveat}`);
html = html.replace(/24\.0% Y5 EBITDA margin/g, `24.0% Y5 EBITDA margin${financialCaveat}`);
html = html.replace(/25\.0% stabilized EBITDA margin/g, `25.0% stabilized EBITDA margin${financialCaveat}`);

// Write back the modified HTML
fs.writeFileSync(path, html);
console.log('MASTER_HTML.html cleaned and updated.');
