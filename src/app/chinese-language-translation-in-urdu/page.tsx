import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Chinese Language Translation in Urdu | CPEC Corporate Services",
    description: "Specialized Chinese language translation in Urdu for corporate manuals, CPEC business contracts, and industrial technical documents. Certified native experts.",
    alternates: {
        canonical: "https://www.lisan.pk/chinese-language-translation-in-urdu",
    },
}

export default function ChineseTranslationPage() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Corporate Translation Hub
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Chinese language translation in urdu
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Empowering CPEC projects and Sino-Pak business relations. We provide flawless translation of highly technical, legal, and commercial documents.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20Chinese%20translation%20services." target="_blank" className="w-full sm:w-auto">
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
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Navigating the Complexity of Mandarin</h2>
                        <p className="text-slate-600 mb-6">
                            Chinese language translation requires a deep understanding of linguistic structure and cultural business etiquette. With the rapid expansion of CPEC, businesses require flawless communication. A simple misinterpretation in a tender document or an engineering manual can halt operations. You need to confidently chinese to urdu translate complex specs.
                        </p>
                        <p className="text-slate-600 mb-8">
                            At Lisan.pk, we bridge the communication gap between Pakistan and China. Our translator chinese to urdu services provide specialized urdu to chinese translation for corporate entities, engineering firms, and import/export businesses.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Technical & Engineering</h3>
                                <p className="text-sm text-slate-600">Manuals, safety guidelines, and architectural blueprints for large-scale infrastructure projects.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Legal & Trade</h3>
                                <p className="text-sm text-slate-600">Joint ventures, Memorandums of Understanding (MoUs), and supply chain agreements.</p>
                            </div>
                        </div>

                        <div className="bg-emerald-900 text-white p-10 rounded-[2.5rem] text-center shadow-xl">
                            <h3 className="text-2xl font-bold mb-4">Partner With Expert Linguists</h3>
                            <p className="text-emerald-100 mb-8">Send your documents via WhatsApp to receive an exact cost and timeline for your Chinese translation project.</p>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20Chinese%20translation%20services." target="_blank">
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
