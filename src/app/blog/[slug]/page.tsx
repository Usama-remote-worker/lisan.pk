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

    const isScholarshipPillar = slug === 'saudi-arabia-fully-funded-scholarships-guide-pakistani-students'

    const faqSchema = post.faqs && Array.isArray(post.faqs) ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map((f: any) => ({
            "@type": "Question",
            "name": f?.q || "",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f?.a || ""
            }
        }))
    } : null

    const howToData = Array.isArray(post.howTo) ? post.howTo[0] : post.howTo
    const howToSchema = howToData && howToData.step ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": howToData.name,
        "step": howToData.step.map((s: any) => ({
            "@type": "HowToStep",
            "name": s?.name || "",
            "itemListElement": [{
                "@type": "HowToDirection",
                "text": s?.text || ""
            }]
        }))
    } : null

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}
            
            {isScholarshipPillar && (
                <div className="bg-amber-500 text-white py-3 text-center text-sm font-bold animate-pulse">
                    ⚠️ 2026 Applications Closing Soon. Is your translation ready? 
                    <Link href="#cta" className="ml-2 underline hover:text-white">Get Priority Help →</Link>
                </div>
            )}

            <PageHero
                title={post.title}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title }
                ]}
                className="!py-8 lg:!py-12"
            />

            <article className="py-16 container mx-auto px-4 max-w-3xl">
                {isScholarshipPillar && (
                    <div className="mb-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                        <img src="/images/logos/hec.png" alt="HEC Pakistan" className="h-10 w-auto" />
                        <img src="/images/logos/mofa.png" alt="MOFA Pakistan" className="h-10 w-auto" />
                        <img src="/images/logos/saudi-moe.png" alt="Saudi Ministry of Education" className="h-10 w-auto" />
                        <p className="w-full text-center text-[10px] text-slate-400 mt-2 italic font-sans">Recognized standards for documentation and certified translation.</p>
                    </div>
                )}

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

                {post.image && (
                    <div className="mb-12 relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <div 
                    className="prose prose-slate prose-lg max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-bold
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700
                    prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />

                {/* WhatsApp CTA Section */}
                <div className="mt-16 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 text-center shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-sans">Need Expert Help with Your Documents?</h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">Our Saudi scholarship consultants are ready to assist you with certified translations and attestation requirements. Get a response in minutes.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="https://wa.me/923044296295?text=Hi Lisan.pk, I need help with my Saudi scholarship document translation." 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                        >
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Contact Expert on WhatsApp
                        </a>
                        <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 px-8 py-4 rounded-full font-bold transition-all hover:border-emerald-300"
                        >
                            Request Free Quote Online
                        </Link>
                    </div>
                </div>

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

