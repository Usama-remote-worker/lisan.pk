import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
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

                        {/* Google Form CTA */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-500 relative">
                            <div className="absolute -top-4 left-6 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                Recommended
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Fast Quote & Document Upload</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                The fastest way to get a quote is to upload your documents to our secure quote request form. Our team will review them and contact you within 30 minutes.
                            </p>
                            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank">
                                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 text-lg font-bold shadow-lg shadow-emerald-200">
                                    Open Quote Request Form
                                    <ExternalLink className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <p className="mt-6 text-center text-sm text-slate-500">
                                No technical issues. Secure Google-powered hosting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
