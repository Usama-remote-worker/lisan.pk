import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServicePackages } from "@/components/home/ServicePackages"
import { CheckCircle2, Shield, Clock, BookOpen, GraduationCap, Building2, Scale, Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Certified Translation Services in Islamabad | Embassy Approved",
    description: "Looking for certified translation services in Islamabad? We provide MOFA, HEC, and embassy-compliant translations with 24-48 hour turnaround. Get a quote today.",
    alternates: {
        canonical: "https://www.lisan.pk/translation-services-islamabad",
    },
}

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Will your translations be accepted by embassies in Islamabad?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our certified translations include a formal certificate of accuracy, official stamps, and credentials that fulfill the strict verification criteria of foreign embassies, MOFA, and educational boards."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to get a document translated?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most standard legal or personal documents (birth certificates, degrees) are processed within 24 to 48 hours. Express options are available for urgent visa deadlines."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need to submit original physical documents?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No, clear scanned copies or high-resolution photos sent via email or WhatsApp are perfectly sufficient for us to begin the certified translation process."
            }
        }
    ]
}

export default function IslamabadTranslationPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <section className="bg-[#064e3b] text-white pt-24 pb-20 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <span className="inline-block bg-[#a7f3d0] text-[#064e3b] font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                            Lisan.pk | Serving the Capital
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                            Certified Translation Services in Islamabad
                        </h1>
                        <p className="text-emerald-50 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                            Accurate, legally recognized translations for visas, immigration, and legal affairs. Accepted by foreign embassies, NADRA, MOFA, and ministries across Pakistan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20certified%20translation%20services%20in%20Islamabad.">
                                <Button className="w-full sm:w-auto bg-[#a7f3d0] hover:bg-[#86efac] text-[#064e3b] h-14 px-8 text-base font-bold rounded-xl transition-all shadow-lg shadow-[#a7f3d0]/20">
                                    Start Your Project
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="w-full sm:w-auto border-[#a7f3d0] text-[#a7f3d0] hover:bg-[#064e3b] hover:text-white bg-transparent h-14 px-8 text-base font-bold rounded-xl transition-all">
                                    View Our Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECOSYSTEM SECTION (The Institutional Compliance) */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Compliance Translation Ecosystem</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Our specialized divisions ensure that every word passes rigorous embassy and cultural ministry mandates.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Card 1 */}
                        <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#064e3b]">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Embassy Submissions & Visa Papers</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Full compliance for the Diplomatic Enclave. Our certifications meet strict requirements for the UK, US, Eurozone, Canadian, and Australian embassies. Guaranteed acceptance.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-[#064e3b]" /> MOFA verification ready documentation
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle2 size={18} className="text-[#064e3b]" /> Formal Certificate of Accuracy included
                                </li>
                            </ul>
                            <div className="h-48 bg-slate-200 rounded-2xl w-full object-cover relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#064e3b]/10 group-hover:bg-transparent transition-all"></div>
                                {/* Image placeholder reflecting the user's design */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300"></div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#064e3b] rounded-3xl p-8 md:p-10 text-white shadow-xl shadow-[#064e3b]/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="w-12 h-12 bg-[#064e3b] border border-white/20 rounded-xl flex items-center justify-center mb-6 text-[#a7f3d0]">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Academic Credentials (HEC & WES)</h3>
                            <p className="text-emerald-50/80 leading-relaxed max-w-2xl">
                                Expanding your education beyond Pakistan? We perfectly format your degrees, diplomas, and transcripts for HEC attestation and international WES evaluations.
                            </p>
                            <div className="mt-8 bg-white/10 rounded-xl p-4 flex items-start gap-4 max-w-md backdrop-blur-sm">
                                <Shield className="text-[#a7f3d0] shrink-0 mt-1" size={20} />
                                <p className="text-sm text-emerald-50">Translated directly from the original HEC verified Arabic/English formats.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#f1f5f9] rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-slate-700">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Corporate & Diplomatic</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Flawless translation of corporate contracts, B2B agreements, MOU drafts for international organizations, and formal embassy correspondence.
                            </p>
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                ISO 9001:2015 <ArrowRight size={16} />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#f5f3ff] rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-purple-700">
                                <Scale size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Legal & Civil Documentation</h3>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Complete packages for personal documentation. Nikkah Nama, birth certificates, Family Registration Certificates (FRC), and legal affidavits verified for NADRA.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="flex-1">
                                    <Button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 h-14 rounded-xl font-bold transition-colors">
                                        Get Details
                                    </Button>
                                </Link>
                                <Link href="https://wa.me/923044296295" className="flex-1">
                                    <Button className="w-full bg-[#064e3b] hover:bg-[#047857] text-white h-14 rounded-xl font-bold transition-all shadow-lg">
                                        Start Translation
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS SECTION */}
            <section className="py-20 px-4 md:px-8 bg-slate-50 border-y border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-lg text-slate-600">A seamless, fully digital process designed for your convenience.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg mb-4">1</div>
                            <h3 className="font-bold text-slate-900 mb-2">Send Document</h3>
                            <p className="text-slate-600 text-sm">Send a clear scan or photo of your document via WhatsApp or email.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg mb-4">2</div>
                            <h3 className="font-bold text-slate-900 mb-2">Quotation & Payment</h3>
                            <p className="text-slate-600 text-sm">Get an instant, transparent quote. Make a secure online payment to start.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg mb-4">3</div>
                            <h3 className="font-bold text-slate-900 mb-2">Translation & Review</h3>
                            <p className="text-slate-600 text-sm">Our MA-qualified linguists translate and format. You review the draft for spelling accuracy.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative">
                            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-lg mb-4">4</div>
                            <h3 className="font-bold text-slate-900 mb-2">Certified Delivery</h3>
                            <p className="text-slate-600 text-sm">Receive digital copies immediately, and stamped hard copies via courier to your doorstep.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE LISAN SECTION */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Why Choose Lisan in Islamabad?</h2>
                        
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#064e3b] text-[#a7f3d0] rounded-full flex items-center justify-center shrink-0">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Embassy Approved Expertise</h3>
                                    <p className="text-slate-600 leading-relaxed">Deep understanding of local jurisdictional requirements, embassy protocols, and MOFA translation guidelines.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#064e3b] text-[#a7f3d0] rounded-full flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Same Day Delivery</h3>
                                    <p className="text-slate-600 leading-relaxed">Rapid translation services available for critical visa applications or urgent immigration timelines.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-[#064e3b] text-[#a7f3d0] rounded-full flex items-center justify-center shrink-0">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">Strict Confidentiality</h3>
                                    <p className="text-slate-600 leading-relaxed">NDA-backed processes for sensitive personal documents and classified corporate communications.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-[#064e3b] rounded-t-[3rem] rounded-b-[1rem] p-4 pt-12 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                            <div className="relative z-10 w-full aspect-square bg-white rounded-full p-2">
                                <div className="w-full h-full rounded-full bg-slate-200 overflow-hidden relative">
                                     <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                        [Image: Professionals in Meeting]
                                     </div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-0 bg-white p-4 pr-8 rounded-r-xl shadow-xl z-20">
                                <h4 className="font-bold text-slate-900 text-xl">100%</h4>
                                <p className="text-slate-500 text-sm font-medium">Acceptance Rate for<br/>Embassy Submissions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Local Leaders</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex text-amber-400 mb-4">
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                            </div>
                            <p className="text-slate-700 italic mb-6">"Lisan.pk translated our corporate documentation for our expansion into Saudi Arabia. Completely MOFA acceptable, and they understood the legal terminology perfectly."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Tariq Mahmood</h4>
                                    <p className="text-slate-500 text-xs">Corporate Client, Blue Area</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#064e3b] text-white p-8 rounded-2xl shadow-xl">
                            <div className="flex text-amber-400 mb-4">
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                            </div>
                            <p className="text-emerald-50 italic mb-6">"Highly professional service for embassy document translation. They were faster than any other agency in Islamabad and 100% transparent about pricing."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#a7f3d0] rounded-full"></div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Sana Khan</h4>
                                    <p className="text-emerald-100/80 text-xs">Visa Applicant, F-8 Markaz</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex text-amber-400 mb-4">
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                                <Star fill="currentColor" size={18} />
                            </div>
                            <p className="text-slate-700 italic mb-6">"Their technical translation team is top-notch. We rely on them for sensitive policy documents and the feedback from our partners has been excellent."</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-full"></div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">Ali Rehman</h4>
                                    <p className="text-slate-500 text-xs">NGO Director, Sector G-11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ServicePackages />
        </main>
    )
}
