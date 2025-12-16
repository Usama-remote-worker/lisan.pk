import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const posts = [
    {
        title: "Understanding the Document Attestation Process in Pakistan",
        excerpt: "A comprehensive guide to getting your educational and personal documents attested for use in Saudi Arabia and other countries.",
        date: "Dec 08, 2024",
        slug: "understanding-attestation",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "How to Attest Degrees for Saudi Arabia (KSA)",
        excerpt: "A complete step-by-step guide to attesting your educational documents for Saudi work visas. Learn about HEC, MOFA, and Embassy requirements.",
        date: "Dec 12, 2024",
        slug: "how-to-attest-degrees-ksa",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Translation Requirements for Family Visas",
        excerpt: "Which documents need translation for bringing your family to the Gulf? We explain everything you need to know about marriage and birth certificate translation.",
        date: "Nov 15, 2024",
        slug: "translation-requirements-family-visa",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop"
    }
]

export function BlogPreview() {
    return (
        <section className="py-20 bg-white">
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
                        <article key={post.slug} className="flex flex-col group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
                            <div className="h-56 overflow-hidden relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <div className="text-xs text-slate-400 mb-3">{post.date} /</div>
                                <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="text-emerald-600 text-sm font-semibold hover:underline mt-auto">
                                    More
                                </Link>
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
