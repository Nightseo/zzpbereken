import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: stakingswinst eenmanszaak berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-27T18:21:53.388Z
 */

export const stakingswinst_eenmanszaakCalculatorData: CalculatorData = {
  slug: 'stakingswinst-eenmanszaak',

  metadata: {
    title: "Bereken Stakingswinst - Einde Eenmanszaak Calculator",
    description: "Ontdek je stakingswinst bij het beëindigen van je eenmanszaak. Nauwkeurig en specifiek voor ZZP'ers. Gratis stakingswinstcalculator.",
    excerpt: "Bereken je stakingswinst bij het stoppen met je eenmanszaak. Deze calculator helpt je de belastbare winst, stakingsvrijstelling en netto opbrengst te bepalen volgens Nederlandse wetgeving.",
    canonical: 'https://zzpbereken.com/bereken/stakingswinst-eenmanszaak',
    keywords: ["stakingswinst eenmanszaak berekenen"],
    category: "Belastingen",
    h1: "Bereken stakingswinst eenmanszaak",
    h2: "Stakingswinst Eenmanszaak Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\"><div class=\"calc-group\"><label class=\"calc-label\">Boekwaarde bedrijfsmiddelen</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"boekwaarde\" class=\"calc-input\" placeholder=\"50000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">De waarde van machines, inventaris en andere bedrijfsmiddelen in de boeken</p></div><div class=\"calc-group\"><label class=\"calc-label\">Verkoopopbrengst bedrijfsmiddelen</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"verkoopopbrengst\" class=\"calc-input\" placeholder=\"80000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Het bedrag dat je ontvangt bij verkoop van bedrijfsmiddelen</p></div><div class=\"calc-group\"><label class=\"calc-label\">Goodwill opbrengst</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"goodwill\" class=\"calc-input\" placeholder=\"30000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Vergoeding voor klantenbestand, reputatie en bedrijfsnaam</p></div><div class=\"calc-group\"><label class=\"calc-label\">Debiteuren (openstaande vorderingen)</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"debiteuren\" class=\"calc-input\" placeholder=\"15000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Nog te ontvangen bedragen van klanten</p></div><div class=\"calc-group\"><label class=\"calc-label\">Voorraden</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"voorraden\" class=\"calc-input\" placeholder=\"10000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Waarde van resterende voorraden en handelsvoorraad</p></div><div class=\"calc-group\"><label class=\"calc-label\">Stakingskosten</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"stakingskosten\" class=\"calc-input\" placeholder=\"5000\" min=\"0\" step=\"100\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Kosten zoals notaris, accountant, opruiming, etc.</p></div><div class=\"calc-group\"><label class=\"calc-label\">Heb je recht op stakingsvrijstelling?</label><select id=\"vrijstelling\" class=\"calc-select\"><option value=\"ja\">Ja, ik ben ouder dan 55 jaar of arbeidsongeschikt</option><option value=\"nee\">Nee</option></select><p class=\"calc-help\">Bij staking wegens ouderdom (55+) of arbeidsongeschiktheid krijg je een vrijstelling</p></div><div class=\"calc-group\"><label class=\"calc-label\">Je gemiddelde inkomen afgelopen 3 jaar</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"gemiddeldInkomen\" class=\"calc-input\" placeholder=\"45000\" min=\"0\" step=\"1000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Voor inschatting belastingdruk op de stakingswinst</p></div><button id=\"bereken\" class=\"calc-button\">Bereken stakingswinst</button><div id=\"error\" class=\"calc-error\" style=\"display:none;\"></div><div id=\"resultaten\" class=\"calc-result-container\" style=\"display:none;\"><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"totaleStakingswinst\">€ 0</div><div class=\"calc-result-label\">Totale stakingswinst</div><div class=\"calc-result-subtitle\">Belastbaar resultaat bij staking</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"vrijstellingBedrag\">€ 0</div><div class=\"calc-result-label\">Stakingsvrijstelling</div><div class=\"calc-result-subtitle\">Belastingvrij deel</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"belastbareWinst\">€ 0</div><div class=\"calc-result-label\">Belastbare stakingswinst</div><div class=\"calc-result-subtitle\">Na aftrek vrijstelling</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"geschatteBelasting\">€ 0</div><div class=\"calc-result-label\">Geschatte belasting</div><div class=\"calc-result-subtitle\">Indicatieve berekening (37,1% gemiddeld tarief)</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"nettoOpbrengst\">€ 0</div><div class=\"calc-result-label\">Netto opbrengst</div><div class=\"calc-result-subtitle\">Na aftrek belasting</div></div><div class=\"calc-breakdown\"><h3>Gedetailleerde berekening</h3><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Verkoopopbrengst bedrijfsmiddelen</span><span class=\"calc-breakdown-value\" id=\"bd-verkoopopbrengst\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Boekwaarde bedrijfsmiddelen</span><span class=\"calc-breakdown-value\" id=\"bd-boekwaarde\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Boekwinst bedrijfsmiddelen</span><span class=\"calc-breakdown-value\" id=\"bd-boekwinst\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Goodwill opbrengst</span><span class=\"calc-breakdown-value\" id=\"bd-goodwill\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Debiteuren</span><span class=\"calc-breakdown-value\" id=\"bd-debiteuren\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Voorraden</span><span class=\"calc-breakdown-value\" id=\"bd-voorraden\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Stakingskosten</span><span class=\"calc-breakdown-value\" id=\"bd-stakingskosten\">€ 0</span></div><div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #333; margin-top: 10px; padding-top: 10px; font-weight: bold;\"><span class=\"calc-breakdown-label\">Totale stakingswinst</span><span class=\"calc-breakdown-value\" id=\"bd-totaal\">€ 0</span></div></div><p class=\"calc-help\" style=\"margin-top: 20px;\"><strong>Let op:</strong> Dit is een indicatieve berekening. De werkelijke belasting hangt af van je totale inkomen in het stakingsjaar, andere inkomsten, aftrekposten en persoonlijke situatie. Raadpleeg altijd een belastingadviseur of accountant voor een precieze berekening.</p></div></div>",
    logic: "const berekenButton = document.getElementById('bereken');\nconst errorDiv = document.getElementById('error');\nconst resultatenDiv = document.getElementById('resultaten');\n\nfunction formatCurrency(value) {\n  return '€ ' + value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 });\n}\n\nfunction toonError(bericht) {\n  errorDiv.textContent = bericht;\n  errorDiv.style.display = 'block';\n  resultatenDiv.style.display = 'none';\n}\n\nfunction verbergError() {\n  errorDiv.style.display = 'none';\n}\n\nfunction berekenStakingswinst() {\n  verbergError();\n\n  const boekwaarde = parseFloat(document.getElementById('boekwaarde').value) || 0;\n  const verkoopopbrengst = parseFloat(document.getElementById('verkoopopbrengst').value) || 0;\n  const goodwill = parseFloat(document.getElementById('goodwill').value) || 0;\n  const debiteuren = parseFloat(document.getElementById('debiteuren').value) || 0;\n  const voorraden = parseFloat(document.getElementById('voorraden').value) || 0;\n  const stakingskosten = parseFloat(document.getElementById('stakingskosten').value) || 0;\n  const heeftVrijstelling = document.getElementById('vrijstelling').value === 'ja';\n  const gemiddeldInkomen = parseFloat(document.getElementById('gemiddeldInkomen').value) || 0;\n\n  if (verkoopopbrengst === 0 && goodwill === 0 && debiteuren === 0 && voorraden === 0) {\n    toonError('Vul minimaal één opbrengstwaarde in om de stakingswinst te berekenen.');\n    return;\n  }\n\n  if (verkoopopbrengst < boekwaarde && verkoopopbrengst > 0) {\n    const bevestig = confirm('De verkoopopbrengst is lager dan de boekwaarde. Dit betekent een boekwinst van 0 of mogelijk een verlies. Wil je doorgaan met de berekening?');\n    if (!bevestig) return;\n  }\n\n  const boekwinst = Math.max(0, verkoopopbrengst - boekwaarde);\n  const totaleStakingswinst = boekwinst + goodwill + debiteuren + voorraden - stakingskosten;\n\n  const STAKINGSVRIJSTELLING_2025 = 3630;\n  const vrijstellingBedrag = heeftVrijstelling ? STAKINGSVRIJSTELLING_2025 : 0;\n  const belastbareWinst = Math.max(0, totaleStakingswinst - vrijstellingBedrag);\n\n  let effectiefTarief = 0.371;\n  if (gemiddeldInkomen > 0) {\n    if (gemiddeldInkomen <= 38098) {\n      effectiefTarief = 0.3655;\n    } else if (gemiddeldInkomen <= 75518) {\n      effectiefTarief = 0.3793;\n    } else {\n      effectiefTarief = 0.495;\n    }\n  }\n\n  const geschatteBelasting = Math.round(belastbareWinst * effectiefTarief);\n  const nettoOpbrengst = totaleStakingswinst - geschatteBelasting;\n\n  document.getElementById('totaleStakingswinst').textContent = formatCurrency(totaleStakingswinst);\n  document.getElementById('vrijstellingBedrag').textContent = formatCurrency(vrijstellingBedrag);\n  document.getElementById('belastbareWinst').textContent = formatCurrency(belastbareWinst);\n  document.getElementById('geschatteBelasting').textContent = formatCurrency(geschatteBelasting);\n  document.getElementById('nettoOpbrengst').textContent = formatCurrency(nettoOpbrengst);\n\n  document.getElementById('bd-verkoopopbrengst').textContent = formatCurrency(verkoopopbrengst);\n  document.getElementById('bd-boekwaarde').textContent = formatCurrency(boekwaarde);\n  document.getElementById('bd-boekwinst').textContent = formatCurrency(boekwinst);\n  document.getElementById('bd-goodwill').textContent = formatCurrency(goodwill);\n  document.getElementById('bd-debiteuren').textContent = formatCurrency(debiteuren);\n  document.getElementById('bd-voorraden').textContent = formatCurrency(voorraden);\n  document.getElementById('bd-stakingskosten').textContent = '- ' + formatCurrency(stakingskosten);\n  document.getElementById('bd-totaal').textContent = formatCurrency(totaleStakingswinst);\n\n  resultatenDiv.style.display = 'block';\n  resultatenDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nberekenButton.addEventListener('click', berekenStakingswinst);\n\nconst inputs = document.querySelectorAll('.calc-input, .calc-select');\ninputs.forEach(input => {\n  input.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      berekenStakingswinst();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Stakingswinst berekenen eenmanszaak",
          "description": "Ontdek eenvoudig uw stakingswinst bij het beëindigen van uw eenmanszaak.",
          "steps": [
                {
                      "step": 1,
                      "title": "Verzamel financiële gegevens",
                      "description": "Noteer alle activa, passiva en openstaande schulden."
                },
                {
                      "step": 2,
                      "title": "Bereken boekwaarde",
                      "description": "Bepaal de boekwaarde van uw bedrijfsmiddelen."
                },
                {
                      "step": 3,
                      "title": "Waardeer bedrijfsmiddelen",
                      "description": "Schat de marktwaarde van uw bedrijfsmiddelen."
                },
                {
                      "step": 4,
                      "title": "Voer gegevens in calculator",
                      "description": "Vul alle verzamelde gegevens in de calculator in voor uw stakingswinst."
                }
          ]
    },
    examples: [
          {
                "title": "Beëindiging freelance marketingbureau",
                "description": "Een ZZP'er beëindigt zijn marketingbureau na 5 jaar.",
                "input": {
                      "activa": "€25.000",
                      "passiva": "€10.000",
                      "marktwaarde_bedrijfsmiddelen": "€30.000"
                },
                "output": "Stakingswinst: €15.000",
                "explanation": "De stakingswinst is de marktwaarde minus de passiva."
          },
          {
                "title": "Afsluiting persoonlijke trainingspraktijk",
                "description": "Een personal trainer stopt met zijn eenmanszaak.",
                "input": {
                      "activa": "€10.000",
                      "passiva": "€2.000",
                      "marktwaarde_bedrijfsmiddelen": "€12.000"
                },
                "output": "Stakingswinst: €10.000",
                "explanation": "Boekwaarde plus meerwaarde van de activa minus passiva."
          },
          {
                "title": "Einde webdesign bedrijf",
                "description": "Een webdesigner sluit zijn eenmanszaak na 8 jaar.",
                "input": {
                      "activa": "€40.000",
                      "passiva": "€15.000",
                      "marktwaarde_bedrijfsmiddelen": "€50.000"
                },
                "output": "Stakingswinst: €35.000",
                "explanation": "De stakingswinst is de verschil tussen de marktwaarde en de passiva."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik de stakingswinst bij beëindiging van mijn eenmanszaak?",
                "answer": "Verzamel activa en passiva, bepaal de marktwaarde van bedrijfsmiddelen en trek passiva van de marktwaarde af."
          },
          {
                "question": "Moet ik belasting betalen over mijn stakingswinst?",
                "answer": "Ja, stakingswinst wordt belast als inkomen in box 1. Check de actuele belastingtarieven."
          },
          {
                "question": "Hoe wordt de marktwaarde van bedrijfsmiddelen bepaald?",
                "answer": "Schat de waarde waarvoor u de middelen kunt verkopen op de vrije markt."
          },
          {
                "question": "Kan ik aftrekposten toepassen bij stakingswinst?",
                "answer": "Ja, ondernemersaftrek en fiscale oudedagsreserve kunnen van invloed zijn. Raadpleeg een adviseur."
          },
          {
                "question": "Welke documenten heb ik nodig voor de stakingswinstberekening?",
                "answer": "Jaarrekeningen, balans en een overzicht van activa en passiva zijn essentieel."
          },
          {
                "question": "Wat gebeurt er met BTW bij de beëindiging van mijn eenmanszaak?",
                "answer": "Controleer of er nog openstaande BTW-verplichtingen zijn en dien een eindafrekening in."
          }
    ],
    additionalInfo: {
          "title": "Belang van Stakingswinst",
          "content": "De stakingswinst is essentieel voor het bepalen van uw fiscale verplichtingen bij beëindiging van uw eenmanszaak. Volg de richtlijnen van de Belastingdienst en overweeg fiscale voordelen zoals ondernemersaftrek om uw belastingdruk te verlagen."
    }
  },


  generatedAt: '2025-10-27T18:21:53.389Z',
  version: '1.0.0'
}
