"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItem {
    q: string
    a: string
}

const faqs: FaqItem[] = [
    { 
        q: "Can Pakistani students study in Turkey without IELTS?", 
        a: "Yes, absolutely! The majority of private Turkish universities accept an official English Medium of Instruction Certificate issued by your high school or intermediate college in Pakistan, completely waving the IELTS requirement." 
    },
    { 
        q: "What is the minimum percentage required for Turkey admission?", 
        a: "Pakistani students need a minimum of 50% marks in their Intermediate (FSc, ICS, I.Com, A-levels) or equivalent high school transcript sheets to qualify for direct entry into our partner universities." 
    },
    { 
        q: "What are the tuition fees and average cost for Turkey universities?", 
        a: "Annual tuition for English-medium Bachelor's programs ranges from $1,800 to $4,500. Specialized medical or dentistry programs cost higher (typically $10,000 to $15,000/year). Living costs are exceptionally affordable, averaging $250 to $350 per month." 
    },
    { 
        q: "How does Lisan.pk secure exclusive Turkish scholarships?", 
        a: "Through our physical registry inside Yozgat Bozok Technopark, we maintain direct contracts with university dashboards. This allows us to secure flat 50% to 75% scholarship fee reductions directly printed on your initial conditional acceptance letter (CAL)." 
    },
    { 
        q: "Is there on-ground support for Pakistani students in Turkey?", 
        a: "Yes. Our Turkish operations team welcomes you at Istanbul or Ankara airports, coordinates dormitory allocations, completes local certified translations, and secures your residence permit (İkamet) registrations seamlessly." 
    },
    { 
        q: "How long does the admission and visa processing take?", 
        a: "Our conditional admission offers are secured in 3-5 working days. The visa issuance window at the Turkish embassy in Pakistan generally takes between 3 to 6 weeks." 
    }
]

export function TurkeyFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl font-sans">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 text-emerald-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/10">
                        Frequently Asked Questions
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Get clear, honest, and expert answers about admissions, documents, visa pathways, and direct scholarships for Pakistani students.
                    </p>
                </div>

                {/* Collapsible Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx
                        return (
                            <div 
                                key={idx}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                                >
                                    <h4 className="text-sm md:text-base font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {faq.q}
                                    </h4>
                                    <span className={`text-[10px] text-slate-400 group-hover:text-slate-600 transition-transform duration-200 shrink-0 ml-4 select-none ${isOpen ? "transform rotate-180" : ""}`}>
                                        ▼
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="px-6 pb-6 pt-1 border-t border-slate-100 text-slate-600 text-xs md:text-sm leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
