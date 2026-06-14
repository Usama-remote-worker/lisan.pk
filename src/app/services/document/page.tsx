import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Document Services | Professional Legalization & Notary",
    description: "Assistance with Police Clearance Certificates, NADRA Family Registration (FRC), Birth Certificates, and legal documentation for international use.",
    alternates: {
        canonical: '/services/document',
    }
}


export default function DocumentServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <PageHero
                title="Document Services"
                description="Police Clearance, NADRA services, Visa documentation and more."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Document Services", href: "/services/document" }
                ]}
            />

            {/* Trust Signals */}
            <section className="py-12 bg-white border-b border-slate-100 font-sans">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-sans">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center select-none text-lg">✓</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 font-serif">Fast Processing</h3>
                                <p className="text-sm text-slate-500">24-48hr turnaround</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center select-none text-lg">✓</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 font-serif">Secure Handling</h3>
                                <p className="text-sm text-slate-500">100% Confidential</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center select-none text-lg">✓</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 font-serif">Expertise</h3>
                                <p className="text-sm text-slate-500">Years of experience</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-extrabold flex items-center justify-center select-none text-lg">✓</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 font-serif">Data Privacy</h3>
                                <p className="text-sm text-slate-500">Guaranteed protection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            <section className="py-16 font-sans">
                <div className="container mx-auto px-4 max-w-4xl space-y-16">
                    {/* Police Clearance */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 font-sans">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">
                            Police Clearance Certificate
                        </h2>
                        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                            We assist in obtaining Police Character Certificates from Pakistan for visa and immigration purposes.
                            Our service handles the application, follow-up, and collection.
                        </p>
                        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold">
                            Learn Requirements →
                        </Button>
                    </div>

                    {/* NADRA */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 font-sans">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">
                            NADRA Services
                        </h2>
                        <ul className="space-y-3 mb-6 text-sm">
                            <li className="flex items-center text-slate-600 font-medium"><span className="text-emerald-600 font-extrabold mr-3 select-none">✓</span>CNIC Translation</li>
                            <li className="flex items-center text-slate-600 font-medium"><span className="text-emerald-600 font-extrabold mr-3 select-none">✓</span>Family Registration Certificate (FRC)</li>
                            <li className="flex items-center text-slate-600 font-medium"><span className="text-emerald-600 font-extrabold mr-3 select-none">✓</span>Birth Certificate Processing</li>
                        </ul>
                    </div>

                    {/* How It Works */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white font-sans">
                        <h2 className="text-3xl font-bold mb-12 text-center font-serif">Process Workflow</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Submit", desc: "Send documents via WhatsApp" },
                                { step: "02", title: "Review", desc: "We verify requirements" },
                                { step: "03", title: "Process", desc: "We visit the offices" },
                                { step: "04", title: "Deliver", desc: "To your doorstep" }
                            ].map((item) => (
                                <div key={item.step} className="relative">
                                    <div className="text-5xl font-bold text-slate-800 mb-4 font-serif">{item.step}</div>
                                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Document FAQ Section */}
                    <div className="py-12 font-sans">
                        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 font-serif">Document Services FAQ</h2>
                        <div className="grid gap-6">
                            {[
                                { q: "How can I apply for a character certificate in Pakistan?", a: "To apply for a Police Character Certificate, you typically need to provide a copy of your CNIC, Passport, and a photo. We can handle the verification through the local police station and the DPO/CPO office on your behalf." },
                                { q: "What is an FRC and why is it needed for visas?", a: "A Family Registration Certificate (FRC) shows your family structure. Most embassies, including Saudi Arabia and the UK, require it to verify your lineage or marital status during the visa process." },
                                { q: "Do you provide attested translations for NADRA documents?", a: "Yes, we translate NADRA birth certificates, Nikah Namas, and Death certificates into English or Arabic, followed by official certification and notary stamps." }
                            ].map((f, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-sm">
                                    <p className="font-bold text-slate-900 mb-2 font-serif">"{f.q}"</p>
                                    <p className="text-slate-600 leading-relaxed">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
