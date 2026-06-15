import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { turkeyUniversities } from "@/data/turkey-universities"
import { LeadForm } from "@/components/turkey/LeadForm"
import { ExitPopup } from "@/components/turkey/ExitPopup"
import { StickyMobileCTA } from "@/components/turkey/StickyMobileCTA"


interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const university = turkeyUniversities[slug]
    if (!university) return { title: "University Not Found" }

    return {
        title: `${university.name} Admission 2026 Pakistan`,
        description: `Apply for ${university.name} in Istanbul, Turkey. Tuition fee range: ${university.tuitionRange}, popular courses, and direct admissions support with 50% scholarship.`,
        alternates: {
            canonical: `https://www.lisan.pk/study-in-turkey/${slug}`,
        },
        openGraph: {
            title: `${university.name} Admission 2026 — Pakistani Students Guide`,
            description: university.description,
            type: 'article',
        }
    }
}

export async function generateStaticParams() {
    return Object.keys(turkeyUniversities).map((slug) => ({ slug }))
}

export default async function TurkeyUniversityPage({ params }: PageProps) {
    const { slug } = await params
    const university = turkeyUniversities[slug]
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

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.lisan.pk#organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "description": "Pakistan's most trusted Arabic translation and international education consultancy. 40+ years of expertise led by MA Arabic & Islamiyat qualified founder.",
        "telephone": "+923044296295",
        "email": "lisan.pk.services@gmail.com",
        "foundingDate": "1984",
        "founder": {
            "@type": "Person",
            "name": "Muhammad Iftikhar Zahid",
            "jobTitle": "Founder & Head Translator"
        }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "publisher": {
            "@id": "https://www.lisan.pk#organization"
        },
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.lisan.pk/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Study in Turkey",
                "item": "https://www.lisan.pk/study-in-turkey"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": university.name,
                "item": `https://www.lisan.pk/study-in-turkey/${slug}`
            }
        ]
    }

    return (
        <main className="min-h-screen bg-white pt-24 font-sans overflow-x-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            
            <ExitPopup />
            <StickyMobileCTA />

            {/* Header / Hero */}
            <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Link href="/study-in-turkey" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mb-6 uppercase tracking-wider">
                        ← Back to Turkey Hub Admissions
                    </Link>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-emerald-500/20 select-none">
                        Direct Affiliated University Guide 2026
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-serif max-w-4xl mx-auto leading-tight text-slate-100">
                        {university.fullName} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400 font-extrabold italic">Guide for Pakistani Students</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 font-sans">
                        {university.description}
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {university.tags.map(tag => (
                            <span key={tag} className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">{tag}</span>
                        ))}
                        <span className="px-3.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold">📍 {university.location}</span>
                    </div>
                </div>
            </section>

            {/* Quick Metrics Bar */}
            <div className="bg-slate-50 border-b border-slate-200 py-6">
                <div className="container mx-auto px-4 max-w-6xl font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
                        <div className="flex flex-col items-center justify-center py-3 md:py-0">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Standard Tuition Fees
                            </span>
                            <span className="text-lg font-black text-slate-900">{university.tuitionRange}</span>
                        </div>
                        <div className="flex flex-col items-center justify-center py-3 md:py-0">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Scholarship Scheme
                            </span>
                            <span className="text-lg font-black text-emerald-600">Up to 50% Partner Waiver</span>
                        </div>
                        <div className="flex flex-col items-center justify-center py-3 md:py-0">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                Admission Intake Dates
                            </span>
                            <span className="text-sm font-black text-slate-900">Fall / Spring Cycles</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <section className="py-24 container mx-auto px-4 max-w-7xl font-sans">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    
                    {/* Primary Text Content column */}
                    <div className="lg:col-span-2 space-y-12 font-sans">
                        
                        {/* Dynamic University Body */}
                        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-strong:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-sm md:prose-p:text-base font-sans">
                            <h2>About {university.name}</h2>
                            {university.bodyContent.split('\n\n').map((para, i) => {
                                if (para.startsWith('**') && para.endsWith('**')) {
                                    return <h3 key={i} className="font-serif text-xl md:text-2xl mt-8 font-black">{para.replace(/\*\*/g, '')}</h3>
                                }
                                const parts = para.split(/(\*\*[^*]+\*\*)/)
                                return (
                                    <p key={i}>
                                        {parts.map((part, j) =>
                                            part.startsWith('**') ? <strong key={j} className="text-slate-900 font-extrabold">{part.replace(/\*\*/g, '')}</strong> : part
                                        )}
                                    </p>
                                )
                            })}
                        </div>

                        {/* Popular Programs Grid */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-slate-900 font-serif leading-tight">Featured Programs & Specializations</h2>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                The following degrees are fully taught in English and qualify for complete European Credit Transfer (ECTS) integration:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {university.popularPrograms.map((prog, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200/60 rounded-2xl">
                                        <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                        <span className="text-slate-900 font-bold text-sm">{prog}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Document Checklist */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-slate-900 font-serif leading-tight">Academic Checklist Requirements</h2>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                Prepare the following high-resolution scanned PDFs under 2 MB to bypass the primary portal filters:
                            </p>
                            <div className="space-y-3">
                                {university.checklist.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-200/60 rounded-2xl">
                                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                        <span className="text-slate-900 font-bold text-sm">{item}</span>
                                        <span className="text-emerald-600 font-extrabold ml-auto select-none">✓</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Official Links */}
                        <div className="p-8 bg-emerald-50/50 rounded-3xl border border-emerald-100 space-y-4">
                            <h3 className="text-2xl font-black text-slate-900 font-serif leading-tight">Official University Portal</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Review the university’s direct web profiles for course details, structure, and foreign accreditations. Lisan.pk manages all registration coordinates for Pakistani students directly.
                            </p>
                            <Link href={university.portalUrl} target="_blank">
                                <Button className="bg-slate-900 hover:bg-emerald-600 text-white font-extrabold h-12 px-6 rounded-xl flex items-center gap-2 transition-all">
                                    Visit Official Site
                                </Button>
                            </Link>
                        </div>

                        {/* FAQ Accordion block */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-slate-900 font-serif leading-tight">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {university.faqs.map((faq, idx) => (
                                    <div key={idx} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                                        <h4 className="text-lg font-black text-slate-900 mb-3 flex items-start gap-2">
                                            <span className="text-emerald-600 font-extrabold shrink-0">Q:</span>
                                            {faq.q}
                                        </h4>
                                        <p className="text-slate-600 leading-relaxed text-sm pl-6">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Internal links */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 font-sans">
                            <h3 className="font-bold text-slate-900 mb-4 text-lg">Related Guides & Resources</h3>
                            <div className="grid sm:grid-cols-2 gap-3 text-xs md:text-sm">
                                <Link href="/study-in-turkey" className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold">→ Lisan Study in Turkey Admission Hub</Link>
                                <Link href="/services/translation" className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold">→ Certified Academic Degree Translation</Link>
                                <Link href="/blog/why-arabic-translation-mandatory-saudi-universities-2026" className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold">→ Embassy Attestation & Translation Rules</Link>
                                <Link href="/contact" className="text-emerald-700 hover:text-emerald-800 hover:underline font-bold">→ 24/7 Professional Coordination Desk</Link>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar Form column */}
                    <div className="space-y-8 lg:sticky lg:top-28 h-fit font-sans">
                        
                        <div id="sidebar-lead-form">
                            <LeadForm defaultUniversity={university.name} />
                        </div>

                        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl space-y-6">
                            <h3 className="text-2xl font-black font-serif leading-tight">Yozgat Technopark Office Support</h3>
                            <p className="text-slate-400 leading-relaxed text-xs">
                                Our localized Turkish office in Bozok Technopark handles all on-ground registrations. We assist with airport pickups, residence permits, and student housing.
                            </p>
                            <ul className="space-y-3">
                                {["Official CAL in 3-5 days", "Pre-verified flat scholarships", "Full visa document attestation", "Airport pick-up services", "Hostel accommodation guides"].map((item) => (
                                    <li key={item} className="flex items-center gap-2.5 text-xs font-bold">
                                        <span className="text-emerald-400 font-extrabold shrink-0">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="tel:03044296295" className="block">
                                <Button variant="outline" className="w-full h-12 rounded-xl border-slate-700 text-slate-300 hover:bg-slate-800 font-bold flex items-center justify-center gap-2">
                                    Helpline: 0304 4296295
                                </Button>
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* Bottom Packages Segment */}
            <div className="border-t border-slate-200">

            </div>
        </main>
    )
}
