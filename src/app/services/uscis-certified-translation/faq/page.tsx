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
  title: "USCIS Certified Translation FAQ | Lisan.pk",
  description: "Frequently asked questions about translating birth certificates, marriage licenses & transcripts for USCIS. 8 CFR 103.2 compliant guidelines.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/faq" },
  openGraph: {
    title: "USCIS Certified Translation FAQ | Lisan.pk",
    description: "Detailed answers regarding certified translations for immigration. Names, stamps, signatures, and notary requirements explained.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/faq",
  }
}

const faqData = [
  { 
    q: "What is a USCIS certified translation?", 
    a: "Under 8 CFR 103.2(b)(3), a certified translation is a complete, accurate English translation of a foreign-language document accompanied by a signed statement from a competent translator certifying their competency and the accuracy of the translation." 
  },
  { 
    q: "Does USCIS require notarization for translations?", 
    a: "No. Since 2011, USCIS explicitly does not require notarization. They only require a signed certification statement from a competent translator. Some agencies add notarization as an extra fee, but it is not necessary for immigration applications." 
  },
  { 
    q: "What happens if a stamp or seal is left untranslated?", 
    a: "If an official seal, stamp, or registrar signature is left untranslated, USCIS may reject the document or issue a Request for Evidence (RFE). Professional translations must represent all official stamps, seals, and signatures in the English layout." 
  },
  { 
    q: "Can I translate my own documents for USCIS?", 
    a: "No. The petitioner/applicant and their immediate family members cannot translate their own documents for their immigration case. The translator must be an independent third party." 
  },
  { 
    q: "Do you translate birth certificates from Urdu and Arabic into English?", 
    a: "Yes. We translate NADRA birth certificates, marriage certificates (Nikah Nama), police clearances, and university transcripts from Urdu, Arabic, and all major languages into English." 
  },
  { 
    q: "How fast can I get my certified translation?", 
    a: "Our standard turnaround is 24–48 hours. We also offer same-day express delivery within 12 hours for urgent immigration submissions." 
  },
  { 
    q: "What details must a USCIS certified translation contain?", 
    a: "It must contain the translator's name, contact information, signature, official stamp, and the certification date. Lisan.pk guarantees all these elements are present on every translation." 
  },
  { 
    q: "What format does the USCIS certified translation need to be in?", 
    a: "The translation must mirror the original document's format as closely as possible and include a signed certification statement on the translator's letterhead." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/faq/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "FAQ", "item": "https://www.lisan.pk/services/uscis-certified-translation/faq" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/faq/#faq",
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

export default function FAQPage() {
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
            <span className="text-white">FAQ</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Immigration Knowledge Base
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              USCIS Certified Translation <span className="text-emerald-400">FAQ Hub</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              Expert answers to all key legal, formatting, name spelling, and notary questions regarding certified translations for immigration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Upload Your Document
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

      {/* Grid of FAQ Categories */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Translation Guidelines Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Legal Regulations</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                USCIS requirements are governed by 8 CFR 103.2(b)(3). Translations must include a signed Certificate of Accuracy, and translators must certify they are fluent and competent in both languages.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Formatting & Layouts</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                USCIS officers review hundreds of applications daily. Standardizing your layout to mirror the original document simplifies review and prevents name spelling or date structure queries.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Translator Credentials</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                No official state license is required by USCIS, but the translator must be a disinterested third party (not the applicant or their family member) and must provide their physical signature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Accordion */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions Accordion</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-200 transition-colors shadow-sm">
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

      {/* Specifications Overview */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Translation Specifications Summary</h2>
          <p className="text-slate-500 mb-10">Standard turnaround times, pricing, and compliance details.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-emerald-600 mb-1">$15</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Per Page Rate</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-emerald-600 mb-1">24h</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Standard Turnaround</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">USCIS Accepted</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="text-2xl font-bold text-emerald-600 mb-1">8 CFR</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Compliant Wording</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Have More Questions? Chat with Us</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Upload your document or connect with our support team on WhatsApp for immediate help and accurate pricing quotes.
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
