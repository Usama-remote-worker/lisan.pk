import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'
import { cities, services } from '@/data/location-services'
import { universities } from '@/data/scholarship-universities'
import { turkeyUniversities } from '@/data/turkey-universities'

export const baseUrl = 'https://www.lisan.pk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/services',
        '/services/translation',
        '/services/attestation',
        '/services/document',
        '/services/translation/nikah-nama-marriage-certificate',
        '/services/translation/birth-certificate-translation',
        '/services/translation/academic-degree-transcript',
        '/services/translation/police-character-certificate',
        '/services/translation/iata-dts-umrah-travel-agency',
        '/services/translation/urdu-to-english-translation',
        '/consultancy/saudi-scholarship',
        '/study-in-turkey',
        '/directory',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: ((route === '' || route.startsWith('/services') || route === '/study-in-turkey') ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1.0 : (route.startsWith('/services') || route === '/study-in-turkey') ? 0.9 : 0.8,
    }))

    const locationRoutes: MetadataRoute.Sitemap = []

    // Generate main city routes — boosted to 0.85 (key landing pages)
    Object.keys(cities).forEach(city => {
        locationRoutes.push({
            url: `${baseUrl}/locations/${city}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.85
        })

        // Generate city-service specific routes — boosted to 0.75
        Object.keys(services).forEach(service => {
            locationRoutes.push({
                url: `${baseUrl}/locations/${city}/${service}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.75
            })
        })
    })

    // Scholarship pages — boosted to 0.9 (high-authority conversion pages)
    const scholarshipRoutes = Object.keys(universities).map(slug => ({
        url: `${baseUrl}/scholarships/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.9
    }))

    // Turkey pages — boosted to 0.9 (high-authority conversion pages)
    const turkeyRoutes = Object.keys(turkeyUniversities).map(slug => ({
        url: `${baseUrl}/study-in-turkey/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.9
    }))

    // Blog posts — use real post dates for accurate lastModified signals
    const posts = await getSortedPostsData()
    const postRoutes = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.7
    }))

    return [...staticRoutes, ...scholarshipRoutes, ...turkeyRoutes, ...postRoutes, ...locationRoutes]
}

