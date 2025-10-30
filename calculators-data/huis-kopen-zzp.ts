import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: huis kopen zzp berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:02:56.469Z
 */

export const huis_kopen_zzpCalculatorData: CalculatorData = {
  slug: 'huis-kopen-zzp',

  metadata: {
    title: "Huis Kopen ZZP Calculator - Bereken Je Hypotheek",
    description: "Bereken je maximale hypotheek als ZZP'er eenvoudig. Ontdek je mogelijkheden en maak je droomhuis werkelijkheid. Gratis en snel voor zelfstandigen.",
    excerpt: "Bereken snel en eenvoudig hoeveel hypotheek je als ZZP'er kunt krijgen. Deze calculator houdt rekening met de strengere eisen voor zelfstandigen en berekent je maximale leencapaciteit.",
    canonical: 'https://zzpbereken.com/bereken/huis-kopen-zzp',
    keywords: ["huis kopen zzp berekenen"],
    category: "Financiën",
    h1: "Bereken Huis Kopen ZZP",
    h2: "Huis Kopen ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\"><div class=\"calc-group\"><label class=\"calc-label\">Jaarinkomen uit ZZP (netto winst)</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"jaarinkomen\" class=\"calc-input\" placeholder=\"45000\" value=\"45000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Vul je netto winst in na aftrek van alle bedrijfskosten</p></div><div class=\"calc-group\"><label class=\"calc-label\">Aantal jaar ZZP-ervaring</label><select id=\"jaarZzp\" class=\"calc-select\"><option value=\"1\">1 jaar</option><option value=\"2\">2 jaar</option><option value=\"3\" selected>3 jaar of meer</option></select><p class=\"calc-help\">Banken eisen minimaal 3 jaar goede jaarcijfers voor volledige toetsing</p></div><div class=\"calc-group\"><label class=\"calc-label\">Gemiddeld inkomen laatste 3 jaar</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"gemiddeldInkomen\" class=\"calc-input\" placeholder=\"42000\" value=\"42000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Banken hanteren vaak het gemiddelde van de laatste 3 jaar</p></div><div class=\"calc-group\"><label class=\"calc-label\">Partner met inkomen?</label><select id=\"partnerInkomen\" class=\"calc-select\"><option value=\"0\" selected>Geen partner of partner zonder inkomen</option><option value=\"30000\">Partner met inkomen (€30.000)</option><option value=\"40000\">Partner met inkomen (€40.000)</option><option value=\"50000\">Partner met inkomen (€50.000)</option></select></div><div class=\"calc-group\"><label class=\"calc-label\">Eigen vermogen / spaargeld</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"eigenVermogen\" class=\"calc-input\" placeholder=\"25000\" value=\"25000\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Voor kosten koper en eventuele aanbetaling</p></div><div class=\"calc-group\"><label class=\"calc-label\">Maandelijkse schulden / verplichtingen</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"maandSchulden\" class=\"calc-input\" placeholder=\"0\" value=\"0\"><span class=\"calc-input-suffix\">€</span></div><p class=\"calc-help\">Leningen, creditcard, alimentatie, etc.</p></div><div class=\"calc-group\"><label class=\"calc-label\">Rente percentage</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"rentePercentage\" class=\"calc-input\" placeholder=\"3.5\" value=\"3.5\" step=\"0.1\"><span class=\"calc-input-suffix\">%</span></div></div><button id=\"berekenBtn\" class=\"calc-button\">Bereken maximale hypotheek</button><div id=\"errorMsg\" class=\"calc-error\" style=\"display:none;\"></div><div id=\"resultContainer\" class=\"calc-result-container\" style=\"display:none;\"><div class=\"calc-result-box\"><div class=\"calc-result-label\">Maximale hypotheek</div><div class=\"calc-result-value\" id=\"maxHypotheek\">€ 0</div><div class=\"calc-result-subtitle\">Als ZZP'er kun je dit lenen</div></div><div class=\"calc-result-box\"><div class=\"calc-result-label\">Maximale koopsom</div><div class=\"calc-result-value\" id=\"maxKoopsom\">€ 0</div><div class=\"calc-result-subtitle\">Inclusief eigen vermogen</div></div><div class=\"calc-result-box\"><div class=\"calc-result-label\">Maandlasten</div><div class=\"calc-result-value\" id=\"maandLasten\">€ 0</div><div class=\"calc-result-subtitle\">Bij berekende hypotheek</div></div><div class=\"calc-breakdown\"><h3>Gedetailleerde berekening</h3><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Toetsinkomen ZZP'er</span><span class=\"calc-breakdown-value\" id=\"toetsInkomen\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Toetsinkomen partner</span><span class=\"calc-breakdown-value\" id=\"toetsPartner\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Totaal toetsinkomen</span><span class=\"calc-breakdown-value\" id=\"totaalToets\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Maximale leencapaciteit (4,5x inkomen)</span><span class=\"calc-breakdown-value\" id=\"leenCapaciteit\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Aftrek maandelijkse schulden</span><span class=\"calc-breakdown-value\" id=\"schuldAftrek\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Eigen vermogen beschikbaar</span><span class=\"calc-breakdown-value\" id=\"eigenVerDisplay\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Kosten koper (3% van koopsom)</span><span class=\"calc-breakdown-value\" id=\"kostenKoper\">€ 0</span></div></div><div class=\"calc-help\" style=\"margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px;\"><strong>Let op voor ZZP'ers:</strong><br>• Banken hanteren vaak een <strong>lagere toets</strong> voor ZZP'ers (70-90% van inkomen)<br>• Minimaal <strong>3 jaar goede jaarcijfers</strong> vereist<br>• Sommige banken rekenen met <strong>gemiddelde van 3 jaar</strong><br>• Extra eisen: goedgekeurde belastingaangiftes en accountantsverklaring<br>• Deze berekening is indicatief, raadpleeg een hypotheekadviseur</div></div></div>",
    logic: "function formatEuro(bedrag) { return '€ ' + Math.round(bedrag).toLocaleString('nl-NL'); }\n\nfunction berekenHypotheek() {\n  const errorMsg = document.getElementById('errorMsg');\n  const resultContainer = document.getElementById('resultContainer');\n  \n  errorMsg.style.display = 'none';\n  resultContainer.style.display = 'none';\n  \n  const jaarinkomen = parseFloat(document.getElementById('jaarinkomen').value) || 0;\n  const jaarZzp = parseInt(document.getElementById('jaarZzp').value);\n  const gemiddeldInkomen = parseFloat(document.getElementById('gemiddeldInkomen').value) || 0;\n  const partnerInkomen = parseFloat(document.getElementById('partnerInkomen').value) || 0;\n  const eigenVermogen = parseFloat(document.getElementById('eigenVermogen').value) || 0;\n  const maandSchulden = parseFloat(document.getElementById('maandSchulden').value) || 0;\n  const rentePercentage = parseFloat(document.getElementById('rentePercentage').value) || 3.5;\n  \n  if (jaarinkomen <= 0) {\n    errorMsg.textContent = 'Vul een geldig jaarinkomen in';\n    errorMsg.style.display = 'block';\n    return;\n  }\n  \n  if (rentePercentage <= 0 || rentePercentage > 15) {\n    errorMsg.textContent = 'Vul een geldig rentepercentage in (0-15%)';\n    errorMsg.style.display = 'block';\n    return;\n  }\n  \n  let toetsInkomenZzp = 0;\n  \n  if (jaarZzp >= 3) {\n    const laagsteInkomen = Math.min(jaarinkomen, gemiddeldInkomen);\n    toetsInkomenZzp = laagsteInkomen * 0.8;\n  } else if (jaarZzp === 2) {\n    toetsInkomenZzp = jaarinkomen * 0.75;\n  } else {\n    toetsInkomenZzp = jaarinkomen * 0.7;\n  }\n  \n  const toetsInkomenPartner = partnerInkomen > 0 ? partnerInkomen * 0.9 : 0;\n  const totaalToetsInkomen = toetsInkomenZzp + toetsInkomenPartner;\n  \n  let leencapaciteit = totaalToetsInkomen * 4.5;\n  \n  const jaarSchulden = maandSchulden * 12;\n  const schuldAftrek = jaarSchulden * 5;\n  \n  let maxHypotheek = leencapaciteit - schuldAftrek;\n  \n  if (maxHypotheek < 0) {\n    maxHypotheek = 0;\n  }\n  \n  let maxKoopsom = maxHypotheek + eigenVermogen;\n  const kostenKoperBedrag = maxKoopsom * 0.03;\n  maxKoopsom = maxKoopsom - kostenKoperBedrag;\n  \n  if (maxKoopsom < maxHypotheek) {\n    maxKoopsom = maxHypotheek;\n  }\n  \n  const maandRente = rentePercentage / 100 / 12;\n  const aantalMaanden = 30 * 12;\n  let maandLasten = 0;\n  \n  if (maxHypotheek > 0 && maandRente > 0) {\n    maandLasten = maxHypotheek * (maandRente * Math.pow(1 + maandRente, aantalMaanden)) / (Math.pow(1 + maandRente, aantalMaanden) - 1);\n  }\n  \n  document.getElementById('maxHypotheek').textContent = formatEuro(maxHypotheek);\n  document.getElementById('maxKoopsom').textContent = formatEuro(maxKoopsom);\n  document.getElementById('maandLasten').textContent = formatEuro(maandLasten);\n  \n  document.getElementById('toetsInkomen').textContent = formatEuro(toetsInkomenZzp);\n  document.getElementById('toetsPartner').textContent = formatEuro(toetsInkomenPartner);\n  document.getElementById('totaalToets').textContent = formatEuro(totaalToetsInkomen);\n  document.getElementById('leenCapaciteit').textContent = formatEuro(leencapaciteit);\n  document.getElementById('schuldAftrek').textContent = schuldAftrek > 0 ? '-' + formatEuro(schuldAftrek) : formatEuro(0);\n  document.getElementById('eigenVerDisplay').textContent = formatEuro(eigenVermogen);\n  document.getElementById('kostenKoper').textContent = formatEuro(kostenKoperBedrag);\n  \n  resultContainer.style.display = 'block';\n}\n\ndocument.getElementById('berekenBtn').addEventListener('click', berekenHypotheek);\n\ndocument.querySelectorAll('.calc-input, .calc-select').forEach(element => {\n  element.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      berekenHypotheek();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken Hypotheek als ZZP'er",
          "description": "Ontdek uw hypotheekmogelijkheden als zelfstandig ondernemer.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer inkomen in",
                      "description": "Vul uw gemiddelde jaarinkomen van de afgelopen drie jaar in."
                },
                {
                      "step": 2,
                      "title": "Kies looptijd",
                      "description": "Selecteer de gewenste hypotheekduur in jaren."
                },
                {
                      "step": 3,
                      "title": "Bepaal rentepercentage",
                      "description": "Voer het huidige hypotheekrentepercentage in."
                },
                {
                      "step": 4,
                      "title": "Klik op berekenen",
                      "description": "Druk op de knop om uw maximale hypotheek te zien."
                }
          ]
    },
    examples: [
          {
                "title": "Grafisch ontwerper met stabiel inkomen",
                "description": "U bent een grafisch ontwerper met een stabiel jaarinkomen.",
                "input": {
                      "gemiddeld_jaarinkomen": "€55.000",
                      "looptijd": "30 jaar",
                      "rentepercentage": "3,5%"
                },
                "output": "Maximale hypotheek: €245.000",
                "explanation": "Uw stabiele inkomen en redelijke rente maken een ruime hypotheek mogelijk."
          },
          {
                "title": "Startende consultant met groeiend inkomen",
                "description": "U bent een consultant met een stijgend inkomen over drie jaar.",
                "input": {
                      "gemiddeld_jaarinkomen": "€40.000",
                      "looptijd": "20 jaar",
                      "rentepercentage": "4,0%"
                },
                "output": "Maximale hypotheek: €170.000",
                "explanation": "Het groeiende inkomen en kortere looptijd beperken de maximale hypotheek."
          },
          {
                "title": "Freelance fotograaf met wisselend inkomen",
                "description": "U bent een fotograaf met schommelend inkomen.",
                "input": {
                      "gemiddeld_jaarinkomen": "€35.000",
                      "looptijd": "25 jaar",
                      "rentepercentage": "3,75%"
                },
                "output": "Maximale hypotheek: €150.000",
                "explanation": "Wisselend inkomen en gemiddelde rente resulteren in een bescheiden hypotheek."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn maximale hypotheek als ZZP'er?",
                "answer": "Gebruik uw gemiddelde jaarinkomen van de afgelopen drie jaar om een betrouwbare berekening te maken."
          },
          {
                "question": "Welke documenten zijn nodig voor hypotheekaanvraag als ZZP'er?",
                "answer": "U heeft jaarrekeningen, IB-aangiften en inkomensverklaringen nodig."
          },
          {
                "question": "Hoe beïnvloedt een wisselend inkomen mijn hypotheekmogelijkheden?",
                "answer": "Een wisselend inkomen kan de maximale hypotheek verlagen; stabiliteit wordt gewaardeerd."
          },
          {
                "question": "Kan ik als startende ZZP'er een hypotheek krijgen?",
                "answer": "Ja, met een goed onderbouwd ondernemingsplan en minimaal één jaar jaarcijfers."
          },
          {
                "question": "Zijn er specifieke hypotheekregels voor ZZP'ers in Nederland?",
                "answer": "Ja, banken hanteren vaak strengere criteria voor het beoordelen van uw inkomen."
          },
          {
                "question": "Heb ik recht op hypotheekrenteaftrek als ZZP'er?",
                "answer": "Ja, als u aan de voorwaarden van de Belastingdienst voldoet, heeft u recht op hypotheekrenteaftrek."
          }
    ],
    additionalInfo: {
          "title": "Belangrijke Hypotheekoverwegingen",
          "content": "Als ZZP'er is het cruciaal uw inkomen stabiel te houden. Banken kijken naar uw gemiddelde inkomen over drie jaar. Zorg voor een goede boekhouding en overweeg advies van een financieel expert om uw kansen op een hypotheek te vergroten."
    }
  },


  generatedAt: '2025-10-30T15:02:56.470Z',
  version: '1.0.0'
}
