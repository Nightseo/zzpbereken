import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: zakelijke lening zzp berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-27T18:27:12.228Z
 */

export const zakelijke_lening_zzpCalculatorData: CalculatorData = {
  slug: 'zakelijke-lening-zzp',

  metadata: {
    title: "Zakelijke Lening ZZP Calculator - Bereken Je Opties",
    description: "Bereken je zakelijke lening als ZZP'er. Ontdek je leenmogelijkheden en krijg inzicht in maandlasten. Eenvoudig en snel voor zelfstandigen.",
    excerpt: "Bereken eenvoudig je zakelijke lening als ZZP'er met onze gratis calculator. Krijg direct inzicht in je maandlasten, totale rente en kosten voor annuïtaire of lineaire aflossing.",
    canonical: 'https://zzpbereken.com/bereken/zakelijke-lening-zzp',
    keywords: ["zakelijke lening zzp berekenen"],
    category: "Financiën",
    h1: "Bereken Zakelijke Lening ZZP",
    h2: "Zakelijke Lening ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Gewenst leningbedrag (€)</label>\n    <input type=\"number\" id=\"leningBedrag\" class=\"calc-input\" placeholder=\"25000\" min=\"1000\" step=\"1000\" value=\"25000\">\n    <span class=\"calc-help\">Minimaal €1.000</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Looptijd</label>\n    <select id=\"looptijd\" class=\"calc-select\">\n      <option value=\"12\">1 jaar (12 maanden)</option>\n      <option value=\"24\">2 jaar (24 maanden)</option>\n      <option value=\"36\" selected>3 jaar (36 maanden)</option>\n      <option value=\"48\">4 jaar (48 maanden)</option>\n      <option value=\"60\">5 jaar (60 maanden)</option>\n      <option value=\"72\">6 jaar (72 maanden)</option>\n      <option value=\"84\">7 jaar (84 maanden)</option>\n      <option value=\"120\">10 jaar (120 maanden)</option>\n    </select>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Jaarlijks rentepercentage (%)</label>\n    <input type=\"number\" id=\"rentePercentage\" class=\"calc-input\" placeholder=\"5.5\" min=\"0.1\" max=\"25\" step=\"0.1\" value=\"5.5\">\n    <span class=\"calc-help\">Gemiddeld tussen 3% en 12% voor ZZP-leningen</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Type aflossing</label>\n    <select id=\"aflossingsType\" class=\"calc-select\">\n      <option value=\"annuitair\" selected>Annuïtair (gelijke maandlasten)</option>\n      <option value=\"lineair\">Lineair (dalende maandlasten)</option>\n    </select>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Eenmalige afsluitkosten (€)</label>\n    <input type=\"number\" id=\"afsluitkosten\" class=\"calc-input\" placeholder=\"500\" min=\"0\" step=\"50\" value=\"500\">\n    <span class=\"calc-help\">Optioneel: administratiekosten, taxatiekosten, etc.</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Maandelijkse administratiekosten (€)</label>\n    <input type=\"number\" id=\"maandKosten\" class=\"calc-input\" placeholder=\"10\" min=\"0\" step=\"5\" value=\"10\">\n    <span class=\"calc-help\">Optioneel: vaste maandelijkse kosten</span>\n  </div>\n\n  <button id=\"berekenBtn\" class=\"calc-button\">Bereken mijn lening</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Reset</button>\n\n  <div id=\"errorMsg\" class=\"calc-error\" style=\"display:none;\"></div>\n\n  <div id=\"resultaten\" class=\"calc-result-container\" style=\"display:none;\">\n    <h3 style=\"margin-top: 0; color: #2c3e50;\">Berekeningsresultaat</h3>\n    \n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Maandlast</div>\n      <div class=\"calc-result-value\" id=\"maandlast\">€ 0</div>\n      <div class=\"calc-result-subtitle\" id=\"maandlastInfo\">Eerste maand</div>\n    </div>\n\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;\">\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Totaal te betalen</div>\n        <div class=\"calc-result-value\" id=\"totaalBetalen\">€ 0</div>\n      </div>\n\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Totale rente</div>\n        <div class=\"calc-result-value\" id=\"totaleRente\">€ 0</div>\n      </div>\n\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Totale kosten</div>\n        <div class=\"calc-result-value\" id=\"totaleKosten\">€ 0</div>\n      </div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h4 style=\"margin: 20px 0 10px 0; color: #2c3e50;\">Specificatie</h4>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Leningbedrag</span>\n        <span class=\"calc-breakdown-value\" id=\"specLeningBedrag\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Looptijd</span>\n        <span class=\"calc-breakdown-value\" id=\"specLooptijd\">0 maanden</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Rentepercentage</span>\n        <span class=\"calc-breakdown-value\" id=\"specRente\">0%</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Type aflossing</span>\n        <span class=\"calc-breakdown-value\" id=\"specType\">-</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Afsluitkosten (eenmalig)</span>\n        <span class=\"calc-breakdown-value\" id=\"specAfsluitkosten\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Administratiekosten (totaal)</span>\n        <span class=\"calc-breakdown-value\" id=\"specAdminKosten\">€ 0</span>\n      </div>\n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #3498db; margin-top: 10px; padding-top: 10px; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">Totaal betaald na looptijd</span>\n        <span class=\"calc-breakdown-value\" id=\"specTotaal\">€ 0</span>\n      </div>\n    </div>\n\n    <div style=\"background: #e8f4f8; padding: 15px; border-radius: 8px; margin-top: 20px;\">\n      <h4 style=\"margin: 0 0 10px 0; color: #2c3e50; font-size: 16px;\">💡 Let op als ZZP'er</h4>\n      <ul style=\"margin: 0; padding-left: 20px; line-height: 1.6; color: #34495e;\">\n        <li>Rente en kosten zijn fiscaal aftrekbaar als zakelijke uitgaven</li>\n        <li>Zorg dat je maandlast maximaal 30% van je netto-inkomen is</li>\n        <li>Houd rekening met wisselende inkomsten en BTW-verplichtingen</li>\n        <li>Bouw een buffer op voor mindere maanden</li>\n      </ul>\n    </div>\n  </div>\n</div>",
    logic: "// Calculator elementen\nconst leningBedragInput = document.getElementById('leningBedrag');\nconst looptijdSelect = document.getElementById('looptijd');\nconst rentePercentageInput = document.getElementById('rentePercentage');\nconst aflossingsTypeSelect = document.getElementById('aflossingsType');\nconst afsluitkostenInput = document.getElementById('afsluitkosten');\nconst maandKostenInput = document.getElementById('maandKosten');\nconst berekenBtn = document.getElementById('berekenBtn');\nconst resetBtn = document.getElementById('resetBtn');\nconst errorMsg = document.getElementById('errorMsg');\nconst resultatenDiv = document.getElementById('resultaten');\n\n// Result elementen\nconst maandlastEl = document.getElementById('maandlast');\nconst maandlastInfoEl = document.getElementById('maandlastInfo');\nconst totaalBetalenEl = document.getElementById('totaalBetalen');\nconst totaleRenteEl = document.getElementById('totaleRente');\nconst totaleKostenEl = document.getElementById('totaleKosten');\nconst specLeningBedragEl = document.getElementById('specLeningBedrag');\nconst specLooptijdEl = document.getElementById('specLooptijd');\nconst specRenteEl = document.getElementById('specRente');\nconst specTypeEl = document.getElementById('specType');\nconst specAfsluitkostenEl = document.getElementById('specAfsluitkosten');\nconst specAdminKostenEl = document.getElementById('specAdminKosten');\nconst specTotaalEl = document.getElementById('specTotaal');\n\n// Formatteer bedrag in Nederlands formaat\nfunction formatCurrency(bedrag) {\n  return '€ ' + bedrag.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n}\n\n// Formatteer percentage\nfunction formatPercentage(percentage) {\n  return percentage.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';\n}\n\n// Validatie functie\nfunction valideerInput() {\n  const leningBedrag = parseFloat(leningBedragInput.value);\n  const rentePercentage = parseFloat(rentePercentageInput.value);\n  \n  if (!leningBedrag || leningBedrag < 1000) {\n    return 'Het leningbedrag moet minimaal €1.000 zijn.';\n  }\n  \n  if (leningBedrag > 10000000) {\n    return 'Het leningbedrag mag maximaal €10.000.000 zijn.';\n  }\n  \n  if (!rentePercentage || rentePercentage < 0.1) {\n    return 'Het rentepercentage moet minimaal 0,1% zijn.';\n  }\n  \n  if (rentePercentage > 25) {\n    return 'Het rentepercentage mag maximaal 25% zijn.';\n  }\n  \n  return null;\n}\n\n// Bereken annuïtaire lening (gelijke maandlasten)\nfunction berekenAnnuitair(bedrag, maandRente, aantalMaanden) {\n  if (maandRente === 0) {\n    return bedrag / aantalMaanden;\n  }\n  \n  const factor = Math.pow(1 + maandRente, aantalMaanden);\n  const maandlast = bedrag * (maandRente * factor) / (factor - 1);\n  \n  return maandlast;\n}\n\n// Bereken lineaire lening (dalende maandlasten)\nfunction berekenLineair(bedrag, maandRente, aantalMaanden) {\n  const aflossing = bedrag / aantalMaanden;\n  const eersteMaandRente = bedrag * maandRente;\n  const eersteMaandlast = aflossing + eersteMaandRente;\n  \n  // Bereken laatste maandlast\n  const laatsteMaandRente = aflossing * maandRente;\n  const laatsteMaandlast = aflossing + laatsteMaandRente;\n  \n  // Bereken totale rente voor lineaire lening\n  let totaleRente = 0;\n  let restSchuld = bedrag;\n  \n  for (let i = 0; i < aantalMaanden; i++) {\n    const renteDeelMaand = restSchuld * maandRente;\n    totaleRente += renteDeelMaand;\n    restSchuld -= aflossing;\n  }\n  \n  return {\n    eersteMaandlast,\n    laatsteMaandlast,\n    totaleRente\n  };\n}\n\n// Hoofdberekeningsfunctie\nfunction berekenLening() {\n  // Valideer input\n  const validatieFout = valideerInput();\n  if (validatieFout) {\n    errorMsg.textContent = validatieFout;\n    errorMsg.style.display = 'block';\n    resultatenDiv.style.display = 'none';\n    return;\n  }\n  \n  errorMsg.style.display = 'none';\n  \n  // Haal waarden op\n  const leningBedrag = parseFloat(leningBedragInput.value);\n  const looptijdMaanden = parseInt(looptijdSelect.value);\n  const jaarRente = parseFloat(rentePercentageInput.value);\n  const aflossingsType = aflossingsTypeSelect.value;\n  const afsluitkosten = parseFloat(afsluitkostenInput.value) || 0;\n  const maandKosten = parseFloat(maandKostenInput.value) || 0;\n  \n  // Bereken maandrente\n  const maandRente = jaarRente / 100 / 12;\n  \n  let maandlast, totaleRente, totaalBetaald;\n  let maandlastInfo = '';\n  \n  if (aflossingsType === 'annuitair') {\n    // Annuïtaire berekening\n    maandlast = berekenAnnuitair(leningBedrag, maandRente, looptijdMaanden);\n    const totaalAflossing = maandlast * looptijdMaanden;\n    totaleRente = totaalAflossing - leningBedrag;\n    totaalBetaald = totaalAflossing;\n    maandlastInfo = 'Vaste maandlast';\n  } else {\n    // Lineaire berekening\n    const lineairResult = berekenLineair(leningBedrag, maandRente, looptijdMaanden);\n    maandlast = lineairResult.eersteMaandlast;\n    totaleRente = lineairResult.totaleRente;\n    totaalBetaald = leningBedrag + totaleRente;\n    maandlastInfo = `Eerste maand: ${formatCurrency(lineairResult.eersteMaandlast)} → Laatste maand: ${formatCurrency(lineairResult.laatsteMaandlast)}`;\n  }\n  \n  // Voeg extra kosten toe\n  const totaleAdminKosten = maandKosten * looptijdMaanden;\n  const totaleExtraKosten = afsluitkosten + totaleAdminKosten;\n  const totaalInclKosten = totaalBetaald + totaleExtraKosten;\n  const maandlastInclKosten = maandlast + maandKosten;\n  \n  // Toon resultaten\n  maandlastEl.textContent = formatCurrency(maandlastInclKosten);\n  maandlastInfoEl.textContent = maandlastInfo;\n  totaalBetalenEl.textContent = formatCurrency(totaalInclKosten);\n  totaleRenteEl.textContent = formatCurrency(totaleRente);\n  totaleKostenEl.textContent = formatCurrency(totaleExtraKosten);\n  \n  // Specificatie\n  specLeningBedragEl.textContent = formatCurrency(leningBedrag);\n  specLooptijdEl.textContent = looptijdMaanden + ' maanden (' + (looptijdMaanden / 12).toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 1 }) + ' jaar)';\n  specRenteEl.textContent = formatPercentage(jaarRente);\n  specTypeEl.textContent = aflossingsType === 'annuitair' ? 'Annuïtair (gelijke maandlasten)' : 'Lineair (dalende maandlasten)';\n  specAfsluitkostenEl.textContent = formatCurrency(afsluitkosten);\n  specAdminKostenEl.textContent = formatCurrency(totaleAdminKosten);\n  specTotaalEl.textContent = formatCurrency(totaalInclKosten);\n  \n  resultatenDiv.style.display = 'block';\n  resultatenDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\n// Reset functie\nfunction resetCalculator() {\n  leningBedragInput.value = '25000';\n  looptijdSelect.value = '36';\n  rentePercentageInput.value = '5.5';\n  aflossingsTypeSelect.value = 'annuitair';\n  afsluitkostenInput.value = '500';\n  maandKostenInput.value = '10';\n  errorMsg.style.display = 'none';\n  resultatenDiv.style.display = 'none';\n}\n\n// Event listeners\nberekenBtn.addEventListener('click', berekenLening);\nresetBtn.addEventListener('click', resetCalculator);\n\n// Enter toets support\n[leningBedragInput, rentePercentageInput, afsluitkostenInput, maandKostenInput].forEach(input => {\n  input.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      berekenLening();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken uw zakelijke lening snel",
          "description": "Ontdek eenvoudig hoeveel u kunt lenen als ZZP'er.",
          "steps": [
                {
                      "step": 1,
                      "title": "Vul uw bedrijfsgegevens in",
                      "description": "Voer uw bedrijfsnaam en KVK-nummer in."
                },
                {
                      "step": 2,
                      "title": "Voer gewenst leenbedrag in",
                      "description": "Geef aan hoeveel u wilt lenen voor uw onderneming."
                },
                {
                      "step": 3,
                      "title": "Selecteer looptijd",
                      "description": "Kies de periode waarin u de lening wilt aflossen."
                },
                {
                      "step": 4,
                      "title": "Bekijk uw mogelijkheden",
                      "description": "Klik op bereken om uw leningopties te zien."
                }
          ]
    },
    examples: [
          {
                "title": "Freelance webdesigner zoekt extra kapitaal",
                "description": "Een webdesigner wil investeren in nieuwe apparatuur.",
                "input": {
                      "bedrijfsnaam": "Studio Pixel",
                      "KVK-nummer": "12345678",
                      "leenbedrag": "€10.000",
                      "looptijd": "24 maanden"
                },
                "output": "Maandelijkse aflossing: €450",
                "explanation": "De lening helpt de designer met apparatuur zonder cashflow te verstoren."
          },
          {
                "title": "Consultant breidt uit met marketingcampagne",
                "description": "Een consultant wil zijn diensten promoten met een marketingbudget.",
                "input": {
                      "bedrijfsnaam": "ConsultMe",
                      "KVK-nummer": "87654321",
                      "leenbedrag": "€5.000",
                      "looptijd": "12 maanden"
                },
                "output": "Maandelijkse aflossing: €430",
                "explanation": "Een kortere looptijd zorgt voor hogere maandlasten, maar sneller resultaat."
          },
          {
                "title": "Fotograaf zoekt financiering voor studioverbouwing",
                "description": "Een fotograaf heeft fondsen nodig voor een studioverbouwing.",
                "input": {
                      "bedrijfsnaam": "Lens & Light",
                      "KVK-nummer": "11223344",
                      "leenbedrag": "€15.000",
                      "looptijd": "36 maanden"
                },
                "output": "Maandelijkse aflossing: €550",
                "explanation": "Een langere looptijd maakt de maandelijkse lasten beheersbaar."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik als ZZP'er mijn maximale leenbedrag?",
                "answer": "Gebruik online tools en voer uw bedrijfsgegevens in voor een schatting. Let op uw omzet en kredietwaardigheid."
          },
          {
                "question": "Wat is de invloed van de looptijd op mijn maandlasten?",
                "answer": "Een langere looptijd verlaagt uw maandlasten, maar kan tot hogere totale kosten leiden door rente."
          },
          {
                "question": "Zijn er specifieke regels voor ZZP'ers bij het afsluiten van een zakelijke lening?",
                "answer": "Ja, u moet ingeschreven staan bij de KVK en vaak minimaal een jaar actief zijn met aantoonbare omzet."
          },
          {
                "question": "Moet ik rekening houden met BTW bij het berekenen van mijn lening?",
                "answer": "Nee, de lening zelf is vrij van BTW. Maar investeringen die u ermee doet, kunnen wel BTW-plichtig zijn."
          },
          {
                "question": "Welke factoren beïnvloeden de rente op mijn zakelijke lening?",
                "answer": "Uw kredietwaardigheid, looptijd, en het leenbedrag zijn bepalende factoren voor de rente."
          },
          {
                "question": "Heb ik als startende ZZP'er ook toegang tot zakelijke leningen?",
                "answer": "Ja, maar financierders vragen vaak om extra zekerheden zoals een goed businessplan of persoonlijke borgstelling."
          }
    ],
    additionalInfo: {
          "title": "Essentiële info voor ZZP-leningen",
          "content": "ZZP'ers moeten hun omzet en kredietwaardigheid in acht nemen bij het aanvragen van een lening. Regelmatige inkomsten en een gezond financieel verleden verhogen de kans op goedkeuring. Overweeg ook de impact van rente en looptijd op uw maandlasten."
    }
  },


  generatedAt: '2025-10-27T18:27:12.230Z',
  version: '1.0.0'
}
