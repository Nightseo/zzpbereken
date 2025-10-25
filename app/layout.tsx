import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://pengekalkulator.com'),
  title: {
    default: 'PengeKalkulator - Gratis Beregningsværktøjer til Forretning og Økonomi',
    template: '%s'
  },
  description: 'Omfattende samling af gratis online kalkulatorer til forretning, økonomi og finans. Hurtige, præcise beregninger for danske virksomheder og privatpersoner.',
  keywords: ['kalkulator', 'beregner', 'økonomi', 'finans', 'forretning', 'Danmark', 'gratis'],
  authors: [{ name: 'PengeKalkulator' }],
  creator: 'PengeKalkulator',
  publisher: 'PengeKalkulator',
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
    locale: 'da_DK',
    url: 'https://pengekalkulator.com',
    siteName: 'PengeKalkulator',
    title: 'PengeKalkulator - Gratis Beregningsværktøjer',
    description: 'Omfattende samling af gratis online kalkulatorer til forretning, økonomi og finans.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PengeKalkulator - Gratis Beregningsværktøjer',
    description: 'Omfattende samling af gratis online kalkulatorer til forretning, økonomi og finans.',
  },
  alternates: {
    canonical: 'https://pengekalkulator.com',
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
    <html lang="da">
      <body className="antialiased bg-white text-gray-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
