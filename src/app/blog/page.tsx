import { getSortedPostsData } from "@/lib/blog"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Lisan.pk Blog | Insights on Arabic Translation & Saudi Attestation",
    description: "Expert advice on translation and attestation procedures. Stay updated with the latest requirements for student visas, marriage documents, and more.",
}

export default async function BlogPage() {
    const posts = await getSortedPostsData()

    return (
        <main className="min-h-screen bg-[#f7f9fb] pt-24 pb-20 px-6 md:px-12 max-w-[1280px] mx-auto font-sans text-slate-900">
            <header className="mb-16 border-b border-slate-200 pb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Latest Insights</h1>
                <p className="text-slate-600 max-w-2xl text-lg">
                    A comprehensive, high-density collection of updates on translation requirements, scholarship opportunities, and embassy attestation procedures.
                </p>
            </header>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                {/* Sidebar Topic Index */}
                <aside className="md:w-64 flex-shrink-0">
                    <div className="sticky top-28">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Topic Index</h3>
                        <nav className="flex flex-col space-y-1">
                            <Link href="#" className="px-4 py-2 text-sm text-emerald-700 font-semibold bg-emerald-50 border-l-2 -ml-[2px] border-emerald-600 rounded-r-md">All Collections</Link>
                            <Link href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors">Document Translation</Link>
                            <Link href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors">Saudi Attestation</Link>
                            <Link href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors">Scholarship Guides</Link>
                            <Link href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors">Visa Procedures</Link>
                            <Link href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-emerald-700 transition-colors">Company Registration</Link>
                        </nav>

                        <div className="mt-12 p-6 bg-white rounded-md border border-slate-200 shadow-sm">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Archive Filters</h4>
                            <div className="space-y-3">
                                <select className="w-full text-sm bg-slate-50 border-slate-200 rounded px-3 py-2 text-slate-600 focus:ring-emerald-600 focus:border-emerald-600 outline-none">
                                    <option>Sort by Date (Newest)</option>
                                    <option>Sort by Date (Oldest)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Articles List */}
                <div className="flex-1">
                    <div className="space-y-0">
                        {posts.map((post) => (
                            <article key={post.slug} className="group border-b border-slate-200 pb-12 mb-12 last:border-b-0 last:mb-0 last:pb-0">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-slate-500">
                                        <div className="flex items-center gap-4">
                                            <span className="text-emerald-700">{post.category}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span>Published: {post.date}</span>
                                        </div>
                                        <span>{post.readingTime} read</span>
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <div className="text-lg text-slate-600 leading-relaxed max-w-4xl italic">
                                        {post.summary}
                                    </div>
                                    <div className="flex items-center gap-6 mt-4">
                                        <span className="text-sm text-slate-500 italic">By {post.author}</span>
                                        <Link href={`/blog/${post.slug}`} className="text-xs font-bold text-emerald-700 hover:underline uppercase tracking-tighter">
                                            Read Full Text
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
