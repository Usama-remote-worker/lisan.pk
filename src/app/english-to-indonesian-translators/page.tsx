import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Professional English to Indonesian Translators | Certified B2B",
    description: "Hire professional English to Indonesian translators for corporate documents, legal filings, and academic projects. High-accuracy linguistic pairings with rapid delivery.",
    alternates: {
        canonical: "https://www.lisan.pk/english-to-indonesian-translators",
    },
}

export default function EnglishToIndonesianPage() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Language Power Pair
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            English to indonesian translators
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Looking to expand your business into Southeast Asia? Our certified English to Indonesian translators provide flawless corporate, legal, and academic document translation.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20an%20English%20to%20Indonesian%20translator." target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    Chat on WhatsApp
                                </Button>
                            </Link>
                            <Link href="tel:+923044296295" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-emerald-700 hover:bg-emerald-800 text-white bg-transparent h-14 px-8 text-base font-bold rounded-xl transition-all">
                                    Call Support: 0304 4296295
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Rely on Automated Translation for Business? Don't.</h2>
                        <p className="text-slate-600 mb-6">
                            Generic dictionary tools and AI can completely alter the legal structure of a business contract or the tone of a marketing brochure. When dealing with Indonesian authorities or business partners, native linguistic accuracy is mandatory. If you need to translate english into indonesian, or require an urdu to indonesian translation, we guarantee precision.
                        </p>
                        <p className="text-slate-600 mb-8">
                            Our team of certified linguists includes native Bahasa Indonesia speakers who specialize in B2B corporate communications, legal compliance, and technical manuals. We can even translate urdu to indonesian for specific local needs.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate & B2B</h3>
                                <p className="text-sm text-slate-600">Company profiles, NDAs, joint venture agreements, and business proposals.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Legal & Immigration</h3>
                                <p className="text-sm text-slate-600">Visa documents, police clearance, and academic degrees for the Indonesian Embassy.</p>
                            </div>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Request a Custom Quote</h3>
                            <p className="text-emerald-100 mb-8">Send your document files via WhatsApp for an exact price and timeline estimate within 10 minutes.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20an%20English%20to%20Indonesian%20translator." target="_blank">
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
