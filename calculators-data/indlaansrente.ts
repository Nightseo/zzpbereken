import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: beregn indlånsrente
 * Generado automáticamente con Claude API
 * Fecha: 2025-10-25T19:16:03.592Z
 */

export const indlaansrenteCalculatorData: CalculatorData = {
  slug: 'indlaansrente',

  metadata: {
    title: "Beregn indlånsrente med Kalkulator",
    description: "Få hurtigt overblik over dit bankafkast. Prøv vores indlånsrente kalkulator nu!",
    excerpt: "Beregn dit afkast på indlån i banken med renter, månedlige indskud og kapitalindkomstskat. Få et detaljeret overblik over din opsparing.",
    canonical: 'https://pengekalkulator.com/beregn/indlaansrente',
    keywords: ["beregn indlånsrente"],
    category: "Investering & Opsparing",
    h1: "Beregn indlånsrente",
    h2: "Indlånsrente Kalkulator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Indskudsbeløb</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"principal\" class=\"calc-input\" placeholder=\"Indtast beløb\" value=\"50000\" min=\"0\" step=\"1000\">\n      <span class=\"calc-input-suffix\">kr</span>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Årlig rentesats</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"interestRate\" class=\"calc-input\" placeholder=\"Indtast rente\" value=\"2.5\" min=\"0\" max=\"20\" step=\"0.1\">\n      <span class=\"calc-input-suffix\">%</span>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Opsparingsperiode</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"period\" class=\"calc-input\" placeholder=\"Indtast periode\" value=\"5\" min=\"0\" max=\"50\" step=\"1\">\n      <span class=\"calc-input-suffix\">år</span>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Rentetilskrivning</label>\n    <select id=\"compounding\" class=\"calc-select\">\n      <option value=\"1\">Årligt</option>\n      <option value=\"2\">Halvårligt</option>\n      <option value=\"4\">Kvartalsvis</option>\n      <option value=\"12\" selected>Månedligt</option>\n    </select>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Månedligt indskud (valgfrit)</label>\n    <div class=\"calc-input-wrapper\">\n      <input type=\"number\" id=\"monthlyDeposit\" class=\"calc-input\" placeholder=\"Indtast månedligt indskud\" value=\"0\" min=\"0\" step=\"100\">\n      <span class=\"calc-input-suffix\">kr</span>\n    </div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">\n      <input type=\"checkbox\" id=\"includeTax\" style=\"width: auto; margin-right: 8px;\">\n      Medregn kapitalindkomstskat (42% af renter)\n    </label>\n  </div>\n\n  <button id=\"calculateBtn\" class=\"calc-button\">Beregn indlånsrente</button>\n  <button id=\"resetBtn\" class=\"calc-button-secondary\">Nulstil</button>\n\n  <div id=\"errorMessage\" class=\"calc-error\" style=\"display: none;\"></div>\n\n  <div id=\"results\" class=\"calc-result-container\" style=\"display: none;\">\n    <h3 style=\"margin-top: 0; color: #2c3e50;\">Resultat af beregning</h3>\n    \n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Samlet værdi efter <span id=\"resultPeriod\"></span> år</div>\n      <div class=\"calc-result-value\" id=\"totalValue\">0 kr</div>\n    </div>\n\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;\">\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Samlede indskud</div>\n        <div class=\"calc-result-value\" style=\"font-size: 1.3em;\" id=\"totalDeposits\">0 kr</div>\n      </div>\n\n      <div class=\"calc-result-box\">\n        <div class=\"calc-result-label\">Optjente renter (før skat)</div>\n        <div class=\"calc-result-value\" style=\"font-size: 1.3em; color: #27ae60;\" id=\"totalInterest\">0 kr</div>\n      </div>\n    </div>\n\n    <div id=\"taxSection\" style=\"display: none; margin-top: 15px;\">\n      <div class=\"calc-result-box\" style=\"background-color: #fff3cd; border-left: 4px solid #ffc107;\">\n        <div class=\"calc-result-label\">Kapitalindkomstskat (42%)</div>\n        <div class=\"calc-result-value\" style=\"font-size: 1.3em; color: #856404;\" id=\"taxAmount\">0 kr</div>\n        <div class=\"calc-result-subtitle\">Værdi efter skat: <strong id=\"afterTaxValue\">0 kr</strong></div>\n      </div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h4 style=\"margin-top: 20px; margin-bottom: 10px; color: #2c3e50;\">Detaljeret beregning</h4>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Startbeløb:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownPrincipal\">0 kr</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Månedlige indskud:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownMonthly\">0 kr</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Antal indskud:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownCount\">0</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Total indskud:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownTotal\">0 kr</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Rentesats:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownRate\">0%</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Rentetilskrivning:</span>\n        <span class=\"calc-breakdown-value\" id=\"breakdownCompounding\">Månedligt</span>\n      </div>\n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Effektiv årlig rente:</span>\n        <span class=\"calc-breakdown-value\" id=\"effectiveRate\">0%</span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px;\">\n      <strong>Bemærk:</strong> Kapitalindkomst beskattes i Danmark med 37% op til 58.900 kr (2024) og 42% over dette beløb. Beregningen bruger en forsimplet sats på 42%. Konsulter en rådgiver for præcis skatteberegning.\n    </div>\n  </div>\n</div>",
    logic: "// Get all elements\nconst principalInput = document.getElementById('principal');\nconst interestRateInput = document.getElementById('interestRate');\nconst periodInput = document.getElementById('period');\nconst compoundingSelect = document.getElementById('compounding');\nconst monthlyDepositInput = document.getElementById('monthlyDeposit');\nconst includeTaxCheckbox = document.getElementById('includeTax');\nconst calculateBtn = document.getElementById('calculateBtn');\nconst resetBtn = document.getElementById('resetBtn');\nconst errorMessage = document.getElementById('errorMessage');\nconst resultsDiv = document.getElementById('results');\n\n// Result elements\nconst totalValueEl = document.getElementById('totalValue');\nconst totalDepositsEl = document.getElementById('totalDeposits');\nconst totalInterestEl = document.getElementById('totalInterest');\nconst resultPeriodEl = document.getElementById('resultPeriod');\nconst taxSectionEl = document.getElementById('taxSection');\nconst taxAmountEl = document.getElementById('taxAmount');\nconst afterTaxValueEl = document.getElementById('afterTaxValue');\n\n// Breakdown elements\nconst breakdownPrincipalEl = document.getElementById('breakdownPrincipal');\nconst breakdownMonthlyEl = document.getElementById('breakdownMonthly');\nconst breakdownCountEl = document.getElementById('breakdownCount');\nconst breakdownTotalEl = document.getElementById('breakdownTotal');\nconst breakdownRateEl = document.getElementById('breakdownRate');\nconst breakdownCompoundingEl = document.getElementById('breakdownCompounding');\nconst effectiveRateEl = document.getElementById('effectiveRate');\n\n// Format number to Danish format\nfunction formatCurrency(amount) {\n  return Math.round(amount).toLocaleString('da-DK') + ' kr';\n}\n\nfunction formatPercent(percent) {\n  return percent.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '%';\n}\n\n// Show error message\nfunction showError(message) {\n  errorMessage.textContent = message;\n  errorMessage.style.display = 'block';\n  resultsDiv.style.display = 'none';\n}\n\n// Hide error message\nfunction hideError() {\n  errorMessage.style.display = 'none';\n}\n\n// Calculate compound interest\nfunction calculateCompoundInterest() {\n  hideError();\n\n  // Get input values\n  const principal = parseFloat(principalInput.value) || 0;\n  const annualRate = parseFloat(interestRateInput.value) || 0;\n  const years = parseFloat(periodInput.value) || 0;\n  const compoundingFrequency = parseInt(compoundingSelect.value);\n  const monthlyDeposit = parseFloat(monthlyDepositInput.value) || 0;\n  const includeTax = includeTaxCheckbox.checked;\n\n  // Validation\n  if (principal < 0) {\n    showError('Indskudsbeløbet skal være positivt.');\n    return;\n  }\n\n  if (annualRate < 0 || annualRate > 20) {\n    showError('Rentesatsen skal være mellem 0% og 20%.');\n    return;\n  }\n\n  if (years <= 0) {\n    showError('Opsparingsperioden skal være større end 0.');\n    return;\n  }\n\n  if (years > 50) {\n    showError('Opsparingsperioden må maksimalt være 50 år.');\n    return;\n  }\n\n  if (monthlyDeposit < 0) {\n    showError('Månedligt indskud skal være positivt.');\n    return;\n  }\n\n  // Calculate\n  const r = annualRate / 100;\n  const n = compoundingFrequency;\n  const t = years;\n\n  // Compound interest formula for principal: A = P(1 + r/n)^(nt)\n  const principalValue = principal * Math.pow(1 + r / n, n * t);\n\n  // Future value of monthly deposits (annuity)\n  let monthlyDepositValue = 0;\n  if (monthlyDeposit > 0) {\n    // Convert to monthly compounding for monthly deposits\n    const monthlyRate = r / 12;\n    const totalMonths = t * 12;\n    // FV = PMT × [((1 + r)^n - 1) / r]\n    if (monthlyRate > 0) {\n      monthlyDepositValue = monthlyDeposit * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);\n    } else {\n      monthlyDepositValue = monthlyDeposit * totalMonths;\n    }\n  }\n\n  const totalValue = principalValue + monthlyDepositValue;\n  const totalDeposits = principal + (monthlyDeposit * years * 12);\n  const totalInterest = totalValue - totalDeposits;\n\n  // Tax calculation (42% on interest)\n  const taxRate = 0.42;\n  const taxAmount = totalInterest * taxRate;\n  const afterTaxValue = totalValue - taxAmount;\n\n  // Calculate effective annual rate\n  const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100;\n\n  // Get compounding frequency text\n  const compoundingText = {\n    '1': 'Årligt',\n    '2': 'Halvårligt',\n    '4': 'Kvartalsvis',\n    '12': 'Månedligt'\n  }[compoundingFrequency];\n\n  // Display results\n  totalValueEl.textContent = formatCurrency(totalValue);\n  totalDepositsEl.textContent = formatCurrency(totalDeposits);\n  totalInterestEl.textContent = formatCurrency(totalInterest);\n  resultPeriodEl.textContent = years;\n\n  // Tax section\n  if (includeTax) {\n    taxSectionEl.style.display = 'block';\n    taxAmountEl.textContent = formatCurrency(taxAmount);\n    afterTaxValueEl.textContent = formatCurrency(afterTaxValue);\n  } else {\n    taxSectionEl.style.display = 'none';\n  }\n\n  // Breakdown\n  breakdownPrincipalEl.textContent = formatCurrency(principal);\n  breakdownMonthlyEl.textContent = formatCurrency(monthlyDeposit);\n  breakdownCountEl.textContent = (years * 12).toLocaleString('da-DK');\n  breakdownTotalEl.textContent = formatCurrency(totalDeposits);\n  breakdownRateEl.textContent = formatPercent(annualRate);\n  breakdownCompoundingEl.textContent = compoundingText;\n  effectiveRateEl.textContent = formatPercent(effectiveRate);\n\n  resultsDiv.style.display = 'block';\n}\n\n// Reset function\nfunction resetCalculator() {\n  principalInput.value = '50000';\n  interestRateInput.value = '2.5';\n  periodInput.value = '5';\n  compoundingSelect.value = '12';\n  monthlyDepositInput.value = '0';\n  includeTaxCheckbox.checked = false;\n  hideError();\n  resultsDiv.style.display = 'none';\n}\n\n// Event listeners\ncalculateBtn.addEventListener('click', calculateCompoundInterest);\nresetBtn.addEventListener('click', resetCalculator);\n\n// Allow Enter key to calculate\n[principalInput, interestRateInput, periodInput, monthlyDepositInput].forEach(input => {\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      calculateCompoundInterest();\n    }\n  });\n});\n\n// Initial calculation\ncalculateCompoundInterest();",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Sådan beregner du din indlånsrente",
          "description": "Få et hurtigt overblik over dit afkast på bankindlån med vores kalkulator.",
          "steps": [
                {
                      "step": 1,
                      "title": "Indtast indlånsbeløb",
                      "description": "Indtast det beløb, du har på din konto."
                },
                {
                      "step": 2,
                      "title": "Vælg rentesats",
                      "description": "Angiv den årlige rente, du får fra din bank."
                },
                {
                      "step": 3,
                      "title": "Angiv perioden",
                      "description": "Vælg hvor længe du planlægger at have beløbet indsat."
                },
                {
                      "step": 4,
                      "title": "Beregn afkast",
                      "description": "Klik på 'Beregn' for at se dit forventede afkast."
                }
          ]
    },
    examples: [
          {
                "title": "Beregn afkast for opsparingskonto",
                "description": "Du har 50.000 kr. stående på din opsparingskonto i ét år.",
                "input": {
                      "indlånsbeløb": "50.000 kr.",
                      "rentesats": "0,5%",
                      "periode": "1 år"
                },
                "output": "250 kr.",
                "explanation": "Med en rente på 0,5% vil du efter ét år have tjent 250 kr. i rente."
          },
          {
                "title": "Langsigtet opsparing til pension",
                "description": "Du planlægger at lade 200.000 kr. stå i 10 år for pension.",
                "input": {
                      "indlånsbeløb": "200.000 kr.",
                      "rentesats": "1,2%",
                      "periode": "10 år"
                },
                "output": "25.456 kr.",
                "explanation": "Efter 10 år med 1,2% årlig rente vil din opsparing være vokset med 25.456 kr."
          },
          {
                "title": "Kortvarig indlånsrente på børneopsparing",
                "description": "Du har 10.000 kr. på en børneopsparingskonto i 5 år.",
                "input": {
                      "indlånsbeløb": "10.000 kr.",
                      "rentesats": "0,75%",
                      "periode": "5 år"
                },
                "output": "384 kr.",
                "explanation": "En rente på 0,75% over 5 år giver dig et afkast på 384 kr."
          }
    ],
    faqs: [
          {
                "question": "Hvordan beregner jeg min indlånsrente?",
                "answer": "Indtast dit indlånsbeløb, vælg din banks rentesats og den ønskede periode, og klik 'Beregn' for at se dit afkast."
          },
          {
                "question": "Hvilken rentesats skal jeg vælge?",
                "answer": "Brug den årlige rente, som din bank tilbyder. Tjek din kontos vilkår for at finde den præcise sats."
          },
          {
                "question": "Hvordan påvirker perioden mit afkast?",
                "answer": "Jo længere din opsparing står, desto større bliver dit afkast, takket være renters rente over tid."
          },
          {
                "question": "Er beregningen i overensstemmelse med danske regler?",
                "answer": "Ja, vores beregninger tager højde for standard danske bankregler for indlånsrenter."
          },
          {
                "question": "Skal jeg inkludere skat i beregningen?",
                "answer": "Nej, beregningen viser bruttoafkast. Skat afhænger af din personlige skattesituation."
          },
          {
                "question": "Er der en minimum saldo for beregning?",
                "answer": "Nej, du kan beregne afkast uanset beløbets størrelse, men tjek din banks krav for minimumsindlån."
          }
    ],
    additionalInfo: {
          "title": "Forstå indlånsrente i Danmark",
          "content": "Indlånsrente viser dit afkast fra banken. I Danmark variere renter afhængigt af bank og kontotype. Husk at renter beskattes som kapitalindkomst. Sammenlign forskellige banktilbud for at optimere din opsparing."
    }
  },


  generatedAt: '2025-10-25T19:16:03.593Z',
  version: '1.0.0'
}
