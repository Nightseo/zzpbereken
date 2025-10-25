import { MetadataRoute } from 'next'
import { getGeneratedCalculators } from '@/lib/generated-calculators'
import { getAllCategorySlugs } from '@/lib/categories'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pengekalkulator.com'

  // Get all generated calculators dynamically
  const calculators = await getGeneratedCalculators()
  const calculatorSlugs = Object.keys(calculators)

  // Get all category slugs
  const categorySlugs = getAllCategorySlugs()

  // Calculator URLs
  const calculatorUrls = calculatorSlugs.map((slug) => ({
    url: `${baseUrl}/beregn/${slug}`,
    lastModified: new Date(calculators[slug].generatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Category URLs
  const categoryUrls = categorySlugs.map((slug) => ({
    url: `${baseUrl}/kategori/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryUrls,
    ...calculatorUrls,
  ]
}
