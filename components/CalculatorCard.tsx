import Link from 'next/link'
import { Calculator } from '@/lib/calculators'

interface CalculatorCardProps {
  calculator: Calculator
}

export default function CalculatorCard({ calculator }: CalculatorCardProps) {
  return (
    <Link href={`/beregn/${calculator.slug}`}>
      <article className="bg-white border border-gray-200 p-6 h-full hover:border-primary-600 hover:shadow-md transition-all group">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="text-xs font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 py-1">
              {calculator.category}
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {calculator.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
            {calculator.description}
          </p>

          <div className="flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors pt-4 border-t border-gray-100">
            <span>Åbn beregner</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
