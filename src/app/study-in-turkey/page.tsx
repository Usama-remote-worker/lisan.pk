import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/turkey/LeadForm"
import { ExitPopup } from "@/components/turkey/ExitPopup"
import { StickyMobileCTA } from "@/components/turkey/StickyMobileCTA"
import { ServicePackages } from "@/components/home/ServicePackages"
import { UniversitySection } from "@/components/turkey/UniversitySection"
import { TurkeyFaq } from "@/components/turkey/TurkeyFaq"

export const metadata: Metadata = {
    title: "Study in Turkey from Pakistan 2026 | Direct Admission Consultants | Lisan.pk",
    description: "Apply for affordable, direct affiliated universities in Turkey with guaranteed admission routes. Minimal documentation, physical office inside Yozgat Technopark Turkey, and on-ground student support. No IELTS required option.",
    alternates: {
        canonical: "https://www.lisan.pk/study-in-turkey",
    },
}

export default function StudyInTurkeyHub() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can Pakistani students study in Turkey without IELTS?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Many private Turkish universities accept an official English Medium of Instruction Certificate issued by your high school or college in Pakistan, completely waving the IELTS requirement."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum percentage required for admission in Turkey?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pakistani students need a minimum of 50% marks in their Intermediate or equivalent High School transcripts to qualify for guaranteed admission in our direct affiliated partner universities."
                }
            },
            {
                "@type": "Question",
                "name": "What is the average cost / tuition fee for universities in Turkey?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tuition fees for English-taught Bachelor's programs range from $1,800 to $4,500 per year. Dentistry programs typically cost around $12,000 per year. Scholarships up to 50% are automatically integrated through Lisan.pk."
                }
            },
            {
                "@type": "Question",
                "name": "Is there on-ground support for Pakistani students in Turkey?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Lisan.pk features a physical operational office inside Yozgat Bozok Technopark, Turkey. Our local team coordinates airport pickups, dormitory allocations, health insurance setup, and residence permit (İkamet) registrations."
                }
            },
            {
                "@type": "Question",
                "name": "How long does the admission and visa processing take?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our conditional admission offers are secured in 3-5 working days. The visa issuance window at the Turkish embassy in Pakistan generally takes between 3 to 6 weeks."
                }
            }
        ]
    }

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.lisan.pk#organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": "https://www.lisan.pk/logo-icon-white.svg",
        "description": "Pakistan's most trusted Arabic translation and international education consultancy platform. 40+ years of excellence led by MA Arabic & Islamiyat qualified experts.",
        "telephone": "+923044296295",
        "email": "lisan.pk.services@gmail.com",
        "foundingDate": "1984",
        "founder": {
            "@type": "Person",
            "name": "Muhammad Iftikhar Zahid",
            "jobTitle": "Founder & Head Translator",
            "knowsAbout": ["Arabic Translation", "MOFA Attestation", "Saudi University Admissions", "International Education Consultancy"]
        },
        "areaServed": "PK",
        "sameAs": [
            "https://wa.me/923044296295"
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.lisan.pk/study-in-turkey#turkey-hub",
        "name": "Lisan.pk Study in Turkey Admissions Hub",
        "image": "https://www.lisan.pk/images/blog/saudi-scholarship-certified-arabic-translation.png",
        "telephone": "+923044296295",
        "email": "lisan.pk.services@gmail.com",
        "parentOrganization": {
            "@id": "https://www.lisan.pk#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bozok Technopark, Yozgat Bozok University Campus",
            "addressLocality": "Yozgat",
            "addressCountry": "TR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "39.79796",
            "longitude": "34.79634"
        }
    }

    return (
        <main className="min-h-screen bg-white pt-24 overflow-x-hidden font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            
            <ExitPopup />
            <StickyMobileCTA />

            {/* 1. HERO SECTION */}
            <section className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        
                        {/* Hero Copy */}
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mx-auto lg:mx-0 shadow-inner">
                                Direct Admissions Partner
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif leading-[1.1] text-slate-100">
                                Study abroad from Pakistan to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 font-extrabold">Turkey Universities</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                                Unlock guaranteed Turkey admission paths at top foundation and private campuses. Get certified scholarship packages directly with zero hidden agent fees.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 pt-4 max-w-xl mx-auto lg:mx-0">
                                {[
                                    { title: "Physical Turkey HQ", desc: "Technopark registered desk" },
                                    { title: "Up to 75% Scholarships", desc: "Automatic fee reductions" },
                                    { title: "No IELTS Mandatory", desc: "English Medium accepted" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center shadow-md">
                                        <h4 className="font-extrabold text-emerald-400 text-sm">{item.title}</h4>
                                        <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-400 pt-2 font-sans">
                                <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-extrabold">✓</span> 100% Direct Verification</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-extrabold">✓</span> Airport Pickup Teams</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><span className="text-emerald-500 font-extrabold">✓</span> Ministry Recognized</span>
                            </div>
                        </div>

                        {/* Interactive Lead Capture Form */}
                        <div id="turkey-lead-form" className="lg:col-span-5 w-full max-w-md mx-auto relative z-20">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST / STATS INDICATORS */}
            <section className="py-12 bg-slate-50 border-b border-slate-200/60">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-sans">
                        {[
                            { val: "50+", label: "Turkey Universities" },
                            { val: "Bozok Tech", label: "Registered Turkey HQ" },
                            { val: "3-5 Days", label: "Acceptance Letter Speed" },
                            { val: "Bologna", label: "EU Degree Equivalency" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <p className="text-3xl md:text-4xl font-black text-slate-900 font-serif">{stat.val}</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHY STUDY IN TURKEY */}
            <section className="py-24 container mx-auto px-4 max-w-6xl font-sans">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 text-emerald-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/10">
                        High EEAT Standards
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                        Why Choose Study in Turkey?
                    </h2>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Turkey has quickly risen as a premier global hub for international scholars, offering premium European-standard training models without complex entrance tests.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Internationally Recognized",
                            desc: "Diplomas hold direct Bologna Process integration, making credit transfers to Europe, US, or Gulf countries seamless.",
                            tag: "Global Degree"
                        },
                        {
                            title: "No IELTS Compulsory",
                            desc: "Bypass costly exam routines. Many private campuses accept high school English proficiency certificates.",
                            tag: "Zero Exam stress"
                        },
                        {
                            title: "Affordable Tuitions",
                            desc: "Enjoy top-tier private university standards starting from only $1,800 per year, far more budget-friendly than Europe.",
                            tag: "Saves up to 60%"
                        },
                        {
                            title: "On-Ground Trust Desk",
                            desc: "Our registered operational office is located inside Yozgat Technopark, Turkey, ensuring 100% safe verified enrollments.",
                            tag: "Physical Security"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 flex flex-col justify-between hover:shadow-lg transition-all group">
                            <div className="space-y-3">
                                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                                    {item.tag}
                                </span>
                                <h4 className="text-lg font-black text-slate-950 group-hover:text-emerald-700 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#turkey-lead-form">
                        <Button className="h-12 bg-slate-900 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all shadow-md">
                            Check My Eligibility Now
                        </Button>
                    </a>
                </div>
            </section>

            {/* 4. DYNAMIC UNIVERSITY MATRIX SHOWCASE */}
            <UniversitySection />

            {/* 5. HOT PROGRAMS SECTION */}
            <section id="tuition" className="py-24 bg-white border-b border-slate-200/60 font-sans">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 text-emerald-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/10">
                            Dynamic Specializations
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                            Popular English-Taught Programs
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                            Select specialized disciplines taught entirely in English, featuring modern, hands-on lab environments and globally accepted degree models.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Health Sciences & Dentistry",
                                desc: "Highly premium medical & dental degrees featuring Taksim/Istanbul simulator labs with direct European clinical equivalency.",
                                list: ["Doctor of Dentistry (DDS)", "Nursing & Midwifery", "Pharmacy (Pharm.D)"],
                                cost: "Cost: $4,000 - $12,000 / year"
                            },
                            {
                                title: "Engineering & Technology",
                                desc: "Practical computer labs operating under global tech incubators, ideal for software developers and research engineers.",
                                list: ["Computer Engineering", "Software Engineering", "Artificial Intelligence"],
                                cost: "Cost: $2,000 - $3,500 / year"
                            },
                            {
                                title: "Business & Gastronomy",
                                desc: "Focuses on active career tracks, featuring state-of-the-art culinary art academies and corporate management systems.",
                                list: ["Gastronomy & Culinary Arts", "Business Administration", "International Trade"],
                                cost: "Cost: $1,800 - $3,000 / year"
                            }
                        ].map((pkg, idx) => (
                            <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-[2.2rem] p-8 flex flex-col justify-between shadow-sm hover:scale-[1.01] transition-transform">
                                <div className="space-y-6">
                                    <h4 className="text-xl font-black text-slate-900 font-serif leading-snug">
                                        {pkg.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {pkg.desc}
                                    </p>
                                    
                                    <div className="border-t border-slate-200/60 pt-4 space-y-2">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Major Options:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {pkg.list.map((item, i) => (
                                                <span key={i} className="px-3 py-1 bg-white border border-slate-200/80 rounded-lg text-[10px] font-bold text-slate-700">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-slate-200/60 pt-4 mt-8 flex justify-between items-center">
                                    <span className="text-xs font-black text-emerald-700">{pkg.cost}</span>
                                    <Link href="#turkey-lead-form">
                                        <button className="text-xs font-extrabold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                                            Apply Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. STEP-BY-STEP ADMISSION PROCESS */}
            <section id="process" className="py-24 bg-white font-sans border-b border-slate-200/60">
                <div className="container mx-auto px-4 max-w-6xl space-y-16">
                    
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 text-emerald-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/10">
                            Step-by-Step Pathway
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                            Simple Step-by-Step Enrollment Flow
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                            Experience a completely optimized, guided registration. No confusing virtual channels or missing records.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Left Side: Step-by-Step Flow (7 cols) */}
                        <div className="lg:col-span-7 space-y-8">
                            <h3 className="text-2xl font-black text-slate-900 font-serif flex items-center gap-2">
                                Admission Journey Map
                            </h3>
                            
                            <div className="relative border-l border-slate-100 pl-6 ml-3 space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Submit Initial Documents",
                                        desc: "Share your high school diploma / Intermediate marksheets and basic info. No application fee is required to initiate the process."
                                    },
                                    {
                                        step: "02",
                                        title: "Direct Campus Verification",
                                        desc: "Our on-ground Technopark team submits credentials directly to your selected Turkish university's international relations portal."
                                    },
                                    {
                                        step: "03",
                                        title: "Conditional Acceptance (CAL)",
                                        desc: "Secure your official conditional admission letter and certified scholarship rate directly on the invoice within 3 to 5 business days."
                                    },
                                    {
                                        step: "04",
                                        title: "Embassy Visa & Settle-In",
                                        desc: "Lisan.pk provides complete verified translation files for embassy submission, coordinates airport reception, dorm bookings, and residency setup."
                                    }
                                ].map((step, idx) => (
                                    <div key={idx} className="relative group">
                                        <span className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-[10px] font-black text-white border-4 border-white shadow-sm group-hover:bg-emerald-700 transition-colors">
                                            {step.step}
                                        </span>
                                        
                                        <div className="space-y-1">
                                            <h4 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                                                {step.title}
                                            </h4>
                                            <p className="text-slate-500 text-xs leading-relaxed max-w-xl">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <a href="#turkey-lead-form">
                                    <Button className="h-12 bg-slate-900 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all flex items-center justify-center gap-2">
                                        Initiate Free Application
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Required Documents Checklist (5 cols) */}
                        <div id="documentation" className="lg:col-span-5 space-y-8">
                            
                            <div className="bg-slate-900 text-white rounded-[2rem] p-8 border border-slate-800 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                
                                <h3 className="text-xl font-black mb-1 font-serif text-white flex items-center gap-2">
                                    Initially Required Documents
                                </h3>
                                <p className="text-[10px] text-slate-400 mb-6 uppercase tracking-wider font-extrabold">No initial embassy attestations needed</p>
                                
                                <ul className="space-y-3.5">
                                    {[
                                        "Valid Passport Copy (Clear scan of photo & data page)",
                                        "Matriculation (Secondary) Result / Certificate",
                                        "Intermediate (Higher Secondary) Result / Certificate",
                                        "Passport Size Photograph (Plain white background)",
                                        "Mother's Maiden Name (Required for portal registration)"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 leading-relaxed font-semibold">
                                            <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-slate-50 border border-slate-200/60 rounded-[2rem] p-8 space-y-6">
                                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Exclusive 2026 Intake Highlights</h4>
                                
                                <div className="space-y-4">
                                    {[
                                        { title: "World-Class Campuses", text: "Degrees completely recognized across EU, US, and Middle East under Bologna equivalency." },
                                        { title: "No IELTS Mandatory", text: "Avoid exam stress and charges; official English medium certification is fully accepted." },
                                        { title: "No Entrance Exams", text: "Secure admission into elite engineering, medical, or business tracks solely with high school records." },
                                        { title: "100% Free Processing", text: "Zero tuition markups, zero agency charges, and zero processing fees from start to finish." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-[10px] shrink-0 mt-0.5">
                                                ✓
                                            </div>
                                            <div>
                                                <h5 className="font-extrabold text-slate-900 text-xs">{item.title}</h5>
                                                <p className="text-slate-500 text-[10px] leading-relaxed mt-0.5">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 7. SCHOLARSHIPS & COSTS SECTION */}
            <section id="scholarships" className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans border-b border-slate-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/20 via-slate-950 to-slate-950 z-0"></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/20">
                                Flat Scholarship waivers
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black font-serif leading-tight">
                                Premium Turkish Scholarships Up to 75% On-The-Spot
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                                No complex merit exams or highly competitive score structures required. Direct affiliated private campuses integrate flat scholarship waivers directly onto your tuition invoice sheets, secured completely via Lisan.pk.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Flat 50% discount automatically applied upon credential verification.",
                                    "Specialized medicine, dental, and health sciences partner rates.",
                                    "No tuition fees markups or premium add-ons—transparent direct invoicing.",
                                    "100% FREE application processing with zero hidden consultancy costs."
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-sm">
                                        <span className="text-emerald-400 font-extrabold shrink-0 mt-0.5">✓</span>
                                        <span className="text-slate-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Guaranteed placement window</h4>
                            <h3 className="text-2xl font-black font-serif">Secure Acceptance and Scholarship Guidance Today</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Seat quotas for active English-medium tracks fill exceptionally fast. Start your direct evaluation now with our Technopark verified desk.
                            </p>
                            <div className="pt-4 space-y-3">
                                <a href="#turkey-lead-form" className="block">
                                    <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all">
                                        Get Scholarship Guidance
                                    </Button>
                                </a>
                                <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20want%20to%20get%20Turkish%20Scholarship%20guidance." target="_blank" className="block">
                                    <Button variant="ghost" className="w-full h-12 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-xl">
                                        Consult on WhatsApp
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. STUDENT BENEFITS & PHYSICAL HQ */}
            <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        
                        {/* Maps Column */}
                        <div className="lg:col-span-6 rounded-[2.5rem] overflow-hidden border-2 border-slate-700 shadow-2xl h-[450px] relative">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4022448332156!2d34.79634027661556!3d39.79796039327891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40807b5a19000001%3A0x6b77df76f1c4e7cf!2sYozgat%20Bozok%20%C3%9Cniversitesi!5e0!3m2!1sen!2spk!4v1716300000000!5m2!1sen!2spk" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                                title="Lisan.pk Yozgat Bozok Technopark Turkey Office"
                            ></iframe>
                        </div>

                        {/* Location Details Column */}
                        <div className="lg:col-span-6 space-y-8 font-sans">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-500/20">
                                Physical Turkey Operations Desk
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-slate-100 font-serif leading-tight">
                                Live & Registered On-Ground in Turkey
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                We are physically established inside Yozgat Bozok University Technopark, Turkey. This legitimate infrastructure grants us direct, immediate physical communication networks inside Turkish University admissions systems.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                                    <div>
                                        <h4 className="font-extrabold text-slate-200 text-sm">Turkey Office Address:</h4>
                                        <p className="text-xs text-slate-400 mt-1">Yozgat Bozok University, Bozok Technopark, Yozgat / Turkey</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <a href="tel:+905525677164" className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                                        <div>
                                            <h4 className="font-extrabold text-slate-200 text-xs">Turkey Contact Line:</h4>
                                            <p className="text-sm text-emerald-400 font-black mt-1">+90 552 567 7164</p>
                                        </div>
                                    </a>

                                    <a href="tel:03044296295" className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                                        <div>
                                            <h4 className="font-extrabold text-slate-200 text-xs">Pakistan Coordination:</h4>
                                            <p className="text-sm text-emerald-400 font-black mt-1">0304 4296295</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 9. TESTIMONIALS */}
            <section className="py-24 container mx-auto px-4 max-w-6xl font-sans">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                        Student Success Stories
                    </h2>
                    <p className="text-slate-500 leading-relaxed text-sm">
                        Read how Pakistani students successfully transitioned from Lahore, Karachi, and Faisalabad to prestigious campuses in Istanbul.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Hamza Shafique",
                            city: "Lahore",
                            uni: "Beykoz University (Software Engineering)",
                            text: "I was extremely anxious about studying abroad due to the IELTS requirement and confusing agent fees. Lisan.pk took my intermediate sheets, issued an English medium certification, and secured my CAL in 3 days! The on-ground team welcomed me at Istanbul airport and helped me find a beautiful shared room in Istanbul. Direct affiliation is the real deal!"
                        },
                        {
                            name: "Ayesha Tariq",
                            city: "Karachi",
                            uni: "Istanbul Kent University (Dentistry)",
                            text: "My dream was always to study dentistry, but local entry barriers in Pakistan are extremely stressful. Lisan.pk secured my Doctor of Dentistry conditional acceptance letter with an exclusive 50% discount registered directly on my Kent invoice. Settle-in support in Taksim was fantastic."
                        },
                        {
                            name: "Zain-ul-Abideen",
                            city: "Faisalabad",
                            uni: "Istanbul Topkapi University (Architecture)",
                            text: "Studying architecture in Istanbul is a dream. Topkapi University is exceptionally affordable. Lisan.pk arranged my physical attestation support at the Yozgat Bozok Technopark headquarters and coordinates our local university registrations flawlessly. Extremely transparent process!"
                        }
                    ].map((t, idx) => (
                        <div key={idx} className="p-8 bg-slate-50 border border-slate-200/60 rounded-[2.5rem] space-y-6 relative shadow-sm">
                            <div className="text-yellow-500 tracking-wide text-xs select-none">
                                ★★★★★
                            </div>
                            <p className="text-slate-600 leading-relaxed text-xs italic">"{t.text}"</p>
                            <div className="border-t border-slate-200/60 pt-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-black text-sm shrink-0">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-slate-900 text-xs">{t.name}</h4>
                                    <p className="text-[10px] text-slate-500 font-bold">{t.uni} • {t.city}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 10. COLLAPSIBLE ACCORDION FAQ */}
            <div id="visa">
                <TurkeyFaq />
            </div>

            {/* 11. FINAL HIGH-CONVERTING CALL TO ACTION BLOCK */}
            <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-4 max-w-4xl relative z-10 space-y-8">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20 scale-110 font-bold text-xl select-none">
                        ★
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl font-black font-serif leading-tight text-slate-100">
                        Ready to Lock In Your Scholarship & Visa Seat?
                    </h2>
                    
                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
                        Quotas for direct entry foundation and private universities are filling rapidly. Initiate your evaluation free with Lisan.pk today.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto font-sans">
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20direct%20admissions%20at%20Turkey%20Universities." target="_blank" className="block w-full sm:w-auto">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold h-16 px-10 rounded-2xl w-full text-lg shadow-xl transition-all flex items-center justify-center gap-2">
                                Chat on WhatsApp
                            </Button>
                        </Link>
                        
                        <a 
                            href="#turkey-lead-form"
                            className="bg-white hover:bg-slate-50 text-slate-900 font-extrabold h-16 px-10 rounded-2xl w-full sm:w-auto text-lg shadow-md transition-all flex items-center justify-center gap-2 border border-slate-200"
                        >
                            Start Online Form
                        </a>
                    </div>

                    <p className="text-emerald-400 font-bold italic text-sm pt-2">
                        On-Ground Support Desk Helpline: 0304 4296295
                    </p>
                </div>
            </section>

            <div className="border-t border-slate-200">
                <ServicePackages />
            </div>
        </main>
    )
}
