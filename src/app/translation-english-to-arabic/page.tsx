import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Certified English & Urdu to Arabic Translation Services",
    description: "Accurate English and Urdu to Arabic translation services tailored for commercial legal structures, Gulf visa documentation, and official diplomatic processing.",
    alternates: {
        canonical: "https://www.lisan.pk/translation-english-to-arabic",
    },
}

export default function EnglishToArabicPage() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Middle East Business Hub
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Translation english to arabic
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Specialized English to Arabic and Urdu to Arabic translation services. Perfect for businesses expanding into Saudi Arabia, UAE, and Qatar.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20English%20to%20Arabic%20translation." target="_blank" className="w-full sm:w-auto">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Mastering the Nuances of the Arabic Language</h2>
                        <p className="text-slate-600 mb-6">
                            Arabic is highly context-dependent. A direct dictionary translation often results in catastrophic misunderstandings in a corporate environment. If you need an urdu to arabic translate service, or need to translate arabic language documents, you need native fluency.
                        </p>
                        <p className="text-slate-600 mb-8">
                            At Lisan.pk, our MA Arabic qualified experts provide culturally accurate, grammatically flawless arabic translation services tailored specifically for the legal and business frameworks of the Gulf Cooperation Council (GCC).
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Our Arabic Translation Specialties</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Corporate Setup Documents for Dubai mainland/freezones</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Product catalogs and marketing materials for the Saudi market</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">✓</span> Official Nikahnama and degree translations for embassy attestation</li>
                            </ul>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Tap into the Gulf Market</h3>
                            <p className="text-emerald-100 mb-8">Submit your files via WhatsApp to receive a precise translation quote tailored to your corporate needs.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20English%20to%20Arabic%20translation." target="_blank">
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
