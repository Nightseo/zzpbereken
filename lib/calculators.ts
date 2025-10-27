/**
 * Type definition for legacy Calculator interface
 * Note: This project now uses dynamically generated calculators from /calculators-data
 * This type is kept for backwards compatibility with CalculatorCard component
 */
export interface Calculator {
  id: string
  title: string
  description: string
  category: string
  icon: string
  slug: string
}
