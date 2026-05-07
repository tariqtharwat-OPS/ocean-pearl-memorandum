const fs = require('fs');
let html = fs.readFileSync('MASTER_HTML.html', 'utf8');

const replacements = [
    // Broken sentences
    [/Projections are not is designed to support of future performance\./g, "Projections are not guarantees of future performance and are provided solely for preliminary analytical discussion, subject to validation through independent legal, tax, financial, technical, operational, and market due diligence."],
    
    // Repatriation / Margin
    [/100% of international expansion value is repatriated/gi, "International expansion is structured to consolidate group-level value under Indonesian-led governance through compliant dividends, management fees, procurement coordination, IP/technology ownership, and long-term enterprise-value growth, subject to Indonesian and host-country legal, tax, foreign exchange, and transfer-pricing rules"],
    [/captures 100%[a-z\s]*/gi, "consolidates compliant group-level value "],
    [/repatriating margin back to the State/gi, "consolidating group-level value under Indonesian-led governance"],
    [/capture the entire margin curve/gi, "increase downstream margin participation"],
    
    // Exaggerated wording
    [/\bunassailable\b/gi, "defensible"],
    // Be careful with guarantee/guarantees so we don't break the disclaimer
    [/\bguarantees\b(?!\s+of future performance)/gi, "indicates"],
    [/\bguarantee\b(?!\s+of future performance)/gi, "indicate"],
    [/\bmonopoly\b/gi, "defensible procurement position"],
    [/\bperfect\b/gi, "strategic"],
    [/\bflawless\b/gi, "strategic"],
    [/\bproves\b/gi, "indicates"],
    [/\bprice-maker\b/gi, "strategic market participant"],
    [/\bcapital flight\b/gi, "capital leakage"],
    [/\boffshore extraction\b/gi, "value extraction"],
    [/\btax escape\b/gi, "tax inefficiency"],
    [/\bprofit shifting\b/gi, "inefficient transfer pricing"],
    [/\bmathematically secure\b/gi, "infrastructure-backed"],
    [/\bmathematical lockout\b/gi, "infrastructure-backed advantage"],
    [/\babsolute conviction\b/gi, "disciplined logic"],
    [/\bdominates\b/gi, "leads"],
    [/\bdominate\b/gi, "lead"],
    [/\bscale infinitely\b/gi, "scale in a disciplined manner through structured trade-finance facilities, subject to bank limits, collateral eligibility, buyer credit quality, and working-capital controls"],
    [/\bmassive\b/gi, "large-scale"],

    // Jurisdictions (structuring contexts)
    [/\bDIFC\b/g, "Labuan or another mutually approved, compliant jurisdiction subject to legal, tax, banking, and investor review"],
    [/\bUAE\b/g, "Labuan or another mutually approved, compliant jurisdiction"],
    [/\bDubai\b/g, "Labuan or another mutually approved, compliant jurisdiction"],
    [/\bSingapore\b/g, "Labuan or another mutually approved, compliant jurisdiction"],

    // ESG Claims
    [/99\.2% Resource Utilization/gi, "Targeted high biomass utilization — subject to technical validation"],
    [/Zero Wastewater Discharge/gi, "Wastewater minimization strategy — subject to engineering design and local environmental permitting"],
    [/Certified MSC/gi, "Potential alignment with MSC/FIP pathways where applicable and commercially feasible"],
    [/FIP Compliant/gi, "Potential alignment with MSC/FIP pathways"],
    [/100% sustainability/gi, "Biomass optimization"],
    [/\bzero waste\b/gi, "waste minimization"],
    [/\bZero-Waste\b/gi, "Waste Minimization"],
];

for (let [pattern, replacement] of replacements) {
    html = html.replace(pattern, replacement);
}

// Financial outputs caveats: ensure all major metrics have caveat.
const finCaveat = " (Preliminary model output — subject to full validation of assumptions, tax treatment, discount rate, terminal multiple, debt terms, market pricing, capex quotations, and operating execution)";

const finMetrics = [
    "USD 785M NPV", "\\$785M NPV",
    "22\\.8% IRR", 
    "2\\.45x DSCR", 
    "24\\.0% Y5 EBITDA margin", 
    "25\\.0% stabilized EBITDA margin", 
    "WACC 12%", 
    "terminal value 8\\.5x EBITDA",
    "8\\.5x EBITDA",
];

finMetrics.forEach(metric => {
    let regex = new RegExp(`(${metric})(?!\\s*\\(Preliminary model output)`, 'g');
    html = html.replace(regex, `$1${finCaveat}`);
});

fs.writeFileSync('MASTER_HTML.html', html, 'utf8');
console.log('HTML cleanup script executed successfully.');
