import { CalculatorData } from '@/types/calculator'

/**
 * EJEMPLO DE ESTRUCTURA DE DATOS DE CALCULADORA
 * Este archivo muestra cómo debe estructurarse cada calculadora generada
 */

export const procentCalculatorData: CalculatorData = {
  slug: 'procent',

  // Metadata SEO - Generado por OpenAI
  metadata: {
    title: 'Procent Beregner - Beregn Procentdel, Stigning og Forskel',
    description: 'Gratis procent beregner til hurtige og præcise procentberegninger. Beregn procentdel, procentvis stigning, rabat og forskel i procent.',
    excerpt: 'Professionel procent beregner til alle typer procentberegninger. Hurtig, præcis og nem at bruge.',
    canonical: '/beregn/procent',
    keywords: [
      'beregn procent',
      'procentvis stigning',
      'beregn procent af beløb',
      'procent forskel',
      'rabat i procent'
    ],
    category: 'Matematik & Finans'
  },

  // Código de calculadora - Generado por Claude
  calculator: {
    html: `
      <div class="calc-container">
        <!-- Selector de tipo de cálculo -->
        <div class="calc-group">
          <label class="calc-label">Vælg beregningstype</label>
          <select id="calc-type" class="calc-select">
            <option value="percentage">Beregn procent af et beløb</option>
            <option value="increase">Beregn procentvis stigning</option>
            <option value="decrease">Beregn procentvis fald</option>
            <option value="difference">Beregn forskel i procent</option>
          </select>
        </div>

        <!-- Input dinámico basado en tipo -->
        <div id="calc-inputs"></div>

        <!-- Botón de cálculo -->
        <button id="calc-button" class="calc-button">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span>Beregn</span>
        </button>

        <!-- Resultados -->
        <div id="calc-result" class="calc-result-container hidden">
          <h3 class="calc-result-title">Resultat</h3>
          <div class="calc-result-box">
            <div class="calc-result-label">Beregnet værdi</div>
            <div id="result-value" class="calc-result-value">0</div>
            <div id="result-subtitle" class="calc-result-subtitle"></div>
          </div>

          <!-- Breakdown opcional -->
          <div id="calc-breakdown" class="calc-breakdown hidden">
            <div class="calc-breakdown-title">Beregning i detaljer</div>
            <div id="breakdown-content"></div>
          </div>
        </div>
      </div>
    `,

    logic: `
      // Variables globales
      let calcType = 'percentage';

      // Renderizar inputs según tipo de cálculo
      function renderInputs(type) {
        const container = document.getElementById('calc-inputs');
        let html = '';

        switch(type) {
          case 'percentage':
            html = \`
              <div class="calc-group">
                <label class="calc-label">Beløb</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="amount" class="calc-input" placeholder="0.00" />
                  <div class="calc-input-suffix">kr</div>
                </div>
              </div>
              <div class="calc-group">
                <label class="calc-label">Procent</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="percentage" class="calc-input" placeholder="0" />
                  <div class="calc-input-suffix">%</div>
                </div>
              </div>
            \`;
            break;

          case 'increase':
          case 'decrease':
            html = \`
              <div class="calc-group">
                <label class="calc-label">Oprindeligt beløb</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="original" class="calc-input" placeholder="0.00" />
                  <div class="calc-input-suffix">kr</div>
                </div>
              </div>
              <div class="calc-group">
                <label class="calc-label">Procent</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="percentage" class="calc-input" placeholder="0" />
                  <div class="calc-input-suffix">%</div>
                </div>
              </div>
            \`;
            break;

          case 'difference':
            html = \`
              <div class="calc-group">
                <label class="calc-label">Oprindeligt beløb</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="original" class="calc-input" placeholder="0.00" />
                  <div class="calc-input-suffix">kr</div>
                </div>
              </div>
              <div class="calc-group">
                <label class="calc-label">Nyt beløb</label>
                <div class="calc-input-wrapper">
                  <input type="number" id="newAmount" class="calc-input" placeholder="0.00" />
                  <div class="calc-input-suffix">kr</div>
                </div>
              </div>
            \`;
            break;
        }

        container.innerHTML = html;
      }

      // Función de cálculo
      function calculate() {
        const resultDiv = document.getElementById('calc-result');
        const resultValue = document.getElementById('result-value');
        const resultSubtitle = document.getElementById('result-subtitle');
        const breakdownDiv = document.getElementById('calc-breakdown');
        const breakdownContent = document.getElementById('breakdown-content');

        let result = 0;
        let subtitle = '';
        let breakdown = '';

        try {
          switch(calcType) {
            case 'percentage': {
              const amount = parseFloat(document.getElementById('amount').value);
              const percentage = parseFloat(document.getElementById('percentage').value);

              result = (amount * percentage) / 100;
              subtitle = \`\${percentage}% af \${amount.toLocaleString('da-DK')} kr\`;

              breakdown = \`
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Beløb:</span>
                  <span class="calc-breakdown-value">\${amount.toLocaleString('da-DK')} kr</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Procent:</span>
                  <span class="calc-breakdown-value">\${percentage}%</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Beregning:</span>
                  <span class="calc-breakdown-value">\${amount} × \${percentage} ÷ 100</span>
                </div>
              \`;
              break;
            }

            case 'increase': {
              const original = parseFloat(document.getElementById('original').value);
              const percentage = parseFloat(document.getElementById('percentage').value);

              result = original + (original * percentage / 100);
              subtitle = \`Efter \${percentage}% stigning\`;

              breakdown = \`
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Oprindeligt beløb:</span>
                  <span class="calc-breakdown-value">\${original.toLocaleString('da-DK')} kr</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Stigning:</span>
                  <span class="calc-breakdown-value">\${((original * percentage) / 100).toLocaleString('da-DK')} kr (\${percentage}%)</span>
                </div>
              \`;
              break;
            }

            case 'decrease': {
              const original = parseFloat(document.getElementById('original').value);
              const percentage = parseFloat(document.getElementById('percentage').value);

              result = original - (original * percentage / 100);
              subtitle = \`Efter \${percentage}% fald\`;

              breakdown = \`
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Oprindeligt beløb:</span>
                  <span class="calc-breakdown-value">\${original.toLocaleString('da-DK')} kr</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Fald:</span>
                  <span class="calc-breakdown-value">\${((original * percentage) / 100).toLocaleString('da-DK')} kr (\${percentage}%)</span>
                </div>
              \`;
              break;
            }

            case 'difference': {
              const original = parseFloat(document.getElementById('original').value);
              const newAmount = parseFloat(document.getElementById('newAmount').value);

              const diff = newAmount - original;
              result = (diff / original) * 100;
              subtitle = diff > 0 ? 'Stigning i procent' : 'Fald i procent';

              breakdown = \`
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Oprindeligt:</span>
                  <span class="calc-breakdown-value">\${original.toLocaleString('da-DK')} kr</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Nyt:</span>
                  <span class="calc-breakdown-value">\${newAmount.toLocaleString('da-DK')} kr</span>
                </div>
                <div class="calc-breakdown-item">
                  <span class="calc-breakdown-label">Forskel:</span>
                  <span class="calc-breakdown-value">\${diff.toLocaleString('da-DK')} kr</span>
                </div>
              \`;
              break;
            }
          }

          // Mostrar resultado
          resultValue.textContent = calcType === 'difference'
            ? \`\${result.toFixed(2)}%\`
            : \`\${result.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} kr\`;

          resultSubtitle.textContent = subtitle;
          breakdownContent.innerHTML = breakdown;

          resultDiv.classList.remove('hidden');
          breakdownDiv.classList.remove('hidden');

        } catch(error) {
          console.error('Calculation error:', error);
        }
      }

      // Event listeners
      document.addEventListener('DOMContentLoaded', function() {
        const typeSelect = document.getElementById('calc-type');
        const calcButton = document.getElementById('calc-button');

        // Renderizar inputs iniciales
        renderInputs(calcType);

        // Cambio de tipo
        typeSelect.addEventListener('change', function(e) {
          calcType = e.target.value;
          renderInputs(calcType);
          document.getElementById('calc-result').classList.add('hidden');
        });

        // Botón de cálculo
        calcButton.addEventListener('click', calculate);
      });
    `,

    styles: '' // Estilos adicionales opcionales
  },

  // Contenido - Generado por OpenAI
  content: {
    howToUse: {
      title: 'Sådan bruges procent beregneren',
      description: 'Vores procent beregner gør det nemt at beregne alle typer procentberegninger. Følg disse simple trin:',
      steps: [
        {
          step: 1,
          title: 'Vælg beregningstype',
          description: 'Vælg hvilken type procentberegning du ønsker: procent af beløb, stigning, fald eller forskel.'
        },
        {
          step: 2,
          title: 'Indtast værdier',
          description: 'Udfyld de nødvendige felter med dine tal. Brug punktum (.) som decimalseparator.'
        },
        {
          step: 3,
          title: 'Beregn',
          description: 'Klik på "Beregn" knappen for at se resultatet. Du får både det endelige resultat og en detaljeret beregning.'
        }
      ]
    },

    examples: [
      {
        title: 'Beregn rabat',
        description: 'Du skal finde ud af hvor meget 25% rabat er på en vare til 1.200 kr',
        input: {
          type: 'percentage',
          amount: 1200,
          percentage: 25
        },
        output: '300 kr',
        explanation: 'En rabat på 25% af 1.200 kr er 300 kr. Den endelige pris bliver derfor 900 kr.'
      },
      {
        title: 'Beregn prisstigning',
        description: 'En vare kostede 500 kr sidste år. I år koster den 575 kr. Hvad er stigningen i procent?',
        input: {
          type: 'difference',
          original: 500,
          newAmount: 575
        },
        output: '15%',
        explanation: 'Prisen er steget med 75 kr, hvilket svarer til 15% stigning.'
      }
    ],

    faqs: [
      {
        question: 'Hvordan beregner jeg procent af et beløb?',
        answer: 'For at beregne procent af et beløb skal du gange beløbet med procenten og derefter dividere med 100. Eksempel: 20% af 500 kr = (500 × 20) ÷ 100 = 100 kr.'
      },
      {
        question: 'Hvad er forskellen mellem procentvis stigning og fald?',
        answer: 'Procentvis stigning tilføjer en procentdel til det oprindelige beløb, mens procentvis fald trækker en procentdel fra. Begge bruger samme formel, men med modsat fortegn.'
      },
      {
        question: 'Kan jeg beregne moms med denne kalkulator?',
        answer: 'Ja, dansk moms er 25%, så du kan bruge "procent af beløb" funktionen til at beregne moms. For at tilføje moms, beregn 25% og læg det til det oprindelige beløb.'
      }
    ],

    additionalInfo: {
      title: 'Om procentberegninger',
      content: 'Procentberegninger er essentielle i mange daglige situationer som rabatter, renter, skatteberegninger og prisændringer. Vores kalkulator gør det nemt at få præcise resultater uden at skulle huske formlerne.'
    }
  },

  generatedAt: '2025-10-25T00:00:00.000Z',
  version: '1.0.0'
}
