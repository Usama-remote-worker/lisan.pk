import { Metadata } from "next"
import Link from "next/link"
import { 
    CheckCircle2, 
    GraduationCap, 
    ArrowRight, 
    ShieldCheck, 
    MapPin, 
    Phone, 
    Building2, 
    Star, 
    FileText, 
    Users, 
    Zap, 
    Award,
    Globe,
    MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LeadForm } from "@/components/turkey/LeadForm"
import { ExitPopup } from "@/components/turkey/ExitPopup"
import { StickyMobileCTA } from "@/components/turkey/StickyMobileCTA"
import { ServicePackages } from "@/components/home/ServicePackages"

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

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Lisan.pk Study in Turkey Admissions Hub",
        "image": "https://www.lisan.pk/images/blog/saudi-scholarship-certified-arabic-translation.png",
        "telephone": "+923044296295",
        "email": "lisan.pk.services@gmail.com",
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            
            <ExitPopup />
            <StickyMobileCTA />

            {/* 1. HERO SECTION & INTEGRATED FORM */}
            <section className="relative bg-slate-950 text-white py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/40 via-slate-950 to-slate-950 z-0"></div>
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Text Col */}
                        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-red-500/20 mx-auto lg:mx-0 shadow-inner">
                                <GraduationCap className="w-4 h-4 text-red-500" /> Direct University Affiliation Desk
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif leading-[1.1] text-slate-100">
                                Study in Turkey with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400 font-extrabold">Direct Affiliations</span>
                            </h1>
                            
                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Guaranteed admission support for eligible Pakistani students with minimal documentation, flat scholarship waivers, and on-ground support via our physical Yozgat Technopark office.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-6 pt-4 max-w-xl mx-auto lg:mx-0">
                                {[
                                    { title: "Physical Turkey HQ", desc: "Registered Technopark office" },
                                    { title: "Flat 50% Waivers", desc: "No complex merit exams" },
                                    { title: "No IELTS Needed", desc: "High school certificates accepted" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center shadow-md">
                                        <h4 className="font-extrabold text-red-400 text-sm">{item.title}</h4>
                                        <p className="text-[10px] text-slate-400 mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-bold text-slate-400 pt-2">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-red-500" /> 100% Secure System</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Airport Reception Guides</span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-500" /> Ministry Recognized</span>
                            </div>
                        </div>

                        {/* Form Col */}
                        <div id="turkey-lead-form" className="lg:col-span-5 w-full max-w-md mx-auto relative z-20">
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUST / STATS SECTION */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { val: "100%", label: "Direct Campus Routes" },
                            { val: "Yozgat Tech", label: "Registered Turkey HQ" },
                            { val: "03-05 Days", label: "Admission CAL Speed" },
                            { val: "Bologna", label: "Degrees EU Equivalency" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <p className="text-3xl md:text-4xl font-black text-slate-900 font-serif">{stat.val}</p>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUE PROPOSITION COMPARISON */}
            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                        Our Absolute Advantage vs. Virtual Agents
                    </h2>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Don't risk your future with external commission-based agents who disappear once you land in Istanbul. Lisan.pk operates with full local registry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* The Lisan Way */}
                    <div className="bg-emerald-950 text-white rounded-[2.5rem] p-10 border border-emerald-900 shadow-xl relative overflow-hidden group hover:scale-[1.01] transition-all">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                        <h3 className="text-2xl font-black mb-6 font-serif flex items-center gap-2 text-emerald-400">
                            <Award className="w-7 h-7" /> Direct Affiliated Path (Lisan.pk)
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Physical registered office in Turkey (Yozgat Technopark)",
                                "Direct dashboard access to University Admissions Offices",
                                "Guaranteed flat-rate scholarships pre-verified on invoices",
                                "On-ground Airport reception & residence permit assistance",
                                "Full embassy attestation documentation packages handled in Pakistan"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-emerald-100">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Standard Agents */}
                    <div className="bg-slate-50 text-slate-900 rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:scale-[1.01] transition-all">
                        <h3 className="text-2xl font-black mb-6 font-serif flex items-center gap-2 text-slate-700">
                            <Building2 className="w-7 h-7" /> Commission-Based Agents
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "No physical presence in Turkey (operate purely online)",
                                "Rely on third-party channels causing long delay times",
                                "Inflated tuition claims with hidden consultancy fee add-ons",
                                "Provide zero on-ground guidance or student permit setups",
                                "Cannot provide local certified translation packages"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                    <span className="text-red-500 font-bold shrink-0 text-lg mt-0.5">✕</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. UNIVERSITIES SECTION */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                            Select Your Preferred Turkish University
                        </h2>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            Click on any university to view popular programs, complete fees structures, direct scholarships, and checklist requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                slug: "beykoz-university",
                                name: "Beykoz University",
                                loc: "Istanbul",
                                fee: "$2,000 - $3,500/year",
                                disc: "Guaranteed 50% Waiver",
                                tag: "Best for tech & logistics career models",
                                programs: ["Computer Engineering", "Software Engineering", "Business Admin"]
                            },
                            {
                                slug: "kent-university",
                                name: "Istanbul Kent University",
                                loc: "Istanbul (Taksim)",
                                fee: "$2,500 - $4,500/year",
                                disc: "Up to 50% Partner Discount",
                                tag: "Specialized dentistry simulators & health science campus",
                                programs: ["Doctor of Dentistry", "Software Engineering", "Nursing (English)"]
                            },
                            {
                                slug: "topkapi-university",
                                name: "Istanbul Topkapi University",
                                loc: "Istanbul",
                                fee: "$1,800 - $3,200/year",
                                disc: "Flat budget packages",
                                tag: "Exceptionally affordable, practical arts & gastronomy training",
                                programs: ["Gastronomy & Culinary Arts", "Architecture", "Software Engineering"]
                            }
                        ].map((uni, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
                                <div className="p-8 space-y-6 flex-1">
                                    <div className="inline-block px-3 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-wider">
                                        📍 {uni.loc}
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 font-serif leading-tight">{uni.name}</h3>
                                    <p className="text-xs text-slate-500 italic leading-relaxed">{uni.tag}</p>
                                    
                                    <div className="border-y border-slate-100 py-4 space-y-3">
                                        <div className="flex justify-between text-xs font-bold text-slate-700">
                                            <span>Tuition Fee Range:</span>
                                            <span className="text-red-600 font-black">{uni.fee}</span>
                                        </div>
                                        <div className="flex justify-between text-xs font-bold text-slate-700">
                                            <span>Lisan Scholarship:</span>
                                            <span className="text-emerald-600 font-black">{uni.disc}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-xs font-bold text-slate-800">Popular Programs:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {uni.programs.map((p, i) => (
                                                <span key={i} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-600 font-medium">{p}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-8 pt-0">
                                    <Link href={`/study-in-turkey/${uni.slug}`} className="block">
                                        <Button className="w-full h-12 bg-slate-900 hover:bg-red-600 text-white font-extrabold rounded-xl transition-all flex items-center justify-center gap-2">
                                            Explore Programs & Apply <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ELIGIBILITY & DOCUMENT PACKAGE */}
            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Minimum Eligibility */}
                    <div className="bg-red-50/50 border border-red-100 rounded-[2.5rem] p-10 space-y-8 font-sans">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center shadow-inner scale-105">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 font-serif mb-2">Minimum Eligibility Criteria</h3>
                            <p className="text-slate-600 text-sm">We provide an extremely high-acceptance environment. You don't need highly complex portfolios to secure admissions.</p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Minimum 50% marks in Intermediate (Pre-Med, Pre-Eng, ICS, I.Com, Arts) or equivalent O/A levels.",
                                "A valid International Passport copy with at least 6 months validity.",
                                "Clear copies of Matric & Intermediate certificates and transcripts.",
                                "Active student email address and mother's maiden name.",
                                "No IELTS or entry test scores needed—English Proficiency certificates accepted."
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-10 space-y-8 font-sans">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner scale-105">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 font-serif mb-2">Required Paperwork</h3>
                            <p className="text-slate-600 text-sm">Ensure your scans are high-resolution PDFs. Blurry phone photographs can cause instant portal registration flags.</p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Valid Passport Page Scan (Full identity blocks clear)",
                                "Matriculation (Secondary School) Certificate & Result Card",
                                "Intermediate (Higher Secondary) Certificate & Result Card",
                                "Passport Size Photo with clean white background",
                                "English Medium Proficiency Certificate (secured from high school)",
                                "NADRA Birth Certificate (with authorized certified English/Turkish translation if requested)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. TURKEY HEADQUARTERS & CONTACT EMBED */}
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
                                <Globe className="w-4 h-4" /> Physical Turkey Operations Desk
                            </div>
                            
                            <h2 className="text-3xl md:text-5xl font-black text-slate-100 font-serif leading-tight">
                                Live & Registered On-Ground in Turkey
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                We are physically established inside Yozgat Bozok University Technopark, Turkey. This legitimate infrastructure grants us direct, immediate physical communication networks inside Turkish University admissions systems.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl">
                                    <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-extrabold text-slate-200 text-sm">Turkey Office Address:</h4>
                                        <p className="text-xs text-slate-400 mt-1">Yozgat Bozok University, Bozok Technopark, Yozgat / Turkey</p>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <a href="tel:+905525677164" className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                                        <Phone className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-extrabold text-slate-200 text-xs">Turkey Contact Line:</h4>
                                            <p className="text-sm text-red-400 font-black mt-1">+90 552 567 7164</p>
                                        </div>
                                    </a>

                                    <a href="tel:03044296295" className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                                        <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
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

            {/* 7. STUDENT TESTIMONIALS */}
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
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
                            </div>
                            <p className="text-slate-600 leading-relaxed text-xs italic">"{t.text}"</p>
                            <div className="border-t border-slate-200/60 pt-4 flex items-center gap-3">
                                <div className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-black text-sm shrink-0">
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

            {/* 8. FAQ SECTION */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl font-sans">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 font-serif leading-tight text-slate-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8">
                        {[
                            { q: "Can Pakistani students study in Turkey?", a: "Yes, absolutely! Turkish private and public universities are highly welcoming of Pakistani academic profiles. Private universities offer extremely competitive English-taught tracks in health sciences, software engineering, and business." },
                            { q: "What is the minimum percentage required for admission?", a: "To secure a guaranteed direct admission track through Lisan.pk, you must maintain at least 50% marks in your Intermediate (HSSC) or equivalent high school transcript sheets." },
                            { q: "Is IELTS mandatory to study in Turkey?", a: "No. For private affiliated universities like Beykoz, Kent, or Topkapi, an IELTS certificate is not mandatory. We secure an official English Medium Proficiency Certificate issued from your intermediate school or college, which is fully accepted by admission committees." },
                            { q: "How much does it cost to study in Turkey?", a: "For our direct affiliated partner universities, annual English Bachelor's tuition ranges from $1,800 to $4,500. Highly specialized health tracks like the English Doctor of Dentistry cost around $12,000 per year. Living expenses in Turkey are exceptionally reasonable, usually ranging from $250 to $350 per month." },
                            { q: "Can international students work in Turkey?", a: "Yes. International undergraduate students are legally permitted to work part-time (up to 24 hours per week) after completing their first academic year. Digital, freelance, and language-specific roles in Istanbul represent highly lucrative opportunities for foreign students." },
                            { q: "How long does the admission CAL processing take?", a: "Because we submit documents directly into university partner databases, conditional acceptance letters (CAL) are issued within 3 to 5 business working days. General visa processing via Embassy offices in Islamabad, Karachi, or Lahore takes 3 to 6 weeks." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-3 hover:scale-[1.005] transition-transform">
                                <h4 className="text-lg font-black text-slate-900 flex items-start gap-2">
                                    <span className="text-red-500 font-extrabold shrink-0">Q:</span>
                                    {faq.q}
                                </h4>
                                <p className="text-slate-600 leading-relaxed text-sm pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. BOTTOM CONVERSION ACTION BLOCK */}
            <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
                
                <div className="container mx-auto px-4 max-w-4xl relative z-10 space-y-8">
                    <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/20 scale-110">
                        <Zap className="w-8 h-8 text-red-500" />
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl font-black font-serif leading-tight text-slate-100">
                        Ready to Lock In Your Scholarship & Visa Seat?
                    </h2>
                    
                    <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
                        Don't let deadlines catch you off-guard. Get direct access to the Turkish university student admission matrix immediately.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto font-sans">
                        <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20direct%20admissions%20at%20Turkey%20Universities." target="_blank" className="block w-full sm:w-auto">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold h-16 px-10 rounded-2xl w-full text-lg shadow-xl transition-all flex items-center justify-center gap-2">
                                Chat on WhatsApp <MessageSquare className="w-5 h-5" />
                            </Button>
                        </Link>
                        
                        <a 
                            href="#turkey-lead-form"
                            className="bg-white hover:bg-slate-50 text-slate-900 font-extrabold h-16 px-10 rounded-2xl w-full sm:w-auto text-lg shadow-md transition-all flex items-center justify-center gap-2 border border-slate-200"
                        >
                            Start Online Form <ArrowRight className="w-5 h-5 text-slate-700" />
                        </a>
                    </div>

                    <p className="text-red-400 font-bold italic animate-pulse text-sm pt-2">
                        📞 On-Ground Support Desk Helpline: 0304 4296295
                    </p>
                </div>
            </section>

            {/* 10. PACKAGES SECTION */}
            <div className="border-t border-slate-200">
                <ServicePackages />
            </div>
        </main>
    )
}
