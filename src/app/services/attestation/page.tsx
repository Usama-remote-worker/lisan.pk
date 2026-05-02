import { PageHero } from "@/components/ui/PageHeader"
import { CheckCircle2 } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Document Attestation Services | MOFA, HEC, & Saudi Embassy | Lisan.pk",
    description: "Reliable document attestation for MOFA, HEC, and IBCC in Pakistan. Specializing in Saudi Embassy attestation with door-to-door service.",
    alternates: {
        canonical: '/services/attestation',
    }
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
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="prose prose-slate max-w-none">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Hassle-Free Attestation Support</h2>
                                <p className="text-lg text-slate-600 mb-6">
                                    Navigating government offices for document attestation can be a logistical nightmare. Between long queues and complex requirements, many applicants face delays or rejections. Lisan.pk handles the entire cycle—from HEC verification to Saudi Embassy legalization—ensuring your documents are ready for visa and legal use.
                                </p>
                            </div>
                            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 shadow-sm">
                                <h3 className="text-xl font-bold text-emerald-900 mb-4">Official Verification Nodes</h3>
                                <div className="space-y-4">
                                    {[
                                        { t: "MOFA", d: "Ministry of Foreign Affairs (Islamabad, Lahore, Karachi, Peshawar, Quetta)." },
                                        { t: "HEC", d: "Higher Education Commission (Degree verification & equivalence)." },
                                        { t: "IBCC", d: "Inter Board Committee of Chairmen (Matric/Inter certificates)." },
                                        { t: "Foreign Missions", d: "Saudi, UAE, Qatar, and Kuwait Embassy legalization." }
                                    ].map(item => (
                                        <div key={item.t} className="border-b border-emerald-200/50 pb-2">
                                            <span className="font-bold text-emerald-700">{item.t}:</span>
                                            <p className="text-sm text-emerald-800/70">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 my-16">
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">HEC Attestation</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    For educational degrees, HEC verification is the first step. We provide consultancy on the e-portal application, courier logistics, and physical representation for degree verification.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">MOFA Legalization</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    The Ministry of Foreign Affairs verifies the authenticity of documents. We handle the submission at all major MOFA camps, saving you days of travel and waiting time.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Saudi Embassy</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Required for work and family visas. We process documents through authorized drop-off centers, ensuring all stamps are genuine and embassy-compliant.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-10 rounded-3xl mb-16">
                            <h2 className="text-2xl font-bold mb-8">Common Attestation Rejections (How we avoid them)</h2>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-emerald-400 font-bold">1. Mismatched Names</h4>
                                    <p className="text-sm text-slate-400">If your name on the CNIC differs from the educational degree by even one letter, MOFA will reject it. We audit your docs first.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-emerald-400 font-bold">2. Lapsed Certifications</h4>
                                    <p className="text-sm text-slate-400">Old marriage certificates without NADRA computerized stamps are no longer accepted. We help you update them.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-emerald-400 font-bold">3. Improper Sequence</h4>
                                    <p className="text-sm text-slate-400">You cannot get Saudi Embassy attestation before MOFA. We ensure the correct legal sequence is followed.</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-emerald-400 font-bold">4. Technical Errors</h4>
                                    <p className="text-sm text-slate-400">Incorrect fee slips or expired authority letters are common pitfalls. Our service verifies every form before submission.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Attestation FAQs</h2>
                        <div className="space-y-4 mb-12">
                            {[
                                { q: "Do I need to send my original documents?", a: "Yes, for attestation, government authorities require the physical original documents. We use trackable, secure courier services for all shipments." },
                                { q: "How long does the whole process take?", a: "MOFA attestation usually takes 2-3 working days. Saudi Embassy attestation can take 7-10 working days depending on current embassy volume." },
                                { q: "Can you attest my documents if I am already abroad?", a: "Yes, you can courier your documents to us from anywhere in the world, and we will process them in Pakistan and courier them back to you." }
                            ].map((faq, i) => (
                                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Q: {faq.q}</h4>
                                    <p className="text-slate-600 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

