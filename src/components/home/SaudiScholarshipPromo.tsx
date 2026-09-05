"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SaudiScholarshipPromo() {
    const leadServices = [
        {
            title: "Saudi Document Translation",
            desc: "Certified Arabic translation of degrees, transcripts, police character certificates, and NADRA documents.",
            badge: "Most Popular",
            waText: "Hi Lisan.pk, I need certified Arabic document translation for my Saudi scholarship application.",
            icon: "📜"
        },
        {
            title: "Document Review & Preparation",
            desc: "Thorough review of SOPs, LORs, degrees, and attestation compliance (HEC/MOFA/Saudi Embassy).",
            badge: "Expert Verification",
            waText: "Hi Lisan.pk, I need my documents reviewed for Saudi scholarship eligibility.",
            icon: "🔍"
        },
        {
            title: "Study in Saudi Portal Guidance",
            desc: "Step-by-step guidance on creating portal profiles, uploading documents, and resolving portal errors.",
            badge: "Portal Support",
            waText: "Hi Lisan.pk, I need assistance with the Study in Saudi portal registration and uploading.",
            icon: "🌐"
        },
        {
            title: "University & Program Shortlisting",
            desc: "Shortlist top-tier Saudi universities (KSU, KAU, KAUST, Madinah Uni) matching your CGPA & discipline.",
            badge: "Strategic Hunting",
            waText: "Hi Lisan.pk, I need help shortlisting Saudi universities for fully funded scholarships.",
            icon: "🎓"
        },
        {
            title: "Complete Application Concierge",
            desc: "End-to-end full scholarship application management from document translation to final submission.",
            badge: "Full Package",
            waText: "Hi Lisan.pk, I want complete application assistance for Saudi Arabia fully funded scholarships.",
            icon: "⭐"
        }
    ]

    const keyBenefits = [
        "100% Free Tuition Fee Waiver",
        "Monthly Allowance / Stipend (SR 890 - 1,500+)",
        "Free Furnished Accommodation & Healthcare",
        "Annual Round-trip Flight Tickets to Pakistan",
        "No IELTS Required for Most Degree Programs"
    ]

    return (
        <section className="py-20 relative overflow-hidden bg-slate-900 text-white font-sans border-t border-slate-800">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-950 z-0"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header Badge & Title */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-extrabold uppercase tracking-wider border border-emerald-500/20 mb-4 select-none">
                        🇸🇦 Saudi Arabia Vision 2030 Scholarships
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white mb-6 leading-tight">
                        Study in Saudi Arabia <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">
                            Fully Funded Scholarship Services
                        </span>
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                        Prepare your application for 25+ HEC-recognized Saudi universities. Get certified Arabic translations, document verification, portal support, and complete application assistance.
                    </p>
                </div>

                {/* Core Benefits Bar */}
                <div className="mb-14 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                    <h3 className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold text-center mb-4 font-serif">
                        Why Apply for Saudi Government Scholarships?
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
                        {keyBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-2 rounded-xl">
                                <span className="text-emerald-400 font-bold">✓</span>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5 Lead Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {leadServices.map((svc, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{svc.icon}</span>
                                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                                        {svc.badge}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {svc.title}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-sans mb-6">
                                    {svc.desc}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-800/80">
                                <a
                                    href={`https://wa.me/923288155866?text=${encodeURIComponent(svc.waText)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white text-center text-xs font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                                >
                                    <span>Get Service Assistance</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Final Master Callout Card */}
                    <div className="bg-gradient-to-br from-emerald-900/60 to-slate-950 border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-2xl">
                        <div>
                            <span className="text-3xl mb-4 block">🇸🇦</span>
                            <h4 className="text-lg font-bold font-serif text-white mb-2">
                                Saudi Scholarship Guidance Hub
                            </h4>
                            <p className="text-xs text-emerald-100/80 leading-relaxed font-sans mb-6">
                                Explore full guidelines, eligibility requirements, stipend breakdowns, and mandatory document checklists for Pakistani applicants.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-emerald-500/20">
                            <Link href="/consultancy/saudi-scholarship" className="block w-full">
                                <Button className="w-full bg-white hover:bg-emerald-50 text-slate-900 font-extrabold text-xs h-11 rounded-xl">
                                    Visit Saudi Consultancy Guide
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Action Bar */}
                <div className="text-center bg-emerald-950/40 border border-emerald-500/20 p-8 rounded-3xl max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-3 border border-emerald-500/20">
                        Interactive Search Tool
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-2">
                        FIND YOUR SAUDI SCHOLARSHIP PROGRAM
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-2xl mx-auto">
                        Search fully funded Bachelor’s, Master’s and PhD programs by university, academic field and gender.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/saudi-scholarships/program-finder">
                            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 h-12 rounded-xl text-sm shadow-lg w-full sm:w-auto">
                                FIND PROGRAMS →
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/923288155866?text=Hi%20Lisan.pk,%20I%20want%20to%20consult%20about%20Saudi%20Arabia%20scholarships%20and%20document%20translation."
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 font-bold px-8 h-12 rounded-xl text-sm w-full sm:w-auto">
                                Chat on WhatsApp Now
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
