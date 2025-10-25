export interface Calculator {
  id: string
  title: string
  description: string
  category: string
  icon: string
  slug: string
}

export const calculators: Calculator[] = [
  {
    id: '1',
    title: 'Moms Beregner',
    description: 'Beregn moms hurtigt og præcist. Tilføj eller fjern moms fra et beløb.',
    category: 'Skat & Afgifter',
    icon: '💰',
    slug: 'moms-beregner',
  },
  {
    id: '2',
    title: 'Rente Beregner',
    description: 'Beregn renters rente, lånomkostninger og investeringsafkast.',
    category: 'Finans',
    icon: '📈',
    slug: 'rente-beregner',
  },
  {
    id: '3',
    title: 'Løn Beregner',
    description: 'Beregn nettoløn efter skat, AM-bidrag og fradrag.',
    category: 'Løn & HR',
    icon: '💼',
    slug: 'lon-beregner',
  },
  {
    id: '4',
    title: 'Budget Beregner',
    description: 'Lav et detaljeret budget for privat eller virksomhed.',
    category: 'Økonomi',
    icon: '📊',
    slug: 'budget-beregner',
  },
  {
    id: '5',
    title: 'Afskrivning Beregner',
    description: 'Beregn afskrivninger på aktiver efter danske regler.',
    category: 'Regnskab',
    icon: '🔢',
    slug: 'afskrivning-beregner',
  },
  {
    id: '6',
    title: 'ROI Beregner',
    description: 'Beregn Return on Investment for dine projekter.',
    category: 'Investering',
    icon: '💹',
    slug: 'roi-beregner',
  },
  {
    id: '7',
    title: 'Pension Beregner',
    description: 'Beregn din fremtidige pension og opsparingsbehov.',
    category: 'Pension',
    icon: '🏦',
    slug: 'pension-beregner',
  },
  {
    id: '8',
    title: 'Dækningsbidrag Beregner',
    description: 'Beregn dækningsbidrag og break-even point.',
    category: 'Forretning',
    icon: '📉',
    slug: 'daekningsbidrag-beregner',
  },
  {
    id: '9',
    title: 'Valuta Beregner',
    description: 'Konverter mellem danske kroner og udenlandsk valuta.',
    category: 'Valuta',
    icon: '💱',
    slug: 'valuta-beregner',
  },
]

export const categories = Array.from(new Set(calculators.map(c => c.category)))
