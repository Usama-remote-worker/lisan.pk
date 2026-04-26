import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2, FileText, Globe, ShieldCheck, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData = {
    "nikah-nama-marriage-certificate": {
        title: "Certified Nikah Nama Translation Pakistan | Lisan.pk",
        h1: "Certified Nikah Nama Translation | Official & Recognized",
        description: "Certified Arabic & English translation for Nikah Nama. Official and embassy-recognized services in Pakistan. Fast delivery for Saudi & UAE visas.",
        content: "Translating a Nikah Nama requires precision, as legal terminology and dates must be exact. Our certified translations are recognized by embassies for spouse visas, family registration, and legal stay applications.",
        features: ["Embassy Certified", "Same-day Service", "Notarized Certificate", "Accurate Date Conversion"],
        checklist: ["Original Arabic/Urdu Nikah Nama", "Passport copies of Bride & Groom", "CNIC copies for verification"],
        faqs: [
            { q: "Is this translation valid for UK/USA visas?", a: "Yes, our certified translations meet the 'Certificate of Accuracy' requirements for all major western embassies." },
            { q: "Do you translate handwritten Nikah Namas?", a: "Yes, our experts are experienced in deciphering traditional calligraphy and handwritten legal scripts." }
        ]
    },
    "birth-certificate-translation": {
        title: "Certified Birth Certificate Translation Pakistan | Lisan.pk",
        h1: "Certified Birth Certificate Translation for Visa & Immigration",
        description: "Official Arabic & English translation of NADRA birth certificates. Accepted by embassies for visa & immigration. Certified and fast turnaround.",
        content: "A birth certificate is the most critical document for identity verification. We provide certified translations that mirror the original format, ensuring zero friction during your visa interview.",
        features: ["NADRA Format Matching", "Global Recognition", "Fast Digital Copy", "Official Seal & Stamp"],
        checklist: ["Original NADRA Birth Certificate", "Correct spelling of names as per Passport", "Date of birth verification"],
        faqs: [
            { q: "How long does it take?", a: "Standard delivery is within 24 hours. We also offer 2-hour express translation for urgent cases." },
            { q: "Do I need the original copy?", a: "A clear scan or photo is usually sufficient for the translation process." }
        ]
    },
    "academic-degree-transcript": {
        title: "Degree & Transcript Translation Pakistan | Lisan.pk",
        h1: "Professional Academic Translation | HEC Recognized Documents",
        description: "Professional Arabic translation for degrees and transcripts. HEC and MOFA compliant. Trusted for Saudi, UAE & Gulf visa applications.",
        content: "Your academic future depends on accurate representation. We translate Pakistani degrees and transcripts into Arabic for Gulf countries (Saudi, UAE, Qatar) and English for Western universities.",
        features: ["Technical Terminology", "HEC Compliance", "WES/IQAS Friendly", "Transcript Formatting"],
        checklist: ["HEC Attested Original Degree", "Marksheet/Transcript", "Passport for name matching"],
        faqs: [
            { q: "Do you provide translation for WES evaluation?", a: "Yes, our translations are formatted to meet the specific requirements of WES, IQAS, and other evaluation bodies." },
            { q: "Can you help with HEC attestation too?", a: "Yes, we provide consultancy and logistics support for the entire HEC and MOFA verification process." }
        ]
    }
}

interface PageProps {
    params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const data = serviceData[params.slug as keyof typeof serviceData]
    if (!data) return {}

    return {
        title: `${data.title} | Lisan.pk`,
        description: data.description,
    }
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug: slug,
    }))
}

export default function ServiceDetailPage({ params }: PageProps) {
    const data = serviceData[params.slug as keyof typeof serviceData]

    if (!data) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title={data.title}
                description={data.description}
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Translation", href: "/services/translation" },
                    { label: data.title }
                ]}
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-slate max-w-none">
                                <h1 className="text-3xl font-extrabold text-slate-900 mb-6">{data.h1}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {data.content}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {data.features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Requirements Checklist</h2>
                                <ul className="space-y-4 mb-12">
                                    {data.checklist.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-slate-600">
                                            <div className="h-6 w-6 mt-1 rounded-md bg-slate-200 flex items-center justify-center flex-shrink-0">
                                                <FileText className="w-4 h-4 text-slate-500" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {data.faqs.map((faq, idx) => (
                                        <div key={idx} className="p-6 bg-slate-100/50 rounded-2xl border border-slate-200">
                                            <h4 className="font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                                            <p className="text-slate-600">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Interlinking to Locations */}
                            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">Availability in Major Cities</h3>
                                <p className="text-emerald-800/80 mb-6 text-sm">
                                    We provide this specialized service across Pakistan. Click a city to learn about local pickup and delivery options:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['lahore', 'karachi', 'islamabad', 'faisalabad', 'multan', 'sialkot'].map(city => (
                                        <Link 
                                            key={city} 
                                            href={`/locations/${city}`}
                                            className="px-4 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-full text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all capitalize"
                                        >
                                            {city}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl">Order Professional Translation</h3>
                                <div className="space-y-4">
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20${data.title}%20translation%20services.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 text-lg">
                                            <MessageSquare className="mr-2" /> WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923044296295" className="block w-full">
                                        <Button variant="outline" className="w-full h-14 text-lg border-slate-200">
                                            <Phone className="mr-2" /> Direct Call
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                                    <p className="text-sm text-slate-500 italic mb-4">"Trusted by 50,000+ clients over 40 years."</p>
                                    <div className="flex justify-center gap-4">
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-600">4.9/5</div>
                                            <div className="text-[10px] uppercase text-slate-400">Google Rating</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-600">100%</div>
                                            <div className="text-[10px] uppercase text-slate-400">Acceptance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
