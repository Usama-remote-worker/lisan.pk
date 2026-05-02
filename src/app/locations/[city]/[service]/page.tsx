import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2, MapPin, Phone, MessageSquare, GraduationCap, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, services } from "@/data/location-services"

interface PageProps {
    params: Promise<{ city: string; service: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city, service } = await params
    const cityData = cities[city.toLowerCase() as keyof typeof cities]
    const serviceData = services[service.toLowerCase() as keyof typeof services]

    if (!cityData || !serviceData) return {}

    const title = service === 'degree-transcript-translation'
        ? `Translate degree and transcript into Arabic in ${cityData.name} for Saudi university admission`
        : `${serviceData.title} in ${cityData.name} | Certified Arabic Translation`

    const description = service === 'degree-transcript-translation'
        ? `Professional service to translate degree and transcript into Arabic in ${cityData.name} for Saudi university admission. 100% embassy accepted.`
        : `Get certified ${serviceData.title} in ${cityData.name} for Saudi scholarship and visa applications. Recognized by MOFA and HEC. 24-hour turnaround.`

    return {
        title,
        description,
        alternates: {
            canonical: `/locations/${city}/${service}`,
        },
    }
}

export async function generateStaticParams() {
    const params: { city: string; service: string }[] = []
    Object.keys(cities).forEach(city => {
        Object.keys(services).forEach(service => {
            params.push({ city, service })
        })
    })
    return params
}

import { JsonLd, generateServiceSchema } from "@/components/seo/JsonLd"
import { TestimonialSection } from "@/components/home/TestimonialSection"

export default async function LocalizedServicePage({ params }: PageProps) {
    const { city, service } = await params
    const cityData = cities[city.toLowerCase() as keyof typeof cities]
    const serviceData = services[service.toLowerCase() as keyof typeof services]

    if (!cityData || !serviceData) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <JsonLd data={generateServiceSchema(cityData.name, serviceData.title)} />
            
            <PageHero
                title={`${serviceData.title} in ${cityData.name}`}
                description={`Fast-track, certified Arabic translation for ${cityData.name} residents. Guaranteed acceptance by Saudi portals and embassies.`}
                breadcrumbs={[
                    { label: "Locations", href: "/locations" },
                    { label: cityData.name, href: `/locations/${city}` },
                    { label: serviceData.title }
                ]}
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-serif tracking-tight text-balance">
                                    {service === 'degree-transcript-translation' 
                                        ? `Translate degree and transcript into Arabic in ${cityData.name} for Saudi university admission`
                                        : `Certified ${serviceData.title} in ${cityData.name}`}
                                </h2>
                                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                                    {serviceData.engagementText} At <Link href="/" className="text-emerald-700 hover:underline font-bold">Lisan.pk</Link>, we provide expert <span className="font-bold text-slate-900">
                                        {service === 'degree-transcript-translation' 
                                            ? `degree and transcript translation into Arabic in ${cityData.name} for Saudi university admission`
                                            : `${serviceData.title} in ${cityData.name}`}
                                    </span>. Our embassy-grade services bypass the common rejection triggers of 2026.
                                </p>
                                
                                {cityData.regionalContext && (
                                    <div className="mb-10 p-8 bg-emerald-950 rounded-[2.5rem] text-white relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                                            <MapPin className="w-24 h-24" />
                                        </div>
                                        <p className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                            {cityData.name} Logistics Update
                                        </p>
                                        <p className="text-white text-lg font-medium leading-relaxed relative z-10">
                                            {cityData.regionalContext}
                                        </p>
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-6 my-10">
                                    {serviceData.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50">
                                            <CheckCircle2 className="text-emerald-600 w-5 h-5 shrink-0" />
                                            <span className="font-semibold text-emerald-950 text-[15px]">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    {cityData.localInfo} Whether you are verifying your {serviceData.slug.includes('degree') ? 'academic credentials' : 'personal documents'} at <span className="font-bold text-slate-900">{cityData.biseName || 'the local board'}</span> or preparing for a scholarship at <span className="font-bold text-slate-900">{cityData.hecCenter || 'HEC'}</span>, we ensure your {cityData.name}-issued documents are translated into perfect Arabic with 100% technical accuracy.
                                </p>
                            </div>

                            {/* Authority Data Section */}
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-serif">
                                        <MapPin className="text-emerald-400" /> Serving {cityData.name}
                                    </h3>
                                    <ul className="space-y-3 opacity-90">
                                        <li className="text-sm">✓ High Priority Service in {cityData.name}</li>
                                        <li className="text-sm">✓ Serving {cityData.landmark} areas</li>
                                        {cityData.biseName && <li className="text-sm">✓ Direct support for {cityData.biseName}</li>}
                                        {cityData.hecCenter && <li className="text-sm">✓ Aligned with {cityData.hecCenter}</li>}
                                    </ul>
                                </div>
                                <div className="p-8 bg-emerald-600 rounded-[2rem] text-white">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-serif">
                                        <Phone className="text-white" /> Quick Connect
                                    </h3>
                                    <p className="text-sm mb-6 opacity-90">Get a response in under 10 minutes for {cityData.name} service requests.</p>
                                    <Link href="tel:+923044296295" className="font-bold text-lg hover:underline block mb-2">+92 304 4296295</Link>
                                    <span className="text-xs uppercase tracking-widest font-bold opacity-70">Mon - Sat: 9am - 8pm</span>
                                </div>
                            </div>

                            {/* Conversational Guide */}
                            <div className="prose prose-slate max-w-none prose-h3:text-2xl prose-h3:font-bold prose-p:text-slate-600 prose-p:leading-relaxed">
                            <h3 className="font-serif">How your documents are handled in {cityData.name}</h3>
                            <p>
                                Applying from <span className="font-bold text-slate-900">{cityData.name}</span> means you are likely dealing with high volumes and tight deadlines. Our workflow is designed to minimize your stress:
                            </p>
                                <ol className="space-y-4">
                                    <li><strong>Digital Review</strong>: Send a WhatsApp scan. We verify if your {cityData.name}-issued certificate has the required local attestations.</li>
                                    <li><strong>Certified Drafting</strong>: Our qualified Arabic linguists translate and format the document to mirror the original perfectly.</li>
                                    <li><strong>Embassy Stamping</strong>: We apply our official certification seal which is recognized by the Saudi Cultural Attaché.</li>
                                </ol>
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl font-serif">Start Your Process</h3>
                                <div className="space-y-4">
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20${serviceData.title}%20in%20${cityData.name}.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-16 text-lg rounded-2xl shadow-lg transition-transform hover:-translate-y-1 text-white font-bold">
                                            WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="/contact" className="block w-full">
                                        <Button variant="outline" className="w-full h-16 text-lg border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors font-bold">
                                            Request Quote
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                    <div className="flex items-center justify-center gap-3 text-slate-500 mb-4">
                                        <Clock className="w-5 h-5 text-emerald-500" />
                                        <span className="text-sm font-bold">Available Now</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">100% Embassy Acceptance</p>
                                </div>
                            </div>

                            {/* Internal Linking Spoke */}
                            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-emerald-400">Related Scholarship Guides</h4>
                                <div className="space-y-3">
                                    <Link href="/consultancy/saudi-scholarship" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        Saudi Scholarship 2026 Guide
                                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    </Link>
                                    <Link href="/blog/fully-funded-scholarship-deadlines-saudi-universities-2026" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        KSU & KAU Deadlines
                                        <ArrowRight className="w-4 h-4 text-emerald-400" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSection />

            {/* Global Links to Home/About/Contact */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
                        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                        <Link href="/locations" className="hover:text-emerald-600 transition-colors">Locations</Link>
                        <Link href="/services" className="hover:text-emerald-600 transition-colors">All Services</Link>
                        <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

function Clock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
