import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2, MapPin, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const cities = {
    "lahore": { name: "Lahore", description: "The primary hub for Arabic translation and embassy attestation at Muslim Town, Ferozepur Road." },
    "karachi": { name: "Karachi", description: "Professional document services for businesses and individuals in the financial capital of Pakistan." },
    "islamabad": { name: "Islamabad", description: "Expert attestation and translation support near the Diplomatic Enclave and foreign embassies." },
    "faisalabad": { name: "Faisalabad", description: "Fast-track translation for students and professionals in the industrial heart of Punjab." },
    "multan": { name: "Multan", description: "Certified document legalization and translation for South Punjab residents." },
    "rawalpindi": { name: "Rawalpindi", description: "Quick attestation support for MOFA and embassy document processing for the twin cities." },
    "peshawar": { name: "Peshawar", description: "Official translation and attestation services for students and workers in KPK." },
    "sialkot": { name: "Sialkot", description: "Specialized export and business document translation for the Sialkot trade community." },
    "gujranwala": { name: "Gujranwala", description: "Reliable certified translation for marriage certificates and academic degrees." },
    "quetta": { name: "Quetta", description: "Secure document attestation and translation support for Balochistan." }
}

interface PageProps {
    params: { city: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const cityData = cities[params.city as keyof typeof cities]
    if (!cityData) return {}

    return {
        title: `Arabic Translation & Attestation in ${cityData.name} | Lisan.pk`,
        description: `Need certified Arabic translation or MOFA/HEC attestation in ${cityData.name}? Lisan.pk provides professional, embassy-recognized document services nationwide.`,
    }
}

export async function generateStaticParams() {
    return Object.keys(cities).map((city) => ({
        city: city,
    }))
}

export default function LocationPage({ params }: PageProps) {
    const cityData = cities[params.city as keyof typeof cities]

    if (!cityData) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title={`Services in ${cityData.name}`}
                description={cityData.description}
                breadcrumbs={[
                    { label: "Locations", href: "/#locations" },
                    { label: cityData.name }
                ]}
            />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-slate max-w-none">
                                <h2 className="text-3xl font-bold text-slate-900">Expert Translation & Legalization for {cityData.name}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Residents of {cityData.name} no longer need to travel to Islamabad or Lahore for high-quality translation and attestation. Lisan.pk brings 40+ years of expertise directly to your doorstep. We handle everything from HEC degree verification to Saudi Embassy attestation with secure courier support.
                                </p>
                                
                                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                        <h3 className="font-bold text-emerald-800 mb-4 text-xl">Top Services in {cityData.name}</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Nikkah Nama Translation",
                                                "MOFA Attestation Support",
                                                "HEC Degree Verification",
                                                "Saudi Embassy Legalization",
                                                "Police Character Certificate"
                                            ].map((s) => (
                                                <li key={s} className="flex items-center gap-3 text-slate-700">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-emerald-900 p-6 rounded-2xl text-white">
                                        <h3 className="font-bold mb-4 text-xl">Why Choose Us?</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "Fast courier pick & drop",
                                                "Embassy recognized",
                                                "Native Arabic translators",
                                                "Verified over 40 years",
                                                "100% Data privacy"
                                            ].map((w) => (
                                                <li key={w} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                                    <span className="text-emerald-50">{w}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Process for {cityData.name} Clients</h3>
                                <p className="text-slate-600">
                                    Simply send a clear photo or scan of your documents via WhatsApp. Our team in {cityData.name} (or our main service hub) will review the requirements, provide a quote, and execute the translation or attestation within 24-48 hours.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl">Get Instant Quote</h3>
                                <div className="space-y-4">
                                    <Link href="https://wa.me/923034041132" target="_blank" className="block w-full">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 text-lg">
                                            <MessageSquare className="mr-2" /> WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923034041132" className="block w-full">
                                        <Button variant="outline" className="w-full h-14 text-lg border-slate-200">
                                            <Phone className="mr-2" /> Call Agent
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4 text-slate-500">
                                    <div className="p-3 bg-slate-50 rounded-full">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm">Serving all areas in and around {cityData.name}.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
