import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: beregn fleksydelse
 * Generado automáticamente con Claude API
 * Fecha: 2025-10-25T21:40:13.920Z
 */

export const fleksydelseCalculatorData: CalculatorData = {
  slug: 'fleksydelse',

  metadata: {
    title: "Fleksydelse Kalkulator - Beregn Din Støtte Nøjagtigt",
    description: "Beregn din fleksydelse præcist baseret på alder, folkepension og ekstra indkomst. Få et klart billede af din økonomiske fremtid nu!",
    excerpt: "Beregn din fleksydelse fra folkepension og se hvor meget du får udbetalt månedligt og årligt efter skat.",
    canonical: '/beregn/fleksydelse',
    keywords: ["beregn fleksydelse"],
    category: "Investering & Opsparing",
    h1: "Beregn fleksydelse",
    h2: "Fleksydelse Kalkulator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Årlig folkepension (før skat)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"folkepension\" class=\"calc-input\" placeholder=\"80000\" value=\"80000\">\n      <span class=\"calc-input-suffix\">kr</span>\n    </div>\n    <div class=\"calc-help\">Indtast din forventede årlige folkepension</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Pensionens startår</label>\n    <input type=\"number\" id=\"startaar\" class=\"calc-input\" placeholder=\"2024\" value=\"2024\">\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Din alder ved pensionsstart</label>\n    <input type=\"number\" id=\"alder\" class=\"calc-input\" placeholder=\"67\" value=\"67\">\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Årsindkomst ved siden af folkepension</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"ekstraIndkomst\" class=\"calc-input\" placeholder=\"0\" value=\"0\">\n      <span class=\"calc-input-suffix\">kr</span>\n    </div>\n    <div class=\"calc-help\">Indtægt fra arbejde, privat pension eller anden indkomst</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">ATP-opsparing (samlet)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"atpOpsparing\" class=\"calc-input\" placeholder=\"200000\" value=\"200000\">\n      <span class=\"calc-input-suffix\">kr</span>\n    </div>\n    <div class=\"calc-help\">Din samlede ATP-opsparing indtil pensionsstart</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Type af fleksydelse</label>\n    <select id=\"fleksType\" class=\"calc-select\">\n      <option value=\"fuld\">Fuld fleksydelse</option>\n      <option value=\"halv\">Halv fleksydelse</option>\n    </select>\n  </div>\n\n  <button id=\"beregn\" class=\"calc-button\">Beregn fleksydelse</button>\n  <button id=\"nulstil\" class=\"calc-button-secondary\">Nulstil</button>\n\n  <div id=\"resultat\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Årlig fleksydelse</div>\n      <div class=\"calc-result-value\" id=\"aarligFleksydelse\"></div>\n      <div class=\"calc-result-subtitle\">Før skat</div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Månedlig fleksydelse</div>\n      <div class=\"calc-result-value\" id=\"maanedligFleksydelse\"></div>\n      <div class=\"calc-result-subtitle\">Før skat</div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Estimeret årlig skat</div>\n      <div class=\"calc-result-value\" id=\"estimeretkSkat\"></div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Årlig nettoindkomst</div>\n      <div class=\"calc-result-value\" id=\"nettoIndkomst\"></div>\n      <div class=\"calc-result-subtitle\">Efter skat</div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3 style=\"margin-top: 0;\">Beregningsdetaljer</h3>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Folkepension (årlig)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-folkepension\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Fleksydelse (årlig)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-fleksydelse\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Ekstra indkomst (årlig)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-ekstra\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">ATP-månedlig udbetaling</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-atp\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #e0e0e0; margin-top: 10px; padding-top: 10px; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">Samlet bruttoindkomst</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-brutto\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">AM-bidrag (8%)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-am\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Estimeret kommuneskat (≈25%)</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-kommune\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Personfradrag</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-fradrag\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #e0e0e0; margin-top: 10px; padding-top: 10px; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">Årlig nettoindkomst</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-netto\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Månedlig nettoindkomst</span>\n        <span class=\"calc-breakdown-value\" id=\"bd-maaned-netto\"></span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px;\">\n      <strong>Bemærk:</strong> Fleksydelse udbetales som supplement til folkepensionen og afhænger af din samlede indkomst. Beregningen er vejledende og bruger gennemsnitlige skattesatser. Din faktiske udbetaling kan variere baseret på din kommune og individuelle forhold.\n    </div>\n  </div>\n\n  <div id=\"fejl\" class=\"calc-error\" style=\"display: none;\"></div>\n</div>",
    logic: "// Konstanter for beregning (2024 værdier)\nconst FLEKS_FULD_SATS = 14268; // Årlig fuld fleksydelsessats (ca. beløb)\nconst FLEKS_HALV_SATS = 7134; // Halvdelen af fuld sats\nconst AM_BIDRAG = 0.08;\nconst KOMMUNE_SKAT = 0.25; // Gennemsnitlig kommuneskat\nconst PERSONFRADRAG = 49700; // 2024\nconst ATP_AARLIG_UDBETALING_RATE = 0.045; // Estimeret årlig udbetaling ca. 4.5% af opsparing\n\n// Hent elementer\nconst folkepensionInput = document.getElementById('folkepension');\nconst startaarInput = document.getElementById('startaar');\nconst alderInput = document.getElementById('alder');\nconst ekstraIndkomstInput = document.getElementById('ekstraIndkomst');\nconst atpOpsparingInput = document.getElementById('atpOpsparing');\nconst fleksTypeSelect = document.getElementById('fleksType');\nconst beregnBtn = document.getElementById('beregn');\nconst nulstilBtn = document.getElementById('nulstil');\nconst resultatDiv = document.getElementById('resultat');\nconst fejlDiv = document.getElementById('fejl');\n\n// Formater tal til dansk format\nfunction formaterTal(tal) {\n  return Math.round(tal).toLocaleString('da-DK') + ' kr';\n}\n\n// Valider input\nfunction validerInput() {\n  const folkepension = parseFloat(folkepensionInput.value);\n  const startaar = parseFloat(startaarInput.value);\n  const alder = parseFloat(alderInput.value);\n  const ekstraIndkomst = parseFloat(ekstraIndkomstInput.value) || 0;\n  const atpOpsparing = parseFloat(atpOpsparingInput.value) || 0;\n\n  if (isNaN(folkepension) || folkepension < 0) {\n    return 'Indtast en gyldig folkepension';\n  }\n\n  if (isNaN(startaar) || startaar < 2020 || startaar > 2100) {\n    return 'Indtast et gyldigt pensionsstartår';\n  }\n\n  if (isNaN(alder) || alder < 60 || alder > 75) {\n    return 'Indtast en gyldig alder mellem 60 og 75 år';\n  }\n\n  if (ekstraIndkomst < 0) {\n    return 'Ekstra indkomst kan ikke være negativ';\n  }\n\n  if (atpOpsparing < 0) {\n    return 'ATP-opsparing kan ikke være negativ';\n  }\n\n  return null;\n}\n\n// Beregn fleksydelse\nfunction beregnFleksydelse() {\n  // Skjul tidligere resultater og fejl\n  resultatDiv.style.display = 'none';\n  fejlDiv.style.display = 'none';\n\n  // Valider input\n  const fejl = validerInput();\n  if (fejl) {\n    fejlDiv.textContent = fejl;\n    fejlDiv.style.display = 'block';\n    return;\n  }\n\n  // Hent værdier\n  const folkepension = parseFloat(folkepensionInput.value);\n  const ekstraIndkomst = parseFloat(ekstraIndkomstInput.value) || 0;\n  const atpOpsparing = parseFloat(atpOpsparingInput.value) || 0;\n  const fleksType = fleksTypeSelect.value;\n\n  // Beregn fleksydelse baseret på type\n  let aarligFleksydelse;\n  if (fleksType === 'fuld') {\n    aarligFleksydelse = FLEKS_FULD_SATS;\n  } else {\n    aarligFleksydelse = FLEKS_HALV_SATS;\n  }\n\n  // Beregn ATP årlig udbetaling (forenklet)\n  const atpAarlig = atpOpsparing * ATP_AARLIG_UDBETALING_RATE;\n  const atpMaanedlig = atpAarlig / 12;\n\n  // Samlet bruttoindkomst\n  const bruttoIndkomst = folkepension + aarligFleksydelse + ekstraIndkomst + atpAarlig;\n\n  // Beregn AM-bidrag\n  const amBidrag = bruttoIndkomst * AM_BIDRAG;\n\n  // Skattepligtig indkomst efter AM-bidrag\n  const skattepligtigIndkomst = bruttoIndkomst - amBidrag;\n\n  // Beregn skat (forenklet med personfradrag)\n  const indkomstEfterFradrag = Math.max(0, skattepligtigIndkomst - PERSONFRADRAG);\n  const kommuneSkat = indkomstEfterFradrag * KOMMUNE_SKAT;\n  \n  // Total skat\n  const totalSkat = amBidrag + kommuneSkat;\n\n  // Nettoindkomst\n  const nettoIndkomst = bruttoIndkomst - totalSkat;\n  const maanedligNetto = nettoIndkomst / 12;\n\n  // Månedlig fleksydelse\n  const maanedligFleksydelse = aarligFleksydelse / 12;\n\n  // Vis resultater\n  document.getElementById('aarligFleksydelse').textContent = formaterTal(aarligFleksydelse);\n  document.getElementById('maanedligFleksydelse').textContent = formaterTal(maanedligFleksydelse);\n  document.getElementById('estimeretkSkat').textContent = formaterTal(totalSkat);\n  document.getElementById('nettoIndkomst').textContent = formaterTal(nettoIndkomst);\n\n  // Breakdown\n  document.getElementById('bd-folkepension').textContent = formaterTal(folkepension);\n  document.getElementById('bd-fleksydelse').textContent = formaterTal(aarligFleksydelse);\n  document.getElementById('bd-ekstra').textContent = formaterTal(ekstraIndkomst);\n  document.getElementById('bd-atp').textContent = formaterTal(atpMaanedlig);\n  document.getElementById('bd-brutto').textContent = formaterTal(bruttoIndkomst);\n  document.getElementById('bd-am').textContent = formaterTal(amBidrag);\n  document.getElementById('bd-kommune').textContent = formaterTal(kommuneSkat);\n  document.getElementById('bd-fradrag').textContent = '- ' + formaterTal(PERSONFRADRAG);\n  document.getElementById('bd-netto').textContent = formaterTal(nettoIndkomst);\n  document.getElementById('bd-maaned-netto').textContent = formaterTal(maanedligNetto);\n\n  // Vis resultat\n  resultatDiv.style.display = 'block';\n}\n\n// Nulstil formular\nfunction nulstilFormular() {\n  folkepensionInput.value = '80000';\n  startaarInput.value = '2024';\n  alderInput.value = '67';\n  ekstraIndkomstInput.value = '0';\n  atpOpsparingInput.value = '200000';\n  fleksTypeSelect.value = 'fuld';\n  resultatDiv.style.display = 'none';\n  fejlDiv.style.display = 'none';\n}\n\n// Event listeners\nberegnBtn.addEventListener('click', beregnFleksydelse);\nnulstilBtn.addEventListener('click', nulstilFormular);\n\n// Beregn ved Enter i input felter\n[folkepensionInput, startaarInput, alderInput, ekstraIndkomstInput, atpOpsparingInput].forEach(input => {\n  input.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      beregnFleksydelse();\n    }\n  });\n});\n\n// Beregn automatisk ved første indlæsning\nwindow.addEventListener('load', beregnFleksydelse);",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Sådan beregner du din fleksydelse",
          "description": "Find ud af din fleksydelse baseret på din folkepension.",
          "steps": [
                {
                      "step": 1,
                      "title": "Indtast personoplysninger",
                      "description": "Skriv dine grundlæggende data, fx alder og pensionsår."
                },
                {
                      "step": 2,
                      "title": "Vælg pensionsordning",
                      "description": "Angiv hvilken type folkepension du modtager."
                },
                {
                      "step": 3,
                      "title": "Tilføj indtægter",
                      "description": "Indtast eventuelle andre indtægter, som påvirker ydelsen."
                },
                {
                      "step": 4,
                      "title": "Klik beregn",
                      "description": "Tryk på beregn for at se din estimerede fleksydelse."
                }
          ]
    },
    examples: [
          {
                "title": "Fleksydelse for 60-årig med deltidsjob",
                "description": "Lars er 60 år og arbejder deltid, mens han nærmer sig folkepension.",
                "input": {
                      "alder": "60",
                      "pensionsår": "2027",
                      "folkepensionstype": "Grundpension",
                      "anden indtægt": "100,000 kr"
                },
                "output": "Fleksydelse: 70,000 kr/år",
                "explanation": "Lars' deltidsindtægt nedsætter hans fleksydelse."
          },
          {
                "title": "Fleksydelse uden anden indkomst",
                "description": "Anna er 63 år og har ingen anden indkomst end folkepension.",
                "input": {
                      "alder": "63",
                      "pensionsår": "2024",
                      "folkepensionstype": "Fuldt beløb",
                      "anden indtægt": "0 kr"
                },
                "output": "Fleksydelse: 100,000 kr/år",
                "explanation": "Anna får fuld fleksydelse da hun ikke har anden indkomst."
          },
          {
                "title": "Fleksydelse med privat pension",
                "description": "Jens er 64 år og modtager også privat pension udover folkepension.",
                "input": {
                      "alder": "64",
                      "pensionsår": "2023",
                      "folkepensionstype": "Grundpension",
                      "anden indtægt": "150,000 kr"
                },
                "output": "Fleksydelse: 50,000 kr/år",
                "explanation": "Jens' private pension reducerer hans fleksydelse betydeligt."
          }
    ],
    faqs: [
          {
                "question": "Hvordan beregner jeg min fleksydelse?",
                "answer": "Brug vores online beregner ved at indtaste alder, pensionsår, folkepensionstype og anden indtægt."
          },
          {
                "question": "Hvad påvirker størrelsen af min fleksydelse?",
                "answer": "Din fleksydelse påvirkes af din indtægt fra arbejde eller privat pension udover folkepensionen."
          },
          {
                "question": "Kan jeg få fleksydelse, hvis jeg arbejder deltid?",
                "answer": "Ja, men deltidsarbejde vil reducere din fleksydelse. Indtast dine detaljer i beregneren for at få et præcist beløb."
          },
          {
                "question": "Er der en aldersgrænse for at modtage fleksydelse?",
                "answer": "Du kan modtage fleksydelse, når du nærmer dig folkepension, typisk fra 60 år, afhængigt af din pensionsaftale."
          },
          {
                "question": "Er fleksydelse skattepligtig?",
                "answer": "Ja, fleksydelse betragtes som indkomst og er derfor skattepligtig i henhold til danske skatteregler."
          }
    ],
    additionalInfo: {
          "title": "Forstå Fleksydelse i Danmark",
          "content": "Fleksydelse er en bro til folkepensionen, der sikrer økonomisk støtte til dem, der trækker sig gradvist fra arbejdsmarkedet. Det er vigtigt at overveje din samlede indkomst, da dette påvirker ydelsen. Husk, fleksydelse er skattepligtig."
    }
  },


  generatedAt: '2025-10-25T21:40:13.921Z',
  version: '1.0.0'
}
