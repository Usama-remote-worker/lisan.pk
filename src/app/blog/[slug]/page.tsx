import { getPostData, getSortedPostsData, getRelatedPosts } from "@/lib/blog"
import { PageHero } from "@/components/ui/PageHeader"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostData(slug)
    if (!post) return {}

    return {
        title: `${post.title} | Lisan.pk`,
        description: post.summary,
        alternates: {
            canonical: `https://www.lisan.pk/blog/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.summary,
            images: post.image ? [post.image] : [],
            type: 'article',
            publishedTime: post.date,
        }
    }
}

export async function generateStaticParams() {
    const posts = await getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await getPostData(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = await getRelatedPosts(post.slug, post.category)

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.summary,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "datePublished": post.date,
        "image": post.image || "https://www.lisan.pk/logo.png",
        "publisher": {
            "@type": "Organization",
            "name": "Lisan.pk",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.lisan.pk/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.lisan.pk/blog/${slug}`
        }
    }

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <PageHero
                title={post.title}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title }
                ]}
                className="!py-16 lg:!py-20"
            />

            <article className="py-16 container mx-auto px-4 max-w-3xl">
                <div className="flex items-center gap-4 text-slate-500 mb-10 text-sm">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</time>
                    <span>•</span>
                    <span className="font-semibold text-emerald-600 uppercase tracking-wider text-[11px]">{post.category}</span>
                    <span>•</span>
                    <span>{post.readingTime} read</span>
                </div>

                <div 
                    className="prose prose-slate prose-lg max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-bold
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700
                    prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* Author Section */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex items-center gap-6">
                    <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl font-bold flex-shrink-0">
                        {post.author[0]}
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-1">Written by {post.author}</h4>
                        <p className="text-sm text-slate-500">Expert consultant at Lisan.pk specializing in international document legalization and translation services.</p>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20 pt-16 border-t border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 font-sans">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map(related => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
                                    <span className="text-[10px] uppercase font-bold text-emerald-600 mb-2 block">{related.category}</span>
                                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors leading-snug">{related.title}</h4>
                                    <p className="text-xs text-slate-500 line-clamp-2">{related.summary}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </article>
        </main>
    )
}
