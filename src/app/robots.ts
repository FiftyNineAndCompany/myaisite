import { MetadataRoute } from 'next'
// ADD THIS EXACT LINE to satisfy the Next.js static compiler:
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://saitechverse.com/sitemap.xml',
  }
}