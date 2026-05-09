"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, ShieldCheck, FileText, ArrowRight, Building2, Map, Plane, Compass } from "lucide-react"

export function B2BTravelSection() {
    const features = [
        {
            icon: <Plane className="h-6 w-6 text-emerald-600" />,
            title: "IATA Membership Certificates",
            description: "Certified Arabic translations for official IATA registration, aviation authority approvals, and partner verifications."
        },
        {
            icon: <Compass className="h-6 w-6 text-emerald-600" />,
            title: "DTS Licensing & Tourism Docs",
            description: "Official translation of Department of Tourist Services (DTS) certificates, travel agency licenses, and tourism permits."
        },
        {
            icon: <Building2 className="h-6 w-6 text-emerald-600" />,
            title: "Saudi B2B Partner Agreements",
            description: "Expert translation of commercial contracts, partner agreements, and Saudi Ministry of Hajj & Umrah compliance papers."
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
            title: "Chamber & SECP Registrations",
            description: "Official corporate translations of Chamber of Commerce certificates, NTN/Tax certificates, and SECP company profiles."
        }
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left content column */}
                    <div className="lg:col-span-5 space-y-8">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                            B2B Corporate Services
                        </span>
                        
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.1]">
                            Specialized Arabic Translation for <br />
                            <span className="text-emerald-600">Travel & Umrah Agencies</span>
                        </h2>
                        
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Saudi authorities, ministries, and B2B systems require error-free, legally certified Arabic versions of your company credentials. A single translation delay or phrasing error can disrupt your entire Umrah, Hajj, or tour operations.
                        </p>
                        
                        <p className="text-slate-600 leading-relaxed">
                            Lisan.pk provides industry-specialized commercial translations with official stamps, certified accuracy, and rapid priority processing to meet tight seasonal and ministerial deadlines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/services/translation/iata-dts-umrah-travel-agency" className="inline-block">
                                <button className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 border border-emerald-700/50">
                                    Explore DTS Service <ArrowRight className="h-4 w-4" />
                                </button>
                            </Link>
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20commercial%20Arabic%20translation%20for%20my%20travel%20agency." target="_blank" className="inline-block">
                                <button className="w-full sm:w-auto bg-white border border-emerald-600 hover:bg-emerald-50 text-emerald-700 font-bold px-8 h-14 rounded-xl transition-all flex items-center justify-center gap-2">
                                    B2B WhatsApp Support
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right features grid column */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feat, idx) => (
                                <div 
                                    key={idx} 
                                    className="p-8 rounded-3xl border border-slate-200/60 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white text-emerald-600 transition-all duration-300">
                                        {feat.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                                        {feat.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {feat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* High ticket trust banner */}
                        <div className="mt-8 p-6 rounded-3xl bg-emerald-900 text-white flex items-center justify-between gap-6 border border-emerald-800 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                <Briefcase className="h-24 w-24 transform translate-x-8 translate-y-4" />
                            </div>
                            <div className="relative z-10">
                                <h4 className="font-bold text-lg mb-1">Are you a high-volume Hajj/Umrah Operator?</h4>
                                <p className="text-emerald-200 text-xs leading-relaxed max-w-md">
                                    Contact us for customized corporate packages, corporate monthly billing, and instant priority digital drafts.
                                </p>
                            </div>
                            <Link href="tel:+923044296295" className="relative z-10 flex-shrink-0">
                                <button className="bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold px-5 py-3 rounded-xl text-xs uppercase tracking-wider transition-all">
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
