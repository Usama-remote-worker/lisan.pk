import { PageHero } from "@/components/ui/PageHeader"
import { ShieldCheck, Award, Lock, Clock, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <PageHero
                title="Document Services"
                description="Police Clearance, NADRA services, Visa documentation and more."
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Document Services", href: "/services/document" }
                ]}
            />

            {/* Trust Signals */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Fast Processing</h3>
                                <p className="text-sm text-slate-500">24-48hr turnaround</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Secure Handling</h3>
                                <p className="text-sm text-slate-500">100% Confidential</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-full">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Expert Team</h3>
                                <p className="text-sm text-slate-500">Years of experience</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-amber-50 text-amber-600 rounded-full">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Data Privacy</h3>
                                <p className="text-sm text-slate-500">Guaranteed protection</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Sections */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl space-y-16">
                    {/* Police Clearance */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <FileText className="mr-3 text-emerald-600" />
                            Police Clearance Certificate
                        </h2>
                        <p className="text-slate-600 mb-6">
                            We assist in obtaining Police Character Certificates from Pakistan for visa and immigration purposes.
                            Our team handles the application, follow-up, and collection.
                        </p>
                        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            Learn Requirements <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    {/* NADRA */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <FileText className="mr-3 text-emerald-600" />
                            NADRA Services
                        </h2>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-center text-slate-600"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>CNIC Translation</li>
                            <li className="flex items-center text-slate-600"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>Family Registration Certificate (FRC)</li>
                            <li className="flex items-center text-slate-600"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>Birth Certificate Processing</li>
                        </ul>
                    </div>

                    {/* How It Works */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
                        <h2 className="text-3xl font-bold mb-12 text-center">Process Workflow</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "Submit", desc: "Send documents via WhatsApp" },
                                { step: "02", title: "Review", desc: "We verify requirements" },
                                { step: "03", title: "Process", desc: "We visit the offices" },
                                { step: "04", title: "Deliver", desc: "To your doorstep" }
                            ].map((item) => (
                                <div key={item.step} className="relative">
                                    <div className="text-5xl font-bold text-slate-800 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-emerald-400 mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
