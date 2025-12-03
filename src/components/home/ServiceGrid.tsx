import { FileText, GraduationCap, HeartPulse, Scale, BookOpen, User, Plane, FileCheck } from "lucide-react"
import Link from "next/link"

const documents = [
    { name: "Nikahnama", icon: HeartPulse, href: "/services/document/nikahnama" },
    { name: "Birth/Death Certificate", icon: FileText, href: "/services/document/birth-death-certificate" },
    { name: "Character Certificate", icon: User, href: "/services/document/character-certificate" },
    { name: "Legal Documents", icon: Scale, href: "/services/document/legal-documents" },
    { name: "Medical Certificate", icon: HeartPulse, href: "/services/document/medical-certificate" },
    { name: "Degrees & Transcripts", icon: GraduationCap, href: "/services/document/degrees" },
    { name: "Passports", icon: Plane, href: "/services/document/passports" },
    { name: "Divorce Certificate", icon: FileCheck, href: "/services/document/divorce-certificate" },
]

export function ServiceGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Document Translation Services</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Certified translations for all types of official documents, accepted by embassies and government bodies.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {documents.map((doc) => (
                        <Link key={doc.name} href={doc.href} className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-emerald-500 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <doc.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">{doc.name}</h3>
                            <p className="mt-2 text-sm text-slate-500">Professional Arabic translation.</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
