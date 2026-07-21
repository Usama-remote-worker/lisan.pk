import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, services, isAllowlistedSubPage } from "@/data/location-services"
import { JsonLd, generateServiceSchema } from "@/components/seo/JsonLd"
import { TestimonialSection } from "@/components/home/TestimonialSection"

interface PageProps {
    params: Promise<{ city: string; service: string }>
}

function getMainServiceUrl(serviceSlug: string): { url: string; label: string } {
    switch (serviceSlug.toLowerCase()) {
        case 'degree-transcript-translation':
        case 'matric-certificate-translation':
        case 'intermediate-certificate-translation':
        case 'diploma-certificate-translation':
            return { url: '/certified-document-translation/degree-transcript', label: 'Main Academic Degree Translation Service' }
        case 'nikah-nama-translation':
        case 'birth-certificate-translation':
        case 'domicile-certificate-translation':
            return { url: '/certified-document-translation/nadra-nikahnama', label: 'Main Marriage & Identity Translation Service' }
        default:
            return { url: '/certified-document-translation/legal-documents', label: 'Main Legal Document Translation Service' }
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city, service } = await params
    const normalizedCity = city.toLowerCase().replace(/[\s_]+/g, '-')
    const cityData = cities[normalizedCity as keyof typeof cities]
    const serviceData = services[service.toLowerCase() as keyof typeof services]

    if (!cityData || !serviceData) return {}

    const isAllowlisted = isAllowlistedSubPage(normalizedCity, service)

    const title = service.toLowerCase() === 'degree-transcript-translation'
        ? `Degree & Transcript Translation into Arabic in ${cityData.name} | Embassy Accepted`
        : `Certified ${serviceData.title} in ${cityData.name} | Embassy Accepted`

    const description = `Official certified ${serviceData.title.toLowerCase()} in ${cityData.name} for Saudi scholarship and visa applications. Recognized by MOFA, HEC, and Saudi Embassy with 24h express turnaround.`

    return {
        title,
        description,
        robots: isAllowlisted ? { index: true, follow: true } : { index: false, follow: true },
        alternates: {
            canonical: `https://www.lisan.pk/locations/${normalizedCity}/${service.toLowerCase()}`,
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

export default async function LocalizedServicePage({ params }: PageProps) {
    const { city, service } = await params
    const normalizedCity = city.toLowerCase().replace(/[\s_]+/g, '-')
    const cityData = cities[normalizedCity as keyof typeof cities]
    const serviceData = services[service.toLowerCase() as keyof typeof services]

    if (!cityData || !serviceData) {
        notFound()
    }

    const isAllowlisted = isAllowlistedSubPage(normalizedCity, service)
    const mainService = getMainServiceUrl(service)

    const biseText = cityData.biseName ? `the ${cityData.biseName}` : "the local Board of Intermediate and Secondary Education (BISE)";
    const hecText = cityData.hecCenter ? `at the ${cityData.hecCenter}` : "at your regional Higher Education Commission (HEC) center";

    const faqs = [
        {
            q: `How can I get my ${serviceData.title} translated into Arabic in ${cityData.name}?`,
            a: `To translate your ${serviceData.title} in ${cityData.name}, simply send a high-quality photo or scan of the document to Lisan.pk via WhatsApp at +92 304 4296295. Our certified Arabic translators will translate, stamp, and sign your document to meet embassy standards, and send the official hard copy to your doorstep via secure courier.`
        },
        {
            q: `Is the translation of my ${serviceData.title} from ${cityData.name} accepted by the Saudi Embassy?`,
            a: `Yes! All translations provided by Lisan.pk carry our certified translation stamp and signature, which is 100% accepted by the Saudi Embassy, MOFA (Ministry of Foreign Affairs), and the Ministry of Education for scholarship or visa portals.`
        },
        {
            q: `Where do I get my ${cityData.name}-issued ${serviceData.title} verified or attested before translation?`,
            a: `For official Saudi university or embassy submissions, personal documents should ideally be attested by MOFA, and academic documents verified by ${biseText} or ${hecText}. We then provide the certified Arabic translation complete with our registered legal stamp, ensuring seamless portal uploads.`
        },
        {
            q: `How long does it take to translate and deliver my ${serviceData.title} in ${cityData.name}?`,
            a: `We offer a rapid 24-hour express service for urgent translation needs. Once the certified copy is stamped, we ship it to your location in ${cityData.name} (serving areas near ${cityData.landmark}) via TCS or Leopards courier, reaching you in 1-2 business days.`
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <JsonLd data={generateServiceSchema(cityData.name, serviceData.title)} />
            <JsonLd data={faqSchema} />
            
            <PageHero
                title={`Certified ${serviceData.title} in ${cityData.name}`}
                description={`Fast-track, embassy-accepted Arabic translation for ${cityData.name} residents. Guaranteed acceptance by Saudi portals, MOFA, and Gulf embassies.`}
                breadcrumbs={[
                    { label: "Locations", href: "/locations" },
                    { label: cityData.name, href: `/locations/${normalizedCity}` },
                    { label: serviceData.title }
                ]}
            />

            <section className="py-20 font-sans">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            {/* Hub & Spoke Back-Navigation Banner */}
                            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 text-sm font-sans">
                                <div className="flex items-center gap-2 text-emerald-950 font-medium">
                                    <span>📍 Service Hub:</span>
                                    <Link href={`/locations/${normalizedCity}`} className="font-bold text-emerald-800 underline hover:text-emerald-950">
                                        All Services in {cityData.name}
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 text-emerald-950 font-medium">
                                    <span>📄 Pillar Service:</span>
                                    <Link href={mainService.url} className="font-bold text-emerald-800 underline hover:text-emerald-950">
                                        {mainService.label}
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm font-sans">
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
                                
                                {cityData.regionalContext ? (
                                    <div className="mb-10 p-8 bg-emerald-950 rounded-[2.5rem] text-white relative overflow-hidden group">
                                        <p className="text-emerald-400 font-bold mb-3 uppercase tracking-widest text-xs flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                            {cityData.name} Logistics & Local Context
                                        </p>
                                        <p className="text-white text-lg font-medium leading-relaxed relative z-10">
                                            {cityData.regionalContext}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mb-10 p-6 bg-amber-50/50 border border-amber-200/50 rounded-2xl text-amber-900 text-sm italic font-mono">
                                        {"{{TODO: unique local content needed}}"}
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-6 my-10">
                                    {serviceData.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100/50">
                                            <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                            <span className="font-semibold text-emerald-950 text-[15px]">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-slate-600 leading-relaxed">
                                    {cityData.localInfo} Whether you are verifying your {serviceData.slug.includes('degree') ? 'academic credentials' : 'personal documents'} at <span className="font-bold text-slate-900">{cityData.biseName || 'the local board'}</span> or preparing for a scholarship at <span className="font-bold text-slate-900">{cityData.hecCenter || 'HEC'}</span>, we ensure your {cityData.name}-issued documents are translated into perfect Arabic with 100% technical accuracy.
                                </p>
                            </div>

                            {/* Service attestation verification specifications */}
                            <div className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm space-y-6">
                                <h3 className="text-2xl font-bold text-slate-900 font-serif">
                                    Attestation Checklist for {serviceData.title} in {cityData.name}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    To guarantee that your translated <span className="font-bold text-slate-800">{serviceData.title}</span> is accepted by the Saudi Embassy, MOFA, or university admissions boards without delays, please verify the following regional steps:
                                </p>
                                <div className="grid gap-4">
                                    {service.includes('degree') || service.includes('transcript') || service.includes('matric') || service.includes('intermediate') || service.includes('diploma') ? (
                                        <>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">1</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Board / HEC Verification First</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Academic records must be verified by {cityData.biseName || 'your local BISE Board'} (for certificates) or {cityData.hecCenter || 'HEC Regional Center'} (for degrees).</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">2</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">MOFA Attestation Support</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Once verified, the document requires an active sticker attestation from the Ministry of Foreign Affairs (MOFA) in Pakistan.</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">3</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Certified Arabic Translation</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Lisan.pk will draft, format, and apply certified legal stamps to your document in perfect Arabic to mirror the MOFA-attested original.</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : service.includes('nikah-nama') || service.includes('birth-certificate') ? (
                                        <>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">1</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">NADRA Registration Certificate</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Ensure your personal records are on a computerized NADRA certificate before starting the translation flow.</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">2</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">MOFA Verification</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Your NADRA certificate must be attested by MOFA (Ministry of Foreign Affairs) {cityData.mofaOffice ? `at ${cityData.mofaOffice}` : 'at your nearest regional center'}.</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">3</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Lisan.pk Stamp & Sign</h4>
                                                    <p className="text-slate-500 text-sm mt-1">We apply our certified embassy-accepted stamps and signature. This guarantees acceptance on all Saudi portals.</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">1</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Official Document Verification</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Confirm that your document is officially issued by the relevant municipal or federal authority in {cityData.name}.</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">2</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Legal Translation Delivery</h4>
                                                    <p className="text-slate-500 text-sm mt-1">Lisan.pk will assign a specialized translator with exact expertise in {serviceData.title.toLowerCase()} terminology to draft your file.</p>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white rounded-xl border border-slate-100 flex gap-4">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold shrink-0 select-none">3</div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-[15px]">Secure Courier Delivery</h4>
                                                    <p className="text-slate-500 text-sm mt-1">We dispatch the legal translation directly to your doorstep in {cityData.name} via tracked DHL/TCS/Leopards delivery.</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Authority Data Section */}
                            <div className="grid sm:grid-cols-2 gap-8 font-sans">
                                <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                                    <h3 className="text-xl font-bold mb-4 font-serif">
                                        Serving {cityData.name}
                                    </h3>
                                    <ul className="space-y-3 opacity-90">
                                        <li className="text-sm">✓ High Priority Service in {cityData.name}</li>
                                        <li className="text-sm">✓ Serving {cityData.landmark} areas</li>
                                        {cityData.biseName && <li className="text-sm">✓ Direct support for {cityData.biseName}</li>}
                                        {cityData.hecCenter && <li className="text-sm">✓ Aligned with {cityData.hecCenter}</li>}
                                    </ul>
                                </div>
                                <div className="p-8 bg-emerald-600 rounded-[2rem] text-white">
                                    <h3 className="text-xl font-bold mb-4 font-serif">
                                        Quick Connect
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

                            {/* Localized FAQ Section */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
                                <h3 className="text-3xl font-bold text-slate-900 font-serif tracking-tight">
                                    Frequently Asked Questions – {cityData.name}
                                </h3>
                                <div className="space-y-6">
                                    {faqs.map((faq, idx) => (
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

                        {/* Sidebar CTA */}
                        <div className="space-y-6 font-sans">
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
                                <div className="mt-8 pt-8 border-t border-slate-100 text-center font-sans">
                                    <div className="flex items-center justify-center gap-3 text-slate-500 mb-4">
                                        <span className="text-sm font-bold">● Available Now</span>
                                    </div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">100% Embassy Acceptance</p>
                                </div>
                            </div>

                            {/* Spoke Navigation to Hub & Main Service */}
                            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
                                <h4 className="font-bold text-sm uppercase tracking-wider text-emerald-400">Navigation & Spoke Links</h4>
                                <div className="space-y-3">
                                    <Link href={`/locations/${normalizedCity}`} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        <span>📍 {cityData.name} Location Hub</span>
                                        <span className="text-emerald-400">→</span>
                                    </Link>
                                    <Link href={mainService.url} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        <span>📄 {mainService.label}</span>
                                        <span className="text-emerald-400">→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Internal Linking Spoke */}
                            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-emerald-400">Related Scholarship Guides</h4>
                                <div className="space-y-3">
                                    <Link href="/consultancy/saudi-scholarship" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        Saudi Scholarship 2026 Guide
                                        <span className="text-emerald-400">→</span>
                                    </Link>
                                    <Link href="/blog/fully-funded-scholarship-deadlines-saudi-universities-2026" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl text-sm font-medium hover:bg-white/10 transition-all group">
                                        KSU & KAU Deadlines
                                        <span className="text-emerald-400">→</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Study in Turkey Cross-Linking Widget */}
                            <div className="p-8 bg-gradient-to-br from-emerald-950 to-slate-900 rounded-[2.5rem] text-white border border-emerald-900/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-4">
                                    Study Abroad from {cityData.name}
                                </div>
                                <h4 className="text-lg font-black text-white leading-snug mb-3 font-serif">
                                    Study in Turkey — Up to 75% Scholarship
                                </h4>
                                <p className="text-slate-400 text-xs leading-relaxed mb-5">
                                    Students from {cityData.name} are now securing guaranteed university admissions in Istanbul with zero IELTS requirement. Our physical Bozok Technopark desk handles all on-ground support.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {["No IELTS mandatory", "50%+ flat scholarship waiver", "Physical Turkey HQ verified", "Free application processing"].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-200">
                                            <span className="text-emerald-400 shrink-0">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-2">
                                    <Link
                                        href="/study-in-turkey"
                                        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl font-extrabold text-sm transition-all"
                                    >
                                        Explore Turkey Admissions →
                                    </Link>
                                    <Link
                                        href={`https://wa.me/923044296295?text=Hi%20Lisan.pk%2C%20I%20am%20from%20${encodeURIComponent(cityData.name)}%20and%20want%20to%20know%20about%20Study%20in%20Turkey%20admissions.`}
                                        target="_blank"
                                        className="block w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-center py-3 rounded-xl font-bold text-xs transition-all"
                                    >
                                        WhatsApp Turkey Desk
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialSection />

            {/* Global Links to Home/About/Contact */}
            <section className="py-12 bg-white border-t border-slate-100 font-sans">
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

