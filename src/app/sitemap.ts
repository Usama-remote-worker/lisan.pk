import { MetadataRoute } from 'next'

export const baseUrl = 'https://lisan.pk'
// In a real implementation, you'd import getBlogPosts or similar
// import { getBlogPosts } from '@/lib/blog' 

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

    // Placeholder for blog posts dynamic generation
    // const posts = await getBlogPosts()
    // const postRoutes = posts.map(post => ({
    //     url: `${baseUrl}/blog/${post.slug}`,
    //     lastModified: new Date(post.date),
    //     changeFrequency: 'weekly',
    //     priority: 0.7
    // }))

    return [...routes]
}
