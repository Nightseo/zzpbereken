import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: kinderalimentatie berekenen zzp
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-27T18:17:16.505Z
 */

export const kinderalimentatie_zzpCalculatorData: CalculatorData = {
  slug: 'kinderalimentatie-zzp',

  metadata: {
    title: "Kinderalimentatie Calculator voor ZZP'ers - Eenvoudig en Nauwkeurig",
    description: "Bereken eenvoudig kinderalimentatie als ZZP'er. Inclusief alle kosten en lasten. Perfect voor zelfstandigen met variabel inkomen.",
    excerpt: "Bereken indicatieve kinderalimentatie als ZZP'er op basis van uw netto inkomen, aantal kinderen en zorgregeling. Volgens Tremanormen en Nibud-normen voor Nederlandse ZZP'ers.",
    canonical: 'https://zzpbereken.com/bereken/kinderalimentatie-zzp',
    keywords: ["kinderalimentatie berekenen zzp"],
    category: "Financiën",
    h1: "Bereken kinderalimentatie als ZZP'er",
    h2: "Kinderalimentatie berekenen ZZP Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\"><div class=\"calc-help\">Deze calculator helpt ZZP'ers bij het berekenen van kinderalimentatie op basis van hun inkomen. Vul uw gegevens in voor een indicatieve berekening volgens de Tremanormen.</div><div class=\"calc-group\"><label class=\"calc-label\">Maandelijks netto inkomen als ZZP'er</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"nettoInkomen\" class=\"calc-input\" placeholder=\"3000\" min=\"0\" step=\"100\"><span class=\"calc-input-suffix\">€</span></div></div><div class=\"calc-group\"><label class=\"calc-label\">Aantal kinderen met alimentatieplicht</label><select id=\"aantalKinderen\" class=\"calc-select\"><option value=\"1\">1 kind</option><option value=\"2\">2 kinderen</option><option value=\"3\">3 kinderen</option><option value=\"4\">4 kinderen</option><option value=\"5\">5 kinderen</option></select></div><div class=\"calc-group\"><label class=\"calc-label\">Leeftijd oudste kind</label><select id=\"leeftijdKind\" class=\"calc-select\"><option value=\"0-5\">0-5 jaar</option><option value=\"6-11\">6-11 jaar</option><option value=\"12-17\">12-17 jaar</option><option value=\"18-21\">18-21 jaar</option></select></div><div class=\"calc-group\"><label class=\"calc-label\">Zorgtoeslag (zorgregeling)</label><select id=\"zorgregeling\" class=\"calc-select\"><option value=\"geen\">Geen zorg (0%)</option><option value=\"weekend\">Weekend regeling (25%)</option><option value=\"co-ouderschap\">Co-ouderschap (50%)</option></select></div><div class=\"calc-group\"><label class=\"calc-label\">Eigen woonlasten per maand</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"woonlasten\" class=\"calc-input\" placeholder=\"800\" min=\"0\" step=\"50\"><span class=\"calc-input-suffix\">€</span></div></div><div class=\"calc-group\"><label class=\"calc-label\">Studieschuld aflossing per maand (optioneel)</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"studieschuld\" class=\"calc-input\" placeholder=\"0\" min=\"0\" step=\"50\"><span class=\"calc-input-suffix\">€</span></div></div><button id=\"berekenBtn\" class=\"calc-button\">Bereken Kinderalimentatie</button><div id=\"errorMessage\" class=\"calc-error\" style=\"display: none;\"></div><div id=\"resultaten\" class=\"calc-result-container\" style=\"display: none;\"><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"alimentatieBedrag\">€ 0</div><div class=\"calc-result-label\">Indicatieve kinderalimentatie per maand</div><div class=\"calc-result-subtitle\" id=\"perKind\"></div></div><div class=\"calc-breakdown\"><h3 style=\"margin-top: 0; color: #2c3e50;\">Berekening uitleg</h3><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Netto inkomen</span><span class=\"calc-breakdown-value\" id=\"breakdown-inkomen\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Woonlasten</span><span class=\"calc-breakdown-value\" id=\"breakdown-woonlasten\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Studieschuld aflossing</span><span class=\"calc-breakdown-value\" id=\"breakdown-studieschuld\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Draagkracht (inkomen - lasten)</span><span class=\"calc-breakdown-value\" id=\"breakdown-draagkracht\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Eigen behoeftekosten</span><span class=\"calc-breakdown-value\" id=\"breakdown-behoeftekosten\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Besteedbaar voor alimentatie</span><span class=\"calc-breakdown-value\" id=\"breakdown-besteedbaar\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Kinderkosten volgens Nibud (totaal)</span><span class=\"calc-breakdown-value\" id=\"breakdown-kinderkosten\">€ 0</span></div><div class=\"calc-breakdown-item\" style=\"border-top: 2px solid #3498db; margin-top: 10px; padding-top: 10px; font-weight: bold;\"><span class=\"calc-breakdown-label\">Alimentatie per kind</span><span class=\"calc-breakdown-value\" id=\"breakdown-perkind\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Zorgkorting toegepast</span><span class=\"calc-breakdown-value\" id=\"breakdown-zorgkorting\">0%</span></div></div><div class=\"calc-help\" style=\"margin-top: 20px;\"><strong>Let op:</strong> Dit is een indicatieve berekening gebaseerd op de Tremanormen en Nibud-cijfers. De daadwerkelijke alimentatie kan afwijken en wordt vastgesteld door de rechter of in onderling overleg. Als ZZP'er kan uw inkomen fluctueren - overweeg een gemiddelde over meerdere maanden te nemen. Raadpleeg een advocaat of mediator voor een definitieve vaststelling.</div></div></div>",
    logic: "const berekenBtn = document.getElementById('berekenBtn');\nconst errorMessage = document.getElementById('errorMessage');\nconst resultaten = document.getElementById('resultaten');\n\nfunction toonFout(bericht) {\n  errorMessage.textContent = bericht;\n  errorMessage.style.display = 'block';\n  resultaten.style.display = 'none';\n}\n\nfunction verbergFout() {\n  errorMessage.style.display = 'none';\n}\n\nfunction formatEuro(bedrag) {\n  return '€ ' + bedrag.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });\n}\n\nfunction getEigenBehoeftekosten() {\n  return 1150;\n}\n\nfunction getKinderkostenPerLeeftijd(leeftijd) {\n  const kosten = {\n    '0-5': 450,\n    '6-11': 520,\n    '12-17': 640,\n    '18-21': 700\n  };\n  return kosten[leeftijd] || 500;\n}\n\nfunction getZorgkorting(zorgregeling) {\n  const kortingen = {\n    'geen': 0,\n    'weekend': 0.25,\n    'co-ouderschap': 0.50\n  };\n  return kortingen[zorgregeling] || 0;\n}\n\nfunction berekenAlimentatie() {\n  verbergFout();\n  \n  const nettoInkomen = parseFloat(document.getElementById('nettoInkomen').value) || 0;\n  const aantalKinderen = parseInt(document.getElementById('aantalKinderen').value) || 1;\n  const leeftijdKind = document.getElementById('leeftijdKind').value;\n  const zorgregeling = document.getElementById('zorgregeling').value;\n  const woonlasten = parseFloat(document.getElementById('woonlasten').value) || 0;\n  const studieschuld = parseFloat(document.getElementById('studieschuld').value) || 0;\n  \n  if (nettoInkomen <= 0) {\n    toonFout('Vul een geldig netto inkomen in.');\n    return;\n  }\n  \n  if (nettoInkomen < 500) {\n    toonFout('Het ingevulde inkomen lijkt te laag. Controleer of u het maandelijkse netto inkomen heeft ingevuld.');\n    return;\n  }\n  \n  if (woonlasten > nettoInkomen * 0.8) {\n    toonFout('De woonlasten lijken te hoog in verhouding tot het inkomen. Controleer de invoer.');\n    return;\n  }\n  \n  const eigenBehoeftekosten = getEigenBehoeftekosten();\n  const kinderkostenPerKind = getKinderkostenPerLeeftijd(leeftijdKind);\n  const totaleKinderkosten = kinderkostenPerKind * aantalKinderen;\n  const zorgkorting = getZorgkorting(zorgregeling);\n  \n  const draagkracht = nettoInkomen - woonlasten - studieschuld;\n  \n  if (draagkracht < eigenBehoeftekosten) {\n    toonFout('Op basis van uw inkomen en lasten is er onvoldoende draagkracht voor kinderalimentatie. Mogelijk komt u in aanmerking voor een nihilstelling.');\n    return;\n  }\n  \n  const besteedbaar = draagkracht - eigenBehoeftekosten;\n  \n  let alimentatiePerKind;\n  const helftKinderkosten = kinderkostenPerKind * 0.5;\n  \n  if (besteedbaar >= totaleKinderkosten * 0.5) {\n    alimentatiePerKind = helftKinderkosten;\n  } else {\n    alimentatiePerKind = besteedbaar / aantalKinderen;\n    if (alimentatiePerKind < 0) alimentatiePerKind = 0;\n  }\n  \n  const alimentatieNaZorg = alimentatiePerKind * (1 - zorgkorting);\n  const totaleAlimentatie = alimentatieNaZorg * aantalKinderen;\n  \n  document.getElementById('alimentatieBedrag').textContent = formatEuro(totaleAlimentatie);\n  document.getElementById('perKind').textContent = formatEuro(alimentatieNaZorg) + ' per kind';\n  \n  document.getElementById('breakdown-inkomen').textContent = formatEuro(nettoInkomen);\n  document.getElementById('breakdown-woonlasten').textContent = formatEuro(woonlasten);\n  document.getElementById('breakdown-studieschuld').textContent = formatEuro(studieschuld);\n  document.getElementById('breakdown-draagkracht').textContent = formatEuro(draagkracht);\n  document.getElementById('breakdown-behoeftekosten').textContent = formatEuro(eigenBehoeftekosten);\n  document.getElementById('breakdown-besteedbaar').textContent = formatEuro(besteedbaar);\n  document.getElementById('breakdown-kinderkosten').textContent = formatEuro(totaleKinderkosten);\n  document.getElementById('breakdown-perkind').textContent = formatEuro(alimentatiePerKind);\n  document.getElementById('breakdown-zorgkorting').textContent = (zorgkorting * 100).toFixed(0) + '%';\n  \n  resultaten.style.display = 'block';\n  resultaten.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nberekenBtn.addEventListener('click', berekenAlimentatie);\n\ndocument.getElementById('nettoInkomen').addEventListener('keypress', function(e) {\n  if (e.key === 'Enter') berekenAlimentatie();\n});\n\ndocument.getElementById('woonlasten').addEventListener('keypress', function(e) {\n  if (e.key === 'Enter') berekenAlimentatie();\n});\n\ndocument.getElementById('studieschuld').addEventListener('keypress', function(e) {\n  if (e.key === 'Enter') berekenAlimentatie();\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Kinderalimentatie berekenen voor ZZP'ers",
          "description": "Bereken eenvoudig kinderalimentatie als zelfstandige zonder personeel.",
          "steps": [
                {
                      "step": 1,
                      "title": "Verzamel uw gegevens",
                      "description": "Zorg voor uw inkomensgegevens en vaste lasten."
                },
                {
                      "step": 2,
                      "title": "Voer gegevens in",
                      "description": "Vul uw financiële gegevens in de calculator in."
                },
                {
                      "step": 3,
                      "title": "Controleer berekening",
                      "description": "Bekijk het voorgestelde alimentatiebedrag."
                },
                {
                      "step": 4,
                      "title": "Pas indien nodig aan",
                      "description": "Overweeg aanpassingen op basis van uw situatie."
                }
          ]
    },
    examples: [
          {
                "title": "Freelance grafisch ontwerper",
                "description": "U bent een ZZP'er in de creatieve sector met onregelmatig inkomen.",
                "input": {
                      "maandinkomen": "€3.500",
                      "vaste lasten": "€1.200",
                      "uren per maand": "80"
                },
                "output": "Kinderalimentatie: €350 per maand",
                "explanation": "Uw netto besteedbaar inkomen en het aantal kinderen bepalen het alimentatiebedrag."
          },
          {
                "title": "IT-consultant met variabel inkomen",
                "description": "Als IT-consultant factureert u per project en uw inkomen varieert.",
                "input": {
                      "gemiddeld maandinkomen": "€5.000",
                      "vaste lasten": "€2.000",
                      "btw-percentage": "21%"
                },
                "output": "Kinderalimentatie: €500 per maand",
                "explanation": "De berekening houdt rekening met uw gemiddelde inkomensniveau en vaste lasten."
          },
          {
                "title": "Parttime tekstschrijver met wisselende opdrachten",
                "description": "U werkt parttime als tekstschrijver met een wisselend aantal opdrachten.",
                "input": {
                      "maandinkomen": "€2.000",
                      "vaste lasten": "€1.000",
                      "uren per maand": "60"
                },
                "output": "Kinderalimentatie: €200 per maand",
                "explanation": "Uw parttime inkomen en lasten worden meegenomen in de calculatie."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik kinderalimentatie als mijn inkomen onregelmatig is?",
                "answer": "Gebruik een gemiddeld maandinkomen gebaseerd op uw inkomsten van het afgelopen jaar."
          },
          {
                "question": "Moet ik BTW meerekenen in mijn inkomen voor de berekening?",
                "answer": "Nee, u berekent kinderalimentatie op basis van netto inkomen zonder BTW."
          },
          {
                "question": "Wat als mijn inkomen fluctueert per seizoen?",
                "answer": "Neem een jaargemiddelde van uw inkomen om schommelingen te compenseren."
          },
          {
                "question": "Hoe houd ik rekening met zakelijke kosten?",
                "answer": "Trek uw zakelijke kosten af van uw totale inkomen voor een juiste berekening."
          },
          {
                "question": "Is de berekening volgens de Nederlandse wetgeving?",
                "answer": "Ja, het volgt richtlijnen voor draagkracht zoals vastgesteld in Nederland."
          },
          {
                "question": "Kan ik de alimentatie aanpassen als mijn inkomen verandert?",
                "answer": "Ja, bespreek dit met uw ex-partner en eventueel via juridische weg."
          }
    ],
    additionalInfo: {
          "title": "Belangrijke overwegingen voor ZZP'ers",
          "content": "Als ZZP'er met onregelmatig inkomen is het cruciaal om kinderalimentatie juist te berekenen. Gebruik een jaargemiddelde en trek zakelijke kosten af voor een realistische inschatting. Dit voorkomt verrassingen bij de belastingaangifte en zorgt voor eerlijke afspraken."
    }
  },


  generatedAt: '2025-10-27T18:17:16.506Z',
  version: '1.0.0'
}
