import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ZZP Bereken - Gratis Rekentools voor ZZP\'ers',
    short_name: 'ZZP Bereken',
    description: 'Uitgebreide verzameling gratis online calculators voor ZZP\'ers, belastingen en financiën',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#EA580C',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
