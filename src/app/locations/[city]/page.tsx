import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2, MapPin, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const cities = {
    "lahore": { 
        name: "Lahore", 
        description: "The primary hub for Arabic translation and embassy attestation at Muslim Town, Ferozepur Road.",
        lat: 31.5204,
        lng: 74.3587,
        landmark: "Muslim Town & Ferozepur Road",
        localInfo: "Our main hub in Lahore is strategically located near Jamia Ashrafia, serving the entire central Punjab region with direct access to HEC and MOFA verification services."
    },
    "karachi": { 
        name: "Karachi", 
        description: "Professional document services for businesses and individuals in the financial capital of Pakistan.",
        lat: 24.8607,
        lng: 67.0011,
        landmark: "Shahrah-e-Faisal & Saddar",
        localInfo: "Serving the metropolitan hub of Karachi, we provide specialized translation for corporate and legal documents, with courier support across Clifton, DHA, and the main business districts."
    },
    "islamabad": { 
        name: "Islamabad", 
        description: "Expert attestation and translation support near the Diplomatic Enclave and foreign embassies.",
        lat: 33.6844,
        lng: 73.0479,
        landmark: "Blue Area & Diplomatic Enclave",
        localInfo: "Ideally positioned for Islamabad residents, our service facilitates quick processing for embassy-related translations, being in close proximity to the Diplomatic Enclave and MOFA headquarters."
    },
    "faisalabad": { 
        name: "Faisalabad", 
        description: "Fast-track translation for students and professionals in the industrial heart of Punjab.",
        lat: 31.4504,
        lng: 73.1350,
        landmark: "Clock Tower & District Courts",
        localInfo: "In Faisalabad, we serve the industrial and student community with rapid Arabic translation for academic degrees and business contracts, ensuring compliance with Saudi standards."
    },
    "multan": { 
        name: "Multan", 
        description: "Certified document legalization and translation for South Punjab residents.",
        lat: 30.1575,
        lng: 71.5249,
        landmark: "Cantonment & Multan Chamber",
        localInfo: "Serving the South Punjab region, our Multan service point ensures that local students and workers can get their documents translated and attested without traveling to Lahore."
    },
    "rawalpindi": { 
        name: "Rawalpindi", 
        description: "Quick attestation support for MOFA and embassy document processing for the twin cities.",
        lat: 33.5651,
        lng: 73.0169,
        landmark: "Saddar & Rawalpindi Chamber",
        localInfo: "For the twin cities, we provide dedicated support for Rawalpindi residents, focusing on fast-track MOFA attestation and Arabic translation for work visas."
    },
    "peshawar": { 
        name: "Peshawar", 
        description: "Official translation and attestation services for students and workers in KPK.",
        lat: 34.0151,
        lng: 71.5249,
        landmark: "University Road & KPK MOFA Office",
        localInfo: "Lisan.pk serves the KPK community from Peshawar, providing localized support for document translation that meets the specific requirements of foreign missions and the Peshawar MOFA office."
    },
    "sialkot": { 
        name: "Sialkot", 
        description: "Specialized export and business document translation for the Sialkot trade community.",
        lat: 32.4945,
        lng: 74.5229,
        landmark: "Sialkot Chamber of Commerce",
        localInfo: "Our Sialkot service focuses on the business community, providing certified translation for trade documents and export-related legalizations required for the Gulf region."
    },
    "gujranwala": { 
        name: "Gujranwala", 
        description: "Reliable certified translation for marriage certificates and academic degrees.",
        lat: 32.1877,
        lng: 74.1945,
        landmark: "GT Road & Gujranwala Chamber",
        localInfo: "Supporting the industrial hub of Gujranwala, we offer secure pickup and delivery for Nikkah Nama and degree translations, processed with 100% embassy acceptance."
    },
    "quetta": { 
        name: "Quetta", 
        description: "Secure document attestation and translation support for Balochistan.",
        lat: 30.1798,
        lng: 66.9750,
        landmark: "Serena Chowk & Balochistan Secretariat",
        localInfo: "Lisan.pk extends its professional services to Balochistan, ensuring that Quetta residents have access to embassy-standard Arabic translation without logistical delays."
    }
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
        alternates: {
            canonical: `/locations/${params.city}`,
        },
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
                "item": `https://www.lisan.pk/locations/${params.city}`
            }
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Lisan.pk Arabic Translation ${cityData.name}`,
        "description": cityData.description,
        "url": `https://www.lisan.pk/locations/${params.city}`,
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

    return (
        <main className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
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

                                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm my-10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <MapPin className="text-emerald-600" /> Local Knowledge: {cityData.landmark}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed italic">
                                        {cityData.localInfo}
                                    </p>
                                </div>
                                
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
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20translation%20services%20in%20${cityData.name}.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-14 text-lg">
                                            <MessageSquare className="mr-2" /> WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923044296295" className="block w-full">
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

