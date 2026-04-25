import { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHeader"
import { 
    Phone, 
    Mail, 
    Clock, 
    MessageSquare, 
    Truck, 
    ShieldCheck, 
    FileText, 
    CheckCircle2, 
    ArrowRight,
    HelpCircle,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Contact Lisan – Certified Translation & Scholarship Support",
    description: "24/7 Arabic translation support in Pakistan. No office visits needed. Certified stamp and professional sign for Saudi and UAE embassies.",
    alternates: {
        canonical: "https://lisan.pk/contact",
    },
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero 
                title="Contact Lisan"
                description="Certified Translation & Scholarship Support – We are just a text or call away. 24/7. Anywhere in Pakistan."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
            />

            {/* Section 1: Direct Contact (Above the Fold) */}
            <section className="py-20 container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Reach Out Directly</h2>
                            <p className="text-xl text-emerald-800 font-medium leading-relaxed mb-8">
                                💬 We are just a text away. No office visits needed.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <a href="tel:03044296295" className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Call / WhatsApp</h4>
                                <p className="text-lg text-emerald-700 font-bold">0304-4296295</p>
                            </a>

                            <a href="mailto:lisan.pk.services@gmail.com" className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                                <p className="text-sm text-slate-600 font-medium break-words">lisan.pk.services@gmail.com</p>
                            </a>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-emerald-900 text-white rounded-3xl shadow-xl">
                            <Clock className="w-8 h-8 text-emerald-400" />
                            <div>
                                <h4 className="font-bold">Response: 24/7</h4>
                                <p className="text-emerald-100 text-sm">We reply within minutes – even on weekends and at 2 AM.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 & 3: Service Area & Trust (Simplified) */}
                    <div className="space-y-8">
                        <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Truck className="text-emerald-600" /> 📍 Serving all over Pakistan
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                From Karachi to Islamabad, Lahore to Multan – we bring certified translation to your doorstep. No location restrictions. No travel needed.
                            </p>
                            
                            <div className="space-y-4">
                                {[
                                    "Certified Arabic Translator",
                                    "Embassy-accepted stamp",
                                    "Professional sign & seal",
                                    "Zero rejection guarantee"
                                ].map((trust, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-800 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                        {trust}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: How We Work */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-16 font-serif">How We Work – 4 Simple Steps</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "1", title: "Share Docs", desc: "Text or WhatsApp your document list to 03044296295" },
                            { step: "2", title: "Confirmation", desc: "We confirm price and pickup (or accept scanned copies)" },
                            { step: "3", title: "Translation", desc: "Certified translation delivered to your doorstep or email" },
                            { step: "4", title: "Ready!", desc: "Ready for attestation and submission to embassies" }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                    {item.step}
                                </div>
                                <h4 className="mt-4 font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: FAQs */}
            <section className="py-24 container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-16 font-serif flex items-center justify-center gap-3">
                    <HelpCircle className="text-emerald-600" /> Frequently Asked Questions
                </h2>
                <div className="space-y-10">
                    {[
                        { q: "How fast can you translate my scholarship documents?", a: "Within 24–72 hours, depending on urgency. We work 24/7." },
                        { q: "Do I need to visit your office?", a: "No. We are just a text away. Doorstep service across Pakistan." },
                        { q: "Is your translation accepted by the Saudi embassy?", a: "Yes. Certified stamp and professional sign. Zero rejection guarantee." },
                        { q: "How do I pay?", a: "Bank transfer, EasyPaisa, or JazzCash – whatever works for you." },
                        { q: "Can you handle urgent requests at night or on Friday?", a: "Yes. We are available 24/7. Reach out anytime." }
                    ].map((faq, i) => (
                        <div key={i} className="border-l-4 border-emerald-500 pl-8">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                            <p className="text-lg text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 6: Call to Action (Final) */}
            <section className="py-24 bg-emerald-50 text-center border-t border-emerald-100">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">📲 Ready to start?</h2>
                    <p className="text-xl text-slate-600 mb-12">
                        Send your document list via WhatsApp: <span className="font-bold text-emerald-800 underline">0304-4296295</span><br/>
                        Or email: <span className="font-bold text-emerald-800 underline">lisan.pk.services@gmail.com</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20contacting%20you%20from%20your%20website%20Contact%20page." target="_blank">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 text-xl rounded-2xl shadow-xl w-full sm:w-auto">
                                <MessageSquare className="mr-2" /> WhatsApp Now
                            </Button>
                        </Link>
                        <Link href="mailto:lisan.pk.services@gmail.com">
                            <Button variant="outline" size="lg" className="px-10 h-16 text-xl rounded-2xl border-slate-300 w-full sm:w-auto">
                                <Mail className="mr-2" /> Email Us
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-8 text-emerald-700 font-bold italic animate-pulse">We reply within minutes – even at 2 AM.</p>
                </div>
            </section>

            {/* Internal Linking Footer (Build Authority) */}
            <section className="py-16 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 font-medium mb-6 italic">Useful resources for your application:</p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="/services" className="text-emerald-700 hover:underline font-bold flex items-center gap-2 text-lg">
                             <ArrowRight className="w-4 h-4" /> View Our Services
                        </Link>
                        <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-emerald-700 hover:underline font-bold flex items-center gap-2 text-lg">
                             <ArrowRight className="w-4 h-4" /> Saudi Scholarship Guide
                        </Link>
                        <Link href="/about" className="text-emerald-700 hover:underline font-bold flex items-center gap-2 text-lg">
                             <ArrowRight className="w-4 h-4" /> Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}