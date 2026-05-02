const serviceCategories = [
    {
        title: "Primary Services",
        items: [
            "Arabic to English Translation",
            "English to Arabic Translation",
            "English to Urdu Translation",
            "Urdu to English Translation"
        ]
    },
    {
        title: "Gulf/Arabic Country Coverage",
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

import { ScrollReveal } from "@/components/animations/ScrollReveal"

export function ServiceGrid() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <ScrollReveal>
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-serif">Our Specialized Services</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
                            Comprehensive Arabic translation and attestation services for all your needs, delivered with 40 years of expertise.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-10">
                    {serviceCategories.map((category, index) => (
                        <ScrollReveal key={category.title} delay={index * 0.1}>
                            <div className="p-0 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-8 font-serif pb-4 border-b-2 border-emerald-600 inline-block self-start">{category.title}</h3>
                                <ul className="space-y-4">
                                    {category.items.map((item) => (
                                        <li key={item} className="flex items-start text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 mt-2 shrink-0"></span>
                                            <span className="text-[15px] font-medium leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

