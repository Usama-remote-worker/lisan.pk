import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Document Attestation Services | MOFA, HEC, & Saudi Embassy | Lisan.pk",
    description: "Reliable document attestation for MOFA, HEC, and IBCC in Pakistan. Specializing in Saudi Embassy attestation with door-to-door service.",
}

export default function AttestationPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Document Attestation Services"
                description="Complete attestation support for MOFA, HEC, IBCC, and foreign embassies in Pakistan."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Attestation", href: "/services/attestation" }
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate max-w-none">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Hassle-Free Attestation</h2>
                                <p className="text-lg text-slate-600 mb-6">
                                    Navigating government offices for document attestation can be difficult. We handle the entire process for you, ensuring your documents are verified by the relevant authorities efficiently.
                                </p>
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64">
                                <img
                                    src="/images/services-attestation.png"
                                    alt="Document Attestation Services"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 my-12">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Authorities We Cover</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Ministry of Foreign Affairs (MOFA)",
                                        "Higher Education Commission (HEC)",
                                        "Inter Board Committee of Chairmen (IBCC)",
                                        "Saudi Embassy",
                                        "UAE Embassy",
                                        "Qatar Embassy"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center text-slate-700">
                                            <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-semibold mb-4 text-emerald-800">Requirements</h3>
                                <p className="text-slate-600 mb-4 text-sm">Requirements vary by document and authority. Generally you will need:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Original Documents",
                                        "Copy of CNIC",
                                        "Passport Copy (for some embassies)",
                                        "Authority Letter (we provide format)"
                                    ].map((item) => (
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
