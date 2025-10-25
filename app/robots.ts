import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/keywords/', '/private/'],
    },
    sitemap: 'https://pengekalkulator.com/sitemap.xml',
  }
}
