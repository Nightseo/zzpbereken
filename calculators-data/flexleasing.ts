import { CalculatorData } from '@/types/calculator'

/**
 * Calculadora: beregn flexleasing
 * Generado automáticamente con Claude API
 * Fecha: 2025-10-25T21:37:14.925Z
 */

export const flexleasingCalculatorData: CalculatorData = {
  slug: 'flexleasing',

  metadata: {
    title: "Flexleasing Beregner - Din Kalkulator til Omkostninger",
    description: "Beregn præcist dine flexleasingomkostninger. Få indsigt i bilpriser, leasingperiode og udbetaling. Spar penge med vores effektive værktøj.",
    excerpt: "Beregn præcist dine flexleasing omkostninger med vores gratis beregner. Få overblik over månedlig ydelse, restværdi, renter og total omkostning ved flexleasing af bil.",
    canonical: '/beregn/flexleasing',
    keywords: ["beregn flexleasing"],
    category: "Transport",
    h1: "Beregn flexleasing",
    h2: "Flexleasing Kalkulator"
  },

  calculator: {
    html: "<div class=\"calc-container\">\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Bilens nypris (kr)</label>\n    <input type=\"number\" id=\"carPrice\" class=\"calc-input\" placeholder=\"300000\" min=\"0\" step=\"1000\">\n    <div class=\"calc-help\">Indtast bilens vejledende udsalgspris</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Udbetaling (kr)</label>\n    <input type=\"number\" id=\"downPayment\" class=\"calc-input\" placeholder=\"50000\" min=\"0\" step=\"1000\">\n    <div class=\"calc-help\">Beløb betalt ved kontraktindgåelse</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Leasingperiode</label>\n    <select id=\"leasePeriod\" class=\"calc-select\">\n      <option value=\"12\">12 måneder</option>\n      <option value=\"24\">24 måneder</option>\n      <option value=\"36\" selected>36 måneder</option>\n      <option value=\"48\">48 måneder</option>\n      <option value=\"60\">60 måneder</option>\n    </select>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Forventet årlig kørsel (km)</label>\n    <input type=\"number\" id=\"annualMileage\" class=\"calc-input\" placeholder=\"15000\" min=\"0\" step=\"1000\">\n    <div class=\"calc-help\">Dit estimerede årlige kilometerantal</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Rentesats (% p.a.)</label>\n    <input type=\"number\" id=\"interestRate\" class=\"calc-input\" placeholder=\"5.5\" min=\"0\" max=\"30\" step=\"0.1\">\n    <div class=\"calc-help\">Årlig rente på leasingaftalen</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Restværdi ved afslutning (%)</label>\n    <input type=\"number\" id=\"residualValue\" class=\"calc-input\" placeholder=\"40\" min=\"0\" max=\"80\" step=\"1\">\n    <div class=\"calc-help\">Forventet restværdi som % af nypris</div>\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Oprettelsesgebyr (kr)</label>\n    <input type=\"number\" id=\"setupFee\" class=\"calc-input\" placeholder=\"3000\" min=\"0\" step=\"100\">\n  </div>\n\n  <div class=\"calc-group\">\n    <label class=\"calc-label\">Inkluder moms (25%)</label>\n    <select id=\"includeVat\" class=\"calc-select\">\n      <option value=\"true\">Ja - Priser inkl. moms</option>\n      <option value=\"false\">Nej - Priser ekskl. moms</option>\n    </select>\n  </div>\n\n  <button id=\"calculateBtn\" class=\"calc-button\">Beregn flexleasing</button>\n\n  <div id=\"results\" class=\"calc-result-container\" style=\"display: none;\">\n    <div class=\"calc-result-box\">\n      <div class=\"calc-result-label\">Månedlig leasingydelse</div>\n      <div class=\"calc-result-value\" id=\"monthlyPayment\">0 kr</div>\n      <div class=\"calc-result-subtitle\" id=\"vatNote\"></div>\n    </div>\n\n    <div class=\"calc-breakdown\">\n      <h3 style=\"margin-top: 0; color: #2c3e50; font-size: 1.1rem;\">Beregningsdetaljer</h3>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Bilens nypris:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayCarPrice\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Udbetaling:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayDownPayment\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Finansieringsbeløb:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayFinancedAmount\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Restværdi ved afslutning:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayResidual\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Leasingperiode:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayPeriod\">0 måneder</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Oprettelsesgebyr:</span>\n        <span class=\"calc-breakdown-value\" id=\"displaySetupFee\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Samlet renteomkostning:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayTotalInterest\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Total årlig kørsel:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayTotalMileage\">0 km</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\" style=\"margin-top: 15px; padding-top: 15px; border-top: 2px solid #3498db; font-weight: bold;\">\n        <span class=\"calc-breakdown-label\">Samlet omkostning:</span>\n        <span class=\"calc-breakdown-value\" id=\"displayTotalCost\">0 kr</span>\n      </div>\n      \n      <div class=\"calc-breakdown-item\">\n        <span class=\"calc-breakdown-label\">Omkostning pr. måned (gns.):</span>\n        <span class=\"calc-breakdown-value\" id=\"displayAvgMonthlyCost\">0 kr</span>\n      </div>\n    </div>\n\n    <div class=\"calc-help\" style=\"margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;\">\n      <strong>Om flexleasing:</strong> Flexleasing giver dig fleksibilitet til at returnere bilen efter leasingperioden, købe den til restværdien eller forlænge aftalen. Bemærk at faktisk restværdi kan variere fra estimatet.\n    </div>\n  </div>\n\n  <div id=\"error\" class=\"calc-error\" style=\"display: none;\"></div>\n</div>",
    logic: "// Flexleasing calculator\nconst carPriceInput = document.getElementById('carPrice');\nconst downPaymentInput = document.getElementById('downPayment');\nconst leasePeriodInput = document.getElementById('leasePeriod');\nconst annualMileageInput = document.getElementById('annualMileage');\nconst interestRateInput = document.getElementById('interestRate');\nconst residualValueInput = document.getElementById('residualValue');\nconst setupFeeInput = document.getElementById('setupFee');\nconst includeVatInput = document.getElementById('includeVat');\nconst calculateBtn = document.getElementById('calculateBtn');\nconst resultsDiv = document.getElementById('results');\nconst errorDiv = document.getElementById('error');\n\n// Format number to Danish format\nfunction formatCurrency(amount) {\n  return Math.round(amount).toLocaleString('da-DK') + ' kr';\n}\n\nfunction formatNumber(num) {\n  return Math.round(num).toLocaleString('da-DK');\n}\n\n// Show error message\nfunction showError(message) {\n  errorDiv.textContent = message;\n  errorDiv.style.display = 'block';\n  resultsDiv.style.display = 'none';\n}\n\n// Hide error message\nfunction hideError() {\n  errorDiv.style.display = 'none';\n}\n\n// Calculate flexleasing\nfunction calculateFlexLeasing() {\n  hideError();\n\n  // Get input values\n  const carPrice = parseFloat(carPriceInput.value) || 0;\n  const downPayment = parseFloat(downPaymentInput.value) || 0;\n  const leasePeriod = parseInt(leasePeriodInput.value);\n  const annualMileage = parseFloat(annualMileageInput.value) || 0;\n  const interestRate = parseFloat(interestRateInput.value) || 0;\n  const residualValuePercent = parseFloat(residualValueInput.value) || 0;\n  const setupFee = parseFloat(setupFeeInput.value) || 0;\n  const includeVat = includeVatInput.value === 'true';\n\n  // Validation\n  if (carPrice <= 0) {\n    showError('Indtast venligst en gyldig bilpris.');\n    return;\n  }\n\n  if (downPayment < 0) {\n    showError('Udbetalingen kan ikke være negativ.');\n    return;\n  }\n\n  if (downPayment >= carPrice) {\n    showError('Udbetalingen skal være mindre end bilens pris.');\n    return;\n  }\n\n  if (annualMileage < 0) {\n    showError('Årlig kørsel kan ikke være negativ.');\n    return;\n  }\n\n  if (interestRate < 0 || interestRate > 30) {\n    showError('Rentesatsen skal være mellem 0% og 30%.');\n    return;\n  }\n\n  if (residualValuePercent < 0 || residualValuePercent > 80) {\n    showError('Restværdien skal være mellem 0% og 80%.');\n    return;\n  }\n\n  // Calculate residual value\n  const residualValue = carPrice * (residualValuePercent / 100);\n\n  // Calculate financed amount (car price - down payment - residual value)\n  const financedAmount = carPrice - downPayment - residualValue;\n\n  if (financedAmount <= 0) {\n    showError('Finansieringsbeløbet er for lavt. Reducer udbetaling eller restværdi.');\n    return;\n  }\n\n  // Monthly interest rate\n  const monthlyRate = interestRate / 100 / 12;\n\n  // Calculate monthly payment using annuity formula\n  let monthlyPayment = 0;\n  \n  if (monthlyRate > 0) {\n    // Standard annuity formula\n    monthlyPayment = financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, leasePeriod)) / (Math.pow(1 + monthlyRate, leasePeriod) - 1);\n  } else {\n    // No interest\n    monthlyPayment = financedAmount / leasePeriod;\n  }\n\n  // Add setup fee distributed over lease period\n  const setupFeeMonthly = setupFee / leasePeriod;\n  monthlyPayment += setupFeeMonthly;\n\n  // Calculate totals\n  const totalMonthlyPayments = monthlyPayment * leasePeriod;\n  const totalInterest = totalMonthlyPayments - financedAmount - setupFee;\n  const totalCost = downPayment + totalMonthlyPayments;\n  const totalMileage = annualMileage * (leasePeriod / 12);\n\n  // Apply VAT if needed\n  let displayMonthlyPayment = monthlyPayment;\n  let displayTotalCost = totalCost;\n  let displayDownPayment = downPayment;\n  let displaySetupFee = setupFee;\n  let displayResidual = residualValue;\n  let displayTotalInterest = totalInterest;\n  \n  if (includeVat) {\n    displayMonthlyPayment = monthlyPayment * 1.25;\n    displayTotalCost = totalCost * 1.25;\n    displayDownPayment = downPayment * 1.25;\n    displaySetupFee = setupFee * 1.25;\n    displayResidual = residualValue * 1.25;\n    displayTotalInterest = totalInterest * 1.25;\n  }\n\n  // Display results\n  document.getElementById('monthlyPayment').textContent = formatCurrency(displayMonthlyPayment);\n  document.getElementById('vatNote').textContent = includeVat ? 'Inkl. moms (25%)' : 'Ekskl. moms';\n  \n  document.getElementById('displayCarPrice').textContent = formatCurrency(includeVat ? carPrice * 1.25 : carPrice);\n  document.getElementById('displayDownPayment').textContent = formatCurrency(displayDownPayment);\n  document.getElementById('displayFinancedAmount').textContent = formatCurrency(includeVat ? financedAmount * 1.25 : financedAmount);\n  document.getElementById('displayResidual').textContent = formatCurrency(displayResidual) + ' (' + residualValuePercent + '%)';\n  document.getElementById('displayPeriod').textContent = leasePeriod + ' måneder';\n  document.getElementById('displaySetupFee').textContent = formatCurrency(displaySetupFee);\n  document.getElementById('displayTotalInterest').textContent = formatCurrency(displayTotalInterest);\n  document.getElementById('displayTotalMileage').textContent = formatNumber(totalMileage) + ' km';\n  document.getElementById('displayTotalCost').textContent = formatCurrency(displayTotalCost);\n  document.getElementById('displayAvgMonthlyCost').textContent = formatCurrency(displayTotalCost / leasePeriod);\n\n  resultsDiv.style.display = 'block';\n}\n\n// Event listeners\ncalculateBtn.addEventListener('click', calculateFlexLeasing);\n\n// Calculate on Enter key in input fields\n[carPriceInput, downPaymentInput, annualMileageInput, interestRateInput, residualValueInput, setupFeeInput].forEach(input => {\n  input.addEventListener('keypress', (e) => {\n    if (e.key === 'Enter') {\n      calculateFlexLeasing();\n    }\n  });\n});\n\n// Set default values\nwindow.addEventListener('load', () => {\n  carPriceInput.value = '300000';\n  downPaymentInput.value = '50000';\n  annualMileageInput.value = '15000';\n  interestRateInput.value = '5.5';\n  residualValueInput.value = '40';\n  setupFeeInput.value = '3000';\n});",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Sådan beregner du flexleasing",
          "description": "Vores kalkulator hjælper dig med at forstå omkostningerne ved flexleasing af din bil.",
          "steps": [
                {
                      "step": 1,
                      "title": "Indtast bilens pris",
                      "description": "Skriv bilens fulde pris i det angivne felt."
                },
                {
                      "step": 2,
                      "title": "Vælg leasingperiode",
                      "description": "Angiv hvor længe du ønsker at lease bilen."
                },
                {
                      "step": 3,
                      "title": "Indsæt udbetalingen",
                      "description": "Indtast det beløb du vil betale som udbetaling."
                },
                {
                      "step": 4,
                      "title": "Klik på beregn",
                      "description": "Tryk på 'beregn' for at se dine leasingomkostninger."
                }
          ]
    },
    examples: [
          {
                "title": "Flexleasing af luksusbil til erhverv",
                "description": "Du overvejer at lease en luksusbil til din virksomhed.",
                "input": {
                      "bilens pris": "500.000 kr.",
                      "leasingperiode": "36 måneder",
                      "udbetaling": "50.000 kr."
                },
                "output": "Månedlig leasingomkostning: ca. 4.500 kr.",
                "explanation": "En længere leasingperiode og en større udbetaling reducerer de månedlige omkostninger."
          },
          {
                "title": "Privatleasing af familiebil",
                "description": "Du ønsker at lease en bil til familiens daglige brug.",
                "input": {
                      "bilens pris": "250.000 kr.",
                      "leasingperiode": "24 måneder",
                      "udbetaling": "25.000 kr."
                },
                "output": "Månedlig leasingomkostning: ca. 3.200 kr.",
                "explanation": "Kortere leasingperiode med moderat udbetaling giver en overskuelig månedlig ydelse."
          },
          {
                "title": "Leasing af elbil",
                "description": "Du planlægger at lease en miljøvenlig elbil.",
                "input": {
                      "bilens pris": "300.000 kr.",
                      "leasingperiode": "12 måneder",
                      "udbetaling": "30.000 kr."
                },
                "output": "Månedlig leasingomkostning: ca. 6.500 kr.",
                "explanation": "Kort leasingperiode med lav udbetaling giver højere månedlige omkostninger."
          }
    ],
    faqs: [
          {
                "question": "Hvordan beregner jeg omkostningerne ved flexleasing?",
                "answer": "Brug vores kalkulator ved at indtaste bilens pris, leasingperiode og udbetaling for at få en estimeret månedlig omkostning."
          },
          {
                "question": "Hvilke faktorer påvirker leasingomkostningen?",
                "answer": "Bilens værdi, leasingperiodens længde og størrelsen af udbetalingen har alle indflydelse på de månedlige omkostninger."
          },
          {
                "question": "Er flexleasing i overensstemmelse med danske regler?",
                "answer": "Ja, flexleasing er lovligt i Danmark og følger specifikke skatteregler for at optimere omkostningerne."
          },
          {
                "question": "Hvad skal jeg være opmærksom på ved flexleasing?",
                "answer": "Vær opmærksom på restværdiens fastsættelse og eventuelle ekstraomkostninger ved afslutningen af leasingperioden."
          },
          {
                "question": "Kan jeg flexlease både nye og brugte biler?",
                "answer": "Ja, flexleasing kan anvendes både på nye og brugte biler, hvilket giver fleksibilitet afhængigt af dine behov."
          },
          {
                "question": "Hvordan påvirker leasingperiodens længde omkostningerne?",
                "answer": "En længere leasingperiode reducerer typisk de månedlige omkostninger, men kan øge den samlede finansielle forpligtelse."
          }
    ],
    additionalInfo: {
          "title": "Forstå flexleasing i Danmark",
          "content": "Flexleasing er populært i Danmark pga. de lavere registreringsafgifter. Det kan være en fordel at lease dyrere biler. Husk at tjekke restværdi og ekstraomkostninger. Det er vigtigt at forstå skattereglerne for optimal besparelse."
    }
  },


  generatedAt: '2025-10-25T21:37:14.926Z',
  version: '1.0.0'
}
