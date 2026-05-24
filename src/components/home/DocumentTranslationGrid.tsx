import Link from "next/link"

const services = [
    {
        title: "Birth Certificate",
        slug: "birth-certificate-translation",
        text: "Official certified translation for NADRA records, visa applications, and immigration purposes.",
        hasPage: true
    },
    {
        title: "Marriage Certificate (Nikah Nama)",
        slug: "nikah-nama-marriage-certificate",
        text: "Accurate translation of marriage contracts for spouse visas and international legal recognition.",
        hasPage: true
    },
    {
        title: "Degrees & Transcripts",
        slug: "academic-degree-transcript",
        text: "Academic translation for foreign university admissions and equivalence certificates.",
        hasPage: true
    },
    {
        title: "Police Character Certificate",
        slug: "police-character-certificate",
        text: "Translation of police clearance certificates for immigration, jobs, and travel visa requirements.",
        hasPage: true
    },
    {
        title: "Divorce Certificate",
        slug: "divorce-certificate-translation",
        text: "Legal translation of divorce deeds and effectiveness certificates for official record updates.",
        hasPage: false
    },
    {
        title: "Medical Reports",
        slug: "medical-report-translation",
        text: "Precise medical translation for overseas treatment, insurance, and fitness certificates.",
        hasPage: false
    },
    {
        title: "Property Documents",
        slug: "property-document-translation",
        text: "Translation of Fard, registry, sale deeds, and property documents for legal use.",
        hasPage: false
    },
    {
        title: "Legal Document Translation",
        slug: "legal-document-translation",
        text: "Court cases, judgments, power of attorney, affidavits, and legal agreements translated by experts.",
        hasPage: false
    },
    {
        title: "Bank Statements",
        slug: "bank-statement-translation",
        text: "Financial document translation including bank statements and salary slips for visa proofs.",
        hasPage: false
    },
    {
        title: "CNIC / ID Card",
        slug: "cnic-id-card-translation",
        text: "National ID card translation for official identification in foreign countries.",
        hasPage: false
    },
    {
        title: "Business Documents",
        slug: "business-document-translation",
        text: "Articles of association, company profiles, and tax returns for international business.",
        hasPage: false
    },
    {
        title: "Experience Certificate",
        slug: "experience-certificate-translation",
        text: "Certified translation of professional experience letters and employment certificates for work visa processing.",
        hasPage: false
    },
    {
        title: "Saudi Scholarship",
        slug: "saudi-scholarship-translation",
        text: "Specialized translation for KSU, KAU, and Madinah University admissions and scholarships.",
        hasPage: false
    },
    {
        title: "IATA & DTS Umrah Agency",
        slug: "iata-dts-umrah-travel-agency",
        text: "Certified Arabic translation of IATA certificates, DTS documents, and tourism licenses for Umrah operators and travel agencies.",
        hasPage: true
    },
    {
        title: "Urdu to English Translation",
        slug: "urdu-to-english-translation",
        text: "Certified Urdu to English document translation accepted globally by embassies, UKVI, USCIS, and foreign universities.",
        hasPage: true
    }
]

export function DocumentTranslationGrid() {
    return (
        <section className="py-20 bg-white font-sans text-slate-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Comprehensive Translation Services</h2>
                    <p className="text-slate-600 text-lg leading-relaxed font-sans">
                        We provide certified Arabic translations for a complete range of personal, educational, and legal documents, recognized by all major authorities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
                    {services.map((service, index) => (
                        <Link 
                            href={service.hasPage 
                                ? `/services/translation/${service.slug}` 
                                : `https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20${encodeURIComponent(service.title)}%20translation%20services.`} 
                            key={service.title} 
                            className="group block h-full"
                            {...(!service.hasPage ? { target: "_blank" } : {})}
                        >
                            <div className="flex flex-col p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-white h-full hover:border-emerald-200">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-700 uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 select-none">
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
