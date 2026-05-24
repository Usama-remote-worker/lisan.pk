"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StudyAbroadPromo() {
    const benefits = [
        {
            title: "Direct Admission Routes",
            desc: "Only high school diploma / intermediate required for eligible private universities."
        },
        {
            title: "No IELTS or Entry Exams",
            desc: "Official English Medium certificates accepted in place of IELTS."
        },
        {
            title: "100% Free Processing",
            desc: "No consultancy or application portal fees from start to finish."
        },
        {
            title: "On-Ground Student Support",
            desc: "Physical office inside Bozok Technopark coordinates airport pickup and permits."
        }
    ]

    const featuredUniversities = [
        "Yeditepe University", "Özyeğin University", "Bahçeşehir University",
        "Acıbadem University", "Bezmialem Vakıf University", "Biruni University",
        "İstinye University", "Istanbul Medipol University", "Ankara Medipol University",
        "Gelişim University", "Istanbul Aydın University", "Okan University",
        "Üsküdar University", "Beykent University", "Atılım University",
        "Beykoz University", "Fenerbahçe University", "Altınbaş University"
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950 text-white border-y border-slate-900 font-sans">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950 z-0"></div>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02] z-0"></div>
            
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                
                {/* 🇹🇷 Value Proposition Announcement Bar */}
                <div className="mb-16 bg-emerald-900/40 border border-emerald-500/25 p-8 rounded-[2rem] text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl" />
                    <p className="text-xl md:text-2xl font-bold leading-relaxed text-emerald-100 font-serif">
                        🇹🇷 Free Applications Continue for All Departments from All Foundation/Private Universities in Türkiye Without Any Entrance Exam, Only with a High School Diploma 📢
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Column: Visuals & Branding */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/20 select-none"
                        >
                            Study Abroad Hub
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl font-black font-serif leading-tight text-slate-100"
                        >
                            Study in Turkey <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-400 font-extrabold">Without Entry Exams</span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-slate-300 leading-relaxed font-sans"
                        >
                            Get guaranteed placement and up to 75% scholarship packages directly with Türkiye's premium private and foundation universities. Secure your seat using only your Intermediate/High School diploma.
                        </motion.p>

                        {/* Staggered Benefits Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-4 font-sans">
                            {benefits.map((benefit, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    className="p-5 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:bg-white/10 transition-colors"
                                >
                                    <h4 className="font-extrabold text-sm text-emerald-400 flex items-center gap-1.5 font-serif">
                                        <span className="text-emerald-500 shrink-0 font-extrabold">✓</span>
                                        {benefit.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 leading-relaxed font-sans">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Universities & CTA Block */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Accent Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500" />
                            
                            <div className="space-y-6 font-sans">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400">Direct Partner Desk</span>
                                    <h3 className="text-2xl font-black font-serif text-white mt-1">Available Premium Campuses</h3>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                                    {featuredUniversities.map((uni, idx) => (
                                        <div 
                                            key={idx} 
                                            className="px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl flex items-center gap-2 text-[11px] font-semibold text-slate-200 hover:bg-white/5 hover:border-slate-700 transition-all"
                                        >
                                            <span className="text-emerald-500 shrink-0 select-none">•</span>
                                            <span className="truncate">{uni}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-5 text-center mt-4">
                                    <p className="text-xs font-semibold text-slate-400">
                                        ⚡ Plus over <span className="text-white font-extrabold">50+ prestigious private universities</span> across Istanbul, Ankara, and Izmir with 100% direct entry routes.
                                    </p>
                                </div>

                                <div className="pt-6 space-y-4 text-center sm:text-left">
                                    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
                                        <Link href="/study-in-turkey" className="block w-full sm:w-auto">
                                            <Button className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl text-base transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-emerald-950/20">
                                                Explore All Universities
                                            </Button>
                                        </Link>
                                        
                                        <Link href="/contact" className="block w-full sm:w-auto">
                                            <Button variant="ghost" className="w-full h-14 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-2xl text-base transition-all flex items-center justify-center">
                                                Apply Online Free
                                            </Button>
                                        </Link>
                                    </div>
                                    
                                    <p className="text-[10px] text-slate-500 text-center font-medium">
                                        No application fee • Safe & direct university registrations verified physically via Technopark
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
