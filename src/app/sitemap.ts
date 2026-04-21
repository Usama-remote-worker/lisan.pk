import { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/blog'

export const baseUrl = 'https://lisan.pk'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes = [
        '',
        '/about',
        '/contact',
        '/blog',
        '/services/translation',
        '/services/attestation',
        '/services/document',
        '/consultancy/saudi-scholarship',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic generation for blog posts
    const posts = await getSortedPostsData()
    const postRoutes = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7
    }))

    return [...routes, ...postRoutes]
}
