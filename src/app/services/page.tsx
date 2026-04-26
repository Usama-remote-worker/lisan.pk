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
        <main className="min-h-screen bg-white font-sans text-slate-900 pt-20">
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
            <section className="relative py-20 lg:py-32 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl mb-8 leading-tight">
                        Professional <span className="text-emerald-400">Translation Services</span> in Pakistan – Certified & Fast
                    </h1>
                    <p className="text-xl text-emerald-50 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Accurate, legally recognized, and embassy-approved <strong>translation services in Pakistan</strong>. From birth certificates to complex legal contracts, we deliver excellence in 50+ languages.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank">
                            <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 px-10 h-16 text-lg font-bold shadow-xl">
                                Upload Your Document
                                <FileText className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20your%20translation%20services." target="_blank">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-10 h-16 text-lg font-bold">
                                Get a Free Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Translation Specialties</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">We offer a wide range of specialized <strong>document translation</strong> and linguistic services.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Legal Translation", icon: Scale, desc: "Certified translations for court documents, affidavits, and legal contracts accepted by foreign missions." },
                        { title: "Educational Docs", icon: GraduationCap, desc: "Degrees, transcripts, and diplomas translated and formatted for HEC, MOFA, and international universities." },
                        { title: "Personal Documents", icon: Users, desc: "Fast Urdu to English translation for Nikkah Nama, Birth Certificates, FRC, and Death Certificates." },
                        { title: "Corporate Translation", icon: Briefcase, desc: "Business proposals, company profiles, and annual reports for international expansion and tenders." },
                        { title: "Website Localization", icon: Globe, desc: "Adapting your digital presence for the Pakistani market or international audiences with cultural precision." },
                        { title: "Medical Translation", icon: ShieldCheck, desc: "Accurate translation of medical reports, prescriptions, and lab results for overseas treatment or insurance." },
                        { title: "Technical Manuals", icon: FileText, desc: "Technical documentation, user guides, and engineering specs translated with industry-specific terminology." },
                        { title: "Embassy Forms", icon: Building2, desc: "Professional assistance in translating and filling out complex embassy forms for visa applications." }
                    ].map((spec, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                            <spec.icon className="w-12 h-12 text-emerald-600 mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{spec.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Lisan? */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Why Choose Lisan for Translation?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">MA Arabic Qualified Experts</h4>
                                        <p className="text-slate-600">Our team is led by academic experts with 40+ years of linguistic mastery in Pakistan.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Global Embassy Acceptance</h4>
                                        <p className="text-slate-600">Our certified translations are recognized by Saudi, UAE, US, UK, and EU embassies.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">100% Accuracy Guarantee</h4>
                                        <p className="text-slate-600">We provide a 200% refund guarantee if any document is rejected due to our error.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle2 className="w-6 h-6" /></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Rapid Doorstep Delivery</h4>
                                        <p className="text-slate-600">Serving clients in Lahore, Karachi, Islamabad, and beyond with secure courier delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold mb-6">Our 3‑Step Process</h3>
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="text-4xl font-black text-emerald-100 italic">01</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Initial Review</h4>
                                        <p className="text-slate-500">We analyze the legal and linguistic requirements of your specific document.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="text-4xl font-black text-emerald-100 italic">02</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Expert Drafting</h4>
                                        <p className="text-slate-500">Our certified translators produce a draft focused on accuracy and embassy-standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="text-4xl font-black text-emerald-100 italic">03</div>
                                    <div>
                                        <h4 className="font-bold text-lg">Final Certification</h4>
                                        <p className="text-slate-500">Documents are stamped, signed, and certified on our official letterhead for submission.</p>
                                    </div>
                                </div>
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
