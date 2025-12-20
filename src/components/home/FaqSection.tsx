"use client"

import { useState } from "react"
import { ChevronDown, Plus, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs as defaultFaqs, type Faq } from "@/data/faqs"

export function FaqSection({ faqs = defaultFaqs }: { faqs?: Faq[] }) {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <section className="py-24 bg-slate-50">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about our translation and attestation services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-lg text-slate-900">
                                    {faq.question}
                                </span>
                                <span className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 text-slate-500 transition-colors",
                                    openId === faq.id && "bg-emerald-600 border-emerald-600 text-white"
                                )}>
                                    {openId === faq.id ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </span>
                            </button>
                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
