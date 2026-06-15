import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const metadata: Metadata = {
    title: "Certified Translation Services in Lahore | Legal & Corporate",
    description: "Get expert document translation services in Lahore. Trusted by businesses across Gulberg and DHA for official, legal, and multi-language certificate translation.",
    alternates: {
        canonical: "https://www.lisan.pk/translation-services-lahore",
    },
}

export default function LahoreTranslationPage() {
    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Lisan.pk Lahore Hub
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight capitalize">
                            Professional translation services lahore
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Serving corporate clients and residents across Gulberg, DHA, and Model Town. We provide official document translation and linguistic experts for global visa processing.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20translation%20services%20in%20Lahore." target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    Chat on WhatsApp
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

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Top-Rated Urdu Translation Lahore
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                From business contracts in MM Alam Road to student degree attestations, we provide the best certified document translation Pakistan has to offer. Need to know "off to lahore meaning in urdu"? We handle complex linguistic nuances with zero delays and 100% acceptance.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Officially Recognized by NADRA & MOFA",
                                    "Rapid 24-Hour Express Options",
                                    "Direct Courier to Your Doorstep in Lahore",
                                    "Expertise in Legal and Academic Documents"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold shrink-0">✓</div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-emerald-900/5">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Process for Lahore Residents</h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">1. Connect via WhatsApp</h4>
                                    <p className="text-slate-600 text-sm">Tap the WhatsApp button to send a photo of your Nikahnama, Degree, or legal document for a fast quote.</p>
                                </div>
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">2. Linguistic Translation</h4>
                                    <p className="text-slate-600 text-sm">Our expert translators deliver highly accurate, certified translations with official stamps.</p>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">3. Nationwide Courier</h4>
                                    <p className="text-slate-600 text-sm">Documents are dispatched securely via TCS/Leopards directly to your address in Lahore.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}
