'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { categories } from '@/lib/categories'
import { keywordsConfig } from '@/scripts/keywords-config'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [calculatorsOpen, setCalculatorsOpen] = useState(false)
  const [existingCalculators, setExistingCalculators] = useState<typeof keywordsConfig>([])
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const calcCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadCalculators = async () => {
      try {
        const response = await fetch('/calculators-list.json')
        const calculators = await response.json()
        setExistingCalculators(calculators)
      } catch (error) {
        console.error('Error loading calculators list:', error)
        // Fallback: usar todas las calculadoras del config
        setExistingCalculators(keywordsConfig)
      }
    }
    loadCalculators()
  }, [])

  const latestCalculators = [...existingCalculators]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5)

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setCategoriesOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCategoriesOpen(false)
    }, 150)
  }

  const handleCalcMouseEnter = () => {
    if (calcCloseTimeoutRef.current) {
      clearTimeout(calcCloseTimeoutRef.current)
      calcCloseTimeoutRef.current = null
    }
    setCalculatorsOpen(true)
  }

  const handleCalcMouseLeave = () => {
    calcCloseTimeoutRef.current = setTimeout(() => {
      setCalculatorsOpen(false)
    }, 150)
  }

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
                ZZP<span className="text-primary-600">Bereken</span>
              </div>
              <div className="hidden sm:block text-xs text-gray-500 font-medium">Professioneel rekenen</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all">
              Home
            </Link>

            {/* Calculators Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleCalcMouseEnter}
              onMouseLeave={handleCalcMouseLeave}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all inline-flex items-center">
                Calculators
                <svg className={`ml-1 w-4 h-4 transition-transform ${calculatorsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {calculatorsOpen && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-xl border border-gray-200 py-2">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nieuwste Calculators</div>
                  </div>
                  {latestCalculators.map((calc) => (
                    <Link
                      key={calc.id}
                      href={calc.url}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all border-b border-gray-100 last:border-b-0"
                    >
                      <div className="font-semibold">{calc.keyword}</div>
                      <div className="mt-1">
                        <span className="text-xs text-gray-500">{calc.category}</span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/bereken"
                    className="block px-4 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-all border-t border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <span>Bekijk alle calculators</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all inline-flex items-center">
                Categorieën
                <svg className={`ml-1 w-4 h-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-200 py-2">
                  {Object.values(categories).map((category) => (
                    <Link
                      key={category.slug}
                      href={`/categorie/${category.slug}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
                    >
                      <div className="font-semibold">{category.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{category.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#features" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all">
              Voordelen
            </Link>
            <a href="#calculators" className="ml-4 px-6 py-2.5 bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all">
              Aan de slag
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
                Home
              </Link>

              {/* Calculators in mobile */}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Nieuwste Calculators</div>
                {latestCalculators.map((calc) => (
                  <Link
                    key={calc.id}
                    href={calc.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all"
                  >
                    <div className="font-medium">{calc.keyword}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{calc.category}</div>
                  </Link>
                ))}
                <Link
                  href="/bereken"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 mt-2 text-sm font-semibold text-primary-600 hover:bg-primary-50 transition-all"
                >
                  Bekijk alle calculators →
                </Link>
              </div>

              {/* Categories in mobile */}
              <div className="px-4 py-2">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categorieën</div>
                {Object.values(categories).map((category) => (
                  <Link
                    key={category.slug}
                    href={`/categorie/${category.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all"
              >
                Voordelen
              </Link>
              <a
                href="#calculators"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition-all text-center"
              >
                Aan de slag
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
