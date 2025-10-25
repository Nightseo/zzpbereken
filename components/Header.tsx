'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-base md:text-xl font-bold text-gray-900 tracking-tight truncate">
                Penge<span className="text-primary-600">Kalkulator</span>
              </div>
              <div className="hidden sm:block text-xs text-gray-500 font-medium">Professionel beregning</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all">
              Forside
            </Link>
            <Link href="/#kalkulatorer" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all">
              Kalkulatorer
            </Link>
            <Link href="/#features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all">
              Fordele
            </Link>
            <a href="#kalkulatorer" className="ml-4 px-6 py-2.5 bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all">
              Kom i gang
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all"
              >
                Forside
              </Link>
              <Link
                href="/#kalkulatorer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all"
              >
                Kalkulatorer
              </Link>
              <Link
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all"
              >
                Fordele
              </Link>
              <a
                href="#kalkulatorer"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all text-center"
              >
                Kom i gang
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
