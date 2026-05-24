import Link from "next/link"

const attestations = [
    "UAE Embassy Attestation",
    "Saudi Embassy Attestation",
    "Saudi Culture Attestation",
    "Qatar Embassy Attestation",
    "Bahrain Embassy Attestation",
    "HEC Attestation",
    "IBCC / Board Attestation",
    "MOFA Attestation"
]

export function AttestationList() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-100 font-sans text-slate-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center font-sans">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6 font-serif">
                            Complete Attestation Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-sans">
                            We handle the complex attestation process for you. From local boards to foreign embassies, we ensure your documents are verified and accepted globally without hassle.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 text-sm font-sans">
                            {attestations.map((item) => (
                                <div key={item} className="flex items-center text-slate-700 font-bold py-2 border-b border-slate-200/50">
                                    <span className="text-emerald-600 font-extrabold mr-3 select-none">✓</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Link href="/services/attestation" className="inline-flex items-center text-emerald-700 font-bold hover:text-emerald-800 transition-colors group text-sm">
                                View all attestation services 
                                <span className="ml-2 group-hover:translate-x-1 transition-transform font-bold">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[480px] rounded-[2.5rem] bg-white border border-slate-200 overflow-hidden shadow-2xl flex items-center justify-center p-12 text-center font-sans">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">The Lisan.pk Process</h3>
                            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed text-sm">
                                Our institutional workflow ensures every document is tracked from pickup to embassy verification.
                            </p>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
