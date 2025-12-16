import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getSortedPostsData } from "@/lib/blog"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog | Lisan.pk",
    description: "Latest news, guides, and updates about translation and attestation services in Pakistan.",
}

export default async function BlogPage() {
    const allPostsData = await getSortedPostsData()

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-emerald-800 mb-4">Lisan.pk Blog</h1>
                    <p className="text-lg text-slate-600 mb-12">
                        Expert insights on document attestation, translation services, and study abroad guides.
                    </p>

                    <div className="grid gap-8">
                        {allPostsData.length > 0 ? (
                            allPostsData.map((post) => (
                                <article key={post.slug} className="flex flex-col md:flex-row gap-6 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow bg-white">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                            <time dateTime={post.date}>{post.date}</time>
                                            {post.tags && (
                                                <>
                                                    <span>•</span>
                                                    <span className="text-emerald-600 font-medium">{post.tags[0]}</span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-3">
                                            <Link href={`/blog/${post.slug}`} className="hover:text-emerald-700 transition-colors">
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-slate-600 mb-4 line-clamp-2">
                                            {post.summary}
                                        </p>
                                        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                                            Read Article
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </Link>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <p className="text-slate-500 text-center py-12">No blog posts found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

