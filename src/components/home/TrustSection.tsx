"use client"

import { useRef, useEffect } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"

// Trusted Logos Data
const logos = [
    { name: "UAE Embassy", color: "text-slate-900" },
    { name: "Saudi Embassy", color: "text-emerald-700" },
    { name: "HEC Pakistan", color: "text-emerald-800" },
    { name: "MOFA", color: "text-blue-900" },
    { name: "IBCC", color: "text-slate-800" },
    { name: "Qatar Embassy", color: "text-rose-900" },
    { name: "Kuwait Embassy", color: "text-blue-800" },
    { name: "DHA", color: "text-slate-900" },
    { name: "Nadra", color: "text-emerald-900" }
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
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix
            }
        })
    }, [springValue, suffix])

    return <span ref={ref} className="text-4xl md:text-5xl font-bold text-emerald-600 block mb-2 font-serif" />
}

export function TrustSection() {
    return (
        <section className="border-y border-slate-200 bg-white overflow-hidden font-sans">
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
            <div className="py-12 bg-slate-50 border-t border-slate-200 relative">
                <p className="text-center text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
                    Recognized & Trusted By
                </p>

                <div className="relative flex items-center group">
                    {/* Navigation Buttons */}
                    <button className="absolute left-4 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center font-bold text-xs">
                        ◀
                    </button>
                    <button className="absolute right-4 z-30 bg-white p-3 rounded-full shadow-xl border border-slate-100 text-slate-400 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center font-bold text-xs">
                        ▶
                    </button>

                    <div className="flex overflow-hidden w-full">
                        <div className="flex animate-infinite-scroll whitespace-nowrap py-4">
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div key={index} className="mx-12 flex items-center justify-center">
                                    <span className={`text-xl md:text-2xl font-black ${logo.color} hover:text-emerald-500 transition-all cursor-default select-none hover:scale-105 inline-block`}>
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fade Gradients for ends */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20"></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-33.33%); }
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 60s linear infinite;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}
