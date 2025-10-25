import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: beregn lønstigning
 * Generado automáticamente con Claude API
 * Fecha: 2025-10-25T21:35:10.501Z
 */

export const lonstigningCalculatorData: CalculatorData = {
  slug: 'lonstigning',

  metadata: {
    title: "Lønstigning Kalkulator - Beregn Din Lønforhøjelse Nemt",
    description: "Beregn din lønstigning i kroner og procent med vores præcise kalkulator. Få indsigt i din lønudvikling og planlæg din økonomi bedre.",
    excerpt: "Beregn præcist hvor meget din løn stiger i både kroner og procent. Få et detaljeret overblik over din månedlige og årlige lønstigning.",
    canonical: '/beregn/lonstigning',
    keywords: ["beregn lønstigning"],
    category: "Løn & Skat",
    h1: "Beregn lønstigning",
    h2: "Lønstigning Kalkulator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Nuværende løn (kr/måned)</label>\n    <input type=\"number\" id=\"currentSalary\" class=\"calc-input\" placeholder=\"35000\" min=\"0\" step=\"100\">\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Ny løn (kr/måned)</label>\n    <input type=\"number\" id=\"newSalary\" class=\"calc-input\" placeholder=\"37000\" min=\"0\" step=\"100\">\n  </div>\n\n  <div class=\"calc-group\">\n    <button id=\"calculateBtn\" class=\"calc-button\">Beregn lønstigning</button>\n  </div>\n\n  <div id=\"errorMessage\" class=\"calc-error\" style=\"display: none;\"></div>\n\n  <div id=\"results\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Lønstigning i kroner</div>\n      <div class=\"calc-result-value\" id=\"salaryIncreaseKr\"></div>\n      <div class=\"calc-result-subtitle\">per måned</div>\n    </div>\n\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Lønstigning i procent</div>\n      <div class=\"calc-result-value\" id=\"salaryIncreasePercent\"></div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3 style=\"margin: 0 0 15px 0; font-size: 18px; color: #2c3e50;\">Detaljeret oversigt</h3>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Nuværende løn (månedlig)</span>\n        <span class=\"calc-breakdown-value\" id=\"currentSalaryDisplay\"></span>\n      </div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Ny løn (månedlig)</span>\n        <span class=\"calc-breakdown-value\" id=\"newSalaryDisplay\"></span>\n      </div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Forskel per måned</span>\n        <span class=\"calc-breakdown-value\" id=\"monthlyDiff\"></span>\n      </div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Forskel per år</span>\n        <span class=\"calc-breakdown-value\" id=\"yearlyDiff\"></span>\n      </div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Nuværende årsløn</span>\n        <span class=\"calc-breakdown-value\" id=\"currentYearly\"></span>\n      </div>\n\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Ny årsløn</span>\n        <span class=\"calc-breakdown-value\" id=\"newYearly\"></span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px;\">\n      <strong>Bemærk:</strong> Beregningen viser bruttolønstigningen. Din faktiske nettolønstigning vil være lavere efter skat og AM-bidrag (8%).\n    </div>\n  </div>\n</div>",
    logic: "document.addEventListener('DOMContentLoaded', function() {\n  const currentSalaryInput = document.getElementById('currentSalary');\n  const newSalaryInput = document.getElementById('newSalary');\n  const calculateBtn = document.getElementById('calculateBtn');\n  const errorMessage = document.getElementById('errorMessage');\n  const results = document.getElementById('results');\n\n  function formatCurrency(amount) {\n    return amount.toLocaleString('da-DK', { \n      minimumFractionDigits: 0,\n      maximumFractionDigits: 0 \n    }) + ' kr';\n  }\n\n  function formatPercent(percent) {\n    return percent.toLocaleString('da-DK', { \n      minimumFractionDigits: 2,\n      maximumFractionDigits: 2 \n    }) + '%';\n  }\n\n  function showError(message) {\n    errorMessage.textContent = message;\n    errorMessage.style.display = 'block';\n    results.style.display = 'none';\n  }\n\n  function hideError() {\n    errorMessage.style.display = 'none';\n  }\n\n  function calculate() {\n    hideError();\n\n    const currentSalary = parseFloat(currentSalaryInput.value);\n    const newSalary = parseFloat(newSalaryInput.value);\n\n    if (isNaN(currentSalary) || currentSalary <= 0) {\n      showError('Indtast venligst en gyldig nuværende løn.');\n      return;\n    }\n\n    if (isNaN(newSalary) || newSalary <= 0) {\n      showError('Indtast venligst en gyldig ny løn.');\n      return;\n    }\n\n    if (newSalary <= currentSalary) {\n      showError('Den nye løn skal være højere end den nuværende løn for at beregne en stigning.');\n      return;\n    }\n\n    const salaryIncrease = newSalary - currentSalary;\n    const percentIncrease = (salaryIncrease / currentSalary) * 100;\n    const yearlyIncrease = salaryIncrease * 12;\n    const currentYearly = currentSalary * 12;\n    const newYearly = newSalary * 12;\n\n    document.getElementById('salaryIncreaseKr').textContent = formatCurrency(salaryIncrease);\n    document.getElementById('salaryIncreasePercent').textContent = formatPercent(percentIncrease);\n    document.getElementById('currentSalaryDisplay').textContent = formatCurrency(currentSalary);\n    document.getElementById('newSalaryDisplay').textContent = formatCurrency(newSalary);\n    document.getElementById('monthlyDiff').textContent = formatCurrency(salaryIncrease);\n    document.getElementById('yearlyDiff').textContent = formatCurrency(yearlyIncrease);\n    document.getElementById('currentYearly').textContent = formatCurrency(currentYearly);\n    document.getElementById('newYearly').textContent = formatCurrency(newYearly);\n\n    results.style.display = 'block';\n  }\n\n  calculateBtn.addEventListener('click', calculate);\n\n  currentSalaryInput.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      calculate();\n    }\n  });\n\n  newSalaryInput.addEventListener('keypress', function(e) {\n    if (e.key === 'Enter') {\n      calculate();\n    }\n  });\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Sådan beregner du din lønstigning",
          "description": "Find ud af hvor meget din løn stiger i kroner og procent.",
          "steps": [
                {
                      "step": 1,
                      "title": "Indtast nuværende løn",
                      "description": "Skriv din nuværende månedsløn før skat."
                },
                {
                      "step": 2,
                      "title": "Indtast ny løn",
                      "description": "Skriv den nye løn du forventer at få."
                },
                {
                      "step": 3,
                      "title": "Klik på beregn",
                      "description": "Tryk på beregn-knappen for at se resultatet."
                },
                {
                      "step": 4,
                      "title": "Se stigning i kroner og procent",
                      "description": "Du får vist hvor meget din løn stiger i både kroner og procent."
                }
          ]
    },
    examples: [
          {
                "title": "Lønforhøjelse efter årlig evaluering",
                "description": "Du har lige fået en årlig evaluering og en lønforhøjelse.",
                "input": {
                      "felt1": "35.000 kr.",
                      "felt2": "37.000 kr."
                },
                "output": "Din løn stiger med 2.000 kr. hvilket svarer til en stigning på 5,71%.",
                "explanation": "Din nye løn er højere end den gamle, hvilket giver en procentvis stigning."
          },
          {
                "title": "Skift til en ny stilling",
                "description": "Du har fået et nyt job med bedre lønvilkår.",
                "input": {
                      "felt1": "28.000 kr.",
                      "felt2": "32.000 kr."
                },
                "output": "Din løn stiger med 4.000 kr. hvilket svarer til en stigning på 14,29%.",
                "explanation": "Den større lønrefleksion afspejler sig i en betydelig procentvis stigning."
          },
          {
                "title": "Lønjustering efter forhandling",
                "description": "Du har succesfuldt forhandlet en lønforhøjelse.",
                "input": {
                      "felt1": "40.000 kr.",
                      "felt2": "42.500 kr."
                },
                "output": "Din løn stiger med 2.500 kr. hvilket svarer til en stigning på 6,25%.",
                "explanation": "En vellykket forhandling har resulteret i en positiv lønændring."
          }
    ],
    faqs: [
          {
                "question": "Hvordan beregner jeg min lønstigning?",
                "answer": "Indtast din nuværende og nye løn i beregneren, og klik på 'Beregn' for at se stigningen i kroner og procent."
          },
          {
                "question": "Hvad er en typisk årlig lønstigning?",
                "answer": "Det varierer, men en stigning på 2-4% er almindelig i Danmark afhængig af branche og forhandling."
          },
          {
                "question": "Beregner I både brutto- og nettoløn?",
                "answer": "Nej, vi beregner kun ændringer i bruttolønnen. Nettoløn kan variere afhængigt af skat og fradrag."
          },
          {
                "question": "Hvordan påvirker skat min lønstigning?",
                "answer": "Skatten påvirker kun din nettoløn. Bruttolønsstigningen er skattepligtig, hvilket kan ændre din nettoløn."
          },
          {
                "question": "Er beregningen i henhold til danske regler?",
                "answer": "Ja, beregningen følger danske standarder for bruttoløn, men individuelle skatteforhold kan variere."
          }
    ],
    additionalInfo: {
          "title": "Forstå din lønstigning bedre",
          "content": "At kende sin lønstigning hjælper med økonomisk planlægning. Danske lønforhandlinger afhænger ofte af branche og erfaring. Husk, at bruttolønsstigninger er skattepligtige, og nettopåvirkningen kan variere. Tjek altid din kontrakt for specifikke vilkår."
    }
  },


  generatedAt: '2025-10-25T21:35:10.502Z',
  version: '1.0.0'
}
