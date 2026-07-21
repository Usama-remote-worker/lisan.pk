"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { 
            label: "Translation Services", 
            children: [
                { label: "Arabic Translation", href: "/services/translation/arabic-translation" },
                { label: "English Translation", href: "/services/translation/english-translation" },
                { label: "Turkish Translation", href: "/services/translation/turkish-translation" },
                { label: "Degree Translation", href: "/services/translation/degree-translation" },
                { label: "Legal Translation", href: "/services/translation/legal-translation" },
                { label: "Certified Translation", href: "/services/translation/certified-translation" }
            ]
        },
        { 
            label: "Study Abroad", 
            children: [
                { label: "Study in Turkey", href: "/study-in-turkey" },
                { label: "Study in Saudi Arabia", href: "/consultancy/saudi-scholarship" }
            ]
        },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" }
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 font-sans">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                {/* Logo - Left */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-[10px]">
                        <img 
                            src="/logo-icon.svg" 
                            alt="Lisan.pk Logo Icon" 
                            className="h-7 w-7 object-contain"
                        />
                        <span className="font-bold text-2xl text-emerald-800 tracking-tight font-serif">
                            Lisan<span className="text-emerald-600">.pk</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation - Center (Desktop) */}
                <nav className="hidden lg:flex items-center space-x-5 text-sm font-medium text-slate-600 font-sans">
                    {navItems.map((item) => {
                        if (item.children) {
                            return (
                                <div key={item.label} className="relative group py-2">
                                    <button className="flex items-center gap-1 transition-colors hover:text-emerald-600 focus:outline-none font-bold">
                                        {item.label}
                                    </button>
                                    
                                    {/* Dropdown Menu */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-56 rounded-xl bg-white border border-slate-200 shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50 p-1.5 font-sans">
                                        {item.children.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                className="block px-4 py-2.5 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-colors font-bold text-xs text-left w-full"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href!}
                                className="relative group transition-colors hover:text-emerald-600 py-2 font-bold"
                            >
                                {item.label}
                                <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        )
                    })}
                </nav>

                {/* Icons & CTA - Right */}
                <div className="flex items-center space-x-2 md:space-x-4 font-sans">
                    <div className="hidden sm:flex items-center space-x-2">
                        <a
                            href="tel:03044296295"
                            id="gtm-call-header"
                            className="px-3.5 py-2 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors font-extrabold"
                            aria-label="Call Us"
                        >
                            Call
                        </a>

                        <a
                            href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20translation%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            id="gtm-wa-header"
                            className="px-3.5 py-2 text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors font-extrabold"
                            aria-label="WhatsApp"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <Link href="/contact" className="hidden md:block">
                        <Button 
                            id="gtm-quote-header-desktop"
                            data-lead="quote"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold px-8 h-11 shadow-[0_4px_20px_-5px_rgba(4,120,87,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-emerald-800/30"
                        >
                            Get a Free Quote
                        </Button>
                    </Link>

                    <Link href="/contact" className="md:hidden">
                        <Button 
                            id="gtm-quote-header-mobile"
                            data-lead="quote"
                            size="sm" 
                            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold h-10 px-4 rounded-lg shadow-md border border-emerald-800/30"
                        >
                            Quote
                        </Button>
                    </Link>

                    <div className="lg:hidden ml-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="px-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <span className="font-extrabold text-xs text-slate-700">✕ Close</span> : <span className="font-extrabold text-xs text-slate-700">☰ Menu</span>}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white font-sans">
                    <nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-slate-600">
                        {navItems.map((item) => {
                            if (item.children) {
                                return (
                                    <div key={item.label} className="flex flex-col space-y-1.5 px-2 py-1">
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                        <div className="flex flex-col pl-3 border-l border-slate-200 space-y-2 mt-1">
                                            {item.children.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="transition-colors hover:text-emerald-600 py-1 text-sm font-bold text-slate-700"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href!}
                                    className="transition-colors hover:text-emerald-600 px-2 py-1.5 rounded-md hover:bg-slate-50 border-b border-slate-50 font-bold text-slate-700"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                        <Link href="/contact" className="pt-4 animate-in fade-in" onClick={() => setIsMenuOpen(false)}>
                            <Button 
                                id="gtm-quote-menu-mobile"
                                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold h-14 rounded-2xl shadow-xl transition-all active:scale-95 border border-emerald-850"
                            >
                                Get a Free Quote & Upload
                            </Button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
