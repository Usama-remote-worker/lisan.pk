import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Certified Document Translation Services | Embassy Approved",
    description: "Official, certified translation services for legal documents, certificates, and transcripts in Pakistan. 100% acceptance guaranteed across all foreign embassies.",
    alternates: {
        canonical: "https://www.lisan.pk/certified-document-translation",
    },
}

export default function CertifiedDocumentHub() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-slate-950 text-white pt-24 pb-32 overflow-hidden border-b border-slate-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Institutional & Embassy Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Certified document translation services
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We specialize in the official translation and legalization of documents. Need a legal document urdu translation, or to know a transcript meaning in urdu or certificates meaning in urdu? We handle it all for the US, Saudi Arabia, Italy, Germany, and other global embassies.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20embassy%20document%20translation." target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    Send Docs via WhatsApp
                                </Button>
                            </Link>
                            <Link href="tel:+923044296295" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800 text-white bg-transparent h-14 px-8 text-base font-bold rounded-xl transition-all">
                                    Call Support: 0304 4296295
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Select Your Document Type</h2>
                        <p className="text-slate-600 text-lg">Choose the specific document you need translated and attested for immigration or visa purposes.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/certified-document-translation/nadra-nikahnama" className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                N
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">Nadra Nikahnama</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                English and Arabic translation of computerized marriage certificates, strictly required for family visas and immigration.
                            </p>
                        </Link>

                        <Link href="/certified-document-translation/degree-transcript" className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                D
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">Degree & Transcript</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Certified translation of academic credentials. Includes HEC verification workflows for international universities.
                            </p>
                        </Link>

                        <Link href="/certified-document-translation/legal-documents" className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                L
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">Legal Documents</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Translation of FIRs, court orders, power of attorney, and police clearance certificates for embassy submission.
                            </p>
                        </Link>
                    </div>

                    {/* Contextual City Hub Links */}
                    <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white">
                        <div className="max-w-3xl mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Nationwide Coverage</span>
                            <h3 className="text-2xl md:text-3xl font-bold mt-2 font-serif">Certified Translation in Major Cities</h3>
                            <p className="text-slate-400 text-sm mt-2">
                                We provide express document collection, certified translation, and MOFA attestation across Pakistan. Select your city hub:
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-bold">
                            <Link href="/locations/lahore" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Lahore Hub →
                            </Link>
                            <Link href="/locations/karachi" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Karachi Hub →
                            </Link>
                            <Link href="/locations/islamabad" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Islamabad Hub →
                            </Link>
                            <Link href="/locations/peshawar" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Peshawar Hub →
                            </Link>
                            <Link href="/locations/rawalpindi" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Rawalpindi Hub →
                            </Link>
                            <Link href="/locations/multan" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Multan Hub →
                            </Link>
                            <Link href="/locations/faisalabad" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Faisalabad Hub →
                            </Link>
                            <Link href="/locations/gujrat" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                Gujrat Hub →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

