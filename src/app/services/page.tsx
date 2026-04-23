"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { FileText, Globe, Languages, CheckCircle2, Award, GraduationCap, Building2, Gavel } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Data for services
const serviceCategories = [
    {
        id: "translation",
        title: "Translation Services",
        icon: Languages,
        description: "Professional, accurate, and certified translations for all your official needs.",
        image: "/images/services-translation-pro.png",
        items: [
            { name: "Arabic to English Translation", desc: "Certified translation for official use." },
            { name: "English to Arabic Translation", desc: "Localization for Gulf markets." },
            { name: "Urdu to English Translation", desc: "For immigration and academic purposes." },
            { name: "Turkish Translation Services", desc: "For study, work, or tourism in Turkey." },
            { name: "German Translation Services", desc: "For student visas and immigration to Germany." },
            { name: "Legal Document Translation", desc: "Affidavits, contracts, and court orders." },
            { name: "Medical Reports Translation", desc: "Accurate medical terminology translation." },
            { name: "Technical Translation", desc: "Manuals, specs, and engineering docs." }
        ]
    },
    {
        id: "attestation",
        title: "Attestation Services",
        icon: Award,
        description: "Complete document authentication from HEC, MOFA, and Embassies.",
        image: "/images/services-attestation.png",
        items: [
            { name: "HEC Degree Attestation", desc: "Verification for higher education degrees." },
            { name: "MOFA Pakistan Attestation", desc: "Ministry of Foreign Affairs final stamp." },
            { name: "Saudi Embassy Attestation", desc: "For work and residence visas in KSA." },
            { name: "UAE Embassy Attestation", desc: "Legalization for use in Dubai/Abu Dhabi." },
            { name: "IBCC Attestation", desc: "For Matric and Intermediate certificates." },
            { name: "Qatar Embassy Attestation", desc: "Commercial and personal document legalization." }
        ]
    },
    {
        id: "consultancy",
        title: "Visa & Consultancy",
        icon: GraduationCap,
        description: "Expert guidance for student visas, scholarships, and immigration.",
        image: "/images/about-scholarship-gen.png",
        items: [
            { name: "Saudi Scholarship Guidance", desc: "Fully funded study opportunities in KSA." },
            { name: "Student Visa Assistance", desc: "End-to-end visa filing support." },
            { name: "Family Visa Processing", desc: "Bring your family to the Gulf ease." },
            { name: "Immigration Consultancy", desc: "Guidance for skilled migration pathways." }
        ]
    }
]

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("translation")

    const activeCategory = serviceCategories.find(c => c.id === activeTab)

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Header is global in layout, but added here if standalone page structure is different, 
                however based on previous edits, layout.tsx includes Header. 
                Wait, user removed header from scholarship page to avoid duplication.
                I will assume layout.tsx handles it. */}

            {/* Hero Section */}
            <section className="relative py-20 bg-emerald-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Our Premium Services
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
                            One-stop solution for all your Translation, Attestation, and Consultancy needs.
                            Trusted by thousands of clients worldwide.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Service Explorer */}
            <section className="py-20 -mt-10">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                        <div className="grid md:grid-cols-12 min-h-[600px]">

                            {/* Sidebar / Tabs */}
                            <div className="md:col-span-4 bg-slate-50 border-r border-slate-200 p-6 space-y-2">
                                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 px-4">
                                    Explore Categories
                                </h3>
                                {serviceCategories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveTab(category.id)}
                                        className={cn(
                                            "w-full text-left px-6 py-4 rounded-xl transition-all duration-200 flex items-center gap-4 group",
                                            activeTab === category.id
                                                ? "bg-emerald-600 text-white shadow-md transform scale-[1.02]"
                                                : "hover:bg-white hover:shadow-sm text-slate-600"
                                        )}
                                    >
                                        <div className={cn(
                                            "p-2 rounded-lg transition-colors",
                                            activeTab === category.id ? "bg-white/20 text-white" : "bg-white text-emerald-600 group-hover:bg-emerald-50"
                                        )}>
                                            <category.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="font-bold block">{category.title}</span>
                                        </div>
                                    </button>
                                ))}

                                <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                                    <h4 className="font-bold text-emerald-900 mb-2">Need Custom Help?</h4>
                                    <p className="text-sm text-emerald-700 mb-4">
                                        Not sure which service you need? WhatsApp us for a free consultation.
                                    </p>
                                    <Link href="https://wa.me/923034041132" target="_blank">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                            Chat on WhatsApp
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="md:col-span-8 p-8 md:p-12">
                                {activeCategory && (
                                    <FadeIn key={activeCategory.id} className="h-full flex flex-col">
                                        <div className="mb-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                                                    <activeCategory.icon className="w-8 h-8" />
                                                </div>
                                                <h2 className="text-3xl font-bold text-slate-900">{activeCategory.title}</h2>
                                            </div>

                                            {/* Feature Image */}
                                            <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-100">
                                                <img
                                                    src={activeCategory.image}
                                                    alt={activeCategory.title}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>

                                            <p className="text-lg text-slate-600 leading-relaxed">
                                                {activeCategory.description}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                                            {activeCategory.items.map((item, idx) => (
                                                <div key={idx} className="group p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-200">
                                                    <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 pl-6 group-hover:text-emerald-700/80 transition-colors">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                                            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank" className="flex-1">
                                                <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-lg">
                                                    Get a Quote
                                                </Button>
                                            </Link>
                                            <Link href="https://wa.me/923034041132" target="_blank" className="flex-1">
                                                <Button variant="outline" size="lg" className="w-full h-12 text-lg border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                                                    WhatsApp Now
                                                </Button>
                                            </Link>
                                        </div>
                                    </FadeIn>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Comprehensive Document Inventory */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Document Inventory</h2>
                        <p className="text-lg text-slate-600">
                            Whether it's for the Saudi Embassy in Islamabad, MOFA in Lahore, or global use, we handle the translation and attestation of all major Pakistani and international documents.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Nikkah Nama (Marriage)", "Birth Certificate", "Character Certificate", "Death Certificate",
                            "Divorce Certificate", "Degree & Transcript", "Experience Letter", "Medical Report",
                            "Police Clearance", "FRC (NADRA)", "CNIC / B-Form", "Power of Attorney",
                            "Affidavit", "Trade License", "Import/Export Docs", "Bank Statement"
                        ].map((doc) => (
                            <div key={doc} className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <span className="font-semibold text-slate-700 text-sm md:text-base">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Workflow Section */}
            <section className="py-20 bg-emerald-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900 skew-x-12 translate-x-32 hidden md:block"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">How We Work</h2>
                            <p className="text-emerald-100 mb-12 text-lg leading-relaxed">
                                Our process is designed for speed, accuracy, and minimum effort from your side. We act as your representatives at Government and Embassy offices so you don't have to stand in queues.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Submit Documents", desc: "Send scanned copies or clear photos via WhatsApp or Email." },
                                    { step: "02", title: "Expert Review", desc: "Our specialists verify the documents for HEC/MOFA/Embassy compliance." },
                                    { step: "03", title: "Swift Processing", desc: "We complete the translation or attestation within 24-48 hours." },
                                    { step: "04", title: "Safe Delivery", desc: "Get your documents via secure courier or digital copy instantly." }
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-6">
                                        <div className="text-3xl font-bold text-emerald-500/50">{item.step}</div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                            <p className="text-emerald-100/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-emerald-800/50 p-8 rounded-3xl border border-emerald-700 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6">Why Lisan.pk Leads?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Direct Access to Embassy certified translators",
                                    "Up-to-date knowledge of Saudi & Gulf requirements",
                                    "Transparent pricing with no hidden hidden costs",
                                    "Confidentiality guaranteed for sensitive legal docs",
                                    "40+ Years of proven local and international trust"
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                                        <span className="text-emerald-50">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about Arabic translation and document attestation in Pakistan.</p>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How long does the Saudi Embassy attestation process take?",
                                a: "Typically, the process takes 3-5 working days. However, this depends on whether your documents are already attested by MOFA and HEC. We offer urgent processing for critical cases."
                            },
                            {
                                q: "Are your translations accepted for US/UK/Canada visas?",
                                a: "Yes, our certified translations are recognized by embassies for visa and immigration purposes globally, as we follow international standards for certification and notarization."
                            },
                            {
                                q: "Can I send my documents from another city like Karachi or Islamabad?",
                                a: "Absolutely. We serve clients nationwide. You can courier your original documents to our Lahore office, and we will return them securely once processed."
                            },
                            {
                                q: "What is the fee for translating a Nikkah Nama into English?",
                                a: "The fee varies based on the length and urgency. Our rates are highly competitive starting from as low as 1500 PKR. Contact us on WhatsApp for an exact quote."
                            },
                            {
                                q: "Do you handle HEC and MOFA verification as well?",
                                a: "Yes, we provide end-to-end support. If your degrees are not yet verified, we can guide you through the HEC portal and handle the MOFA stamp ourselves."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex gap-3 text-left">
                                    <span className="text-emerald-600">Q.</span> {faq.q}
                                </h3>
                                <p className="text-slate-600 pl-8 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* JSON-LD FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How long does the Saudi Embassy attestation process take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Typically, the process takes 3-5 working days. However, this depends on whether your documents are already attested by MOFA and HEC."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are your translations accepted for US/UK/Canada visas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, our certified translations are recognized by embassies globally for visa and immigration purposes."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can I send my documents from another city?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we serve clients nationwide via secure courier services."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    )
}
