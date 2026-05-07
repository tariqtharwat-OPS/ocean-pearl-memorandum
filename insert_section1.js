const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix early page structures and insert Section 1
const section1Content = `
    <!-- SECTION 1 DIVIDER -->
    <div class="doc-page divider-page">
        <div class="divider-content">
            <h1 class="text-6xl font-extrabold mb-4 text-white">Section 1</h1>
            <div class="w-24 h-1 mx-auto mb-8" style="background-color: var(--corp-gold);"></div>
            <h2 class="text-4xl font-bold tracking-tight text-white mb-6 uppercase tracking-widest">Global Platform & Infrastructure Empire</h2>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Vertical Integration of the Seafood Supply Chain: From Artisanal Harvest to Global Institutional Retail.
            </p>
        </div>
    </div>

    <!-- PAGE 14: THE INDONESIAN INDUSTRIAL HQ -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">14</span>
        </div>
        <h2 class="exec-headline">The Indonesian Industrial HQ</h2>
        <h3 class="exec-subheadline">Centralizing strategic control, value-added processing, and global treasury.</h3>
        
        <div class="exec-visual-box bg-slate-50 p-10 border border-slate-300">
            <div class="grid grid-cols-2 gap-10 w-full">
                <div class="p-6 bg-white border-l-4 border-corp-navy shadow-sm">
                    <div class="text-lg font-bold text-corp-navy mb-4 uppercase">Surabaya: Industrial Heart</div>
                    <ul class="space-y-3 text-sm text-slate-700">
                        <li>• Primary Export Manufacturing Hub</li>
                        <li>• Centralized SuperFrozen & Canning Lines</li>
                        <li>• Global Quality Control (HACCP/FDA/MSC)</li>
                        <li>• Estimated Allocation: USD 55M–75M</li>
                    </ul>
                </div>
                <div class="p-6 bg-white border-l-4 border-corp-gold shadow-sm">
                    <div class="text-lg font-bold text-corp-navy mb-4 uppercase">Jakarta: Strategic Command</div>
                    <ul class="space-y-3 text-sm text-slate-700">
                        <li>• Corporate & Financial Coordination</li>
                        <li>• Investor Relations & Regulatory Affairs</li>
                        <li>• Group Treasury Anchor</li>
                        <li>• Legal & IP Ownership Hub</li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 p-6 bg-corp-navy text-white text-center rounded">
                <div class="text-sm uppercase tracking-widest font-bold mb-2">Preliminary model assumption</div>
                <div class="text-xl font-serif italic">"PT Ocean Pearl Indonesia serves as the 'Brain' of the global organism, ensuring that 100% of international expansion value is repatriated to the domestic center."</div>
            </div>
        </div>
        <div class="exec-footer-text">
            Indonesia is the irreplaceable strategic anchor of the Ocean Pearl platform. While capital is deployed internationally to capture downstream margins, the industrial, technological, and fiscal center remains firmly in Indonesia. Surabaya provides the deep-water port access and industrial scale required to process raw material from the entire archipelago and the Oman corridor, while Jakarta ensures seamless alignment with Indonesian sovereign interests and global institutional capital requirements.
        </div>
    </div>

    <!-- PAGE 15: EASTERN INDONESIA CONSOLIDATION -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">15</span>
        </div>
        <h2 class="exec-headline">Eastern Indonesia Consolidation</h2>
        <h3 class="exec-subheadline">Unlocking the productivity of the world's richest marine biomass.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0">
            <div class="grid grid-cols-3 w-full h-full">
                <div class="p-8 border-r border-slate-200">
                    <div class="text-4xl mb-4">⚓</div>
                    <div class="text-lg font-bold text-corp-navy uppercase mb-2">Makassar Hub</div>
                    <div class="text-sm text-slate-600 mb-4">Eastern Consolidation Hub</div>
                    <div class="text-xl font-bold text-corp-blue">USD 25M–40M</div>
                </div>
                <div class="p-8 border-r border-slate-200 bg-slate-50">
                    <div class="text-4xl mb-4">🌊</div>
                    <div class="text-lg font-bold text-corp-navy uppercase mb-2">Papua/Maluku</div>
                    <div class="text-sm text-slate-600 mb-4">Sourcing Infrastructure</div>
                    <div class="text-xl font-bold text-corp-blue">USD 15M–25M</div>
                </div>
                <div class="p-8">
                    <div class="text-4xl mb-4">❄️</div>
                    <div class="text-lg font-bold text-corp-navy uppercase mb-2">Sulawesi</div>
                    <div class="text-sm text-slate-600 mb-4">Cold-Chain Network</div>
                    <div class="text-xl font-bold text-corp-blue">Included in Hubs</div>
                </div>
            </div>
            <div class="w-full p-6 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 italic text-center">
                Preliminary model assumptions — subject to vendor quotation, legal/tax review, technical due diligence, market validation, and investor negotiation.
            </div>
        </div>
        <div class="exec-footer-text">
            Eastern Indonesia represents the platform's primary sourcing frontier. By establishing Makassar as a tier-1 consolidation and processing hub, Ocean Pearl reduces the logistics friction between remote harvest zones (Papua, Maluku) and international markets. This regional infrastructure provides the necessary cold-storage buffer to stabilize supply, while the localized ice-factory network ensures that artisanal catch is upgraded to export-grade quality at the point of origin.
        </div>
    </div>

    <!-- PAGE 16: THE OMAN / YEMEN / SOMALIA CORRIDOR -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">16</span>
        </div>
        <h2 class="exec-headline">The Arabian Sea Sourcing Corridor</h2>
        <h3 class="exec-subheadline">Securing strategic raw material supply via the Salalah transshipment hub.</h3>
        
        <div class="exec-visual-box bg-slate-900 text-white p-12 relative overflow-hidden">
            <div class="absolute inset-0 opacity-10" style="background-image: url('assets/maps/arabian_sea_corridor.png'); background-size: cover; background-position: center;"></div>
            <div class="relative z-10 w-full">
                <div class="text-sm font-black text-corp-gold uppercase tracking-[0.3em] mb-10 text-center">STRATEGIC SOURCING ARCHITECTURE</div>
                <div class="grid grid-cols-2 gap-10">
                    <div class="p-6 border border-slate-700 bg-slate-800/50 rounded-lg">
                        <div class="text-corp-gold font-bold mb-2">Salalah Transshipment Hub</div>
                        <ul class="text-xs space-y-2 text-slate-300">
                            <li>• GCC/Oman Legal Entity Core</li>
                            <li>• Direct Mother-Vessel Integration</li>
                            <li>• Regional Cold Storage (1,000 MT+)</li>
                            <li>• Allocation: USD 15M–25M (Phase 1)</li>
                        </ul>
                    </div>
                    <div class="p-6 border border-slate-700 bg-slate-800/50 rounded-lg">
                        <div class="text-corp-gold font-bold mb-2">Collection & Fleet Model</div>
                        <ul class="text-xs space-y-2 text-slate-300">
                            <li>• Vessel-Based Ice & Grading</li>
                            <li>• Yemen/Somalia Corridor Sourcing*</li>
                            <li>• Direct Bulk Transfer to Surabaya</li>
                            <li>• Expansion: USD 50M–80M+</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-8 p-4 bg-white/10 rounded text-[10px] text-slate-400 italic">
                    *All Yemen/Somalia sourcing is subject to applicable maritime, fisheries, sanctions, customs, licensing, and host-country regulations. Preliminary model assumptions subject to validation.
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The Arabian Sea corridor provides Ocean Pearl with a counter-seasonal sourcing advantage and access to some of the world's most productive under-industrialized fisheries. By basing operations in Salalah, Oman, the platform utilizes a stable GCC-regulated hub to consolidate catch from the broader region. This raw material is either exported directly to premium MENA/EU markets or transported in bulk to Ocean Pearl’s Indonesian manufacturing centers for high-margin canning, smoking, and value-added processing.
        </div>
    </div>

    <!-- PAGE 17: THE EGYPT MENA HUB -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">17</span>
        </div>
        <h2 class="exec-headline">The Egypt MENA Hub</h2>
        <h3 class="exec-subheadline">A regional operating anchor for GCC and North African market penetration.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <div class="flex h-full w-full">
                <div class="w-1/2 p-10 flex flex-col justify-center">
                    <div class="text-sm font-black text-corp-navy uppercase mb-4 tracking-widest">Regional Operating Substance</div>
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-corp-gold flex-shrink-0 flex items-center justify-center font-bold">01</div>
                            <p class="text-sm text-slate-700"><strong>Sales & Distribution:</strong> Managing HORECA and supermarket relationships across Egypt and the wider GCC.</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-corp-navy text-white flex-shrink-0 flex items-center justify-center font-bold">02</div>
                            <p class="text-sm text-slate-700"><strong>Regional Inventory:</strong> Wholly-owned cold storage managing Indonesian, Omani, and Egyptian-origin products.</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-8 h-8 bg-blue-600 text-white flex-shrink-0 flex items-center justify-center font-bold">03</div>
                            <p class="text-sm text-slate-700"><strong>Local Sourcing:</strong> Monetizing Egyptian-origin products (Glass Eel, Crawfish, Red Sea items) via global Ocean Pearl channels.</p>
                        </div>
                    </div>
                </div>
                <div class="w-1/2 bg-slate-50 border-l border-slate-200 p-10 flex flex-col items-center justify-center text-center">
                    <div class="text-4xl font-bold text-corp-navy mb-2">USD 25M–40M</div>
                    <div class="text-sm uppercase font-bold text-slate-500 mb-8">Platform Allocation</div>
                    <div class="p-6 bg-white border-2 border-corp-gold shadow-lg">
                        <div class="text-xs uppercase font-black text-corp-navy mb-1">Target Market</div>
                        <div class="text-xl font-bold text-corp-gold">SAUDI ARABIA</div>
                        <div class="mt-2 text-[10px] text-slate-500">Coordination via Cairo Office</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            Egypt serves as the platform's primary commercial gateway to the MENA region. Unlike a traditional representative office, the Cairo hub is engineered as an active operating entity with inventory-holding capability and regional sales coordination. This hub ensures that Ocean Pearl products have a local physical presence in the rapidly expanding Egyptian and Saudi markets, allowing for better cash collection, regional trade finance utilization, and direct control over premium buyer relationships.
        </div>
    </div>

    <!-- PAGE 18: SAUDI ARABIA MARKET STRATEGY -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">18</span>
        </div>
        <h2 class="exec-headline">Saudi Arabia Market Strategy</h2>
        <h3 class="exec-subheadline">Capturing the high-growth HORECA and retail segments of the Kingdom.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-8 w-full">
                <div class="bg-white p-8 border-t-4 border-emerald-600 shadow-md">
                    <div class="text-lg font-bold text-corp-navy mb-4">Phase 1: Partnership Model</div>
                    <p class="text-sm text-slate-700 leading-relaxed">Utilization of premium distributor partnerships to penetrate the Riyadh, Jeddah, and NEOM HORECA channels. Focus on SuperFrozen tuna, octopus, and premium shrimp.</p>
                </div>
                <div class="bg-white p-8 border-t-4 border-corp-gold shadow-md">
                    <div class="text-lg font-bold text-corp-navy mb-4">Phase 2: Managed Growth</div>
                    <p class="text-sm text-slate-700 leading-relaxed">Transition to a Saudi-owned distribution JV or entity once volume and margins justify direct cold-chain investment. Estimated P2 allocation: USD 10M–25M.</p>
                </div>
            </div>
            <div class="mt-10 grid grid-cols-4 gap-4 w-full text-center">
                <div class="p-4 bg-emerald-50 rounded border border-emerald-100">
                    <div class="text-xs font-bold text-emerald-800 uppercase">Hotels & Resorts</div>
                </div>
                <div class="p-4 bg-emerald-50 rounded border border-emerald-100">
                    <div class="text-xs font-bold text-emerald-800 uppercase">Airline Catering</div>
                </div>
                <div class="p-4 bg-emerald-50 rounded border border-emerald-100">
                    <div class="text-xs font-bold text-emerald-800 uppercase">Premium Retail</div>
                </div>
                <div class="p-4 bg-emerald-50 rounded border border-emerald-100">
                    <div class="text-xs font-bold text-emerald-800 uppercase">NEOM Hub</div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The Saudi Arabian market represents one of the most critical demand engines for high-margin seafood products in the GCC. Ocean Pearl’s strategy balances immediate market entry with long-term infrastructure control. By initially leveraging distributor partnerships managed from the Egypt MENA Hub, the platform minimizes initial CapEx while securing high-value contracts with major hotel chains and institutional caterers. This tiered approach allows for capital discipline while positioning the platform for a future JV distribution entity as Saudi market volume scales.
        </div>
    </div>

    <!-- PAGE 19: USA ACQUISITION STRATEGY -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">19</span>
        </div>
        <h2 class="exec-headline">USA Acquisition Strategy</h2>
        <h3 class="exec-subheadline">Securing direct downstream retail penetration via targeted M&A.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <div class="flex w-full h-full">
                <div class="w-1/3 p-8 border-r border-slate-200 flex flex-col justify-center">
                    <div class="text-sm font-black text-corp-navy uppercase mb-6">Target Profile</div>
                    <div class="space-y-4">
                        <div class="p-3 bg-slate-50 text-[11px] font-bold border border-slate-200">Revenue: USD 40M–120M</div>
                        <div class="p-3 bg-slate-50 text-[11px] font-bold border border-slate-200">Multiple: 5.5x–7.5x EBITDA</div>
                        <div class="p-3 bg-slate-50 text-[11px] font-bold border border-slate-200">Location: US East Coast / FL</div>
                        <div class="p-3 bg-slate-50 text-[11px] font-bold border border-slate-200">FDA/Import Infrastructure</div>
                    </div>
                </div>
                <div class="w-2/3 p-10 bg-slate-50">
                    <div class="text-sm font-black text-corp-navy uppercase mb-6">Strategic Value Capture</div>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="p-6 bg-white shadow-sm border border-slate-200">
                            <div class="font-bold text-corp-blue mb-2">Direct Margin</div>
                            <p class="text-xs text-slate-600">Reclaiming the 10-15% margin currently lost to international middlemen and distributors.</p>
                        </div>
                        <div class="p-6 bg-white shadow-sm border border-slate-200">
                            <div class="font-bold text-corp-blue mb-2">Retail Route</div>
                            <p class="text-xs text-slate-600">Immediate access to Tier-1 supermarket shelves and high-volume private label channels.</p>
                        </div>
                        <div class="p-6 bg-white shadow-sm border border-slate-200">
                            <div class="font-bold text-corp-blue mb-2">FDA Stability</div>
                            <p class="text-xs text-slate-600">Utilizing an established import infrastructure to ensure seamless US market entry for ID products.</p>
                        </div>
                        <div class="p-6 bg-white shadow-sm border border-slate-200">
                            <div class="font-bold text-corp-blue mb-2">Synergy Potential</div>
                            <p class="text-xs text-slate-600">10-20% EBITDA improvement over 36 months through Ocean Pearl supply chain integration.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The USA is a primary destination for Ocean Pearl’s high-value exports, specifically SuperFrozen tuna and premium octopus. To maximize value capture, the platform will acquire an established US-based seafood importer/distributor. This acquisition provides an immediate "bridge" between Indonesian processing and the American consumer. By internalizing the distribution margin and utilizing an existing FDA-compliant infrastructure, Ocean Pearl eliminates third-party friction and establishes a highly defensible downstream position in the world's most lucrative seafood market.
        </div>
    </div>

    <!-- PAGE 20: CHINA & JAPAN MARKET TRIALS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">20</span>
        </div>
        <h2 class="exec-headline">China & Japan Market Access</h2>
        <h3 class="exec-subheadline">Stage 1/2 export trials and premium channel validation.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full h-full items-stretch">
                <div class="p-8 bg-slate-900 text-white flex flex-col justify-between">
                    <div>
                        <div class="text-corp-gold font-bold mb-1 uppercase tracking-widest text-xs">Japan: The Premium Hub</div>
                        <div class="text-2xl font-black mb-6">Sashimi-Grade Routing</div>
                        <ul class="text-xs space-y-3 text-slate-300">
                            <li>• Focus: SuperFrozen Tuna & Octopus</li>
                            <li>• Channel: Premium Sashimi Buyers</li>
                            <li>• Goal: 20-30% Price Premium Capture</li>
                            <li>• Strategy: Direct Partnership via P1 Trials</li>
                        </ul>
                    </div>
                    <div class="text-[10px] text-slate-500 italic mt-6">Japan Allocation: USD 10M–15M initially</div>
                </div>
                <div class="p-8 bg-corp-navy text-white flex flex-col justify-between">
                    <div>
                        <div class="text-corp-gold font-bold mb-1 uppercase tracking-widest text-xs">China: The Volume Engine</div>
                        <div class="text-2xl font-black mb-6">Wholesale & E-Commerce</div>
                        <ul class="text-xs space-y-3 text-slate-300">
                            <li>• Focus: Frozen Tuna, Shrimp, & Octopus</li>
                            <li>• Channel: E-commerce & Wholesale</li>
                            <li>• Goal: High-Velocity Volume Penetration</li>
                            <li>• Strategy: Distributor Partnership</li>
                        </ul>
                    </div>
                    <div class="text-[10px] text-slate-500 italic mt-6">China Allocation: USD 5M–15M initially</div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            China and Japan represent contrasting but equally vital opportunities for the Ocean Pearl platform. Japan provides the highest price realization for SuperFrozen LCO₂ products, while China offers massive volume potential through both traditional wholesale and emerging e-commerce channels. During Stages 1 and 2, the platform will focus on validating these channels through direct export trials and strategic partnerships, with the option to establish owned distribution entities in Stage 3 and 4 as market dominance is validated.
        </div>
    </div>

    <!-- PAGE 21: THE INDUSTRIAL REPATRIATION MODEL -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">21</span>
        </div>
        <h2 class="exec-headline">The Industrial Repatriation Model</h2>
        <h3 class="exec-subheadline">Architecting international deployment for domestic enterprise value growth.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="flex flex-col items-center w-full">
                <div class="text-sm font-black text-corp-navy uppercase mb-10 tracking-widest">Global Cash & Value Flows</div>
                <div class="relative w-full h-48 bg-white border border-slate-200 shadow-inner flex items-center justify-around">
                    <div class="text-center">
                        <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">Foreign<br>Asset Base</div>
                        <div class="mt-2 text-[10px] font-black">70-75% DEPLOYMENT</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="text-emerald-500 text-3xl">←</div>
                        <div class="text-[9px] font-black text-emerald-600">DIVIDENDS / FEES / MARGINS</div>
                    </div>
                    <div class="text-center">
                        <div class="w-32 h-32 bg-corp-navy text-white rounded-full flex flex-col items-center justify-center text-center p-4 border-4 border-corp-gold shadow-2xl">
                            <div class="text-xs uppercase font-bold mb-1">Indonesia HQ</div>
                            <div class="text-[9px] text-corp-gold font-black">TREASURY & IP ANCHOR</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6 w-full mt-12 text-[11px] font-bold text-slate-700 text-center">
                    <div class="p-4 bg-white border border-slate-200">Indonesian HQ Coordination Income</div>
                    <div class="p-4 bg-white border border-slate-200">Global IP & Technology Fees</div>
                    <div class="p-4 bg-white border border-slate-200">Repatriated Enterprise Value</div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The Ocean Pearl model is designed to maximize Indonesian enterprise value through disciplined international expansion. While approximately 75% of platform capital is deployed internationally to secure sourcing and distribution hubs, this architecture is engineered to repatriate value to the Indonesian HQ. By centralizing management fees, IP licensing, procurement margins, and global dividends, PT Ocean Pearl Indonesia captures the exponential growth of a multinational conglomerate while maintaining its strategic, operational, and fiscal heart in the Republic of Indonesia.
        </div>
    </div>

    <!-- PAGE 22: CAPITAL STACK & DEPLOYMENT STAGES -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 1: Global Platform & Infrastructure</span>
            <span class="page-num">22</span>
        </div>
        <h2 class="exec-headline">Capital Stack & Deployment Stages</h2>
        <h3 class="exec-subheadline">A disciplined 5-stage scale-up logic over the platform lifecycle.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <table class="w-full text-sm border-collapse">
                <thead>
                    <tr class="bg-corp-navy text-white text-left">
                        <th class="p-4 font-bold border-r border-white/10">Stage</th>
                        <th class="p-4 font-bold border-r border-white/10">Strategic Focus</th>
                        <th class="p-4 font-bold">Capital Allocation (USD)</th>
                    </tr>
                </thead>
                <tbody class="text-slate-700">
                    <tr class="border-b border-slate-100">
                        <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">Stage 0</td>
                        <td class="p-4 border-r border-slate-200">Strategic Formation / Pre-seed / Legal & Systems</td>
                        <td class="p-4 font-mono font-bold text-corp-navy">USD 20,000,000</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">Stage 1</td>
                        <td class="p-4 border-r border-slate-200">Operational Proof / Initial Hubs / Export Trials</td>
                        <td class="p-4 font-mono font-bold text-corp-navy">USD 50,000,000</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">Stage 2</td>
                        <td class="p-4 border-r border-slate-200">Regional Scale / Salalah Hub / Processing Upgrades</td>
                        <td class="p-4 font-mono font-bold text-corp-navy">USD 100,000,000</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-4 font-bold bg-slate-50 border-r border-slate-200">Stage 3</td>
                        <td class="p-4 border-r border-slate-200">Global Distribution Expansion / USA Acquisition</td>
                        <td class="p-4 font-mono font-bold text-corp-navy">USD 150,000,000</td>
                    </tr>
                    <tr class="bg-slate-100">
                        <td class="p-4 font-bold bg-slate-200 border-r border-slate-200">Stage 4</td>
                        <td class="p-4 border-r border-slate-200">Institutional Platform Scale / MENA & China Growth</td>
                        <td class="p-4 font-mono font-bold text-corp-navy">USD 180,000,000</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="bg-corp-gold text-white font-black uppercase tracking-widest">
                        <td colspan="2" class="p-4 text-right">TOTAL PLATFORM CAPITAL TARGET</td>
                        <td class="p-4 font-mono text-xl">USD 500,000,000</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="exec-footer-text">
            Ocean Pearl executes a phased capital deployment strategy to ensure operational validation at every scale. From the initial USD 20M strategic formation stage through to the final USD 180M institutional scaling phase, the platform maintains a strict ROI focus. This 5-stage logic allows for the dynamic adjustment of capital based on real-world market performance, ensuring that downstream international expansion is always anchored by verified upstream sourcing capacity and Indonesian industrial efficiency.
        </div>
    </div>
`;

// Replace broken P1-P4 endings and insert Section 1
content = content.replace(/<p>Prepared for Sovereign & Institutional Review<\/p>\s*<\/div><\/div>\s*<\/div>/, '<p>Prepared for Sovereign & Institutional Review</p>\n            </div>\n        </div>\n    </div>');
content = content.replace(/<div class="mt-8 pt-4 border-t-2 border-corp-gold w-full text-center">\s*<span class="p-4 bg-corp-navy text-white inline-block">Value Repatriation → Indonesian HQ<\/span>\s*<\/div><\/div><\/div><\/div>/, '<div class="mt-8 pt-4 border-t-2 border-corp-gold w-full text-center">\n                <span class="p-4 bg-corp-navy text-white inline-block">Value Repatriation → Indonesian HQ</span>\n            </div>\n        </div>\n    </div>');

// Insert Section 1 before Page 23
const page23Marker = '<!-- PAGE 23: THE CORE MOAT THESIS -->';
content = content.replace(page23Marker, section1Content + '\n' + page23Marker);

// Update Cover Page with $500M
content = content.replace(/\$500M Master Blueprint/, '$500M Institutional Master Blueprint');

fs.writeFileSync(filePath, content);
console.log('Section 1 insertion and structural fixes complete.');
