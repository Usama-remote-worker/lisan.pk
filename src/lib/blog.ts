import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
    image?: string;
    tags?: string[];
    category: "Translation" | "Attestation" | "Visa Guides" | "Education";
    author: string;
    readingTime: string;
    published: boolean;
}

export async function getSortedPostsData(): Promise<BlogPost[]> {
    // Get file names under /src/content/blog
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '').replace(/\.mdx$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id and slug
        return {
            slug,
            id: slug, // Use slug as ID for consistency
            ...matterResult.data,
            content: matterResult.content,
        } as BlogPost
    })

    // Sort posts by date
    return allPostsData
        .filter(post => post.published !== false) // Default to published if not specified
        .sort((a, b) => {
            if (a.date < b.date) {
                return 1
            } else {
                return -1
            }
        })
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(remarkGfm)
            .use(html)
            .process(matterResult.content)
        const contentHtml = processedContent.toString()

        // Combine the data with the id and contentHtml
        return {
            slug,
            id: slug,
            ...matterResult.data,
            content: contentHtml,
        } as BlogPost
    } catch (e) {
        // Try .mdx if .md not found
        try {
            const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
            const mdxContents = fs.readFileSync(mdxPath, 'utf8')
            const mdxResult = matter(mdxContents)
            const processedMdx = await remark().use(remarkGfm).use(html).process(mdxResult.content)
            return {
                slug,
                id: slug,
                ...mdxResult.data,
                content: processedMdx.toString()
            } as BlogPost
        } catch (err) {
            return null
        }
    }
}

export async function getRelatedPosts(slug: string, category: string): Promise<BlogPost[]> {
    const allPosts = await getSortedPostsData()
    return allPosts
        .filter(p => p.slug !== slug && p.category === category)
        .slice(0, 3)
}

export async function getAllCategories(): Promise<string[]> {
    const allPosts = await getSortedPostsData()
    const categories = allPosts.map(p => p.category)
    return Array.from(new Set(categories))
}
