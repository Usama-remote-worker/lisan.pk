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

export function TrustSection() {
    return (
        <section className="border-y border-slate-200 bg-white overflow-hidden font-sans">
            {/* Marquee Area */}
            <div className="py-12 bg-slate-50 relative">
                <p className="text-center text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-10">
                    Recognized & Trusted Standards
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
