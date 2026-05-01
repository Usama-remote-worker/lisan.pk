"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqs as defaultFaqs, type Faq } from "@/data/faqs"

export function FaqSection({ faqs = defaultFaqs }: { faqs?: Faq[] }) {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100">

            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-serif mb-6">
                        Information & Support
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Common inquiries regarding our translation standards, delivery timelines, and official recognition.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl"
                        >
                            <button
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                className="w-full flex items-center justify-between p-8 text-left group"
                            >
                                <span className="font-bold text-xl text-slate-900 pr-8 group-hover:text-emerald-800 transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown className={cn(
                                    "w-6 h-6 text-slate-300 transition-all duration-500",
                                    openId === faq.id && "rotate-180 text-emerald-600"
                                )} />
                            </button>
                            <div
                                className={cn(
                                    "grid transition-all duration-500 ease-in-out",
                                    openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-8 pt-0 text-slate-600 leading-relaxed text-lg border-t border-slate-50 mt-4">
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

