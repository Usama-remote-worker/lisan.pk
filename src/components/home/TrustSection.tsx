"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useSpring, useMotionValue } from "framer-motion"

// Trusted Logos Data
const logos = [
    "UAE Embassy", "Saudi Embassy", "HEC Pakistan", "MOFA", "IBCC",
    "Qatar Embassy", "Kuwait Embassy", "DHA", "Nadra"
]

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 })
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix
            }
        })
    }, [springValue, suffix])

    return <span ref={ref} className="text-4xl md:text-5xl font-bold text-emerald-600 block mb-2" />
}

export function TrustSection() {
    return (
        <section className="border-y border-slate-200 bg-white overflow-hidden">
            {/* Stats Area */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                    <div>
                        <Counter value={40} suffix="+" />
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Years Experience</p>
                    </div>
                    <div>
                        <Counter value={100} suffix="k+" />
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Happy Clients</p>
                    </div>
                    <div>
                        <Counter value={99} suffix="%" />
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Approval Rate</p>
                    </div>
                    <div>
                        <Counter value={30} suffix="+" />
                        <p className="text-slate-500 font-medium text-sm uppercase tracking-wide">Expert Translators</p>
                    </div>
                </div>
            </div>

            {/* Marquee Area */}
            <div className="py-10 bg-slate-50 border-t border-slate-200">
                <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
                    Recognized & Trusted By
                </p>

                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-infinite-scroll whitespace-nowrap">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="mx-8 flex items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold text-slate-300 hover:text-emerald-500 transition-colors cursor-default select-none">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-infinite-scroll whitespace-nowrap" aria-hidden="true">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="mx-8 flex items-center justify-center">
                                <span className="text-xl md:text-2xl font-bold text-slate-300 hover:text-emerald-500 transition-colors cursor-default select-none">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Fade Gradients for ends */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 40s linear infinite;
                }
            `}</style>
        </section>
    )
}
