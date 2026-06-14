import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.lisan.pk'

    // The 10 Core Pillar Pages + Homepage
    const corePages = [
        '',
        '/translation-services-islamabad',
        '/translation-services-lahore',
        '/translation-services-karachi',
        '/certified-document-translation',
        '/certified-document-translation/nadra-nikahnama',
        '/certified-document-translation/degree-transcript',
        '/certified-document-translation/legal-documents',
        '/english-to-indonesian-translators',
        '/translation-english-to-arabic',
        '/chinese-language-translation-in-urdu'
    ]

    return corePages.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.9,
    }))
}
