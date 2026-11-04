import { Metadata } from 'next'
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  ShieldCheck,
  DollarSign,
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Translation Charges in Pakistan (2026) | Document Prices & Quotes | LISAN.PK",
  description: "Check LISAN.PK translation charges in Pakistan: standard document translation PKR 1,200, bachelor's transcripts PKR 2,500, and scholarship document packages. See additional costs and request an exact quote.",
  alternates: {
    canonical: "https://www.lisan.pk/pricing",
  },
  openGraph: {
    title: "Translation Charges in Pakistan (2026) | Document Prices & Quotes | LISAN.PK",
    description: "Check LISAN.PK translation charges in Pakistan: standard document translation PKR 1,200, bachelor's transcripts PKR 2,500, and scholarship document packages. See additional costs and request an exact quote.",
    url: "https://www.lisan.pk/pricing",
    type: "website",
  }
}

const faqs = [
  {
    "q": "What is the cost of document translation in Pakistan in 2026?",
    "a": "LISAN.PK lists PKR 1,200 for a qualifying normal document or degree translation, and PKR 2,500 for a bachelor's transcript. These are LISAN.PK's own rates; other companies and more complex documents can cost differently."
  },
  {
    "q": "Is PKR 1,200 a fixed price for every page?",
    "a": "No. It is LISAN.PK's published standard per-document category. Large, complex, handwritten or specialist documents require review and may be quoted differently."
  },
  {
    "q": "How much does Arabic translation cost per page in Pakistan?",
    "a": "There is no single national rate. Send the full document and specify English → Arabic or Urdu → Arabic; the quote will reflect length, complexity and the required certification format."
  },
  {
    "q": "How much does a degree translation cost?",
    "a": "LISAN.PK lists PKR 1,200 for a normal degree/document translation. Confirm that your degree fits the standard scope and whether any additional certificate is required."
  },
  {
    "q": "What is the bachelor's transcript translation price?",
    "a": "LISAN.PK currently lists PKR 2,500 for a bachelor's transcript translation. Provide all transcript pages to confirm the scope."
  },
  {
    "q": "What is the Nikah Nama translation price?",
    "a": "A full Nikah Nama is assessed separately, particularly if handwritten or multi-page. Request a quote rather than assuming the price of a short MRC applies to the marriage contract."
  },
  {
    "q": "Is NADRA MRC translation the same price as Nikah Nama translation?",
    "a": "Not necessarily. They are different records with different content and lengths. Send the correct document and destination requirements for an exact quote."
  },
  {
    "q": "Are certified translation and notarisation the same thing?",
    "a": "No. Certification concerns the translation and the certification statement provided with it; notarisation is a separate legal procedure when required."
  },
  {
    "q": "Is MOFA attestation included in the translation price?",
    "a": "Not unless the written quote explicitly says so. Government fees, authentication and courier costs should be itemised separately from the translation service."
  },
  {
    "q": "Can I obtain a certified translation for a U.S. immigration filing?",
    "a": "Ask for a full English translation with the certification required by 8 CFR § 103.2(b)(3) and confirm the exact deliverable before ordering. The U.S. rule does not set the provider's fee."
  },
  {
    "q": "Does the UK require a translated document for every visa application?",
    "a": "Requirements depend on the visa route and document. For Standard Visitor applications, GOV.UK describes independently verifiable translations for submitted documents not in English or Welsh. Check the instructions for your own route."
  },
  {
    "q": "Is there an express or same-day translation fee?",
    "a": "No universal express rate is published here. Urgent availability and any surcharge must be confirmed in an itemised quote; no fixed delivery-time guarantee is implied."
  },
  {
    "q": "Are courier fees included?",
    "a": "Do not assume so. Physical shipping and special delivery arrangements should be stated separately if requested."
  },
  {
    "q": "Do I pay separately for translation of a document's reverse side?",
    "a": "The quote should cover all content that needs translating. Send both sides before receiving the price so there are no surprises about stamps, annexes or reverse-side notes."
  },
  {
    "q": "What is the difference between scholarship translation packages and full application support?",
    "a": "The published PKR 12,000 / PKR 15,000 prices relate to scholarship documents-and-translation packages. Full consultancy or application-management work is separate and quoted according to scope."
  },
  {
    "q": "Can I get a quotation before sending original documents?",
    "a": "Yes—request an initial review using clear scans or photos. The team will tell you whether originals or physical copies are required for the agreed service."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/pricing/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.lisan.pk/pricing" }
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.lisan.pk/pricing/#webpage",
      "name": "Translation Charges in Pakistan (2026) | Document Prices & Quotes | LISAN.PK",
      "url": "https://www.lisan.pk/pricing",
      "description": "Official company translation price list for Pakistan in 2026: standard documents PKR 1,200, bachelor transcripts PKR 2,500, and scholarship document packages."
    },
    {
      "@type": "Service",
      "@id": "https://www.lisan.pk/pricing/#service",
      "name": "Certified Document Translation Services",
      "provider": {
        "@type": "Organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": "https://www.lisan.pk/logo.png",
        "telephone": "+923288155866"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Published Document Translation Rates",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Standard Document / Ordinary Degree Translation"
            },
            "price": "1200",
            "priceCurrency": "PKR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bachelor's Academic Transcript Translation"
            },
            "price": "2500",
            "priceCurrency": "PKR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bachelor's Scholarship Document Package"
            },
            "price": "12000",
            "priceCurrency": "PKR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Master's / PhD Scholarship Document Package"
            },
            "price": "15000",
            "priceCurrency": "PKR"
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/pricing/#faq",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header / Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-4xl py-4">
          <nav className="text-xs font-medium text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">Translation Charges (Pricing)</span>
          </nav>
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl py-10 sm:py-14 space-y-12">
        {/* Header Block */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <DollarSign className="w-3.5 h-3.5" />
            Official Company Price Guide • Updated 5 November 2026
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
            Translation Charges in Pakistan (2026): Document Prices, Packages and Extra Fees
          </h1>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong>LISAN.PK charges PKR 1,200 for a standard document or degree translation and PKR 2,500 for a bachelor&apos;s transcript translation.</strong> Scholarship document-and-translation packages are listed at <strong>PKR 12,000 for bachelor&apos;s applicants</strong> and <strong>PKR 15,000 for master&apos;s or PhD applicants</strong>. Complex documents, urgent work and additional certification services require a case-specific quotation. These are <strong>LISAN.PK service prices</strong>, not official government, embassy or visa application fees.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Get an exact translation quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20need%20a%20translation%20quote%20for%20my%20documents." target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send documents on WhatsApp
              </Button>
            </Link>
          </div>

          {/* Price Clarity Callout */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base leading-relaxed">
                <strong>Price clarity:</strong> A published standard rate does not automatically cover every language pair, multi-page document, specialist certification, notarisation, government attestation, courier cost or accelerated delivery. Ask for a written quote identifying the deliverables before paying.
              </div>
            </div>
          </div>
        </header>

        {/* Section 1: Price List Table */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            LISAN.PK translation price list for Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The following are LISAN.PK&apos;s published prices as checked against its existing <Link href="/blog/saudi-scholarship-application-cost-pakistan" className="text-emerald-700 underline font-semibold">Saudi scholarship application cost and translation price guide</Link>. The package rates are for the applicable <strong>documents-and-translation service</strong>—not for complete scholarship application management.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4 text-right">Published LISAN.PK price</th>
                  <th className="py-3 px-4">What to know before ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Standard document / ordinary degree translation</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900 whitespace-nowrap">PKR 1,200 per document</td>
                  <td className="py-3 px-4 text-xs">The document must qualify for the standard category; final quote confirms language pair, length and certification format.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Bachelor&apos;s academic transcript translation</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900 whitespace-nowrap">PKR 2,500</td>
                  <td className="py-3 px-4 text-xs">Published bachelor&apos;s transcript rate; provide all pages for assessment.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Bachelor&apos;s documents-and-translation scholarship package</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900 whitespace-nowrap">PKR 12,000</td>
                  <td className="py-3 px-4 text-xs">Standard documents for the selected application, with scope confirmed in writing.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Master&apos;s documents-and-translation scholarship package</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900 whitespace-nowrap">PKR 15,000</td>
                  <td className="py-3 px-4 text-xs">Postgraduate document set; scope depends on application requirements.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">PhD documents-and-translation scholarship package</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900 whitespace-nowrap">PKR 15,000</td>
                  <td className="py-3 px-4 text-xs">Doctoral document set; scope depends on application requirements.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Full Urdu Nikah Nama / marriage contract translation</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-600 whitespace-nowrap">Quote required</td>
                  <td className="py-3 px-4 text-xs">Length, handwriting, legal clauses and required language can change the workload.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">NADRA Marriage Registration Certificate (MRC) translation</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-600 whitespace-nowrap">Quote required</td>
                  <td className="py-3 px-4 text-xs">Confirm whether the applicant needs the MRC, the complete Nikah Nama or both.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Specialist legal, medical or commercial translation</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-600 whitespace-nowrap">Quote required</td>
                  <td className="py-3 px-4 text-xs">Assessed by content, subject matter, length and certification needs.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Express / urgent translation</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-600 whitespace-nowrap">Quote required</td>
                  <td className="py-3 px-4 text-xs">Availability, surcharge and delivery deadline must be agreed before payment.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Notarisation, attestation, apostille, physical courier</td>
                  <td className="py-3 px-4 text-right font-semibold text-slate-600 whitespace-nowrap">Quoted separately</td>
                  <td className="py-3 px-4 text-xs">These are not assumed to be included in the standard document rate.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm">
            <strong>No undisclosed automatic extras:</strong> If another service is needed, the quotation should distinguish the base translation price, optional add-ons and any third-party charges. No unverified surcharge, discount or guaranteed completion time is claimed on this page.
          </div>
        </section>

        {/* Section 2: How much per page */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How much does it cost to translate one page in Pakistan?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            There is <strong>no universal translation price per page in Pakistan</strong>. Some providers charge per page, some per document, and some by word count or complexity. LISAN.PK&apos;s <strong>PKR 1,200 standard rate is per qualifying document, not a blanket price for any page of any length</strong>. A four-page handwritten marriage contract or dense technical contract is not equivalent to a short printed certificate.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Prices can change with:</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li><strong>Source and target languages:</strong> Urdu → Arabic, English → Arabic and Arabic → English require different linguistic checks.</li>
              <li><strong>Length and density:</strong> A short degree certificate may be simpler than a transcript with dozens of course titles.</li>
              <li><strong>Handwriting and legibility:</strong> Handwritten Urdu, stamps, marginal notes or unclear scans need additional review.</li>
              <li><strong>Terminology:</strong> Legal, medical, engineering and corporate records require subject-specific care.</li>
              <li><strong>Requested format:</strong> A plain digital translation is not necessarily the same deliverable as a signed or stamped certification.</li>
              <li><strong>Time requirement:</strong> An urgent deadline is an availability question, not an automatic promise.</li>
              <li><strong>Delivery:</strong> Scanned delivery and physical document dispatch have different potential costs.</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 italic">
            <strong>Example:</strong> If you have a short, clearly printed degree certificate, ask whether it falls under the PKR 1,200 standard rate. If you have a transcript, a multi-page contract or a handwritten Nikah Nama, send the complete pages first; do not assume a one-page advertisement applies to the full job.
          </p>
        </section>

        {/* Section 3: Degree translation charges */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Degree translation charges in Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Academic document translation can involve a degree, transcript, marks sheet, provisional certificate, experience certificate or professional registration record. These should not automatically be grouped into one charge unless a package expressly includes them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Degree certificate — PKR 1,200 standard</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                LISAN.PK&apos;s published standard document/degree rate is <strong>PKR 1,200</strong>. The exact price depends on the degree being a normal document suitable for that rate. If the degree has an extensive reverse side, multiple stamps, unusual terminology or separate certification requirements, those details should appear in the quote.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Bachelor&apos;s transcript — PKR 2,500</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                LISAN.PK&apos;s published <strong>bachelor&apos;s transcript translation rate is PKR 2,500</strong>. Submit the full transcript—not just its first page—so course titles, grades, credits, marks, GPA/CGPA and explanatory notes can be assessed. Any unusually long document or special formatting should be addressed before payment.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm">
            <strong>Master&apos;s and PhD records:</strong> Send the complete degree and transcript set. If you need a scholarship documents-and-translation package, see the package table below; if you need a single postgraduate record, ask for an itemised individual quote rather than assuming the bachelor&apos;s transcript rate applies.
          </div>

          <p className="text-xs text-slate-600">
            <strong>Related pages:</strong> <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic translation</Link> · <Link href="/guides/hec-online-degree-attestation" className="text-emerald-700 underline font-semibold">HEC online degree attestation guide</Link>
          </p>
        </section>

        {/* Section 4: Arabic rates by direction */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic translation rates in Pakistan: English → Arabic and Urdu → Arabic
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The phrase <strong>“Arabic translation rate per page Pakistan”</strong> covers many different jobs. A printed English degree translated into Arabic is not the same as a handwritten Urdu Nikah Nama translated into Arabic. A credible quotation specifies the original language, destination language and complete document set.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Translation direction</th>
                  <th className="py-3 px-4">Typical documents</th>
                  <th className="py-3 px-4">Pricing approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">English → Arabic</td>
                  <td className="py-3 px-4">Degrees, transcripts, experience letters, English marriage certificates</td>
                  <td className="py-3 px-4 text-xs">Standard rate may apply to a qualifying ordinary document; other work quoted by scope.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Urdu → Arabic</td>
                  <td className="py-3 px-4">Nikah Nama, affidavits, Urdu certificates, declarations</td>
                  <td className="py-3 px-4 text-xs">Quote after inspecting source script, legibility, legal terms and number of pages.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Arabic → English</td>
                  <td className="py-3 px-4">Saudi-issued records, Arabic certificates and contracts</td>
                  <td className="py-3 px-4 text-xs">Quote after inspecting the document and target-country certification requirements.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Urdu → English</td>
                  <td className="py-3 px-4">Birth records, Nikah Nama, court documents</td>
                  <td className="py-3 px-4 text-xs">Quote according to document type and destination requirements.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-xs text-slate-600 flex flex-wrap gap-2 pt-1">
            <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">Urdu-to-Arabic translation services</Link> ·{" "}
            <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic translation services</Link> ·{" "}
            <Link href="/services/translation/arabic-translation" className="text-emerald-700 underline font-semibold">Arabic translation hub</Link>
          </div>

          <p className="text-xs text-slate-500">
            <strong>Why can&apos;t every Arabic translation be priced as one page?</strong> Arabic uses right-to-left text, and legal or official records may contain names, titles, seals, registration numbers and handwritten remarks. Translators must preserve those details accurately. The quote should cover the actual content, not just the visible paper size.
          </p>
        </section>

        {/* Section 5: Nikah Nama Price */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Nikah Nama translation price in Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A <strong>Nikah Nama</strong> is a marriage contract and may contain handwritten entries, dower clauses, witnesses and registrar details. A computerized <strong>Marriage Registration Certificate (MRC)</strong> is a different record. The cost of translating one does not tell you the cost of translating the other.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">For an exact Nikah Nama translation price, provide:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
              <li>Clear photographs or scans of <strong>every page</strong>, including reverse-side information.</li>
              <li>The requested direction—<strong>Urdu → English</strong>, <strong>Urdu → Arabic</strong> or another pair.</li>
              <li>Whether the receiving authority specifically requires the <strong>Nikah Nama, MRC or both</strong>.</li>
              <li>Passport-name spellings where consistent identity matching matters.</li>
              <li>Any instruction about certification, notarisation, attestation or physical copies.</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500">
            LISAN.PK does <strong>not</strong> publish a universal Nikah Nama or MRC rate in this price list until the relevant document category and terms are confirmed. This prevents a misleading quote based on a short printed certificate when the client has a long handwritten contract.
          </p>
          <p className="text-xs text-slate-600">
            <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-semibold">Nikah Nama and MRC translation service</Link>
          </p>
        </section>

        {/* Section 6: Certified translation cost & Official authorities */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Certified translation cost in Pakistan: what is included?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A request for a <strong>certified translation</strong> usually means the receiving organisation expects a translation accompanied by a statement about its accuracy and the translator&apos;s responsibility. The exact format depends on the destination and purpose. A translator&apos;s certification is <strong>not</strong> a government-issued stamp of approval for the underlying document.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Question to ask</th>
                  <th className="py-3 px-4">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Does the price include the entire document?</td>
                  <td className="py-3 px-4 text-xs">Reverse-side notes, stamps and annexes may need translation.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Is a signed accuracy statement available?</td>
                  <td className="py-3 px-4 text-xs">Some authorities require specific certification wording and contact details.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Is a physical signed or stamped copy included?</td>
                  <td className="py-3 px-4 text-xs">A digital PDF and paper copy are not interchangeable in every process.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Is notarisation required and priced separately?</td>
                  <td className="py-3 px-4 text-xs">Notarisation concerns a separate legal act; it should not be assumed.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Who pays courier, MOFA, apostille or other authority fees?</td>
                  <td className="py-3 px-4 text-xs">Translation charges and government/third-party fees are different expenses.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">What does USCIS require for translated documents?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For documents submitted to <strong>U.S. Citizenship and Immigration Services (USCIS)</strong> that contain a foreign language, <strong>8 CFR § 103.2(b)(3)</strong> requires a <strong>full English translation</strong> and a translator&apos;s certification that the translation is complete and accurate and that the translator is competent. The rule does <strong>not</strong> set a Pakistani translation-business price. <strong>There is no standard “USCIS translation fee in Pakistan” set by USCIS</strong>; the translation provider quotes its own service charge. An Arabic translation is not a substitute for the required English translation in a USCIS filing. [<a href="https://www.law.cornell.edu/cfr/text/8/103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">8 CFR § 103.2(b)(3)</a>].
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">What about UK visa translation?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For <strong>UK Standard Visitor visa</strong> supporting documents not in English or Welsh, GOV.UK states that a full, independently verifiable translation must contain accuracy confirmation, the translation date, the translator&apos;s full name and signature, and contact details. Requirements can vary by visa route, so check the rules applying to your application. These are <strong>format requirements</strong>, not a UK-government price list for translators in Pakistan. [<a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">GOV.UK visitor visa</a>].
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Scholarship Packages */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Scholarship document-and-translation packages
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Students preparing for Saudi scholarship applications may prefer a reviewed document set rather than buying unrelated translations one by one. LISAN.PK currently lists these <strong>document-and-translation</strong> prices:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Study level</th>
                  <th className="py-3 px-4 text-right">Package price</th>
                  <th className="py-3 px-4">General scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Bachelor&apos;s</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900">PKR 12,000</td>
                  <td className="py-3 px-4 text-xs">Standard undergraduate application documents identified for the chosen portal/university.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Master&apos;s</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900">PKR 15,000</td>
                  <td className="py-3 px-4 text-xs">Standard postgraduate documents identified for the chosen application.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">PhD</td>
                  <td className="py-3 px-4 text-right font-bold text-emerald-900">PKR 15,000</td>
                  <td className="py-3 px-4 text-xs">Standard doctoral documents identified for the chosen application.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
            <p>
              <strong>Confirm the exact package contents before ordering.</strong> No package should be described as covering every possible document for every university, every official fee or an unlimited number of revisions. These prices are for the stated documents-and-translation services; <strong>complete scholarship application management is a separate, quoted service</strong>.
            </p>
            <p>
              The previously announced <strong>Study in Saudi 16 September–6 October 2026 application window has closed</strong>. Translation preparation may still be useful for future intakes, but no unannounced reopening date is guaranteed. For applications, follow official portal notices and the receiving institution&apos;s current document checklist.
            </p>
          </div>

          <p className="text-xs text-slate-600">
            <Link href="/blog/saudi-scholarship-application-cost-pakistan" className="text-emerald-700 underline font-semibold">Saudi scholarship application cost guide</Link> · <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 underline font-semibold">Saudi scholarship services</Link>
          </p>
        </section>

        {/* Section 8: Urgent & Courier */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Is urgent translation more expensive in Lahore, Karachi or Islamabad?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            An <strong>urgent translation fee in Lahore</strong>—or any other city—depends on capacity and the actual deadline. There is <strong>no fixed express surcharge published here</strong>. Send your document and required completion time. LISAN.PK can then confirm whether urgent delivery is available and disclose any additional cost before the order is placed.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Please do not rely on a generic promise of same-day or 24-hour delivery for every document. Length, handwriting, certification requirements, quality control and courier logistics matter. A specialist legal document may take longer than a short certificate even when both are physically one page.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Digital delivery vs courier delivery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear scans are often suitable for an initial quote; the receiving authority may still require an original, signed copy or another format. If a physical dispatch is agreed, the courier fee, destination, method and expected dispatch date should appear separately on the invoice or written confirmation.
            </p>
            <p className="text-xs font-semibold text-amber-900">
              Do not send irreplaceable originals until the team explicitly confirms that originals are necessary and explains how they will be handled.
            </p>
          </div>
        </section>

        {/* Section 9: Distinguishing Services */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Translation, notarisation, HEC/MOFA attestation and apostille: different charges
          </h2>
          <p className="text-slate-700 leading-relaxed">
            These terms describe different processes. They are <strong>not interchangeable</strong>, and paying for one does not automatically provide the others.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">What it is</th>
                  <th className="py-3 px-4">How to check cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Translation</td>
                  <td className="py-3 px-4 text-xs">Rendering source-language text into the requested language</td>
                  <td className="py-3 px-4 text-xs">LISAN.PK price/quote by document and scope.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Certified translation</td>
                  <td className="py-3 px-4 text-xs">Translation accompanied by an agreed certification statement or equivalent deliverable</td>
                  <td className="py-3 px-4 text-xs">Ask exactly what certification is included and whether it changes the quote.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Notarisation</td>
                  <td className="py-3 px-4 text-xs">Separate notarial act, if required</td>
                  <td className="py-3 px-4 text-xs">Ask if available and obtain a separate quote.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">HEC degree attestation</td>
                  <td className="py-3 px-4 text-xs">A government process for eligible academic records</td>
                  <td className="py-3 px-4 text-xs">Check HEC&apos;s official portal and fee information; not included in translation by default.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Pakistan MOFA attestation</td>
                  <td className="py-3 px-4 text-xs">Government document authentication</td>
                  <td className="py-3 px-4 text-xs">Check the current MOFA portal and applicable category.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Apostille</td>
                  <td className="py-3 px-4 text-xs">Origin authentication of an eligible public document under the Apostille Convention</td>
                  <td className="py-3 px-4 text-xs">Check official MOFA fees and destination eligibility; distinct from translation.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Courier</td>
                  <td className="py-3 px-4 text-xs">Shipping of physical files where needed</td>
                  <td className="py-3 px-4 text-xs">Charged by delivery arrangement, not automatically included.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-600">
            A destination authority may accept an English original and need <strong>no Arabic translation at all</strong>, or may require an original document to be authenticated before a separate translation is prepared. Verify the <strong>receiving authority&apos;s exact instructions</strong> before ordering an unnecessary service.
          </p>

          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Certified translation vs notarisation vs apostille</Link> ·{" "}
            <Link href="/guides/mofa-online-attestation" className="text-emerald-700 underline font-semibold">MOFA online attestation guide</Link> ·{" "}
            <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Apostille Pakistan guide</Link>
          </div>
        </section>

        {/* Section 10: How to Request Quote */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How to request an exact translation quotation
          </h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 text-sm">
            <li><strong>Send every page</strong> of each document as a clear PDF or readable image.</li>
            <li><strong>Identify the language direction:</strong> for example, Urdu → Arabic, English → Arabic or Arabic → English.</li>
            <li><strong>Tell us where it will be submitted:</strong> Saudi university, UAE employer, UK visa application, USCIS filing or another receiving body.</li>
            <li><strong>Include the relevant checklist or email</strong> from that body, if available.</li>
            <li><strong>Specify the output needed:</strong> digital translation, certified copy, stamped physical copy, special formatting or any separate legalisation step.</li>
            <li><strong>Give the deadline and delivery city</strong>, without assuming immediate availability.</li>
            <li><strong>Review the written quote</strong> for translation charges, add-ons, delivery terms and what happens if changes are needed.</li>
          </ol>
          <p className="text-xs text-slate-500">
            You should receive a quote for the actual documents you submit, not merely a generic estimate based on an unrelated document type.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold h-11 px-6 rounded-xl">
                Request a written quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold h-11 px-6 rounded-xl">
                WhatsApp the document list
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 11: FAQs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Frequently asked questions about translation charges in Pakistan
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm open:ring-1 open:ring-emerald-700 transition-all"
              >
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{idx + 1}. {faq.q}</span>
                  <span className="text-emerald-700 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Section 12: Final CTA */}
        <section className="p-8 rounded-3xl bg-emerald-900 text-white space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Get your translation quote before paying
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              <strong>Know the document, the language pair and the destination before you pay.</strong> LISAN.PK publishes standard document and scholarship document-package rates and provides individual quotations for work outside those categories.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all">
                Request a Translation Quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message LISAN.PK on WhatsApp
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/80 border-t border-emerald-800/60 pt-4">
            *LISAN.PK is an independent translation and document-services provider. Its service fees are not official embassy, ministry, HEC, university or immigration fees. Final suitability for a submission is determined by the receiving authority; no universal approval or visa outcome is guaranteed.
          </p>
        </section>

        {/* Section 13: Sources & Notes */}
        <footer className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Sources and editorial notes
          </h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-600">
            <p><strong>LISAN.PK price evidence</strong> (company rates; not government tariffs):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <a href="https://www.lisan.pk/blog/saudi-scholarship-application-cost-pakistan" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                  LISAN.PK — Saudi Scholarship Application Cost in Pakistan (2026): Quick Price Guide
                </a>. Source of PKR 1,200 normal document, PKR 2,500 bachelor&apos;s transcript and PKR 12,000 / PKR 15,000 document-and-translation packages.
              </li>
            </ul>

            <p className="pt-2"><strong>Official guidance for document-format distinctions:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">GOV.UK — Guide to Supporting Documents: Visiting the UK</a>.</li>
              <li><a href="https://www.law.cornell.edu/cfr/text/8/103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">8 CFR § 103.2(b)(3) — Translations</a> (US federal regulation; secondary host reproducing primary law).</li>
              <li><a href="https://attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Pakistan Ministry of Foreign Affairs — Attestation Services</a>.</li>
              <li><a href="https://apostille.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Pakistan Ministry of Foreign Affairs — Apostille Services</a>.</li>
            </ul>

            <p className="text-xs text-slate-400 italic pt-2">
              Editorial note: Competitive translation rates vary widely by provider and language. No competitor&apos;s price is presented as LISAN.PK&apos;s price. Do not republish estimated rates from older LISAN.PK posts as fixed company offers. Verify every price against the current owner-approved rate sheet before publishing any later revision.
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}
