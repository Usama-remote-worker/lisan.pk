import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { CheckCircle2, ArrowRight, FileText, Globe, ShieldCheck, HelpCircle, Clock, Users, Building2, Briefcase, Languages, Scale, GraduationCap } from "lucide-react"
import { JsonLd } from "@/components/seo/JsonLd"

export const metadata: Metadata = {
    title: "Professional Translation Services in Pakistan | Lisan.pk",
    description: "Certified document translation services in Pakistan. Specialist in Arabic, Urdu & English. Accepted by MOFA, HEC & all foreign embassies. Fast turnaround.",
    alternates: {
        canonical: "https://www.lisan.pk/services",
    },
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900 pt-16">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Professional Translation Services in Pakistan",
                    "provider": {
                        "@type": "Organization",
                        "name": "Lisan.pk"
                    },
                    "description": "Certified and fast translation services in Pakistan. Specialist in document, legal, and website translation with 40+ years experience."
                }}
            />

            {/* Hero Section */}
            <section className="relative py-16 lg:py-24 bg-emerald-950 text-white overflow-hidden">

                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-8">
                        Institutional Standards
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-10 leading-[1.1] font-serif max-w-5xl mx-auto">
                        Professional <span className="text-emerald-400 italic">Translation</span> Excellence
                    </h1>
                    <p className="text-xl text-emerald-50/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Accurate, legally recognized, and embassy-approved translation services. From birth certificates to complex legal contracts, we deliver precision in 50+ languages.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank">
                            <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 px-12 h-16 text-sm font-bold uppercase tracking-widest rounded-full shadow-2xl transition-all duration-300">
                                Upload Your Document
                            </Button>
                        </Link>
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20your%20translation%20services." target="_blank">
                            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-emerald-950 px-12 h-16 text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-300">
                                Get a Free Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            </section>


            {/* Specialties Section */}
            <section className="py-32 container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Translation Specialties</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Comprehensive linguistic solutions for legal, academic, and corporate sectors.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Legal Translation", desc: "Certified translations for court documents, affidavits, and legal contracts accepted by foreign missions." },
                        { title: "Educational Docs", desc: "Degrees, transcripts, and diplomas translated and formatted for HEC, MOFA, and international universities." },
                        { title: "Personal Documents", desc: "Fast Urdu to English translation for Nikkah Nama, Birth Certificates, FRC, and Death Certificates." },
                        { title: "Corporate Translation", desc: "Business proposals, company profiles, and annual reports for international expansion and tenders." },
                        { title: "Website Localization", desc: "Adapting your digital presence for the Pakistani market or international audiences with cultural precision." },
                        { title: "Medical Translation", desc: "Accurate translation of medical reports, prescriptions, and lab results for overseas treatment or insurance." },
                        { title: "Technical Manuals", desc: "Technical documentation, user guides, and engineering specs translated with industry-specific terminology." },
                        { title: "Embassy Forms", desc: "Professional assistance in translating and filling out complex embassy forms for visa applications." }
                    ].map((spec, i) => (
                        <div key={i} className="p-10 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                            <div className="text-emerald-600/20 font-black text-5xl mb-6 group-hover:text-emerald-600 transition-colors">
                                {(i + 1).toString().padStart(2, '0')}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{spec.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{spec.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Lisan? */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-serif">Why Choose Lisan?</h2>
                            <div className="space-y-10">
                                {[
                                    { t: "MA Arabic Qualified Experts", d: "Our team is led by academic experts with 40+ years of linguistic mastery in Pakistan." },
                                    { t: "Global Embassy Acceptance", d: "Our certified translations are recognized by Saudi, UAE, US, UK, and EU embassies." },
                                    { t: "100% Accuracy Guarantee", d: "We provide a 200% refund guarantee if any document is rejected due to our error." },
                                    { t: "Rapid Doorstep Delivery", d: "Serving clients in Lahore, Karachi, Islamabad, and beyond with secure courier delivery." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-3 shrink-0"></div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2 text-slate-900">{item.t}</h4>
                                            <p className="text-slate-600 text-lg leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="text-3xl font-bold mb-10 relative font-serif">Institutional Workflow</h3>
                            <div className="space-y-12 relative">
                                {[
                                    { step: "01", t: "Initial Review", d: "We analyze the legal and linguistic requirements of your specific document." },
                                    { step: "02", t: "Expert Drafting", d: "Our certified translators produce a draft focused on accuracy and embassy-standards." },
                                    { step: "03", t: "Final Certification", d: "Documents are stamped, signed, and certified on our official letterhead for submission." }
                                ].map((s) => (
                                    <div key={s.step} className="flex gap-8">
                                        <div className="text-4xl font-black text-slate-100 italic group-hover:text-emerald-100 transition-colors">
                                            {s.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{s.t}</h4>
                                            <p className="text-slate-500 leading-relaxed">{s.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Industries Section */}
            <section className="py-24 container mx-auto px-4 text-center max-w-5xl">
                <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["Legal & Law Firms", "Healthcare & Pharma", "Education & Research", "Banking & Finance", "Engineering & Construction", "Tourism & Hospitality", "Government & NGO", "E-commerce & Tech"].map(industry => (
                        <span key={industry} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-bold shadow-sm hover:border-emerald-600 hover:text-emerald-700 transition-all cursor-default">
                            {industry}
                        </span>
                    ))}
                </div>
            </section>

            {/* Pricing & Turnaround */}
            <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing & Turnaround Time</h2>
                    <div className="overflow-x-auto">
                        <p className="text-emerald-100 text-center mb-8 max-w-2xl mx-auto">
                            Our pricing is competitive and transparent. For specific document types like scholarship applications, 
                            view our <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-emerald-400 underline font-bold">detailed scholarship translation price guide</Link>.
                        </p>
                        <table className="w-full text-left border-collapse bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
                            <thead>
                                <tr className="bg-white/20">
                                    <th className="p-6 font-bold text-emerald-400">Service Type</th>
                                    <th className="p-6 font-bold text-emerald-400">Estimated Pricing</th>
                                    <th className="p-6 font-bold text-emerald-400">Standard Turnaround</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-lg">
                                <tr>
                                    <td className="p-6">Urdu to English (Nikkah Nama)</td>
                                    <td className="p-6">1,500 – 2,500 PKR</td>
                                    <td className="p-6">24 Hours</td>
                                </tr>
                                <tr>
                                    <td className="p-6">English to Arabic (Degrees)</td>
                                    <td className="p-6">2,000 – 3,500 PKR</td>
                                    <td className="p-6">1-2 Working Days</td>
                                </tr>
                                <tr>
                                    <td className="p-6">Legal Contract Translation</td>
                                    <td className="p-6">10 – 15 PKR / Word</td>
                                    <td className="p-6">3-5 Working Days</td>
                                </tr>
                                <tr>
                                    <td className="p-6">Website Localization</td>
                                    <td className="p-6">Contact for Quote</td>
                                    <td className="p-6">Based on Project Size</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-8 text-center text-emerald-200 italic">Note: Urgent "Same Day" delivery is available for most personal documents at a small premium.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-700">
                        "Lisan.pk is the best for <strong>certified translation</strong> in Lahore. They translated my Nikkah Nama for the Saudi Embassy in just 4 hours. Highly recommended for fast service."
                        <div className="mt-6 font-bold text-slate-900 not-italic">— Ahmad Raza, Lahore</div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-700">
                        "I needed my HEC verified degrees translated into Arabic for my UAE visa. Lisan.pk provided professional <strong>Urdu to English translation</strong> and Arabic versions that were accepted immediately."
                        <div className="mt-6 font-bold text-slate-900 not-italic">— Sarah Khan, Islamabad</div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "Is your translation accepted by foreign embassies?", a: "Yes, our translations are certified and stamped on our registered letterhead, which is recognized by MOFA and all major foreign embassies in Pakistan." },
                            { q: "Can I get my documents translated online?", a: "Yes, simply upload your documents through our 'Get a Free Quote' form. We will send you a digital draft for approval before finalizing and couriering the hard copies." },
                            { q: "What languages do you support for translation?", a: "We specialize in Arabic, Urdu, and English, but we also provide <strong>legal translation services</strong> for German, French, Chinese, and 50+ other global languages." },
                            { q: "How do you calculate the price of a translation?", a: "Pricing is based on the complexity of the document, the word count, and the urgency of the delivery. We offer the most competitive <strong>translation services Pakistan</strong> pricing." },
                            { q: "Do you provide notarization services?", a: "Yes, we can provide notarized copies of your translated documents through our network of legal partners for use in international courts and departments." }
                        ].map((faq, i) => (
                            <div key={i}>
                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex gap-3 items-center">
                                    <HelpCircle className="w-5 h-5 text-emerald-600" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-8 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-emerald-50 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">Ready to Get Started?</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Join 100,000+ satisfied clients. Get your documents translated by the most trusted <strong>translation services in Pakistan</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-16 px-10 text-xl rounded-xl shadow-lg">
                                Get a Free Quote
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="h-16 px-10 text-xl rounded-xl border-slate-300">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Linking Footer */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 font-medium mb-6">Explore more:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/" className="text-emerald-700 hover:underline font-bold">Home</Link>
                        <Link href="/blog" className="text-emerald-700 hover:underline font-bold">Expert Translation Blog</Link>
                        <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 hover:underline font-bold">Saudi Scholarship Guide</Link>
                        <Link href="/contact" className="text-emerald-700 hover:underline font-bold">Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
