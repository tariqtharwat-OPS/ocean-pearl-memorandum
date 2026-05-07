const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

const section7Expansion = `
    <!-- SECTION 7 DIVIDER -->
    <div class="doc-page divider-page">
        <div class="divider-content">
            <h1 class="text-6xl font-extrabold mb-4 text-white">Section 7</h1>
            <div class="w-24 h-1 mx-auto mb-8" style="background-color: var(--corp-gold);"></div>
            <h2 class="text-4xl font-bold tracking-tight text-white mb-6 uppercase tracking-widest">Treasury Governance & AML</h2>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Institutional Guardrails, Intercompany Flow Discipline, and Global Compliance Standards.
            </p>
        </div>
    </div>

    <!-- PAGE 81: TREASURY COMMITTEE & GOVERNANCE -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">81</span>
        </div>
        <h2 class="exec-headline">Global Treasury Committee</h2>
        <h3 class="exec-subheadline">Centralized fiscal control with decentralized operational liquidity.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full">
                <div class="p-6 bg-white border-l-4 border-corp-navy shadow-sm">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Strategic Treasury HQ (Jakarta)</div>
                    <ul class="space-y-3 text-[11px] text-slate-700">
                        <li>• Group-level Capital Allocation</li>
                        <li>• Dividend & Value Repatriation Control</li>
                        <li>• Sovereign & Regulatory Reporting</li>
                        <li>• Auditor Selection & Policy Oversight</li>
                    </ul>
                </div>
                <div class="p-6 bg-white border-l-4 border-corp-gold shadow-sm">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Operational Hub Liquidity</div>
                    <ul class="space-y-3 text-[11px] text-slate-700">
                        <li>• Salalah: Sourcing Corridor Working Capital</li>
                        <li>• USA: Downstream AR/AP Management</li>
                        <li>• Egypt: MENA Trade Finance Hub</li>
                        <li>• Surabaya: Industrial OPEX Management</li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 p-4 bg-corp-navy text-white text-[10px] uppercase font-black tracking-widest text-center">
                Governance Target: Big-4 Global Audit Standard
            </div>
        </div>
        <div class="exec-footer-text">
            Ocean Pearl’s treasury function is engineered to balance the flexibility of a multinational trading enterprise with the discipline of a sovereign-grade infrastructure firm. The Global Treasury Committee, based in Jakarta, maintains absolute oversight of group-level capital flows, ensuring that international expansion remains aligned with Indonesian HQ objectives. Operational hubs are provided with local liquidity envelopes to support sourcing and distribution, but all material cross-border transfers and dividend repatriations are subject to centralized committee approval and compliance screening.
        </div>
    </div>

    <!-- PAGE 82: INTERCOMPANY CASH FLOWS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">82</span>
        </div>
        <h2 class="exec-headline">Intercompany Flow Discipline</h2>
        <h3 class="exec-subheadline">Architecting economic substance for cross-border capital deployment.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="flex flex-col items-center w-full">
                <div class="text-xs font-black text-corp-navy uppercase mb-10 tracking-widest">Global Economic Substance Map</div>
                <div class="grid grid-cols-3 gap-6 w-full text-center">
                    <div class="p-4 border border-slate-200 bg-slate-50">
                        <div class="text-xs font-bold mb-2">Upstream Hubs</div>
                        <div class="text-[10px] text-slate-500 italic">Oman / Yemen / ID Sourcing</div>
                        <div class="mt-4 text-corp-blue font-bold">Procurement Agreements</div>
                    </div>
                    <div class="p-4 border border-slate-200 bg-slate-50">
                        <div class="text-xs font-bold mb-2">Manufacturing HQ</div>
                        <div class="text-[10px] text-slate-500 italic">PT Ocean Pearl Indonesia</div>
                        <div class="mt-4 text-corp-blue font-bold">IP & Technology Licensing</div>
                    </div>
                    <div class="p-4 border border-slate-200 bg-slate-50">
                        <div class="text-xs font-bold mb-2">Downstream Hubs</div>
                        <div class="text-[10px] text-slate-500 italic">USA / MENA / China</div>
                        <div class="mt-4 text-corp-blue font-bold">Distribution Margins</div>
                    </div>
                </div>
                <div class="mt-10 w-full h-1 bg-gradient-to-r from-corp-navy via-corp-gold to-corp-navy opacity-30"></div>
                <div class="mt-4 text-[10px] text-slate-500 italic">All intercompany flows are governed by arm's length principles and verified economic substance at the hub level.</div>
            </div>
        </div>
        <div class="exec-footer-text">
            To ensure defensibility before international tax and regulatory authorities, every intercompany cash flow in the Ocean Pearl network is anchored by explicit economic substance. Whether it is procurement agreements for raw material from the Oman corridor or technology licensing fees for the use of SuperFrozen LCO₂ IP, all transfers are documented through a rigorous intercompany framework. This discipline prevents the "hollowing out" of any specific hub and ensures that the platform’s tax and transfer-pricing positions are robust enough for Big-4 audit scrutiny.
        </div>
    </div>

    <!-- PAGE 83: TRANSFER PRICING FRAMEWORK -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">83</span>
        </div>
        <h2 class="exec-headline">Transfer Pricing & Repatriation</h2>
        <h3 class="exec-subheadline">Aligning cross-border margins with Indonesian strategic interests.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full">
                <div class="bg-white p-6 shadow-md border-t-4 border-corp-navy">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Arm's Length Principles</div>
                    <p class="text-[11px] text-slate-700 leading-relaxed">Utilization of comparable uncontrolled price (CUP) and transactional net margin methods (TNMM) to ensure global pricing compliance. Documented value-creation metrics for the Indonesian HQ (AI IP, Brand, Strategy).</p>
                </div>
                <div class="bg-white p-6 shadow-md border-t-4 border-corp-gold">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Repatriation Architecture</div>
                    <p class="text-[11px] text-slate-700 leading-relaxed">Phased dividend repatriation from USA and MENA hubs back to PT Ocean Pearl Indonesia. Management fee structure (3-5% of foreign revenue) for centralized HQ coordination and operational oversight.</p>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The Ocean Pearl transfer-pricing framework is designed to capture the "Coordination Premium" at the Indonesian HQ. While international hubs earn distribution and sourcing margins, the strategic value created by the Indonesian center (Management, AI IP, and Brand Sovereignty) is recognized through a structured management and licensing fee model. This ensures a consistent flow of foreign currency back to the Indonesian treasury, supporting the domestic capital base while complying with international OECD transfer-pricing guidelines.
        </div>
    </div>

    <!-- PAGE 84: AML / KYC / KYB FRAMEWORK -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">84</span>
        </div>
        <h2 class="exec-headline">AML & Compliance Infrastructure</h2>
        <h3 class="exec-subheadline">Applying bank-grade screening to global seafood trade flows.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="flex flex-col items-center w-full">
                <div class="text-xs font-black text-corp-navy uppercase mb-10 tracking-widest">The Compliance Gate Model</div>
                <div class="grid grid-cols-4 gap-4 w-full text-center">
                    <div class="p-4 bg-slate-100 border border-slate-200">
                        <div class="text-lg mb-1">👤</div>
                        <div class="text-[9px] uppercase font-bold">KYC / KYB</div>
                        <div class="text-[8px] text-slate-400 mt-2">Identity & Entity Validation</div>
                    </div>
                    <div class="p-4 bg-slate-100 border border-slate-200">
                        <div class="text-lg mb-1">🛡️</div>
                        <div class="text-[9px] uppercase font-bold">Sanctions</div>
                        <div class="text-[8px] text-slate-400 mt-2">OFAC / UN / EU Screening</div>
                    </div>
                    <div class="p-4 bg-slate-100 border border-slate-200">
                        <div class="text-lg mb-1">🔍</div>
                        <div class="text-[9px] uppercase font-bold">UBO Search</div>
                        <div class="text-[8px] text-slate-400 mt-2">Ultimate Beneficial Owner</div>
                    </div>
                    <div class="p-4 bg-corp-navy text-white">
                        <div class="text-lg mb-1">✅</div>
                        <div class="text-[9px] uppercase font-bold">Cleared</div>
                        <div class="text-[8px] text-white/50 mt-2">Transaction Authorization</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            Operating in high-velocity sourcing corridors like Oman, Yemen, and Somalia requires a sophisticated, multi-layered compliance approach. Ocean Pearl implements a centralized AML/KYC/KYB framework that screens every counterparty—from artisanal fleet cooperatives to international retail buyers—against global sanctions and watchlists. This screening is integrated directly into the AI/eBajau operational platform, ensuring that no transaction is authorized without a verified audit trail of identity and ownership.
        </div>
    </div>

    <!-- PAGE 85: TRADE FINANCE RISK MANAGEMENT -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">85</span>
        </div>
        <h2 class="exec-headline">Trade Finance Risk Control</h2>
        <h3 class="exec-subheadline">Mitigating counterparty and logistical risk in the global corridor.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full">
                <div class="bg-white p-6 shadow-sm border border-slate-200">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Documentary Credit Discipline</div>
                    <ul class="text-[11px] space-y-3 text-slate-700">
                        <li>• Irrevocable Letters of Credit (LCs) for high-value exports</li>
                        <li>• Verified Inspection Reports (SGS/Intertek) at port of loading</li>
                        <li>• Bill of Lading (BoL) escrow via AI Platform</li>
                        <li>• Advance Payment Guarantees for remote sourcing</li>
                    </ul>
                </div>
                <div class="bg-white p-6 shadow-sm border border-slate-200">
                    <div class="text-sm font-bold text-corp-navy mb-4 uppercase">Receivables Insurance</div>
                    <ul class="text-[11px] space-y-3 text-slate-700">
                        <li>• Euler Hermes / Atradius / ECA coverage for major retailers</li>
                        <li>• 85-90% coverage for non-payment risk</li>
                        <li>• Real-time credit limit monitoring via AI</li>
                        <li>• Integrated factorability of all US/EU receivables</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            To protect the platform's working capital, Ocean Pearl applies a conservative trade finance policy to all international exports. High-value shipments are governed by irrevocable Letters of Credit or receivables insurance from Tier-1 global providers. This approach minimizes the risk of non-payment from distant buyers and ensures that the platform’s inventory remains a highly bankable asset throughout the transshipment cycle. Logistical risk is further mitigated through independent port-side inspections, ensuring that quality claims are eliminated before the product leaves the hub.
        </div>
    </div>

    <!-- PAGE 86: FX HEDGING & TREASURY POLICY -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">86</span>
        </div>
        <h2 class="exec-headline">FX Hedging & Risk Policy</h2>
        <h3 class="exec-subheadline">Protecting platform margins from global currency volatility.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="flex flex-col items-center w-full">
                <div class="text-xs font-black text-corp-navy uppercase mb-10 tracking-widest">Currency Exposure Profile</div>
                <div class="grid grid-cols-3 gap-6 w-full text-center font-bold">
                    <div class="p-6 bg-slate-50 border-b-4 border-corp-navy">
                        <div class="text-2xl text-corp-navy mb-2">$ USD</div>
                        <div class="text-[9px] uppercase">Primary Revenue & Debt</div>
                    </div>
                    <div class="p-6 bg-slate-50 border-b-4 border-corp-gold">
                        <div class="text-2xl text-corp-gold mb-2">Rp IDR</div>
                        <div class="text-[9px] uppercase">Industrial OPEX & Labor</div>
                    </div>
                    <div class="p-6 bg-slate-50 border-b-4 border-blue-600">
                        <div class="text-2xl text-blue-600 mb-2">€ EUR / £ GBP</div>
                        <div class="text-[9px] uppercase">Secondary Retail Revenue</div>
                    </div>
                </div>
                <div class="mt-10 p-6 bg-slate-900 text-white w-full rounded">
                    <div class="text-[11px] font-bold text-corp-gold mb-2 uppercase">Hedging Strategy</div>
                    <p class="text-[10px] text-slate-400">Natural hedging through USD-denominated sales vs. IDR industrial costs. Forward contracts and currency swaps utilized for EUR/GBP retail exposures. 100% of major cross-border debt is matched to USD revenue streams.</p>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            Ocean Pearl operates a "Natural Hedging" strategy by aligning its primary debt and revenue streams in US Dollars while maintaining a significant portion of its industrial cost base in Indonesian Rupiah. This creates a defensive margin buffer during periods of IDR weakness. For non-USD retail markets (EU/UK), the treasury committee utilizes standard forward contracts to lock in margins at the time of order confirmation. This disciplined policy ensures that the platform's consolidated EBITDA is protected from the inherent volatility of the global FX markets.
        </div>
    </div>

    <!-- PAGE 87: EXIT STRATEGY & VALUE REALIZATION -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">87</span>
        </div>
        <h2 class="exec-headline">Exit Strategy: IPO & Sukuk</h2>
        <h3 class="exec-subheadline">Architecting clear liquidity pathways for institutional capital.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full">
                <div class="p-8 bg-white shadow-xl border-t-8 border-corp-navy text-center">
                    <div class="text-sm font-bold text-slate-500 uppercase mb-4">Indonesian IPO</div>
                    <div class="text-3xl font-black text-corp-navy mb-4 font-serif italic">IDX Listing</div>
                    <p class="text-[10px] text-slate-600">Primary liquidity event for regional and national investors. Positioning as the first integrated Indonesian maritime industrial major.</p>
                </div>
                <div class="p-8 bg-white shadow-xl border-t-8 border-corp-gold text-center">
                    <div class="text-sm font-bold text-slate-500 uppercase mb-4">Global Sukuk / Debt</div>
                    <div class="text-3xl font-black text-corp-navy mb-4 font-serif italic">Institutional Refi</div>
                    <p class="text-[10px] text-slate-600">Refinancing of infrastructure debt via Sharia-compliant global Sukuk, targeting GCC and Islamic liquidity pools.</p>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            Institutional capital requires clear and disciplined exit pathways. Ocean Pearl provides multiple value-realization options, ranging from a dual-listing on the Indonesia Stock Exchange (IDX) and a secondary global hub, to a platform-level refinancing via the global debt/Sukuk markets. By maintaining Big-4 audit compliance and a transparent institutional governance structure from Stage 0, the platform is "pre-engineered" for a high-multiple exit, providing investors with confidence in the long-term liquidity of their capital deployment.
        </div>
    </div>

    <!-- PAGE 88: SECTION SUMMARY & AUDIT TRAIL -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 7: Treasury Governance & AML</span>
            <span class="page-num">88</span>
        </div>
        <h2 class="exec-headline">Governance Summary</h2>
        <h3 class="exec-subheadline">Ensuring absolute transparency for sovereign and institutional partners.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-12">
            <div class="flex flex-col items-center text-center max-w-2xl">
                <div class="text-6xl mb-6">🛡️</div>
                <div class="text-xl font-bold text-corp-navy mb-4 uppercase tracking-widest">Institutional Integrity Shield</div>
                <p class="text-sm text-slate-600 leading-relaxed italic">"Ocean Pearl does not operate in the shadows of maritime trade. Our governance framework is built to survive the most rigorous Big-4 transaction audit, ensuring that every dollar of capital deployment and every MT of seafood export is documented, cleared, and compliant."</p>
                <div class="mt-8 w-24 h-1 bg-corp-gold"></div>
                <div class="mt-8 grid grid-cols-2 gap-4 w-full text-[10px] font-bold text-slate-500">
                    <div class="p-2 bg-slate-50 border border-slate-100">Annual External Audit</div>
                    <div class="p-2 bg-slate-50 border border-slate-100">Quarterly Investor Reporting</div>
                    <div class="p-2 bg-slate-50 border border-slate-100">Real-time Compliance Dashboard</div>
                    <div class="p-2 bg-slate-50 border border-slate-100">Independent Board Oversight</div>
                </div>
            </div>
        </div>
    </div>
`;

const section9Expansion = `
    <!-- SECTION 9: INSTITUTIONAL APPENDICES -->
    <div class="doc-page divider-page">
        <div class="divider-content">
            <h1 class="text-6xl font-extrabold mb-4 text-white">Section 9</h1>
            <div class="w-24 h-1 mx-auto mb-8" style="background-color: var(--corp-gold);"></div>
            <h2 class="text-4xl font-bold tracking-tight text-white mb-6 uppercase tracking-widest">Institutional Appendices</h2>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Technical Specifications, Full Assumptions Registers, and Risk Mitigation Frameworks.
            </p>
        </div>
    </div>

    <!-- PAGE 91: ASSUMPTIONS REGISTER -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">91</span>
        </div>
        <h2 class="exec-headline">Full Assumptions Register</h2>
        <h3 class="exec-subheadline">Detailed breakdown of the core inputs driving the $500M platform model.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <table class="w-full text-[9px] border-collapse">
                <thead>
                    <tr class="bg-slate-900 text-white text-left">
                        <th class="p-3 border-r border-white/10">Category</th>
                        <th class="p-3 border-r border-white/10">Key Variable</th>
                        <th class="p-3">Assumption / Value</th>
                    </tr>
                </thead>
                <tbody class="text-slate-700">
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td rowspan="3" class="p-3 font-bold bg-slate-100 border-r border-slate-200">Platform Capital</td>
                        <td class="p-3 border-r border-slate-200">Total Investment Target</td>
                        <td class="p-3 font-mono">USD 500,000,000</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-3 border-r border-slate-200">Indonesian Allocation</td>
                        <td class="p-3 font-mono">USD 120M - 150M (25-30%)</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-3 border-r border-slate-200">International Allocation</td>
                        <td class="p-3 font-mono">USD 350M - 380M (70-75%)</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td rowspan="3" class="p-3 font-bold bg-slate-100 border-r border-slate-200">USA M&A</td>
                        <td class="p-3 border-r border-slate-200">Target EBITDA Multiple</td>
                        <td class="p-3 font-mono">6.5x Base (Range 5.5x - 7.5x)</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200">Integration Synergy Uplift</td>
                        <td class="p-3 font-mono">10% - 20% EBITDA improvement</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200">Integration Timeline</td>
                        <td class="p-3 font-mono">18 - 24 Months</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td rowspan="2" class="p-3 font-bold bg-slate-100 border-r border-slate-200">LCO2 SuperFrozen</td>
                        <td class="p-3 border-r border-slate-200">Premium Uplift Assumption</td>
                        <td class="p-3 font-mono">20% - 30% Base Case</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-3 border-r border-slate-200">LCO2 Operating Cost</td>
                        <td class="p-3 font-mono">USD 80 - 160 per Ton processed</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="exec-footer-text">
            All assumptions contained in the register are preliminary model inputs subject to final technical and market validation. These variables form the basis of the 10-year consolidated P&L and return metrics. All costs and revenues are modeled in real terms, with conservative escalation factors applied for labor and fuel where appropriate.
        </div>
    </div>
`;

// Insert Section 7 before Section 8 divider
const section8Divider = '<div class="doc-page divider-page">\n        <div class="divider-content">\n            <h1 class="text-6xl font-extrabold mb-4 text-white">Section 8</h1>';
content = content.replace(section8Divider, section7Expansion + '\n' + section8Divider);

// Insert Section 9 at the end of the body
content = content.replace('</body>', section9Expansion + '\n</body>');

fs.writeFileSync(filePath, content);
console.log('Section 7 and Section 9 (Appendices) initial build complete.');
