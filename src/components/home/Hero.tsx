"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
    const fadeInUp = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    }

    return (
        <section className="relative bg-white pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden border-b border-slate-100 font-sans">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div 
                        {...fadeInUp}
                        className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-8 shadow-sm select-none"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                        Embassy Recommended Services
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as any }}
                        className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-8xl mb-8 font-sans leading-none"
                    >
                        Pakistan’s #1 <br />
                        <span className="text-emerald-600">Translation Services</span>
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
                            <Button id="gtm-hero-quote" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 h-16 text-sm font-extrabold uppercase tracking-widest shadow-2xl shadow-emerald-600/30 rounded-full transition-all duration-300 border border-emerald-700/25">
                                Get a Free Quote
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button id="gtm-hero-services" variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-16 text-sm px-12 rounded-full font-bold uppercase tracking-widest transition-all duration-300 bg-white">
                                View All Services
                            </Button>
                        </Link>
                    </motion.div>


                    <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-12">
                        <div className="flex items-center gap-1.5">
                            <span>✓</span> <span>Embassy Approved</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span>✓</span> <span>Same Day Delivery</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span>✓</span> <span>100% Accuracy Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
