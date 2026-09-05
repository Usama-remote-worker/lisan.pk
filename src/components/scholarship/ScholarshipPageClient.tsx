"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServicePackages } from "@/components/home/ServicePackages"
import { cn } from "@/lib/utils"

export default function ScholarshipPageClient() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Saudi Arabia Scholarship Consultancy & Document Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Lisan.pk",
                            "url": "https://www.lisan.pk"
                        },
                        "areaServed": "Pakistan",
                        "description": "Comprehensive consultancy for Saudi Arabia fully funded scholarships for Pakistani students: certified Arabic translation, document verification, Study in Saudi portal support, and university shortlisting.",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Saudi Scholarship Support Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Saudi Scholarship Document Translation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Saudi Scholarship Document Review & Verification"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Study in Saudi Portal Guidance"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "University & Program Shortlisting"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Complete Scholarship Application Assistance"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.lisan.pk"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Consultancy",
                                "item": "https://www.lisan.pk/consultancy/saudi-scholarship"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Saudi Scholarship 2026",
                                "item": "https://www.lisan.pk/consultancy/saudi-scholarship"
                            }
                        ]
                    }
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-10 lg:py-16 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800 mb-4 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                            Saudi Scholarship Applications Open September 16, 2026
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl mb-6 leading-tight">
                            Saudi Arabia Scholarship 2026 – <span className="text-emerald-600">Complete Support Guide</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Official Study in Saudi submission period: <strong>16 September – 6 October 2026</strong>. Prepare your certified Arabic translations, document reviews, and program shortlists before applications open.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923288155866?text=Hi%20Lisan.pk,%20I%20want%20to%20prepare%20my%20documents%20before%20Saudi%20scholarship%20applications%20open." target="_blank">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 text-lg shadow-xl">
                                    Prepare Documents Before Applications Open
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-white px-10 h-16 text-lg">
                                    Our Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="scholarships" className="py-20 container mx-auto px-4 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview of Saudi Scholarship Programs 2026</h2>
                        <div className="prose prose-slate prose-lg text-slate-600">
                            <p>
                                The Kingdom of Saudi Arabia (KSA) offers government-funded scholarship opportunities for international students across multiple Saudi universities at Bachelor’s, Master’s, and PhD levels.
                            </p>
                            <p>
                                Programs are available across Computer Science, Artificial Intelligence, Engineering, Business Administration, Natural Sciences, Humanities, Languages, and Islamic Studies. Admission criteria, language requirements, and funding details vary by institution and department.
                            </p>
                            <p>
                                A fully funded external scholarship typically covers tuition fees, monthly stipends, university housing, medical coverage, and travel benefits according to official regulations.
                            </p>
                        </div>
                        <div className="mt-6 p-5 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-sm">
                            <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                                Not sure which university or degree program matches your profile? Use our <Link href="/saudi-scholarships/program-finder" className="text-emerald-700 underline font-bold hover:text-emerald-900">Saudi Fully Funded Scholarship Program Finder</Link> to search Bachelor’s, Master’s and PhD opportunities by university, field and gender.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                        <img 
                            src="/images/saudi-scholarship-infographic.png" 
                            alt="Saudi scholarship for Pakistani students infographic" 
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Curated Resource Module */}
            <section className="py-12 bg-slate-900 text-white font-sans border-y border-slate-800">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/20">
                        Official Guidance Hub
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">EXPLORE SAUDI SCHOLARSHIP RESOURCES</h2>
                    <p className="text-slate-300 text-sm mb-8 max-w-2xl mx-auto">Access interactive tools, eligibility guides, roadmap benchmarks, and application review checklists prepared by our education consultants:</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                        <Link href="/saudi-scholarships/program-finder" className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all block group">
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Interactive Tool</span>
                            <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">Find Fully Funded Programs</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">Search 400+ verified programs by university, field & gender.</p>
                        </Link>
                        <Link href="/blog/saudi-scholarship-eligibility-pakistani-students" className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all block group">
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Eligibility Criteria</span>
                            <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">Check Your Eligibility</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">Review CGPA, age limits & Pakistani qualifications match.</p>
                        </Link>
                        <Link href="/blog/saudi-scholarship-complete-roadmap" className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all block group">
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Step-by-Step Guide</span>
                            <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">Complete Scholarship Roadmap</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">From document preparation to visa & arrival in KSA.</p>
                        </Link>
                        <Link href="/blog/saudi-scholarship-application-review-checklist" className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 hover:border-emerald-500 hover:bg-slate-800 transition-all block group">
                            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block mb-1">Submission Quality</span>
                            <h3 className="font-bold text-white text-base mb-1 group-hover:text-emerald-400 transition-colors">Application Checklist</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">25-point quality-control checks before hitting submit.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Eligibility Criteria Guidelines for Pakistani Students</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">General academic parameters vary by university and program. Review key guidelines before applying.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-xl mb-6">🎓</div>
                            <h3 className="text-xl font-bold mb-4">Academic Requirements</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>Marks requirements vary by program (typically 70%–80%+ for competitive admission).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>Academic background & CGPA thresholds depend on the target university and department.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>Degrees require verification; HEC and MOFA attestation are required during post-selection/visa processing.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center font-black text-xl mb-6">👥</div>
                            <h3 className="text-xl font-bold mb-4">Personal & Medical</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>General age guidelines: 17–25 (Bachelors), up to 30 (Masters), up to 35 (PhD).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>Applicant must have a clean criminal record & valid passport.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-500 mt-1 flex-shrink-0 font-bold text-sm">✓</span>
                                    <span>Medical fitness report is required during the educational visa stage.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Step-by-Step Process */}
            <ProcessSection />

            {/* The Conversion Bridge: Service Packages */}
            <div className="bg-slate-50 py-12">
                <ServicePackages />
            </div>

            {/* Required Documents Checklist */}
            <section id="documentation" className="py-20 bg-emerald-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">Required Documents Checklist</h2>
                            <Button className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold">Download PDF Checklist</Button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-emerald-400">Primary Documents</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>Passport (Valid for at least 1 year)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>Recent Passport Size Photos (White BG)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>CNIC or Form-B</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-emerald-400">Educational & Legal</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>Educational Degrees & Transcripts</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>Certified Arabic Translations of Records</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5 text-base">✓</span>
                                        <span>Police Character Certificate (if required)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/20 text-center">
                            <p className="text-emerald-50 mb-2">For a detailed breakdown of required documents and costs, read our comprehensive guide:</p>
                            <Link href="/blog/saudi-scholarship-application-cost-pakistan" className="text-white font-bold underline hover:text-emerald-200">
                                Saudi Scholarship Application Cost & Document Package Pricing – Pakistan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section id="universities" className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Prominent Saudi Universities</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">These institutions are part of the <strong>Saudi scholarship program</strong> for international applicants.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "King Saud University", city: "Riyadh", rank: "Riyadh", tags: ["Sciences", "Engineering"] },
                        { name: "King Abdulaziz University", city: "Jeddah", rank: "Jeddah", tags: ["Sciences", "Arts"] },
                        { name: "KFUPM", city: "Dhahran", rank: "Dhahran", tags: ["Petroleum", "Tech"] },
                        { name: "Islamic University of Madinah", city: "Madinah", rank: "Madinah", tags: ["Theology", "Law"] },
                        { name: "Princess Nourah University", city: "Riyadh", rank: "Women's Campus", tags: ["Social Work", "Admin"] },
                        { name: "King Faisal University", city: "Al-Ahsa", rank: "Al-Ahsa", tags: ["Research", "Biology"] }
                    ].map((uni, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-emerald-600 font-extrabold text-[10px] uppercase tracking-wider">KSA CAMPUS</span>
                                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{uni.rank}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">{uni.name}</h3>
                            <p className="text-slate-500 mb-6 font-medium">{uni.city}, Saudi Arabia</p>
                            <div className="flex flex-wrap gap-2">
                                {uni.tags.map(tag => (
                                    <span key={tag} className="text-[11px] font-bold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How Lisan Can Help */}
            <section id="support" className="py-24 bg-emerald-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-emerald-100">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-3xl flex items-center justify-center font-black text-3xl shrink-0">✓</div>
                            <h2 className="text-3xl font-bold text-slate-900">How Lisan Can Help You (Our Consultancy)</h2>
                        </div>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            At Lisan.pk, we provide independent certified translation, document review, and application-support services for <strong>Pakistani students applying for Saudi scholarships</strong>. We assist Bachelor, Master, and PhD applicants through two structured service levels:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 space-y-4">
                                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Package 1</span>
                                <h4 className="font-bold text-slate-900 text-xl">Documents & Translation Support</h4>
                                <p className="text-sm text-slate-600">Essential document preparation for Bachelor, Master & PhD applicants handling their own portal submission.</p>
                                <ul className="space-y-2 text-slate-700 text-sm">
                                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Degree-Specific Document Checklist</li>
                                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Certified Arabic Document Translation</li>
                                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Name/Date/Spelling Consistency Review</li>
                                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Attestation Guidance (HEC/MOFA)</li>
                                    <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Portal-Ready PDF File Preparation</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 space-y-4 shadow-lg">
                                <span className="inline-block bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Package 2</span>
                                <h4 className="font-bold text-white text-xl">Complete Application Support</h4>
                                <p className="text-sm text-slate-300">End-to-end guidance for Bachelor, Master & PhD applicants through profile assessment, shortlisting, and final review.</p>
                                <ul className="space-y-2 text-slate-200 text-sm">
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Includes Everything in Package 1</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Profile & Eligibility Assessment</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> University & Program Research & Shortlisting</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Study in Saudi Portal Guidance</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Document Upload & Application Guidance</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Final Application & Document Review</li>
                                    <li className="flex gap-2"><span className="text-emerald-400 font-bold">✓</span> Post-Submission Guidance</li>
                                </ul>
                            </div>
                        </div>
                        <Link href="https://wa.me/923288155866?text=Hi%20Lisan.pk,%20I%20want%20guidance%20on%20preparing%20my%20Saudi%20Scholarship%20application." target="_blank" className="block text-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full h-16 text-xl rounded-2xl shadow-lg">
                                Prepare Your Application With Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="visa" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is the monthly stipend for Saudi scholarship?", a: "Stipends vary by university and degree level. Full scholarships generally provide monthly stipends (typically ~840 SAR for Bachelors, ~900-1,000 SAR for Master's/PhD), plus book or thesis allowances where applicable." },
                            { q: "Can I work while on a Saudi scholarship?", a: "No, full scholarships are designed for full-time study, and international students are generally not permitted to work off-campus." },
                            { q: "Is IELTS required for Saudi scholarship?", a: "Language requirements depend on the university and program. Programs taught in Arabic or Islamic studies usually do not require IELTS, whereas STEM and English-medium programs may require IELTS, TOEFL, STEP, or an English MOI certificate depending on department policy." },
                            { q: "How to apply for Saudi scholarship from Pakistan?", a: "During the official submission period (September 16 – October 6, 2026), candidates submit their profile and academic program choices on the official Study in Saudi portal at studyinsaudi.moe.gov.sa." },
                            { q: "Does the scholarship cover airfare?", a: "Full external scholarships typically include annual travel benefits according to official regulations, such as a return economy ticket. Specific terms vary by university." },
                            { q: "What documents are needed for Saudi student visa process?", a: "Required visa documents include your scholarship acceptance letter, attested educational certificates, medical report, clean police character record, and valid passport." },
                            { q: "Are Saudi degrees recognized in Pakistan?", a: "Yes, degrees from accredited Saudi universities are recognized by HEC Pakistan and globally for higher education and career opportunities." },
                            { q: "Can female students apply for Saudi scholarships?", a: "Yes! Dedicated women's institutions like Princess Nourah University and co-educational campuses across top Saudi universities offer scholarship opportunities for female candidates." },
                            { q: "What is the age limit for PhD applicants?", a: "General Ministry parameters state PhD applicants should be under 35 years of age, though exact age thresholds can vary by institution." },
                            { q: "How long does the attestation process take?", a: "Attestation timing depends on the relevant Pakistani authorities (BISE/HEC/MOFA). LISAN.PK provides guidance and certified translation to ensure compliance when your documents reach the attestation stage." }
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-slate-100 pb-6">
                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex gap-3">
                                    <span className="text-emerald-600 font-extrabold flex-shrink-0">Q.</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <p className="text-emerald-900 font-semibold mb-3">Explore our complete 2026/27 Saudi Scholarship authority guides and roadmap:</p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm">
                            <Link href="/blog/saudi-scholarship-complete-roadmap" className="text-emerald-800 font-bold hover:underline bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                🗺️ Complete Saudi Scholarship Roadmap 2026/27
                            </Link>
                            <Link href="/blog/saudi-fully-funded-scholarship-programs-2026" className="text-emerald-800 font-bold hover:underline bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                🎓 Fully Funded Programs Catalog
                            </Link>
                            <Link href="/blog/saudi-scholarship-eligibility-pakistani-students" className="text-emerald-800 font-bold hover:underline bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                📋 Eligibility Criteria
                            </Link>
                            <Link href="/blog/saudi-scholarship-without-ielts" className="text-emerald-800 font-bold hover:underline bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                🌐 Scholarship Without IELTS
                            </Link>
                            <Link href="/blog/study-in-saudi-portal-problems-errors" className="text-emerald-800 font-bold hover:underline bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-sm">
                                🛠️ Portal Error Fixes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal & Affiliation Disclaimer */}
            <section className="py-12 bg-slate-100 border-t border-slate-200 text-slate-600 text-xs">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <p className="leading-relaxed">
                        <strong>Disclaimer:</strong> LISAN.PK provides independent document translation, verification, and application-support services in Pakistan. LISAN.PK is not affiliated with the Saudi Ministry of Education, the Study in Saudi portal (`studyinsaudi.moe.gov.sa`), or any Saudi university. Admission, scholarship selection, and visa approval decisions are made exclusively by official Saudi government authorities and university admission boards. LISAN.PK does not control scholarship decisions or guarantee admission.
                    </p>
                </div>
            </section>
        </main>
    )
}

function ProcessSection() {
    const [activeStep, setActiveStep] = useState(0)

    const steps = [
        { 
            id: "01", 
            title: "Research & Selection", 
            subtitle: "1-2 WEEKS", 
            desc: "Research HEC recognized Saudi universities and select a program that aligns with your background. Note the specific deadlines for the 2026 cycle.",
            phase: "PHASE 01 — RESEARCH"
        },
        { 
            id: "02", 
            title: "Document Attestation", 
            subtitle: "2-4 WEEKS", 
            desc: "All degrees and transcripts must be translated into Arabic by a certified service like Lisan.pk and attested by HEC, MOFA, and the Saudi Culture office.",
            phase: "PHASE 02 — LEGALIZATION"
        },
        { 
            id: "03", 
            title: "Portal Submission", 
            subtitle: "1 WEEK", 
            desc: "Register on the 'Study in Saudi' portal or the specific university's admission website. Fill in all details with precision—errors here can lead to permanent rejection.",
            phase: "PHASE 03 — APPLICATION"
        },
        { 
            id: "04", 
            title: "Recommendation & SOP", 
            subtitle: "2 WEEKS", 
            desc: "Gather 2-3 recommendation letters from your previous professors. Write a compelling Statement of Purpose (SOP) explaining why you deserve the Saudi scholarship.",
            phase: "PHASE 04 — STRATEGY"
        },
        { 
            id: "05", 
            title: "Interview Prep", 
            subtitle: "1 WEEK", 
            desc: "Some universities conduct online interviews via Zoom or Skype. Prepare to discuss your research interests and your knowledge of Saudi culture.",
            phase: "PHASE 05 — EVALUATION"
        },
        { 
            id: "06", 
            title: "Visa Processing", 
            subtitle: "2-3 WEEKS", 
            desc: "Once you receive the 'Initial Acceptance', we assist you with the Saudi student visa process, including embassy submission and medical verification.",
            phase: "PHASE 06 — EMBASSY"
        },
        { 
            id: "07", 
            title: "Departure to KSA", 
            subtitle: "ONGOING", 
            desc: "Book your flights (usually provided by the university) and prepare for your journey to the Kingdom of Saudi Arabia!",
            phase: "PHASE 07 — SUCCESS"
        }
    ]

    return (
        <section id="process" className="py-24 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4 font-sans">
                        <div className="h-[1px] w-8 bg-slate-200"></div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Our Process</span>
                        <div className="h-[1px] w-8 bg-slate-200"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">Your Journey With Us</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        A structured approach that ensures your application is handled with precision, 
                        authority, and technical compliance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4 space-y-2 relative">
                        {/* Vertical line connector */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-slate-100 -z-0"></div>
                        
                        {steps.map((step, index) => (
                            <button
                                onClick={() => setActiveStep(index)}
                                className={cn(
                                    "w-full flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 relative z-10",
                                    activeStep === index 
                                        ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100 translate-x-2" 
                                        : "hover:bg-slate-50 border border-transparent"
                                )}
                                key={step.id}
                            >
                                <div className={cn(
                                    "w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border-2 font-black text-sm",
                                    activeStep === index 
                                        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200/50" 
                                        : "bg-white border-slate-100 text-slate-400"
                                )}>
                                    {step.id}
                                </div>
                                <div className="text-left">
                                    <h4 className={cn(
                                        "font-bold transition-colors",
                                        activeStep === index ? "text-emerald-700" : "text-slate-500"
                                    )}>{step.title}</h4>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{step.subtitle}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Main Detail Card */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-2xl shadow-slate-200/40 relative overflow-hidden h-full min-h-[500px] flex flex-col justify-center font-sans"
                            >
                                {/* Background Large Number */}
                                <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-slate-50/50 leading-none select-none pointer-events-none -z-0">
                                    {steps[activeStep].id.replace(/^0/, '')}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-10 border border-emerald-100 shadow-sm font-black text-2xl text-emerald-600 select-none">
                                        {steps[activeStep].id}
                                    </div>

                                    <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-black text-emerald-700 uppercase tracking-widest mb-8">
                                        {steps[activeStep].phase}
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight font-serif">
                                        {steps[activeStep].title}
                                    </h3>

                                    <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                                        {steps[activeStep].desc}
                                    </p>

                                    {/* Progress indicator dots */}
                                    <div className="flex gap-2 mt-12">
                                        {steps.map((_, i) => (
                                            <div 
                                                key={i} 
                                                className={cn(
                                                    "h-1.5 rounded-full transition-all duration-300",
                                                    i === activeStep ? "w-8 bg-emerald-600" : "w-1.5 bg-slate-200"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
