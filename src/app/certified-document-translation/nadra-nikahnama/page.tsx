import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Official NADRA Nikahnama English Translation Services",
    description: "Fast and legally verified English translation of your Urdu NADRA Nikahnama. Certified and fully accepted by international embassies for visa and immigration processing.",
    alternates: {
        canonical: "https://www.lisan.pk/certified-document-translation/nadra-nikahnama",
    },
}

export default function NikahnamaTranslationPage() {
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
                            Nikahnama english translation
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            The definitive requirement for spouse visas and immigration. We provide MOFA-approved, 100% certified English and Arabic translations of your Marriage Registration Certificate (MRC).
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20my%20Nikahnama%20translated." target="_blank" className="w-full sm:w-auto">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Embassies Demand Certified Nikahnama Translation</h2>
                        <p className="text-slate-600 mb-6">
                            When applying for a spouse visa (like the UK Spouse Visa, US CR-1/IR-1, or Schengen dependent visa), embassies strictly require your marriage certificate to be in their native language. An Urdu Nikahnama will be rejected immediately without a nikahnama in english or nikah nama english. Our nikahnama translation services solve this instantly.
                        </p>
                        <p className="text-slate-600 mb-8">
                            At Lisan.pk, our official linguistic experts translate every clause of the Nadra Nikahnama with extreme legal precision, ensuring the names, dates, and dower (Haq Mehr) clauses match your passports perfectly.
                        </p>

                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Required Documents to Start</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">1.</span> Clear scan of the original Urdu Nikahnama</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">2.</span> Clear scan of the Nadra Marriage Registration Certificate (MRC)</li>
                                <li className="flex items-center gap-3 text-slate-700"><span className="text-emerald-600 font-bold">3.</span> Passport copies of both Husband and Wife (for name spellings)</li>
                            </ul>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Get Your Translation Started Instantly</h3>
                            <p className="text-emerald-100 mb-8">Send us the documents on WhatsApp. Standard delivery is 24 hours.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20my%20Nikahnama%20translated." target="_blank">
                                <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-10 text-base font-bold shadow-lg transition-all rounded-xl">
                                    Send Docs via WhatsApp
                                </Button>
                            </Link>
                        </div>

                        {/* Contextual City Links for Nikah Nama */}
                        <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white">
                            <h3 className="text-xl font-bold mb-4 font-serif">Nikah Nama Translation by City</h3>
                            <p className="text-slate-400 text-sm mb-6">Select your city for localized Nikah Nama Arabic translation and embassy attestation services:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
                                <Link href="/locations/lahore/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Lahore Nikah Nama →
                                </Link>
                                <Link href="/locations/karachi/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Karachi Nikah Nama →
                                </Link>
                                <Link href="/locations/islamabad/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Islamabad Nikah Nama →
                                </Link>
                                <Link href="/locations/peshawar/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Peshawar Nikah Nama →
                                </Link>
                                <Link href="/locations/rawalpindi/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Rawalpindi Nikah Nama →
                                </Link>
                                <Link href="/locations/gujrat/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Gujrat Nikah Nama →
                                </Link>
                                <Link href="/locations/multan/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Multan Nikah Nama →
                                </Link>
                                <Link href="/locations/faisalabad/nikah-nama-translation" className="p-3 bg-white/5 hover:bg-emerald-600 rounded-xl transition-colors text-center">
                                    Faisalabad Nikah Nama →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

