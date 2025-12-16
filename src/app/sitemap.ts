import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Basic pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/services/translation',
        '/services/attestation',
        '/services/document',
        '/consultancy/saudi-scholarship',
        '/blog',
    ].map((route) => ({
        url: `https://lisan.pk${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // In a real scenario, you would fetch blog posts here and add them to the sitemap
    // For now we just return the static routes

    return [...routes]
}
