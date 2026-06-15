import { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Certified Translation Services in Islamabad | Embassy Approved",
    description: "Approved certified translation services in Islamabad. Fast turnaround for legal, corporate, and official documents near Blue Area & international embassies.",
    alternates: {
        canonical: "https://www.lisan.pk/translation-services-islamabad",
    },
}

export default function IslamabadTranslationPage() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            
            <main className="bg-[#faf8ff] text-[#131b2e] overflow-x-hidden font-sans">
                {/* Hero Section with Localized Imagery */}
                <section className="relative w-full min-h-[707px] flex items-center overflow-hidden bg-[#064E3B]">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="Islamabad Faisal Mosque" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDra1Ao8aSpWMcj3HWQ-ZAkJaRG4AJalvp-KbQbTV-IAM9cx77-LP1sfLFYchf-kQjDegUsxv8gRnMo-glz052juM6AOapDeOcJiuwWojWg_lItvzB3NITHa67OcFgoXyjVzZBmSl2Nkg60Q57hD--WyqiuT44mbY9jJv9dS-ennSUQqlTHGRdLr6DuA_AkzKQoXQf1i9hBv_xMLjoGuJc22W66V-WA2qe9V1W2_lYk2DQVra6WsBKkvkE-aOD7b88PiFOKbcQ4ElZe" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#064E3B] via-[#064E3B]/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-[40px] py-[80px]">
                        <div className="max-w-2xl">
                            <span className="inline-block py-1 px-4 rounded-full bg-[#D1FAE5] text-[#004e3a] text-[12px] font-semibold mb-6 uppercase tracking-wider">Trusted in Islamabad</span>
                            <h1 className="text-[36px] md:text-[48px] leading-[1.2] md:leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
                                Certified Translation Services in Islamabad – Embassy & MOFA Compliant
                            </h1>
                            <p className="text-[18px] leading-[1.6] text-[#D1FAE5]/80 mb-10">
                                Accurate, legally recognized translations for visas, immigration, and legal affairs. Accepted by foreign embassies, NADRA, and ministries across Islamabad.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20certified%20translation%20services%20in%20Islamabad.">
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
                        <h2 className="text-[30px] font-semibold text-[#004e3a] mb-4">Precision Translation Ecosystem</h2>
                        <p className="text-[18px] text-[#3f4944] max-w-2xl mx-auto">Our specialized divisions ensure that every word carries the exact weight and cultural nuance intended.</p>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-6">
                        {/* Main Service 1 */}
                        <div className="col-span-12 md:col-span-8 rounded-[1.5rem] p-8 bg-[#f2f3ff] border border-[#D1FAE5]/20 group hover:border-[#004e3a] transition-all duration-300">
                            <div className="flex flex-col h-full justify-between">
                                <div>
                                    <span className="material-symbols-outlined text-4xl text-[#004e3a] mb-6">verified_user</span>
                                    <h3 className="text-[30px] font-semibold text-[#004e3a] mb-4">Embassy Submissions & Visa Papers</h3>
                                    <p className="text-[16px] text-[#3f4944] leading-relaxed mb-6">
                                        Our certifications meet the strict requirements for the Diplomatic Enclave, including the UK, US, Eurozone (Schengen), Canadian, and Australian embassies.
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-[#004e3a] font-medium">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> Official Translator's Stamp & Signature
                                        </li>
                                        <li className="flex items-center gap-3 text-[#004e3a] font-medium">
                                            <span className="material-symbols-outlined text-sm">check_circle</span> Formal Certificate of Accuracy
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-8 rounded-lg w-full h-48 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                    <Image src="/images/legal-signing.png" alt="Legal signing" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Secondary Service 2 */}
                        <div className="col-span-12 md:col-span-4 rounded-[1.5rem] p-8 bg-[#064E3B] text-white">
                            <span className="material-symbols-outlined text-4xl text-[#D1FAE5] mb-6">translate</span>
                            <h3 className="text-[20px] font-semibold mb-4">Academic Credentials</h3>
                            <p className="text-[16px] text-[#D1FAE5]/70 leading-relaxed mb-8">
                                Degrees, diplomas, and transcripts formatted precisely for HEC and WES evaluations.
                            </p>
                            <div className="p-6 bg-white/10 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[#D1FAE5]">language</span>
                                    <span className="text-[14px] font-medium">Global Reach</span>
                                </div>
                                <p className="text-sm text-[#D1FAE5]/60">Supporting over 50+ language pairs.</p>
                            </div>
                        </div>

                        {/* Tertiary Service 3 */}
                        <div className="col-span-12 md:col-span-4 rounded-[1.5rem] p-8 bg-[#D1FAE5]/20 border border-[#D1FAE5] group">
                            <span className="material-symbols-outlined text-4xl text-[#004e3a] mb-6">medical_services</span>
                            <h3 className="text-[20px] font-semibold text-[#004e3a] mb-4">Corporate & Diplomatic</h3>
                            <p className="text-[16px] text-[#3f4944] mb-6">B2B contracts, MOU translations for international organizations, and embassy correspondence.</p>
                            <a className="text-[#004e3a] font-bold flex items-center gap-2 group-hover:gap-4 transition-all" href="/contact">Learn more <span className="material-symbols-outlined">arrow_forward</span></a>
                        </div>

                        {/* Tertiary Service 4 */}
                        <div className="col-span-12 md:col-span-8 rounded-[1.5rem] p-8 bg-[#faf8ff] border border-[#bec9c2] flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <span className="material-symbols-outlined text-4xl text-[#006c4e] mb-6">history_edu</span>
                                <h3 className="text-[30px] font-semibold text-[#004e3a] mb-4">Legal & Civil Documents</h3>
                                <p className="text-[16px] text-[#3f4944]">Nikkah Nama, birth certificates, and affidavits verified for official registration.</p>
                            </div>
                            <div className="flex-1 w-full grid grid-cols-2 gap-4">
                                <div className="h-32 bg-[#e2e7ff] rounded-xl flex items-center justify-center font-bold text-[#004e3a] text-center px-4">MOFA Compliant</div>
                                <div className="h-32 bg-[#006c4e] text-white rounded-xl flex items-center justify-center font-bold text-center px-4">Fast Turnaround</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROCESS STEPS SECTION */}
                <section className="py-[80px] px-4 md:px-[40px] bg-[#f2f3ff] border-y border-[#bec9c2]/30">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-[30px] font-semibold text-[#004e3a] mb-4">How It Works</h2>
                            <p className="text-[18px] text-[#3f4944]">A seamless, fully digital process designed for your convenience.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Send Document</h3>
                                <p className="text-[#3f4944] text-sm">Send a clear scan or photo of your document via WhatsApp or email.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Quotation & Payment</h3>
                                <p className="text-[#3f4944] text-sm">Get an instant, transparent quote. Make a secure online payment to start.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Translation & Review</h3>
                                <p className="text-[#3f4944] text-sm">Our qualified linguists translate and format. You review the draft for spelling accuracy.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D1FAE5] relative">
                                <div className="w-10 h-10 bg-[#D1FAE5] text-[#004e3a] rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
                                <h3 className="font-bold text-[#131b2e] mb-2">Certified Delivery</h3>
                                <p className="text-[#3f4944] text-sm">Receive digital copies immediately, and stamped hard copies via courier to your doorstep.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="py-[80px] bg-[#F8FAFC] relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-4 md:px-[40px] flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1">
                            <h2 className="text-[30px] font-semibold text-[#004e3a] mb-8">Why Choose Lisan in Islamabad?</h2>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#004e3a] text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Localized Expertise</h4>
                                        <p className="text-[#3f4944]">Address Islamabad's specific audience—expats, foreign mission staff, international NGO workers, and students applying for foreign scholarships.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#006c4e] text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined">speed</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Fast Doorstep Delivery</h4>
                                        <p className="text-[#3f4944]">Serving sectors E, F, G, H, I, DHA, and Bahria Town. Enjoy secure digital delivery or swift courier tracking straight to your doorstep across Islamabad and Rawalpindi.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D1FAE5] text-[#004e3a] flex items-center justify-center">
                                        <span className="material-symbols-outlined">lock</span>
                                    </div>
                                    <div>
                                        <h4 className="text-[20px] font-semibold text-[#004e3a] mb-2">Total Confidentiality</h4>
                                        <p className="text-[#3f4944]">NDA-backed processes for sensitive government and corporate documentation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative w-full">
                            <div className="aspect-square bg-[#D1FAE5] rounded-[1.5rem] overflow-hidden shadow-2xl relative w-full">
                                <Image className="w-full h-full object-cover" src="/images/office-meeting.png" alt="Office meeting" fill />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-xl max-w-xs">
                                <p className="text-[#004e3a] font-bold text-3xl mb-1">100%</p>
                                <p className="text-[#3f4944] text-[14px] font-medium">Acceptance Rate for Embassy Submissions in Islamabad.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-[80px] max-w-[1280px] mx-auto px-4 md:px-[40px]">
                    <h2 className="text-[30px] font-semibold text-[#004e3a] text-center mb-16">Trusted by Local Leaders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[1.5rem] bg-[#faf8ff] border border-[#bec9c2] hover:shadow-lg transition-all">
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            </div>
                            <p className="italic text-[#3f4944] mb-8">"Lisan.pk handled our corporate bylaws translation for our expansion into Saudi Arabia. The quality was impeccable, and they understood the legal terminology perfectly."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#97f5cc]"></div>
                                <div>
                                    <p className="font-bold text-[#004e3a]">Asad Mehmood</p>
                                    <p className="text-sm text-[#3f4944]">Director, Blue Area Tech</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-[1.5rem] bg-[#004e3a] text-white shadow-xl">
                            <div className="flex gap-1 text-[#D1FAE5] mb-6">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            </div>
                            <p className="italic mb-8">"Highly professional service for embassy document translation. They were faster than any other agency in Islamabad and very transparent about pricing."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20"></div>
                                <div>
                                    <p className="font-bold">Sara Khan</p>
                                    <p className="text-sm text-[#D1FAE5]/80">Visa Applicant, F-8 Markaz</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-[1.5rem] bg-[#faf8ff] border border-[#bec9c2] hover:shadow-lg transition-all">
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                            </div>
                            <p className="italic text-[#3f4944] mb-8">"Their technical translation team is top-notch. We've used them for several engineering manuals and the feedback from our partners has been excellent."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#97f5cc]"></div>
                                <div>
                                    <p className="font-bold text-[#004e3a]">Dr. Irfan Malik</p>
                                    <p className="text-sm text-[#3f4944]">Lead Engineer, Sector F-7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
