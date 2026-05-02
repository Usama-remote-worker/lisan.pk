import { Check, ShieldCheck, Zap, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { packages } from "@/data/location-services"

import { ScrollReveal } from "@/components/animations/ScrollReveal"

export function ServicePackages() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="container mx-auto px-4 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
                            <Sparkles className="w-4 h-4" /> Best Value Bundles
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Complete Scholarship Packages</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Save time and money with our specially curated document sets designed for Saudi university admission requirements.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(packages).map(([key, pkg], index) => (
                        <ScrollReveal key={key} delay={index * 0.1}>
                            <div className="flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 group relative overflow-hidden h-full">
                                {key === 'silver-masters' && (
                                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-bl-2xl">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">{pkg.name}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed min-h-[40px]">
                                        {pkg.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Includes:</p>
                                    {pkg.includes.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="p-1 bg-emerald-50 rounded-full mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-slate-50">
                                    <p className="text-xs text-slate-400 mb-4 italic">Ideal for: {pkg.idealFor}</p>
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20the%20${pkg.name}%20package.`} target="_blank">
                                        <Button className="w-full bg-slate-900 hover:bg-emerald-600 text-white h-14 rounded-2xl transition-all font-bold">
                                            Select Package
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 bg-emerald-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif">All Packages Include:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Certified Stamp & Signature",
                                    "Digital PDF Delivery",
                                    "1 Free Revision",
                                    "Accuracy Confirmation Letter",
                                    "Secure Data Privacy",
                                    "24/7 Support"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                        <span className="text-emerald-100 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-emerald-300 mb-4 font-medium italic">Ready to secure your Saudi scholarship?</p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black px-12 h-16 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                                    GET A CUSTOM QUOTE
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
