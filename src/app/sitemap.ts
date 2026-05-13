import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saitechverse.com'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/navjobportal`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.5 },

    // Match your TECH_SERVICES
    { url: `${baseUrl}/services/it-staffing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/software-testing`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/it-ai-development`, lastModified, changeFrequency: 'weekly', priority: 0.9 },

    // Match your UTILITY_SERVICES
    { url: `${baseUrl}/services/bpo-solutions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/plagiarism-express`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}