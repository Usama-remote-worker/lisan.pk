import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { languages, generateLanguagePairs } from "@/data/languages"
import { notFound } from "next/navigation"


type Props = {
    params: { source: string; target: string }
}

export function generateStaticParams() {
    const pairs = generateLanguagePairs();
    return pairs.map((pair) => ({
        source: pair.source,
        target: pair.target,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const sourceLang = languages.find(l => l.id === params.source)?.name;
    const targetLang = languages.find(l => l.id === params.target)?.name;

    if (!sourceLang || !targetLang) return { title: 'Translation Services' };

    return {
        title: `${sourceLang} to ${targetLang} Translation Services | Certified Experts`,
        description: `Professional ${sourceLang} to ${targetLang} document translation services. 100% certified accuracy for corporate, legal, and academic documents.`,
        alternates: {
            canonical: `https://www.lisan.pk/translate-${params.source}-to-${params.target}`,
        },
        robots: {
            index: false,
            follow: true,
        },
    }
}

export default function LanguagePairPage({ params }: Props) {
    const sourceLang = languages.find(l => l.id === params.source)?.name;
    const targetLang = languages.find(l => l.id === params.target)?.name;

    if (!sourceLang || !targetLang) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Native Linguistic Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Certified <span className="text-emerald-400">{sourceLang} to {targetLang}</span> Translation Services
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Need accurate {sourceLang} to {targetLang} translation? Our native linguistic experts provide fast, certified translations for business, legal, and personal documents.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20${sourceLang}%20to%20${targetLang}%20translation.`} target="_blank" className="w-full sm:w-auto">
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
                                Zero Margin for Linguistic Errors
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Automated translation tools cannot understand the cultural context or legal framework required for official documents. When translating from {sourceLang} to {targetLang}, native fluency is mandatory.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Accepted by Embassies and Universities Worldwide",
                                    "Processed by Native Speaking Translators",
                                    "Strict Confidentiality and Data Protection",
                                    "Official Stamps and Certifications Included"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold shrink-0">✓</div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-emerald-900/5">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Translation Workflow</h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">1. Send Your Document</h4>
                                    <p className="text-slate-600 text-sm">Send a photo of the {sourceLang} document via WhatsApp for an immediate quote.</p>
                                </div>
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">2. Expert Processing</h4>
                                    <p className="text-slate-600 text-sm">Our linguists translate it into {targetLang} with strict legal and semantic accuracy.</p>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">3. Direct Delivery</h4>
                                    <p className="text-slate-600 text-sm">The certified {targetLang} copies are dispatched to your address via secure courier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}
