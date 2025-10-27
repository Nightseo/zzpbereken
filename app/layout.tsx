import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://zzpbereken.com'),
  title: {
    default: 'ZZP Bereken - Gratis Rekentools voor ZZP\'ers en Ondernemers',
    template: '%s'
  },
  description: 'Uitgebreide verzameling gratis online calculators voor bedrijf, financiën en administratie. Snelle, nauwkeurige berekeningen voor ZZP\'ers en kleine ondernemers.',
  keywords: ['calculator', 'rekenmachine', 'ZZP', 'zzp\'er', 'BTW', 'uurloon', 'inkomstenbelasting', 'Nederland', 'gratis'],
  authors: [{ name: 'ZZP Bereken' }],
  creator: 'ZZP Bereken',
  publisher: 'ZZP Bereken',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://zzpbereken.com',
    siteName: 'ZZP Bereken',
    title: 'ZZP Bereken - Gratis Rekentools voor ZZP\'ers',
    description: 'Uitgebreide verzameling gratis online calculators voor bedrijf, financiën en administratie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZZP Bereken - Gratis Rekentools voor ZZP\'ers',
    description: 'Uitgebreide verzameling gratis online calculators voor bedrijf, financiën en administratie.',
  },
  alternates: {
    canonical: 'https://zzpbereken.com',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
