import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">ZZP Bereken</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professionele rekentools voor ZZP'ers en kleine ondernemers in Nederland.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Populaire Calculators</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#calculators" className="text-gray-400 hover:text-primary-400 transition-colors">BTW Berekenen</Link></li>
              <li><Link href="/#calculators" className="text-gray-400 hover:text-primary-400 transition-colors">Uurloon Calculator</Link></li>
              <li><Link href="/#calculators" className="text-gray-400 hover:text-primary-400 transition-colors">Inkomstenbelasting</Link></li>
              <li><Link href="/#calculators" className="text-gray-400 hover:text-primary-400 transition-colors">Bekijk alle calculators →</Link></li>
            </ul>
          </div>

          {/* Categorieën */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Categorieën</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/categorie/belasting" className="text-gray-400 hover:text-primary-400 transition-colors">Belasting</Link></li>
              <li><Link href="/categorie/zzp-administratie" className="text-gray-400 hover:text-primary-400 transition-colors">ZZP Administratie</Link></li>
              <li><Link href="/categorie/financien" className="text-gray-400 hover:text-primary-400 transition-colors">Financiën</Link></li>
              <li><Link href="/categorie/wiskunde" className="text-gray-400 hover:text-primary-400 transition-colors">Wiskunde</Link></li>
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Informatie</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/over-ons" className="text-gray-400 hover:text-primary-400 transition-colors">Over ZZP Bereken</Link></li>
              <li><Link href="/over-ons#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/privacybeleid" className="text-gray-400 hover:text-primary-400 transition-colors">Privacybeleid</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors">Cookiebeleid</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} ZZP Bereken. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>🇳🇱 Nederland</span>
              <span>•</span>
              <span>Nederlandse wetgeving</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
