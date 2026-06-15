import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/seo/JsonLd"
import { 
  FileText, 
  Check, 
  X, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight,
  UserCheck,
  Languages,
  Clock,
  Briefcase
} from "lucide-react"

export const metadata: Metadata = {
  title: "USCIS Academic Degree Translation Services | Lisan.pk",
  description: "Certified translation of degrees, transcripts & diplomas for USCIS. HEC & credential evaluation (WES, ECE) aligned translations.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/academic-documents" },
  openGraph: {
    title: "USCIS Academic Document Translation Services | Lisan.pk",
    description: "Expert certified translation of school/university transcripts and degrees. Fast delivery, accepted by USCIS and credential evaluation services.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/academic-documents",
  }
}

const faqData = [
  { 
    q: "Do I need my academic documents translated if they are already in English but have Urdu stamps?", 
    a: "Yes. USCIS requires all non-English text on a submitted document to be translated. If your degree or transcript is in English but contains Urdu-language stamps, registrar seals, attestation stamps (such as HEC or MOFA), or handwritten signatures, you must provide a certified English translation covering these non-English elements." 
  },
  { 
    q: "Is your academic translation accepted by credential evaluation services like WES?", 
    a: "Yes. Our translations meet the strict criteria of World Education Services (WES), Educational Credential Evaluators (ECE), Josef Silny, and other NACES-member evaluation agencies. We provide the certified translation along with the required translator certification statement." 
  },
  { 
    q: "Do you translate course descriptions or syllabus documents?", 
    a: "We regularly translate course syllabus booklets, course descriptions, and module specifications. These are charged based on word count rather than a flat per-page rate. Contact us for a customized quote for large syllabus files." 
  },
  { 
    q: "How are grading scales, credit hours, or GPA conversions handled?", 
    a: "We translate all content on your academic transcript exactly as it is written in the original document, including local grading scales or divisions (e.g., First Division). We do not perform GPA conversions (such as converting to a 4.0 scale), as that is the role of the credential evaluation agency." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/academic-documents/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "Academic Documents", "item": "https://www.lisan.pk/services/uscis-certified-translation/academic-documents" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/academic-documents/#faq",
      "mainEntity": faqData.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
}

export default function AcademicDocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <JsonLd data={schemaData} />

      {/* Header / Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex mb-6 text-xs text-emerald-300/80 font-medium tracking-wide">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Translation Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/uscis-certified-translation" className="hover:text-white transition-colors">USCIS Certified Translation</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Academic Documents</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Employment & Education Visas
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              Academic Document <span className="text-emerald-400">Translation for USCIS</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              Certified English translation of school/university degrees, diplomas, academic transcripts, and course records. Accepted for EB-2/EB-3 visas and university admissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Upload Academic Documents
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="https://wa.me/923044296295" target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                WhatsApp Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Degrees vs Transcripts Details */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Academic Document Translation Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Degrees & Diplomas</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                We translate university graduation degrees, college diplomas, and school passing certificates, ensuring all Latin honors, university board names, and seals are fully translated.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Clear translation of HEC/MOFA stamps</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Exact name matching matching passport</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Preserved certificate layout design</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Academic Transcripts</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Transcripts are highly complex table layouts featuring course codes, subject names, credit hours, grades, and marks. We recreate the grid structure exactly in English.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Symmetrical tabular formatting</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Precise course title translations</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Accurate date and grading scale rendering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NACES / WES Compliance */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-4">WES & ECE Credential Evaluation Accepted</h2>
            <p className="text-emerald-200/80 mb-6 text-sm md:text-base leading-relaxed">
              If you are submitting your degree for credential evaluation (for employment visas like H-1B, EB-2 NIW, or university admissions), NACES evaluation bodies require professional certified translations. We guarantee 100% acceptance by WES, ECE, and Josef Silny.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Compliant translator certification statement",
                "Translation of all back-side attestation stamps",
                "Includes official translator contact info",
                "Delivered in PDF format for direct upload",
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                  <span className="text-emerald-400">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Academic Document Translation Cost</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Flat rates for degrees and transcripts. Volume discounts available for multi-page transcripts.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Document Type</th>
                  <th className="px-6 py-4 font-bold">Standard Price</th>
                  <th className="px-6 py-4 font-bold">Express Same-Day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["Degree / Diploma Certificate", "$15", "$25"],
                  ["Academic Transcript (Page 1)", "$15", "$25"],
                  ["Academic Transcript (Additional Pages)", "$12 per page", "$20 per page"],
                  ["Course Syllabus / Descriptions", "Custom Quote", "Custom Quote"],
                ].map(([doc, price, express]) => (
                  <tr key={doc} className="even:bg-slate-50 hover:bg-emerald-50/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{doc}</td>
                    <td className="px-6 py-4 text-emerald-700 font-bold">{price}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">{express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Answers to common questions about translating academic transcripts and degrees for immigration.</p>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Translate Your Academic Documents</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Upload your graduation degrees, transcripts, or certificates. Receive a certified, USCIS-compliant translation in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
              Upload Document
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="https://wa.me/923044296295" target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300">
              WhatsApp Chat
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
