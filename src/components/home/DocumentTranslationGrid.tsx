import Link from "next/link"

const services = [
    {
        title: "Birth Certificate",
        slug: "birth-certificate-translation",
        text: "Official certified translation for NADRA records, visa applications, and immigration purposes."
    },
    {
        title: "Marriage Certificate (Nikah Nama)",
        slug: "nikah-nama-marriage-certificate",
        text: "Accurate translation of marriage contracts for spouse visas and international legal recognition."
    },
    {
        title: "Degrees & Transcripts",
        slug: "academic-degree-transcript",
        text: "Academic translation for foreign university admissions and equivalence certificates."
    },
    {
        title: "Police Character Certificate",
        slug: "police-character-certificate",
        text: "Translation of police clearance certificates for immigration, jobs, and travel visa requirements."
    },
    {
        title: "Divorce Certificate",
        slug: "translation",
        text: "Legal translation of divorce deeds and effectiveness certificates for official record updates."
    },
    {
        title: "Death Certificate",
        slug: "translation",
        text: "Certified translation for succession certificates, insurance claims, and legal matters."
    },
    {
        title: "Medical Reports",
        slug: "translation",
        text: "Precise medical translation for overseas treatment, insurance, and fitness certificates."
    },
    {
        title: "Driving License",
        slug: "translation",
        text: "Translation of driving licenses for international driving permits and car rentals abroad."
    },
    {
        title: "Property Documents",
        slug: "translation",
        text: "Translation of Fard, registry, sale deeds, and property documents for legal use."
    },
    {
        title: "Legal Document Translation",
        slug: "translation",
        text: "Court cases, judgments, power of attorney, affidavits, and legal agreements translated by experts."
    },
    {
        title: "Bank Statements",
        slug: "translation",
        text: "Financial document translation including bank statements and salary slips for visa proofs."
    },
    {
        title: "CNIC / ID Card",
        slug: "translation",
        text: "National ID card translation for official identification in foreign countries."
    },
    {
        title: "Passport Translation",
        slug: "translation",
        text: "Translation of passport bio pages and visa stickers for various official applications."
    },
    {
        title: "Business Documents",
        slug: "translation",
        text: "Articles of association, company profiles, and tax returns for international business."
    },
    {
        title: "Form-B (B-Form)",
        slug: "translation",
        text: "Translation of Family Registration Certificate (FRC) and Form-B for family visas."
    },
    {
        title: "Hajj & Umrah Services",
        slug: "translation",
        text: "Visa application translation, medical fitness certificates, and relationship proof for pilgrims."
    }
]

export function DocumentTranslationGrid() {
    return (
        <section className="py-20 bg-white">

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Comprehensive Translation Services</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We provide certified Arabic translations for a complete range of personal, educational, and legal documents, recognized by all major authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link 
                            href={service.slug === "translation" ? "/services/translation" : `/services/translation/${service.slug}`} 
                            key={service.title} 
                            className="group block h-full"
                        >
                            <div className="flex flex-col p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white h-full hover:border-emerald-200">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-600 uppercase bg-emerald-50 px-3 py-1 rounded-full">
                                        Service {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors font-serif">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-[15px] leading-relaxed">
                                    {service.text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

