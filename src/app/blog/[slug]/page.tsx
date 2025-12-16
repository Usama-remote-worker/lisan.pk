import { getPostData, getSortedPostsData } from "@/lib/blog"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostData(slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} | Lisan.pk Blog`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            type: "article",
            publishedTime: post.date,
            authors: ["Lisan.pk"],
        },
    }
}

export async function generateStaticParams() {
    const posts = await getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = await getPostData(slug)

    if (!post) {
        notFound()
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "datePublished": post.date,
        "description": post.summary,
        "author": {
            "@type": "Organization",
            "name": "Lisan.pk"
        }
    }

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <article className="container mx-auto px-4 py-16 max-w-3xl">
                <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-medium mb-8 inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <time dateTime={post.date}>{post.date}</time>
                        {post.tags && (
                            <>
                                <span>•</span>
                                <span className="text-emerald-600 font-medium">{post.tags[0]}</span>
                            </>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        {post.summary}
                    </p>
                </header>

                <div
                    className="prose prose-lg prose-slate max-w-none prose-headings:text-emerald-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
            <Footer />
        </main>
    )
}
