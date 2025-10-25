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
              <span className="text-lg font-bold text-white">PengeKalkulator</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professionelle beregningsværktøjer til danske virksomheder og privatpersoner.
            </p>
          </div>

          {/* Kalkulatorer */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Populære Kalkulatorer</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/beregn/procent" className="text-gray-400 hover:text-primary-400 transition-colors">Procent Beregner</Link></li>
              <li><Link href="/beregn/indlaansrente" className="text-gray-400 hover:text-primary-400 transition-colors">Indlånsrente</Link></li>
              <li><Link href="/beregn/nutidsvaerdi" className="text-gray-400 hover:text-primary-400 transition-colors">Nutidsværdi</Link></li>
              <li><Link href="/#kalkulatorer" className="text-gray-400 hover:text-primary-400 transition-colors">Se alle kalkulatorer →</Link></li>
            </ul>
          </div>

          {/* Kategorier */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Kategorier</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/kategori/lon-skat" className="text-gray-400 hover:text-primary-400 transition-colors">Løn & Skat</Link></li>
              <li><Link href="/kategori/forretning" className="text-gray-400 hover:text-primary-400 transition-colors">Forretning</Link></li>
              <li><Link href="/kategori/investering-opsparing" className="text-gray-400 hover:text-primary-400 transition-colors">Investering & Opsparing</Link></li>
              <li><Link href="/kategori/matematik" className="text-gray-400 hover:text-primary-400 transition-colors">Matematik</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">Information</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#features" className="text-gray-400 hover:text-primary-400 transition-colors">Om PengeKalkulator</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">Kontakt os</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">Privatlivspolitik</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors">Vilkår & Betingelser</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} PengeKalkulator. Alle rettigheder forbeholdes.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>🇩🇰 Danmark</span>
              <span>•</span>
              <span>Dansk lovgivning</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
