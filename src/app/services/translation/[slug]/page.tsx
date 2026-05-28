import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData = {
    "arabic-translation": {
        title: "Certified Arabic Translation Services in Pakistan | Lisan.pk",
        h1: "Official Arabic Translation & Attestation Support",
        description: "Professional Arabic translation for Saudi & Gulf visas. MOFA & embassy certified translation services in Lahore, Karachi & Islamabad.",
        content: "Lisan.pk has been the premier choice for Arabic translation in Pakistan for over 40 years. Our certified Arabic translations are meticulously formatted and stamped, ensuring 100% acceptance by the Saudi Embassy, UAE Embassy, MOFA, and Gulf consulates.",
        features: ["Saudi Embassy Recognized", "MOFA Compliant", "40+ Years Legacy", "Same-Day Delivery Available"],
        checklist: ["Original English/Urdu Document", "Passport Copy for name spellings", "CNIC Copy"],
        faqs: [
            { q: "Is this translation valid for Saudi work visas?", a: "Yes, our certified translations are recognized by the Saudi Embassy and Cultural Attaché for all visa categories." },
            { q: "How long does the attestation process take?", a: "The complete attestation (HEC -> MOFA -> Culture -> Embassy) typically takes 3-4 weeks. Lisan.pk can expedite this for you." }
        ]
    },
    "english-translation": {
        title: "Certified English Translation Services in Pakistan | Lisan.pk",
        h1: "Official English Translation with Accuracy Certificate",
        description: "Certified Urdu to English translation for immigration, UKVI, USCIS, and global visas. High accuracy and 100% acceptance guaranteed.",
        content: "Whether you need English translation for a birth certificate, marriage certificate, or academic transcripts for immigration or study abroad, our certified English translations meet the strict requirements of UKVI, USCIS, IRCC, and European embassies.",
        features: ["UKVI & USCIS Accepted", "Certificate of Accuracy", "Fast Turnaround", "Native Linguists"],
        checklist: ["Original Document", "Passport copies for verification", "Recipient country guidelines"],
        faqs: [
            { q: "Is this translation valid for UK and Canada immigration?", a: "Yes, our certified translations are accompanied by an official 'Certificate of Accuracy' containing our registry details, which is 100% accepted by UKVI, USCIS, and IRCC." },
            { q: "Do you offer express delivery?", a: "Yes, we provide 12-hour express delivery for urgent immigration deadlines." }
        ]
    },
    "turkish-translation": {
        title: "Certified Turkish Translation Services in Pakistan | Lisan.pk",
        h1: "Official Turkish Translation for Study & Residence Visas",
        description: "Professional Turkish translation services for student admissions, work permits, and residency. Certified by experienced translators.",
        content: "Applying for Turkish universities or a Turkish student/residence visa? We offer certified Turkish translation of your degree, transcripts, birth certificates, and police records. Our translations align perfectly with the requirements of the Turkish Embassy in Islamabad and Consulate General in Karachi.",
        features: ["Turkish Embassy Accepted", "Accurate Formatting", "Technopark Coordination", "100% Valid for Visas"],
        checklist: ["Educational Documents or Degrees", "Birth Certificate / Police Character Certificate", "Valid Passport Scan"],
        faqs: [
            { q: "Do I need Turkey-related documents translated into Turkish?", a: "Yes, the Turkish Embassy and consulates require sworn and certified Turkish translations for all Urdu/English personal and academic records." },
            { q: "How fast can you process Turkish translations?", a: "Standard turnaround is 24 to 48 hours. Express options are available." }
        ]
    },
    "degree-translation": {
        title: "Certified Academic Degree & Transcript Translation | Lisan.pk",
        h1: "Professional Degree Translation for WES, HEC & Gulf Visas",
        description: "Official translation services for degrees, transcripts, and diplomas. Certified for WES evaluation, HEC compliance, and embassy attestation.",
        content: "Your educational degrees and transcripts are the keys to your future. Lisan.pk provides high-precision academic translation services in Arabic, English, and Turkish. Fully accepted by HEC, MOFA, WES, and international cultural offices.",
        features: ["WES & IQAS Friendly", "HEC Attestation Ready", "Subject Matter Experts", "Dual Language Drafts"],
        checklist: ["Original HEC Attested Degree", "Complete Transcript/Marksheet", "Passport copy for spelling match"],
        faqs: [
            { q: "Do you translate transcripts for WES?", a: "Yes, we format our academic translations precisely to match WES and IQAS checklist guidelines for verification." },
            { q: "Is the price calculated per page or per document?", a: "Standard academic degrees are priced per document, while complex transcripts are calculated based on the number of pages/entries." }
        ]
    },
    "legal-translation": {
        title: "Certified Legal Translation Services Pakistan | Lisan.pk",
        h1: "Certified Legal Translation | Contracts, Power of Attorney & Court Docs",
        description: "Professional legal translation services in Pakistan. Recognized translations for contracts, court documents, and affidavits by sworn translators.",
        content: "Legal documentation requires absolute precision and knowledge of jurisprudence. Lisan.pk offers certified legal translation services for partnership deeds, lease agreements, powers of attorney, birth/marriage certificates, and judicial records. Handled by legal experts and officially stamped.",
        features: ["Sworn Translators", "Legal Terminology Experts", "Strict Confidentiality", "Notarization Available"],
        checklist: ["Original Legal Agreement/Document", "Identities of contracting parties", "Authorized signatory details"],
        faqs: [
            { q: "Are your translations accepted in local courts?", a: "Yes, our certified translations are stamped and registered, making them fully admissible in Pakistani courts and official government registries." },
            { q: "Can you translate complex legal deeds into Arabic?", a: "Yes, our legal department specializes in Arabic commercial law terminology for Saudi and UAE corporate submissions." }
        ]
    },
    "certified-translation": {
        title: "Certified Document Translation Services Pakistan | Lisan.pk",
        h1: "Official Certified Translation | 100% Embassy Acceptance",
        description: "Certified translation of personal and commercial documents. Accompanied by a Certificate of Accuracy, stamps, and official registry details.",
        content: "A certified translation is a legal document consisting of the translated text, a signed Certificate of Accuracy, and our registered seal. Lisan.pk translations are recognized worldwide by embassies, government agencies, universities, and corporate institutions.",
        features: ["Certificate of Accuracy", "Embassy & MOFA Recognized", "Rapid Express Service", "Worldwide Courier Delivery"],
        checklist: ["Clear photo or scan of documents", "Correct spellings of names", "Specific embassy requirements"],
        faqs: [
            { q: "What makes a translation 'certified'?", a: "A certified translation must include a formal signed declaration by Lisan.pk stating that the translation is a true and accurate rendering of the source document, along with our stamp and contact details." },
            { q: "Do you deliver physical hard copies?", a: "Yes, we provide high-resolution digital scans via email/WhatsApp and send the physical stamped hard copies via TCS or Leopard courier anywhere in Pakistan." }
        ]
    },
    "nikah-nama-marriage-certificate": {
        title: "Certified Nikah Nama Translation Pakistan | Lisan.pk",
        h1: "Certified Nikah Nama Translation | Official & Recognized",
        description: "Certified Arabic & English translation for Nikah Nama. Official and embassy-recognized services in Pakistan. Fast delivery for Saudi & UAE visas.",
        content: "Translating a Nikah Nama requires precision, as legal terminology and dates must be exact. Our certified translations are recognized by embassies for spouse visas, family registration, and legal stay applications.",
        features: ["Embassy Certified", "Same-day Service", "Notarized Certificate", "Accurate Date Conversion"],
        checklist: ["Original Arabic/Urdu Nikah Nama", "Passport copies of Bride & Groom", "CNIC copies for verification"],
        faqs: [
            { q: "Is this translation valid for UK/USA visas?", a: "Yes, our certified translations meet the 'Certificate of Accuracy' requirements for all major western embassies." },
            { q: "Do you translate handwritten Nikah Namas?", a: "Yes, our experts are experienced in deciphering traditional calligraphy and handwritten legal scripts." }
        ]
    },
    "birth-certificate-translation": {
        title: "Certified Birth Certificate Translation Pakistan | Lisan.pk",
        h1: "Certified Birth Certificate Translation for Visa & Immigration",
        description: "Official Arabic & English translation of NADRA birth certificates. Accepted by embassies for visa & immigration. Certified and fast turnaround.",
        content: "A birth certificate is the most critical document for identity verification. We provide certified translations that mirror the original format, ensuring zero friction during your visa interview.",
        features: ["NADRA Format Matching", "Global Recognition", "Fast Digital Copy", "Official Seal & Stamp"],
        checklist: ["Original NADRA Birth Certificate", "Correct spelling of names as per Passport", "Date of birth verification"],
        faqs: [
            { q: "How long does it take?", a: "Standard delivery is within 24 hours. We also offer 2-hour express translation for urgent cases." },
            { q: "Do I need the original copy?", a: "A clear scan or photo is usually sufficient for the translation process." }
        ]
    },
    "academic-degree-transcript": {
        title: "Degree & Transcript Translation Pakistan | Lisan.pk",
        h1: "Professional Academic Translation | HEC Recognized Documents",
        description: "Professional Arabic translation for degrees and transcripts. HEC and MOFA compliant. Trusted for Saudi, UAE & Gulf visa applications.",
        content: "Your academic future depends on accurate representation. We translate Pakistani degrees and transcripts into Arabic for Gulf countries (Saudi, UAE, Qatar) and English for Western universities.",
        features: ["Technical Terminology", "HEC Compliance", "WES/IQAS Friendly", "Transcript Formatting"],
        checklist: ["HEC Attested Original Degree", "Marksheet/Transcript", "Passport for name matching"],
        faqs: [
            { q: "Do you provide translation for WES evaluation?", a: "Yes, our translations are formatted to meet the specific requirements of WES, IQAS, and other evaluation bodies." },
            { q: "Can you help with HEC attestation too?", a: "Yes, we provide consultancy and logistics support for the entire HEC and MOFA verification process." }
        ]
    },
    "police-character-certificate": {
        title: "Police Character Certificate Translation | Lisan.pk",
        h1: "Certified Police Certificate Translation for Visa & Immigration",
        description: "Official Arabic & English translation of Police Character Certificates. Required for Saudi, UAE, and Qatar work visas. Certified and fast turnaround.",
        content: "A Police Character Certificate (PCC) is a mandatory requirement for most work and residency visas in the Gulf. We provide certified translations that are accepted by all major embassies and consulates.",
        features: ["Embassy Certified", "24-Hour Delivery", "Legal Validity", "Accurate Terminology"],
        checklist: ["Original Police Character Certificate", "Passport copy for name matching", "CNIC copy"],
        faqs: [
            { q: "Is this translation valid for Saudi work visas?", a: "Yes, our certified translations are recognized by the Saudi Embassy and Cultural Attaché for all visa categories." },
            { q: "Do you translate police certificates issued by any district or city across Pakistan.", a: "Yes, we translate police certificates issued by any district or city across Pakistan." }
        ]
    },
    "iata-dts-umrah-travel-agency": {
        title: "IATA & DTS Certificate Arabic Translation for Umrah & Travel Agencies | Lisan.pk",
        h1: "IATA & DTS Certificate Arabic Translation Services for Umrah Companies & Travel Agencies in Pakistan",
        description: "Certified Arabic translation of IATA certificates, DTS documents, tourism licenses, and commercial paperwork for Umrah operators, Hajj companies, and Saudi-linked travel agencies across Pakistan.",
        content: "Umrah companies, Hajj operators, and travel agencies working with Saudi partners face strict documentation documentation compliance requirements. Saudi authorities, tourism ministries, and B2B partners demand professionally translated Arabic versions of IATA certificates, DTS accreditation documents, company registration papers, tourism licenses, and commercial agreements. A single terminology error or formatting mistake can delay approvals, damage your credibility with Saudi partners, or halt your operations during peak Umrah and Hajj season. Lisan.pk provides specialized commercial Arabic translation built specifically for the travel and tourism industry — not generic translation, but Saudi travel documentation support with proper business terminology, official stamps, and urgent seasonal processing.",
        features: ["IATA & DTS Specialist", "Saudi Travel Compliance", "Urgent Seasonal Processing", "B2B Commercial Terminology", "Certified Stamp & Signature", "Nationwide Courier Delivery"],
        checklist: ["IATA Certificate or Membership Document", "DTS Accreditation Certificate", "Company Registration / NTN Certificate", "Tourism License from Ministry", "Partnership Agreements or Contracts", "Passport / CNIC of Authorized Signatory"],
        faqs: [
            { q: "Do you translate IATA certificates into Arabic?", a: "Yes. We provide certified Arabic translation of IATA membership certificates, accreditation letters, and related aviation/travel documentation with proper commercial terminology." },
            { q: "Can you handle urgent translation before Umrah season?", a: "Yes. We offer same-day and 24-hour priority processing for travel agencies facing seasonal deadlines, partner demands, or Saudi approval timelines." },
            { q: "Is machine translation acceptable for Saudi travel documents?", a: "No. Saudi authorities and B2B partners reject machine-translated commercial documents. All translations must use proper Arabic business and tourism terminology with certified stamps." },
            { q: "Do you translate DTS certificates for Saudi compliance?", a: "Yes. We translate DTS (Destination Tourism System) certificates, tourism operator licenses, and related accreditation documents into certified Arabic for Saudi regulatory compliance." },
            { q: "Can Umrah companies outside major cities use your services?", a: "Yes. We accept documents via WhatsApp and email from any city in Pakistan and provide certified translations with nationwide courier delivery." }
        ]
    },
    "urdu-to-english-translation": {
        title: "Certified Urdu to English Translation Services | Lisan.pk",
        h1: "Certified Urdu to English Document Translation Services",
        description: "Official Urdu to English translation for academic degrees, Nikah Nama, birth certificates, and police records. Accepted globally by UKVI, USCIS, and Canadian IRCC.",
        content: "When applying for global visas, immigration, or foreign university admissions, presenting a flawlessly translated English document with certified stamps is non-negotiable. Our certified translations are formatted to match the original structure perfectly and are accompanied by an official Certificate of Accuracy, registered stamps, and authorized signatures.",
        features: ["UKVI & USCIS Accepted", "12-Hour Urgent Delivery", "Official Seals & Stamps", "Accuracy Certification Included"],
        checklist: ["Original Urdu Document (clear photo or scan)", "Passport copies for exact name matching", "Target country visa specifications (if any)"],
        faqs: [
            { q: "Is this translation valid for UK and Canada immigration?", a: "Yes, our certified translations are accompanied by an official 'Certificate of Accuracy' containing our registry details, which is 100% accepted by UKVI, USCIS, and IRCC." },
            { q: "Do you translate handwritten marriage deeds (Nikah Nama)?", a: "Yes, we specialize in reading traditional handwriting and drafting high-precision, formatted English transcripts that mirror the original stamps and blocks." }
        ]
    }
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const data = serviceData[slug as keyof typeof serviceData]
    if (!data) return {}

    return {
        title: `${data.title} | Lisan.pk`,
        description: data.description,
        alternates: {
            canonical: `https://www.lisan.pk/services/translation/${slug}`,
        },
    }
}


export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug: slug,
    }))
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params
    const data = serviceData[slug as keyof typeof serviceData]

    if (!data) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <PageHero
                title={data.title}
                description={data.description}
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Translation", href: "/services/translation" },
                    { label: data.title }
                ]}
            />

            <section className="py-20 font-sans">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-slate max-w-none">
                                <h1 className="text-3xl font-extrabold text-slate-900 mb-6 font-serif">{data.h1}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {data.content}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {data.features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                            <span className="font-bold text-slate-700 text-sm">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Requirements Checklist</h2>
                                <ul className="space-y-4 mb-12">
                                    {data.checklist.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                            <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Why Certified Translation Matters</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    When submitting documents to the **Saudi Embassy**, **MOFA**, or international universities, a simple translation is not enough. You need a **Certified Translation** that includes an official statement of accuracy, the translator's credentials, and the agency's registered stamp. This legal weight ensures your application isn't rejected for "unofficial documentation."
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {data.faqs.map((faq, idx) => (
                                        <div key={idx} className="p-6 bg-slate-100/50 rounded-2xl border border-slate-200 text-sm">
                                            <h4 className="font-bold text-slate-900 mb-2 font-serif">Q: {faq.q}</h4>
                                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {slug === "urdu-to-english-translation" && (
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-3xl shadow-xl shadow-emerald-500/10 mb-8 font-sans">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/20 px-3 py-1 rounded-full text-white mb-4 inline-block border border-white/20 select-none">
                                        Highly Recommended Guide
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 font-serif">Comprehensive Urdu to English Translation Guide</h3>
                                    <p className="text-emerald-100 text-sm leading-relaxed mb-6 font-sans">
                                        Are you worried about name spelling mismatches, UKVI/USCIS guidelines, or embassy rejections? Read our expert, in-depth guide covering legal, immigration, and academic requirements across Pakistan.
                                    </p>
                                    <Link 
                                        href="/blog/urdu-to-english-translation-services-pakistan"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors shadow-md"
                                    >
                                        Read Guide & Avoid Rejections
                                    </Link>
                                </div>
                            )}

                            {/* Interlinking to Locations */}
                            <div className="bg-slate-50 p-8 rounded-3xl border border-emerald-100 font-sans">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Availability in Major Cities</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    We provide this specialized service across Pakistan. Click a city to learn about local pickup and delivery options:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['lahore', 'karachi', 'islamabad', 'faisalabad', 'multan', 'sialkot'].map(city => (
                                        <Link 
                                            key={city} 
                                            href={`/locations/${city}`}
                                            className="px-4 py-2 bg-white border border-emerald-100 text-emerald-800 rounded-full text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all capitalize"
                                        >
                                            {city}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6 font-sans">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 border-t-4 border-t-emerald-600 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl font-serif">Order Professional Translation</h3>
                                <div className="space-y-4">
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20${data.title}%20translation%20services.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-14 text-lg font-bold text-white">
                                            WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923044296295" className="block w-full">
                                        <Button variant="outline" className="w-full h-14 text-lg border-slate-200 font-bold">
                                            Direct Call
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 text-center font-sans">
                                    <p className="text-sm text-slate-500 italic mb-4">"Trusted by 50,000+ clients over 40 years."</p>
                                    <div className="flex justify-center gap-4">
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-800">4.9/5</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Google Rating</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-800">100%</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Acceptance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
