import { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/seo/JsonLd"
import { 
  FileText, 
  Check, 
  X, 
  AlertTriangle, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight,
  ClipboardList,
  UserCheck,
  Languages,
  Clock,
  Printer
} from "lucide-react"

export const metadata: Metadata = {
  title: "USCIS Certified Translation Requirements (8 CFR 103.2) | Lisan.pk",
  description: "Official USCIS translation requirements under 8 CFR 103.2(b)(3). Learn what a certified translation must include to avoid RFEs for immigration.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/requirements" },
  openGraph: {
    title: "USCIS Certified Translation Requirements | Lisan.pk",
    description: "Detailed compliance guide for USCIS certified translation requirements. Avoid immigration application delays and RFEs.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/requirements",
  }
}

const faqData = [
  { 
    q: "Does USCIS verify the credentials of the translator?", 
    a: "USCIS does not require the translator to be state-licensed or court-certified. However, they must sign a formal statement certifying their competency and the accuracy of the translation. If USCIS suspects fraud or inaccuracy, they may verify the translator's identity or issue a Request for Evidence (RFE)." 
  },
  { 
    q: "What happens if my translation does not have an official stamp?", 
    a: "While a stamp is not explicitly mandated by the text of 8 CFR 103.2, in practice, USCIS officers look for corporate letterhead and translator stamps as indicators of professional third-party translation. Submitting translations without stamps or on plain paper increases the risk of an RFE." 
  },
  { 
    q: "Can a friend, relative, or the applicant themselves translate documents for USCIS?", 
    a: "No. The petitioner/applicant and their immediate family members are considered interested parties and cannot translate or certify their own documents for their immigration case, even if they are fluent in both languages. The translator must be an independent third party." 
  },
  { 
    q: "Does USCIS accept digital signatures on certified translations?", 
    a: "Yes. USCIS accepts photocopies and digital uploads (PDFs) of signed certified translations, which means digital signatures and scanned ink signatures are fully accepted for online filings (via myUSCIS portal) and paper filings." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/requirements/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "Requirements", "item": "https://www.lisan.pk/services/uscis-certified-translation/requirements" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/requirements/#faq",
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

export default function RequirementsPage() {
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
            <span className="text-white">Requirements</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Immigration Compliance Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              USCIS Certified Translation <span className="text-emerald-400">Requirements</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              A comprehensive breakdown of federal regulations under 8 CFR 103.2(b)(3) to guarantee 100% acceptance of foreign documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Submit Your Documents
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link href="https://wa.me/923044296295" target="_blank"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white hover:text-emerald-950 font-bold px-8 py-3.5 rounded-full text-sm transition-all">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code Mandate & Regulation */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <ClipboardList className="text-emerald-600 w-6 h-6" />
              The USCIS Code of Federal Regulations Mandate
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              According to the Department of Homeland Security Code of Federal Regulations, specifically <strong>8 CFR 103.2(b)(3)</strong>:
            </p>
            <blockquote className="border-l-4 border-emerald-500 bg-emerald-50/50 p-5 rounded-r-2xl text-slate-800 text-sm italic leading-relaxed font-mono">
              &quot;Any document containing foreign language submitted to USCIS shall be accompanied by a full English translation which the translator has certified as complete and accurate, and by the translator&apos;s certification that he or she is competent to translate from the foreign language into English.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* The 6 Pillars of Compliance */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">The 6 Pillars of USCIS Compliance</h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">Every document must satisfy these six elements to pass USCIS officer evaluation without rejection.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "1. Completeness",
                desc: "Every single character must be translated, including handwritten footnotes, stamps, seals, logos, signatures, and marginal text.",
                icon: FileText
              },
              {
                title: "2. Certification Statement",
                desc: "Must explicitly state the translator is competent in the source/target languages and that the translation is accurate.",
                icon: ShieldCheck
              },
              {
                title: "3. Disinterested Third Party",
                desc: "The translator must be an independent entity. Neither the applicant nor any relative can legally certify the translation.",
                icon: UserCheck
              },
              {
                title: "4. Formatting Match",
                desc: "The visual layout must match the original document as closely as possible, aligning all columns, stamps, and signatures.",
                icon: Printer
              },
              {
                title: "5. Contact & Identity",
                desc: "The certification page must bear the translator's full legal name, physical/email address, phone number, and signature.",
                icon: Languages
              },
              {
                title: "6. No Machine Translation",
                desc: "Unedited Google or AI translation is strictly forbidden. The translation must be drafted and certified by a human translator.",
                icon: AlertTriangle
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mandatory Certification Wording */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Required Certification Statement Wording</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">This exact layout and declaration wording is integrated into all Lisan.pk translations.</p>
          
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-8 font-mono text-xs leading-relaxed shadow-lg">
            <p className="text-emerald-400 font-bold mb-4">// Official Certification Format</p>
            <p className="mb-4">CERTIFICATE OF ACCURACY</p>
            <p className="mb-4">
              I, [Translator Name], hereby certify that I am competent to translate from the [Source Language, e.g., Urdu/Arabic] language into the English language, and that the attached document is a complete and accurate translation of the original document entitled &quot;[Document Title, e.g., Birth Certificate]&quot;.
            </p>
            <p className="mb-4">
              Translator Signature: _______________________<br />
              Translator Name: [Full Name]<br />
              Date of Translation: [MM/DD/YYYY]<br />
              Contact Address: [Physical Address]<br />
              Contact Phone / Email: [Phone / Email]
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Deadlines Table */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">USCIS Translation Pricing Guidelines</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">Standard and express pricing ranges based on document pages and layout complexity.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-sm bg-slate-950">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-emerald-400">
                <tr>
                  <th className="px-6 py-4 font-bold">Service Category</th>
                  <th className="px-6 py-4 font-bold">Standard Delivery</th>
                  <th className="px-6 py-4 font-bold">Rush Delivery</th>
                  <th className="px-6 py-4 font-bold">Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {[
                  ["Standard Single Page (Birth, Marriage, Diploma)", "24 - 48 Hours", "Same-Day Express", "$15 - $20"],
                  ["Multi-Page Documents (Transcripts, Legal Decrees)", "2 - 3 Days", "24-Hour Express", "$15 per page"],
                  ["Complex Medical / Financial Statement Books", "3 - 5 Days", "48-Hour Express", "Custom Quote"],
                ].map(([cat, std, rush, price]) => (
                  <tr key={cat} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">{cat}</td>
                    <td className="px-6 py-4">{std}</td>
                    <td className="px-6 py-4 text-emerald-300 font-medium">{rush}</td>
                    <td className="px-6 py-4 font-bold text-emerald-400">{price}</td>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Requirements FAQ</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Answers to common legal questions regarding immigration certified translations.</p>
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
          <h2 className="text-3xl font-bold mb-4">Secure an RFE-Free Translation</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Get your documents translated by professional certified translators. Fully compliant with 8 CFR 103.2 requirements. Fast delivery in 24 hours.
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
