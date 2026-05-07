const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

const appendixExpansion = `
    <!-- PAGE 92: FINANCIAL METHODOLOGY -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">92</span>
        </div>
        <h2 class="exec-headline">Financial Methodology</h2>
        <h3 class="exec-subheadline">Standardizing global return calculations and capital weighting.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="space-y-6 text-sm text-slate-700 leading-relaxed">
                <p><strong>1. Weighted Average Cost of Capital (WACC):</strong> A blended WACC of 12.0% is utilized as the primary discount rate. This accounts for a target 60:40 Debt-to-Equity ratio at maturity and incorporates a country-risk premium for Indonesian and MENA operations.</p>
                <p><strong>2. Terminal Value:</strong> Calculated using an 8.5x EBITDA exit multiple in Year 10. This is conservative relative to global FMCG and industrial maritime benchmarks (9x-12x).</p>
                <p><strong>3. Inflation & Escalation:</strong> Revenue and OPEX are modeled in real USD terms, with a 3.0% annual escalation factor applied to Indonesian labor and fuel costs from Year 3 onwards.</p>
                <p><strong>4. Tax Assumptions:</strong> Effective corporate tax rates are modeled at 22% (Indonesia), 0% (Oman/Salalah Free Zone), and 21% (USA consolidated), subject to final tax-structuring review.</p>
            </div>
        </div>
    </div>

    <!-- PAGE 93: SPECIES GLOSSARY & YIELDS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">93</span>
        </div>
        <h2 class="exec-headline">Species Glossary & Yields</h2>
        <h3 class="exec-subheadline">Standardizing technical biomass conversion assumptions.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <table class="w-full text-[10px] border-collapse">
                <thead>
                    <tr class="bg-corp-navy text-white text-left">
                        <th class="p-3 border-r border-white/10">Species</th>
                        <th class="p-3 border-r border-white/10">Yield (Whole-to-Loin)</th>
                        <th class="p-3 border-r border-white/10">SuperFrozen Upgrade</th>
                        <th class="p-3">By-product Utilization</th>
                    </tr>
                </thead>
                <tbody class="text-slate-700">
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-3 font-bold border-r border-slate-200">Yellowfin Tuna</td>
                        <td class="p-3 border-r border-slate-200">42% - 48%</td>
                        <td class="p-3 border-r border-slate-200">High (Sashimi)</td>
                        <td class="p-3">Meal / Oil / Pet Food</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 font-bold border-r border-slate-200">Bigeye Tuna</td>
                        <td class="p-3 border-r border-slate-200">45% - 52%</td>
                        <td class="p-3 border-r border-slate-200">Extreme High</td>
                        <td class="p-3">Meal / Oil</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-3 font-bold border-r border-slate-200">Octopus (Vulgaris)</td>
                        <td class="p-3 border-r border-slate-200">92% (Tenderized)</td>
                        <td class="p-3 border-r border-slate-200">High (Texture)</td>
                        <td class="p-3">N/A</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 font-bold border-r border-slate-200">Skipjack Tuna</td>
                        <td class="p-3 border-r border-slate-200">38% (Canned)</td>
                        <td class="p-3 border-r border-slate-200">Low (Mass Market)</td>
                        <td class="p-3">High Meal Yield</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- PAGE 94: AL ASHRY EQUIPMENT SPECS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">94</span>
        </div>
        <h2 class="exec-headline">Al Ashry Equipment Specs</h2>
        <h3 class="exec-subheadline">Technical baseline for the Tri-Format Ice Network.</h3>
        
        <div class="exec-visual-box bg-slate-900 text-white p-10 border-none">
            <div class="grid grid-cols-2 gap-8 w-full">
                <div class="p-6 border border-slate-700 bg-slate-800">
                    <div class="text-corp-gold font-bold mb-4 uppercase text-xs">Fixed Ice Plant (Standard)</div>
                    <ul class="text-[10px] space-y-2 text-slate-300">
                        <li>• Capacity: 50 - 150 Tons Per Day (TPD)</li>
                        <li>• Ice Type: Sub-cooled Flake / Scale</li>
                        <li>• Storage: 200 - 500 MT Thermal Silo</li>
                        <li>• Power: Grid + Integrated Backup Diesel</li>
                    </ul>
                </div>
                <div class="p-6 border border-slate-700 bg-slate-800">
                    <div class="text-corp-gold font-bold mb-4 uppercase text-xs">Mobile Truck Unit (MTU)</div>
                    <ul class="text-[10px] space-y-2 text-slate-300">
                        <li>• Capacity: 10 - 20 TPD</li>
                        <li>• Mobility: Heavy-Duty 6x4 Chassis</li>
                        <li>• Cooling: Independent Bitzer Compressor</li>
                        <li>• Deployment: Rapid ( < 4 Hours)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- PAGE 95: SUPERFROZEN LCO2 TECH SPECS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">95</span>
        </div>
        <h2 class="exec-headline">SuperFrozen LCO₂ Tech Specs</h2>
        <h3 class="exec-subheadline">Technical parameters for -60°C thermal preservation.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="grid grid-cols-3 gap-6 w-full text-center">
                <div class="p-4 bg-blue-50 border border-blue-200">
                    <div class="text-2xl font-black text-blue-600 mb-2">-60°C</div>
                    <div class="text-[9px] uppercase font-bold text-slate-500">Core Operating Temp</div>
                </div>
                <div class="p-4 bg-blue-50 border border-blue-200">
                    <div class="text-2xl font-black text-blue-600 mb-2">LCO₂</div>
                    <div class="text-[9px] uppercase font-bold text-slate-500">Expendable Refrigerant</div>
                </div>
                <div class="p-4 bg-blue-50 border border-blue-200">
                    <div class="text-2xl font-black text-blue-600 mb-2">90 Min</div>
                    <div class="text-[9px] uppercase font-bold text-slate-500">Pull-Down Time</div>
                </div>
            </div>
            <div class="mt-10 p-6 bg-slate-50 border border-slate-200 w-full text-sm text-slate-700 leading-relaxed">
                The SuperFrozen module utilizes a direct-injection LCO₂ (Liquid Carbon Dioxide) system to achieve rapid thermal pull-down. This method is 4x faster than traditional ammonia or freon blast freezing, preventing the formation of large ice crystals that cause cellular rupture and "drip loss." Resulting product maintains the biological integrity of fresh harvest for up to 24 months.
            </div>
        </div>
    </div>

    <!-- PAGE 96: AI / EBAJAU ARCHITECTURE -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">96</span>
        </div>
        <h2 class="exec-headline">AI / eBajau Architecture</h2>
        <h3 class="exec-subheadline">The technical backbone of the Intelligent Operations Platform.</h3>
        
        <div class="exec-visual-box bg-slate-900 text-white p-12 relative overflow-hidden">
            <div class="grid grid-cols-3 gap-6 w-full relative z-10">
                <div class="p-4 bg-slate-800 border border-slate-700 text-center">
                    <div class="text-xs font-bold text-blue-400 mb-2 uppercase">Core Engine</div>
                    <div class="text-[10px] text-slate-400">Inventory Balancing<br>EBITDA Routing<br>Thermal Monitoring</div>
                </div>
                <div class="p-4 bg-slate-800 border border-slate-700 text-center">
                    <div class="text-xs font-bold text-blue-400 mb-2 uppercase">Input Layer</div>
                    <div class="text-[10px] text-slate-400">VMS / GPS Tracking<br>Plant IoT Sensors<br>Market Price APIs</div>
                </div>
                <div class="p-4 bg-slate-800 border border-slate-700 text-center">
                    <div class="text-xs font-bold text-blue-400 mb-2 uppercase">Output Layer</div>
                    <div class="text-[10px] text-slate-400">Investor Dashboard<br>Logistics Orders<br>Audit Trail Logs</div>
                </div>
            </div>
        </div>
    </div>

    <!-- PAGE 97: ESG & FDA STANDARDS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">97</span>
        </div>
        <h2 class="exec-headline">ESG & Global Standards</h2>
        <h3 class="exec-subheadline">Adhering to the world's most rigorous quality and ethical frameworks.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-8 w-full text-sm">
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">MSC</div>
                        <div><div class="font-bold">Marine Stewardship Council</div><div class="text-[10px] text-slate-500">Traceable & Sustainable Fisheries</div></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center font-bold">FDA</div>
                        <div><div class="font-bold">US Food & Drug Admin</div><div class="text-[10px] text-slate-500">HACCP & Import Compliance</div></div>
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-slate-50 text-slate-600 flex items-center justify-center font-bold">BRC</div>
                        <div><div class="font-bold">BRC Global Standards</div><div class="text-[10px] text-slate-500">Global Food Safety Initiative</div></div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-yellow-50 text-yellow-600 flex items-center justify-center font-bold">ESG</div>
                        <div><div class="font-bold">Global ESG Reporting</div><div class="text-[10px] text-slate-500">SASB & GRI Alignment</div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PAGE 98: RISK REGISTER (SUMMARY) -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">98</span>
        </div>
        <h2 class="exec-headline">Institutional Risk Register</h2>
        <h3 class="exec-subheadline">Identifying and mitigating core platform risk factors.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden text-[9px]">
            <table class="w-full border-collapse">
                <thead>
                    <tr class="bg-slate-100 text-slate-800 text-left font-bold">
                        <th class="p-3 border-b border-slate-200 border-r border-slate-200">Risk Category</th>
                        <th class="p-3 border-b border-slate-200 border-r border-slate-200">Mitigation Strategy</th>
                        <th class="p-3 border-b border-slate-200">Risk Owner</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200 font-bold bg-slate-50">Supply Volatility</td>
                        <td class="p-3 border-r border-slate-200">Diversified sourcing across Oman, ID (multiple regions), and Egypt hubs.</td>
                        <td class="p-3 font-bold">COO</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200 font-bold bg-slate-50">FX Volatility</td>
                        <td class="p-3 border-r border-slate-200">Natural USD hedging vs. IDR industrial cost base. Currency forward use.</td>
                        <td class="p-3 font-bold">CFO</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200 font-bold bg-slate-50">Regulatory Change</td>
                        <td class="p-3 border-r border-slate-200">Centralized Government Relations in Jakarta and local legal hubs.</td>
                        <td class="p-3 font-bold">Legal / CEO</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 border-r border-slate-200 font-bold bg-slate-50">Execution Risk</td>
                        <td class="p-3 border-r border-slate-200">Phased capital deployment (Stage 0 - 4) with operational KPI gates.</td>
                        <td class="p-3 font-bold">Project PMO</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- PAGE 99: DATA ROOM CHECKLIST -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 9: Institutional Appendices</span>
            <span class="page-num">99</span>
        </div>
        <h2 class="exec-headline">Investor Data Room Checklist</h2>
        <h3 class="exec-subheadline">Required documentation for final phase due diligence.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-12">
            <div class="grid grid-cols-2 gap-10 w-full text-xs">
                <ul class="space-y-4">
                    <li class="flex items-center gap-3">🗂️ <strong>Corporate Documents:</strong> Articles, Licenses, UBO structures.</li>
                    <li class="flex items-center gap-3">📊 <strong>Financial Model:</strong> Full dynamic XLSX with assumptions.</li>
                    <li class="flex items-center gap-3">🏗️ <strong>Technical Specs:</strong> Al Ashry/LCO2 engineering files.</li>
                </ul>
                <ul class="space-y-4">
                    <li class="flex items-center gap-3">⚖️ <strong>Legal & IP:</strong> Patents, Trademarks, Intercompany Agreem.</li>
                    <li class="flex items-center gap-3">📝 <strong>Operational Logs:</strong> Pilot trial data, export BoLs.</li>
                    <li class="flex items-center gap-3">🛡️ <strong>Compliance:</strong> AML Manuals, Sanctions screening logs.</li>
                </ul>
            </div>
            <div class="mt-12 p-4 bg-corp-navy text-white text-[10px] uppercase font-black tracking-widest">Access Request: compliance@oceanpearl.global</div>
        </div>
    </div>

    <!-- PAGE 100: FINAL STRATEGIC SUMMARY -->
    <div class="doc-page divider-page">
        <div class="divider-content">
            <div class="w-full flex-grow flex justify-center items-center mb-12">
                <img src="assets/logos/logo.png" alt="Ocean Pearl Logo" class="w-32 object-contain mx-auto brightness-200">
            </div>
            <h2 class="text-4xl font-black text-white mb-6">Building the Future of Maritime Sovereignty</h2>
            <div class="w-24 h-1 mx-auto mb-10" style="background-color: var(--corp-gold);"></div>
            <p class="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                End of Institutional Feasibility Memorandum.
            </p>
        </div>
    </div>
`;

// Replace "massive" on line 508 (approx)
content = content.replace(/while China offers massive volume potential/, 'while China offers material volume potential');

// Append remaining appendices before the end of body
content = content.replace('</body>', appendixExpansion + '\n</body>');

fs.writeFileSync(filePath, content);
console.log('Final Appendices and wording fix complete.');
