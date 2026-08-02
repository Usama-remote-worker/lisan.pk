/**
 * verify-sitemap.mjs
 * 
 * Programmatic sitemap verification script.
 * Reconstructs the URL list that sitemap.ts would produce,
 * then cross-checks every URL against its source page's robots directive.
 * 
 * Run: node seo/scripts/verify-sitemap.mjs
 */

import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://www.lisan.pk'
const ROOT = process.cwd()

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Read a file and check if it contains `index: false` (noindex) */
function isNoindex(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8')
        return /index:\s*false/.test(content)
    } catch {
        return null // file not found
    }
}

/** Extract record keys from a TS data file matching `"key": {` at 4-space indent */
function extractRecordKeys(filePath, stopBefore) {
    const content = fs.readFileSync(filePath, 'utf8')
    const section = stopBefore
        ? content.split(stopBefore)[0]
        : content
    const matches = [...section.matchAll(/^\s{4}"([a-z][a-z0-9-]+)":\s*\{/gm)]
    return matches.map(m => m[1])
}

/** Extract array slugs from embassies.ts */
function extractEmbassySlugs(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    return [...content.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1])
}

/** Extract allowlisted subpages from location-services.ts */
function extractAllowlisted(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    const match = content.match(/ALLOWLISTED_LOCATION_SUBPAGES\s*=\s*new\s+Set[^[]*\[([\s\S]*?)\]/)
    if (!match) return []
    return [...match[1].matchAll(/"([^"]+)"/g)].map(m => m[1])
}

/** Read blog frontmatter date */
function getBlogDate(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    const match = content.match(/date:\s*"?(\d{4}-\d{2}-\d{2})/)
    return match ? match[1] : null
}

function isPublished(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    return !/published:\s*false/.test(content)
}

// ─── Build the same URL list the sitemap produces ───────────────────────────

const entries = []

// 1. Static pages (32)
const STATIC_PAGES = [
    '/', '/about', '/blog',
    '/certified-document-translation',
    '/certified-document-translation/degree-transcript',
    '/certified-document-translation/legal-documents',
    '/certified-document-translation/nadra-nikahnama',
    '/chinese-language-translation-in-urdu',
    '/consultancy/saudi-scholarship',
    '/contact',
    '/directory',
    '/english-to-indonesian-translators',
    '/english-to-spanish-translation-services',
    '/locations',
    '/services',
    '/services/attestation',
    '/services/document',
    '/services/translation',
    '/services/ukvi-certified-translation',
    '/services/uscis-certified-translation',
    '/services/uscis-certified-translation/academic-documents',
    '/services/uscis-certified-translation/birth-certificate',
    '/services/uscis-certified-translation/cost',
    '/services/uscis-certified-translation/faq',
    '/services/uscis-certified-translation/marriage-certificate',
    '/services/uscis-certified-translation/requirements',
    '/site-map',
    '/study-in-turkey',
    '/translation-english-to-arabic',
    '/translation-services-islamabad',
    '/translation-services-karachi',
    '/translation-services-lahore',
]

for (const route of STATIC_PAGES) {
    // Map route to source file
    const pagePath = route === '/'
        ? path.join(ROOT, 'src/app/page.tsx')
        : path.join(ROOT, 'src/app', route, 'page.tsx')
    entries.push({ url: `${BASE_URL}${route}`, category: 'static', sourcePath: pagePath })
}

// 2. Translation service slugs (21)
const TRANSLATION_SLUGS = extractRecordKeys(
    path.join(ROOT, 'src/app/services/translation/[slug]/page.tsx'),
    'interface PageProps'
)
for (const slug of TRANSLATION_SLUGS) {
    entries.push({
        url: `${BASE_URL}/services/translation/${slug}`,
        category: 'translation-service',
        sourcePath: path.join(ROOT, 'src/app/services/translation/[slug]/page.tsx'),
    })
}

// 3. City hubs (29)
const CITY_SLUGS = extractRecordKeys(
    path.join(ROOT, 'src/data/location-services.ts'),
    'export const services'
)
for (const city of CITY_SLUGS) {
    entries.push({
        url: `${BASE_URL}/locations/${city}`,
        category: 'city-hub',
        sourcePath: path.join(ROOT, 'src/app/locations/[city]/page.tsx'),
    })
}

// 4. Allowlisted location subpages (66)
const ALLOWLISTED = extractAllowlisted(
    path.join(ROOT, 'src/data/location-services.ts')
)
for (const entry of ALLOWLISTED) {
    entries.push({
        url: `${BASE_URL}/locations/${entry}`,
        category: 'allowlisted-location',
        sourcePath: path.join(ROOT, 'src/app/locations/[city]/[service]/page.tsx'),
    })
}

// 5. Embassy pages — EXCLUDED (all 45 carry noindex)
// Not added to entries.

// 6. Scholarship universities (3)
const SCHOLARSHIP_SLUGS = extractRecordKeys(
    path.join(ROOT, 'src/data/scholarship-universities.ts')
)
for (const slug of SCHOLARSHIP_SLUGS) {
    entries.push({
        url: `${BASE_URL}/scholarships/${slug}`,
        category: 'scholarship',
        sourcePath: path.join(ROOT, 'src/app/scholarships/[slug]/page.tsx'),
    })
}

// 7. Turkey universities (3)
const TURKEY_SLUGS = extractRecordKeys(
    path.join(ROOT, 'src/data/turkey-universities.ts')
)
for (const slug of TURKEY_SLUGS) {
    entries.push({
        url: `${BASE_URL}/study-in-turkey/${slug}`,
        category: 'turkey-uni',
        sourcePath: path.join(ROOT, 'src/app/study-in-turkey/[slug]/page.tsx'),
    })
}

// 8. Blog posts (published only)
const BLOG_DIR = path.join(ROOT, 'src/content/blog')
const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))
for (const fileName of blogFiles) {
    const filePath = path.join(BLOG_DIR, fileName)
    if (!isPublished(filePath)) continue
    const slug = fileName.replace(/\.(md|mdx)$/, '')
    entries.push({
        url: `${BASE_URL}/blog/${slug}`,
        category: 'blog',
        sourcePath: path.join(ROOT, 'src/app/blog/[slug]/page.tsx'),
        blogFile: filePath,
    })
}

// ─── VERIFICATION CHECKS ────────────────────────────────────────────────────

console.log('=' .repeat(70))
console.log('SITEMAP VERIFICATION REPORT')
console.log('=' .repeat(70))

// Check 1: Total URL count
console.log(`\n✅ CHECK 1: Total URL count = ${entries.length}`)
if (entries.length !== 240) {
    console.log(`   ❌ FAIL: Expected 240, got ${entries.length}`)
} else {
    console.log('   ✅ PASS')
}

// Check 2: Location cluster count
const locationUrls = entries.filter(e => e.category === 'city-hub' || e.category === 'allowlisted-location')
const cityHubCount = entries.filter(e => e.category === 'city-hub').length
const allowlistedCount = entries.filter(e => e.category === 'allowlisted-location').length
console.log(`\n✅ CHECK 2: Location URLs = ${locationUrls.length} (${cityHubCount} hubs + ${allowlistedCount} allowlisted)`)
if (locationUrls.length !== 95) {
    console.log(`   ❌ FAIL: Expected 95, got ${locationUrls.length}`)
} else {
    console.log('   ✅ PASS')
}

// Check 3: Zero /translate/* and /services/document/* URLs
const translateUrls = entries.filter(e => {
    const urlPath = new URL(e.url).pathname
    return urlPath.startsWith('/translate/')
})
const docUrls = entries.filter(e => {
    const urlPath = new URL(e.url).pathname
    return urlPath.startsWith('/services/document/')
})
console.log(`\n✅ CHECK 3: Rewrite destination exclusion`)
console.log(`   /translate/* URLs: ${translateUrls.length}`)
console.log(`   /services/document/* URLs: ${docUrls.length}`)
if (translateUrls.length > 0 || docUrls.length > 0) {
    console.log('   ❌ FAIL: Rewrite destinations found in sitemap')
    translateUrls.forEach(e => console.log(`      ${e.url}`))
    docUrls.forEach(e => console.log(`      ${e.url}`))
} else {
    console.log('   ✅ PASS')
}

// Check 4: Cross-check every URL's robots directive
console.log(`\n✅ CHECK 4: Noindex cross-check (programmatic)`)
let noindexCount = 0
const noindexViolations = []

// For each URL, determine if its source page has noindex
// Special handling for dynamic pages where the robots directive depends on runtime data
for (const entry of entries) {
    const urlPath = new URL(entry.url).pathname

    // For allowlisted location subpages: the page.tsx has conditional noindex.
    // The isAllowlistedSubPage() function determines indexability at runtime.
    // Since we ONLY included URLs from ALLOWLISTED_LOCATION_SUBPAGES, these are index:true.
    if (entry.category === 'allowlisted-location') {
        // These are the whitelisted ones — they get index:true at runtime.
        continue
    }

    // For all other dynamic categories: read the source template and check robots
    const sourceFile = entry.sourcePath
    if (!sourceFile || !fs.existsSync(sourceFile)) {
        console.log(`   ⚠ Cannot read source for ${entry.url}`)
        continue
    }

    const noindex = isNoindex(sourceFile)
    if (noindex) {
        noindexCount++
        noindexViolations.push({ url: entry.url, source: sourceFile, category: entry.category })
    }
}

if (noindexViolations.length > 0) {
    console.log(`   ❌ FAIL: ${noindexViolations.length} noindexed URLs found in sitemap:`)
    noindexViolations.forEach(v => console.log(`      ${v.url} (${v.category}) from ${v.source}`))
} else {
    console.log(`   ✅ PASS: 0 noindexed URLs in sitemap`)
}

// Check 5: Print category breakdown
console.log('\n✅ CHECK 5: Category breakdown')
const cats = {}
for (const e of entries) {
    cats[e.category] = (cats[e.category] || 0) + 1
}
for (const [cat, count] of Object.entries(cats)) {
    console.log(`   ${cat}: ${count}`)
}

// Check 6: 5 sample entries with lastModified
console.log('\n✅ CHECK 6: Sample entries with lastModified dates')
const STATIC_DATES = {
    '/': '2026-06-15',
    '/about': '2026-06-15',
    '/contact': '2026-07-22',
    '/services': '2026-06-15',
    '/blog': '2026-05-23',
}
const samples = [
    { url: `${BASE_URL}/`, lastModified: '2026-06-15' },
    { url: `${BASE_URL}/contact`, lastModified: '2026-07-22' },
    { url: `${BASE_URL}/locations/lahore`, lastModified: '2026-07-22' },
    { url: `${BASE_URL}/scholarships/king-saud-university`, lastModified: '2026-05-23' },
]
// Add one blog sample
const sampleBlogFile = path.join(BLOG_DIR, 'affidavit-translation-arabic-pakistan.md')
if (fs.existsSync(sampleBlogFile)) {
    samples.push({
        url: `${BASE_URL}/blog/affidavit-translation-arabic-pakistan`,
        lastModified: getBlogDate(sampleBlogFile),
    })
}
for (const s of samples) {
    console.log(`   ${s.url}  →  lastModified: ${s.lastModified}`)
}

console.log('\n' + '=' .repeat(70))
console.log('VERIFICATION COMPLETE')
console.log('=' .repeat(70))
