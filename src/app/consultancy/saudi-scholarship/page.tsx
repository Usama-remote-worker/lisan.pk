import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in"
import { GraduationCap, BookOpen, Globe, CheckCircle2, Calendar, ArrowRight } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Saudi Arabia Scholarship Consultancy - Lisan.pk",
    description: "Get fully funded scholarships in top Saudi universities. We provide complete guidance for application, eligibility, and admission in KSU, KAU, and more."
}

export default function SaudiScholarshipPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                        Expert Scholarship Guidance
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8">
                        Study in <span className="text-emerald-600">Saudi Arabia</span> Fully Funded
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Unlock your potential with world-class education at top Saudi universities. We provide end-to-end consultancy to secure 100% scholarships including tuition, accommodation, and monthly stipends.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white h-14 px-8 text-lg rounded-full">
                                Start Your Application
                            </Button>
                        </Link>
                        <Link href="https://wa.me/923034041132" target="_blank">
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-slate-300 hover:bg-slate-50">
                                Check Eligibility
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Saudi Scholarships?</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Saudi government scholarships are among the most generous in the world, offering unparalleled financial support.</p>
                    </FadeIn>
                    <FadeInStagger className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: GraduationCap,
                                title: "100% Fully Funded",
                                desc: "Complete tuition fee waiver for the entire duration of your undergraduate, master's, or PhD program."
                            },
                            {
                                icon: BookOpen,
                                title: "Monthly Stipend",
                                desc: "Generous monthly allowance to cover living expenses, research materials, and more."
                            },
                            {
                                icon: Globe,
                                title: "Travel & Accommodation",
                                desc: "Free university accommodation and annual round-trip air tickets to your home country."
                            }
                        ].map((item, i) => (
                            <FadeInItem key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300">
                                <div className="bg-emerald-100 p-4 rounded-xl w-fit mb-6 text-emerald-700">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </FadeInItem>
                        ))}
                    </FadeInStagger>
                </div>
            </section>

            {/* Application Roadmap */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Roadmap to Success</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Applying to foreign universities can be daunting. Our structured "Lisan Success Roadmap" simplifies the process, increasing your acceptance chances significantly.
                            </p>

                            <FadeInStagger className="space-y-6" faster>
                                {[
                                    {
                                        step: "01",
                                        title: "Profile Assessment & Strategy",
                                        desc: "We analyze your academic background to shortlist the best-fit universities (KSU, KAU, KFUPM, etc.) increasing your acceptance probability."
                                    },
                                    {
                                        step: "02",
                                        title: "Professional Documentation",
                                        desc: "Full assistance with document translation (Arabic), attestation, and creation of a winning Statement of Purpose (SOP)."
                                    },
                                    {
                                        step: "03",
                                        title: "Application Submission",
                                        desc: "We handle the complex online application portals for multiple universities, ensuring zero errors and timely submission."
                                    },
                                    {
                                        step: "04",
                                        title: "Interview Prep & Visa",
                                        desc: "Once shortlisted, we guide you through the interview process and assist with student visa endorsement."
                                    }
                                ].map((item, i) => (
                                    <FadeInItem key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </FadeInItem>
                                ))}
                            </FadeInStagger>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Premium Package</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                                        University Shortlisting & Strategy
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                                        Arabic Translation of Documents
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                                        Professional SOP & CV Writing
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                                        Recommendation Letter Guidance
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3" />
                                        Application Submission (Up to 5 Universities)
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8">
                                    <div className="flex items-start gap-3">
                                        <Calendar className="w-5 h-5 text-emerald-600 mt-1" />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">Limited Slots Available</p>
                                            <p className="text-xs text-slate-500">We take a limited number of students each batch to ensure quality attention.</p>
                                        </div>
                                    </div>
                                </div>
                                <Link href="https://wa.me/923034041132" target="_blank">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-12 text-lg">
                                        Book Free Consultation
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Universities Ticker */}
            <div className="bg-emerald-900 py-16 overflow-hidden">
                <div className="container mx-auto px-4 text-center mb-8">
                    <p className="text-emerald-200 uppercase tracking-widest text-sm font-semibold">Target Top Universities</p>
                </div>

                <div className="relative flex overflow-hidden">
                    <div className="flex animate-infinite-scroll whitespace-nowrap">
                        {[
                            "King Saud University", "King Abdulaziz University", "KFUPM",
                            "Imam University", "Umm Al-Qura", "Islamic University Madinah",
                            "Princess Nourah University", "King Faisal University", "Taibah University"
                        ].map((uni, index) => (
                            <div key={index} className="mx-8 flex items-center justify-center">
                                <span className="text-2xl md:text-3xl font-bold text-emerald-400/80 uppercase tracking-tight">
                                    {uni}
                                </span>
                            </div>
                        ))}
                        {[
                            "King Saud University", "King Abdulaziz University", "KFUPM",
                            "Imam University", "Umm Al-Qura", "Islamic University Madinah",
                            "Princess Nourah University", "King Faisal University", "Taibah University"
                        ].map((uni, index) => (
                            <div key={`dup-${index}`} className="mx-8 flex items-center justify-center">
                                <span className="text-2xl md:text-3xl font-bold text-emerald-400/80 uppercase tracking-tight">
                                    {uni}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
