import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { FileText, ShieldCheck, Plane, Scale, CheckCircle2, ArrowRight } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Document Processing & Visa Assistance - Lisan.pk",
    description: "Expert assistance for Nadra, Police Clearance, and Visa documentation in Pakistan. Fast and reliable processing for all your document needs."
}

export default function DocumentServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                            Complete <span className="text-emerald-600">Document Processing</span> Solutions
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Beyond translation and attestation, we provide end-to-end assistance for obtaining, processing, and legalizing your essential documents in Pakistan. From Police Clearance Certificates to NADRA documentation, we handle the bureaucracy so you don't have to.
                        </p>
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 text-lg">
                                Get Assistance Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 space-y-20">

                {/* Police Clearance */}
                <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="bg-emerald-100 p-3 rounded-xl w-fit mb-6 text-emerald-700">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Police Clearance Certificate (PCC)</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Obtaining a Police Character Certificate in Pakistan can be a complex process, especially if you are currently abroad. We assist in acquiring PCCs from all major cities (Lahore, Karachi, Islamabad, etc.) for immigration, employment, or visa purposes.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Assistance for Overseas Pakistanis",
                                "Fast-track processing where available",
                                "Attestation from MOFA included if required",
                                "Doorstep delivery worldwide"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 bg-slate-100 rounded-2xl p-8 border border-slate-200 h-full flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Why choose our PCC Service?</h3>
                        <p className="text-slate-600 mb-4">We understand the urgency of immigration deadlines. Our dedicated team tracks your application daily to ensure the fastest possible issuance.</p>
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button variant="outline" className="w-full justify-between group">
                                Request PCC Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>

                {/* NADRA Services */}
                <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6 text-blue-700">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">NADRA Documentation</h3>
                        <p className="text-slate-600 mb-6">Expert guidance for issuance and modification of NADRA certificates.</p>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
                                <p className="text-slate-700"><span className="font-semibold block text-slate-900">Family Registration Certificate (FRC)</span> Essential for visa applications to prove family ties.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
                                <p className="text-slate-700"><span className="font-semibold block text-slate-900">Birth Certificate Registration</span> Computerized issuance from Union Councils.</p>
                            </li>
                            <li className="flex gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
                                <p className="text-slate-700"><span className="font-semibold block text-slate-900">Marriage Registration (Nikahnama)</span> Official computerized marriage certificates.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">NADRA & Civil Registry Assistance</h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            Accurate documentation is the foundation of any successful visa or immigration application. We help you navigate the requirements for obtaining official computerized certificates from NADRA and Union Councils, ensuring all names, dates, and details precisely match your passport to avoid future rejections.
                        </p>
                        <p className="text-slate-600 mb-8">
                            We also assist in correcting data errors in old manual records before digitization.
                        </p>
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                Get NADRA Assistance
                            </Button>
                        </Link>
                    </div>
                </FadeIn>

                {/* Visa & Legal */}
                <FadeIn className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6 text-purple-700">
                            <Plane className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Visa Application Assistance</h3>
                        <p className="text-slate-600 mb-6">
                            Professional help with filling out complex visa application forms for Saudi Arabia, UAE, UK, USA, and Schengen countries. We ensure your forms are error-free and professionally presented.
                        </p>
                        <ul className="space-y-2 mb-6 text-slate-700 text-sm">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Visit & Tourist Visas</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Hajj & Umrah Packages</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Student Visa Filling</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Family Reunion Visas</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6 text-orange-700">
                            <Scale className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Legal Drafting</h3>
                        <p className="text-slate-600 mb-6">
                            Expert drafting of legal documents required for international use, tailored to meet specific embassy and legal standards.
                        </p>
                        <ul className="space-y-2 mb-6 text-slate-700 text-sm">
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Affidavits (Support, Sponsorship)</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Power of Attorney</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Cover Letters & SOPs</li>
                            <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> Statutory Declarations</li>
                        </ul>
                    </div>
                </FadeIn>

            </div>

            <div className="bg-slate-900 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Need a document not listed here?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg">
                        We handle a wide variety of custom document requirements. Contact our support team to discuss your specific case.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8">Contact Support</Button>
                        </Link>
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8">WhatsApp Us</Button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
