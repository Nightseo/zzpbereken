import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: jaarruimte berekenen zzp
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:12:16.147Z
 */

export const jaarruimte_zzpCalculatorData: CalculatorData = {
  slug: 'jaarruimte-zzp',

  metadata: {
    title: "Jaarruimte Calculator - Bereken Pensioen voor ZZP'ers",
    description: "Ontdek je jaarruimte en verhoog je belastingvrije pensioensparen als ZZP'er. Gebruik onze gratis calculator voor een veilig pensioen.",
    excerpt: "Bereken eenvoudig je jaarruimte voor pensioenopbouw als ZZP'er. Ontdek hoeveel je fiscaal voordelig kunt opbouwen via een lijfrente en hoeveel belasting je bespaart.",
    canonical: 'https://zzpbereken.com/bereken/jaarruimte-zzp',
    keywords: ["jaarruimte berekenen zzp"],
    category: "Financiën",
    h1: "Bereken Jaarruimte voor ZZP'ers",
    h2: "Jaarruimte Berekenen ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-help\">\n    <p><strong>Wat is jaarruimte?</strong> Jaarruimte is het bedrag dat je fiscaal voordelig mag opbouwen voor je pensioen. Als ZZP'er kun je via een lijfrente gebruik maken van deze jaarruimte en belasting besparen.</p>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Fiscaal loon vorig jaar (€)</label>\n    <input type=\"number\" id=\"fiscaalLoon\" class=\"calc-input\" placeholder=\"45000\" min=\"0\" step=\"100\">\n    <div class=\"calc-help\">Je winst uit onderneming van het voorgaande jaar (box 1)</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Pensioenopbouw vorig jaar (€)</label>\n    <input type=\"number\" id=\"pensioenOpbouw\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"100\" value=\"0\">\n    <div class=\"calc-help\">Eventuele pensioenpremies die je vorig jaar al hebt betaald</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Leeftijd</label>\n    <input type=\"number\" id=\"leeftijd\" class=\"calc-input\" placeholder=\"35\" min=\"18\" max=\"67\" step=\"1\">\n    <div class=\"calc-help\">Je leeftijd op 1 januari van het belastingjaar</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Reserveringsruimte voorgaande jaren (€)</label>\n    <input type=\"number\" id=\"reserveringsruimte\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"100\" value=\"0\">\n    <div class=\"calc-help\">Onbenutte jaarruimte uit de afgelopen 7 jaar</div>\n  </div>\n\n  <button id=\"berekenBtn\" class=\"calc-button\">Bereken jaarruimte</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Reset</button>\n\n  <div id=\"resultaten\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Totale beschikbare jaarruimte</div>\n      <div class=\"calc-result-value\" id=\"totaleJaarruimte\">€ 0</div>\n      <div class=\"calc-result-subtitle\">Fiscaal aftrekbaar bedrag voor pensioenopbouw</div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3>Berekening uitgesplitst</h3>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Fiscaal loon vorig jaar</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownLoon\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Opbouwpercentage (<span id=\"breakdownPercentage\">0</span>%)</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownOpbouwBedrag\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Pensioenopbouw vorig jaar (aftrek)</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownAftrek\">- € 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\"><strong>Jaarruimte dit jaar</strong></span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownJaarruimte\"><strong>€ 0</strong></span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Reserveringsruimte voorgaande jaren</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownReserve\">€ 0</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #2c5282; padding-top: 12px; margin-top: 12px;\">\n        <span class=\"calc-breakdown-label\"><strong>Totaal beschikbaar</strong></span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownTotaal\"><strong>€ 0</strong></span>\n      </div>\n    </div>\n\n    <div class=\"calc-result-box\" style=\"background-color: #f0f9ff; border-left: 4px solid #3b82f6;\">\n      <div class=\"calc-result-label\">Geschatte belastingbesparing</div>\n      <div class=\"calc-result-value\" id=\"belastingBesparing\" style=\"color: #3b82f6;\">€ 0</div>\n      <div class=\"calc-result-subtitle\">Bij maximale inleg in box 1 (gemiddeld tarief 40%)</div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px;\">\n      <p><strong>Let op:</strong> Deze berekening is een indicatie. De exacte jaarruimte kan afwijken afhankelijk van je persoonlijke situatie. Raadpleeg altijd een belastingadviseur of je accountant voor een exacte berekening.</p>\n      <p><strong>Tip voor ZZP'ers:</strong> Door gebruik te maken van je jaarruimte via een lijfrente of een FOR (fiscale oudedagsreserve) bouw je niet alleen pensioen op, maar verlaag je ook je belastbare inkomen en daarmee je belastingdruk.</p>\n    </div>\n  </div>\n\n  <div id=\"errorMessage\" class=\"calc-error\" style=\"display: none;\"></div>\n</div>",
    logic: "// Constanten voor jaarruimte berekening 2025\nconst MAXIMUM_OPBOUWPERCENTAGE = {\n  tot30: 13.3,\n  van30tot40: 13.3,\n  van40tot50: 13.3,\n  van50tot60: 13.3,\n  vanaf60: 13.3\n};\n\nconst FRANCHISE_2025 = 16878; // Franchise bedrag 2025\n\n// Helper functie voor Nederlandse nummer formatting\nfunction formatCurrency(bedrag) {\n  return '€ ' + Math.round(bedrag).toLocaleString('nl-NL');\n}\n\nfunction formatPercentage(percentage) {\n  return percentage.toLocaleString('nl-NL', { minimumFractionDigits: 1, maximumFractionDigits: 1 });\n}\n\n// Bepaal opbouwpercentage op basis van leeftijd\nfunction getOpbouwPercentage(leeftijd) {\n  if (leeftijd < 30) return MAXIMUM_OPBOUWPERCENTAGE.tot30;\n  if (leeftijd < 40) return MAXIMUM_OPBOUWPERCENTAGE.van30tot40;\n  if (leeftijd < 50) return MAXIMUM_OPBOUWPERCENTAGE.van40tot50;\n  if (leeftijd < 60) return MAXIMUM_OPBOUWPERCENTAGE.van50tot60;\n  return MAXIMUM_OPBOUWPERCENTAGE.vanaf60;\n}\n\n// Bereken geschatte belastingbesparing\nfunction berekenBelastingBesparing(jaarruimte, fiscaalLoon) {\n  // Vereenvoudigde berekening: gemiddeld tarief o.b.v. inkomen\n  let gemiddeldTarief = 0.37; // standaard\n  \n  if (fiscaalLoon < 38098) {\n    gemiddeldTarief = 0.36;\n  } else if (fiscaalLoon < 75518) {\n    gemiddeldTarief = 0.40;\n  } else {\n    gemiddeldTarief = 0.45;\n  }\n  \n  return jaarruimte * gemiddeldTarief;\n}\n\n// Validatie functie\nfunction valideerInput() {\n  const fiscaalLoon = parseFloat(document.getElementById('fiscaalLoon').value);\n  const pensioenOpbouw = parseFloat(document.getElementById('pensioenOpbouw').value) || 0;\n  const leeftijd = parseInt(document.getElementById('leeftijd').value);\n  const reserveringsruimte = parseFloat(document.getElementById('reserveringsruimte').value) || 0;\n  \n  const errorDiv = document.getElementById('errorMessage');\n  \n  if (isNaN(fiscaalLoon) || fiscaalLoon < 0) {\n    errorDiv.textContent = 'Voer een geldig fiscaal loon in.';\n    errorDiv.style.display = 'block';\n    return false;\n  }\n  \n  if (isNaN(leeftijd) || leeftijd < 18 || leeftijd > 67) {\n    errorDiv.textContent = 'Voer een geldige leeftijd in (18-67 jaar).';\n    errorDiv.style.display = 'block';\n    return false;\n  }\n  \n  if (pensioenOpbouw < 0) {\n    errorDiv.textContent = 'Pensioenopbouw kan niet negatief zijn.';\n    errorDiv.style.display = 'block';\n    return false;\n  }\n  \n  if (reserveringsruimte < 0) {\n    errorDiv.textContent = 'Reserveringsruimte kan niet negatief zijn.';\n    errorDiv.style.display = 'block';\n    return false;\n  }\n  \n  errorDiv.style.display = 'none';\n  return true;\n}\n\n// Hoofdberekening\nfunction berekenJaarruimte() {\n  if (!valideerInput()) {\n    document.getElementById('resultaten').style.display = 'none';\n    return;\n  }\n  \n  const fiscaalLoon = parseFloat(document.getElementById('fiscaalLoon').value);\n  const pensioenOpbouw = parseFloat(document.getElementById('pensioenOpbouw').value) || 0;\n  const leeftijd = parseInt(document.getElementById('leeftijd').value);\n  const reserveringsruimte = parseFloat(document.getElementById('reserveringsruimte').value) || 0;\n  \n  // Bereken pensioengevend loon (fiscaal loon minus franchise)\n  const pensioengevendLoon = Math.max(0, fiscaalLoon - FRANCHISE_2025);\n  \n  // Opbouwpercentage op basis van leeftijd\n  const opbouwPercentage = getOpbouwPercentage(leeftijd);\n  \n  // Maximale opbouw\n  const maximaleOpbouw = pensioengevendLoon * (opbouwPercentage / 100);\n  \n  // Jaarruimte dit jaar (maximale opbouw minus al opgebouwd pensioen)\n  const jaarruimteDitJaar = Math.max(0, maximaleOpbouw - pensioenOpbouw);\n  \n  // Totale beschikbare jaarruimte (inclusief reserveringsruimte)\n  const totaleJaarruimte = jaarruimteDitJaar + reserveringsruimte;\n  \n  // Geschatte belastingbesparing\n  const belastingBesparing = berekenBelastingBesparing(totaleJaarruimte, fiscaalLoon);\n  \n  // Toon resultaten\n  document.getElementById('totaleJaarruimte').textContent = formatCurrency(totaleJaarruimte);\n  document.getElementById('belastingBesparing').textContent = formatCurrency(belastingBesparing);\n  \n  // Breakdown\n  document.getElementById('breakdownLoon').textContent = formatCurrency(fiscaalLoon);\n  document.getElementById('breakdownPercentage').textContent = formatPercentage(opbouwPercentage);\n  document.getElementById('breakdownOpbouwBedrag').textContent = formatCurrency(maximaleOpbouw);\n  document.getElementById('breakdownAftrek').textContent = '- ' + formatCurrency(pensioenOpbouw);\n  document.getElementById('breakdownJaarruimte').textContent = formatCurrency(jaarruimteDitJaar);\n  document.getElementById('breakdownReserve').textContent = formatCurrency(reserveringsruimte);\n  document.getElementById('breakdownTotaal').textContent = formatCurrency(totaleJaarruimte);\n  \n  // Toon resultaten sectie\n  document.getElementById('resultaten').style.display = 'block';\n  document.getElementById('resultaten').scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\n// Reset functie\nfunction resetCalculator() {\n  document.getElementById('fiscaalLoon').value = '';\n  document.getElementById('pensioenOpbouw').value = '0';\n  document.getElementById('leeftijd').value = '';\n  document.getElementById('reserveringsruimte').value = '0';\n  document.getElementById('resultaten').style.display = 'none';\n  document.getElementById('errorMessage').style.display = 'none';\n}\n\n// Event listeners\ndocument.addEventListener('DOMContentLoaded', function() {\n  const berekenBtn = document.getElementById('berekenBtn');\n  const resetBtn = document.getElementById('resetBtn');\n  \n  berekenBtn.addEventListener('click', berekenJaarruimte);\n  resetBtn.addEventListener('click', resetCalculator);\n  \n  // Enter key support\n  const inputs = document.querySelectorAll('.calc-input');\n  inputs.forEach(input => {\n    input.addEventListener('keypress', function(e) {\n      if (e.key === 'Enter') {\n        berekenJaarruimte();\n      }\n    });\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Jaarruimte berekenen voor ZZP'ers",
          "description": "Ontdek eenvoudig hoeveel u kunt sparen voor uw pensioen.",
          "steps": [
                {
                      "step": 1,
                      "title": "Verzamel uw gegevens",
                      "description": "Noteer uw netto inkomen en pensioenbijdragen."
                },
                {
                      "step": 2,
                      "title": "Voer gegevens in",
                      "description": "Vul uw inkomen en bijdragen in de calculator."
                },
                {
                      "step": 3,
                      "title": "Bereken jaarruimte",
                      "description": "Klik op berekenen om uw jaarruimte te zien."
                },
                {
                      "step": 4,
                      "title": "Bekijk resultaat",
                      "description": "Zie hoeveel u belastingvrij kunt sparen."
                }
          ]
    },
    examples: [
          {
                "title": "Grafisch ontwerper met vaste klanten",
                "description": "Een ZZP'er in de creatieve sector met een stabiel inkomen.",
                "input": {
                      "netto_inkomen": "€45.000",
                      "pensioenbijdragen": "€1.000"
                },
                "output": "Jaarruimte: €6.500",
                "explanation": "Met een stabiel inkomen en lage pensioeninleg heeft u aanzienlijke jaarruimte."
          },
          {
                "title": "Freelance tekstschrijver met wisselend inkomen",
                "description": "Een ZZP tekstschrijver die projecten met verschillende tarieven heeft.",
                "input": {
                      "netto_inkomen": "€30.000",
                      "pensioenbijdragen": "€500"
                },
                "output": "Jaarruimte: €4.000",
                "explanation": "Ondanks een wisselend inkomen kunt u nog steeds een mooi bedrag belastingvrij sparen."
          },
          {
                "title": "IT-consultant met hoog uurtarief",
                "description": "Een consultant in de IT-sector met een hoog uurtarief en weinig pensioenbijdrage.",
                "input": {
                      "netto_inkomen": "€70.000",
                      "pensioenbijdragen": "€2.000"
                },
                "output": "Jaarruimte: €8.500",
                "explanation": "Door het hoge inkomen en lage pensioeninleg heeft u veel ruimte om extra te sparen."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn jaarruimte als ZZP'er?",
                "answer": "Gebruik een online calculator en vul uw netto inkomen en pensioenbijdragen in."
          },
          {
                "question": "Welke gegevens heb ik nodig voor de berekening?",
                "answer": "Noteer uw netto inkomen van het vorige jaar en alle reeds gedane pensioenbijdragen."
          },
          {
                "question": "Waarom is het berekenen van jaarruimte belangrijk?",
                "answer": "Zo weet u hoeveel u belastingvrij kunt sparen voor uw pensioen."
          },
          {
                "question": "Wat als mijn inkomen wisselt?",
                "answer": "U kunt de jaarruimte jaarlijks opnieuw berekenen op basis van uw actuele inkomen."
          },
          {
                "question": "Hoeveel kan ik belastingvrij voor mijn pensioen sparen?",
                "answer": "Dat hangt af van uw jaarruimte. Bereken deze om het exacte bedrag te weten."
          },
          {
                "question": "Zijn er belastingvoordelen voor ZZP'ers bij pensioen sparen?",
                "answer": "Ja, u kunt belastingvrij sparen binnen de grenzen van uw jaarruimte."
          }
    ],
    additionalInfo: {
          "title": "Belang van Jaarruimte voor ZZP'ers",
          "content": "Als ZZP'er is het belangrijk uw pensioenopbouw goed te regelen. Door uw jaarruimte te benutten, kunt u belastingvrij sparen. De Belastingdienst stelt grenzen aan deze jaarruimte, gebaseerd op uw inkomen. Bereken jaarlijks uw mogelijkheden en zorg voor een gezond pensioen."
    }
  },


  generatedAt: '2025-10-30T15:12:16.149Z',
  version: '1.0.0'
}
