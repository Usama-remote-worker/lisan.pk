import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/seo/JsonLd"
import { 
  FileText, 
  Heart, 
  Scale, 
  GraduationCap, 
  Award, 
  Shield, 
  Globe, 
  Check, 
  X, 
  AlertTriangle, 
  HelpCircle, 
  Briefcase, 
  Users, 
  UserCheck, 
  Calendar, 
  Contact,
  ShieldCheck,
  ChevronRight,
  Landmark,
  FileSpreadsheet
} from "lucide-react"

export const metadata: Metadata = {
  title: "UKVI Certified Translation Services | Lisan.pk",
  description: "UKVI & Home Office certified translation services online. Accepted for UK Spouse Visa, Student Visa, and ILR. Fast 24-hour delivery.",
  alternates: { canonical: "https://www.lisan.pk/services/ukvi-certified-translation" },
  openGraph: {
    title: "UKVI Certified Translation Services | Lisan.pk",
    description: "Professional Home Office certified translation. Accepted for all UKVI immigration applications. 24-hour delivery.",
    url: "https://www.lisan.pk/services/ukvi-certified-translation",
    siteName: "Lisan.pk", type: "website",
  },
  twitter: { card: "summary_large_image", title: "UKVI Certified Translation | Lisan.pk", description: "Home Office accepted certified translation services online." },
}

const faqData = [
  { q: "What is a UKVI certified translation?", a: "A UKVI certified translation is a complete English translation of a document that strictly follows the UK Home Office guidelines. It must include confirmation of accuracy, the translation date, the translator's full name and signature, and their contact details." },
  { q: "Do I need a notarised translation for my UK Visa?", a: "No. The UK Home Office and UKVI do not require notarisation for standard visa applications. They require a 'certified translation' by a competent translation company, which is exactly what we provide." },
  { q: "How much does a UKVI certified translation cost?", a: "Our UKVI certified translations start at just $15–$20 per page for standard documents like birth certificates, Nikah Namas, and bank statements." },
  { q: "How fast can you translate my documents for UKVI?", a: "Standard delivery is 24–48 hours. If you are facing a tight visa deadline, we also offer urgent same-day delivery." },
  { q: "Will your translation be accepted for a UK Spouse Visa?", a: "Yes, absolutely. We regularly translate Nikah Namas (marriage certificates), WhatsApp chat logs, and financial documents specifically for UK Spouse and Family visas." },
  { q: "Do you translate Bank Statements for UK Visas?", a: "Yes. Bank statements are crucial for demonstrating maintenance funds. We accurately translate bank statements, FBR tax returns, and property documents while preserving the financial layout." },
  { q: "Can I use digital PDF translations for my online UK Visa application?", a: "Yes. For online applications (via the UKVI portal or VFS/Gerry's document upload), a certified PDF is perfectly acceptable. We will also provide hard copies upon request." },
  { q: "Is Lisan.pk recognised by the UK Home Office?", a: "The UK Home Office requires translations to be completed by a professional translation company. Lisan.pk operates as an established corporate entity with over 40 years of experience, and our certification fully satisfies all UKVI requirements." },
  { q: "What details must be on a UKVI translation?", a: "Per Home Office rules, it must include: (1) Confirmation that it is an accurate translation, (2) The date, (3) Translator's name and signature, and (4) Translator's contact details. We include all of this on our corporate letterhead." },
  { q: "Do you translate academic documents for UK ENIC?", a: "Yes, we translate transcripts and degrees for UK ENIC (formerly NARIC) evaluations, which are often required for Skilled Worker or Student Visas." },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "UKVI Certified Translation", "item": "https://www.lisan.pk/services/ukvi-certified-translation" },
      ]
    },
    {
      "@type": "Service",
      "name": "UKVI Certified Translation Services",
      "provider": { "@type": "Organization", "name": "Lisan.pk", "url": "https://www.lisan.pk" },
      "description": "Professional UKVI & Home Office certified translation services for UK visa applications, including bank statements, marriage certificates, and academic documents.",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "UKVI Translation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bank Statement Translation for UK Visa" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marriage Certificate Translation for UKVI" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Birth Certificate Translation for Home Office" } },
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ]
}

const docs = [
  { title: "Bank Statements & Financials", icon: "Landmark", ukvi: "Essential for proving maintenance funds for Student and Spouse Visas.", cases: ["Tier 4 Student Visa", "Spouse Visa financials", "Visit Visa proof of funds"], desc: "We accurately translate complex bank statements, FBR tax returns, and property valuations, ensuring all numbers and financial data are flawlessly represented." },
  { title: "Marriage Certificate (Nikah Nama)", icon: "Heart", ukvi: "Mandatory for all dependent, family, and spouse visa applications.", cases: ["UK Spouse Visa", "Dependent Visa", "Family Settlement"], desc: "Certified translation of Urdu/Arabic Nikah Namas and civil marriage certificates, fully compliant with UK Home Office requirements." },
  { title: "Birth Certificates & B-Forms", icon: "FileText", ukvi: "Required to prove identity and family lineage for dependent children.", cases: ["Child Dependent Visa", "British Citizenship", "ILR Applications"], desc: "We translate NADRA birth certificates, manual birth records, and B-Forms into certified English." },
  { title: "Police Clearance Certificate", icon: "Shield", ukvi: "Required for Skilled Worker Visas and settlement applications.", cases: ["Skilled Worker Visa", "Healthcare Worker Visa", "ILR"], desc: "Certified translations of character certificates and police clearances from Pakistan, Gulf countries, and beyond." },
  { title: "Academic Transcripts & Degrees", icon: "GraduationCap", ukvi: "Required for UK ENIC evaluation and university admissions.", cases: ["Student Visa (CAS)", "UK ENIC (NARIC)", "Skilled Worker Visa"], desc: "We preserve the official layout of university degrees and mark sheets, ensuring quick acceptance by UK universities and ENIC." },
  { title: "Tuberculosis (TB) Test Results", icon: "FileSpreadsheet", ukvi: "Mandatory health requirement for UK visas longer than 6 months.", cases: ["Long-term Visas", "Student Visas", "Work Visas"], desc: "Certified translation of medical reports and TB test certificates required by UKVI approved clinics." },
]

const docIconMap: Record<string, React.ComponentType<any>> = {
  FileText: FileText,
  Heart: Heart,
  GraduationCap: GraduationCap,
  Shield: Shield,
  Landmark: Landmark,
  FileSpreadsheet: FileSpreadsheet,
}

const whoNeedsData = [
  { title: "Spouse & Family Visas", icon: "Heart", desc: "Require translations of Nikah Namas, WhatsApp chats, and relationship proof." },
  { title: "Student Visas", icon: "GraduationCap", desc: "Need translated transcripts, degrees, and bank statements for CAS and maintenance." },
  { title: "Skilled Worker Visas", icon: "Briefcase", desc: "Require translations of police clearances, academic degrees, and employment letters." },
  { title: "Standard Visitor Visas", icon: "Globe", desc: "Need translated property documents, FBR returns, and bank statements for ties to home country." },
  { title: "Settlement (ILR)", icon: "Shield", desc: "Indefinite Leave to Remain applications require translated civil and financial records." },
  { title: "British Citizenship", icon: "UserCheck", desc: "Naturalisation applications need fully certified translations of all foreign identity documents." },
]

const whoNeedsIconMap: Record<string, React.ComponentType<any>> = {
  Heart: Heart,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Globe: Globe,
  Shield: Shield,
  UserCheck: UserCheck,
}

const pricingData = [
  { doc: "Birth / Marriage Certificate", time: "24 hours", price: "$15 per page", note: "Standard civil documents" },
  { doc: "Bank Statements", time: "24–48 hours", price: "$20 per page", note: "Financial layout preserved" },
  { doc: "Police Clearance / TB Test", time: "24 hours", price: "$15 per page", note: "Fast processing" },
  { doc: "Academic Transcripts", time: "24–48 hours", price: "$20 per page", note: "Accepted by UK ENIC" },
  { doc: "Property Valuation / FBR", time: "24–48 hours", price: "$20 per page", note: "Complex formatting" },
]

const specifications = [
  ["Compliance Standard", "UK Home Office & UKVI Guidelines"],
  ["Accepted By", "UKVI, Home Office, UK ENIC, HM Passport Office, Courts"],
  ["Mandatory Items Included", "Accuracy Confirmation, Date, Translator Name, Signature, Contact Details"],
  ["Starting Price", "$15 - $20 per page"],
  ["Delivery Time", "24–48 hours (same-day urgent service available)"],
  ["Languages Supported", "Urdu, Arabic, Punjabi, Pashto, Hindi + 50 more"],
  ["Delivery Format", "Certified PDF (for online upload) + Physical copies via courier"],
  ["Notarisation", "Not required by UKVI (Certified is sufficient)"],
]

const steps = [
  { n: "01", t: "Upload Document", d: "Send your document via our online form or WhatsApp. Any format accepted — photo, scan, or PDF." },
  { n: "02", t: "Expert Translation", d: "A qualified native linguist translates your document ensuring precise UK legal terminology." },
  { n: "03", t: "Quality Review", d: "We cross-check all names, dates, and figures to ensure a 100% accurate translation." },
  { n: "04", t: "UKVI-Ready Delivery", d: "Receive your PDF with the Home Office compliant certification statement, ready for upload." },
]

export default function UKVICertifiedTranslationPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li className="select-none">/</li>
            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link></li>
            <li className="select-none">/</li>
            <li className="text-slate-800 font-semibold">UKVI Certified Translation</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,99,235,0.10)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">
              100% UK Home Office Compliant
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              UKVI Certified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Translation Services
              </span>
            </h1>
            <p className="text-xl text-blue-50/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Certified translations that meet UK visa and immigration requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-3 mb-10 text-blue-100 font-medium text-sm md:text-base">
              <div className="flex items-center gap-2 justify-center"><Check className="w-5 h-5 text-emerald-400" /> Accepted for UK visa applications</div>
              <div className="flex items-center gap-2 justify-center"><Check className="w-5 h-5 text-emerald-400" /> Certification statement included</div>
              <div className="flex items-center gap-2 justify-center"><Check className="w-5 h-5 text-emerald-400" /> Translator details included</div>
              <div className="flex items-center gap-2 justify-center"><Check className="w-5 h-5 text-emerald-400" /> Fast digital delivery</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5">
                Upload Your Document
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20UKVI%20certified%20translation." target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-blue-950 font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
                WhatsApp Us
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { stat: "100%", label: "UKVI Accepted" },
                { stat: "24hr", label: "Turnaround Time" },
                { stat: "40+", label: "Years Experience" },
                { stat: "50+", label: "Languages" },
              ].map(b => (
                <div key={b.stat} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-blue-400">{b.stat}</div>
                  <div className="text-xs text-blue-50/60 font-medium mt-1">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </section>

      {/* Mandatory Home Office Requirements (Crucial for UKVI) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              The 4 Strict Rules
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-3">Mandatory Home Office Requirements</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              To be accepted by UK Visas and Immigration (UKVI), every translation must include the following details. We guarantee all four are present on every document we translate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Accuracy Confirmation",
                desc: "A written statement confirming that it is a true and accurate translation of the original document.",
                icon: ShieldCheck
              },
              {
                title: "Translation Date",
                desc: "The exact date when the translation was completed and certified.",
                icon: Calendar
              },
              {
                title: "Full Name & Signature",
                desc: "The full name and a wet-ink or verified electronic signature of the translator or translation company representative.",
                icon: FileText
              },
              {
                title: "Contact Details",
                desc: "The official credentials and contact information of the translation company for verification.",
                icon: Contact
              }
            ].map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Answer Block & Pain Point Addressing */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Will my translation meet UK visa requirements?</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-lg">Yes. The UK Home Office has strict rules on what must appear on the translation. We guarantee 100% compliance with every requirement.</p>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              UKVI vs Standard Translation Requirements
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600 uppercase text-xs font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4 rounded-tl-xl">Requirement</th>
                    <th className="px-6 py-4 text-center">Standard Translation</th>
                    <th className="px-6 py-4 text-center rounded-tr-xl bg-blue-50 text-blue-800">UKVI Approved Translation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Certified Translation Required", "Optional", "Yes"],
                    ["Translator Name Required", "No", "Yes"],
                    ["Translator Signature Required", "Optional", "Yes"],
                    ["Contact Details Required", "No", "Yes"],
                    ["Translation Date Required", "No", "Yes"],
                    ["Original Document Needed", "Optional", "Yes (Scan/Photo)"],
                  ].map(([req, std, ukvi], idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800">{req}</td>
                      <td className="px-6 py-4 text-center text-slate-500">{std}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-700 bg-blue-50/50 flex justify-center items-center gap-2">
                        <Check className="w-4 h-4" /> {ukvi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-100">
              *A standard translation without these specific details will likely result in a visa delay or refusal.
            </p>
          </div>
        </div>
      </section>

      {/* Who Needs UKVI Translation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Which Visa Applications Need This?</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Any UK visa application involving non-English supporting evidence requires certified translation.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsData.map(item => {
              const IconComp = whoNeedsIconMap[item.icon] || UserCheck
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Documents We Translate */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Documents We Translate for UKVI</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">From financial records to civil registries, we translate all required evidence.</p>
          <div className="space-y-6">
            {docs.map(doc => {
              const IconComp = docIconMap[doc.icon] || FileText
              return (
                <div key={doc.title} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{doc.desc}</p>
                      <div className="grid md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">UKVI Relevance</p>
                          <p className="text-sm text-slate-600">{doc.ukvi}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Common Visas</p>
                          <ul className="space-y-1">
                            {doc.cases.map(c => (
                              <li key={c} className="text-sm text-slate-600 flex items-center gap-2">
                                <span className="text-blue-500 font-bold">›</span>{c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specifications Table Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Translation Service Specifications</h2>
            <p className="text-slate-500 mt-2">Everything you need to know about our Home Office compliance.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold tracking-wide">Feature</th>
                  <th className="px-6 py-4 font-bold tracking-wide">Specification Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {specifications.map(([k, v]) => (
                  <tr key={k} className="even:bg-slate-50 hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{k}</td>
                    <td className="px-6 py-4 text-slate-600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Premium Rejection Reasons */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 mb-4">
              <AlertTriangle className="w-4 h-4" /> Avoid Visa Refusals
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why the Home Office Rejects Translations</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">The Home Office is notoriously strict. A single missing detail on your translation can result in a delayed or refused visa application.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { t: "Missing Accuracy Statement", d: "Failing to explicitly state that it's a 'true and accurate translation of the original'." },
              { t: "Self-Translated Docs", d: "Documents translated by the applicant or a family member are instantly rejected." },
              { t: "No Contact Details", d: "The Home Office must be able to independently contact the translator to verify." },
              { t: "Missing Dates", d: "Translations without the exact date of certification are considered invalid." },
              { t: "Converted Financials", d: "Bank statement figures must remain in the original currency, never converted." },
              { t: "Machine Translation", d: "Uncertified use of Google Translate or AI without professional verification." },
              { t: "Ignored Seals & Stamps", d: "Every official stamp and signature on the original must be translated or noted." },
              { t: "Poor Formatting", d: "The translation layout must closely mirror the original document visually." },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <X className="text-red-500 w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{r.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px] overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl" />
              <div className="relative bg-white rounded-[23px] p-6 sm:p-8 flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-inner">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">100% Acceptance Guarantee</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Lisan.pk undergoes a strict multi-step QA process. We guarantee that every single Home Office requirement is rigorously met, ensuring zero rejections due to translation errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">4-Step UKVI Translation Process</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">Simple, fast, and fully compliant with Home Office requirements.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-300 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-blue-600/20">{s.n}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{s.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-center text-white">UKVI Translation Pricing</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">Affordable, transparent pricing from $15–$20 per page. No hidden fees.</p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/10 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold text-blue-400">Document Type</th>
                  <th className="px-6 py-4 font-bold text-blue-400">Delivery Time</th>
                  <th className="px-6 py-4 font-bold text-blue-400">Price</th>
                  <th className="px-6 py-4 font-bold text-blue-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {pricingData.map(r => (
                  <tr key={r.doc} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{r.doc}</td>
                    <td className="px-6 py-4">{r.time}</td>
                    <td className="px-6 py-4 font-bold text-blue-400">{r.price}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-500 text-xs mt-6">Urgent same-day delivery is available at a slight premium. Contact us for bulk document pricing.</p>
        </div>
      </section>

      {/* UKVI Certified Translation Hub */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">UKVI Translation Resources</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Learn more about the specific requirements, costs, and samples for UK visa document translations.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "UKVI Translation Requirements", href: "/services/ukvi-certified-translation/requirements", desc: "Detailed guide on what UKVI expects from a translation." },
              { label: "UKVI Translation Sample", href: "/services/ukvi-certified-translation/sample", desc: "See an exact sample of a Home Office compliant certificate." },
              { label: "UKVI Birth Certificate Translation", href: "/services/ukvi-certified-translation/birth-certificate", desc: "For family, dependent, and settlement visas." },
              { label: "UKVI Marriage Certificate Translation", href: "/services/ukvi-certified-translation/marriage-certificate", desc: "Translate Nikah Namas for UK Spouse visas." },
              { label: "UKVI Translation Cost", href: "/services/ukvi-certified-translation/cost", desc: "Detailed breakdown of pricing per document type." },
            ].map(link => (
              <Link key={link.label} href={link.href}
                className="block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:bg-blue-50/10 hover:shadow-sm transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2 hover:text-blue-700 transition-colors">
                  <span className="text-blue-500 font-bold">→</span>
                  {link.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Everything you need to know about translating documents for UK visas.</p>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-slate-900 list-none hover:text-blue-700 transition-colors">
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <span className="flex-shrink-0 text-blue-600 font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready for Your UKVI Translation?</h2>
          <p className="text-blue-100/70 mb-10 text-lg leading-relaxed">
            Ensure your visa application is accepted without delays. Upload your documents now for a fixed-price quote and 24-hour delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-blue-500/25">
              Upload Document
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20UKVI%20certified%20translation." target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
              WhatsApp Chat
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
