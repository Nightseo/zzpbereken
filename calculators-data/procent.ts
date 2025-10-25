import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: beregn procent
 * Generado automáticamente con Claude API
 * Fecha: 2025-10-25T16:36:11.930Z
 */

export const procentCalculatorData: CalculatorData = {
  slug: 'procent',

  metadata: {
    title: "Beregn Procent med Vores Smarte Kalkulator",
    description: "Beregn procent hurtigt og nemt. Få præcise resultater nu!",
    excerpt: "Beregn procent nemt og hurtigt. Beregn procentdel, procentvis stigning, fald, forskel og meget mere med vores gratis procentberegner.",
    canonical: 'https://pengekalkulator.com/beregn/procent',
    keywords: ["beregn procent"],
    category: "Matematik",
    h1: "Beregn procent",
    h2: "Procent Kalkulator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Vælg beregningstype</label>\n    <select class=\"calc-select\" id=\"calcType\">\n      <option value=\"basic\">Hvad er X% af Y?</option>\n      <option value=\"percentage\">X er hvor mange % af Y?</option>\n      <option value=\"increase\">Procentvis stigning</option>\n      <option value=\"decrease\">Procentvis fald</option>\n      <option value=\"difference\">Procentforskel mellem to tal</option>\n      <option value=\"addPercent\">Læg procent til</option>\n      <option value=\"subtractPercent\">Træk procent fra</option>\n    </select>\n  </div>\n\n  <div id=\"basicCalc\" class=\"calc-type-section\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Procent (%)</label>\n      <input type=\"number\" class=\"calc-input\" id=\"basicPercent\" placeholder=\"Indtast procent\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"basicValue\" placeholder=\"Indtast værdi\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"percentageCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Tal (del)</label>\n      <input type=\"number\" class=\"calc-input\" id=\"partValue\" placeholder=\"Indtast del\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Af totalt (hele)</label>\n      <input type=\"number\" class=\"calc-input\" id=\"wholeValue\" placeholder=\"Indtast hele\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"increaseCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Oprindelig værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"increaseOld\" placeholder=\"Indtast oprindelig værdi\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Ny værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"increaseNew\" placeholder=\"Indtast ny værdi\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"decreaseCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Oprindelig værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"decreaseOld\" placeholder=\"Indtast oprindelig værdi\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Ny værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"decreaseNew\" placeholder=\"Indtast ny værdi\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"differenceCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Første værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"diffValue1\" placeholder=\"Indtast første værdi\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Anden værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"diffValue2\" placeholder=\"Indtast anden værdi\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"addPercentCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"addValue\" placeholder=\"Indtast værdi\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Procent at lægge til (%)</label>\n      <input type=\"number\" class=\"calc-input\" id=\"addPercent\" placeholder=\"Indtast procent\" step=\"0.01\">\n    </div>\n  </div>\n\n  <div id=\"subtractPercentCalc\" class=\"calc-type-section\" style=\"display:none;\">\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Værdi</label>\n      <input type=\"number\" class=\"calc-input\" id=\"subtractValue\" placeholder=\"Indtast værdi\" step=\"0.01\">\n    </div>\n    <div class=\"calc-group\">\n      <label class=\"calc-label\">Procent at trække fra (%)</label>\n      <input type=\"number\" class=\"calc-input\" id=\"subtractPercent\" placeholder=\"Indtast procent\" step=\"0.01\">\n    </div>\n  </div>\n\n  <button class=\"calc-button\" id=\"calculateBtn\">Beregn procent</button>\n  \n  <div class=\"calc-result-container\" id=\"resultContainer\" style=\"display:none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\" id=\"resultLabel\">Resultat</div>\n      <div class=\"calc-result-value\" id=\"resultValue\">0</div>\n      <div class=\"calc-result-subtitle\" id=\"resultSubtitle\"></div>\n    </div>\n    \n    <div class=\"calc-breakdown\" id=\"breakdown\">\n      <h3 style=\"margin-top:0;margin-bottom:15px;font-size:16px;color:#1e293b;\">Beregning</h3>\n      <div id=\"breakdownItems\"></div>\n    </div>\n  </div>\n\n  <div class=\"calc-help\">\n    <h3 style=\"margin-top:0;margin-bottom:10px;font-size:14px;\">💡 Hjælp til procentberegning</h3>\n    <p style=\"margin:5px 0;font-size:13px;\"><strong>Hvad er X% af Y?</strong> - Find et procentbeløb af en værdi (fx 25% af 800 kr)</p>\n    <p style=\"margin:5px 0;font-size:13px;\"><strong>X er hvor mange % af Y?</strong> - Find procentdel (fx 200 er hvor mange % af 800?)</p>\n    <p style=\"margin:5px 0;font-size:13px;\"><strong>Procentvis stigning/fald</strong> - Beregn ændring i procent mellem to værdier</p>\n    <p style=\"margin:5px 0;font-size:13px;\"><strong>Læg/træk procent</strong> - Beregn ny værdi efter tillæg eller fradrag (fx +25% moms)</p>\n  </div>\n</div>",
    logic: "// Get all elements\nconst calcType = document.getElementById('calcType');\nconst calculateBtn = document.getElementById('calculateBtn');\nconst resultContainer = document.getElementById('resultContainer');\nconst resultValue = document.getElementById('resultValue');\nconst resultLabel = document.getElementById('resultLabel');\nconst resultSubtitle = document.getElementById('resultSubtitle');\nconst breakdownItems = document.getElementById('breakdownItems');\n\n// All calculation type sections\nconst sections = {\n  basic: document.getElementById('basicCalc'),\n  percentage: document.getElementById('percentageCalc'),\n  increase: document.getElementById('increaseCalc'),\n  decrease: document.getElementById('decreaseCalc'),\n  difference: document.getElementById('differenceCalc'),\n  addPercent: document.getElementById('addPercentCalc'),\n  subtractPercent: document.getElementById('subtractPercentCalc')\n};\n\n// Format number in Danish format\nfunction formatNumber(num, decimals = 2) {\n  return num.toLocaleString('da-DK', {\n    minimumFractionDigits: decimals,\n    maximumFractionDigits: decimals\n  });\n}\n\n// Show only selected calculation type\nfunction showCalculationType(type) {\n  Object.keys(sections).forEach(key => {\n    sections[key].style.display = key === type ? 'block' : 'none';\n  });\n}\n\n// Switch calculation type\ncalcType.addEventListener('change', (e) => {\n  showCalculationType(e.target.value);\n  resultContainer.style.display = 'none';\n});\n\n// Add breakdown item\nfunction addBreakdownItem(label, value) {\n  const item = document.createElement('div');\n  item.className = 'calc-breakdown-item';\n  item.innerHTML = `\n    <span class=\"calc-breakdown-label\">${label}</span>\n    <span class=\"calc-breakdown-value\">${value}</span>\n  `;\n  breakdownItems.appendChild(item);\n}\n\n// Calculate based on type\nfunction calculate() {\n  const type = calcType.value;\n  breakdownItems.innerHTML = '';\n  \n  try {\n    switch(type) {\n      case 'basic':\n        calculateBasic();\n        break;\n      case 'percentage':\n        calculatePercentage();\n        break;\n      case 'increase':\n        calculateIncrease();\n        break;\n      case 'decrease':\n        calculateDecrease();\n        break;\n      case 'difference':\n        calculateDifference();\n        break;\n      case 'addPercent':\n        calculateAddPercent();\n        break;\n      case 'subtractPercent':\n        calculateSubtractPercent();\n        break;\n    }\n  } catch(error) {\n    alert(error.message);\n  }\n}\n\n// Basic: What is X% of Y?\nfunction calculateBasic() {\n  const percent = parseFloat(document.getElementById('basicPercent').value);\n  const value = parseFloat(document.getElementById('basicValue').value);\n  \n  if(isNaN(percent) || isNaN(value)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  const result = (percent / 100) * value;\n  \n  resultLabel.textContent = 'Resultat';\n  resultValue.textContent = formatNumber(result);\n  resultSubtitle.textContent = `${formatNumber(percent)}% af ${formatNumber(value)}`;\n  \n  addBreakdownItem('Procent', `${formatNumber(percent)}%`);\n  addBreakdownItem('Værdi', formatNumber(value));\n  addBreakdownItem('Formel', `(${formatNumber(percent)} ÷ 100) × ${formatNumber(value)}`);\n  addBreakdownItem('Resultat', formatNumber(result));\n  \n  resultContainer.style.display = 'block';\n}\n\n// X is what % of Y?\nfunction calculatePercentage() {\n  const part = parseFloat(document.getElementById('partValue').value);\n  const whole = parseFloat(document.getElementById('wholeValue').value);\n  \n  if(isNaN(part) || isNaN(whole)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  if(whole === 0) {\n    throw new Error('Totalen kan ikke være 0');\n  }\n  \n  const result = (part / whole) * 100;\n  \n  resultLabel.textContent = 'Procentdel';\n  resultValue.textContent = `${formatNumber(result)}%`;\n  resultSubtitle.textContent = `${formatNumber(part)} af ${formatNumber(whole)}`;\n  \n  addBreakdownItem('Del', formatNumber(part));\n  addBreakdownItem('Hele', formatNumber(whole));\n  addBreakdownItem('Formel', `(${formatNumber(part)} ÷ ${formatNumber(whole)}) × 100`);\n  addBreakdownItem('Resultat', `${formatNumber(result)}%`);\n  \n  resultContainer.style.display = 'block';\n}\n\n// Percentage increase\nfunction calculateIncrease() {\n  const oldValue = parseFloat(document.getElementById('increaseOld').value);\n  const newValue = parseFloat(document.getElementById('increaseNew').value);\n  \n  if(isNaN(oldValue) || isNaN(newValue)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  if(oldValue === 0) {\n    throw new Error('Oprindelig værdi kan ikke være 0');\n  }\n  \n  const increase = newValue - oldValue;\n  const percentIncrease = (increase / oldValue) * 100;\n  \n  resultLabel.textContent = 'Procentvis stigning';\n  resultValue.textContent = `${formatNumber(percentIncrease)}%`;\n  resultSubtitle.textContent = `Stigning på ${formatNumber(increase)}`;\n  \n  addBreakdownItem('Oprindelig værdi', formatNumber(oldValue));\n  addBreakdownItem('Ny værdi', formatNumber(newValue));\n  addBreakdownItem('Forskel', formatNumber(increase));\n  addBreakdownItem('Formel', `((${formatNumber(newValue)} - ${formatNumber(oldValue)}) ÷ ${formatNumber(oldValue)}) × 100`);\n  addBreakdownItem('Stigning', `${formatNumber(percentIncrease)}%`);\n  \n  resultContainer.style.display = 'block';\n}\n\n// Percentage decrease\nfunction calculateDecrease() {\n  const oldValue = parseFloat(document.getElementById('decreaseOld').value);\n  const newValue = parseFloat(document.getElementById('decreaseNew').value);\n  \n  if(isNaN(oldValue) || isNaN(newValue)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  if(oldValue === 0) {\n    throw new Error('Oprindelig værdi kan ikke være 0');\n  }\n  \n  const decrease = oldValue - newValue;\n  const percentDecrease = (decrease / oldValue) * 100;\n  \n  resultLabel.textContent = 'Procentvis fald';\n  resultValue.textContent = `${formatNumber(percentDecrease)}%`;\n  resultSubtitle.textContent = `Fald på ${formatNumber(decrease)}`;\n  \n  addBreakdownItem('Oprindelig værdi', formatNumber(oldValue));\n  addBreakdownItem('Ny værdi', formatNumber(newValue));\n  addBreakdownItem('Forskel', formatNumber(decrease));\n  addBreakdownItem('Formel', `((${formatNumber(oldValue)} - ${formatNumber(newValue)}) ÷ ${formatNumber(oldValue)}) × 100`);\n  addBreakdownItem('Fald', `${formatNumber(percentDecrease)}%`);\n  \n  resultContainer.style.display = 'block';\n}\n\n// Percentage difference\nfunction calculateDifference() {\n  const value1 = parseFloat(document.getElementById('diffValue1').value);\n  const value2 = parseFloat(document.getElementById('diffValue2').value);\n  \n  if(isNaN(value1) || isNaN(value2)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  if(value1 === 0) {\n    throw new Error('Første værdi kan ikke være 0');\n  }\n  \n  const difference = Math.abs(value2 - value1);\n  const percentDifference = (difference / value1) * 100;\n  const changeType = value2 > value1 ? 'stigning' : 'fald';\n  \n  resultLabel.textContent = 'Procentforskel';\n  resultValue.textContent = `${formatNumber(percentDifference)}%`;\n  resultSubtitle.textContent = `${changeType.charAt(0).toUpperCase() + changeType.slice(1)} på ${formatNumber(difference)}`;\n  \n  addBreakdownItem('Første værdi', formatNumber(value1));\n  addBreakdownItem('Anden værdi', formatNumber(value2));\n  addBreakdownItem('Forskel', formatNumber(difference));\n  addBreakdownItem('Type', changeType.charAt(0).toUpperCase() + changeType.slice(1));\n  addBreakdownItem('Procentforskel', `${formatNumber(percentDifference)}%`);\n  \n  resultContainer.style.display = 'block';\n}\n\n// Add percent to value\nfunction calculateAddPercent() {\n  const value = parseFloat(document.getElementById('addValue').value);\n  const percent = parseFloat(document.getElementById('addPercent').value);\n  \n  if(isNaN(value) || isNaN(percent)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  const addition = (percent / 100) * value;\n  const result = value + addition;\n  \n  resultLabel.textContent = 'Ny værdi';\n  resultValue.textContent = formatNumber(result);\n  resultSubtitle.textContent = `Efter tillæg af ${formatNumber(percent)}%`;\n  \n  addBreakdownItem('Oprindelig værdi', formatNumber(value));\n  addBreakdownItem('Procent at lægge til', `${formatNumber(percent)}%`);\n  addBreakdownItem('Tillæg', formatNumber(addition));\n  addBreakdownItem('Formel', `${formatNumber(value)} + (${formatNumber(value)} × ${formatNumber(percent)}%)`);\n  addBreakdownItem('Ny værdi', formatNumber(result));\n  \n  resultContainer.style.display = 'block';\n}\n\n// Subtract percent from value\nfunction calculateSubtractPercent() {\n  const value = parseFloat(document.getElementById('subtractValue').value);\n  const percent = parseFloat(document.getElementById('subtractPercent').value);\n  \n  if(isNaN(value) || isNaN(percent)) {\n    throw new Error('Indtast venligst gyldige tal');\n  }\n  \n  const subtraction = (percent / 100) * value;\n  const result = value - subtraction;\n  \n  resultLabel.textContent = 'Ny værdi';\n  resultValue.textContent = formatNumber(result);\n  resultSubtitle.textContent = `Efter fradrag af ${formatNumber(percent)}%`;\n  \n  addBreakdownItem('Oprindelig værdi', formatNumber(value));\n  addBreakdownItem('Procent at trække fra', `${formatNumber(percent)}%`);\n  addBreakdownItem('Fradrag', formatNumber(subtraction));\n  addBreakdownItem('Formel', `${formatNumber(value)} - (${formatNumber(value)} × ${formatNumber(percent)}%)`);\n  addBreakdownItem('Ny værdi', formatNumber(result));\n  \n  resultContainer.style.display = 'block';\n}\n\n// Calculate button click\ncalculateBtn.addEventListener('click', calculate);\n\n// Allow Enter key to calculate\ndocument.addEventListener('keypress', (e) => {\n  if(e.key === 'Enter') {\n    calculate();\n  }\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Sådan bruger du procentberegneren",
          "description": "Vores kalkulator hjælper dig hurtigt med at beregne procent, stigninger og fald.",
          "steps": [
                {
                      "step": 1,
                      "title": "Indtast startværdi",
                      "description": "Skriv det tal, du vil beregne procent af."
                },
                {
                      "step": 2,
                      "title": "Indtast procentværdi",
                      "description": "Skriv den procentdel, du vil beregne fra startværdien."
                },
                {
                      "step": 3,
                      "title": "Vælg beregningstype",
                      "description": "Vælg mellem stigning, fald eller forskel."
                },
                {
                      "step": 4,
                      "title": "Klik beregn",
                      "description": "Tryk på knappen for at få resultatet med det samme."
                }
          ]
    },
    examples: [
          {
                "title": "Beregn lønforhøjelse i procent",
                "description": "Du har fået en lønforhøjelse og vil vide procentstigningen.",
                "input": {
                      "felt1": "30.000 kr",
                      "felt2": "2.000 kr"
                },
                "output": "6,67%",
                "explanation": "Lønforhøjelsen på 2.000 kr er en stigning på 6,67% fra den oprindelige løn på 30.000 kr."
          },
          {
                "title": "Procentvis rabat på et køb",
                "description": "Du vil vide procentbesparelsen på et udsalg.",
                "input": {
                      "felt1": "1.500 kr",
                      "felt2": "300 kr"
                },
                "output": "20%",
                "explanation": "En rabat på 300 kr fra en oprindelig pris på 1.500 kr svarer til en besparelse på 20%."
          },
          {
                "title": "Fald i elregning sammenlignet med sidste år",
                "description": "Du vil beregne, hvor meget mindre du betaler i år.",
                "input": {
                      "felt1": "5.000 kr",
                      "felt2": "750 kr"
                },
                "output": "15%",
                "explanation": "Et fald på 750 kr i elregningen fra sidste års 5.000 kr er et fald på 15%."
          }
    ],
    faqs: [
          {
                "question": "Hvordan beregner jeg procentvis stigning?",
                "answer": "Indtast startbeløbet og stigningsbeløbet. Vælg 'stigning' i beregningstypen, og klik på beregn."
          },
          {
                "question": "Hvordan fungerer procentberegneren?",
                "answer": "Vælg beregningstype, indtast de nødvendige værdier, og tryk på beregn for at få resultatet hurtigt."
          },
          {
                "question": "Kan jeg beregne procentvis fald?",
                "answer": "Ja, vælg 'fald' som beregningstype, indtast start- og faldværdien, og klik på beregn."
          },
          {
                "question": "Er resultatet i overensstemmelse med danske standarder?",
                "answer": "Ja, beregningerne er baseret på standard matematiske principper anvendt i Danmark."
          },
          {
                "question": "Hvad skal jeg være opmærksom på ved beregning?",
                "answer": "Sørg for at indtaste korrekte tal og vælge den rigtige beregningstype for præcise resultater."
          },
          {
                "question": "Hvordan beregner jeg procentforskellen?",
                "answer": "Vælg 'forskel', indtast de to værdier, og klik på beregn for at se procentforskellen."
          }
    ],
    additionalInfo: {
          "title": "Forstå procent i hverdagen",
          "content": "At kunne beregne procent er essentielt i hverdagen, fra at forstå lønændringer til at vurdere rabatter. I Danmark anvendes procenter bredt, fx ved moms og renter. Sørg for at dobbelttjekke dine beregninger for præcise resultater."
    }
  },

  generatedAt: '2025-10-25T16:36:11.931Z',
  version: '1.0.0'
}
