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
  title: "USCIS Certified Translation Cost & Fees | Lisan.pk",
  description: "Transparent USCIS translation pricing from $15 per page. No hidden fees. Certified translator stamp, signature and certificate of accuracy included.",
  alternates: { canonical: "https://www.lisan.pk/services/uscis-certified-translation/cost" },
  openGraph: {
    title: "USCIS Certified Translation Cost & Fees | Lisan.pk",
    description: "Clear and affordable certified translation pricing. Standard delivery in 24-48 hours. Express options available.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/cost",
  }
}

const faqData = [
  { 
    q: "Are there any hidden fees or certification charges?", 
    a: "No. Our pricing is completely transparent. The quoted rate includes the full translation, formatting, the signed Certificate of Accuracy, corporate stamp, and digital delivery in PDF format. There are no additional validation or administrative fees." 
  },
  { 
    q: "Do you offer discounts for large volumes or multi-document bundles?", 
    a: "Yes. For multi-document applications (e.g., spousal green card cases requiring birth certificates, marriage certificates, police clearances, and affidavits), we offer package discounts. Contact us on WhatsApp with all your documents for a customized quote." 
  },
  { 
    q: "Why do some online translation agencies charge $40+ per page?", 
    a: "Many large US-based translation agencies charge $30-$50 per page due to heavy marketing overhead and middleman margins. Because we employ direct, qualified in-house translators and operate with lean margins, we pass the savings directly to you, providing the exact same certified compliance for $15-$20." 
  },
  { 
    q: "What is included in the base per-page cost?", 
    a: "Each page translated includes: (1) Complete translation of all text, seals, stamps, and margins; (2) Translation formatting to mirror the original; (3) Professional translator proofreading; (4) Certificate of Accuracy with signature and stamp; and (5) High-resolution PDF delivery." 
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/cost/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "USCIS Certified Translation", "item": "https://www.lisan.pk/services/uscis-certified-translation" },
        { "@type": "ListItem", "position": 4, "name": "Cost", "item": "https://www.lisan.pk/services/uscis-certified-translation/cost" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/uscis-certified-translation/cost/#faq",
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

export default function CostPage() {
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
            <span className="text-white">Cost</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              Affordable & Transparent Pricing
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-6 mb-4">
              USCIS Certified Translation <span className="text-emerald-400">Cost & Pricing</span>
            </h1>
            <p className="text-lg text-emerald-50/80 leading-relaxed mb-8">
              Certified document translations from $15–$20 per page. 100% acceptance guaranteed for immigration, visa, and green card applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-emerald-500/25">
                Get a Free Quote
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

      {/* Pricing Matrix */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-3">USCIS Translation Pricing Matrix</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Standard rates per document type and page count. Clear timelines included.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Document Type</th>
                  <th className="px-6 py-4 font-bold">Pages</th>
                  <th className="px-6 py-4 font-bold">Standard Price (24-48h)</th>
                  <th className="px-6 py-4 font-bold">Express Price (Same-Day)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  ["Birth Certificate (NADRA / Register)", "1 Page", "$15", "$25"],
                  ["Marriage Certificate (NADRA MRC)", "1 Page", "$15", "$25"],
                  ["Urdu Nikah Nama (Full Urdu License)", "2-4 Pages", "$30 - $45", "$45 - $60"],
                  ["Divorce Decree / Khula Nama", "1-2 Pages", "$20 - $35", "$30 - $45"],
                  ["Academic Degree / Diploma", "1 Page", "$15", "$25"],
                  ["Academic Transcript (Detailed Mark Sheet)", "Multi-Page", "$15 per page", "$20 per page"],
                  ["Police Clearance Certificate", "1 Page", "$15", "$25"],
                  ["Legal Affidavit / Sworn Statement", "1 Page", "$20", "$30"],
                ].map(([doc, pages, price, express]) => (
                  <tr key={doc} className="even:bg-slate-50 hover:bg-emerald-50/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{doc}</td>
                    <td className="px-6 py-4 text-slate-500">{pages}</td>
                    <td className="px-6 py-4 text-emerald-700 font-bold">{price}</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">{express}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">What Factors Affect the Cost?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">1. Page Count</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Standard documents up to 250 words are counted as a single page. Multi-page transcripts or complex legal contracts are charged per page.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">2. Document Legibility</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Clean printed PDFs or clear scans are translated quickly. Highly faded, handwritten, or manual registers require more transcription time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2">3. Urgency / Delivery</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Standard turnaround is 24-48 hours. If you need same-day delivery or super-express delivery within 12 hours, a rush premium is added.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Included in the Price */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-emerald-950 text-white rounded-3xl p-8 md:p-12 shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">What is Included in the Price?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Full professional translation by competent linguist",
                "Formatting mirroring original layout & structures",
                "Signed Certificate of Accuracy (8 CFR 103.2 compliant)",
                "Official translation agency stamp & legal signature",
                "High-resolution PDF file delivered via email",
                "Lifetime translation accuracy guarantee",
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

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-center mb-10 max-w-xl mx-auto">Answers to common queries regarding USCIS certified translation cost and fees.</p>
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
          <h2 className="text-3xl font-bold mb-4">Get an Exact Price Quote Now</h2>
          <p className="text-emerald-100/70 mb-10 leading-relaxed text-sm md:text-base">
            Upload your document secure portal. We will review the page volume and layout and provide a formal translation quote within 10-15 minutes.
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
