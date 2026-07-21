import { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = {
    title: "Contact Lisan.pk: Certified Arabic Translation & Attestation",
    description: "Get a free quote for certified Arabic translation and attestation. 24/7 support across Pakistan. Embassy-accepted services for Saudi & UAE.",
    alternates: {
        canonical: "https://www.lisan.pk/contact",
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <PageHero 
                title="Contact Lisan"
                description="Certified Translation & Scholarship Support – We are just a text or call away. 24/7. Anywhere in Pakistan."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
            />

            {/* Section 1: Direct Contact (Above the Fold) */}
            <section className="py-16 container mx-auto px-4 max-w-6xl font-sans">
                <div className="grid lg:grid-cols-2 gap-12 items-start font-sans">
                    <div className="space-y-8 font-sans">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">Reach Out Directly</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8 font-sans">
                                We are just a text away. No office visits needed.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 font-sans">
                            <a href="tel:03044296295" className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/></svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1 font-serif">Call / WhatsApp</h4>
                                </div>
                                <p className="text-lg text-emerald-700 font-bold font-mono">0304-4296295</p>
                            </a>

                            <a href="mailto:lisan.pk.services@gmail.com" className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-slate-700 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-1 font-serif">Email Support</h4>
                                </div>
                                <p className="text-xs text-slate-600 font-medium break-words font-mono">lisan.pk.services@gmail.com</p>
                            </a>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-emerald-900 text-white rounded-2xl shadow-xl font-sans">
                            <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <div>
                                <h4 className="font-bold font-serif">Response: 24/7</h4>
                                <p className="text-emerald-100 text-sm font-sans">We reply within minutes – even on weekends and at 2 AM.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Contact Form & Service Area */}
                    <div className="space-y-8 font-sans">
                        <ContactForm />

                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 font-sans">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                                Serving All Over Pakistan
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                                From Karachi to Islamabad, Lahore to Multan – we bring certified translation to your doorstep. No location restrictions. No travel needed.
                            </p>
                            
                            <div className="space-y-3 font-sans text-xs">
                                {[
                                    "Certified Arabic Translator",
                                    "Embassy-accepted stamp",
                                    "Professional sign & seal",
                                    "Zero rejection guarantee"
                                ].map((trust, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-800 font-bold">
                                        <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                        {trust}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: How We Work */}
            <section className="py-20 bg-slate-50 border-y border-slate-200 font-sans">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-16 font-serif">How We Work – 4 Simple Steps</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-sm">
                        {[
                            { step: "1", title: "Share Docs", desc: "Text or WhatsApp your document list to 03044296295" },
                            { step: "2", title: "Confirmation", desc: "We confirm price and pickup (or accept scanned copies)" },
                            { step: "3", title: "Translation", desc: "Certified translation delivered to your doorstep or email" },
                            { step: "4", title: "Ready!", desc: "Ready for attestation and submission to embassies" }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg font-mono">
                                    {item.step}
                                </div>
                                <h4 className="mt-4 font-bold text-slate-900 mb-2 font-serif">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed font-sans">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: FAQs */}
            <section className="py-24 container mx-auto px-4 max-w-4xl font-sans">
                <h2 className="text-3xl font-bold text-center mb-16 font-serif">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-10">
                    {[
                        { q: "How fast can you translate my scholarship documents?", a: "Within 24–72 hours, depending on urgency. We work 24/7." },
                        { q: "Do I need to visit your office?", a: "No. We are just a text away. Doorstep service across Pakistan." },
                        { q: "Is your translation accepted by the Saudi embassy?", a: "Yes. Certified stamp and professional sign. Zero rejection guarantee." },
                        { q: "How do I pay?", a: "Bank transfer, EasyPaisa, or JazzCash – whatever works for you." },
                        { q: "Can you handle urgent requests at night or on Friday?", a: "Yes. We are available 24/7. Reach out anytime." }
                    ].map((faq, i) => (
                        <div key={i} className="border-l-4 border-emerald-500 pl-8 font-sans">
                            <h4 className="text-xl font-bold text-slate-900 mb-3 font-serif">{faq.q}</h4>
                            <p className="text-lg text-slate-600 leading-relaxed font-sans">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6: Call to Action (Final) */}
            <section className="py-20 bg-slate-900 text-center border-t border-slate-800 font-sans">
                <div className="container mx-auto px-4 max-w-3xl font-sans">
                    <h2 className="text-4xl font-bold text-white mb-4 font-serif">Ready to Get Started?</h2>
                    <p className="text-lg text-slate-400 mb-10 font-sans">
                        Send your document list via WhatsApp: <a href="tel:03044296295" className="font-bold text-emerald-400 hover:text-emerald-300">0304-4296295</a><br/>
                        Or email: <a href="mailto:lisan.pk.services@gmail.com" className="font-bold text-emerald-400 hover:text-emerald-300">lisan.pk.services@gmail.com</a>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 font-sans">
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20contacting%20you%20from%20your%20website%20Contact%20page." target="_blank" className="w-full sm:w-auto">
                            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 h-14 text-lg rounded-xl shadow-xl w-full font-extrabold border border-emerald-800/30">
                                WhatsApp Now
                            </Button>
                        </Link>
                        <Link href="mailto:lisan.pk.services@gmail.com" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="px-10 h-14 text-lg rounded-xl border-slate-600 w-full bg-transparent text-white hover:bg-white/10">
                                Email Us
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-emerald-500 font-semibold text-sm font-sans">We reply within minutes – even at 2 AM.</p>
                </div>
            </section>

            {/* Internal Linking Footer (Build Authority) */}
            <section className="py-16 bg-white border-t border-slate-200 font-sans">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 font-medium mb-6 italic text-sm">Useful resources for your application:</p>
                    <div className="flex flex-wrap justify-center gap-8 font-sans">
                        <Link href="/services" className="text-emerald-700 hover:underline font-bold text-lg">
                             View Our Services →
                        </Link>
                        <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-emerald-700 hover:underline font-bold text-lg">
                             Saudi Scholarship Guide →
                        </Link>
                        <Link href="/about" className="text-emerald-700 hover:underline font-bold text-lg">
                             Learn More About Us →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}