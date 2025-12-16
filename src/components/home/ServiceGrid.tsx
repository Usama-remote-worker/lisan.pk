import { FileText, Globe, Languages, CheckCircle2 } from "lucide-react"

const serviceCategories = [
    {
        title: "Primary Services",
        icon: Languages,
        items: [
            "Arabic to English Translation",
            "English to Arabic Translation",
            "English to Urdu Translation",
            "Urdu to English Translation"
        ]
    },
    {
        title: "Gulf/Arabic Country Coverage",
        icon: Globe,
        items: [
            "Saudi Arabia Translation",
            "UAE Translation (Dubai, Abu Dhabi)",
            "Qatar Translation",
            "Kuwait Translation",
            "Bahrain Translation",
            "Oman Translation"
        ]
    },
    {
        title: "Document Translation",
        icon: FileText,
        items: [
            "Visa Documents",
            "Birth/Marriage Certificates",
            "Degree & Diploma Translation",
            "Police Clearance Certificate (PCC)",
            "Medical Reports",
            "Legal Document Translation",
            "Court Cases & Verdicts",
            "Financial Documents",
            "Employment/Contract Papers",
            "Hajj & Umrah Documents"
        ]
    }
]

export function ServiceGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Comprehensive Arabic translation and attestation services for all your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                        <div key={category.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                                    <category.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item) => (
                                    <li key={item} className="flex items-start text-slate-600">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
