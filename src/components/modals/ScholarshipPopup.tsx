"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ScholarshipPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem("hasSeenScholarshipPopup")
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                sessionStorage.setItem("hasSeenScholarshipPopup", "true")
            }, 8000) // Show after 8 seconds
            return () => clearTimeout(timer)
        }
    }, [])

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-emerald-100"
                    >
                        {/* Decorative Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animate-delay-1000"></div>

                        <div className="p-6 md:p-8 relative z-10">
                            <button 
                                id="gtm-popup-close"
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-slate-400" />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <motion.div 
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5 }}
                                    className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/30 mb-6"
                                >
                                    <Sparkles className="w-6 h-6" />
                                </motion.div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-2 font-serif leading-tight">
                                    Saudi Scholarship Success
                                </h2>
                                <p className="text-slate-500 mb-6 leading-relaxed text-sm">
                                    Don't let document errors stop your dreams. Join 10k+ students who used Lisan.pk.
                                </p>

                                <div className="w-full space-y-3 mb-8">
                                    {[
                                        "Embassy Recognized Stamps",
                                        "Portal-Ready PDF Scans",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col w-full gap-3">
                                    <Link href="/consultancy/saudi-scholarship" onClick={() => setIsOpen(false)}>
                                        <Button 
                                            id="gtm-popup-guide"
                                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-md shadow-xl shadow-emerald-600/20"
                                        >
                                            GET SCHOLARSHIP GUIDE
                                        </Button>
                                    </Link>
                                    <Link href="https://wa.me/923044296295" onClick={() => setIsOpen(false)}>
                                        <Button 
                                            id="gtm-popup-wa"
                                            variant="ghost" 
                                            className="w-full h-10 text-emerald-700 font-bold hover:bg-emerald-50 rounded-xl text-sm"
                                        >
                                            Chat with Expert
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
