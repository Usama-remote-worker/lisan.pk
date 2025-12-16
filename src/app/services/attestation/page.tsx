import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AttestationPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-emerald-800 mb-8">Document Attestation Services</h1>
                <p className="text-lg text-slate-600 mb-8">
                    We assist with document attestation from various authorities, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8">
                    <li>Saudi Embassy</li>
                    <li>UAE Embassy</li>
                    <li>Ministry of Foreign Affairs (MOFA)</li>
                    <li>Higher Education Commission (HEC)</li>
                    <li>IBCC</li>
                </ul>
                <Link href="https://wa.me/923034041132" target="_blank">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Get a Quote via WhatsApp</Button>
                </Link>
            </div>
            <Footer />
        </main>
    )
}
