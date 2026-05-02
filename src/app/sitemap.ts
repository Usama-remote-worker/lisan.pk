import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'
import { cities, services } from '@/data/location-services'
import { universities } from '@/data/scholarship-universities'

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
        '/consultancy/saudi-scholarship',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: ((route === '' || route.startsWith('/services')) ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
        priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
    }))

    const locationRoutes: MetadataRoute.Sitemap = []
    
    // Generate main city routes
    Object.keys(cities).forEach(city => {
        locationRoutes.push({
            url: `${baseUrl}/locations/${city}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7
        })

        // Generate city-service specific routes
        Object.keys(services).forEach(service => {
            locationRoutes.push({
                url: `${baseUrl}/locations/${city}/${service}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.65
            })
        })
    })

    // Dynamic generation for scholarship pages
    const scholarshipRoutes = Object.keys(universities).map(slug => ({
        url: `${baseUrl}/scholarships/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.85
    }))

    // Dynamic generation for blog posts
    const posts = await getSortedPostsData()
    const postRoutes = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.6
    }))

    return [...staticRoutes, ...scholarshipRoutes, ...postRoutes, ...locationRoutes]
}
