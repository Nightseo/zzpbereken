import { CalculatorData } from '@/types/calculator'

/**
 * Calculator: arbeidsongeschiktheidsverzekering zzp berekenen
 * Automatisch gegenereerd met Claude API
 * Datum: 2025-10-30T15:15:23.084Z
 */

export const arbeidsongeschiktheidsverzekering_zzpCalculatorData: CalculatorData = {
  slug: 'arbeidsongeschiktheidsverzekering-zzp',

  metadata: {
    title: "AOV Calculator - Bereken je ZZP Verzekeringspremie",
    description: "Ontdek je ideale arbeidsongeschiktheidsverzekering als ZZP'er. Bereken eenvoudig je premie en krijg financieel inzicht. Speciaal voor zelfstandigen.",
    excerpt: "Bereken snel en eenvoudig de premie voor je arbeidsongeschiktheidsverzekering als ZZP'er. Krijg direct inzicht in je maandpremie, jaarpremie en verzekerd bedrag op basis van jouw persoonlijke situatie.",
    canonical: 'https://zzpbereken.com/bereken/arbeidsongeschiktheidsverzekering-zzp',
    keywords: ["arbeidsongeschiktheidsverzekering zzp berekenen"],
    category: "Verzekeringen",
    h1: "Bereken arbeidsongeschiktheidsverzekering zzp",
    h2: "Arbeidsongeschiktheidsverzekering zzp Calculator"
  },

  calculator: {
    html: "<div class=\"calc-container\"><div class=\"calc-group\"><label class=\"calc-label\">Wat is je huidige maandinkomen als ZZP'er?</label><div class=\"calc-input-wrapper\"><input type=\"number\" id=\"monthlyIncome\" class=\"calc-input\" placeholder=\"3500\" min=\"0\" step=\"100\"><span class=\"calc-input-suffix\">€/maand</span></div><p class=\"calc-help\">Vul je gemiddelde netto maandinkomen in</p></div><div class=\"calc-group\"><label class=\"calc-label\">Welk percentage van je inkomen wil je verzekeren?</label><select id=\"coveragePercentage\" class=\"calc-select\"><option value=\"50\">50% - Minimale dekking</option><option value=\"60\">60% - Basis dekking</option><option value=\"70\" selected>70% - Standaard dekking</option><option value=\"80\">80% - Uitgebreide dekking</option></select><p class=\"calc-help\">Bij arbeidsongeschiktheid ontvang je dit percentage van je inkomen</p></div><div class=\"calc-group\"><label class=\"calc-label\">Wat is je leeftijd?</label><input type=\"number\" id=\"age\" class=\"calc-input\" placeholder=\"35\" min=\"18\" max=\"67\"><p class=\"calc-help\">Je leeftijd beïnvloedt de premie</p></div><div class=\"calc-group\"><label class=\"calc-label\">Wat is je beroepsklasse?</label><select id=\"riskClass\" class=\"calc-select\"><option value=\"1\">Klasse 1 - Laag risico (kantoorwerk, administratief)</option><option value=\"2\" selected>Klasse 2 - Gemiddeld risico (advies, creatief)</option><option value=\"3\">Klasse 3 - Verhoogd risico (zorg, horeca)</option><option value=\"4\">Klasse 4 - Hoog risico (bouw, transport)</option></select><p class=\"calc-help\">Fysiek werk heeft een hoger risico en hogere premie</p></div><div class=\"calc-group\"><label class=\"calc-label\">Welke wachttijd wil je?</label><select id=\"waitingPeriod\" class=\"calc-select\"><option value=\"30\">1 maand (30 dagen)</option><option value=\"60\">2 maanden (60 dagen)</option><option value=\"90\" selected>3 maanden (90 dagen)</option><option value=\"180\">6 maanden (180 dagen)</option><option value=\"365\">1 jaar (365 dagen)</option></select><p class=\"calc-help\">Langere wachttijd = lagere premie. Dit is de periode voordat uitkering start.</p></div><div class=\"calc-group\"><label class=\"calc-label\">Tot welke leeftijd wil je verzekerd zijn?</label><select id=\"endAge\" class=\"calc-select\"><option value=\"65\">65 jaar (AOW-leeftijd min 2 jaar)</option><option value=\"67\" selected>67 jaar (AOW-leeftijd)</option></select></div><button id=\"calculateBtn\" class=\"calc-button\">Bereken premie</button><div id=\"errorMessage\" class=\"calc-error\" style=\"display:none;\"></div><div id=\"results\" class=\"calc-result-container\" style=\"display:none;\"><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"monthlyPremium\">€ 0</div><div class=\"calc-result-label\">Geschatte maandpremie</div><div class=\"calc-result-subtitle\">Bruto premie per maand</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"yearlyPremium\">€ 0</div><div class=\"calc-result-label\">Jaarpremie</div><div class=\"calc-result-subtitle\">Totale kosten per jaar</div></div><div class=\"calc-result-box\"><div class=\"calc-result-value\" id=\"insuredAmount\">€ 0</div><div class=\"calc-result-label\">Verzekerd bedrag</div><div class=\"calc-result-subtitle\">Maanduitkering bij arbeidsongeschiktheid</div></div><div class=\"calc-breakdown\"><h3>Details van je verzekering</h3><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Huidig maandinkomen</span><span class=\"calc-breakdown-value\" id=\"breakdownIncome\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Dekkingspercentage</span><span class=\"calc-breakdown-value\" id=\"breakdownCoverage\">0%</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Verzekerd bedrag per maand</span><span class=\"calc-breakdown-value\" id=\"breakdownInsured\">€ 0</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Leeftijd</span><span class=\"calc-breakdown-value\" id=\"breakdownAge\">0 jaar</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Beroepsklasse</span><span class=\"calc-breakdown-value\" id=\"breakdownRisk\">-</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Wachttijd</span><span class=\"calc-breakdown-value\" id=\"breakdownWaiting\">-</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Verzekerd tot leeftijd</span><span class=\"calc-breakdown-value\" id=\"breakdownEndAge\">0 jaar</span></div><div class=\"calc-breakdown-item\"><span class=\"calc-breakdown-label\">Premiepercentage</span><span class=\"calc-breakdown-value\" id=\"breakdownPercentage\">0%</span></div><div class=\"calc-breakdown-item\" style=\"margin-top:15px;padding-top:15px;border-top:2px solid #e5e7eb;font-weight:700;\"><span class=\"calc-breakdown-label\">Maandpremie</span><span class=\"calc-breakdown-value\" id=\"breakdownMonthly\">€ 0</span></div><div class=\"calc-breakdown-item\" style=\"font-weight:700;\"><span class=\"calc-breakdown-label\">Jaarpremie</span><span class=\"calc-breakdown-value\" id=\"breakdownYearly\">€ 0</span></div></div><div class=\"calc-help\" style=\"margin-top:20px;padding:15px;background:#eff6ff;border-radius:8px;\"><strong>Let op:</strong> Dit is een indicatieve berekening. De werkelijke premie kan afwijken en is afhankelijk van je gezondheid, medische keuring en de specifieke verzekeraar. Vraag altijd een persoonlijk advies aan.</div></div></div>",
    logic: "function initAOVCalculator(){const monthlyIncomeInput=document.getElementById('monthlyIncome');const coveragePercentageSelect=document.getElementById('coveragePercentage');const ageInput=document.getElementById('age');const riskClassSelect=document.getElementById('riskClass');const waitingPeriodSelect=document.getElementById('waitingPeriod');const endAgeSelect=document.getElementById('endAge');const calculateBtn=document.getElementById('calculateBtn');const errorMessage=document.getElementById('errorMessage');const resultsDiv=document.getElementById('results');function showError(message){errorMessage.textContent=message;errorMessage.style.display='block';resultsDiv.style.display='none';}function hideError(){errorMessage.style.display='none';}function formatCurrency(amount){return '€ '+amount.toLocaleString('nl-NL',{minimumFractionDigits:2,maximumFractionDigits:2});}function formatNumber(number){return number.toLocaleString('nl-NL');}function calculatePremium(){hideError();const monthlyIncome=parseFloat(monthlyIncomeInput.value);const coveragePercentage=parseInt(coveragePercentageSelect.value);const age=parseInt(ageInput.value);const riskClass=parseInt(riskClassSelect.value);const waitingPeriod=parseInt(waitingPeriodSelect.value);const endAge=parseInt(endAgeSelect.value);if(!monthlyIncome||monthlyIncome<=0){showError('Vul een geldig maandinkomen in.');return;}if(!age||age<18||age>67){showError('Vul een geldige leeftijd in tussen 18 en 67 jaar.');return;}if(age>=endAge){showError('Je huidige leeftijd moet lager zijn dan de eindleeftijd van de verzekering.');return;}const insuredAmount=monthlyIncome*(coveragePercentage/100);let basePremiumPercentage=2.5;const ageFactors={18:0.6,25:0.7,30:0.8,35:1.0,40:1.2,45:1.5,50:2.0,55:2.8,60:3.5,65:4.5};let ageFactor=1.0;if(age<25){ageFactor=0.7;}else if(age<30){ageFactor=0.8;}else if(age<35){ageFactor=1.0;}else if(age<40){ageFactor=1.2;}else if(age<45){ageFactor=1.5;}else if(age<50){ageFactor=2.0;}else if(age<55){ageFactor=2.8;}else if(age<60){ageFactor=3.5;}else{ageFactor=4.5;}const riskFactors={1:0.8,2:1.0,3:1.4,4:1.8};const riskFactor=riskFactors[riskClass]||1.0;const waitingFactors={30:1.5,60:1.2,90:1.0,180:0.8,365:0.6};const waitingFactor=waitingFactors[waitingPeriod]||1.0;const endAgeFactors={65:0.9,67:1.0};const endAgeFactor=endAgeFactors[endAge]||1.0;const totalPremiumPercentage=basePremiumPercentage*ageFactor*riskFactor*waitingFactor*endAgeFactor;const monthlyPremium=insuredAmount*(totalPremiumPercentage/100);const yearlyPremium=monthlyPremium*12;document.getElementById('monthlyPremium').textContent=formatCurrency(monthlyPremium);document.getElementById('yearlyPremium').textContent=formatCurrency(yearlyPremium);document.getElementById('insuredAmount').textContent=formatCurrency(insuredAmount);document.getElementById('breakdownIncome').textContent=formatCurrency(monthlyIncome);document.getElementById('breakdownCoverage').textContent=coveragePercentage+'%';document.getElementById('breakdownInsured').textContent=formatCurrency(insuredAmount);document.getElementById('breakdownAge').textContent=age+' jaar';const riskLabels={1:'Klasse 1 - Laag risico',2:'Klasse 2 - Gemiddeld risico',3:'Klasse 3 - Verhoogd risico',4:'Klasse 4 - Hoog risico'};document.getElementById('breakdownRisk').textContent=riskLabels[riskClass];const waitingLabels={30:'1 maand',60:'2 maanden',90:'3 maanden',180:'6 maanden',365:'1 jaar'};document.getElementById('breakdownWaiting').textContent=waitingLabels[waitingPeriod];document.getElementById('breakdownEndAge').textContent=endAge+' jaar';document.getElementById('breakdownPercentage').textContent=totalPremiumPercentage.toFixed(2)+'%';document.getElementById('breakdownMonthly').textContent=formatCurrency(monthlyPremium);document.getElementById('breakdownYearly').textContent=formatCurrency(yearlyPremium);resultsDiv.style.display='block';}calculateBtn.addEventListener('click',calculatePremium);monthlyIncomeInput.addEventListener('keypress',function(e){if(e.key==='Enter'){calculatePremium();}});ageInput.addEventListener('keypress',function(e){if(e.key==='Enter'){calculatePremium();}});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initAOVCalculator);}else{initAOVCalculator();}",
    styles: ""
  },

    content: {
    howToUse: {
          "title": "Bereken uw AOV als ZZP'er",
          "description": "Ontdek snel uw premie voor arbeidsongeschiktheidsverzekering.",
          "steps": [
                {
                      "step": 1,
                      "title": "Voer uw gegevens in",
                      "description": "Vul uw leeftijd, inkomen en beroep in."
                },
                {
                      "step": 2,
                      "title": "Kies dekking en looptijd",
                      "description": "Selecteer gewenste dekking en verzekeringstermijn."
                },
                {
                      "step": 3,
                      "title": "Bekijk uw premie",
                      "description": "Bereken direct uw maandelijkse premiekosten."
                },
                {
                      "step": 4,
                      "title": "Vergelijk en beslis",
                      "description": "Overweeg opties en kies de beste verzekering."
                }
          ]
    },
    examples: [
          {
                "title": "Jonas de grafisch ontwerper",
                "description": "Jonas, 35 jaar, verdient €50.000 per jaar.",
                "input": {
                      "leeftijd": "35",
                      "inkomen": "€50.000",
                      "beroep": "Grafisch ontwerper",
                      "dekking": "€30.000 per jaar",
                      "looptijd": "tot 67 jaar"
                },
                "output": "Maandelijkse premie van €150",
                "explanation": "Door zijn relatief jonge leeftijd en inkomen is de premie lager."
          },
          {
                "title": "Marijke de freelance tekstschrijver",
                "description": "Marijke, 45 jaar, met een inkomen van €75.000.",
                "input": {
                      "leeftijd": "45",
                      "inkomen": "€75.000",
                      "beroep": "Freelance tekstschrijver",
                      "dekking": "€50.000 per jaar",
                      "looptijd": "tot 67 jaar"
                },
                "output": "Maandelijkse premie van €275",
                "explanation": "Hoger inkomen en leeftijd leiden tot een hogere premie."
          },
          {
                "title": "Karel de zelfstandige schilder",
                "description": "Karel, 50 jaar, werkt voor €60/uur.",
                "input": {
                      "leeftijd": "50",
                      "inkomen": "€60 per uur",
                      "beroep": "Schilder",
                      "dekking": "€40.000 per jaar",
                      "looptijd": "tot 67 jaar"
                },
                "output": "Maandelijkse premie van €320",
                "explanation": "Fysiek beroep en hogere leeftijd verhogen de premie."
          }
    ],
    faqs: [
          {
                "question": "Hoe bereken ik mijn AOV-premie als ZZP'er?",
                "answer": "Vul uw leeftijd, inkomen en beroep in op een vergelijkingssite voor een nauwkeurige premie."
          },
          {
                "question": "Welke factoren beïnvloeden de premiehoogte?",
                "answer": "Leeftijd, beroep, inkomen en gewenste dekking spelen een grote rol in de premiehoogte."
          },
          {
                "question": "Is een AOV verplicht voor ZZP'ers?",
                "answer": "Nee, een arbeidsongeschiktheidsverzekering is niet verplicht, maar wel sterk aanbevolen."
          },
          {
                "question": "Waar moet ik op letten bij het kiezen van een AOV?",
                "answer": "Let op de dekking, looptijd, wachttijd en uitsluitingen bij het kiezen van een AOV."
          },
          {
                "question": "Kan ik mijn AOV-premie fiscaal aftrekken?",
                "answer": "Ja, de premie voor een arbeidsongeschiktheidsverzekering is fiscaal aftrekbaar als bedrijfskosten."
          },
          {
                "question": "Wat gebeurt er als ik mijn premie niet kan betalen?",
                "answer": "Bij betalingsproblemen is het belangrijk om contact op te nemen met uw verzekeraar om oplossingen te bespreken."
          }
    ],
    additionalInfo: {
          "title": "Belang van AOV voor ZZP'ers",
          "content": "Een arbeidsongeschiktheidsverzekering (AOV) beschermt uw inkomen bij ziekte. Hoewel niet verplicht, biedt het financiële zekerheid. Let op de dekking en premieaftrekbaarheid bij de Belastingdienst. Kies een AOV die past bij uw persoonlijke en zakelijke situatie."
    }
  },


  generatedAt: '2025-10-30T15:15:23.085Z',
  version: '1.0.0'
}
