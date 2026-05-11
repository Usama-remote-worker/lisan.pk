"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }

    return (
        <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div 
                        {...fadeInUp}
                        className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold-light/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-8 shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
                        Embassy Recommended Services
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
                        className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-8xl mb-8 font-serif"
                    >
                        Pakistan’s #1 <br />
                        <span className="text-emerald-600">Arabic Translation</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as any }}
                        className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Trusted by 100k+ clients for over 40 years. We provide accurate, certified translation and attestation services with doorstep delivery across Pakistan.
                    </motion.p>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
                        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
                    >
                        <Link href="/contact">
                            <Button id="gtm-hero-quote" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 h-16 text-sm font-bold uppercase tracking-widest shadow-2xl shadow-emerald-600/20 rounded-full transition-all duration-300">
                                Get a Free Quote
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button id="gtm-hero-services" variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-16 text-sm px-12 rounded-full font-bold uppercase tracking-widest transition-all duration-300">
                                View All Services
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                        className="mt-12 p-8 bg-gradient-to-br from-white to-brand-gold-light/20 rounded-[2.5rem] border border-brand-gold/20 inline-block relative overflow-hidden shadow-xl shadow-slate-100/50"
                    >
                        <div className="absolute top-0 right-0 p-3">
                            <span className="flex h-3 w-3 rounded-full bg-brand-gold animate-ping"></span>
                        </div>
                        <p className="text-emerald-950 font-bold text-xl mb-3 flex items-center justify-center gap-2">
                             2026 Saudi Scholarship Deadlines Approaching
                        </p>
                        <p className="text-slate-600 text-sm mb-6 max-w-xl mx-auto font-medium">
                            University portals close periodically this month. Secure your admission with our priority certified translation and attestation services. Same-day processing available.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link id="gtm-hero-scholarship-guide" href="/consultancy/saudi-scholarship" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20">
                                View Full Guide <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link id="gtm-hero-priority-wa" href="https://wa.me/923044296295" className="bg-white border border-[#25D366] text-[#25D366] hover:bg-emerald-50 px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
                                Request Priority Service
                            </Link>
                        </div>
                    </motion.div>

                    <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-12">
                        <div className="flex items-center">
                            <span>Embassy Approved</span>
                        </div>
                        <div className="flex items-center">
                            <span>Same Day Delivery</span>
                        </div>
                        <div className="flex items-center">
                            <span>100% Accuracy Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

