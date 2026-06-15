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
  title: "USCIS Birth Certificate & FRC Translation | Lisan.pk",
  description: "Certified translation of Urdu, Arabic & foreign birth certificates for USCIS. 100% acceptance guaranteed for green card & visa applications.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/birth-certificate" },
  openGraph: {
    title: "USCIS Birth Certificate Translation Services | Lisan.pk",
    description: "Immigration-approved certified translations of birth certificates. Fast 24-hour delivery, translator stamp and certificate of accuracy included.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/birth-certificate",
  }
}

const faqData = [
  { 
    q: "Do I need to translate the Urdu and English bilingual birth certificate?", 
    a: "Even if your NADRA birth certificate contains both Urdu and English fields, any stamp, seal, signature, or handwritten note in Urdu must be translated and certified. USCIS officers require all non-English text to be translated, so submitting a certified translation of a bilingual certificate is highly recommended to prevent delays." 
  },
  { 
    q: "What if my name spelling on my birth certificate differs from my passport?", 
    a: "We translate names exactly as they are written in the original document, but we will align the spellings in our translation with your passport if specified. We can also include a translator note explaining spelling variations (such as Urdu transliteration differences) to prevent any issues with your petition." 
  },
  { 
    q: "Can I translate my own birth certificate for my USCIS application?", 
    a: "No. Even if you are completely fluent in both languages, USCIS regulations explicitly forbid the applicant or petitioner from translating their own documents. The translation must be completed and certified by a competent independent third party." 
  },
  { 
    q: "Do you translate the Union Council seals and officer signatures?", 
    a: "Yes. Our translations are full and complete. We translate all official seals, stamps, Union Council stamps, and registrar signatures, and represent them in the English translation layout." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/birth-certificate/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "Birth Certificate", "item": "https://www.lisan.pk/services/uscis-certified-translation/birth-certificate" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/birth-certificate/#faq",
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

export default function BirthCertificatePage() {
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
            <span className="text-white">Birth Certificate</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Green Card & Visa Support
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              Birth Certificate <span className="text-emerald-400">Translation for USCIS</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              Certified English translation of NADRA birth certificates, Union Council registers, and foreign certificates. Fully accepted for Form I-485, N-400, and I-130 petitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Upload Birth Certificate
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="https://wa.me/923044296295" target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NADRA & Union Council Details */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Translating Pakistani Birth Certificates</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">NADRA Birth Certificate</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Although modern NADRA birth certificates include English columns, the handwritten text, registrar signatures, official stamps, and Union Council seals are often in Urdu.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Translation of all Urdu stamps and seals</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Perfect name matching matching passport</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Complete formatting layout match</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Manual / Union Council Registers</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Older birth registrations or manual certificates are completely handwritten in Urdu. These are difficult to read and require experienced legal translators.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Accurate transcription of handwriting</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Notations for signatures and illegible stamps</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Certified on professional agency letterhead</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Avoid RFEs Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Preventing USCIS Requests for Evidence (RFEs)</h2>
            <p className="text-emerald-200/80 mb-6 text-sm md:text-base leading-relaxed">
              An RFE on a birth certificate can delay green card applications by 3-6 months. We guarantee a compliant layout including the required **Certificate of Accuracy**, translator details, stamp, signature, and date.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "100% human-made translation accuracy",
                "Full replication of official seal text",
                "Translation of all hand-written margins",
                "Translator contact information included",
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

      {/* Price Table */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Birth Certificate Translation Cost</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Affordable, transparent pricing without hidden validation or delivery fees.</p>
          
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
                  ["NADRA Birth Certificate", "$15", "$25"],
                  ["Manual Birth Register / Union Council", "$20", "$30"],
                  ["Foreign Birth Certificate (Arabic, Spanish, French)", "$20", "$30"],
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
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Everything you need to know about translating birth certificates for immigration.</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Translate Your Birth Certificate?</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Upload a clear scan or picture of your birth certificate. Get your certified USCIS translation delivered in 24 hours.
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
