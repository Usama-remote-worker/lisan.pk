import Link from "next/link"
import { Check } from "lucide-react"

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
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                            Complete Attestation Services
                        </h2>
                        <p className="text-lg text-slate-600 mb-8">
                            We handle the complex attestation process for you. From local boards to foreign embassies, we ensure your documents are verified and accepted globally without hassle.
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {attestations.map((item) => (
                                <li key={item} className="flex items-center text-slate-700">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 mr-3">
                                        <Check className="h-3 w-3" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-10">
                            <Link href="/services/attestation" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
                                View all attestation services &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl flex items-center justify-center">
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">📜</div>
                            <p className="text-slate-500 font-medium">Document Processing Workflow Visualization</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
