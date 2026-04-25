import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
    title: "Document Translation Services | Arabic to English & Urdu | Lisan.pk",
    description: "Expert certified translation for Nikah Nama, Birth Certificates, and legal documents. Embassy recognized Arabic translation with same-day delivery.",
    alternates: {
        canonical: '/services/translation',
    }
}

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Certified Document Translation",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Lisan.pk"
    },
    "description": "Professional translation for legal, academic, and personal documents from Arabic to English/Urdu and vice versa.",
    "areaServed": "PK",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Translation Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Nikah Nama Translation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Birth Certificate Translation"
                }
            }
        ]
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is your translation accepted by the Saudi Embassy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Arabic translations are specifically drafted to meet the requirements of the Saudi Embassy in Islamabad and Karachi."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide notarized translation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we can provide notarized certificates of translation accuracy for legal and court use."
            }
        }
    ]
};

export default function TranslationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <JsonLd data={serviceSchema} />
            <JsonLd data={faqSchema} />
            <PageHero
                title="Certified Translation Services"
                description="Professional translation for legal, academic, and personal documents. Accepted by embassies and government offices."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Translation", href: "/services/translation" }
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Accurate & Certified Translations</h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We provide high-quality translation services for all types of documents. Our translations are certified and officially recognized for visa applications, study abroad, and legal purposes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Documents We Translate</h3>
                                <ul className="space-y-3">
                                    {["Marriage Certificates (Nikahnama)", "Birth Certificates", "Academic Degrees & Transcripts", "Police Character Certificates", "CNIC & B-Form", "Legal Affidavits"].map((item) => (
                                        <li key={item} className="flex items-center text-slate-700">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Languages</h3>
                                <ul className="space-y-3">
                                    {["Arabic to English / Urdu", "English to Arabic", "Urdu to English / Arabic", "German Translation", "Turkish Translation"].map((item) => (
                                        <li key={item} className="flex items-center text-slate-700">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Detailed Services Breakdown */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Niche Specialist Translation</h2>
                    <p className="text-lg text-slate-600 mb-12">
                        Translation is more than just swapping words. It requires understanding legal frameworks in Pakistan and Saudi Arabia. Our specialized team ensures that your technical jargon is preserved while meeting the strict standards of the MOFA and foreign embassies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Legal & Official</h3>
                            <p className="text-slate-600">
                                From court summons to property deeds, our legal translations are notarized and ready for government use. We understand the specific terminology used in the Pakistani legal system.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Educational & Visa</h3>
                            <p className="text-slate-600">
                                Planning to study in Riyadh or Berlin? We provide certified translations of HEC-attested degrees and school transcripts that are accepted by universal portals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">Translation Lifecycle</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", t: "Digitization", d: "You send docs via WhatsApp/Email." },
                            { step: "02", t: "Translation", d: "Native linguists draft the content." },
                            { step: "03", t: "Proofing", d: "Legal experts verify dates and names." },
                            { step: "04", t: "Certification", d: "Official stamps and seals applied." }
                        ].map(s => (
                            <div key={s.step} className="border-l border-emerald-500 pl-6">
                                <span className="text-sm font-bold text-emerald-500">{s.step}</span>
                                <h3 className="text-xl font-bold my-2">{s.t}</h3>
                                <p className="text-slate-400 text-sm">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Translation FAQ */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-16">Translation FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Is your translation accepted by the Saudi Embassy?", a: "Yes, our Arabic translations are specifically drafted to meet the requirements of the Saudi Embassy in Islamabad and Karachi." },
                            { q: "Do you provide notarized translation?", a: "Yes, we can provide notarized certificates of translation accuracy for legal and court use." },
                            { q: "How do I pay for the translation?", a: "We accept JazzCash, EasyPaisa, and Bank Transfers for your convenience." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">Q: {f.q}</h4>
                                <p className="text-slate-600">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
