"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/translation" },
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
                <div className="flex items-center space-x-2">
                    <a
                        href="tel:03034041132"
                        className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
                        aria-label="Call Us"
                    >
                        <Phone className="h-5 w-5" />
                    </a>

                    <a
                        href="https://wa.me/923034041132"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                        aria-label="WhatsApp"
                    >
                        <MessageCircle className="h-5 w-5" />
                    </a>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="lg:hidden ml-1 px-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
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
