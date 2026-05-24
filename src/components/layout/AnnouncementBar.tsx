"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)

    const announcements = [
        {
            iconText: "★",
            text: "2026 Saudi Scholarship Application Cycle is LIVE",
            linkText: "Get Checklist",
            href: "/consultancy/saudi-scholarship"
        },
        {
            iconText: "%",
            text: "Student Policy: Flat Discounts on Certified Arabic Translation",
            linkText: "Avail Discount",
            href: "https://wa.me/923044296295"
        },
        {
            iconText: "⏱",
            text: "Important: Saudi Scholarship Deadlines Approaching",
            linkText: "View Schedule",
            href: "/consultancy/saudi-scholarship"
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % announcements.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="relative z-[60] bg-emerald-950 text-white overflow-hidden group hidden md:block font-sans">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-emerald-600/20 animate-pulse pointer-events-none"></div>
            
            <div className="container mx-auto px-4">
                <div className="h-12 flex items-center justify-center relative">
                    {announcements.map((announcement, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-700 ease-in-out px-10
                                ${index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
                            `}
                        >
                            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-medium tracking-wide">
                                <span className="px-2 py-0.5 bg-emerald-500/25 rounded-md text-emerald-400 font-bold group-hover:scale-110 transition-transform select-none">
                                    {announcement.iconText}
                                </span>
                                <span className="truncate max-w-[200px] sm:max-w-none">
                                    {announcement.text}
                                </span>
                                <Link 
                                    href={announcement.href}
                                    className="hidden sm:flex items-center gap-1 font-bold text-emerald-400 hover:text-white transition-colors border-b border-emerald-400/30 hover:border-white ml-2"
                                >
                                    {announcement.linkText} →
                                </Link>
                            </div>
                        </div>
                    ))}

                    <button 
                        onClick={() => setIsVisible(false)}
                        className="absolute right-0 p-2 hover:bg-white/10 rounded-full transition-colors group/btn font-bold text-xs"
                        aria-label="Close Announcement"
                    >
                        <span className="text-emerald-500 group-hover/btn:text-white">✕</span>
                    </button>
                </div>
            </div>

            {/* Progress Bar Animation */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-emerald-500/50 w-full">
                <div 
                    className="h-full bg-emerald-400 transition-all duration-[5000ms] ease-linear"
                    style={{ width: `${((currentIndex + 1) / announcements.length) * 100}%` }}
                ></div>
            </div>
        </div>
    )
}
