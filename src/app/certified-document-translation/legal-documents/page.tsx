import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Certified Legal Translation Services | Contracts & Affidavits",
    description: "Secure and highly precise legal translation services for business contracts, court affidavits, character certificates, and official agreements.",
    alternates: {
        canonical: "https://www.lisan.pk/certified-document-translation/legal-documents",
    },
}

export default function LegalTranslationPage() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/certified-document-translation" className="inline-block mb-6 text-emerald-400 hover:text-emerald-300 font-bold text-sm">
                            ← Back to Document Hub
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Legal document translation services
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Flawless legal translation of court orders, FIRs, Police Character Certificates, and Power of Attorney for official embassy submission.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20a%20legal%20document%20translated." target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    Chat on WhatsApp
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Zero Margin for Linguistic Errors</h2>
                        <p className="text-slate-600 mb-6">
                            Legal translation is the most highly scrutinized category by consular officers. A single mistranslated legal term in a Power of Attorney or a Police Clearance Certificate can result in an immediate visa rejection.
                        </p>
                        <p className="text-slate-600 mb-8">
                            At Lisan.pk, we employ certified linguistic experts who understand both Pakistani legal terminology and the target country's legal vernacular. We offer corporate translation services, character certificate urdu translation, and clarify details like the visa meaning in urdu to ensure absolute precision.
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Common Legal Documents We Translate:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Police Character Certificates</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Court Orders and FIRs (First Information Reports)</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Death Certificates and Inheritance Documents</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Affidavits and Power of Attorney</li>
                            </ul>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Secure Legal Processing</h3>
                            <p className="text-emerald-100 mb-8">All documents are processed under strict confidentiality agreements. Send your documents via WhatsApp for a quote.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20a%20legal%20document%20translated." target="_blank">
                                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-10 text-base font-bold shadow-lg transition-all rounded-xl">
                                    Send Docs via WhatsApp
                                </Button>
                            </Link>
                        </div>

                        {/* Contextual City Links for Legal & Police Certificates */}
                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-xl font-bold mb-4 font-serif">Legal & Police Clearance Translation by City</h3>
                            <p className="text-slate-400 text-sm mb-6">Select your city for localized legal document translation and police character certificate services:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
                                <Link href="/locations/dera-ghazi-khan/police-character-certificate-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    DG Khan Police Cert →
                                </Link>
                                <Link href="/locations/gujranwala/police-character-certificate-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Gujranwala Police Cert →
                                </Link>
                                <Link href="/locations/faisalabad/police-character-certificate-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Faisalabad Police Cert →
                                </Link>
                                <Link href="/locations/mirpur/police-character-certificate-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Mirpur Police Cert →
                                </Link>
                                <Link href="/locations/lahore" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Lahore Legal Hub →
                                </Link>
                                <Link href="/locations/karachi" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Karachi Legal Hub →
                                </Link>
                                <Link href="/locations/islamabad" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Islamabad Legal Hub →
                                </Link>
                                <Link href="/locations/rawalpindi" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Rawalpindi Legal Hub →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

