import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cities, ALLOWLISTED_LOCATION_SUBPAGES } from '@/data/location-services'
import { universities } from '@/data/scholarship-universities'
import { turkeyUniversities } from '@/data/turkey-universities'

const BASE_URL = 'https://www.lisan.pk'

// ---------------------------------------------------------------------------
// lastModified strategy
// ---------------------------------------------------------------------------
// - Static pages  : git last-commit date per file (captured below).
// - Blog posts    : frontmatter `date` field (the authoritative publish date;
//                   matches git commit date for all 86 published posts).
// - City hubs     : last change to location-services.ts data file (2026-07-22).
// - Allowlisted   : same as city hubs (content lives in the same data file).
// - Embassies     : EXCLUDED — all 45 pages carry noindex.
// - Scholarships  : last change to scholarship-universities.ts (2026-05-23).
// - Turkey unis   : last change to turkey-universities.ts (2026-05-23).
// - Service slugs : last change to translation/[slug]/page.tsx (2026-06-15).
// ---------------------------------------------------------------------------

// Static page git last-commit dates (run: git log --follow --format="%ai" -1 -- <path>)
const STATIC_PAGE_DATES: Record<string, string> = {
    '/':                                                          '2026-06-15',
    '/about':                                                     '2026-06-15',
    '/blog':                                                      '2026-05-23',
    '/certified-document-translation':                            '2026-07-22',
    '/certified-document-translation/degree-transcript':          '2026-07-22',
    '/certified-document-translation/legal-documents':            '2026-07-22',
    '/certified-document-translation/nadra-nikahnama':            '2026-07-22',
    '/chinese-language-translation-in-urdu':                      '2026-06-15',
    '/consultancy/saudi-scholarship':                             '2026-05-04',
    '/saudi-scholarships/program-finder':                         '2026-09-05',
    '/contact':                                                   '2026-07-22',
    '/directory':                                                 '2026-06-15',
    '/english-to-indonesian-translators':                         '2026-06-15',
    '/english-to-spanish-translation-services':                   '2026-06-17',
    '/privacy-policy':                                            '2026-11-03',
    '/terms-of-service':                                          '2026-11-03',
    '/locations':                                                 '2026-05-24',
    '/services':                                                  '2026-06-15',
    '/services/attestation':                                      '2026-11-03',
    '/guides':                                                    '2026-11-03',
    '/guides/mofa-online-attestation':                            '2026-11-03',
    '/guides/apostille-pakistan':                                 '2026-11-05',
    '/guides/certified-translation-vs-apostille-pakistan':        '2026-11-05',
    '/guides/hec-online-degree-attestation':                      '2026-11-05',
    '/pricing':                                                   '2026-11-05',
    '/services/translation/urdu-to-arabic':                       '2026-11-05',
    '/services/document':                                         '2026-06-15',
    '/services/translation':                                      '2026-05-24',
    '/services/ukvi-certified-translation':                       '2026-06-15',
    '/services/uscis-certified-translation':                      '2026-06-15',
    '/services/uscis-certified-translation/academic-documents':   '2026-06-15',
    '/services/uscis-certified-translation/birth-certificate':    '2026-06-15',
    '/services/uscis-certified-translation/cost':                 '2026-06-12',
    '/services/uscis-certified-translation/faq':                  '2026-06-12',
    '/services/uscis-certified-translation/marriage-certificate': '2026-06-12',
    '/services/uscis-certified-translation/requirements':         '2026-06-12',
    '/site-map':                                                  '2026-06-12',
    '/study-in-turkey':                                           '2026-06-15',
    '/translation-english-to-arabic':                             '2026-06-15',
    '/translation-services-islamabad':                            '2026-06-15',
    '/translation-services-karachi':                              '2026-06-15',
    '/translation-services-lahore':                               '2026-06-15',
}

// Translation service slugs defined in /services/translation/[slug]/page.tsx
// git last-commit on that file: 2026-06-15
const TRANSLATION_SERVICE_SLUGS = [
    'arabic-translation',
    'english-translation',
    'turkish-translation',
    'degree-translation',
    'legal-translation',
    'certified-translation',
    'nikah-nama-marriage-certificate',
    'birth-certificate-translation',
    'academic-degree-transcript',
    'police-character-certificate',
    'divorce-certificate-translation',
    'medical-report-translation',
    'property-document-translation',
    'legal-document-translation',
    'bank-statement-translation',
    'cnic-id-card-translation',
    'business-document-translation',
    'experience-certificate-translation',
    'saudi-scholarship-translation',
    'iata-dts-umrah-travel-agency',
    'urdu-to-english-translation',
] as const

// ---------------------------------------------------------------------------
// Blog posts: read frontmatter date for each published post
// ---------------------------------------------------------------------------
const REDIRECTED_BLOG_SLUGS = new Set([
    'missed-21-may-deadline-saudi-scholarship-still-open-till-31-may',
    'saudi-scholarship-extended-date-2026-apply-before-new-deadline',
    'saudi-scholarship-2026-document-translation-may-21-deadline',
    'urgent-scholarship-document-translation-before-21-may-2026-pakistan',
    'saudia-scholarship-programs-still-open-2026',
    'saudi-scholarship-document-translation-avoid-mistakes-before-21-may',
    'transcript-translation-saudi-scholarship-urgent-certified',
    'same-day-arabic-translation-pakistan-saudi-applications',
    'top-rated-arabic-translation-services-students-saudi-scholarships',
])

function getBlogEntries(): MetadataRoute.Sitemap {
    const postsDirectory = path.join(process.cwd(), 'src/content/blog')
    let fileNames: string[]
    try {
        fileNames = fs.readdirSync(postsDirectory)
    } catch {
        return []
    }

    return fileNames
        .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
        .flatMap(fileName => {
            const slug = fileName.replace(/\.(md|mdx)$/, '')
            if (REDIRECTED_BLOG_SLUGS.has(slug)) return []

            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data } = matter(fileContents)

            // Skip unpublished posts (default is published)
            if (data.published === false) return []

            // Use frontmatter date as lastModified (author-provided publish date).
            // All 86 published posts have a `date` field in YYYY-MM-DD format.
            const lastModified = data.lastModified
                ? new Date(data.lastModified)
                : data.date
                ? new Date(data.date)
                : new Date('2026-05-07') // fallback: earliest commit batch date

            return [{
                url: `${BASE_URL}/blog/${slug}`,
                lastModified,
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            }]
        })
}

// ---------------------------------------------------------------------------
// Main sitemap generator
// ---------------------------------------------------------------------------
export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = []

    // -------------------------------------------------------------------------
    // 1. Static pages (32 pages)
    // -------------------------------------------------------------------------
    for (const [route, dateStr] of Object.entries(STATIC_PAGE_DATES)) {
        const priority =
            route === '/' ? 1.0 :
            [
                '/certified-document-translation',
                '/services/ukvi-certified-translation',
                '/services/uscis-certified-translation',
                '/services',
                '/services/translation',
                '/consultancy/saudi-scholarship',
                '/saudi-scholarships/program-finder',
            ].includes(route) ? 0.9 :
            [
                '/certified-document-translation/degree-transcript',
                '/certified-document-translation/legal-documents',
                '/certified-document-translation/nadra-nikahnama',
                '/translation-english-to-arabic',
                '/services/translation/urdu-to-arabic',
                '/pricing',
                '/english-to-indonesian-translators',
                '/english-to-spanish-translation-services',
                '/chinese-language-translation-in-urdu',
            ].includes(route) ? 0.85 :
            [
                '/guides',
                '/guides/mofa-online-attestation',
                '/guides/apostille-pakistan',
                '/guides/certified-translation-vs-apostille-pakistan',
                '/guides/hec-online-degree-attestation',
                '/services/attestation',
            ].includes(route) ? 0.8 :
            0.7

        entries.push({
            url: `${BASE_URL}${route}`,
            lastModified: new Date(dateStr),
            changeFrequency: route === '/' ? 'weekly' : 'monthly',
            priority,
        })
    }

    // -------------------------------------------------------------------------
    // 2. Translation service slugs (21 pages)
    //    Source: /services/translation/[slug]/page.tsx
    //    git last-commit on template: 2026-06-15
    // -------------------------------------------------------------------------
    for (const slug of TRANSLATION_SERVICE_SLUGS) {
        entries.push({
            url: `${BASE_URL}/services/translation/${slug}`,
            lastModified: new Date('2026-06-15'),
            changeFrequency: 'monthly',
            priority: 0.8,
        })
    }

    // -------------------------------------------------------------------------
    // 3. City hub pages — /locations/[city] (29 pages)
    //    Source: cities object in location-services.ts
    //    git last-commit on data file: 2026-07-22
    // -------------------------------------------------------------------------
    for (const citySlug of Object.keys(cities)) {
        entries.push({
            url: `${BASE_URL}/locations/${citySlug}`,
            lastModified: new Date('2026-07-22'),
            changeFrequency: 'monthly',
            priority: 0.8,
        })
    }

    // -------------------------------------------------------------------------
    // 4. Allowlisted city/service subpages — /locations/[city]/[service] (66 pages)
    //    Only the entries in ALLOWLISTED_LOCATION_SUBPAGES are indexable.
    //    All other city/service combos carry noindex intentionally.
    //    git last-commit on data file: 2026-07-22
    // -------------------------------------------------------------------------
    ALLOWLISTED_LOCATION_SUBPAGES.forEach(entry => {
        // entry format: "city/service"
        entries.push({
            url: `${BASE_URL}/locations/${entry}`,
            lastModified: new Date('2026-07-22'),
            changeFrequency: 'monthly',
            priority: 0.7,
        })
    })

    // -------------------------------------------------------------------------
    // Embassy pages — EXCLUDED
    //    All 45 /embassies/[slug] pages carry robots: { index: false, follow: true }.
    //    They must NOT appear in the sitemap.
    //    Also excluded: /translate/*, /services/document/* (noindex clusters).
    // -------------------------------------------------------------------------

    // -------------------------------------------------------------------------
    // 5. Scholarship university pages — /scholarships/[slug] (3 pages)
    //    Source: universities object in scholarship-universities.ts
    //    git last-commit on data file: 2026-05-23
    // -------------------------------------------------------------------------
    for (const slug of Object.keys(universities)) {
        entries.push({
            url: `${BASE_URL}/scholarships/${slug}`,
            lastModified: new Date('2026-05-23'),
            changeFrequency: 'monthly',
            priority: 0.8,
        })
    }

    // -------------------------------------------------------------------------
    // 6. Turkey university pages — /study-in-turkey/[slug] (3 pages)
    //    Source: turkeyUniversities object in turkey-universities.ts
    //    git last-commit on data file: 2026-05-23
    // -------------------------------------------------------------------------
    for (const slug of Object.keys(turkeyUniversities)) {
        entries.push({
            url: `${BASE_URL}/study-in-turkey/${slug}`,
            lastModified: new Date('2026-05-23'),
            changeFrequency: 'monthly',
            priority: 0.8,
        })
    }

    // -------------------------------------------------------------------------
    // 7. Blog posts (86 published posts — template-post.md excluded)
    //    lastModified sourced from frontmatter `date` field per post.
    // -------------------------------------------------------------------------
    entries.push(...getBlogEntries())

    return entries
}
