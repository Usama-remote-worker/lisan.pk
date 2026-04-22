import { Stamp, School, Gavel, FileCheck, HeartHandshake, FileCog, User, ShieldCheck, BookX, FileText, Stethoscope, Car, Home, Coins, FileBadge, Plane, Briefcase, Baby } from "lucide-react"
import Link from "next/link"

const services = [
    {
        icon: User,
        title: "Birth Certificate",
        slug: "birth-certificate-translation",
        text: "Official certified translation for NADRA records, visa applications, and immigration purposes."
    },
    {
        icon: HeartHandshake,
        title: "Marriage Certificate (Nikah Nama)",
        slug: "nikah-nama-marriage-certificate",
        text: "Accurate translation of marriage contracts for spouse visas and international legal recognition."
    },
    {
        icon: School,
        title: "Degrees & Transcripts",
        slug: "academic-degree-transcript",
        text: "Academic translation for foreign university admissions and equivalence certificates."
    },
    {
        icon: ShieldCheck,
        title: "Police Character Certificate",
        slug: "translation",
        text: "Translation of police clearance certificates for immigration, jobs, and travel visa requirements."
    },
    {
        icon: BookX,
        title: "Divorce Certificate",
        slug: "translation",
        text: "Legal translation of divorce deeds and effectiveness certificates for official record updates."
    },
    {
        icon: FileText,
        title: "Death Certificate",
        slug: "translation",
        text: "Certified translation for succession certificates, insurance claims, and legal matters."
    },
    {
        icon: Stethoscope,
        title: "Medical Reports",
        slug: "translation",
        text: "Precise medical translation for overseas treatment, insurance, and fitness certificates."
    },
    {
        icon: Car,
        title: "Driving License",
        slug: "translation",
        text: "Translation of driving licenses for international driving permits and car rentals abroad."
    },
    {
        icon: Home,
        title: "Property Documents",
        slug: "translation",
        text: "Translation of Fard, registry, sale deeds, and property documents for legal use."
    },
    {
        icon: Gavel,
        title: "Legal Document Translation",
        slug: "translation",
        text: "Court cases, judgments, power of attorney, affidavits, and legal agreements translated by experts."
    },
    {
        icon: Coins,
        title: "Bank Statements",
        slug: "translation",
        text: "Financial document translation including bank statements and salary slips for visa proofs."
    },
    {
        icon: FileBadge,
        title: "CNIC / ID Card",
        slug: "translation",
        text: "National ID card translation for official identification in foreign countries."
    },
    {
        icon: Plane,
        title: "Passport Translation",
        slug: "translation",
        text: "Translation of passport bio pages and visa stickers for various official applications."
    },
    {
        icon: Briefcase,
        title: "Business Documents",
        slug: "translation",
        text: "Articles of association, company profiles, and tax returns for international business."
    },
    {
        icon: Baby,
        title: "Form-B (B-Form)",
        slug: "translation",
        text: "Translation of Family Registration Certificate (FRC) and Form-B for family visas."
    },
    {
        icon: Plane,
        title: "Hajj & Umrah Services",
        slug: "translation",
        text: "Visa application translation, medical fitness certificates, and relationship proof for pilgrims."
    }
]

export function DocumentTranslationGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Comprehensive Translation Services</h2>
                    <p className="max-w-3xl mx-auto text-slate-600 text-lg">
                        We provide certified Arabic translations for a complete range of personal, educational, and legal documents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-7xl mx-auto">
                    {services.map((service) => (
                        <Link 
                            href={service.slug === "translation" ? "/services/translation" : `/services/translation/${service.slug}`} 
                            key={service.title} 
                            className="group block h-full"
                        >
                            <div className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white h-full group-hover:border-emerald-100/50">
                                <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 text-[15px] leading-relaxed">{service.text}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
