"use client"

import { useState } from "react"
import { MessageCircle, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { faqs as defaultFaqs, type Faq } from "@/data/faqs"

export function FaqSection({ faqs = defaultFaqs }: { faqs?: Faq[] }) {
    // Take first 10 FAQs for the cloud display to keep it clean like the reference image
    const displayFaqs = faqs.slice(0, 10)
    const [selectedId, setSelectedId] = useState<string>(displayFaqs[0].id)

    const activeFaq = faqs.find(f => f.id === selectedId) || displayFaqs[0]

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
                {/* Support Label */}
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="h-[1px] w-8 bg-slate-200"></div>
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.3em]">Support</span>
                    <div className="h-[1px] w-8 bg-slate-200"></div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 font-serif mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Find answers to common questions about our certified translation standards, 
                        legal attestation processes, and nationwide delivery.
                    </p>
                </div>

                {/* Question Cloud Interaction */}
                <div className="flex flex-wrap justify-center gap-3 mb-20 max-w-5xl mx-auto">
                    {displayFaqs.map((faq) => (
                        <button
                            key={faq.id}
                            onClick={() => setSelectedId(faq.id)}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border shadow-sm",
                                selectedId === faq.id
                                    ? "bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-900/20 scale-105"
                                    : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50/50"
                            )}
                        >
                            {faq.question}
                        </button>
                    ))}
                </div>

                {/* Active Answer Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedId}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-white rounded-[3.5rem] p-10 md:p-20 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start"
                    >
                        <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                            <MessageCircle className="w-10 h-10 text-slate-900" />
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight font-serif">
                                {activeFaq.question}
                            </h3>
                            <div className="h-1 w-16 bg-emerald-500 rounded-full mb-10"></div>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                                {activeFaq.answer}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Decorative Subtle Blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-50/80 rounded-full blur-3xl -z-0"></div>
        </section>
    )
}

