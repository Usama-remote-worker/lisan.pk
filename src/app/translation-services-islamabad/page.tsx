import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ServicePackages } from "@/components/home/ServicePackages"

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
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* Custom Hero with Immediate CTAs */}
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Islamabad's #1 Translation Hub
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Certified Translation Services in Islamabad – Embassy & MOFA Compliant
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Accurate, legally recognized translations for visas, immigration, and legal affairs. Accepted by foreign embassies, NADRA, and ministries across Islamabad.
                        </p>
                        
                        {/* High-Visibility CTAs */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20certified%20translation%20services%20in%20Islamabad." target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    WhatsApp Us: Fast 24-48 Hour Turnaround
                                </Button>
                            </Link>
                            <Link href="tel:+923044296295" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-emerald-700 hover:bg-emerald-800 text-white bg-transparent h-14 px-8 text-base font-bold rounded-xl transition-all">
                                    Call: 0304 4296295
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Institutional Compliance Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recognized by Islamabad’s Strictest Institutions</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">We bypass generic translation. Our files are engineered to pass the rigorous compliance standards of the Diplomatic Enclave and Federal Ministries.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-emerald-500 transition-colors">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">🏛️</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Embassy Submissions</h3>
                            <p className="text-slate-600">Our certifications meet the strict requirements for the Diplomatic Enclave, including the UK, US, Eurozone (Schengen), Canadian, and Australian embassies.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-emerald-500 transition-colors">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">📜</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Government Ministries</h3>
                            <p className="text-slate-600">Full compliance with the Ministry of Foreign Affairs (MOFA), HEC (for educational degree translations), and NADRA (for family documentation).</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:border-emerald-500 transition-colors">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center mb-6 text-xl font-bold">✓</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">What's Included</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Official Translator's Stamp & Signature</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Formal Certificate of Accuracy</li>
                                <li className="flex items-center gap-2"><span className="text-emerald-500">✔</span> Corporate Letterhead Layout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hyper-Local Islamabad Context & Services Grid */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Trusted Across the Capital</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                We cater specifically to Islamabad's unique audience—expats, foreign mission staff, international NGO workers, and students applying for foreign scholarships (such as Erasmus or Fulbright).
                            </p>
                            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                                <h4 className="font-bold text-emerald-900 mb-2">Fast Doorstep Delivery</h4>
                                <p className="text-emerald-800 text-sm leading-relaxed">
                                    Serving sectors E, F, G, H, I, DHA, and Bahria Town. Enjoy secure digital delivery or swift courier tracking straight to your doorstep across Islamabad and Rawalpindi.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Dedicated Services for Islamabad</h3>
                            <div className="space-y-4">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Visa & Immigration Papers</h4>
                                    <p className="text-slate-600 text-sm">Passports, bank statements, police clearance certificates for embassy filings.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Academic Credentials</h4>
                                    <p className="text-slate-600 text-sm">Degrees, diplomas, and transcripts formatted precisely for HEC and WES evaluations.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Corporate & Diplomatic</h4>
                                    <p className="text-slate-600 text-sm">B2B contracts, MOU translations for international organizations, and embassy correspondence.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Legal & Civil Documents</h4>
                                    <p className="text-slate-600 text-sm">Nikkah Nama, birth certificates, and affidavits verified for official registration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Will your translations be accepted by embassies in Islamabad?</h3>
                            <p className="text-slate-600">Yes. Our certified translations include a formal certificate of accuracy, official stamps, and credentials that fulfill the strict verification criteria of foreign embassies, MOFA, and educational boards.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">How long does it take to get a document translated?</h3>
                            <p className="text-slate-600">Most standard legal or personal documents (birth certificates, degrees) are processed within 24 to 48 hours. Express options are available for urgent visa deadlines.</p>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Do I need to submit original physical documents?</h3>
                            <p className="text-slate-600">No, clear scanned copies or high-resolution photos sent via email or WhatsApp are perfectly sufficient for us to begin the certified translation process.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ServicePackages />
        </main>
    )
}
