import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Document Translation Services | Arabic to English & Urdu | Lisan.pk",
    description: "Expert certified translation for Nikah Nama, Birth Certificates, and legal documents. Embassy recognized Arabic translation with same-day delivery.",
}

export default function TranslationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
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
        </main>
    )
}
