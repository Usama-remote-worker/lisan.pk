import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Degree & Transcript Translation | HEC Approved Workflow",
    description: "Professional translation services for academic degrees and transcripts in Pakistan. Fully formatted to meet strict HEC attestation and foreign university requirements.",
    alternates: {
        canonical: "https://www.lisan.pk/certified-document-translation/degree-transcript",
    },
}

export default function DegreeTranslationPage() {
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
                            Transcript urdu translation services
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Securing admission abroad requires flawless documentation. We provide certified translation for degrees, diplomas, and academic transcripts required by HEC and foreign universities.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20my%20degree%20translated." target="_blank" className="w-full sm:w-auto">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Academic Translation You Can Trust</h2>
                        <p className="text-slate-600 mb-6">
                            When applying to international universities in Germany, Italy, Saudi Arabia, or the US, your academic records are the most critical component. Admissions committees require your Matriculation, Intermediate, Bachelor's, and Master's degrees to be translated by a recognized, certified agency.
                        </p>
                        <p className="text-slate-600 mb-8">
                            We ensure that academic terminology, grading scales, and institutional names are translated correctly so that international credential evaluators (like WES) can assess your transcripts without delay. Need to know the transcript meaning in urdu, the hec degree attestation rules, or even the documents required for domicile certificate alongside your degree? We can guide you.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Accepted Worldwide</h3>
                                <p className="text-sm text-slate-600">Our stamps are accepted by WES, HEC, MOFA, and international admissions boards.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Complete Package</h3>
                                <p className="text-sm text-slate-600">We offer end-to-end services, including IBCC and HEC attestation coordination if required.</p>
                            </div>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Fast-Track Your Study Abroad Application</h3>
                            <p className="text-emerald-100 mb-8">Send us your academic documents on WhatsApp for immediate processing.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20my%20degree%20translated." target="_blank">
                                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-10 text-base font-bold shadow-lg transition-all rounded-xl">
                                    Send Docs via WhatsApp
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
