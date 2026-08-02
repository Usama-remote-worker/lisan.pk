/**
 * blog-audit.mjs
 * 
 * Reads all published blog posts and reports:
 * - slug, word count, publish date, title
 * - Flags posts under 500 words
 * - Flags posts with substantially overlapping titles/topics
 * 
 * Run: node seo/scripts/blog-audit.mjs
 */

import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

// Read all published posts
const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

const posts = []

for (const fileName of files) {
    const filePath = path.join(BLOG_DIR, fileName)
    const content = fs.readFileSync(filePath, 'utf8')
    
    // Check published
    if (/published:\s*false/.test(content)) continue
    
    const slug = fileName.replace(/\.(md|mdx)$/, '')
    
    // Extract frontmatter
    const titleMatch = content.match(/title:\s*"([^"]+)"/)
    const dateMatch = content.match(/date:\s*"?(\d{4}-\d{2}-\d{2})/)
    const categoryMatch = content.match(/category:\s*"([^"]+)"/)
    
    const title = titleMatch ? titleMatch[1] : 'NO TITLE'
    const date = dateMatch ? dateMatch[1] : 'NO DATE'
    const category = categoryMatch ? categoryMatch[1] : 'Uncategorized'
    
    // Word count: strip frontmatter, then count words
    const bodyContent = content.replace(/---[\s\S]*?---/, '').trim()
    const wordCount = bodyContent.split(/\s+/).filter(w => w.length > 0).length
    
    posts.push({ slug, title, date, category, wordCount, fileName })
}

// Sort by date
posts.sort((a, b) => a.date.localeCompare(b.date))

// ─── Output: Main table ─────────────────────────────────────────────────────
console.log('# Blog Content Audit — 86 Published Posts')
console.log('')
console.log('| # | Slug | Words | Date | Category | Flag |')
console.log('|---|------|-------|------|----------|------|')

let thinCount = 0
for (let i = 0; i < posts.length; i++) {
    const p = posts[i]
    const flag = p.wordCount < 500 ? '⚠️ THIN' : ''
    if (p.wordCount < 500) thinCount++
    console.log(`| ${i + 1} | ${p.slug} | ${p.wordCount} | ${p.date} | ${p.category} | ${flag} |`)
}

console.log('')
console.log(`## Summary`)
console.log(`- Total published posts: ${posts.length}`)
console.log(`- Posts under 500 words: ${thinCount}`)
console.log(`- Word count range: ${Math.min(...posts.map(p => p.wordCount))} – ${Math.max(...posts.map(p => p.wordCount))}`)
console.log(`- Median word count: ${posts.map(p => p.wordCount).sort((a, b) => a - b)[Math.floor(posts.length / 2)]}`)
console.log('')

// ─── Overlap detection ──────────────────────────────────────────────────────
// Normalize title to keywords for comparison
function normalize(title) {
    return title.toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .split(/\s+/)
        .filter(w => w.length > 2)
        // Remove common stop words
        .filter(w => !['the', 'and', 'for', 'from', 'with', 'how', 'what', 'why', 'you', 'your', 'our',
            'need', 'get', 'can', 'all', 'best', 'top', 'guide', 'complete', 'services', 'service',
            'pakistan', 'pakistani', 'students', 'before', 'still'].includes(w))
}

function overlap(wordsA, wordsB) {
    const setA = new Set(wordsA)
    const setB = new Set(wordsB)
    const intersection = [...setA].filter(w => setB.has(w))
    const smaller = Math.min(setA.size, setB.size)
    return smaller > 0 ? intersection.length / smaller : 0
}

console.log('## Title/Topic Overlap Analysis')
console.log('')
console.log('Posts with >60% keyword overlap in titles (potential cannibalization):')
console.log('')
console.log('| Post A | Post B | Overlap % | Shared Keywords |')
console.log('|--------|--------|-----------|-----------------|')

let overlapCount = 0
for (let i = 0; i < posts.length; i++) {
    const wordsA = normalize(posts[i].title)
    for (let j = i + 1; j < posts.length; j++) {
        const wordsB = normalize(posts[j].title)
        const ov = overlap(wordsA, wordsB)
        if (ov >= 0.6) {
            const setA = new Set(wordsA)
            const shared = wordsB.filter(w => setA.has(w))
            overlapCount++
            console.log(`| ${posts[i].slug} | ${posts[j].slug} | ${Math.round(ov * 100)}% | ${shared.join(', ')} |`)
        }
    }
}

if (overlapCount === 0) {
    console.log('| (none found) | — | — | — |')
}

console.log('')
console.log(`Total overlapping pairs: ${overlapCount}`)
