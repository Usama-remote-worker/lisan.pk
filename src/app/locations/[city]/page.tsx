import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2, MapPin, Phone, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ServicePackages } from "@/components/home/ServicePackages"

import { cities, services } from "@/data/location-services"

interface PageProps {
    params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params
    const normalizedCity = city.toLowerCase().replace(/[\s_]+/g, '-')
    const cityData = cities[normalizedCity as keyof typeof cities]
    if (!cityData) return {}

    return {
        title: `Arabic Translation & Certified Document Services in ${cityData.name}`,
        description: `Certified Arabic translation, attestation, and document legalization services in ${cityData.name}. Trusted for Saudi and UAE embassy applications with secure handling.`,
        alternates: {
            canonical: `/locations/${normalizedCity}`,
        },
    }
}


export async function generateStaticParams() {
    return Object.keys(cities).map((city) => ({
        city: city,
    }))
}

export default async function LocationPage({ params }: PageProps) {
    const { city } = await params
    const normalizedCity = city.toLowerCase().replace(/[\s_]+/g, '-')
    const cityData = cities[normalizedCity as keyof typeof cities]

    if (!cityData) {
        notFound()
    }

    const biseText = cityData.biseName ? `the ${cityData.biseName}` : "the local Board of Intermediate and Secondary Education (BISE)";
    const hecText = cityData.hecCenter ? `at the ${cityData.hecCenter}` : "at your regional Higher Education Commission (HEC) center";

    const cityFaqs = [
        {
            q: `Where can I get certified Arabic translation services in ${cityData.name}?`,
            a: `Lisan.pk is Pakistan’s leading, embassy-approved translation platform. We serve residents of ${cityData.name} (with high priority handling near ${cityData.landmark}) by providing certified Arabic translations for degrees, transcripts, birth certificates, marriage documents, and legal affidavits. Clear photos or digital scans can be sent directly via WhatsApp, and the final certified documents are delivered safely to your home via secure courier.`
        },
        {
            q: `Do I need to travel to Islamabad or Lahore from ${cityData.name} for MOFA or Saudi Embassy attestation?`,
            a: `No, you do not need to travel! Lisan.pk provides complete, end-to-end legalization services on your behalf. We manage the entire verification workflow—including coordinating with ${biseText}, HEC, and MOFA—and courier the completed, official embassy-ready documents directly back to your address in ${cityData.name}.`
        },
        {
            q: `What is the turnaround time for certified translations in ${cityData.name}?`,
            a: `Our standard translation and stamping process takes 24 to 48 hours. Once complete, we use high-speed courier partners (TCS or Leopards) to deliver the physical certified documents to your doorstep anywhere in ${cityData.name}, complete with tracking details.`
        }
    ];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.lisan.pk"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Locations",
                "item": "https://www.lisan.pk/#locations"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": cityData.name,
                "item": `https://www.lisan.pk/locations/${normalizedCity}`
            }
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Lisan.pk Arabic Translation ${cityData.name}`,
        "description": cityData.description,
        "url": `https://www.lisan.pk/locations/${normalizedCity}`,
        "telephone": "+923044296295",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityData.name,
            "addressCountry": "PK"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": cityData.lat,
            "longitude": cityData.lng
        },
        "areaServed": {
            "@type": "City",
            "name": cityData.name
        },
        "priceRange": "$$"
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": cityFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    }

    return (
        <main className="min-h-screen bg-[#fcfdfe]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <PageHero
                title={`Arabic Translation in ${cityData.name}`}
                description={`Certified & embassy-recognized translation services for residents of ${cityData.name}. Trusted for Saudi, UAE, and Gulf document legalization.`}
                breadcrumbs={[
                    { label: "Locations", href: "/#locations" },
                    { label: cityData.name }
                ]}
            />

            {/* Service Grid - The "Catalog" */}
            <section className="py-20 -mt-10 relative z-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Service Catalog: {cityData.name}</h2>
                                <p className="text-slate-500 text-lg">Select a service below to see specific requirements and pricing for {cityData.name}.</p>
                            </div>
                            <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10 mb-5"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full mb-2">
                                {Object.keys(services).length} Available Services
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.values(services).map((item) => (
                                <Link 
                                    key={item.slug}
                                    href={`/locations/${normalizedCity}/${item.slug}`}
                                    className="group flex flex-col p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-emerald-100"
                                >
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                        Professional Arabic translation and legalization for your {item.title.toLowerCase()} in {cityData.name}.
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Packages Section */}
            <ServicePackages />

            <section className="pb-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-16 items-start">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            <div className="prose prose-slate prose-lg max-w-none">
                                <h2 className="text-4xl font-bold text-slate-900 font-serif leading-tight">Expert Document Legalization for {cityData.name} Clients</h2>
                                <p className="text-slate-600">
                                    Residents of {cityData.name} no longer need to travel to Islamabad or Lahore for high-quality translation and attestation. Lisan.pk brings 40+ years of expertise directly to your doorstep. We handle everything from <span className="font-bold text-slate-900">HEC degree verification</span> to <span className="font-bold text-slate-900">Saudi Embassy attestation</span> with secure courier support.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 my-12">
                                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 relative">
                                            <MapPin className="text-emerald-600" /> Local Knowledge
                                        </h3>
                                        <p className="text-slate-500 text-[15px] leading-relaxed relative italic">
                                            Serving all areas near {cityData.landmark}. {cityData.localInfo}
                                        </p>
                                    </div>
                                    <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            <Phone className="text-emerald-400" /> Express Support
                                        </h3>
                                        <p className="text-slate-400 text-[15px] leading-relaxed mb-6">
                                            Our {cityData.name} division offers direct priority processing for urgent embassy deadlines.
                                        </p>
                                        <Link href="tel:+923044296295" className="font-bold text-emerald-400 hover:underline">+92 304 4296295</Link>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Workflow for {cityData.name} Residents</h3>
                                <p className="text-slate-600 mb-8">
                                    Simply send a clear photo or scan of your documents via WhatsApp. Our service in {cityData.name} (or our main hub) will review the requirements, provide a quote, and execute the translation or attestation within 24-48 hours.
                                </p>
                                
                                <div className="space-y-4">
                                    {[
                                        "Secure document pickup from your home/office in " + cityData.name,
                                        "Certified translation by MA Arabic qualified experts",
                                        "MOFA & Saudi Embassy attestation coordination",
                                        "Safe return delivery with tracking"
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-50">
                                            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                                                {idx + 1}
                                            </div>
                                            <span className="text-slate-700 font-medium">{step}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Localized FAQ Section */}
                                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8 mt-16">
                                    <h3 className="text-3xl font-bold text-slate-900 font-serif tracking-tight">
                                        Frequently Asked Questions – {cityData.name}
                                    </h3>
                                    <div className="space-y-6">
                                        {cityFaqs.map((faq, idx) => (
                                            <div key={idx} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-2">
                                                    <span className="text-emerald-600 font-bold">Q:</span>
                                                    {faq.q}
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed pl-6">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <aside className="space-y-8 lg:sticky lg:top-28">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 border border-slate-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-600"></div>
                                <h3 className="font-bold text-slate-900 mb-6 text-2xl font-serif">Instant Quote</h3>
                                <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                                    Upload your documents via WhatsApp for a precise quote within 10 minutes. 100% data privacy guaranteed.
                                </p>
                                <div className="space-y-4">
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20translation%20services%20in%20${cityData.name}.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-16 text-lg rounded-2xl shadow-lg transition-transform hover:-translate-y-1 active:scale-95">
                                            <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923044296295" className="block w-full">
                                        <Button variant="outline" className="w-full h-16 text-lg border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                                            <Phone className="mr-2 h-5 w-5" /> Call Agent
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4 text-slate-400">
                                    <div className="p-3 bg-slate-50 rounded-full">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider">Serving all zones in {cityData.name}.</span>
                                </div>
                            </div>

                            <div className="bg-emerald-900 p-8 rounded-[2.5rem] text-white">
                                <h4 className="font-bold mb-4 text-emerald-400 uppercase tracking-widest text-xs">Trust Indicators</h4>
                                <ul className="space-y-4">
                                    {[
                                        "40+ Years of Excellence",
                                        "100% Embassy Acceptance",
                                        "Certified Arabic Experts",
                                        "Verified Legal Stamps"
                                    ].map(t => (
                                        <li key={t} className="flex items-center gap-3 text-sm font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    )
}
