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
  title: "USCIS Marriage Certificate Translation Services | Lisan.pk",
  description: "Certified translation of Urdu Nikah Nama & NADRA marriage registration certificates for USCIS. 100% acceptance guaranteed for spousal visas.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/marriage-certificate" },
  openGraph: {
    title: "USCIS Marriage Certificate Translation Services | Lisan.pk",
    description: "Expert certified translation of marriage certificates and Nikah Nama. Fast 24-48 hour delivery. Meets all USCIS immigration requirements.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/marriage-certificate",
  }
}

const faqData = [
  { 
    q: "Does USCIS require both the Urdu Nikah Nama and the NADRA MRC translated?", 
    a: "If your marriage occurred in Pakistan, the primary legal document is the Urdu Nikah Nama. While the NADRA Marriage Registration Certificate (MRC) is a bilingual summary, USCIS often requests the full Urdu Nikah Nama to verify dowry terms, witness signatures, and theological details. Translating both documents ensures your petition is complete and RFE-free." 
  },
  { 
    q: "What if the bride's name wasn't updated on the marriage certificate?", 
    a: "We translate the names exactly as they are written in the original certificate. If there are spelling mismatches or name variations, we can add a formal translator's note on our certified translation letterhead aligning the name with the bride's current passport. This prevents queries during the I-130 spousal review." 
  },
  { 
    q: "Do you translate Quranic verses and calligraphy printed on the Nikah Nama?", 
    a: "Yes. Every element, including standard religious headers, verses, witness details, signatures, and registrar stamps, is translated and represented in our certified English layout. Partial translations will result in immediate rejection by USCIS." 
  },
  { 
    q: "How do you handle hand-written witness signatures and dower terms?", 
    a: "We accurately transcribe all handwritten text, including numbers, dower amounts (Mehr), dates, and signatures (represented as '[Signature]' or '[Stamp]'). We ensure the dower terms are translated with precise legal terminology." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/marriage-certificate/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "Marriage Certificate", "item": "https://www.lisan.pk/services/uscis-certified-translation/marriage-certificate" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/marriage-certificate/#faq",
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

export default function MarriageCertificatePage() {
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
            <span className="text-white">Marriage Certificate</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Spousal Visa & I-130 Support
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              Marriage Certificate <span className="text-emerald-400">Translation for USCIS</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              Certified translation of Urdu Nikah Namas, Marriage Registration Certificates (MRC), and foreign marriage registers. Accepted for all spousal green card petitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Upload Marriage Certificate
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

      {/* Understanding Nikah Nama vs MRC */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Translating Nikah Nama vs. NADRA MRC</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Urdu Nikah Nama (2-4 Pages)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The Urdu Nikah Nama is the standard marriage contract in Pakistan. It is a detailed document containing hand-written details about both families, dower terms, witnesses, and legal conditions.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Complete translation of all 25 conditions</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Exact transcription of handwritten dower values</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Professional B2B/B2C formatting alignment</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">NADRA Marriage Certificate (MRC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                The Marriage Registration Certificate (MRC) is a bilingual NADRA printout. However, all Urdu fields, signatures, and registrar stamps must be formally translated and certified for USCIS.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Fast 24-hour turnaround</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Direct mapping of bilingual columns</li>
                <li className="flex items-center gap-2"><Check className="text-emerald-600 w-4 h-4" /> Includes official translator certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Block */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Immigration-Approved Spousal Translation Standards</h2>
            <p className="text-emerald-200/80 mb-6 text-sm md:text-base leading-relaxed">
              USCIS spousal petitions (Form I-130) are heavily scrutinized. We ensure that your translation matches the exact passport spelling of both spouses, and includes the required Certificate of Accuracy with complete contact details and signatures.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "100% human-verified accuracy",
                "Translation of all handwritten text/dates",
                "Official translator stamp & signature",
                "Full replication of official seals",
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
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">Marriage Document Translation Cost</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Flat rates for standard marriage certificates and Nikah Nama translations.</p>
          
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
                  ["NADRA Marriage Certificate (MRC)", "$15", "$25"],
                  ["Urdu Nikah Nama (Full 4-Page Translation)", "$30", "$45"],
                  ["Foreign Marriage Certificate (Arabic, Spanish, French)", "$20", "$30"],
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
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Answers to common questions about translating marriage certificates for USCIS petitions.</p>
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
          <h2 className="text-3xl font-bold mb-4">Translate Your Marriage Certificate Today</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Upload your marriage contract or certificate to get a certified, USCIS-compliant translation in 24 hours.
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
