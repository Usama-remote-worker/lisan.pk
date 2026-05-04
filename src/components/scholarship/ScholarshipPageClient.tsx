"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight, FileText, GraduationCap, MapPin, Globe, ShieldCheck, HelpCircle, ExternalLink, Clock, Users, BookOpen, Search, PenTool, Video, Plane } from "lucide-react"
import { JsonLd } from "@/components/seo/JsonLd"
import { ServicePackages } from "@/components/home/ServicePackages"
import { cn } from "@/lib/utils"

export default function ScholarshipPageClient() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Saudi Scholarship Consultancy for Pakistani Students",
                    "provider": {
                        "@type": "Organization",
                        "name": "Lisan.pk"
                    },
                    "areaServed": "Pakistan",
                    "description": "Expert consultancy for Saudi scholarship for Pakistani students 2026. Documentation, attestation, and application support."
                }}
            />

            {/* Hero Section */}
            <section className="relative py-10 lg:py-16 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-800 mb-4 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                            2026–2027 Admissions Now Open
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl mb-6 leading-tight">
                            Saudi Arabia Scholarship 2026 – <span className="text-emerald-600">Complete Guide</span> for Pakistani Students
                        </h1>
                        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Securing a <strong>Saudi scholarship for Pakistani students</strong> is a life-changing opportunity. This comprehensive guide covers everything from eligibility to the final student visa process.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20Saudi%20Scholarship%20consultancy." target="_blank">
                                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 text-lg shadow-xl">
                                    Book Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
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
            <section className="py-20 container mx-auto px-4 max-w-5xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview of Saudi Scholarship Programs 2026</h2>
                        <div className="prose prose-slate prose-lg text-slate-600">
                            <p>
                                The Kingdom of Saudi Arabia (KSA) has significantly expanded its educational outreach under Vision 2030. For the 2026–2027 academic year, the Saudi government is offering thousands of <strong>fully funded scholarships for Pakistani students</strong> across 25+ top-tier universities.
                            </p>
                            <p>
                                These scholarships are not limited to Islamic studies; they cover Medicine, Engineering, Artificial Intelligence, Business Administration, and Social Sciences. The goal is to foster international academic collaboration and provide world-class education to deserving students from brotherly nations like Pakistan.
                            </p>
                            <p>
                                A <strong>Saudi Arabia scholarship 2026</strong> typically covers 100% of tuition fees, monthly stipends, free housing, medical insurance, and annual return airfare to Pakistan.
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

            {/* Eligibility Criteria */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Eligibility Criteria for Pakistani Students</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">Ensuring you meet these basic requirements is the first step toward a successful application.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <GraduationCap className="w-12 h-12 text-emerald-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Academic Requirements</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Minimum 80% marks in Matric/FSc for Bachelors.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Strong CGPA (3.0+) for Masters and PhD programs.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Degrees must be verified by <Link href="https://www.hec.gov.pk" target="_blank" className="text-emerald-700 underline">HEC</Link> and MOFA.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <Users className="w-12 h-12 text-emerald-600 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Personal & Medical</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Age limit: 17-25 (Bachelors), under 30 (Masters), under 35 (PhD).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Applicant must have a clean criminal record.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span>Medical fitness certificate is mandatory.</span>
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
            <section className="py-20 bg-emerald-900 text-white">
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
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>Passport (Valid for at least 1 year)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>Recent Passport Size Photos (White BG)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>CNIC or Form-B</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-emerald-400">Educational & Legal</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>Attested Educational Degrees (HEC/MOFA)</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>Certified Arabic Translations of Degrees</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-white" /></div>
                                        <span>Police Character Certificate</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/20 text-center">
                            <p className="text-emerald-50 mb-2">For a detailed breakdown of required documents and costs, read our comprehensive guide:</p>
                            <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-white font-bold underline hover:text-emerald-200">
                                Arabic Translation Services for Saudi Scholarship Documents – Pakistan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Top HEC Recognized Saudi Universities</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">These institutions are part of the <strong>fully funded scholarship Saudi</strong> initiative.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: "King Saud University", city: "Riyadh", rank: "#1 in KSA", tags: ["Medicine", "Engineering"] },
                        { name: "King Abdulaziz University", city: "Jeddah", rank: "#1 in Arab World", tags: ["Sciences", "Arts"] },
                        { name: "KFUPM", city: "Dhahran", rank: "Top 200 Global", tags: ["Petroleum", "Tech"] },
                        { name: "Islamic University of Madinah", city: "Madinah", rank: "Legacy Education", tags: ["Theology", "Law"] },
                        { name: "Princess Nourah University", city: "Riyadh", rank: "Largest Women Uni", tags: ["Social Work", "Admin"] },
                        { name: "King Faisal University", city: "Al-Ahsa", rank: "Agriculture & Vet", tags: ["Research", "Biology"] }
                    ].map((uni, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <MapPin className="w-8 h-8 text-emerald-600" />
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
            <section className="py-24 bg-emerald-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-emerald-100">
                        <div className="flex items-center gap-6 mb-8">
                            <ShieldCheck className="w-16 h-16 text-emerald-600" />
                            <h2 className="text-3xl font-bold text-slate-900">How Lisan Can Help You (Our Consultancy)</h2>
                        </div>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            At Lisan.pk, we have over 40 years of experience in facilitating <strong>Saudi scholarship for Pakistani students</strong>. We are not just consultants; we are your bridge to a brighter future in the Kingdom. Our specialized services include:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-4">
                                <h4 className="font-bold text-emerald-900">Technical Support</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><span>•</span> Certified Arabic Document Translation</li>
                                    <li className="flex gap-2"><span>•</span> HEC, MOFA & Saudi Culture Attestation</li>
                                    <li className="flex gap-2"><span>•</span> Portal Registration & Profile Building</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-emerald-900">Strategic Support</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><span>•</span> Personal Statement (SOP) Optimization</li>
                                    <li className="flex gap-2"><span>•</span> Interview Preparation & Mock Sessions</li>
                                    <li className="flex gap-2"><span>•</span> Full Student Visa Process Assistance</li>
                                </ul>
                            </div>
                        </div>
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20Saudi%20Scholarship%20consultancy." target="_blank" className="block text-center">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full h-16 text-xl rounded-2xl shadow-lg">
                                Start Your Application Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is the monthly stipend for Saudi scholarship?", a: "Undergraduate students typically receive 840 SAR per month, while Master's and PhD candidates receive between 900 and 1,000 SAR, plus specialized research and book allowances." },
                            { q: "Can I work while on a Saudi scholarship?", a: "No, the scholarship is fully funded, and international students are generally not permitted to work outside the campus. However, some universities offer internal part-time research or administrative roles." },
                            { q: "Is IELTS required for Saudi scholarship?", a: "For Islamic studies and Arabic literature, IELTS is usually not required. However, for STEM and Engineering programs taught in English, most universities require an IELTS score of 6.0 or higher." },
                            { q: "How to apply for Saudi scholarship from Pakistan?", a: "You must register on the 'Study in Saudi' centralized portal or visit the specific admission website of universities like KSU or KAU during the 2026 cycle." },
                            { q: "Does the scholarship cover airfare?", a: "Yes, fully funded scholarships include an annual return economy-class ticket to Pakistan for the student during summer holidays." },
                            { q: "What documents are needed for Saudi student visa process?", a: "You will need your scholarship acceptance letter, attested educational documents, a medical report verified by the embassy, and a valid passport." },
                            { q: "Are Saudi degrees recognized in Pakistan?", a: "Yes, degrees from HEC recognized Saudi universities are fully valid in Pakistan and globally for employment and further education." },
                            { q: "Can female students apply for Saudi scholarships?", a: "Yes! There are dedicated universities for women like Princess Nourah, and most top universities have separate, state-of-the-art campuses for female students." },
                            { q: "What is the age limit for PhD applicants?", a: "Generally, PhD applicants should be under 35 years of age at the time of application." },
                            { q: "How long does the attestation process take?", a: "The complete attestation (HEC -> MOFA -> Culture -> Embassy) typically takes 3-4 weeks. Lisan.pk can expedite this for scholarship applicants." }
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-slate-100 pb-6">
                                <h4 className="text-lg font-bold text-slate-900 mb-3 flex gap-3">
                                    <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <p className="text-emerald-900 font-semibold mb-2">Need a sample of a certified translation and attestation process?</p>
                        <Link href="/blog/arabic-translation-services-saudi-scholarship-pakistan" className="text-emerald-700 font-bold hover:underline flex justify-center items-center gap-2">
                            Check out our blog post on Saudi Scholarship Document Translation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Linking Footer */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 font-medium mb-6">Learn more about our expertise:</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/" className="text-emerald-700 hover:underline font-bold">Home</Link>
                        <Link href="/services" className="text-emerald-700 hover:underline font-bold">Translation Services</Link>
                        <Link href="/blog" className="text-emerald-700 hover:underline font-bold">Scholarship Blog</Link>
                        <Link href="/contact" className="text-emerald-700 hover:underline font-bold">Contact Us</Link>
                    </div>
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
            icon: Search,
            phase: "PHASE 01 — RESEARCH"
        },
        { 
            id: "02", 
            title: "Document Attestation", 
            subtitle: "2-4 WEEKS", 
            desc: "All degrees and transcripts must be translated into Arabic by a certified service like Lisan.pk and attested by HEC, MOFA, and the Saudi Culture office.",
            icon: ShieldCheck,
            phase: "PHASE 02 — LEGALIZATION"
        },
        { 
            id: "03", 
            title: "Portal Submission", 
            subtitle: "1 WEEK", 
            desc: "Register on the 'Study in Saudi' portal or the specific university's admission website. Fill in all details with precision—errors here can lead to permanent rejection.",
            icon: Globe,
            phase: "PHASE 03 — APPLICATION"
        },
        { 
            id: "04", 
            title: "Recommendation & SOP", 
            subtitle: "2 WEEKS", 
            desc: "Gather 2-3 recommendation letters from your previous professors. Write a compelling Statement of Purpose (SOP) explaining why you deserve the Saudi scholarship.",
            icon: PenTool,
            phase: "PHASE 04 — STRATEGY"
        },
        { 
            id: "05", 
            title: "Interview Prep", 
            subtitle: "1 WEEK", 
            desc: "Some universities conduct online interviews via Zoom or Skype. Prepare to discuss your research interests and your knowledge of Saudi culture.",
            icon: Video,
            phase: "PHASE 05 — EVALUATION"
        },
        { 
            id: "06", 
            title: "Visa Processing", 
            subtitle: "2-3 WEEKS", 
            desc: "Once you receive the 'Initial Acceptance', we assist you with the Saudi student visa process, including embassy submission and medical verification.",
            icon: Plane,
            phase: "PHASE 06 — EMBASSY"
        },
        { 
            id: "07", 
            title: "Departure to KSA", 
            subtitle: "ONGOING", 
            desc: "Book your flights (usually provided by the university) and prepare for your journey to the Kingdom of Saudi Arabia!",
            icon: MapPin,
            phase: "PHASE 07 — SUCCESS"
        }
    ]

    const ActiveIcon = steps[activeStep].icon

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[1px] w-8 bg-slate-200"></div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em]">Our Process</span>
                        <div className="h-[1px] w-8 bg-slate-200"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">Your Journey With Us</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        A structured approach that ensures your application is handled with precision, 
                        authority, and a 100% success mindset.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4 space-y-2 relative">
                        {/* Vertical line connector */}
                        <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-slate-100 -z-0"></div>
                        
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={cn(
                                    "w-full flex items-center gap-6 p-4 rounded-2xl transition-all duration-300 relative z-10",
                                    activeStep === index 
                                        ? "bg-white shadow-xl shadow-slate-200/50 border border-slate-100 translate-x-2" 
                                        : "hover:bg-slate-50 border border-transparent"
                                )}
                            >
                                <div className={cn(
                                    "w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border-2",
                                    activeStep === index 
                                        ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200/50" 
                                        : "bg-white border-slate-100 text-slate-400"
                                )}>
                                    <step.icon className="w-6 h-6" />
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
                                className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-100 shadow-2xl shadow-slate-200/40 relative overflow-hidden h-full min-h-[500px] flex flex-col justify-center"
                            >
                                {/* Background Large Number */}
                                <div className="absolute -bottom-10 -right-10 text-[20rem] font-black text-slate-50/50 leading-none select-none pointer-events-none -z-0">
                                    {steps[activeStep].id.replace(/^0/, '')}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-10 border border-emerald-100 shadow-sm">
                                        <ActiveIcon className="w-10 h-10 text-emerald-600" />
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
