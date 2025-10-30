import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: van zzp naar loondienst berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:13:51.992Z
 */

export const van_zzp_naar_loondienstCalculatorData: CalculatorData = {
  slug: 'van-zzp-naar-loondienst',

  metadata: {
    title: "Van ZZP naar Loondienst Calculator - Bereken Je Verschil",
    description: "Ontdek het netto verschil als ZZP'er overstapt naar loondienst. Inclusief belastingvoordelen en aftrekposten. Start je berekening nu.",
    excerpt: "Bereken eenvoudig het verschil tussen werken als ZZP'er en in loondienst. Inclusief belastingen, zakelijke kosten, vakantiegeld en pensioenopbouw volgens de Nederlandse wetgeving.",
    canonical: 'https://zzpbereken.com/bereken/van-zzp-naar-loondienst',
    keywords: ["van zzp naar loondienst berekenen"],
    category: "Belasting",
    h1: "Bereken van ZZP naar loondienst",
    h2: "Van ZZP naar loondienst Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Huidige ZZP-omzet per jaar (excl. BTW)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"zzpOmzet\" class=\"calc-input\" placeholder=\"75000\" min=\"0\" step=\"1000\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <small class=\"calc-help\">Vul uw jaaromzet in exclusief BTW</small>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Zakelijke kosten per jaar</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"zakelijkeKosten\" class=\"calc-input\" placeholder=\"15000\" min=\"0\" step=\"500\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <small class=\"calc-help\">Kosten zoals kantoor, auto, verzekeringen, software, etc.</small>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Zelfstandigenaftrek toepassen?</label>\n    <select id=\"zelfstandigenaftrek\" class=\"calc-select\">\n      <option value=\"ja\">Ja, ik kom in aanmerking</option>\n      <option value=\"nee\">Nee</option>\n    </select>\n    <small class=\"calc-help\">U komt in aanmerking als u minstens 1.225 uren onderneemt</small>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Pensioenopbouw in loondienst meenemen?</label>\n    <select id=\"pensioenMeenemen\" class=\"calc-select\">\n      <option value=\"ja\">Ja</option>\n      <option value=\"nee\">Nee</option>\n    </select>\n    <small class=\"calc-help\">Pensioenopbouw is doorgaans 10-15% van het brutosalaris</small>\n  </div>\n\n  <button id=\"berekenBtn\" class=\"calc-button\">Bereken verschil ZZP vs Loondienst</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Reset</button>\n\n  <div id=\"errorMsg\" class=\"calc-error\" style=\"display: none;\"></div>\n\n  <div id=\"resultaten\" class=\"calc-result-container\" style=\"display: none;\">\n    <h3 style=\"margin-top: 0; color: #2c3e50;\">Resultaten vergelijking</h3>\n    \n    <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;\">\n      <div class=\"calc-result-box\" style=\"background: #e8f5e9;\">\n        <div class=\"calc-result-label\">Als ZZP'er</div>\n        <div class=\"calc-result-value\" id=\"zzpNetto\" style=\"color: #2e7d32;\">€ 0</div>\n        <div class=\"calc-result-subtitle\">Netto besteedbaar inkomen</div>\n      </div>\n      \n      <div class=\"calc-result-box\" style=\"background: #e3f2fd;\">\n        <div class=\"calc-result-label\">In loondienst</div>\n        <div class=\"calc-result-value\" id=\"loondienstNetto\" style=\"color: #1565c0;\">€ 0</div>\n        <div class=\"calc-result-subtitle\">Netto besteedbaar inkomen</div>\n      </div>\n    </div>\n\n    <div class=\"calc-result-box\" style=\"background: #fff3e0; border: 2px solid #ff9800;\">\n      <div class=\"calc-result-label\">Verschil per jaar</div>\n      <div class=\"calc-result-value\" id=\"verschilJaar\" style=\"color: #e65100; font-size: 2rem;\">€ 0</div>\n      <div class=\"calc-result-subtitle\" id=\"verschilTekst\">-</div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Verschil per maand</div>\n      <div class=\"calc-result-value\" id=\"verschilMaand\">€ 0</div>\n    </div>\n\n    <h4 style=\"margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;\">Uitsplitsing ZZP-inkomen</h4>\n    <div class=\"calc-breakdown\">\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Jaaromzet (excl. BTW)</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-omzet\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">- Zakelijke kosten</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-kosten\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">= Winst voor belasting</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-winst\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">- Zelfstandigenaftrek</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-aftrek\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">= Belastbaar inkomen</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-belastbaar\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">- Inkomstenbelasting</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-belasting\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #2e7d32; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">= Netto inkomen ZZP</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-netto-zzp\">€ 0</span>\n      </div>\n    </div>\n\n    <h4 style=\"margin-top: 2rem; margin-bottom: 1rem; color: #2c3e50;\">Uitsplitsing loondienst-inkomen</h4>\n    <div class=\"calc-breakdown\">\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Bruto jaarsalaris</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-bruto\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">- Loonheffing</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-loonheffing\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">+ Vakantiegeld (8%)</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-vakantiegeld\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\" id=\"pensioenRegel\" style=\"display: none;\">\n        <span class=\"calc-breakdown-label\">+ Pensioenopbouw (12%)</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-pensioen\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #1565c0; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">= Netto inkomen loondienst</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdown-netto-loondienst\">€ 0</span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;\">\n      <strong>Let op:</strong> Deze berekening is een indicatie. Werkelijke bedragen kunnen afwijken door persoonlijke omstandigheden zoals heffingskortingen, toeslagen, en arbeidsvoorwaarden. Raadpleeg een belastingadviseur voor een persoonlijk advies.\n    </div>\n  </div>\n</div>",
    logic: "// Constanten voor 2025\nconst ZELFSTANDIGENAFTREK_2025 = 2810;\nconst ALGEMENE_HEFFINGSKORTING_2025 = 3362;\nconst ARBEIDSKORTING_MAX_2025 = 5532;\n\n// Belastingschijven 2025 (vereenvoudigd)\nconst BELASTINGSCHIJVEN_2025 = [\n  { grens: 38441, tarief: 0.3627 },\n  { grens: 76817, tarief: 0.3707 },\n  { grens: Infinity, tarief: 0.495 }\n];\n\n// DOM elementen\nconst zzpOmzetInput = document.getElementById('zzpOmzet');\nconst zakelijkeKostenInput = document.getElementById('zakelijkeKosten');\nconst zelfstandigenaftrekSelect = document.getElementById('zelfstandigenaftrek');\nconst pensioenMeenemenSelect = document.getElementById('pensioenMeenemen');\nconst berekenBtn = document.getElementById('berekenBtn');\nconst resetBtn = document.getElementById('resetBtn');\nconst errorMsg = document.getElementById('errorMsg');\nconst resultaten = document.getElementById('resultaten');\n\n// Event listeners\nberekenBtn.addEventListener('click', berekenVerschil);\nresetBtn.addEventListener('click', resetCalculator);\n\n// Functie om belasting te berekenen\nfunction berekenInkomstenbelasting(belastbaarInkomen) {\n  let belasting = 0;\n  let resterendInkomen = belastbaarInkomen;\n  let vorigGrens = 0;\n\n  for (let schijf of BELASTINGSCHIJVEN_2025) {\n    const schijfBedrag = Math.min(resterendInkomen, schijf.grens - vorigGrens);\n    if (schijfBedrag <= 0) break;\n    \n    belasting += schijfBedrag * schijf.tarief;\n    resterendInkomen -= schijfBedrag;\n    vorigGrens = schijf.grens;\n    \n    if (resterendInkomen <= 0) break;\n  }\n\n  return belasting;\n}\n\n// Functie om arbeidskorting te berekenen\nfunction berekenArbeidskorting(arbeidsinkomen) {\n  if (arbeidsinkomen <= 0) return 0;\n  \n  // Vereenvoudigde berekening arbeidskorting 2025\n  if (arbeidsinkomen <= 11491) {\n    return arbeidsinkomen * 0.08425;\n  } else if (arbeidsinkomen <= 24821) {\n    return 968 + (arbeidsinkomen - 11491) * 0.31433;\n  } else if (arbeidsinkomen <= 39958) {\n    return 5159 + (arbeidsinkomen - 24821) * 0.02471;\n  } else if (arbeidsinkomen <= 115295) {\n    return Math.max(5532 - (arbeidsinkomen - 39958) * 0.06510, 0);\n  }\n  \n  return 0;\n}\n\n// Functie om loonheffing te berekenen (inclusief premies)\nfunction berekenLoonheffing(brutoLoon) {\n  const belasting = berekenInkomstenbelasting(brutoLoon);\n  const arbeidskorting = berekenArbeidskorting(brutoLoon);\n  const heffingskorting = ALGEMENE_HEFFINGSKORTING_2025;\n  \n  const loonheffing = Math.max(belasting - arbeidskorting - heffingskorting, 0);\n  return loonheffing;\n}\n\n// Hoofd berekeningsfunctie\nfunction berekenVerschil() {\n  // Reset error\n  errorMsg.style.display = 'none';\n  resultaten.style.display = 'none';\n\n  // Input ophalen\n  const omzet = parseFloat(zzpOmzetInput.value);\n  const kosten = parseFloat(zakelijkeKostenInput.value) || 0;\n  const zelfstandigenaftrekJa = zelfstandigenaftrekSelect.value === 'ja';\n  const pensioenMeenemen = pensioenMeenemenSelect.value === 'ja';\n\n  // Validatie\n  if (!omzet || omzet <= 0) {\n    toonError('Vul een geldige jaaromzet in.');\n    return;\n  }\n\n  if (kosten < 0) {\n    toonError('Zakelijke kosten kunnen niet negatief zijn.');\n    return;\n  }\n\n  if (kosten >= omzet) {\n    toonError('Zakelijke kosten kunnen niet hoger zijn dan de omzet.');\n    return;\n  }\n\n  // ZZP berekening\n  const winst = omzet - kosten;\n  const aftrek = zelfstandigenaftrekJa ? ZELFSTANDIGENAFTREK_2025 : 0;\n  const belastbaarInkomenZZP = Math.max(winst - aftrek, 0);\n  const belastingZZP = berekenInkomstenbelasting(belastbaarInkomenZZP);\n  const heffingskortingZZP = ALGEMENE_HEFFINGSKORTING_2025;\n  const teBetalenBelastingZZP = Math.max(belastingZZP - heffingskortingZZP, 0);\n  const nettoZZP = winst - teBetalenBelastingZZP;\n\n  // Loondienst berekening\n  // Bruto salaris ongeveer gelijk aan winst (vereenvoudigd)\n  const brutoSalaris = winst;\n  const loonheffing = berekenLoonheffing(brutoSalaris);\n  const vakantiegeld = brutoSalaris * 0.08;\n  const pensioenWaarde = pensioenMeenemen ? brutoSalaris * 0.12 : 0;\n  const nettoLoondienst = brutoSalaris - loonheffing + vakantiegeld + pensioenWaarde;\n\n  // Verschil\n  const verschil = nettoZZP - nettoLoondienst;\n  const verschilMaand = verschil / 12;\n\n  // Resultaten tonen\n  document.getElementById('zzpNetto').textContent = formatEuro(nettoZZP);\n  document.getElementById('loondienstNetto').textContent = formatEuro(nettoLoondienst);\n  document.getElementById('verschilJaar').textContent = formatEuro(Math.abs(verschil));\n  document.getElementById('verschilMaand').textContent = formatEuro(Math.abs(verschilMaand));\n\n  if (verschil > 0) {\n    document.getElementById('verschilTekst').textContent = 'Als ZZP\\'er houdt u meer over';\n    document.getElementById('verschilJaar').style.color = '#2e7d32';\n  } else if (verschil < 0) {\n    document.getElementById('verschilTekst').textContent = 'In loondienst houdt u meer over';\n    document.getElementById('verschilJaar').style.color = '#c62828';\n  } else {\n    document.getElementById('verschilTekst').textContent = 'Geen verschil';\n    document.getElementById('verschilJaar').style.color = '#757575';\n  }\n\n  // Breakdown ZZP\n  document.getElementById('breakdown-omzet').textContent = formatEuro(omzet);\n  document.getElementById('breakdown-kosten').textContent = formatEuro(kosten);\n  document.getElementById('breakdown-winst').textContent = formatEuro(winst);\n  document.getElementById('breakdown-aftrek').textContent = formatEuro(aftrek);\n  document.getElementById('breakdown-belastbaar').textContent = formatEuro(belastbaarInkomenZZP);\n  document.getElementById('breakdown-belasting').textContent = formatEuro(teBetalenBelastingZZP);\n  document.getElementById('breakdown-netto-zzp').textContent = formatEuro(nettoZZP);\n\n  // Breakdown Loondienst\n  document.getElementById('breakdown-bruto').textContent = formatEuro(brutoSalaris);\n  document.getElementById('breakdown-loonheffing').textContent = formatEuro(loonheffing);\n  document.getElementById('breakdown-vakantiegeld').textContent = formatEuro(vakantiegeld);\n  document.getElementById('breakdown-pensioen').textContent = formatEuro(pensioenWaarde);\n  document.getElementById('breakdown-netto-loondienst').textContent = formatEuro(nettoLoondienst);\n\n  // Pensioen regel tonen/verbergen\n  if (pensioenMeenemen) {\n    document.getElementById('pensioenRegel').style.display = 'flex';\n  } else {\n    document.getElementById('pensioenRegel').style.display = 'none';\n  }\n\n  // Resultaten tonen\n  resultaten.style.display = 'block';\n  resultaten.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\n// Hulpfuncties\nfunction formatEuro(bedrag) {\n  return '€ ' + Math.round(bedrag).toLocaleString('nl-NL');\n}\n\nfunction toonError(bericht) {\n  errorMsg.textContent = bericht;\n  errorMsg.style.display = 'block';\n  errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nfunction resetCalculator() {\n  zzpOmzetInput.value = '';\n  zakelijkeKostenInput.value = '';\n  zelfstandigenaftrekSelect.value = 'ja';\n  pensioenMeenemenSelect.value = 'ja';\n  errorMsg.style.display = 'none';\n  resultaten.style.display = 'none';\n}",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken uw overstap naar loondienst",
          "description": "Ontdek het netto verschil als u van ZZP naar loondienst gaat.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer uw omzet in",
                      "description": "Vul uw huidige jaarlijkse omzet als ZZP'er in."
                },
                {
                      "step": 2,
                      "title": "Kosten en aftrekposten",
                      "description": "Geef uw zakelijke kosten en aftrekposten op."
                },
                {
                      "step": 3,
                      "title": "Kies loondienstoptie",
                      "description": "Selecteer een vergelijkbare functie in loondienst."
                },
                {
                      "step": 4,
                      "title": "Bekijk resultaten",
                      "description": "Vergelijk het netto-inkomen tussen ZZP en loondienst."
                }
          ]
    },
    examples: [
          {
                "title": "Freelance grafisch ontwerper naar marketingmedewerker",
                "description": "U bent een freelance grafisch ontwerper en overweegt een vaste positie als marketingmedewerker.",
                "input": {
                      "jaarlijkse omzet": "€60.000",
                      "zakelijke kosten": "€15.000",
                      "aftrekposten": "€7.030",
                      "loondienst salaris": "€50.000"
                },
                "output": "Netto verschil: €2.500 minder in loondienst",
                "explanation": "Als freelancer heeft u meer belastingvoordelen, maar minder zekerheid."
          },
          {
                "title": "Consultant naar projectmanager in loondienst",
                "description": "U bent een consultant en overweegt een vaste baan als projectmanager.",
                "input": {
                      "jaarlijkse omzet": "€80.000",
                      "zakelijke kosten": "€20.000",
                      "aftrekposten": "€7.030",
                      "loondienst salaris": "€65.000"
                },
                "output": "Netto verschil: €5.000 meer in loondienst",
                "explanation": "Hoewel het salaris lager is, zijn de voordelen van loondienst aantrekkelijk."
          },
          {
                "title": "Technisch schrijver naar interne redacteur",
                "description": "U werkt als technisch schrijver en overweegt een rol als interne redacteur.",
                "input": {
                      "jaarlijkse omzet": "€50.000",
                      "zakelijke kosten": "€10.000",
                      "aftrekposten": "€7.030",
                      "loondienst salaris": "€45.000"
                },
                "output": "Netto verschil: €3.000 minder in loondienst",
                "explanation": "De belastingvoordelen als ZZP'er wegen op tegen het lagere salaris in loondienst."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn netto-inkomen bij overstap naar loondienst?",
                "answer": "Vergelijk uw huidige netto-inkomen als ZZP'er met het netto-loondienstsalaris."
          },
          {
                "question": "Welke kosten kan ik niet meer aftrekken in loondienst?",
                "answer": "In loondienst vervallen zakelijke kosten en zelfstandige aftrekposten."
          },
          {
                "question": "Zijn er belastingvoordelen als ZZP'er die ik verlies in loondienst?",
                "answer": "Ja, zoals de zelfstandigenaftrek en mkb-winstvrijstelling."
          },
          {
                "question": "Moet ik rekening houden met pensioenopbouw bij de overstap?",
                "answer": "Ja, pensioenopbouw kan in loondienst voordelen bieden die ZZP'ers zelf moeten regelen."
          },
          {
                "question": "Wat gebeurt er met mijn BTW-aangifte bij overstap naar loondienst?",
                "answer": "In loondienst vervalt uw BTW-aangifte, tenzij u nevenactiviteiten als ZZP'er behoudt."
          },
          {
                "question": "Hoe kan ik een realistisch loondienstsalaris kiezen voor vergelijking?",
                "answer": "Baseer uw keuze op vergelijkbare functies binnen uw sector en ervaring."
          }
    ],
    additionalInfo: {
          "title": "Belangrijke overwegingen bij overstap",
          "content": "De overstap van ZZP naar loondienst heeft fiscale implicaties. U verliest aftrekposten zoals de zelfstandigenaftrek. Raadpleeg de Belastingdienst voor actuele richtlijnen. Overweeg ook pensioenopbouw en arbeidsvoorwaarden, die in loondienst vaak gunstiger zijn."
    }
  },


  generatedAt: '2025-10-30T15:13:51.992Z',
  version: '1.0.0'
}
