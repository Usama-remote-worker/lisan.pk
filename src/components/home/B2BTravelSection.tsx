"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function B2BTravelSection() {
    const features = [
        {
            symbol: "✈",
            title: "IATA Membership Certificates",
            description: "Certified Arabic translations for official IATA registration, aviation authority approvals, and partner verifications."
        },
        {
            symbol: "⚓",
            title: "DTS Licensing & Tourism Docs",
            description: "Official translation of Department of Tourist Services (DTS) certificates, travel agency licenses, and tourism permits."
        },
        {
            symbol: "🏢",
            title: "Saudi B2B Partner Agreements",
            description: "Expert translation of commercial contracts, partner agreements, and Saudi Ministry of Hajj & Umrah compliance papers."
        },
        {
            symbol: "✓",
            title: "Chamber & SECP Registrations",
            description: "Official corporate translations of Chamber of Commerce certificates, NTN/Tax certificates, and SECP company profiles."
        }
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left content column */}
                    <div className="lg:col-span-5 space-y-8 font-sans">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm select-none">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                            B2B Corporate Services
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.1]">
                            Specialized Arabic Translation for <br />
                            <span className="text-emerald-700">Travel & Umrah Agencies</span>
                        </h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed font-sans">
                            Saudi authorities, ministries, and B2B systems require error-free, legally certified Arabic versions of your company credentials. A single translation delay or phrasing error can disrupt your entire Umrah, Hajj, or tour operations.
                        </p>
                        
                        <p className="text-slate-600 leading-relaxed font-sans">
                            Lisan.pk provides industry-specialized commercial translations with official stamps, certified accuracy, and rapid priority processing to meet tight seasonal and ministerial deadlines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 font-sans">
                            <Link href="/services/translation/iata-dts-umrah-travel-agency" className="inline-block w-full sm:w-auto">
                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-emerald-700/25">
                                    Explore DTS Service
                                </button>
                            </Link>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20commercial%20Arabic%20translation%20for%20my%20travel%20agency." target="_blank" className="inline-block w-full sm:w-auto">
                                <button className="w-full bg-white border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 font-bold px-8 h-14 rounded-xl transition-all flex items-center justify-center gap-2">
                                    B2B WhatsApp Support
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right features grid column */}
                    <div className="lg:col-span-7 font-sans">
                        <div className="grid sm:grid-cols-2 gap-6 font-sans">
                            {features.map((feat, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white transition-all duration-300 border border-emerald-100 font-bold text-lg select-none">
                                        {feat.symbol}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors font-serif">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-sans">
                                        {feat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* High ticket trust banner */}
                        <div className="mt-8 p-6 rounded-3xl bg-emerald-950 text-white flex items-center justify-between gap-6 border border-emerald-800/40 shadow-xl relative overflow-hidden shadow-emerald-950/10 font-sans">
                            <div className="relative z-10">
                                <h4 className="font-bold text-lg mb-1 font-serif">Are you a high-volume Hajj/Umrah Operator?</h4>
                                <p className="text-emerald-100 text-xs leading-relaxed max-w-md opacity-90 font-medium">
                                    Contact us for customized corporate packages, corporate monthly billing, and instant priority digital drafts.
                                </p>
                            </div>
                            <Link href="tel:+923044296295" className="relative z-10 flex-shrink-0">
                                <button className="bg-emerald-600 text-white hover:bg-emerald-700 font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all border border-emerald-700/25">
                                    Call Business Desk
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
