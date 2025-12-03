import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="mr-8 flex items-center space-x-2">
                        <span className="font-bold text-2xl text-emerald-800 tracking-tight">
                            Lisan.pk
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
                        <Link href="/services/translation" className="transition-colors hover:text-emerald-600">Translation</Link>
                        <Link href="/services/attestation" className="transition-colors hover:text-emerald-600">Attestation</Link>
                        <Link href="/consultancy/saudi-scholarship" className="transition-colors hover:text-emerald-600">Scholarships</Link>
                        <Link href="/blog" className="transition-colors hover:text-emerald-600">Blog</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="tel:+923001234567" className="hidden md:flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                        <Phone className="mr-2 h-4 w-4" />
                        +92 300 123 4567
                    </a>
                    <Button className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">Get a Quote</Button>
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
