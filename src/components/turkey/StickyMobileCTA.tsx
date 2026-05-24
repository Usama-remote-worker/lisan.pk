"use client"

import React, { useState, useEffect } from "react"

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show only after scrolling 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleWhatsAppRedirect = () => {
        const message = "Hi Lisan.pk! I am visiting the Study in Turkey page on my mobile and would like to speak to an admissions specialist."
        const whatsappUrl = `https://wa.me/923044296295?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    const scrollToForm = () => {
        const element = document.getElementById("turkey-lead-form")
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 p-3 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] animate-slide-up font-sans">
            <div className="flex gap-2">
                {/* Call Helpline */}
                <a 
                    href="tel:+923044296295"
                    className="flex-1 h-12 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-extrabold text-xs rounded-xl flex items-center justify-center active:scale-95 transition-all"
                >
                    Call
                </a>

                {/* WhatsApp Chat */}
                <button 
                    onClick={handleWhatsAppRedirect}
                    className="flex-1.5 h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl flex items-center justify-center active:scale-95 transition-all"
                >
                    WhatsApp
                </button>

                {/* Apply Inline */}
                <button 
                    onClick={scrollToForm}
                    className="flex-1.2 h-12 bg-emerald-800 hover:bg-emerald-950 text-white font-extrabold text-xs rounded-xl flex items-center justify-center active:scale-95 transition-all"
                >
                    Apply Form
                </button>
            </div>
        </div>
    )
}
