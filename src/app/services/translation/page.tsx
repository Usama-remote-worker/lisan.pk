import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Certified Arabic Translation Services - Lisan.pk",
    description: "Professional Arabic translation services in Pakistan. We translate legal, personal, and educational documents with 100% accuracy. Get a quick quote today."
}

export default function TranslationPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-emerald-800 mb-8">Certified Arabic Translation Services</h1>

                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    We offer professional, certified Arabic translation services in Pakistan, specializing in accurate and embassy-accepted translations for individuals and businesses. With over 40 years of experience, our translations are officially signed, stamped, and recommended by embassies for legal, immigration, visa, and educational purposes.
                </p>

                <div className="space-y-12">
                    {/* Personal Documents */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Personal Document Translation Services</h2>
                        <p className="text-slate-600 mb-6">Our certified Arabic translation services ensure your personal documents are accurately translated and accepted by embassies, immigration authorities, and government offices.</p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Birth Certificate Translation —</span> Reliable certified Arabic to English birth certificate translation for visa and immigration.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Marriage Certificate (Nikahnama) Translation —</span> Embassy-recommended Arabic nikahnama translation for family visas and legal recognition.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Divorce Certificate Translation —</span> Professional certified divorce decree translation for legal proceedings.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Death Certificate Translation —</span> Accurate Arabic death certificate translation for inheritance and official purposes.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Police Character Certificate Translation —</span> Certified translation for job applications and immigration.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• National ID Card (CNIC) & Passport Translation —</span> Fast translation for travel and residency requirements.
                            </li>
                        </ul>
                    </section>

                    {/* Educational Documents */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Educational Document Translation Services</h2>
                        <p className="text-slate-600 mb-6">Embassy-accepted translations for academic documents, perfect for study abroad, HEC attestation, and university admissions.</p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Degree and Diploma Translation —</span> Certified Arabic degree translation in Pakistan for higher education and jobs.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Academic Transcripts & Mark Sheets Translation —</span> Precise translation for scholarships and embassy approvals.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• School Certificates Translation —</span> Professional translation for international education purposes.
                            </li>
                        </ul>
                    </section>

                    {/* Legal Documents */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Legal & Official Document Translation Services</h2>
                        <p className="text-slate-600 mb-6">Guaranteed legal Arabic translations for courts, embassies, and corporate needs.</p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Power of Attorney Translation —</span> Certified translation for legal authorizations.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Affidavits & Agreements Translation —</span> Accurate legal document translation services.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Court Judgments & FIR Translation —</span> Embassy-recommended translation for international legal use.
                            </li>
                        </ul>
                    </section>

                    {/* Medical Documents */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Medical Document Translation Services</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Medical Reports & Certificates Translation —</span> Certified Arabic medical translation for treatment abroad, visas, and insurance.
                            </li>
                        </ul>
                    </section>

                    {/* Saudi Scholarship */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Saudi Arabia Scholarship Consultancy & Complete Application Guidance</h2>
                        <p className="text-slate-600 mb-6">Secure your fully funded scholarship to top Saudi universities with our expert end-to-end support.</p>
                        <ul className="space-y-3 text-slate-700 list-disc pl-5">
                            <li>Comprehensive guidance for Saudi government and university scholarships (King Abdulaziz University, King Saud University, Imam University, and others)</li>
                            <li>Assistance in selecting the right program and university according to your academic profile</li>
                            <li>Full document preparation and certified Arabic/English translation of all required papers</li>
                            <li>Statement of Purpose (SOP) and motivation letter drafting/review in Arabic and English</li>
                            <li>Application submission support through official Saudi portals</li>
                            <li>Embassy attestation and legalization guidance</li>
                            <li>Pre-departure orientation and visa processing assistance</li>
                        </ul>
                    </section>

                    {/* Hajj & Umrah Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">Hajj & Umrah Documentation and Translation Services</h2>
                        <p className="text-slate-600 mb-6">Expert support for pilgrims with certified translations and complete document preparation for smooth Hajj and Umrah visa processing through official Saudi channels.</p>
                        <ul className="space-y-3 text-slate-700">
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Hajj/Umrah Visa Application Translation —</span> Certified Arabic translation of all required documents for Hajj and Umrah visas.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Medical Fitness Certificate Translation —</span> Accurate translation of health and vaccination certificates for pilgrimage requirements.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Relationship Proof Documents Translation —</span> Translation of family documents (e.g., marriage/birth certificates) for group or family Umrah/Hajj applications.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Travel Itinerary & Accommodation Proof Translation —</span> Professional translation of hotel bookings, flight tickets, and tour operator agreements.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-semibold text-slate-900">• Complete Hajj/Umrah Document Preparation & Guidance —</span> End-to-end assistance including document checklist, certified translations, and submission support for Saudi Ministry of Hajj approvals.
                            </li>
                        </ul>
                    </section>


                </div>

                <div className="mt-12 bg-emerald-50 border border-emerald-100 p-6 rounded-lg text-center">
                    <p className="text-emerald-900 font-medium text-lg mb-6">
                        All translations are certified, signed, and stamped — Doorstep service available in Lahore, Islamabad, Karachi, and all major cities — Rush options for urgent scholarship and visa deadlines.
                    </p>
                    <Link href="https://wa.me/923034041132" target="_blank">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white min-w-[200px] h-12 text-lg">Get a Quote via WhatsApp</Button>
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    )
}
