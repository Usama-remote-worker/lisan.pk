import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
    {
        title: "Saudia Scholarship Programs Still Open for 2026 – Apply Now",
        excerpt: "Still looking for a fully funded scholarship in Saudi Arabia? Two major programs are still open until May 21, 2026. Get the update as of May 1st.",
        date: "May 01, 2026",
        category: "Scholarship Guides",
        readTime: "5 min",
        slug: "saudia-scholarship-programs-still-open-2026"
    },
    {
        title: "Order Arabic Document Translation Online – Fast & Certified",
        excerpt: "Need certified Arabic translation for Saudi university or visa applications? Order online today for fast, embassy-recognized service.",
        date: "May 01, 2026",
        category: "Translation Services",
        readTime: "6 min",
        slug: "order-arabic-document-translation-online"
    },
    {
        title: "Top-Rated Arabic Translation Services for Saudi Scholarships",
        excerpt: "Which is the best Arabic translation service for students? We compare top-rated options based on speed, certification, and student reviews.",
        date: "May 01, 2026",
        category: "Scholarship Guides",
        readTime: "7 min",
        slug: "top-rated-arabic-translation-services-students-saudi-scholarships"
    }
]

export function BlogPreview() {
    return (
        <section className="py-20 bg-white border-t border-slate-100">

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                            Insights & Authority
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-serif">Latest from the Lisan.pk Blog</h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            Expert analysis on translation standards, attestation workflows, and regulatory changes in the Arabic-speaking world.
                        </p>
                    </div>
                    <Link href="/blog" className="group flex items-center text-emerald-800 font-bold hover:text-emerald-900 transition-all text-sm uppercase tracking-widest">
                        Explore All Articles
                    </Link>

                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <Link 
                            key={post.slug} 
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-[2rem] hover:bg-white hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/30 rounded-bl-[4rem] group-hover:bg-emerald-200/50 transition-colors -z-0"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest px-3 py-1 bg-white border border-emerald-100 rounded-lg">
                                        {post.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif leading-[1.3] group-hover:text-emerald-900 transition-colors">
                                    {post.title}
                                </h3>
                                
                                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-3 text-[15px]">
                                    {post.excerpt}
                                </p>
                                
                                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                                    <div>{post.date}</div>
                                    <div>{post.readTime}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}


