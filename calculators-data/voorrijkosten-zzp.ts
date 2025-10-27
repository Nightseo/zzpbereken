import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: voorrijkosten berekenen zzp
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-27T18:24:30.269Z
 */

export const voorrijkosten_zzpCalculatorData: CalculatorData = {
  slug: 'voorrijkosten-zzp',

  metadata: {
    title: "Voorrijkosten Calculator - Bereken voor ZZP'ers",
    description: "Bereken nauwkeurig je voorrijkosten als ZZP'er. Inclusief brandstofkosten en reistijd. Essentieel voor offertes en facturen. Probeer nu gratis.",
    excerpt: "Bereken snel en eenvoudig je voorrijkosten als ZZP'er. Deze calculator helpt je de juiste voorrijkosten te bepalen op basis van reisafstand, aantal bezoeken, kilometertarief en extra kosten zoals parkeren en tol.",
    canonical: 'https://zzpbereken.com/bereken/voorrijkosten-zzp',
    keywords: ["voorrijkosten berekenen zzp"],
    category: "Kosten",
    h1: "Bereken Voorrijkosten ZZP",
    h2: "Voorrijkosten Berekenen ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Reisafstand (enkele reis)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"distance\" class=\"calc-input\" placeholder=\"50\" min=\"0\" step=\"0.1\">\n      <span class=\"calc-input-suffix\">km</span>\n    </div>\n    <span class=\"calc-help\">Afstand van jouw locatie naar de klant</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Aantal bezoeken</label>\n    <input type=\"number\" id=\"visits\" class=\"calc-input\" placeholder=\"1\" min=\"1\" step=\"1\" value=\"1\">\n    <span class=\"calc-help\">Hoe vaak moet je naar deze klant reizen?</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Type reiskosten</label>\n    <select id=\"travelType\" class=\"calc-select\">\n      <option value=\"auto\">Auto (€0,23 per km)</option>\n      <option value=\"motor\">Motor (€0,21 per km)</option>\n      <option value=\"bromfiets\">Bromfiets (€0,15 per km)</option>\n      <option value=\"custom\">Eigen tarief</option>\n    </select>\n    <span class=\"calc-help\">Kies jouw vervoersmiddel (tarieven 2025)</span>\n  </div>\n\n  <div class=\"calc-group\" id=\"customRateGroup\" style=\"display: none;\">\n    <label class=\"calc-label\">Eigen kilometertarief</label>\n    <div class=\"calc-input-wrapper\">\n      <span class=\"calc-input-suffix\">€</span>\n      <input type=\"number\" id=\"customRate\" class=\"calc-input\" placeholder=\"0,23\" min=\"0\" step=\"0.01\">\n    </div>\n    <span class=\"calc-help\">Vul je eigen tarief per kilometer in</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Extra parkeerkosten per bezoek</label>\n    <div class=\"calc-input-wrapper\">\n      <span class=\"calc-input-suffix\">€</span>\n      <input type=\"number\" id=\"parking\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"0.50\" value=\"0\">\n    </div>\n    <span class=\"calc-help\">Eventuele parkeerkosten (optioneel)</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Toltarieven per bezoek</label>\n    <div class=\"calc-input-wrapper\">\n      <span class=\"calc-input-suffix\">€</span>\n      <input type=\"number\" id=\"toll\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"0.50\" value=\"0\">\n    </div>\n    <span class=\"calc-help\">Eventuele tolkosten (optioneel)</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Voorrijkosten doorberekenen?</label>\n    <select id=\"chargeClient\" class=\"calc-select\">\n      <option value=\"yes\">Ja, doorberekenen aan klant</option>\n      <option value=\"no\">Nee, zelf dragen</option>\n    </select>\n    <span class=\"calc-help\">Reken je voorrijkosten door in je offerte?</span>\n  </div>\n\n  <div class=\"calc-group\" id=\"markupGroup\" style=\"display: none;\">\n    <label class=\"calc-label\">Opslag op voorrijkosten</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"markup\" class=\"calc-input\" placeholder=\"0\" min=\"0\" max=\"100\" step=\"5\" value=\"0\">\n      <span class=\"calc-input-suffix\">%</span>\n    </div>\n    <span class=\"calc-help\">Eventuele opslag voor administratiekosten</span>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">BTW toepassen?</label>\n    <select id=\"vat\" class=\"calc-select\">\n      <option value=\"21\">Ja, 21% BTW</option>\n      <option value=\"9\">Ja, 9% BTW</option>\n      <option value=\"0\">Nee, geen BTW (KOR)</option>\n    </select>\n    <span class=\"calc-help\">Gebruik je de kleinondernemersregeling (KOR)?</span>\n  </div>\n\n  <button id=\"calculateBtn\" class=\"calc-button\">Bereken voorrijkosten</button>\n\n  <div id=\"result\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Totale voorrijkosten</div>\n      <div class=\"calc-result-value\" id=\"totalCost\">€ 0,00</div>\n      <div class=\"calc-result-subtitle\" id=\"resultSubtitle\">Inclusief BTW</div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3 style=\"margin: 0 0 15px 0; font-size: 1.1em; color: #2c3e50;\">Kostenoverzicht</h3>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Totale reisafstand</span>\n        <span class=\"calc-breakdown-value\" id=\"totalDistance\">0 km</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Kilometertarief</span>\n        <span class=\"calc-breakdown-value\" id=\"ratePerKm\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Kilometervergoeding</span>\n        <span class=\"calc-breakdown-value\" id=\"kmCost\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" id=\"parkingRow\" style=\"display: none;\">\n        <span class=\"calc-breakdown-label\">Parkeerkosten</span>\n        <span class=\"calc-breakdown-value\" id=\"parkingCost\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" id=\"tollRow\" style=\"display: none;\">\n        <span class=\"calc-breakdown-label\">Tolkosten</span>\n        <span class=\"calc-breakdown-value\" id=\"tollCost\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Subtotaal excl. BTW</span>\n        <span class=\"calc-breakdown-value\" id=\"subtotal\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" id=\"markupRow\" style=\"display: none;\">\n        <span class=\"calc-breakdown-label\" id=\"markupLabel\">Opslag (0%)</span>\n        <span class=\"calc-breakdown-value\" id=\"markupCost\">€ 0,00</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" id=\"vatRow\" style=\"display: none;\">\n        <span class=\"calc-breakdown-label\" id=\"vatLabel\">BTW (21%)</span>\n        <span class=\"calc-breakdown-value\" id=\"vatCost\">€ 0,00</span>\n      </div>\n    </div>\n\n    <div class=\"calc-result-box\" style=\"margin-top: 20px; background-color: #e8f4f8;\">\n      <div class=\"calc-result-label\" id=\"adviceTitle\">Tip voor je offerte</div>\n      <p id=\"adviceText\" style=\"margin: 10px 0 0 0; font-size: 0.95em; line-height: 1.5; color: #34495e;\"></p>\n    </div>\n  </div>\n\n  <div id=\"error\" class=\"calc-error\" style=\"display: none;\"></div>\n</div>",
    logic: "// Standaard kilometertarieven 2025\nconst RATES = {\n  auto: 0.23,\n  motor: 0.21,\n  bromfiets: 0.15\n};\n\n// Elementen\nconst distanceInput = document.getElementById('distance');\nconst visitsInput = document.getElementById('visits');\nconst travelTypeSelect = document.getElementById('travelType');\nconst customRateInput = document.getElementById('customRate');\nconst customRateGroup = document.getElementById('customRateGroup');\nconst parkingInput = document.getElementById('parking');\nconst tollInput = document.getElementById('toll');\nconst chargeClientSelect = document.getElementById('chargeClient');\nconst markupInput = document.getElementById('markup');\nconst markupGroup = document.getElementById('markupGroup');\nconst vatSelect = document.getElementById('vat');\nconst calculateBtn = document.getElementById('calculateBtn');\nconst resultDiv = document.getElementById('result');\nconst errorDiv = document.getElementById('error');\n\n// Toon/verberg custom rate veld\ntravelTypeSelect.addEventListener('change', function() {\n  if (this.value === 'custom') {\n    customRateGroup.style.display = 'block';\n  } else {\n    customRateGroup.style.display = 'none';\n  }\n});\n\n// Toon/verberg markup veld\nchargeClientSelect.addEventListener('change', function() {\n  if (this.value === 'yes') {\n    markupGroup.style.display = 'block';\n  } else {\n    markupGroup.style.display = 'none';\n  }\n});\n\n// Hoofdberekening\ncalculateBtn.addEventListener('click', calculate);\n\n// Enter key support\n[distanceInput, visitsInput, customRateInput, parkingInput, tollInput, markupInput].forEach(input => {\n  input.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      calculate();\n    }\n  });\n});\n\nfunction calculate() {\n  // Reset foutmeldingen\n  errorDiv.style.display = 'none';\n  resultDiv.style.display = 'none';\n\n  // Validatie\n  const distance = parseFloat(distanceInput.value);\n  const visits = parseInt(visitsInput.value);\n  const travelType = travelTypeSelect.value;\n  const parking = parseFloat(parkingInput.value) || 0;\n  const toll = parseFloat(tollInput.value) || 0;\n  const chargeClient = chargeClientSelect.value;\n  const markup = parseFloat(markupInput.value) || 0;\n  const vatRate = parseFloat(vatSelect.value);\n\n  if (!distance || distance <= 0) {\n    showError('Vul een geldige reisafstand in (groter dan 0 km).');\n    return;\n  }\n\n  if (!visits || visits <= 0) {\n    showError('Vul een geldig aantal bezoeken in (minimaal 1).');\n    return;\n  }\n\n  if (visits > 365) {\n    showError('Het aantal bezoeken lijkt onrealistisch hoog. Controleer je invoer.');\n    return;\n  }\n\n  // Bepaal kilometertarief\n  let ratePerKm;\n  if (travelType === 'custom') {\n    ratePerKm = parseFloat(customRateInput.value);\n    if (!ratePerKm || ratePerKm <= 0) {\n      showError('Vul een geldig eigen kilometertarief in.');\n      return;\n    }\n    if (ratePerKm > 2) {\n      showError('Je kilometertarief lijkt erg hoog. Controleer of je het juiste bedrag hebt ingevoerd.');\n      return;\n    }\n  } else {\n    ratePerKm = RATES[travelType];\n  }\n\n  if (markup < 0 || markup > 100) {\n    showError('Opslag moet tussen 0% en 100% zijn.');\n    return;\n  }\n\n  if (parking < 0 || toll < 0) {\n    showError('Parkeer- en tolkosten kunnen niet negatief zijn.');\n    return;\n  }\n\n  // Berekeningen\n  const totalDistance = distance * 2 * visits; // Heen en terug\n  const kmCost = totalDistance * ratePerKm;\n  const totalParking = parking * visits;\n  const totalToll = toll * visits;\n  \n  let subtotal = kmCost + totalParking + totalToll;\n  \n  // Opslag toepassen als kosten doorberekend worden\n  let markupAmount = 0;\n  if (chargeClient === 'yes' && markup > 0) {\n    markupAmount = subtotal * (markup / 100);\n    subtotal += markupAmount;\n  }\n  \n  // BTW berekenen\n  const vatAmount = subtotal * (vatRate / 100);\n  const total = subtotal + vatAmount;\n\n  // Resultaten tonen\n  displayResults({\n    total,\n    totalDistance,\n    ratePerKm,\n    kmCost,\n    totalParking,\n    totalToll,\n    subtotal: subtotal - markupAmount,\n    markupAmount,\n    markup,\n    vatAmount,\n    vatRate,\n    chargeClient,\n    visits\n  });\n}\n\nfunction displayResults(data) {\n  // Hoofdresultaat\n  document.getElementById('totalCost').textContent = formatCurrency(data.total);\n  \n  const subtitle = data.vatRate > 0 ? 'Inclusief BTW' : 'Zonder BTW (KOR)';\n  document.getElementById('resultSubtitle').textContent = subtitle;\n\n  // Breakdown\n  document.getElementById('totalDistance').textContent = formatNumber(data.totalDistance) + ' km';\n  document.getElementById('ratePerKm').textContent = formatCurrency(data.ratePerKm) + ' per km';\n  document.getElementById('kmCost').textContent = formatCurrency(data.kmCost);\n  \n  // Parkeerkosten\n  if (data.totalParking > 0) {\n    document.getElementById('parkingRow').style.display = 'flex';\n    document.getElementById('parkingCost').textContent = formatCurrency(data.totalParking);\n  } else {\n    document.getElementById('parkingRow').style.display = 'none';\n  }\n  \n  // Tolkosten\n  if (data.totalToll > 0) {\n    document.getElementById('tollRow').style.display = 'flex';\n    document.getElementById('tollCost').textContent = formatCurrency(data.totalToll);\n  } else {\n    document.getElementById('tollRow').style.display = 'none';\n  }\n  \n  document.getElementById('subtotal').textContent = formatCurrency(data.subtotal);\n  \n  // Opslag\n  if (data.markupAmount > 0) {\n    document.getElementById('markupRow').style.display = 'flex';\n    document.getElementById('markupLabel').textContent = `Opslag (${formatNumber(data.markup)}%)`;\n    document.getElementById('markupCost').textContent = formatCurrency(data.markupAmount);\n  } else {\n    document.getElementById('markupRow').style.display = 'none';\n  }\n  \n  // BTW\n  if (data.vatRate > 0) {\n    document.getElementById('vatRow').style.display = 'flex';\n    document.getElementById('vatLabel').textContent = `BTW (${formatNumber(data.vatRate)}%)`;\n    document.getElementById('vatCost').textContent = formatCurrency(data.vatAmount);\n  } else {\n    document.getElementById('vatRow').style.display = 'none';\n  }\n\n  // Advies\n  let adviceText = '';\n  if (data.chargeClient === 'yes') {\n    adviceText = `Je kunt <strong>${formatCurrency(data.total)}</strong> als voorrijkosten in je offerte opnemen. `;\n    adviceText += `Vermeld duidelijk de reisafstand (${formatNumber(data.totalDistance)} km) en het tarief (${formatCurrency(data.ratePerKm)}/km) in je offerte. `;\n    if (data.visits > 1) {\n      adviceText += `Dit bedrag is gebaseerd op ${data.visits} bezoeken.`;\n    }\n  } else {\n    const costPerVisit = data.total / data.visits;\n    adviceText = `Je draagt zelf <strong>${formatCurrency(data.total)}</strong> aan voorrijkosten. `;\n    adviceText += `Dit is <strong>${formatCurrency(costPerVisit)}</strong> per bezoek. `;\n    adviceText += 'Overweeg om deze kosten mee te nemen in je uurtarief of als aparte kostenpost door te berekenen aan je klant.';\n  }\n  \n  document.getElementById('adviceTitle').textContent = data.chargeClient === 'yes' ? 'Tip voor je offerte' : 'Let op je winstmarge';\n  document.getElementById('adviceText').innerHTML = adviceText;\n\n  resultDiv.style.display = 'block';\n  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nfunction showError(message) {\n  errorDiv.textContent = message;\n  errorDiv.style.display = 'block';\n  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nfunction formatCurrency(value) {\n  return '€ ' + value.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n}\n\nfunction formatNumber(value) {\n  return value.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 2 });\n}",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Eenvoudig voorrijkosten berekenen",
          "description": "Bereken snel en nauwkeurig uw voorrijkosten als ZZP'er.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer vertrekpunt in",
                      "description": "Vul het adres in waar u uw reis begint."
                },
                {
                      "step": 2,
                      "title": "Voer bestemming in",
                      "description": "Geef aan waar u naar toe moet voor uw klus."
                },
                {
                      "step": 3,
                      "title": "Kies vervoersmiddel",
                      "description": "Selecteer of u met de auto, fiets of openbaar vervoer reist."
                },
                {
                      "step": 4,
                      "title": "Bereken kosten",
                      "description": "Klik op de knop om uw voorrijkosten te berekenen."
                }
          ]
    },
    examples: [
          {
                "title": "Installateur in Rotterdam naar Utrecht",
                "description": "Een loodgieter uit Rotterdam moet naar een klant in Utrecht.",
                "input": {
                      "vertrekpunt": "Rotterdam",
                      "bestemming": "Utrecht",
                      "vervoersmiddel": "auto",
                      "brandstofkosten_per_km": "€0,19",
                      "afstand": "60 km"
                },
                "output": "€22,80",
                "explanation": "Reiskosten worden berekend door de afstand te vermenigvuldigen met de brandstofkosten per kilometer."
          },
          {
                "title": "Grafisch ontwerper naar Amsterdam",
                "description": "Een grafisch ontwerper uit Almere heeft een afspraak in Amsterdam.",
                "input": {
                      "vertrekpunt": "Almere",
                      "bestemming": "Amsterdam",
                      "vervoersmiddel": "openbaar vervoer",
                      "ticketprijs": "€8,50"
                },
                "output": "€8,50",
                "explanation": "Omdat de ontwerper met het openbaar vervoer reist, zijn de voorrijkosten gelijk aan de prijs van het treinkaartje."
          },
          {
                "title": "Consultant fietst naar klant",
                "description": "Een consultant uit Den Haag bezoekt een klant in Rijswijk.",
                "input": {
                      "vertrekpunt": "Den Haag",
                      "bestemming": "Rijswijk",
                      "vervoersmiddel": "fiets",
                      "afstand": "5 km"
                },
                "output": "€0,00",
                "explanation": "Omdat de consultant fietst, zijn er geen directe kosten verbonden aan de reis."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn voorrijkosten als ZZP'er?",
                "answer": "Vermenigvuldig de afstand met uw brandstofkosten per km of gebruik de prijs van een OV-kaartje."
          },
          {
                "question": "Moet ik BTW rekenen over voorrijkosten?",
                "answer": "Ja, voorrijkosten vallen onder dienstverlening en zijn daarom belast met 21% BTW."
          },
          {
                "question": "Kan ik voorrijkosten aftrekken van de belasting?",
                "answer": "Ja, het zijn zakelijke kosten, maar houd een goede administratie bij voor de Belastingdienst."
          },
          {
                "question": "Wat als ik met de fiets ga, moet ik dan voorrijkosten rekenen?",
                "answer": "Bij fietsen zijn er geen directe kosten, maar u kunt tijd en inspanning doorberekenen als u dat wenst."
          },
          {
                "question": "Hoe geef ik voorrijkosten door aan mijn klant?",
                "answer": "Vermeld voorrijkosten duidelijk op de offerte en factuur, gespecificeerd als aparte post."
          },
          {
                "question": "Zijn er regels voor hoe hoog mijn voorrijkosten mogen zijn?",
                "answer": "Er zijn geen vaste regels, maar zorg dat uw tarieven redelijk en marktconform zijn."
          }
    ],
    additionalInfo: {
          "title": "Belang van Voorrijkosten Berekenen",
          "content": "Voor ZZP'ers is het nauwkeurig berekenen van voorrijkosten essentieel om kostendekking en winst te waarborgen. Zorg dat u alle kosten en tijd meerekent en vermeld deze duidelijk op offertes en facturen. Vergeet niet 21% BTW te rekenen en houd een goede administratie bij voor de Belastingdienst."
    }
  },


  generatedAt: '2025-10-27T18:24:30.270Z',
  version: '1.0.0'
}
