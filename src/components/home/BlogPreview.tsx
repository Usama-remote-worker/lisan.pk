import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    {
        title: "How to Attest Degrees for Saudi Arabia (KSA)",
        excerpt: "A complete step-by-step guide to attesting your educational documents for Saudi work visas.",
        date: "Dec 12, 2024",
        slug: "how-to-attest-degrees-ksa"
    },
    {
        title: "Understanding the New UAE Attestation Rules",
        excerpt: "Recent changes in UAE embassy attestation requirements you need to know before applying.",
        date: "Nov 28, 2024",
        slug: "uae-attestation-rules-update"
    },
    {
        title: "Translation Requirements for Family Visas",
        excerpt: "Which documents need translation for bringing your family to the Gulf? We explain everything.",
        date: "Nov 15, 2024",
        slug: "translation-requirements-family-visa"
    }
]

export function BlogPreview() {
    return (
        <section className="py-20 bg-white border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Latest from Our Blog</h2>
                        <p className="mt-2 text-slate-600">Expert advice on translation and attestation procedures.</p>
                    </div>
                    <Link href="/blog" className="hidden sm:flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                        View all articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="flex flex-col group cursor-pointer">
                            <div className="h-48 bg-slate-100 rounded-xl mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">Article Image</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-emerald-600 font-medium mb-2">{post.date}</p>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-8 sm:hidden">
                    <Link href="/blog" className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                        View all articles <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
