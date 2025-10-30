import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: belastingdruk zzp berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:04:21.231Z
 */

export const belastingdruk_zzpCalculatorData: CalculatorData = {
  slug: 'belastingdruk-zzp',

  metadata: {
    title: "Belastingdruk Calculator - Bereken Je ZZP Belasting",
    description: "Ontdek je belastingdruk als ZZP'er. Inclusief aftrekposten en tarieven. Eenvoudig, snel en op maat voor zelfstandigen. Start nu!",
    excerpt: "Bereken snel en accuraat je belastingdruk als ZZP'er. Deze calculator houdt rekening met alle relevante aftrekposten en toont een gedetailleerde breakdown van je belastingplicht volgens de Nederlandse wetgeving 2025.",
    canonical: 'https://zzpbereken.com/bereken/belastingdruk-zzp',
    keywords: ["belastingdruk zzp berekenen"],
    category: "Belasting",
    h1: "Bereken belastingdruk zzp",
    h2: "Belastingdruk zzp Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Jaarlijkse omzet (exclusief BTW)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"omzet\" class=\"calc-input\" placeholder=\"Bijv. 75000\" min=\"0\" step=\"1000\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Totale bedrijfskosten (exclusief BTW)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"kosten\" class=\"calc-input\" placeholder=\"Bijv. 15000\" min=\"0\" step=\"500\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <div class=\"calc-help\">Inclusief kantoorkosten, software, telefoon, reiskosten, etc.</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Aftrekbare ondernemersaftrek</label>\n    <select id=\"ondernemersaftrek\" class=\"calc-select\">\n      <option value=\"zelfstandig\">Zelfstandigenaftrek (€2.470)</option>\n      <option value=\"starter\">Startersaftrek (extra €2.123)</option>\n      <option value=\"mkb\">MKB-winstvrijstelling (14%)</option>\n      <option value=\"geen\">Geen extra aftrek</option>\n    </select>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Andere fiscale aftrekposten</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"aftrek\" class=\"calc-input\" placeholder=\"Bijv. 5000\" min=\"0\" step=\"100\" value=\"0\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <div class=\"calc-help\">Bijvoorbeeld pensioenpremie, hypotheekrente, zorgkosten</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Heffingskorting toepassen?</label>\n    <select id=\"heffingskorting\" class=\"calc-select\">\n      <option value=\"ja\">Ja (algemene heffingskorting)</option>\n      <option value=\"nee\">Nee</option>\n    </select>\n  </div>\n\n  <button id=\"berekenBtn\" class=\"calc-button\">Bereken Belastingdruk</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Reset</button>\n\n  <div id=\"error\" class=\"calc-error\" style=\"display: none;\"></div>\n\n  <div id=\"resultaten\" class=\"calc-result-container\" style=\"display: none;\">\n    <h3 style=\"margin-top: 0; color: #2c3e50;\">Jouw Belastingdruk</h3>\n    \n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Effectieve belastingdruk</div>\n      <div class=\"calc-result-value\" id=\"belastingdruk\"></div>\n      <div class=\"calc-result-subtitle\">Percentage van je omzet dat naar belasting gaat</div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Totale belasting te betalen</div>\n      <div class=\"calc-result-value\" id=\"totaleBelasting\"></div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Netto besteedbaar inkomen</div>\n      <div class=\"calc-result-value\" id=\"nettoInkomen\"></div>\n      <div class=\"calc-result-subtitle\">Na aftrek van kosten en belasting</div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h4 style=\"margin-top: 0; color: #2c3e50;\">Gedetailleerde Berekening</h4>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Jaarlijkse omzet (excl. BTW)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-omzet\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Bedrijfskosten</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-kosten\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"font-weight: 600;\">Winst uit onderneming</span>\n        <span class=\"calc-breakdown-value\" style=\"font-weight: 600;\" id=\"bd-winst\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Zelfstandigenaftrek</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-zelfstandig\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Startersaftrek</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-starter\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">MKB-winstvrijstelling</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-mkb\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Andere aftrekposten</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-aftrek\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"font-weight: 600;\">Belastbaar inkomen</span>\n        <span class=\"calc-breakdown-value\" style=\"font-weight: 600;\" id=\"bd-belastbaar\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Inkomstenbelasting</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-inkomstenbelasting\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Algemene heffingskorting</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-heffingskorting\"></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"font-weight: 600; color: #e74c3c;\">Totale belasting</span>\n        <span class=\"calc-breakdown-value\" style=\"font-weight: 600; color: #e74c3c;\" id=\"bd-totaal\"></span>\n      </div>\n    </div>\n  </div>\n</div>",
    logic: "// Belastingtarieven 2025 Nederland\nconst belastingSchijven = [\n  { grens: 38441, tarief: 0.3592 },\n  { grens: 76817, tarief: 0.3749 },\n  { grens: Infinity, tarief: 0.495 }\n];\n\nconst ZELFSTANDIGENAFTREK = 2470;\nconst STARTERSAFTREK = 2123;\nconst MKB_PERCENTAGE = 0.14;\nconst MAX_HEFFINGSKORTING = 3362;\nconst AFBOUWGRENS_HK = 24846;\nconst AFBOUWPERCENTAGE_HK = 0.06335;\n\n// Element referenties\nconst omzetInput = document.getElementById('omzet');\nconst kostenInput = document.getElementById('kosten');\nconst ondernemersaftrekSelect = document.getElementById('ondernemersaftrek');\nconst aftrekInput = document.getElementById('aftrek');\nconst heffingskortingSelect = document.getElementById('heffingskorting');\nconst berekenBtn = document.getElementById('berekenBtn');\nconst resetBtn = document.getElementById('resetBtn');\nconst errorDiv = document.getElementById('error');\nconst resultatenDiv = document.getElementById('resultaten');\n\n// Functies\nfunction formatCurrency(amount) {\n  return '€ ' + amount.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n}\n\nfunction formatPercentage(percentage) {\n  return percentage.toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + '%';\n}\n\nfunction toonError(bericht) {\n  errorDiv.textContent = bericht;\n  errorDiv.style.display = 'block';\n  resultatenDiv.style.display = 'none';\n}\n\nfunction verbergError() {\n  errorDiv.style.display = 'none';\n}\n\nfunction berekenInkomstenbelasting(belastbaarInkomen) {\n  let belasting = 0;\n  let vorigGrens = 0;\n  \n  for (let schijf of belastingSchijven) {\n    if (belastbaarInkomen > vorigGrens) {\n      const belastbaarInSchijf = Math.min(belastbaarInkomen, schijf.grens) - vorigGrens;\n      belasting += belastbaarInSchijf * schijf.tarief;\n      vorigGrens = schijf.grens;\n    } else {\n      break;\n    }\n  }\n  \n  return belasting;\n}\n\nfunction berekenHeffingskorting(belastbaarInkomen) {\n  if (belastbaarInkomen <= AFBOUWGRENS_HK) {\n    return MAX_HEFFINGSKORTING;\n  }\n  \n  const overschrijding = belastbaarInkomen - AFBOUWGRENS_HK;\n  const afbouw = overschrijding * AFBOUWPERCENTAGE_HK;\n  const korting = Math.max(0, MAX_HEFFINGSKORTING - afbouw);\n  \n  return korting;\n}\n\nfunction berekenBelastingdruk() {\n  verbergError();\n  \n  // Validatie\n  const omzet = parseFloat(omzetInput.value);\n  const kosten = parseFloat(kostenInput.value);\n  const andereAftrek = parseFloat(aftrekInput.value) || 0;\n  \n  if (!omzet || omzet <= 0) {\n    toonError('Vul een geldige omzet in.');\n    return;\n  }\n  \n  if (isNaN(kosten) || kosten < 0) {\n    toonError('Vul geldige bedrijfskosten in.');\n    return;\n  }\n  \n  if (kosten >= omzet) {\n    toonError('Je bedrijfskosten kunnen niet hoger zijn dan je omzet.');\n    return;\n  }\n  \n  // Berekening starten\n  const winst = omzet - kosten;\n  \n  // Aftrekposten\n  let zelfstandigenaftrek = 0;\n  let startersaftrek = 0;\n  let mkbVrijstelling = 0;\n  \n  const aftrekType = ondernemersaftrekSelect.value;\n  \n  if (aftrekType === 'zelfstandig' || aftrekType === 'starter') {\n    zelfstandigenaftrek = Math.min(ZELFSTANDIGENAFTREK, winst);\n  }\n  \n  if (aftrekType === 'starter') {\n    const restWinst = winst - zelfstandigenaftrek;\n    startersaftrek = Math.min(STARTERSAFTREK, restWinst);\n  }\n  \n  if (aftrekType === 'mkb') {\n    mkbVrijstelling = winst * MKB_PERCENTAGE;\n  }\n  \n  // Belastbaar inkomen\n  let belastbaarInkomen = winst - zelfstandigenaftrek - startersaftrek - mkbVrijstelling - andereAftrek;\n  belastbaarInkomen = Math.max(0, belastbaarInkomen);\n  \n  // Inkomstenbelasting\n  const inkomstenbelasting = berekenInkomstenbelasting(belastbaarInkomen);\n  \n  // Heffingskorting\n  let heffingskorting = 0;\n  if (heffingskortingSelect.value === 'ja') {\n    heffingskorting = berekenHeffingskorting(belastbaarInkomen);\n  }\n  \n  // Totale belasting\n  const totaleBelasting = Math.max(0, inkomstenbelasting - heffingskorting);\n  \n  // Belastingdruk percentage\n  const belastingdrukPercentage = (totaleBelasting / omzet) * 100;\n  \n  // Netto inkomen\n  const nettoInkomen = winst - totaleBelasting;\n  \n  // Resultaten tonen\n  document.getElementById('belastingdruk').textContent = formatPercentage(belastingdrukPercentage);\n  document.getElementById('totaleBelasting').textContent = formatCurrency(totaleBelasting);\n  document.getElementById('nettoInkomen').textContent = formatCurrency(nettoInkomen);\n  \n  // Breakdown\n  document.getElementById('bd-omzet').textContent = formatCurrency(omzet);\n  document.getElementById('bd-kosten').textContent = '- ' + formatCurrency(kosten);\n  document.getElementById('bd-winst').textContent = formatCurrency(winst);\n  document.getElementById('bd-zelfstandig').textContent = zelfstandigenaftrek > 0 ? '- ' + formatCurrency(zelfstandigenaftrek) : '€ 0,00';\n  document.getElementById('bd-starter').textContent = startersaftrek > 0 ? '- ' + formatCurrency(startersaftrek) : '€ 0,00';\n  document.getElementById('bd-mkb').textContent = mkbVrijstelling > 0 ? '- ' + formatCurrency(mkbVrijstelling) : '€ 0,00';\n  document.getElementById('bd-aftrek').textContent = andereAftrek > 0 ? '- ' + formatCurrency(andereAftrek) : '€ 0,00';\n  document.getElementById('bd-belastbaar').textContent = formatCurrency(belastbaarInkomen);\n  document.getElementById('bd-inkomstenbelasting').textContent = formatCurrency(inkomstenbelasting);\n  document.getElementById('bd-heffingskorting').textContent = heffingskorting > 0 ? '- ' + formatCurrency(heffingskorting) : '€ 0,00';\n  document.getElementById('bd-totaal').textContent = formatCurrency(totaleBelasting);\n  \n  resultatenDiv.style.display = 'block';\n}\n\nfunction resetCalculator() {\n  omzetInput.value = '';\n  kostenInput.value = '';\n  aftrekInput.value = '0';\n  ondernemersaftrekSelect.value = 'zelfstandig';\n  heffingskortingSelect.value = 'ja';\n  verbergError();\n  resultatenDiv.style.display = 'none';\n}\n\n// Event listeners\nberekenBtn.addEventListener('click', berekenBelastingdruk);\nresetBtn.addEventListener('click', resetCalculator);\n\n// Enter toets ondersteuning\n[omzetInput, kostenInput, aftrekInput].forEach(input => {\n  input.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      berekenBelastingdruk();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken uw belastingdruk eenvoudig",
          "description": "Ontdek snel hoeveel belasting u als ZZP'er moet betalen.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer jaarinkomen in",
                      "description": "Vul uw totale jaarinkomen als ZZP'er in."
                },
                {
                      "step": 2,
                      "title": "Selecteer aftrekposten",
                      "description": "Kies de aftrekposten die op u van toepassing zijn."
                },
                {
                      "step": 3,
                      "title": "Controleer belastingtarief",
                      "description": "Bekijk het belastingtarief dat voor uw situatie geldt."
                },
                {
                      "step": 4,
                      "title": "Bereken belastingdruk",
                      "description": "Klik op berekenen om uw belastingdruk te zien."
                }
          ]
    },
    examples: [
          {
                "title": "Freelancer met gemiddeld inkomen",
                "description": "U bent een ZZP'er die als grafisch ontwerper werkt met een gemiddeld jaarinkomen.",
                "input": {
                      "jaarinkomen": "€60.000",
                      "aftrekposten": "zelfstandigenaftrek, startersaftrek",
                      "belastingtarief": "37,07%"
                },
                "output": "Belastingdruk: €13.500",
                "explanation": "Na aftrekposten en belastingtarieven betaalt u €13.500 aan belasting."
          },
          {
                "title": "Parttime adviseur met lage kosten",
                "description": "U werkt parttime als bedrijfsadviseur en maakt gebruik van de kleineondernemersregeling.",
                "input": {
                      "jaarinkomen": "€30.000",
                      "aftrekposten": "zelfstandigenaftrek",
                      "belastingtarief": "19,03%"
                },
                "output": "Belastingdruk: €2.850",
                "explanation": "Door gebruik te maken van aftrekposten en een lager tarief betaalt u €2.850 aan belasting."
          },
          {
                "title": "IT-specialist met hoog inkomen",
                "description": "U bent een IT-specialist met een bovengemiddeld inkomen als ZZP'er.",
                "input": {
                      "jaarinkomen": "€100.000",
                      "aftrekposten": "zelfstandigenaftrek",
                      "belastingtarief": "49,50%"
                },
                "output": "Belastingdruk: €41.000",
                "explanation": "Door de hoge inkomensklasse betaalt u, na aftrekposten, €41.000 aan belasting."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn belastingdruk als ZZP'er?",
                "answer": "Voer uw jaarinkomen en aftrekposten in onze tool in om snel uw belastingdruk te berekenen."
          },
          {
                "question": "Welke aftrekposten zijn er voor ZZP'ers?",
                "answer": "Denk aan zelfstandigenaftrek, startersaftrek en MKB-winstvrijstelling."
          },
          {
                "question": "Hoe beïnvloedt de zelfstandigenaftrek mijn belastingdruk?",
                "answer": "De aftrek verlaagt uw belastbaar inkomen, waardoor u minder belasting betaalt."
          },
          {
                "question": "Wat is het verschil tussen inkomstenbelasting en BTW?",
                "answer": "Inkomstenbelasting betaalt u over uw winst, BTW int u voor de Belastingdienst."
          },
          {
                "question": "Hoe kies ik het juiste belastingtarief?",
                "answer": "Kijk naar uw totale inkomen en de geldende schijven voor uw situatie."
          },
          {
                "question": "Welke tips zijn er om mijn belastingdruk te verlagen?",
                "answer": "Maak optimaal gebruik van aftrekposten en blijf op de hoogte van nieuwe regelingen."
          }
    ],
    additionalInfo: {
          "title": "Belastingdruk voor ZZP'ers begrijpen",
          "content": "Als ZZP'er betaalt u belasting over uw winst. Gebruik aftrekposten zoals de zelfstandigenaftrek om uw belastingdruk te verlagen. Blijf op de hoogte van Belastingdienstregels en plan uw financiën slim. Dit helpt onverwachte belastingverrassingen te voorkomen."
    }
  },


  generatedAt: '2025-10-30T15:04:21.232Z',
  version: '1.0.0'
}
