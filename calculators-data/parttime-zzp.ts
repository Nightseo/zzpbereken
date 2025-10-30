import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: parttime zzp berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-27T18:27:15.861Z
 */

export const parttime_zzpCalculatorData: CalculatorData = {
  slug: 'parttime-zzp',

  metadata: {
    title: "Parttime ZZP Calculator - Bereken Je Maandinkomen",
    description: "Ontdek je geschatte maandinkomen als parttime ZZP'er. Vul je uren, uurtarief en kosten in. Eenvoudig en snel voor zelfstandigen.",
    excerpt: "Bereken wat je netto overhoudt als parttime ZZP'er met deze praktische calculator. Vul je uren, tarief en kosten in en zie direct je netto inkomen per jaar, maand en uur.",
    canonical: 'https://zzpbereken.com/bereken/parttime-zzp',
    keywords: ["parttime zzp berekenen"],
    category: "Belastingen",
    h1: "Bereken Parttime ZZP",
    h2: "Parttime ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Aantal uren per week</label>\n    <input type=\"number\" id=\"hoursPerWeek\" class=\"calc-input\" placeholder=\"16\" min=\"1\" max=\"40\" step=\"1\">\n    <span class=\"calc-help\">Hoeveel uur werk je gemiddeld per week als ZZP'er?</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Uurtarief (excl. BTW)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"hourlyRate\" class=\"calc-input\" placeholder=\"50\" min=\"0\" step=\"1\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <span class=\"calc-help\">Je uurtarief exclusief BTW</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Aantal werkweken per jaar</label>\n    <input type=\"number\" id=\"weeksPerYear\" class=\"calc-input\" placeholder=\"45\" min=\"1\" max=\"52\" step=\"1\">\n    <span class=\"calc-help\">Gemiddeld 45-48 weken (rekening houdend met vakantie en ziekte)</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">BTW-tarief</label>\n    <select id=\"vatRate\" class=\"calc-select\">\n      <option value=\"0\">Kleinondernemersregeling (0%)</option>\n      <option value=\"9\">Laag tarief (9%)</option>\n      <option value=\"21\" selected>Hoog tarief (21%)</option>\n    </select>\n    <span class=\"calc-help\">Kies je BTW-situatie</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Geschatte bedrijfskosten per jaar</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"businessCosts\" class=\"calc-input\" placeholder=\"5000\" min=\"0\" step=\"100\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <span class=\"calc-help\">Kantoor, software, verzekeringen, marketing, etc.</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Ander inkomen per jaar (bijv. partner, uitkering)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"otherIncome\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"100\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <span class=\"calc-help\">Optioneel: overig belastbaar inkomen</span>\n  </div>\n\n  <button id=\"calculateBtn\" class=\"calc-button\">Bereken parttime ZZP-inkomen</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Reset</button>\n\n  <div id=\"errorMsg\" class=\"calc-error\" style=\"display: none;\"></div>\n\n  <div id=\"results\" class=\"calc-result-container\" style=\"display: none;\">\n    <h3 style=\"margin-top: 0; color: #2c3e50;\">Jouw parttime ZZP-inkomen</h3>\n    \n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Netto inkomen per jaar</div>\n      <div class=\"calc-result-value\" id=\"netYearly\">€ 0</div>\n      <div class=\"calc-result-subtitle\">Na belastingen en kosten</div>\n    </div>\n\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;\">\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Netto per maand</div>\n        <div class=\"calc-result-value\" id=\"netMonthly\">€ 0</div>\n      </div>\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Netto per uur</div>\n        <div class=\"calc-result-value\" id=\"netHourly\">€ 0</div>\n      </div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h4 style=\"margin-top: 0; color: #2c3e50;\">Gedetailleerde berekening</h4>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Totaal uren per jaar</span>\n        <span class=\"calc-breakdown-value\" id=\"totalHours\">0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Omzet excl. BTW</span>\n        <span class=\"calc-breakdown-value\" id=\"revenueExVat\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">BTW</span>\n        <span class=\"calc-breakdown-value\" id=\"vatAmount\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Omzet incl. BTW</span>\n        <span class=\"calc-breakdown-value\" id=\"revenueIncVat\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Bedrijfskosten</span>\n        <span class=\"calc-breakdown-value\" id=\"costsDisplay\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #e0e0e0; padding-top: 10px; margin-top: 10px;\">\n        <span class=\"calc-breakdown-label\"><strong>Winst (belastbaar inkomen)</strong></span>\n        <span class=\"calc-breakdown-value\" id=\"profit\"><strong>€ 0</strong></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Totaal belastbaar inkomen</span>\n        <span class=\"calc-breakdown-value\" id=\"taxableIncome\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Inkomstenbelasting</span>\n        <span class=\"calc-breakdown-value\" id=\"incomeTax\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Algemene heffingskorting</span>\n        <span class=\"calc-breakdown-value\" id=\"taxCredit\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">ZVW-bijdrage (5,43%)</span>\n        <span class=\"calc-breakdown-value\" id=\"healthInsurance\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #e0e0e0; padding-top: 10px; margin-top: 10px;\">\n        <span class=\"calc-breakdown-label\"><strong>Totaal te betalen belasting</strong></span>\n        <span class=\"calc-breakdown-value\" id=\"totalTax\"><strong>€ 0</strong></span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;\">\n      <strong>Let op:</strong> Dit is een indicatieve berekening. De werkelijke belasting kan afwijken afhankelijk van je persoonlijke situatie (toeslagen, aftrekposten, oudedagsreserve, etc.). Raadpleeg altijd een belastingadviseur voor een nauwkeurige berekening.\n    </div>\n  </div>\n</div>",
    logic: "// Belastingtarieven 2025 (Box 1)\nconst TAX_BRACKETS_2025 = [\n  { limit: 38441, rate: 0.3593 },\n  { limit: 76817, rate: 0.3712 },\n  { limit: Infinity, rate: 0.495 }\n];\n\nconst GENERAL_TAX_CREDIT_2025 = 3362;\nconst HEALTH_INSURANCE_RATE = 0.0543;\n\n// Elementen\nconst hoursPerWeekInput = document.getElementById('hoursPerWeek');\nconst hourlyRateInput = document.getElementById('hourlyRate');\nconst weeksPerYearInput = document.getElementById('weeksPerYear');\nconst vatRateSelect = document.getElementById('vatRate');\nconst businessCostsInput = document.getElementById('businessCosts');\nconst otherIncomeInput = document.getElementById('otherIncome');\nconst calculateBtn = document.getElementById('calculateBtn');\nconst resetBtn = document.getElementById('resetBtn');\nconst errorMsg = document.getElementById('errorMsg');\nconst results = document.getElementById('results');\n\n// Functie om belasting te berekenen\nfunction calculateIncomeTax(taxableIncome) {\n  let tax = 0;\n  let previousLimit = 0;\n\n  for (const bracket of TAX_BRACKETS_2025) {\n    if (taxableIncome > previousLimit) {\n      const taxableInBracket = Math.min(taxableIncome, bracket.limit) - previousLimit;\n      tax += taxableInBracket * bracket.rate;\n      previousLimit = bracket.limit;\n    } else {\n      break;\n    }\n  }\n\n  return tax;\n}\n\n// Functie om heffingskorting te berekenen\nfunction calculateTaxCredit(taxableIncome) {\n  const fullCredit = GENERAL_TAX_CREDIT_2025;\n  const threshold1 = 24813;\n  const threshold2 = 77248;\n  \n  if (taxableIncome <= threshold1) {\n    return fullCredit;\n  } else if (taxableIncome <= threshold2) {\n    const reduction = (taxableIncome - threshold1) * 0.06415;\n    return Math.max(0, fullCredit - reduction);\n  } else {\n    return 0;\n  }\n}\n\n// Functie om getallen te formatteren\nfunction formatCurrency(value) {\n  return '€ ' + value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });\n}\n\nfunction formatNumber(value) {\n  return value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });\n}\n\nfunction formatDecimal(value) {\n  return '€ ' + value.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n}\n\n// Validatie functie\nfunction validateInputs() {\n  const hoursPerWeek = parseFloat(hoursPerWeekInput.value);\n  const hourlyRate = parseFloat(hourlyRateInput.value);\n  const weeksPerYear = parseFloat(weeksPerYearInput.value);\n  const businessCosts = parseFloat(businessCostsInput.value) || 0;\n  const otherIncome = parseFloat(otherIncomeInput.value) || 0;\n\n  if (!hoursPerWeek || hoursPerWeek <= 0 || hoursPerWeek > 40) {\n    return 'Vul een geldig aantal uren per week in (1-40)';\n  }\n\n  if (!hourlyRate || hourlyRate <= 0) {\n    return 'Vul een geldig uurtarief in';\n  }\n\n  if (!weeksPerYear || weeksPerYear <= 0 || weeksPerYear > 52) {\n    return 'Vul een geldig aantal werkweken in (1-52)';\n  }\n\n  if (businessCosts < 0) {\n    return 'Bedrijfskosten kunnen niet negatief zijn';\n  }\n\n  if (otherIncome < 0) {\n    return 'Ander inkomen kan niet negatief zijn';\n  }\n\n  return null;\n}\n\n// Berekeningsfunctie\nfunction calculate() {\n  // Valideer inputs\n  const error = validateInputs();\n  if (error) {\n    errorMsg.textContent = error;\n    errorMsg.style.display = 'block';\n    results.style.display = 'none';\n    return;\n  }\n\n  errorMsg.style.display = 'none';\n\n  // Haal waarden op\n  const hoursPerWeek = parseFloat(hoursPerWeekInput.value);\n  const hourlyRate = parseFloat(hourlyRateInput.value);\n  const weeksPerYear = parseFloat(weeksPerYearInput.value);\n  const vatRate = parseFloat(vatRateSelect.value) / 100;\n  const businessCosts = parseFloat(businessCostsInput.value) || 0;\n  const otherIncome = parseFloat(otherIncomeInput.value) || 0;\n\n  // Bereken totaal uren\n  const totalHours = hoursPerWeek * weeksPerYear;\n\n  // Bereken omzet\n  const revenueExVat = totalHours * hourlyRate;\n  const vatAmount = revenueExVat * vatRate;\n  const revenueIncVat = revenueExVat + vatAmount;\n\n  // Bereken winst (belastbaar inkomen uit ZZP)\n  const profit = revenueExVat - businessCosts;\n\n  // Totaal belastbaar inkomen\n  const totalTaxableIncome = profit + otherIncome;\n\n  // Bereken belasting\n  const incomeTax = calculateIncomeTax(totalTaxableIncome);\n  const taxCredit = calculateTaxCredit(totalTaxableIncome);\n  const healthInsuranceContribution = totalTaxableIncome * HEALTH_INSURANCE_RATE;\n  const totalTaxToPay = Math.max(0, incomeTax - taxCredit + healthInsuranceContribution);\n\n  // Bereken netto inkomen\n  const netYearly = profit - totalTaxToPay;\n  const netMonthly = netYearly / 12;\n  const netHourly = netYearly / totalHours;\n\n  // Toon resultaten\n  document.getElementById('netYearly').textContent = formatCurrency(netYearly);\n  document.getElementById('netMonthly').textContent = formatCurrency(netMonthly);\n  document.getElementById('netHourly').textContent = formatDecimal(netHourly);\n\n  // Toon breakdown\n  document.getElementById('totalHours').textContent = formatNumber(totalHours) + ' uur';\n  document.getElementById('revenueExVat').textContent = formatCurrency(revenueExVat);\n  document.getElementById('vatAmount').textContent = formatCurrency(vatAmount);\n  document.getElementById('revenueIncVat').textContent = formatCurrency(revenueIncVat);\n  document.getElementById('costsDisplay').textContent = formatCurrency(businessCosts);\n  document.getElementById('profit').textContent = formatCurrency(profit);\n  document.getElementById('taxableIncome').textContent = formatCurrency(totalTaxableIncome);\n  document.getElementById('incomeTax').textContent = formatCurrency(incomeTax);\n  document.getElementById('taxCredit').textContent = '- ' + formatCurrency(taxCredit);\n  document.getElementById('healthInsurance').textContent = formatCurrency(healthInsuranceContribution);\n  document.getElementById('totalTax').textContent = formatCurrency(totalTaxToPay);\n\n  results.style.display = 'block';\n  results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\n// Reset functie\nfunction reset() {\n  hoursPerWeekInput.value = '';\n  hourlyRateInput.value = '';\n  weeksPerYearInput.value = '';\n  vatRateSelect.value = '21';\n  businessCostsInput.value = '';\n  otherIncomeInput.value = '';\n  errorMsg.style.display = 'none';\n  results.style.display = 'none';\n}\n\n// Event listeners\ncalculateBtn.addEventListener('click', calculate);\nresetBtn.addEventListener('click', reset);\n\n// Enter toets ondersteuning\n[hoursPerWeekInput, hourlyRateInput, weeksPerYearInput, businessCostsInput, otherIncomeInput].forEach(input => {\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      calculate();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken uw parttime ZZP-inkomen",
          "description": "Deze calculator helpt u om uw inkomen als parttime ZZP'er te berekenen.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer uren in",
                      "description": "Geef het aantal gewerkte uren per week op."
                },
                {
                      "step": 2,
                      "title": "Uurtarief bepalen",
                      "description": "Vul uw uurtarief in op basis van uw diensten."
                },
                {
                      "step": 3,
                      "title": "Kosten invullen",
                      "description": "Noteer uw maandelijkse zakelijke uitgaven."
                },
                {
                      "step": 4,
                      "title": "Resultaat bekijken",
                      "description": "Bekijk uw geschatte maandelijkse inkomen."
                }
          ]
    },
    examples: [
          {
                "title": "Grafisch ontwerper parttime",
                "description": "U werkt 20 uur per week als grafisch ontwerper.",
                "input": {
                      "uren_per_week": 20,
                      "uurtarief": 75,
                      "maandelijkse_kosten": 500
                },
                "output": "Geschat maandinkomen: €4.000",
                "explanation": "Met 80 gewerkte uren per maand en na aftrek van kosten."
          },
          {
                "title": "Parttime tekstschrijver",
                "description": "U werkt 15 uur per week als tekstschrijver.",
                "input": {
                      "uren_per_week": 15,
                      "uurtarief": 50,
                      "maandelijkse_kosten": 300
                },
                "output": "Geschat maandinkomen: €2.700",
                "explanation": "Met 60 gewerkte uren per maand en na aftrek van kosten."
          },
          {
                "title": "IT-consultant naast loondienst",
                "description": "U werkt 10 uur per week naast uw loondienst.",
                "input": {
                      "uren_per_week": 10,
                      "uurtarief": 100,
                      "maandelijkse_kosten": 200
                },
                "output": "Geschat maandinkomen: €3.800",
                "explanation": "Met 40 gewerkte uren per maand en na aftrek van kosten."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn parttime ZZP-inkomen?",
                "answer": "Vul het aantal gewerkte uren, uw uurtarief en maandelijkse kosten in om uw inkomen te schatten."
          },
          {
                "question": "Moet ik BTW rekenen als parttime ZZP'er?",
                "answer": "Ja, tenzij u gebruikmaakt van de KOR-regeling. Check of deze regeling voor u van toepassing is."
          },
          {
                "question": "Wat zijn de voordelen van parttime ZZP'en naast een loondienst?",
                "answer": "U heeft een stabiel inkomen uit uw dienstverband en kunt flexibel bijverdienen als ZZP'er."
          },
          {
                "question": "Hoe bepaal ik mijn uurtarief als parttime ZZP'er?",
                "answer": "Baseer uw uurtarief op uw ervaring, kosten en wat de markt vraagt in uw branche."
          },
          {
                "question": "Welke kosten moet ik meenemen in de berekening?",
                "answer": "Denk aan verzekeringen, kantoorbenodigdheden en vervoerskosten. Noteer alles wat nodig is voor uw werk."
          },
          {
                "question": "Kan ik parttime ZZP'en combineren met een uitkering?",
                "answer": "Ja, maar geef uw inkomsten op bij de uitkeringsinstantie om problemen te voorkomen."
          }
    ],
    additionalInfo: {
          "title": "Belangrijke belastingtips",
          "content": "Als parttime ZZP'er is het cruciaal uw administratie op orde te houden. Denk aan de BTW-aangifte (tenzij KOR van toepassing is) en inkomstenbelasting. Goede boekhoudsoftware kan u helpen bij het overzicht. Zorg dat u voldoende tijd vrijmaakt voor deze administratieve taken."
    }
  },


  generatedAt: '2025-10-27T18:27:15.862Z',
  version: '1.0.0'
}
