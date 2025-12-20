"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLangOpen, setIsLangOpen] = useState(false)

    const languages = [
        { name: "English", code: "en", flag: "🇬🇧" },
        { name: "Arabic", code: "ar", flag: "🇸🇦" },
        { name: "Urdu", code: "ur", flag: "🇵🇰" },
        { name: "Turkish", code: "tr", flag: "🇹🇷" },
        { name: "German", code: "de", flag: "🇩🇪" },
    ]

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
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl text-emerald-800 tracking-tight">
                            Lisan.pk
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

                {/* Icons - Right */}
                <div className="flex items-center space-x-3">
                    <a
                        href="tel:03034041132"
                        className="p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors"
                        aria-label="Call Us"
                    >
                        <Phone className="h-5 w-5" />
                    </a>

                    <a
                        href="https://wa.me/923034041132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-colors"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle className="h-5 w-5" />
                    </a>

                    {/* Language Selector (Visual Only) */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-emerald-700 ml-2"
                            aria-label="Select Language"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>

                        {/* Dropdown */}
                        {isLangOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                                <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                    Select Language
                                </div>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 flex items-center space-x-3 transition-colors"
                                        onClick={() => setIsLangOpen(false)}
                                    >
                                        <span className="text-lg">{lang.flag}</span>
                                        <span className="font-medium">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="lg:hidden ml-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="px-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <span className="sr-only">Menu</span>}
                            <Menu className="h-6 w-6" />
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
                                className="transition-colors hover:text-emerald-600 px-2 py-1.5 rounded-md hover:bg-slate-50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
