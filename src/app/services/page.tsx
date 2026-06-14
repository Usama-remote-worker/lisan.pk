import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServicePackages } from "@/components/home/ServicePackages"
import { services } from "@/data/location-services"

export const metadata: Metadata = {
    title: "Professional Translation Services in Pakistan",
    description: "Certified document translation services in Pakistan. Specialist in Arabic, Urdu & English. Accepted by MOFA, HEC & all foreign embassies. Fast turnaround.",
    alternates: {
        canonical: "https://www.lisan.pk/services",
    },
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
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
            <section className="relative py-16 lg:py-24 bg-emerald-950 text-white overflow-hidden font-sans">

                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-4 relative z-10 text-center font-sans">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-8 select-none">
                        Institutional Standards
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-10 leading-[1.1] font-serif max-w-5xl mx-auto text-white">
                        Professional <span className="text-emerald-400 italic">Translation</span> Excellence
                    </h1>
                    <p className="text-xl text-emerald-50/70 mb-12 max-w-3xl mx-auto leading-relaxed font-medium font-sans">
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


            {/* Service Packages */}
            <ServicePackages />

            {/* Specialties Section - Expanded Catalog */}
            <section className="py-32 bg-white font-sans">
                <div className="container mx-auto px-4 max-w-7xl font-sans">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl font-sans">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Comprehensive Document Support</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                Our diverse range of translation services is tailored specifically for the 2026 Saudi scholarship cycle and residency requirements.
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-6 py-3 rounded-full">
                                {Object.keys(services).length}+ specialized services
                            </span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.values(services).map((service, i) => (
                            <div key={service.slug} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 group border-transparent hover:border-emerald-100 font-sans">
                                <div className="text-emerald-600/20 font-black text-5xl mb-6 group-hover:text-emerald-600 transition-colors tabular-nums font-serif">
                                    {(i + 1).toString().padStart(2, '0')}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors font-serif">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8 text-sm">{service.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {service.benefits.slice(0, 3).map((benefit) => (
                                        <li key={benefit} className="flex items-center gap-2 text-sm text-slate-500 font-medium font-sans">
                                            <span className="text-emerald-600 font-bold select-none">✓</span> {benefit}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20${service.title}.`} className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline transition-all font-sans text-sm">
                                    Order Translation →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Industries Section */}
            <section className="py-24 container mx-auto px-4 text-center max-w-5xl font-sans">
                <h2 className="text-3xl font-bold mb-12 font-serif">Industries We Serve</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["Legal & Law Firms", "Healthcare & Pharma", "Education & Research", "Banking & Finance", "Engineering & Construction", "Tourism & Hospitality", "Government & NGO", "E-commerce & Tech"].map(industry => (
                        <span key={industry} className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-bold shadow-sm hover:border-emerald-600 hover:text-emerald-700 transition-all cursor-default text-sm">
                            {industry}
                        </span>
                    ))}
                </div>
            </section>

            {/* Pricing & Turnaround */}
            <section className="py-24 bg-emerald-900 text-white overflow-hidden relative font-sans">
                <div className="container mx-auto px-4 max-w-4xl relative z-10 font-sans">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif">Pricing & Turnaround Time</h2>
                    <div className="overflow-x-auto font-sans">
                        <p className="text-emerald-100 text-center mb-8 max-w-2xl mx-auto leading-relaxed text-sm font-medium">
                            Our pricing is competitive and transparent. For specific document types like scholarship applications, 
                            view our <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-emerald-400 underline font-bold">detailed scholarship translation price guide</Link>.
                        </p>
                        <table className="w-full text-left border-collapse bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 text-sm">
                            <thead>
                                <tr className="bg-white/20">
                                    <th className="p-6 font-bold text-emerald-400">Service Type</th>
                                    <th className="p-6 font-bold text-emerald-400">Estimated Pricing</th>
                                    <th className="p-6 font-bold text-emerald-400">Standard Turnaround</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-emerald-50 font-medium">
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
                    <p className="mt-8 text-center text-emerald-200 italic text-xs">Note: Urgent "Same Day" delivery is available for most personal documents at a small premium.</p>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 container mx-auto px-4 max-w-5xl font-sans">
                <h2 className="text-3xl font-bold text-center mb-16 font-serif">Client Testimonials</h2>
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-700 leading-relaxed font-sans">
                        "Lisan.pk is the best for <strong>certified translation</strong>. They translated my entire scholarship document set (Result Card, Medical, and Recommendation) for the Saudi portal in record time."
                        <div className="mt-6 font-bold text-slate-900 not-italic">— Muhammad Ahsan Hassan, Rahim Yar Khan</div>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-700 leading-relaxed font-sans">
                        "I needed my HEC verified degrees translated into Arabic for my UAE visa. Lisan.pk provided professional <strong>Urdu to English translation</strong> and Arabic versions that were accepted immediately."
                        <div className="mt-6 font-bold text-slate-900 not-italic">— Sarah Khan, Islamabad</div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white border-t border-slate-100 font-sans">
                <div className="container mx-auto px-4 max-w-3xl font-sans">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-serif">Frequently Asked Questions</h2>
                    <div className="space-y-8 font-sans">
                        {[
                            { q: "Is your translation accepted by foreign embassies?", a: "Yes, our translations are certified and stamped on our registered letterhead, which is recognized by MOFA and all major foreign embassies in Pakistan." },
                            { q: "Can I get my documents translated online?", a: "Yes, simply upload your documents through our 'Get a Free Quote' form. We will send you a digital draft for approval before finalizing and couriering the hard copies." },
                            { q: "What languages do you support for translation?", a: "We specialize in Arabic, Urdu, and English, but we also provide <strong>legal translation services</strong> for German, French, Chinese, and 50+ other global languages." },
                            { q: "How do you calculate the price of a translation?", a: "Pricing is based on the complexity of the document, the word count, and the urgency of the delivery. We offer the most competitive <strong>translation services Pakistan</strong> pricing." },
                            { q: "Do you provide notarization services?", a: "Yes, we can provide notarized copies of your translated documents through our network of legal partners for use in international courts and departments." }
                        ].map((faq, i) => (
                            <div key={i}>
                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex gap-3 items-center font-serif">
                                    <span className="text-emerald-600 font-extrabold select-none">?</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 pl-8 leading-relaxed text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-emerald-50 text-center font-sans">
                <div className="container mx-auto px-4 font-sans">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8 font-serif">Ready to Get Started?</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium font-sans">
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
            <section className="py-16 bg-white border-t border-slate-200 font-sans">
                <div className="container mx-auto px-4 text-center font-sans">
                    <p className="text-slate-500 font-medium mb-6">Explore more:</p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                        <Link href="/blog" className="hover:text-emerald-600 transition-colors">Expert Translation Blog</Link>
                        <Link href="/consultancy/saudi-scholarship" className="hover:text-emerald-600 transition-colors">Saudi Scholarship Guide</Link>
                        <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact Us</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
