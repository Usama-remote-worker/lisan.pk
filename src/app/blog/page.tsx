import { PageHero } from "@/components/ui/PageHeader"
import { getSortedPostsData } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"

export default async function BlogPage() {
    const posts = await getSortedPostsData()

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Latest News & Insights"
                description="Updates on translation requirements, scholarship opportunities, and attestation procedures."
                breadcrumbs={[{ label: "Blog", href: "/blog" }]}
            />

            <div className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="flex flex-col group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                            <div className="h-56 overflow-hidden relative">
                                <Image
                                    src={post.image || "/placeholder.jpg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {post.tags?.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-emerald-600/90 text-white text-xs font-semibold rounded-md backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="text-xs text-slate-400 mb-3 flex items-center gap-2">
                                    <span>{post.date}</span>
                                    {/* Additional metadata could go here */}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{post.summary}</p>
                                <Link href={`/blog/${post.slug}`} className="text-emerald-600 text-sm font-semibold hover:underline mt-auto inline-flex items-center">
                                    Read Article <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
