import { ReactNode } from 'react'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface CalculatorLayoutProps {
  title: string
  description: string
  category: string
  icon: string
  children: ReactNode
}

export default function CalculatorLayout({
  title,
  description,
  category,
  icon,
  children,
}: CalculatorLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600 transition-colors">Forside</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/#kalkulatorer" className="hover:text-primary-600 transition-colors">Kalkulatorer</Link>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
        </div>

        {/* Calculator Header */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
              {category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Calculator Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
