const fs = require('fs');
const filePath = 'd:/Platform/MASTER_HTML.html';
let content = fs.readFileSync(filePath, 'utf8');

const financialExpansion = `
    <!-- PAGE 76: 10-YEAR P&L MODEL -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 6: The Institutional Financial Model</span>
            <span class="page-num">76</span>
        </div>
        <h2 class="exec-headline">10-Year Consolidated P&L</h2>
        <h3 class="exec-subheadline">Long-term platform performance and EBITDA generation.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <table class="w-full text-[10px] border-collapse">
                <thead>
                    <tr class="bg-corp-navy text-white">
                        <th class="p-2 border-r border-white/10 text-left">Consolidated (USD '000)</th>
                        <th class="p-2 border-r border-white/10">Y1</th>
                        <th class="p-2 border-r border-white/10">Y2</th>
                        <th class="p-2 border-r border-white/10">Y3</th>
                        <th class="p-2 border-r border-white/10">Y4</th>
                        <th class="p-2 border-r border-white/10">Y5</th>
                        <th class="p-2 border-r border-white/10">Y10</th>
                    </tr>
                </thead>
                <tbody class="text-right">
                    <tr class="border-b border-slate-100 bg-slate-50">
                        <td class="p-2 text-left font-bold">Total Platform Revenue</td>
                        <td class="p-2">42,500</td>
                        <td class="p-2">115,000</td>
                        <td class="p-2">245,000</td>
                        <td class="p-2">385,000</td>
                        <td class="p-2">520,000</td>
                        <td class="p-2">1,150,000</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 text-left">Cost of Goods Sold (COGS)</td>
                        <td class="p-2">(34,850)</td>
                        <td class="p-2">(88,550)</td>
                        <td class="p-2">(178,850)</td>
                        <td class="p-2">(269,500)</td>
                        <td class="p-2">(353,600)</td>
                        <td class="p-2">(747,500)</td>
                    </tr>
                    <tr class="border-b border-slate-100 bg-emerald-50">
                        <td class="p-2 text-left font-bold text-emerald-800">Gross Profit</td>
                        <td class="p-2">7,650</td>
                        <td class="p-2">26,450</td>
                        <td class="p-2">66,150</td>
                        <td class="p-2">115,500</td>
                        <td class="p-2">166,400</td>
                        <td class="p-2">402,500</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-2 text-left">Operating Expenses (OPEX)</td>
                        <td class="p-2">(4,250)</td>
                        <td class="p-2">(10,350)</td>
                        <td class="p-2">(19,600)</td>
                        <td class="p-2">(30,800)</td>
                        <td class="p-2">(41,600)</td>
                        <td class="p-2">(92,000)</td>
                    </tr>
                    <tr class="border-b-2 border-corp-navy bg-slate-100">
                        <td class="p-2 text-left font-bold">EBITDA</td>
                        <td class="p-2 font-bold">3,400</td>
                        <td class="p-2 font-bold">16,100</td>
                        <td class="p-2 font-bold">46,550</td>
                        <td class="p-2 font-bold">84,700</td>
                        <td class="p-2 font-bold">124,800</td>
                        <td class="p-2 font-bold">310,500</td>
                    </tr>
                    <tr class="bg-slate-50">
                        <td class="p-2 text-left italic text-slate-500">EBITDA Margin %</td>
                        <td class="p-2">8.0%</td>
                        <td class="p-2">14.0%</td>
                        <td class="p-2">19.0%</td>
                        <td class="p-2">22.0%</td>
                        <td class="p-2 text-emerald-600 font-bold">24.0%</td>
                        <td class="p-2 text-emerald-600 font-bold">27.0%</td>
                    </tr>
                </tbody>
            </table>
            <div class="w-full p-4 bg-slate-100 text-[9px] text-slate-500 italic text-center border-t border-slate-200">
                Preliminary model assumptions — subject to vendor quotation, legal/tax review, technical due diligence, market validation, and investor negotiation. 70–75% of capital deployed internationally; value repatriated to ID HQ.
            </div>
        </div>
        <div class="exec-footer-text">
            The 10-year consolidated P&L demonstrates the high-operating leverage of the Ocean Pearl platform. As the platform scales from Stage 1 proof-of-concept (Y1) through to full institutional scale (Y10), the blended EBITDA margin expands from 8% to 27%. This margin expansion is driven by the gradual internalization of the downstream distribution margin (USA/MENA hubs) and the increasing utilization of high-margin SuperFrozen LCO₂ lines relative to traditional commodity bulk exports.
        </div>
    </div>

    <!-- PAGE 77: EBITDA BRIDGE & DRIVERS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 6: The Institutional Financial Model</span>
            <span class="page-num">77</span>
        </div>
        <h2 class="exec-headline">EBITDA Bridge & Drivers</h2>
        <h3 class="exec-subheadline">Identifying the primary levers for platform profitability.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-10">
            <div class="flex flex-col items-center w-full">
                <div class="text-sm font-black text-corp-navy uppercase mb-10 tracking-widest">EBITDA Margin Uplift Drivers (Y1 to Y5)</div>
                <div class="grid grid-cols-4 gap-4 w-full h-48 items-end">
                    <div class="flex flex-col items-center">
                        <div class="w-16 bg-slate-400 h-16 shadow-inner"></div>
                        <div class="mt-4 text-[10px] text-center font-bold">Y1 Base<br>8.0%</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 bg-blue-500 h-24 shadow-inner"></div>
                        <div class="mt-4 text-[10px] text-center font-bold">Downstream<br>Integration (+5.2%)</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 bg-blue-600 h-32 shadow-inner"></div>
                        <div class="mt-4 text-[10px] text-center font-bold">SuperFrozen<br>Premium (+6.5%)</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 bg-emerald-500 h-40 shadow-2xl border-t-4 border-corp-gold"></div>
                        <div class="mt-4 text-[10px] text-center font-bold">Y5 Target<br>24.0%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            The transition from a single-digit to a mid-20s EBITDA margin is anchored by three primary drivers: (1) The internalization of the 10-15% distribution margin currently captured by international traders, (2) the realization of 20-30% pricing premiums via SuperFrozen LCO₂ technology, and (3) operational scale efficiencies in the Surabaya and Salalah industrial hubs. This bridge represents a disciplined evolution from commodity sourcing to high-value infrastructure-backed distribution.
        </div>
    </div>

    <!-- PAGE 78: IRR & NPV ANALYSIS -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 6: The Institutional Financial Model</span>
            <span class="page-num">78</span>
        </div>
        <h2 class="exec-headline">Return Metrics: IRR & NPV</h2>
        <h3 class="exec-subheadline">Institutional-grade return profiles for long-term capital providers.</h3>
        
        <div class="exec-visual-box bg-slate-50 border border-slate-300 p-10">
            <div class="grid grid-cols-2 gap-10 w-full h-full items-center">
                <div class="p-8 bg-white shadow-xl border-t-8 border-corp-navy text-center">
                    <div class="text-sm font-bold text-slate-500 uppercase mb-2">Platform Target IRR</div>
                    <div class="text-6xl font-black text-corp-navy mb-4 font-serif italic">22.8%</div>
                    <div class="text-xs text-slate-400">10-Year Levered IRR Assumption</div>
                </div>
                <div class="p-8 bg-white shadow-xl border-t-8 border-corp-gold text-center">
                    <div class="text-sm font-bold text-slate-500 uppercase mb-2">Net Present Value (NPV)</div>
                    <div class="text-5xl font-black text-corp-navy mb-4 font-serif italic">$785M</div>
                    <div class="text-xs text-slate-400">@ 12% WACC Discount Rate</div>
                </div>
            </div>
            <div class="mt-10 grid grid-cols-3 gap-6 w-full text-center text-[11px] font-bold">
                <div class="p-4 bg-slate-100">Payback Period: 5.2 Years</div>
                <div class="p-4 bg-slate-100">ROIC (Stabilized): 18.5%</div>
                <div class="p-4 bg-slate-100">Terminal Multiple: 8.5x EBITDA</div>
            </div>
        </div>
        <div class="exec-footer-text">
            Ocean Pearl’s financial model is engineered to deliver superior risk-adjusted returns relative to traditional maritime or agricultural investments. With a target levered IRR of 22.8% and an NPV of $785M at full scale, the platform represents a highly bankable proposition for sovereign wealth funds and long-term infrastructure investors. These returns are supported by the defensive nature of the food-security infrastructure and the high-margin downstream retail penetration in the USA and MENA markets.
        </div>
    </div>

    <!-- PAGE 79: DEBT SERVICE & DSCR -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 6: The Institutional Financial Model</span>
            <span class="page-num">79</span>
        </div>
        <h2 class="exec-headline">Debt Service & Coverage Logic</h2>
        <h3 class="exec-subheadline">Maintaining conservative leverage and strong cash flow visibility.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <div class="grid grid-cols-3 w-full h-full">
                <div class="col-span-2 p-10">
                    <div class="text-sm font-black text-corp-navy uppercase mb-6">Financing Mix (Target Capital Stack)</div>
                    <div class="flex gap-4 w-full h-12 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                        <div class="h-full bg-corp-navy flex items-center justify-center text-white text-[10px] font-bold" style="width: 40%;">EQUITY (40%)</div>
                        <div class="h-full bg-corp-gold flex items-center justify-center text-white text-[10px] font-bold" style="width: 40%;">INFRA DEBT (40%)</div>
                        <div class="h-full bg-slate-500 flex items-center justify-center text-white text-[10px] font-bold" style="width: 20%;">TRADE FINANCE (20%)</div>
                    </div>
                    <div class="mt-10 grid grid-cols-2 gap-8">
                        <div>
                            <div class="text-xs font-bold text-slate-500 mb-2 uppercase">Cost of Debt Assumptions</div>
                            <ul class="text-[11px] space-y-2 text-slate-700">
                                <li>• Senior Infrastructure Debt: 7.5% - 9.0%</li>
                                <li>• Trade Finance / LC Facilities: 6.5% - 8.5%</li>
                                <li>• USA Acquisition Debt: 8.5% - 11.0%</li>
                            </ul>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-slate-500 mb-2 uppercase">Debt Coverage Metrics</div>
                            <ul class="text-[11px] space-y-2 text-slate-700">
                                <li>• Minimum DSCR Target: 1.25x</li>
                                <li>• Base Case DSCR (Y5): 2.45x</li>
                                <li>• Debt/EBITDA Target: < 3.0x</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-50 border-l border-slate-200 p-10 flex flex-col justify-center text-center">
                    <div class="text-4xl font-bold text-corp-navy mb-2">2.45x</div>
                    <div class="text-[10px] font-black text-slate-500 uppercase mb-10">Target DSCR (Stabilized)</div>
                    <div class="p-6 bg-white border border-slate-200 shadow-md">
                        <div class="text-[9px] text-slate-400 uppercase mb-1">Max Debt Capacity</div>
                        <div class="text-xl font-bold text-corp-blue">$250M</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exec-footer-text">
            Ocean Pearl utilizes a disciplined capital stack that balances equity-driven growth with conservative infrastructure and trade debt. By maintaining a target DSCR (Debt Service Coverage Ratio) of 2.45x at the stabilized platform level, the model ensures significant headroom to survive market volatility or unforeseen CapEx delays. Financing is segmented by asset type, with long-term infrastructure debt funding fixed ports and processing hubs, while revolving trade finance facilities support high-velocity working capital needs in the export corridor.
        </div>
    </div>

    <!-- PAGE 80: SENSITIVITY ANALYSIS MATRIX -->
    <div class="doc-page">
        <div class="page-header">
            <span class="section-title">Section 6: The Institutional Financial Model</span>
            <span class="page-num">80</span>
        </div>
        <h2 class="exec-headline">Sensitivity Analysis Matrix</h2>
        <h3 class="exec-subheadline">Stress-testing the platform against primary market variables.</h3>
        
        <div class="exec-visual-box bg-white border border-slate-300 p-0 overflow-hidden">
            <table class="w-full text-[10px] border-collapse text-center">
                <thead>
                    <tr class="bg-slate-900 text-white">
                        <th class="p-3 border-r border-white/10 text-left">Variable Change (+/-)</th>
                        <th class="p-3 border-r border-white/10">-20% Case</th>
                        <th class="p-3 border-r border-white/10">-10% Case</th>
                        <th class="p-3 border-r border-white/10 bg-corp-gold text-slate-900 font-black">BASE CASE</th>
                        <th class="p-3 border-r border-white/10">+10% Case</th>
                        <th class="p-3">+20% Case</th>
                    </tr>
                </thead>
                <tbody class="text-slate-700">
                    <tr class="border-b border-slate-100">
                        <td class="p-3 text-left font-bold bg-slate-50">Impact on IRR (Base 22.8%)</td>
                        <td class="p-3">14.2%</td>
                        <td class="p-3">18.5%</td>
                        <td class="p-3 font-bold">22.8%</td>
                        <td class="p-3">26.4%</td>
                        <td class="p-3">31.2%</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 text-left font-bold bg-slate-50">Raw Material Cost (Sourcing)</td>
                        <td class="p-3 text-emerald-600">+8.4% IRR</td>
                        <td class="p-3 text-emerald-600">+4.2% IRR</td>
                        <td class="p-3 italic">Neutral</td>
                        <td class="p-3 text-red-600">-4.5% IRR</td>
                        <td class="p-3 text-red-600">-9.2% IRR</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 text-left font-bold bg-slate-50">Global Seafood Pricing</td>
                        <td class="p-3 text-red-600">-12.5% IRR</td>
                        <td class="p-3 text-red-600">-6.2% IRR</td>
                        <td class="p-3 italic">Neutral</td>
                        <td class="p-3 text-emerald-600">+6.5% IRR</td>
                        <td class="p-3 text-emerald-600">+13.4% IRR</td>
                    </tr>
                    <tr class="border-b border-slate-100">
                        <td class="p-3 text-left font-bold bg-slate-50">Freight & Logistics Cost</td>
                        <td class="p-3 text-emerald-600">+3.1% IRR</td>
                        <td class="p-3 text-emerald-600">+1.5% IRR</td>
                        <td class="p-3 italic">Neutral</td>
                        <td class="p-3 text-red-600">-1.8% IRR</td>
                        <td class="p-3 text-red-600">-3.9% IRR</td>
                    </tr>
                    <tr class="bg-slate-50">
                        <td class="p-3 text-left font-bold bg-slate-100">USA Synergy Underperf.</td>
                        <td class="p-3">--</td>
                        <td class="p-3">--</td>
                        <td class="p-3 font-bold">-2.4% IRR</td>
                        <td class="p-3">--</td>
                        <td class="p-3">--</td>
                    </tr>
                </tbody>
            </table>
            <div class="w-full p-4 bg-slate-900 text-[9px] text-slate-400 italic text-center border-t border-slate-700">
                Sensitivity analysis assumes variables are changed independently. Combined downside cases are modeled in the technical appendix. Preliminary model output — subject to validation.
            </div>
        </div>
        <div class="exec-footer-text">
            The platform's returns are most sensitive to global seafood pricing and raw material costs, as expected for a vertically integrated protein player. However, the infrastructure "moat" provides a defensive buffer; even in a -20% seafood pricing scenario, the platform maintains a double-digit IRR (14.2%) due to its control over the supply chain and direct retail distribution. Freight costs represent a secondary sensitivity, but the localized manufacturing in Surabaya and Egypt mitigates significant cross-ocean logistics exposure.
        </div>
    </div>
`;

// Insert Section 6 expansion before the Section 8 divider
const section8Divider = '<div class="doc-page divider-page">\n        <div class="divider-content">\n            <h1 class="text-6xl font-extrabold mb-4 text-white">Section 8</h1>';
content = content.replace(section8Divider, financialExpansion + '\n' + section8Divider);

fs.writeFileSync(filePath, content);
console.log('Section 6 (Financial Model) expansion complete.');
