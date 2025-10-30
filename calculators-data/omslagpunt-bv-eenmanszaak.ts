import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: omslagpunt bv eenmanszaak berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:17:00.682Z
 */

export const omslagpunt_bv_eenmanszaak_CalculatorData: CalculatorData = {
  slug: 'omslagpunt-bv-eenmanszaak',

  metadata: {
    title: "Omslagpunt Calculator - BV of Eenmanszaak Berekenen",
    description: "Ontdek of een BV of eenmanszaak beter bij je past. Bereken je fiscale omslagpunt als ZZP'er en optimaliseer je belastingvoordeel.",
    excerpt: "Ontdek met deze calculator het omslagpunt tussen een BV en eenmanszaak. Bereken uw netto inkomen onder beide ondernemingsvormen en zie direct welke optie het meest voordelig is op basis van actuele belastingtarieven 2025.",
    canonical: 'https://zzpbereken.com/bereken/omslagpunt-bv-eenmanszaak',
    keywords: ["omslagpunt bv eenmanszaak berekenen"],
    category: "Ondernemingsvorm",
    h1: "Bereken Omslagpunt BV Eenmanszaak",
    h2: "Omslagpunt BV Eenmanszaak Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Jaarlijkse winst (voor belasting)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"jaarWinst\" class=\"calc-input\" placeholder=\"75000\" value=\"75000\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <p class=\"calc-help\">De verwachte winst van uw onderneming per jaar</p>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Verwachte vermogensopbouw in BV</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"vermogensopbouw\" class=\"calc-input\" placeholder=\"30000\" value=\"30000\">\n      <span class=\"calc-input-suffix\">€</span>\n    </div>\n    <p class=\"calc-help\">Hoeveel winst wilt u jaarlijks in de BV laten staan?</p>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Aftrekbare ondernemersregelingen</label>\n    <div style=\"margin-top: 8px;\">\n      <label style=\"display: flex; align-items: center; margin-bottom: 8px;\">\n        <input type=\"checkbox\" id=\"zelfstandigenaftrek\" checked style=\"margin-right: 8px;\">\n        <span>Zelfstandigenaftrek (€ 5.030)</span>\n      </label>\n      <label style=\"display: flex; align-items: center; margin-bottom: 8px;\">\n        <input type=\"checkbox\" id=\"mkbWinstvrijstelling\" checked style=\"margin-right: 8px;\">\n        <span>MKB-winstvrijstelling (14%)</span>\n      </label>\n      <label style=\"display: flex; align-items: center;\">\n        <input type=\"checkbox\" id=\"startersaftrek\" style=\"margin-right: 8px;\">\n        <span>Startersaftrek (€ 2.123)</span>\n      </label>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Heeft u een fiscaal partner?</label>\n    <select id=\"fiscaalPartner\" class=\"calc-select\">\n      <option value=\"nee\">Nee</option>\n      <option value=\"ja\">Ja, zonder inkomen</option>\n      <option value=\"ja-inkomen\">Ja, met eigen inkomen</option>\n    </select>\n    <p class=\"calc-help\">Partner zonder inkomen kan heffingskorting delen</p>\n  </div>\n\n  <button class=\"calc-button\" onclick=\"berekenOmslagpunt()\">Bereken omslagpunt</button>\n\n  <div id=\"resultContainer\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Advies ondernemingsvorm</div>\n      <div id=\"advies\" class=\"calc-result-value\"></div>\n      <div id=\"verschil\" class=\"calc-result-subtitle\"></div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3 style=\"margin: 0 0 16px 0; font-size: 18px; color: #1a202c;\">Vergelijking eenmanszaak vs BV</h3>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Eenmanszaak - Netto jaarinkomen</span>\n        <span id=\"nettoEenmanszaak\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Bruto winst</span>\n        <span id=\"brutWinstEZ\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Ondernemersaftrek</span>\n        <span id=\"aftrekEZ\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">MKB-winstvrijstelling</span>\n        <span id=\"mkbEZ\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Inkomstenbelasting</span>\n        <span id=\"belastingEZ\" class=\"calc-breakdown-value\"></span>\n      </div>\n\n      <div style=\"height: 16px;\"></div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">BV - Netto jaarinkomen</span>\n        <span id=\"nettoBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Bruto salaris (€ 56.000)</span>\n        <span id=\"brutoSalarisBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Loonheffing</span>\n        <span id=\"loonheffingBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Dividend (na VPB)</span>\n        <span id=\"dividendBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Dividendbelasting</span>\n        <span id=\"dividendbelastingBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\" style=\"padding-left: 20px;\">Vennootschapsbelasting</span>\n        <span id=\"vpbBV\" class=\"calc-breakdown-value\"></span>\n      </div>\n\n      <div style=\"height: 16px;\"></div>\n\n      <div class=\"calc-breakdown-item\" style=\"background: #f7fafc; padding: 12px; border-radius: 8px; font-weight: 600;\">\n        <span class=\"calc-breakdown-label\">Verschil in uw voordeel</span>\n        <span id=\"verschilDetail\" class=\"calc-breakdown-value\"></span>\n      </div>\n    </div>\n\n    <div class=\"calc-group\" style=\"margin-top: 24px; padding: 16px; background: #eef8ff; border-radius: 8px;\">\n      <h4 style=\"margin: 0 0 12px 0; color: #1a202c; font-size: 16px;\">💡 Belangrijk om te weten</h4>\n      <ul style=\"margin: 0; padding-left: 20px; color: #2d3748; line-height: 1.6;\">\n        <li>Het omslagpunt ligt doorgaans tussen € 60.000 - € 100.000 winst per jaar</li>\n        <li>Een BV biedt meer mogelijkheden voor vermogensopbouw en pensioenopbouw</li>\n        <li>Oprichtingskosten BV bedragen circa € 500 - € 1.500</li>\n        <li>Accountantskosten voor een BV zijn hoger (€ 2.000 - € 5.000 per jaar)</li>\n        <li>Bij een BV bent u verplicht dividend uit te keren voor minimaal € 45.000 salaris</li>\n        <li>Deze berekening is indicatief, raadpleeg altijd een belastingadviseur</li>\n      </ul>\n    </div>\n  </div>\n</div>",
    logic: "function berekenOmslagpunt() {\n  const jaarWinst = parseFloat(document.getElementById('jaarWinst').value) || 0;\n  const vermogensopbouw = parseFloat(document.getElementById('vermogensopbouw').value) || 0;\n  const zelfstandigenaftrek = document.getElementById('zelfstandigenaftrek').checked;\n  const mkbWinstvrijstelling = document.getElementById('mkbWinstvrijstelling').checked;\n  const startersaftrek = document.getElementById('startersaftrek').checked;\n  const fiscaalPartner = document.getElementById('fiscaalPartner').value;\n\n  if (jaarWinst <= 0) {\n    alert('Voer een geldige jaarlijkse winst in.');\n    return;\n  }\n\n  if (vermogensopbouw < 0 || vermogensopbouw > jaarWinst) {\n    alert('Vermogensopbouw moet tussen € 0 en de jaarlijkse winst liggen.');\n    return;\n  }\n\n  // EENMANSZAAK BEREKENING\n  let ondernemersaftrek = 0;\n  if (zelfstandigenaftrek) ondernemersaftrek += 5030;\n  if (startersaftrek) ondernemersaftrek += 2123;\n\n  let belastbaarInkomenEZ = jaarWinst - ondernemersaftrek;\n  \n  let mkbVrijstellingBedragEZ = 0;\n  if (mkbWinstvrijstelling) {\n    mkbVrijstellingBedragEZ = (jaarWinst - ondernemersaftrek) * 0.14;\n    belastbaarInkomenEZ = belastbaarInkomenEZ - mkbVrijstellingBedragEZ;\n  }\n\n  // Inkomstenbelasting 2025 tarieven (schijven)\n  let inkomstenbelastingEZ = berekenInkomstenbelasting(belastbaarInkomenEZ, fiscaalPartner);\n  let nettoEenmanszaak = jaarWinst - inkomstenbelastingEZ;\n\n  // BV BEREKENING\n  // Optimaal salaris circa € 56.000 (rondom gebruikelijk loon)\n  const brutoSalarisBV = Math.min(56000, jaarWinst);\n  const loonheffing = berekenLoonheffing(brutoSalarisBV, fiscaalPartner);\n  const nettoSalarisBV = brutoSalarisBV - loonheffing;\n\n  // Winst na salaris\n  const winstNaSalaris = jaarWinst - brutoSalarisBV;\n  \n  // Vennootschapsbelasting (VPB) 2025: 19% tot €200.000, 25,8% daarboven\n  let vpb = 0;\n  if (winstNaSalaris > 0) {\n    if (winstNaSalaris <= 200000) {\n      vpb = winstNaSalaris * 0.19;\n    } else {\n      vpb = 200000 * 0.19 + (winstNaSalaris - 200000) * 0.258;\n    }\n  }\n\n  const winstNaVPB = winstNaSalaris - vpb;\n\n  // Hoeveel blijft in BV en hoeveel als dividend?\n  const inBVBlijven = Math.min(vermogensopbouw, winstNaVPB);\n  const dividendVoorBelasting = winstNaVPB - inBVBlijven;\n\n  // Dividendbelasting 26,9% (2025)\n  const dividendbelasting = dividendVoorBelasting * 0.269;\n  const nettoDividend = dividendVoorBelasting - dividendbelasting;\n\n  const nettoBV = nettoSalarisBV + nettoDividend;\n\n  // RESULTATEN TONEN\n  const verschil = nettoBV - nettoEenmanszaak;\n  const resultContainer = document.getElementById('resultContainer');\n  resultContainer.style.display = 'block';\n\n  const adviesEl = document.getElementById('advies');\n  const verschilEl = document.getElementById('verschil');\n\n  if (verschil > 2000) {\n    adviesEl.innerHTML = '🏢 BV is voordeliger';\n    adviesEl.style.color = '#059669';\n    verschilEl.textContent = `U houdt € ${formatNumber(Math.abs(verschil))} meer over met een BV`;\n  } else if (verschil < -2000) {\n    adviesEl.innerHTML = '👤 Eenmanszaak is voordeliger';\n    adviesEl.style.color = '#2563eb';\n    verschilEl.textContent = `U houdt € ${formatNumber(Math.abs(verschil))} meer over als eenmanszaak`;\n  } else {\n    adviesEl.innerHTML = '⚖️ Ongeveer gelijkwaardig';\n    adviesEl.style.color = '#7c3aed';\n    verschilEl.textContent = 'Het verschil is minimaal, overweeg andere factoren';\n  }\n\n  // Breakdown vullen\n  document.getElementById('nettoEenmanszaak').textContent = '€ ' + formatNumber(nettoEenmanszaak);\n  document.getElementById('brutWinstEZ').textContent = '€ ' + formatNumber(jaarWinst);\n  document.getElementById('aftrekEZ').textContent = '- € ' + formatNumber(ondernemersaftrek);\n  document.getElementById('mkbEZ').textContent = '- € ' + formatNumber(mkbVrijstellingBedragEZ);\n  document.getElementById('belastingEZ').textContent = '- € ' + formatNumber(inkomstenbelastingEZ);\n\n  document.getElementById('nettoBV').textContent = '€ ' + formatNumber(nettoBV);\n  document.getElementById('brutoSalarisBV').textContent = '€ ' + formatNumber(brutoSalarisBV);\n  document.getElementById('loonheffingBV').textContent = '- € ' + formatNumber(loonheffing);\n  document.getElementById('dividendBV').textContent = '€ ' + formatNumber(nettoDividend);\n  document.getElementById('dividendbelastingBV').textContent = '- € ' + formatNumber(dividendbelasting);\n  document.getElementById('vpbBV').textContent = '- € ' + formatNumber(vpb);\n\n  const verschilDetailEl = document.getElementById('verschilDetail');\n  if (verschil > 0) {\n    verschilDetailEl.textContent = '+ € ' + formatNumber(Math.abs(verschil));\n    verschilDetailEl.style.color = '#059669';\n  } else {\n    verschilDetailEl.textContent = '- € ' + formatNumber(Math.abs(verschil));\n    verschilDetailEl.style.color = '#dc2626';\n  }\n\n  // Scroll naar resultaat\n  resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });\n}\n\nfunction berekenInkomstenbelasting(belastbaarInkomen, fiscaalPartner) {\n  // Inkomstenbelasting 2025 tarieven box 1\n  // Schijf 1: € 0 - € 38.098: 36,97%\n  // Schijf 2: € 38.098 - € 75.624: 36,97%\n  // Schijf 3: € 75.624 en hoger: 49,50%\n\n  let belasting = 0;\n  \n  if (belastbaarInkomen <= 38098) {\n    belasting = belastbaarInkomen * 0.3697;\n  } else if (belastbaarInkomen <= 75624) {\n    belasting = 38098 * 0.3697 + (belastbaarInkomen - 38098) * 0.3697;\n  } else {\n    belasting = 38098 * 0.3697 + (75624 - 38098) * 0.3697 + (belastbaarInkomen - 75624) * 0.4950;\n  }\n\n  // Algemene heffingskorting 2025 (afhankelijk van inkomen)\n  let heffingskorting = 3362;\n  \n  if (belastbaarInkomen > 24815) {\n    const afbouw = (belastbaarInkomen - 24815) * 0.06395;\n    heffingskorting = Math.max(0, heffingskorting - afbouw);\n  }\n\n  // Arbeidskorting 2025\n  let arbeidskorting = 0;\n  if (belastbaarInkomen > 11491) {\n    if (belastbaarInkomen <= 24821) {\n      arbeidskorting = 213 + (belastbaarInkomen - 11491) * 0.3262;\n    } else if (belastbaarInkomen <= 39954) {\n      arbeidskorting = 4560;\n    } else if (belastbaarInkomen <= 124935) {\n      arbeidskorting = Math.max(0, 4560 - (belastbaarInkomen - 39954) * 0.0536);\n    }\n  }\n\n  // Extra heffingskorting bij partner zonder inkomen\n  if (fiscaalPartner === 'ja') {\n    heffingskorting += 554;\n  }\n\n  const totaleKorting = heffingskorting + arbeidskorting;\n  belasting = Math.max(0, belasting - totaleKorting);\n\n  return belasting;\n}\n\nfunction berekenLoonheffing(brutoSalaris, fiscaalPartner) {\n  // Loonheffing 2025 (vereenvoudigd, inclusief premies)\n  // Gebruiken we gemiddeld tarief van ongeveer 37-40% afhankelijk van schijven\n  \n  let loonheffing = 0;\n  \n  if (brutoSalaris <= 38098) {\n    loonheffing = brutoSalaris * 0.3697;\n  } else if (brutoSalaris <= 75624) {\n    loonheffing = 38098 * 0.3697 + (brutoSalaris - 38098) * 0.3697;\n  } else {\n    loonheffing = 38098 * 0.3697 + (75624 - 38098) * 0.3697 + (brutoSalaris - 75624) * 0.4950;\n  }\n\n  // Heffingskortingen\n  let heffingskorting = 3362;\n  if (brutoSalaris > 24815) {\n    const afbouw = (brutoSalaris - 24815) * 0.06395;\n    heffingskorting = Math.max(0, heffingskorting - afbouw);\n  }\n\n  let arbeidskorting = 0;\n  if (brutoSalaris > 11491) {\n    if (brutoSalaris <= 24821) {\n      arbeidskorting = 213 + (brutoSalaris - 11491) * 0.3262;\n    } else if (brutoSalaris <= 39954) {\n      arbeidskorting = 4560;\n    } else if (brutoSalaris <= 124935) {\n      arbeidskorting = Math.max(0, 4560 - (brutoSalaris - 39954) * 0.0536);\n    }\n  }\n\n  if (fiscaalPartner === 'ja') {\n    heffingskorting += 554;\n  }\n\n  const totaleKorting = heffingskorting + arbeidskorting;\n  loonheffing = Math.max(0, loonheffing - totaleKorting);\n\n  return loonheffing;\n}\n\nfunction formatNumber(num) {\n  return Math.round(num).toLocaleString('nl-NL');\n}\n\n// Auto-berekening bij laden\nwindow.addEventListener('DOMContentLoaded', function() {\n  berekenOmslagpunt();\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Omslagpunt Berekenen: BV vs. Eenmanszaak",
          "description": "Gebruik deze tool om te bepalen of een BV of eenmanszaak voordeliger voor u is.",
          "steps": [
                {
                      "step": 1,
                      "title": "Vul uw gegevens in",
                      "description": "Voer uw jaaromzet, kosten en winst in de calculator in."
                },
                {
                      "step": 2,
                      "title": "Selecteer uw opties",
                      "description": "Kies belastingvoordelen en aftrekposten die op u van toepassing zijn."
                },
                {
                      "step": 3,
                      "title": "Vergelijk de resultaten",
                      "description": "Bekijk de uitkomst voor zowel de BV als de eenmanszaak."
                },
                {
                      "step": 4,
                      "title": "Analyseer en beslis",
                      "description": "Beslis welke ondernemingsvorm het beste bij uw situatie past."
                }
          ]
    },
    examples: [
          {
                "title": "Grafisch ontwerper met groeiende omzet",
                "description": "Een grafisch ontwerper overweegt de overstap naar een BV vanwege stijgende inkomens.",
                "input": {
                      "jaaromzet": "€120.000",
                      "kosten": "€30.000",
                      "winst": "€90.000",
                      "aftrekposten": [
                            "zelfstandigenaftrek",
                            "MKB-winstvrijstelling"
                      ]
                },
                "output": "Bij een winst boven €80.000 kan een BV voordeliger zijn.",
                "explanation": "De belastingdruk is bij een hogere winst gunstiger in een BV door lagere vennootschapsbelasting."
          },
          {
                "title": "IT-consultant met hoge kosten",
                "description": "Een IT-consultant met aanzienlijke zakelijke kosten onderzoekt welke structuur financieel voordeliger is.",
                "input": {
                      "jaaromzet": "€200.000",
                      "kosten": "€100.000",
                      "winst": "€100.000",
                      "aftrekposten": [
                            "werkruimte thuis",
                            "innovatiebox"
                      ]
                },
                "output": "Bij een winst boven €90.000 kan een BV fiscaal aantrekkelijker zijn.",
                "explanation": "Ondanks hoge kosten kan de lagere belastingdruk in een BV gunstiger zijn."
          },
          {
                "title": "Fotograaf met variabele inkomsten",
                "description": "Een fotograaf met wisselende jaaromzet bekijkt of een BV zinvol is.",
                "input": {
                      "jaaromzet": "€80.000",
                      "kosten": "€20.000",
                      "winst": "€60.000",
                      "aftrekposten": [
                            "kleineondernemersregeling"
                      ]
                },
                "output": "Onder de €70.000 winst blijft een eenmanszaak voordeliger.",
                "explanation": "De flexibiliteit en belastingvoordelen voor kleine ondernemers zijn voordeliger bij lagere winsten."
          }
    ],
    faqs: [
          {
                "question": "Hoe weet ik of een BV voordeliger is dan een eenmanszaak?",
                "answer": "Vergelijk de belastingdruk en aftrekposten via onze tool om het omslagpunt te berekenen."
          },
          {
                "question": "Welke gegevens heb ik nodig om het omslagpunt te berekenen?",
                "answer": "Uw jaaromzet, zakelijke kosten en aftrekposten zijn essentieel voor een nauwkeurige berekening."
          },
          {
                "question": "Wat zijn de voordelen van een BV boven een eenmanszaak?",
                "answer": "Een BV biedt vaak voordelen bij hogere winsten door lagere vennootschapsbelasting."
          },
          {
                "question": "Zijn er specifieke regels voor ZZP'ers bij het kiezen tussen BV en eenmanszaak?",
                "answer": "Ja, bijvoorbeeld de zelfstandigenaftrek en MKB-winstvrijstelling zijn relevant voor eenmanszaken."
          },
          {
                "question": "Hoe beïnvloeden aftrekposten het omslagpunt?",
                "answer": "Aftrekposten kunnen de belastingdruk verlagen, wat invloed heeft op het omslagpunt."
          },
          {
                "question": "Kan ik later van eenmanszaak naar BV overstappen?",
                "answer": "Ja, u kunt overstappen, maar het is belangrijk om de fiscale gevolgen goed te begrijpen."
          }
    ],
    additionalInfo: {
          "title": "Belang van Omslagpunt Berekening",
          "content": "Het omslagpunt tussen eenmanszaak en BV is cruciaal bij groeiende winst. Bij hogere winsten kan een BV fiscaal voordeliger zijn door lagere vennootschapsbelasting. Belangrijk om te anticiperen op uw toekomstige zakelijke behoeften en belastingvoordelen optimaal te benutten."
    }
  },


  generatedAt: '2025-10-30T15:17:00.683Z',
  version: '1.0.0'
}
