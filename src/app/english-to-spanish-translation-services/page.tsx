import { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "English to Spanish Translation Services in Pakistan | Certified & Approved",
    description: "Premium English to Spanish translation services in Pakistan. Get certified true translation of your police character certificates, legal documents, and interpreter services.",
    alternates: {
        canonical: "https://www.lisan.pk/english-to-spanish-translation-services",
    },
}

export default function EnglishToSpanishTranslationPage() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            
            <main className="bg-[#faf8ff] text-[#131b2e] overflow-x-hidden font-sans">
                {/* Hero Section */}
                <section className="relative w-full min-h-[707px] flex items-center overflow-hidden bg-[#064E3B]">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Spanish Architecture" src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[40px] py-[80px]">
                        <div className="max-w-2xl">
                            <span className="inline-block py-1 px-4 rounded-full bg-[#D1FAE5] text-[#004e3a] text-[12px] font-semibold mb-6 uppercase tracking-wider">Premium Language Services</span>
                            <h1 className="text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
                                Professional English to Spanish Translation Services
                            </h1>
                            <p className="text-[18px] leading-[1.6] text-[#D1FAE5]/80 mb-10">
                                Need a certified true translation? We specialize in English to Spanish translations, including Police Character Certificates, visas, and legal documents. We also provide Spanish to English services.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20English%20to%20Spanish%20translation%20services.">
                                    <button className="bg-[#D1FAE5] text-[#004e3a] text-[20px] font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(209,250,229,0.3)] transition-all w-full sm:w-auto">Start Your Project</button>
                                </Link>
                                <Link href="/contact">
                                    <button className="border border-[#D1FAE5] text-[#D1FAE5] text-[20px] font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-all w-full sm:w-auto">View Our Services</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bento Grid Services Deep-Dive */}
                <section className="py-[80px] max-w-[1280px] mx-auto px-4 md:px-[40px]">
                    <div className="text-center mb-16">
                        <h2 className="text-[30px] font-semibold text-[#004e3a] mb-4">Comprehensive Spanish Translation Solutions</h2>
                        <p className="text-[18px] text-[#3f4944] max-w-2xl mx-auto">From certified documents to live interpreters, we offer accurate and reliable English to Spanish and Spanish to English language services.</p>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6">
                        {/* Main Service 1 */}
                        <div className="col-span-12 md:col-span-8 rounded-[1.5rem] p-8 bg-[#f2f3ff] border border-[#D1FAE5]/20 group hover:border-[#004e3a] transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <span className="material-symbols-outlined text-4xl text-[#004e3a] mb-6">gavel</span>
                                    <h3 className="text-[30px] font-semibold text-[#004e3a] mb-4">Police Character Certificates & Legal Documents</h3>
                                    <p className="text-[16px] text-[#3f4944] leading-relaxed mb-6">
                                        Planning to travel or immigrate? A translated Police Character Certificate in Spanish is often a mandatory requirement. We provide verified and certified true translations accepted worldwide.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-[#004e3a] font-medium">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> 100% Certified True Translation
                                        </li>
                                        <li className="flex items-center gap-3 text-[#004e3a] font-medium">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> Approved for Embassies & Visas
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-8 rounded-lg w-full h-48 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                    <Image src="/images/legal-signing.png" alt="Police Character Certificate Translation" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Secondary Service 2 */}
                        <div className="col-span-12 md:col-span-4 rounded-[1.5rem] p-8 bg-[#064E3B] text-white">
                            <span className="material-symbols-outlined text-4xl text-[#D1FAE5] mb-6">sync_alt</span>
                            <h3 className="text-[20px] font-semibold mb-4">Spanish to English & Vice Versa</h3>
                            <p className="text-[16px] text-[#D1FAE5]/70 leading-relaxed mb-8">
                                While English to Spanish translation is our top priority, we expertly handle Spanish to English translations with equal precision.
                            </p>
                            <div className="p-6 bg-white/10 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[#D1FAE5]">verified</span>
                                    <span className="text-[14px] font-medium">Native Linguists</span>
                                </div>
                                <p className="text-sm text-[#D1FAE5]/60">Ensuring natural and accurate bilingual communication.</p>
                            </div>
                        </div>

                        {/* Tertiary Service 3 */}
                        <div className="col-span-12 md:col-span-4 rounded-[1.5rem] p-8 bg-[#D1FAE5]/20 border border-[#D1FAE5] group">
                            <span className="material-symbols-outlined text-4xl text-[#004e3a] mb-6">record_voice_over</span>
                            <h3 className="text-[20px] font-semibold text-[#004e3a] mb-4">English to Spanish Interpreter</h3>
                            <p className="text-[16px] text-[#3f4944] mb-6">Need verbal translation? Hire our professional English to Spanish interpreter for meetings, conferences, or immigration interviews.</p>
                            <a className="text-[#004e3a] font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/contact">Book an Interpreter <span className="material-symbols-outlined">arrow_forward</span></a>
                        </div>

                        {/* Tertiary Service 4 */}
                        <div className="col-span-12 md:col-span-8 rounded-[1.5rem] p-8 bg-[#faf8ff] border border-[#bec9c2] flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="material-symbols-outlined text-4xl text-[#006c4e] mb-6">description</span>
                                <h3 className="text-[30px] font-semibold text-[#004e3a] mb-4">Certified True Translation</h3>
                                <p className="text-[16px] text-[#3f4944]">Every translated document receives our official seal, ensuring it meets strict international legal standards.</p>
                            </div>
                            <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                <div className="h-32 bg-[#e2e7ff] rounded-xl flex items-center justify-center font-bold text-[#004e3a] text-center px-4">Flawless Accuracy</div>
                                <div className="h-32 bg-[#006c4e] text-white rounded-xl flex items-center justify-center font-bold text-center px-4">Fast Turnaround</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS STEPS SECTION */}
                <section className="py-[80px] px-4 md:px-[40px] bg-[#f2f3ff] border-y border-[#bec9c2]/30">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-[30px] font-semibold text-[#004e3a] mb-4">5 Simple Steps to Get Your Translation</h2>
                            <p className="text-[18px] text-[#3f4944]">A seamless, fully digital process designed for your convenience.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Submit Document</h3>
                                <p className="text-[#3f4944] text-sm">Send your English or Spanish document (like a Police Certificate) via WhatsApp or email.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Get Quote</h3>
                                <p className="text-[#3f4944] text-sm">Receive a transparent price estimate and timeline instantly.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Translation</h3>
                                <p className="text-[#3f4944] text-sm">Our expert linguists perform the English to Spanish or Spanish to English translation.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Review & Approve</h3>
                                <p className="text-[#3f4944] text-sm">We send a draft for your review. Once approved, we finalize the document.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">5</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Final Delivery</h3>
                                <p className="text-[#3f4944] text-sm">Get your certified true translation digitally and hard copies dispatched via courier.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Local SEO Paragraph Section (Major Cities) */}
                <section className="py-[80px] max-w-[1280px] mx-auto px-4 md:px-[40px]">
                    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[1.5rem] border border-[#bec9c2] shadow-sm">
                        <h2 className="text-[24px] font-semibold text-[#004e3a] mb-6">Available Across All Major Cities in Pakistan</h2>
                        <p className="text-[16px] text-[#3f4944] leading-relaxed mb-6">
                            Whether you need English to Spanish translation services online or hard copies delivered to your home, we serve clients nationwide. Our extensive network covers all major metropolitan areas.
                        </p>
                        <p className="text-[16px] text-[#3f4944] leading-relaxed mb-8">
                            We provide swift delivery and interpreter services across <strong>Islamabad, Lahore, Karachi, Rawalpindi, Peshawar, Quetta, Multan, Faisalabad, Sialkot, and Gujranwala</strong>. No matter where you are located, a certified Spanish translator is just a click away.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#004e3a] font-medium">
                                <span className="material-symbols-outlined text-[#006c4e]">check_circle</span>
                                Nationwide coverage for all Spanish translations
                            </div>
                            <div className="flex items-center gap-3 text-[#004e3a] font-medium">
                                <span className="material-symbols-outlined text-[#006c4e]">check_circle</span>
                                Doorstep delivery of certified documents
                            </div>
                            <div className="flex items-center gap-3 text-[#004e3a] font-medium">
                                <span className="material-symbols-outlined text-[#006c4e]">check_circle</span>
                                Spanish to English translation services online
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-[80px] bg-[#F8FAFC] relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-[30px] font-semibold text-[#004e3a] mb-8">Why Choose Us for Spanish Translations?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#004e3a] text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined">g_translate</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Native Linguists</h4>
                                        <p className="text-[#3f4944]">Our team comprises native Spanish speakers and highly qualified bilingual experts ensuring culturally accurate translations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#006c4e] text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined">workspace_premium</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Guaranteed Acceptance</h4>
                                        <p className="text-[#3f4944]">Our certified true translations for police character certificates and legal papers have a 100% acceptance rate with embassies globally.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1FAE5] text-[#004e3a] flex items-center justify-center">
                                        <span className="material-symbols-outlined">support_agent</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Dedicated Interpreters</h4>
                                        <p className="text-[#3f4944]">Access top-tier English to Spanish interpreters for live communications and meetings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full">
                            <div className="aspect-square bg-[#D1FAE5] rounded-[1.5rem] overflow-hidden shadow-2xl relative w-full">
                                <Image className="w-full h-full object-cover" src="/images/office-meeting.png" alt="Translators team meeting" fill />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
