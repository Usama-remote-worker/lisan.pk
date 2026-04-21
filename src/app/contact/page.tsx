import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Arabic Translation Centre Lahore | Lisan.pk",
    description: "Affordable Arabic translation and embassy attestation services in Lahore. Visit Saqib Translation Centre or contact us via WhatsApp: 0303 4041132.",
}

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Contact Us"
                description="Get in touch with us for certified translation and attestation services."
                breadcrumbs={[{ label: "Contact", href: "/contact" }]}
            />

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                                <p className="text-slate-600 mb-8">
                                    Have questions about your documents? Our team is here to help you via phone, WhatsApp, or email.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone & WhatsApp</h3>
                                        <p className="text-slate-600">0303 4041132</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">info@lisan.pk</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Address</h3>
                                        <p className="text-slate-600">
                                            Saqib Translation Centre, Jamia Ashrafia, Muslim town Ferozpur Road, Lahore
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map or Form Placeholder */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your Phone Number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all min-h-[120px]" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
