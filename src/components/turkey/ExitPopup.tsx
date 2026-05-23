"use client"

import React, { useState, useEffect } from "react"
import { X, Gift, ArrowRight, MessageSquare } from "lucide-react"

export function ExitPopup() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        // Only trigger once per session
        const hasTriggered = sessionStorage.getItem("turkey_exit_triggered")
        if (hasTriggered) return

        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger when cursor leaves the top window boundary (usually to close tab/navigate)
            if (e.clientY < 20) {
                setIsOpen(true)
                sessionStorage.setItem("turkey_exit_triggered", "true")
            }
        }

        document.addEventListener("mouseleave", handleMouseLeave)
        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleWhatsAppRedirect = () => {
        const message = "Hi Lisan.pk! I am leaving the Study in Turkey page, but I want to secure my Free Admission & Scholarship Assessment. Can we discuss my eligibility on WhatsApp?"
        const whatsappUrl = `https://wa.me/923044296295?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
        setIsOpen(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in font-sans">
            <div className="relative bg-white border border-slate-100 rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden text-center">
                {/* Decorative border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-emerald-600"></div>

                {/* Close Button */}
                <button 
                    onClick={handleClose} 
                    className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-all"
                    aria-label="Close dialog"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Icon block */}
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 scale-110 shadow-inner">
                    <Gift className="w-8 h-8 animate-bounce" />
                </div>

                {/* Text Context */}
                <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2 font-serif">
                    🎓 Wait! Secure Your Free Admission Assessment
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Don't leave empty-handed! Get a direct assessment from our Yozgat Bozok Technopark desk. Check your eligibility for a **50% scholarship** in under 5 minutes.
                </p>

                {/* Action CTA Buttons */}
                <div className="space-y-3">
                    <button 
                        onClick={handleWhatsAppRedirect}
                        className="w-full h-13 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="w-4 h-4" /> Start Free Assessment via WhatsApp
                    </button>
                    
                    <button 
                        onClick={() => {
                            setIsOpen(false)
                            // Scroll to form if exists
                            const formElement = document.getElementById("turkey-lead-form")
                            if (formElement) {
                                formElement.scrollIntoView({ behavior: "smooth" })
                            }
                        }}
                        className="w-full h-11 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                        No, I'll fill the form on-page <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>

                {/* Mini trust label */}
                <p className="text-[10px] text-slate-400 font-medium mt-4">
                    ⚡ Physical Office inside Bozok Technopark, Turkey
                </p>
            </div>
        </div>
    )
}
