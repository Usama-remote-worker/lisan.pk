import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { universities } from "@/data/scholarship-universities"
import { ServicePackages } from "@/components/home/ServicePackages"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const university = universities[slug]
    if (!university) return { title: "University Not Found" }

    return {
        title: `${university.name} Scholarship 2026 Guide`,
        description: `Complete documentation guide, translation requirements, and application checklist for ${university.name} fully funded scholarship 2026. Certified Arabic translation support for Pakistani students.`,
        alternates: {
            canonical: `https://www.lisan.pk/scholarships/${slug}`,
        },
        openGraph: {
            title: `${university.name} Scholarship 2026 — Pakistani Students Guide`,
            description: university.description,
            type: 'article',
        }
    }
}

export default async function UniversityPage({ params }: PageProps) {
    const { slug } = await params
    const university = universities[slug]
    if (!university) notFound()

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": university.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${university.name} Scholarship for Pakistani Students 2026`,
        "description": university.description,
        "author": { "@type": "Organization", "name": "Lisan.pk" },
        "publisher": {
            "@type": "Organization",
            "name": "Lisan.pk",
            "logo": { "@type": "ImageObject", "url": "https://www.lisan.pk/logo.png" }
        },
        "datePublished": "2026-01-01",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.lisan.pk/scholarships/${slug}` }
    }

    return (
        <main className="min-h-screen bg-white pt-24 font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

            {/* Hero */}
            <section className="py-20 bg-emerald-950 text-white relative overflow-hidden font-sans">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-emerald-500/20 select-none">
                        Fully Funded Scholarship Guide 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif max-w-4xl mx-auto leading-tight">
                        {university.fullName} <br />
                        <span className="text-emerald-400 italic">Guide for Pakistani Students</span>
                    </h1>
                    <p className="text-xl text-emerald-50/70 max-w-3xl mx-auto leading-relaxed mb-8 font-sans">
                        {university.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        {university.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/30 font-sans">{tag}</span>
                        ))}
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold border border-emerald-500/30 font-sans">📍 {university.location}</span>
                    </div>
                </div>
            </section>

            {/* Top CTA */}
            <div className="bg-amber-50 border-b border-amber-100 py-4 font-sans">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <p className="font-bold text-amber-900 text-sm">⚡ Need certified Arabic translations for {university.name}? Get same-day delivery.</p>
                    <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20certified%20Arabic%20translation%20for%20my%20Saudi%20scholarship%20application." target="_blank" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap">WhatsApp Now: 03044296295</Link>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-24 container mx-auto px-4 max-w-7xl font-sans">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Body Content */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-strong:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed font-sans">
                            <h2>About {university.name} Scholarship for Pakistani Students</h2>
                            {university.bodyContent.split('\n\n').map((para, i) => {
                                if (para.startsWith('**') && para.endsWith('**')) {
                                    return <h3 key={i}>{para.replace(/\*\*/g, '')}</h3>
                                }
                                if (para.includes('\n1.') || para.includes('\n2.')) {
                                    const lines = para.split('\n')
                                    return (
                                        <div key={i}>
                                            {lines[0] && <p>{lines[0]}</p>}
                                            <ol>
                                                {lines.slice(1).filter(l => l.trim()).map((line, j) => (
                                                    <li key={j}>{line.replace(/^\d+\.\s/, '')}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    )
                                }
                                // Render bold inline text
                                const parts = para.split(/(\*\*[^*]+\*\*)/)
                                return (
                                    <p key={i}>
                                        {parts.map((part, j) =>
                                            part.startsWith('**') ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong> : part
                                        )}
                                    </p>
                                )
                            })}
                        </div>

                        {/* Document Checklist */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Complete Document Checklist</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                To ensure your application for <strong>{university.name} scholarship 2026</strong> is successful, you must prepare the following documents. All documents issued in Urdu or languages other than Arabic must be accompanied by a certified Arabic translation.
                            </p>
                            <div className="space-y-3">
                                {university.checklist.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                        <span className="text-slate-900 font-medium text-sm">{item}</span>
                                        <span className="text-emerald-600 font-bold ml-auto select-none">✓</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Official Portal */}
                        <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 font-sans">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4 font-serif">Official Application Portal</h3>
                            <p className="text-emerald-800/70 mb-6 text-sm">
                                Ready to submit? Visit the official {university.name} admission portal. Ensure all your documents are translated and attested before uploading.
                            </p>
                            <Link href={university.portalUrl} target="_blank">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 rounded-xl font-bold">
                                    Access Official Portal
                                </Button>
                            </Link>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8 font-sans">
                            <h2 className="text-3xl font-bold text-slate-900 font-serif">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {university.faqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2 font-serif">
                                            <span className="text-emerald-600 font-bold shrink-0">Q:</span>
                                            {faq.q}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed pl-6 text-sm">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Internal links */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 font-sans">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Related Guides</h3>
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                <Link href="/blog/required-documents-saudi-scholarship-2026" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ Required Documents for Saudi Scholarship 2026</Link>
                                <Link href="/blog/why-arabic-translation-mandatory-saudi-universities-2026" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ Why Arabic Translation is Mandatory</Link>
                                <Link href="/blog/hec-attested-degree-arabic-translation-services-pakistan" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ HEC Attested Degree Translation Guide</Link>
                                <Link href="/blog/saudi-embassy-rejection-translation-fix-pakistan" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ Saudi Embassy Rejection: Translation Fixes</Link>
                                <Link href="/services/translation" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ Our Certified Arabic Translation Services</Link>
                                <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 hover:text-emerald-800 hover:underline font-medium">→ Saudi Scholarship Consultancy</Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8 lg:sticky lg:top-28 h-fit font-sans">
                        <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 font-serif text-emerald-400">How Lisan.pk Helps</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                                We provide university-specific translation bundles that match the exact portal requirements of {university.name}. 100% acceptance guaranteed.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm">
                                {["Portal-ready PDF scans", "Certified Arabic stamps & signature", "MA Arabic expert proofreading", "Same-day priority service", "All document types covered"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 font-medium">
                                        <span className="text-emerald-400 font-extrabold select-none">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20certified%20Arabic%20translation%20for%20my%20Saudi%20scholarship%20application." target="_blank" className="block">
                                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black h-14 rounded-xl mb-3">WhatsApp Expert Now</Button>
                            </Link>
                            <Link href="tel:+923044296295" className="block">
                                <Button variant="outline" className="w-full h-12 rounded-xl border-slate-700 text-slate-300 hover:bg-slate-800 font-bold">
                                    Call 03044296295
                                </Button>
                            </Link>
                        </div>

                        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center font-sans">
                            <p className="text-emerald-900 font-bold mb-2 text-sm">📋 Upload Documents for Free Quote</p>
                            <p className="text-emerald-800/70 text-xs mb-4">Get a precise quote in under 10 minutes</p>
                            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">Upload Documents</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Bridge */}
            <div className="border-t border-slate-100 pt-12">
                <ServicePackages />
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return Object.keys(universities).map((slug) => ({ slug }))
}
