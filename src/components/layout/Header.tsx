"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, MessageCircle, X, FileCheck, ScanEye } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Scholarships", href: "/consultancy/saudi-scholarship" },
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                {/* Logo - Left */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center gap-[10px]">
                        <img 
                            src="/logo-icon.svg" 
                            alt="Lisan.pk Logo Icon" 
                            className="h-7 w-7 object-contain"
                        />
                        <span className="font-bold text-2xl text-emerald-800 tracking-tight">
                            Lisan<span className="text-brand-gold">.pk</span>
                        </span>
                    </Link>
                </div>

                {/* Navigation - Center (Desktop) */}
                <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="relative group transition-colors hover:text-emerald-600"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Icons & CTA - Right */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="hidden sm:flex items-center space-x-2">
                        <a
                            href="tel:03044296295"
                            id="gtm-call-header"
                            className="p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors"
                            aria-label="Call Us"
                        >
                            <Phone className="h-5 w-5" />
                        </a>

                        <a
                            href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20translation%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            id="gtm-wa-header"
                            className="p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </a>
                    </div>

                    <Link href="/contact" className="hidden md:block">
                        <Button 
                            id="gtm-quote-header-desktop"
                            className="bg-brand-gold hover:bg-brand-gold-dark text-slate-950 font-extrabold px-8 h-11 shadow-[0_4px_20px_-5px_rgba(197,160,89,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] rounded-xl border border-brand-gold-dark/30"
                        >
                            Get a Free Quote
                        </Button>
                    </Link>

                    <Link href="/contact" className="md:hidden">
                        <Button 
                            id="gtm-quote-header-mobile"
                            size="sm" 
                            className="bg-brand-gold hover:bg-brand-gold-dark text-slate-950 font-bold h-10 px-4 rounded-lg shadow-md border border-brand-gold-dark/30"
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
                            {isMenuOpen ? <X className="h-6 w-6 text-slate-600" /> : <Menu className="h-6 w-6 text-slate-600" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden border-t border-slate-200 bg-white">
                    <nav className="flex flex-col p-4 space-y-4 text-sm font-medium text-slate-600">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="transition-colors hover:text-emerald-600 px-2 py-1.5 rounded-md hover:bg-slate-50 border-b border-slate-50 font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="pt-4" onClick={() => setIsMenuOpen(false)}>
                            <Button 
                                id="gtm-quote-menu-mobile"
                                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-slate-950 font-extrabold h-14 rounded-2xl shadow-xl transition-all active:scale-95 border border-brand-gold-dark"
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
