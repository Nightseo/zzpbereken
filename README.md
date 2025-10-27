# ZZP Bereken

A modern, SEO-optimized website for Dutch ZZP (freelancer/self-employed) calculators built with Next.js 14.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully SEO optimized with metadata API
- ✅ Automatic sitemap generation
- ✅ robots.txt configuration
- ✅ PWA manifest
- ✅ Static generation for best performance
- ✅ Responsive design
- ✅ Purple and white minimalist theme

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /bereken/[slug]     - Individual calculator pages
  layout.tsx          - Root layout with SEO metadata
  page.tsx            - Homepage
  sitemap.ts          - Auto-generated sitemap
  robots.ts           - Robots.txt configuration
  manifest.ts         - PWA manifest

/components
  Header.tsx          - Site header
  Footer.tsx          - Site footer
  CalculatorCard.tsx  - Calculator card component
  CalculatorLayout.tsx - Layout for calculator pages

/lib
  calculators.ts      - Calculator data and types
```

## Adding New Calculators

1. Add calculator data to `/lib/calculators.ts`
2. The page will automatically generate routes for all calculators
3. Customize the calculator template in `/app/bereken/[slug]/page.tsx`

## SEO Optimization

- Metadata API for dynamic meta tags
- Automatic sitemap generation
- Structured data ready
- Semantic HTML
- Fast page loads with static generation
- Mobile-optimized

## Customization

- Colors: Edit `/tailwind.config.ts`
- Styles: Edit `/app/globals.css`
- Calculators: Edit `/lib/calculators.ts`
