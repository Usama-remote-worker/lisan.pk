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
  FileSignature, 
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
  BookOpen
} from "lucide-react"

export const metadata: Metadata = {
  title: "USCIS Certified Translation Services for Immigration | Lisan.pk",
  description: "USCIS certified translation services online. Accepted for green card, citizenship & immigration. Birth certificate, marriage certificate & more. Fast delivery.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation" },
  openGraph: {
    title: "USCIS Certified Translation Services | Lisan.pk",
    description: "Professional USCIS certified translation. Accepted for all USCIS immigration applications. 24-hour delivery.",
    url: "https://www.lisan.pk/services/uscis-certified-translation",
    siteName: "Lisan.pk", type: "website",
  },
  twitter: { card: "summary_large_image", title: "USCIS Certified Translation | Lisan.pk", description: "USCIS accepted certified translation services online." },
}

const faqData = [
  { q: "What is a USCIS certified translation?", a: "A USCIS certified translation is a complete, accurate translation of a foreign-language document accompanied by a signed statement from the translator certifying their competency and the accuracy of the translation, as required by 8 CFR 103.2(b)(3)." },
  { q: "Does USCIS require notarization for translations?", a: "No. USCIS does not require notarization. It requires a certification statement signed by a competent translator — not a notary public." },
  { q: "How much does USCIS certified translation cost per page?", a: "Our USCIS certified translation is $15–$20 per page for standard documents such as birth certificates, marriage certificates, and transcripts. Complex legal documents may be quoted separately." },
  { q: "How fast can I get my USCIS translation?", a: "Standard delivery is 24–48 hours. Rush same-day delivery is available for most personal documents at a small premium." },
  { q: "What documents need USCIS certified translation?", a: "Any foreign-language document submitted with a USCIS petition must be accompanied by a certified English translation. Common documents include birth certificates, marriage certificates, divorce decrees, academic transcripts, and police clearance certificates." },
  { q: "Is your USCIS translation accepted for green card applications?", a: "Yes. Our certified translations meet all USCIS requirements under 8 CFR 103.2(b)(3) and are accepted for green card (Form I-485), naturalization (Form N-400), and all other USCIS petitions." },
  { q: "Can I use Google Translate for USCIS?", a: "No. USCIS explicitly rejects machine translations submitted without a human translator certification. A qualified human translator must certify the translation." },
  { q: "Who can certify a translation for USCIS?", a: "Any competent person other than the petitioner can certify a translation. The translator must certify in writing that they are competent in both the source and target languages." },
  { q: "What languages do you translate for USCIS?", a: "We provide USCIS certified translations from Urdu, Arabic, Punjabi, Pashto, Hindi, and 50+ other languages into English." },
  { q: "What details must a USCIS certified translation contain?", a: "It must contain the translator's name, contact information, signature, official stamp, and the certification date. Lisan.pk guarantees all these elements are present on every translation." },
  { q: "Can I submit a digital copy of the certified translation to USCIS?", a: "USCIS accepts both physical and digital copies depending on whether you are filing online or by mail. We deliver both PDF and hard copy formats." },
  { q: "What happens if USCIS rejects my translation?", a: "If a translation is rejected due to our error, we will re-translate and re-certify at no additional cost." },
  { q: "Do you translate birth certificates for USCIS?", a: "Yes. Birth certificate translation is our most common USCIS service. We translate and certify birth certificates from Urdu, Arabic, and all major languages into English." },
  { q: "Do you translate marriage certificates for USCIS?", a: "Yes. We provide certified translations of Nikah Namas and civil marriage certificates for USCIS spousal visa and green card petitions." },
  { q: "How do I order a USCIS certified translation?", a: "Upload your document via our online form or send it on WhatsApp. We will translate, certify, and deliver within 24–48 hours." },
  { q: "What is the difference between certified and notarized translation for USCIS?", a: "USCIS requires certification by a competent translator, not notarization. Notarization is a separate process verifying the translator's identity but is not required by USCIS." },
  { q: "Do you provide hard-copy certified translations by mail?", a: "Yes. We can courier hard copies with wet-ink signatures to addresses in Pakistan and internationally." },
  { q: "Can I get a certified translation for a K-1 visa?", a: "Yes. We regularly translate birth certificates, police clearances, and civil status documents for K-1 fiancé visa petitions." },
  { q: "What format does the USCIS certified translation need to be in?", a: "The translation must mirror the original document's format as closely as possible and include a signed certification statement on the translator's letterhead." },
  { q: "Is Lisan.pk recognized for USCIS translations?", a: "Lisan.pk has 40+ years of experience in certified translation. Our translations include a proper certification statement that fully meets USCIS requirements." },
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
      ]
    },
    {
      "@type": "Service",
      "name": "USCIS Certified Translation Services",
      "provider": { "@type": "Organization", "name": "Lisan.pk", "url": "https://www.lisan.pk" },
      "description": "Professional USCIS certified translation services for immigration documents including birth certificates, marriage certificates, transcripts, and more.",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "USCIS Translation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Birth Certificate Translation for USCIS" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Marriage Certificate Translation for USCIS" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Divorce Certificate Translation for USCIS" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Academic Transcript Translation for USCIS" } },
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
  { title: "Birth Certificate Translation", icon: "FileText", uscis: "Required for Form I-485, N-400, I-130, and all family-based petitions.", cases: ["Green card applications", "Citizenship by birth proof", "Derivative citizenship claims"], desc: "We translate birth certificates from Urdu, Arabic, Punjabi, Hindi, and all major languages into certified English, preserving the original layout and all official seals." },
  { title: "Marriage Certificate Translation", icon: "Heart", uscis: "Required for spousal green cards (I-130/I-485), K-1 fiancé visas, and naturalization.", cases: ["Spousal green card petitions", "K-1 visa applications", "Derivative citizenship"], desc: "We translate Nikah Namas, civil marriage certificates, and court marriage documents. Our translations are accepted for all USCIS spousal immigration petitions." },
  { title: "Divorce Certificate Translation", icon: "Scale", uscis: "Required to prove termination of prior marriages for new spousal petitions.", cases: ["Prior marriage termination proof", "Remarriage visa petitions", "I-130 spousal petitions"], desc: "We translate divorce decrees and khula certificates, preserving all legal language and dates critical for USCIS review." },
  { title: "Academic Transcript Translation", icon: "GraduationCap", uscis: "Required for employment-based visas (EB-2, EB-3) and some humanitarian petitions.", cases: ["EB-2/EB-3 employment visas", "Credential evaluation support", "H-1B petitions"], desc: "We translate university and school transcripts, degrees, and diplomas from all Pakistani and international universities." },
  { title: "Degree & Diploma Translation", icon: "Award", uscis: "Required as supporting evidence for advanced degree employment visa petitions.", cases: ["EB-2 National Interest Waiver", "H-1B specialty occupation", "O-1 extraordinary ability"], desc: "Our certified degree translations maintain the official format and are accepted by USCIS and credential evaluation agencies." },
  { title: "Police Clearance Certificate", icon: "Shield", uscis: "Required for Form I-485 adjustment of status and refugee/asylee petitions.", cases: ["Adjustment of status", "Refugee/asylee applications", "K-1 visa petitions"], desc: "We translate police character certificates issued by Pakistan, Saudi Arabia, UAE, and other countries for USCIS submission." },
  { title: "Affidavit Translation", icon: "FileSignature", uscis: "Required when supporting affidavits are submitted in a foreign language.", cases: ["Supporting evidence affidavits", "Affidavit of support translations", "Sworn statement translations"], desc: "We translate affidavits and sworn statements while preserving the precise legal language required for USCIS adjudication." },
  { title: "Passport Translation", icon: "Globe", uscis: "Required when passport pages contain non-English stamps, visas, or notations.", cases: ["Entry/exit record translation", "Prior visa history", "Travel document translation"], desc: "We provide certified translations of passport biographical pages, entry/exit stamps, and foreign visa pages." },
]

const docIconMap: Record<string, React.ComponentType<any>> = {
  FileText: FileText,
  Heart: Heart,
  Scale: Scale,
  GraduationCap: GraduationCap,
  Award: Award,
  Shield: Shield,
  FileSignature: FileSignature,
  Globe: Globe,
}

const whoNeedsData = [
  { title: "Green Card Applicants", icon: "UserCheck", desc: "Form I-485 adjustment of status requires certified translations of foreign birth, marriage, and police certificates." },
  { title: "Citizenship Applicants", icon: "Shield", desc: "Form N-400 naturalization applications require certified translations of all supporting foreign-language documents." },
  { title: "Family Immigration", icon: "Users", desc: "I-130 family-based petitions require certified translations of sponsor and beneficiary foreign documents." },
  { title: "Employment Immigration", icon: "Briefcase", desc: "EB-2, EB-3, and H-1B petitions require certified translations of foreign degrees and academic credentials." },
  { title: "Student Visa Applicants", icon: "GraduationCap", desc: "F-1 student visa applicants need certified translations of transcripts, degrees, and financial documents." },
  { title: "K-1 Visa Applicants", icon: "Heart", desc: "Fiancé(e) visa petitions require certified translations of birth certificates, police clearances, and civil status documents." },
]

const whoNeedsIconMap: Record<string, React.ComponentType<any>> = {
  UserCheck: UserCheck,
  Shield: Shield,
  Users: Users,
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Heart: Heart,
}

const pricingData = [
  { doc: "Birth Certificate", time: "24 hours", price: "$15 per page", note: "Most common USCIS document" },
  { doc: "Marriage Certificate / Nikah Nama", time: "24 hours", price: "$20 per page", note: "Includes all seals & signatures" },
  { doc: "Divorce Decree", time: "24–48 hours", price: "$20 per page", note: "Complex legal language" },
  { doc: "Academic Degree", time: "24 hours", price: "$15 per page", note: "University format preserved" },
  { doc: "Academic Transcript", time: "24–48 hours", price: "$20 per page", note: "Per page (multi-page)" },
  { doc: "Police Clearance Certificate", time: "24 hours", price: "$15 per page", note: "All issuing countries accepted" },
]

const specifications = [
  ["Compliance Standard", "8 CFR 103.2(b)(3) Fully Compliant"],
  ["Accepted By", "USCIS, U.S. Embassies, NVC, DOL, and Board of Immigration Appeals"],
  ["Certified Items Included", "Translator's Name, Contact Info, Signature, Official Stamp, and Date"],
  ["Starting Price", "$15 - $20 per page"],
  ["Delivery Time", "24–48 hours (same-day rush service available)"],
  ["Languages Supported", "Urdu, Arabic, Punjabi, Pashto, Hindi + 50 more"],
  ["Delivery Format", "Certified PDF (email) + Physical copies (hard copy via courier)"],
  ["Notarization", "Not required by USCIS (provided only upon request)"],
  ["Translation Method", "100% human translation (no uncertified machine translation)"],
]

const steps = [
  { n: "01", t: "Upload Document", d: "Send your document via our online form or WhatsApp. Any format accepted — photo, scan, or PDF." },
  { n: "02", t: "Expert Translation", d: "A qualified translator fluent in your source language produces the complete, accurate English translation." },
  { n: "03", t: "Quality Review", d: "A senior linguist verifies names, dates, and document details against the original before certification." },
  { n: "04", t: "Certified Delivery", d: "We attach the USCIS-compliant certification statement and deliver via email (PDF) within 24–48 hours." },
]

export default function USCISCertifiedTranslationPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <JsonLd data={structuredData} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-sm text-slate-500 font-medium">
            <li><Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link></li>
            <li className="select-none">/</li>
            <li><Link href="/services" className="hover:text-emerald-600 transition-colors">Services</Link></li>
            <li className="select-none">/</li>
            <li className="text-slate-800 font-semibold">USCIS Certified Translation</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.10)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-8">
              USCIS Compliant · 8 CFR 103.2(b)(3)
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white">
              USCIS Certified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Translation Services
              </span>
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Professional certified translations accepted by USCIS for green card, citizenship, family, and employment immigration petitions. Delivered in 24–48 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5">
                Upload Your Document
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20USCIS%20certified%20translation." target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
                WhatsApp Us
              </Link>
            </div>
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { stat: "40+", label: "Years Experience" },
                { stat: "24hr", label: "Turnaround Time" },
                { stat: "50+", label: "Languages" },
                { stat: "100%", label: "USCIS Accepted" },
              ].map(b => (
                <div key={b.stat} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="text-2xl font-bold text-emerald-400">{b.stat}</div>
                  <div className="text-xs text-emerald-50/60 font-medium mt-1">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      </section>

      {/* AI Answer Block */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What is a USCIS Certified Translation?</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              A <strong>USCIS certified translation</strong> is a complete, accurate English translation of a foreign-language document, accompanied by a signed statement from a competent human translator certifying the accuracy of the translation and their language competency. It is required by USCIS under <strong>8 CFR 103.2(b)(3)</strong> for all immigration petitions involving non-English documents.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Complete translation of every word" },
                { label: "Signed certification statement" },
                { label: "No notarization required" },
              ].map(i => (
                <div key={i.label} className="flex items-center gap-3 bg-emerald-50 rounded-xl p-4">
                  <Check className="text-emerald-600 font-bold w-5 h-5 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{i.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE VALUE SECTION: Certified Document Criteria */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              100% Verification Proof
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-3">Our USCIS Certified Translation Standards</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              To make your application unique and avoid requests for evidence (RFEs), Lisan.pk certifies each document in full compliance with immigration requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Translator Identity & Contact",
                desc: "Every certificate clearly displays the full legal name and official contact details of the translator for direct verification.",
                icon: Contact
              },
              {
                title: "Signed & Stamped",
                desc: "Each translation is hand-signed by the competent translator and bears our official corporate stamp on corporate letterhead.",
                icon: ShieldCheck
              },
              {
                title: "Certification Date",
                desc: "Includes the precise date of certification to ensure document validity and chronological alignment with your petition.",
                icon: Calendar
              }
            ].map((item, idx) => {
              const IconComp = item.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
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

      {/* Who Needs USCIS Translation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Who Needs USCIS Certified Translation?</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Any USCIS petition involving foreign-language documents requires certified translation.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoNeedsData.map(item => {
              const IconComp = whoNeedsIconMap[item.icon] || UserCheck
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Documents We Translate for USCIS</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Certified English translations for all document types required by USCIS petitions.</p>
          <div className="space-y-6">
            {docs.map(doc => {
              const IconComp = docIconMap[doc.icon] || FileText
              return (
                <div key={doc.title} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{doc.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{doc.desc}</p>
                      <div className="grid md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">USCIS Relevance</p>
                          <p className="text-sm text-slate-600">{doc.uscis}</p>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Common Use Cases</p>
                          <ul className="space-y-1">
                            {doc.cases.map(c => (
                              <li key={c} className="text-sm text-slate-600 flex items-center gap-2">
                                <span className="text-emerald-500 font-bold">›</span>{c}
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

      {/* Consolidated Table Section: Service Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">USCIS Translation Specifications</h2>
            <p className="text-slate-500 mt-2">Core details of our USCIS certified translation services.</p>
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
                  <tr key={k} className="even:bg-slate-50 hover:bg-emerald-50/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{k}</td>
                    <td className="px-6 py-4 text-slate-600">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* USCIS Requirements */}
      <section className="py-16 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 text-center text-white">USCIS Translation Requirements</h2>
          <p className="text-emerald-200/70 text-center mb-10 max-w-xl mx-auto">Under 8 CFR 103.2(b)(3), every foreign-language document submitted to USCIS must include a certified English translation.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { t: "Complete Translation", d: "Every word on the document must be translated — including seals, stamps, headers, and marginalia. Partial translations are rejected." },
              { t: "Certification Statement", d: "A signed, written statement from the translator certifying (1) the accuracy of the translation and (2) their competency in both languages." },
              { t: "Translator Competency", d: "The translator must be competent in both the source and target language. The petitioner themselves cannot translate their own documents." },
              { t: "Formatting Requirements", d: "The translation should mirror the format of the original document as closely as possible, preserving the layout and structure." },
              { t: "Third-Party Requirement", d: "The translator must be a disinterested third party — not the petitioner or a family member of the petitioner." },
              { t: "No Machine Translation", d: "Google Translate or other AI tools are not accepted. A qualified human translator must produce and certify the translation." },
            ].map(r => (
              <div key={r.t} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-base font-bold text-emerald-400 mb-3">{r.t}</h3>
                <p className="text-emerald-50/70 text-sm leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>

          {/* Rejection Reasons */}
          <div className="bg-white border border-emerald-500/20 rounded-3xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-emerald-600 shrink-0" />
              Common USCIS Translation Rejection Reasons
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Missing or incomplete certification statement",
                "Partial translation — not every word translated",
                "Incorrect spelling of names vs. original",
                "Petitioner translated their own documents",
                "Using machine/AI translation without human certification",
                "Missing translator's signature, contact information, or date",
                "Translation does not mirror original document format",
                "Stamps and seals left untranslated",
              ].map(r => (
                <div key={r} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                  <X className="text-emerald-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Our 4-Step USCIS Translation Process</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">Simple, fast, and fully compliant with USCIS requirements.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-emerald-300 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-emerald-600/20">{s.n}</div>
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
          <h2 className="text-3xl font-bold mb-3 text-center text-white">USCIS Translation Pricing</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">Transparent pricing from $15–$20 per page. No hidden fees. Rush delivery available for all document types.</p>
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/10 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold text-emerald-400">Document Type</th>
                  <th className="px-6 py-4 font-bold text-emerald-400">Delivery Time</th>
                  <th className="px-6 py-4 font-bold text-emerald-400">Price</th>
                  <th className="px-6 py-4 font-bold text-emerald-400">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {pricingData.map(r => (
                  <tr key={r.doc} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{r.doc}</td>
                    <td className="px-6 py-4">{r.time}</td>
                    <td className="px-6 py-4 font-bold text-emerald-400">{r.price}</td>
                    <td className="px-6 py-4 text-xs text-slate-500">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-500 text-xs mt-6">Same-day rush delivery available at a premium. Contact us for a custom quote on complex or multi-page documents.</p>
        </div>
      </section>

      {/* Certified vs Notarized Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Certified Translation vs Notarized Translation</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Understanding the difference is critical for avoiding USCIS rejection.</p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Feature</th>
                  <th className="px-6 py-4 font-bold">Certified Translation</th>
                  <th className="px-6 py-4 font-bold">Notarized Translation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["Required by USCIS", "Yes", "Not required"],
                  ["Who Signs", "Competent translator", "Notary public"],
                  ["What Is Certified", "Translation accuracy", "Translator's identity only"],
                  ["Legal Use", "Immigration, official submissions", "Contracts, legal proceedings"],
                  ["Cost", "Lower", "Higher (notary fees added)"],
                  ["Turnaround", "24–48 hours", "Additional time for notary"],
                ].map(([f, c, n]) => (
                  <tr key={f} className="even:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-800">{f}</td>
                    <td className="px-6 py-4 text-emerald-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        {c}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <X className="w-4 h-4 text-slate-400 shrink-0" />
                        {n}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Experience Stats */}
      <section className="py-16 bg-emerald-50 border-y border-emerald-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Real Experience. Proven Results.</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">Our track record in certified translation speaks for itself.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "40+", label: "Years in Translation" },
              { stat: "50+", label: "Languages Supported" },
              { stat: "100+", label: "Countries Served" },
              { stat: "24hr", label: "Typical Turnaround" },
            ].map(s => (
              <div key={s.stat} className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                <div className="text-4xl font-black text-emerald-600 mb-2">{s.stat}</div>
                <div className="text-sm font-semibold text-slate-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Everything immigration applicants ask about USCIS certified translation.</p>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-200 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-slate-900 list-none hover:text-emerald-700 transition-colors">
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <span className="flex-shrink-0 text-emerald-600 font-black text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* USCIS Certified Translation Hub */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">USCIS Certified Translation Hub</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Explore our dedicated guides and specialized services for USCIS immigration compliance.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "USCIS Translation Requirements", href: "/services/uscis-certified-translation/requirements", desc: "Compliance guidelines under 8 CFR 103.2(b)(3)." },
              { label: "Birth Certificate Translation", href: "/services/uscis-certified-translation/birth-certificate", desc: "Certified translation of NADRA & manual birth certificates." },
              { label: "Marriage Certificate Translation", href: "/services/uscis-certified-translation/marriage-certificate", desc: "Urdu Nikah Nama & marriage certificate translation." },
              { label: "Academic Document Translation", href: "/services/uscis-certified-translation/academic-documents", desc: "Transcripts, diplomas, and degrees for WES/USCIS." },
              { label: "USCIS Translation Cost", href: "/services/uscis-certified-translation/cost", desc: "Transparent per-page rates and express delivery options." },
              { label: "USCIS Translation FAQ", href: "/services/uscis-certified-translation/faq", desc: "Answers to common immigration translation questions." },
            ].map(link => (
              <Link key={link.label} href={link.href}
                className="block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emerald-500 hover:bg-emerald-50/10 hover:shadow-sm transition-all duration-300">
                <h3 className="font-bold text-slate-900 mb-1 flex items-center gap-2 hover:text-emerald-700 transition-colors">
                  <span className="text-emerald-500 font-bold">→</span>
                  {link.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Related Translation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Birth Certificate Translation", href: "/services/translation/birth-certificate" },
              { label: "Marriage Certificate Translation", href: "/services/translation/marriage-certificate" },
              { label: "Academic Translation", href: "/services/translation/academic" },
              { label: "Legal Document Translation", href: "/services/translation/legal" },
              { label: "Arabic Translation Services", href: "/services/translation/arabic" },
              { label: "Urdu Translation Services", href: "/services/translation/urdu" },
            ].map(link => (
              <Link key={link.label} href={link.href}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-4 text-sm font-semibold text-slate-700 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm transition-all duration-200">
                <span className="text-emerald-500 font-bold">→</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready for Your USCIS Translation?</h2>
          <p className="text-emerald-100/70 mb-10 text-lg leading-relaxed">
            Upload your document now and receive a USCIS-compliant certified translation for $15–$20 per page in 24–48 hours. Trusted by immigration applicants across Pakistan and worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 shadow-lg shadow-emerald-500/25">
              Upload Document
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20USCIS%20certified%20translation." target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
              WhatsApp Chat
            </Link>
            <Link href="mailto:contact@lisan.pk"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
