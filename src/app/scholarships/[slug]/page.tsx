import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, GraduationCap, MapPin, ExternalLink, ArrowRight, FileText, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { universities } from "@/data/scholarship-universities"
import { ServicePackages } from "@/components/home/ServicePackages"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const university = universities[slug]
    if (!university) return { title: "University Not Found" }

    return {
        title: `${university.name} Scholarship for Pakistani Students 2026`,
        description: `Complete documentation and translation guide for ${university.name} scholarship applications. Requirements, checklist, and admission support.`,
        alternates: {
            canonical: `https://www.lisan.pk/scholarships/${slug}`,
        },
    }
}

export default async function UniversityPage({ params }: PageProps) {
    const { slug } = await params
    const university = universities[slug]
    if (!university) notFound()

    return (
        <main className="min-h-screen bg-white pt-24">
            {/* Hero */}
            <section className="py-20 bg-emerald-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-emerald-500/20">
                        <GraduationCap className="w-4 h-4" /> University Portal Support
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif max-w-4xl mx-auto leading-tight">
                        {university.fullName} <br />
                        <span className="text-emerald-400 italic">Guide for Pakistani Students</span>
                    </h1>
                    <p className="text-xl text-emerald-50/70 max-w-3xl mx-auto leading-relaxed">
                        {university.description}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Admission Checklist & Requirements</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                To ensure your application for <strong>{university.name} scholarship 2026</strong> is successful, you must prepare the following documents. All academic documents must be translated into certified Arabic.
                            </p>
                            <div className="space-y-4">
                                {university.checklist.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </div>
                                        <span className="text-slate-900 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Official Portal</h3>
                            <p className="text-emerald-800/70 mb-6">
                                Ready to submit? Visit the official {university.name} admission portal directly.
                            </p>
                            <Link href={university.portalUrl} target="_blank">
                                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 rounded-xl font-bold flex items-center gap-2">
                                    Access Official Portal <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl">
                            <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 font-serif">How Lisan Helps</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We provide university-specific translation bundles that match the exact portal requirements of {university.name}.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Portal-ready PDF scans",
                                    "Certified Arabic stamps",
                                    "MA Arabic expert proofreading",
                                    "Same-day priority service"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://wa.me/923044296295" className="block">
                                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black h-14 rounded-xl">
                                    WHATSAPP EXPERT
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Bridge */}
            <div className="border-t border-slate-100 pt-12">
                <ServicePackages />
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return Object.keys(universities).map((slug) => ({
        slug,
    }))
}
