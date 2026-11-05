import { Metadata } from "next"
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Clock, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  ShieldCheck,
  Languages,
  MessageSquare,
  Landmark,
  Scale,
  FileCheck2,
  Table
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Fard & Property Document Translation in Pakistan | Urdu to English | LISAN.PK",
  description: "Urdu-to-English Fard, Intiqal, Jamabandi and registry deed translation in Pakistan. Clear ownership tables, document-specific certification and quotes for UK/US use.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/property-document-translation",
  },
  openGraph: {
    title: "Fard & Property Document Translation in Pakistan | Urdu to English | LISAN.PK",
    description: "Urdu-to-English Fard, Intiqal, Jamabandi and registry deed translation in Pakistan. Clear ownership tables, document-specific certification and quotes for UK/US use.",
    url: "https://www.lisan.pk/services/translation/property-document-translation",
    type: "website",
  }
}

const serviceFaqs = [
  {
    q: "Is a Fard translation the same as a certified land ownership certificate?",
    a: "No. We translate an existing land-record extract. An official ownership record must come from the competent issuing authority."
  },
  {
    q: "Can you translate a Fard-e-Malkiat with 14 columns?",
    a: "Yes, if the supplied document is legible. We preserve the column order and the corresponding ownership data in an appropriate layout."
  },
  {
    q: "What is an Intiqal document in English?",
    a: "It is generally a land-record mutation entry, documenting a recorded change. It is not automatically a registered sale deed."
  },
  {
    q: "Do you translate Jamabandi and registry deeds?",
    a: "Yes, the supplied records can be assessed and quoted individually. Full documents and all annexes should be provided where a complete translation is required."
  },
  {
    q: "Do I need notarization as well as translation?",
    a: "Only if the specific receiving authority requires it. Certified translation, notarization and document authentication serve different functions."
  },
  {
    q: "Will a UK visa authority accept my translated Fard?",
    a: "A translation prepared to the route's instructions may be submitted, but no private translation provider can guarantee how the authority will assess your documents or application."
  },
  {
    q: "Can you provide a translation certificate for USCIS?",
    a: "Where requested, we can prepare a translator certification addressing accuracy, completeness and competence. The applicant must still follow current USCIS instructions and any individual notices."
  },
  {
    q: "Can you translate a Fard for a property inheritance matter?",
    a: "Yes, as a translation task. We cannot determine inheritance rights or confirm title; those are matters for competent authorities or legal professionals."
  },
  {
    q: "Can you get an official Fard from PLRA for me?",
    a: "This page is for translation. Original Fard issuance and verification are official government functions; see the Punjab Land Records Authority."
  },
  {
    q: "Is your translation service limited to Lahore?",
    a: "No. Document review and delivery can be coordinated remotely with clients across Pakistan, subject to the agreed service terms. Do not infer a walk-in branch from a city's name on a website."
  },
  {
    q: "Can I send only a cropped photograph of the relevant line?",
    a: "For a complete translation, provide the full uncropped document and all pages. Cropping may hide headings, seals and material notes."
  },
  {
    q: "Do you guarantee embassy approval or rejection refunds?",
    a: "No universal government or embassy acceptance guarantee is given. Any error-correction or refund term must be stated accurately in the current written service terms."
  }
]

const propertyDocuments = [
  {
    doc: "Fard / Fard-e-Malkiat (فرد / فردِ ملکیت)",
    focus: "Ownership-record extract and owner/parcel particulars",
    issue: "Multiple owners, fractional shares and dense tables"
  },
  {
    doc: "Intiqal (انتقال)",
    focus: "Mutation or land-record change entry",
    issue: "Transfer basis, mutation number and order/entry date"
  },
  {
    doc: "Jamabandi / Register Haqdaran Zamin (جمع بندی)",
    focus: "Record of rights / landholders' register",
    issue: "Ownership and cultivation accounts spanning many lines"
  },
  {
    doc: "Registry / registered deed (رجسٹری)",
    focus: "Full registered instrument or deed",
    issue: "Recitals, consideration, schedules and official markings"
  },
  {
    doc: "Bay Nama (بیع نامہ)",
    focus: "Sale deed",
    issue: "Property description, parties, clauses and obligations"
  },
  {
    doc: "Inheritance-related land documents",
    focus: "Translation of the specific estate record supplied",
    issue: "Distinguish revenue mutation from succession orders"
  },
  {
    doc: "Property-related affidavits",
    focus: "Sworn declaration as actually written",
    issue: "Preserve the speaker's wording and notarisation marks"
  },
  {
    doc: "Revenue or property correspondence",
    focus: "Official notices, decisions and extracts",
    issue: "Issuer identity, reference numbers and time periods"
  }
]

export default function PropertyDocumentTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fard and Property Document Translation in Pakistan",
    "serviceType": "Property Document Translation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LISAN.PK",
      "url": "https://www.lisan.pk",
      "telephone": "+923288155866",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK"
      }
    },
    "description": "Urdu-to-English Fard, Intiqal, Jamabandi and registry deed translation in Pakistan. Clear ownership tables, document-specific certification and quotes for UK/US use.",
    "areaServed": "PK"
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lisan.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.lisan.pk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Translation",
        "item": "https://www.lisan.pk/services/translation"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Property Document Translation",
        "item": "https://www.lisan.pk/services/translation/property-document-translation"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb nav */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-700">Services</Link>
            <span>/</span>
            <Link href="/services/translation" className="hover:text-emerald-700">Translation</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Property Document Translation</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Landmark className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Land Records &amp; Deed Translation</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              Fard and Property Document Translation in Pakistan — Urdu to English
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-8">
              <strong>LISAN.PK provides Urdu-to-English translation of Pakistani land and property documents, including Fard-e-Malkiat, Intiqal, Jamabandi, registry deeds and inheritance-related records.</strong> We preserve ownership names, plot identifiers, shares and visible annotations, using a readable table layout when the original is a wide land record. We can prepare a signed translator certification where appropriate, but <strong>translation does not verify a property&apos;s legal ownership or guarantee acceptance by a foreign authority</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                  id="gtm-quote-hero"
                  data-lead="quote"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request a property-document quote
                </Button>
              </Link>
              <a 
                href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20need%20a%20quote%20for%20Urdu%20to%20English%20property%20document%20translation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans"
                id="gtm-wa-hero"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                WhatsApp LISAN.PK
              </a>
              <Link 
                href="/blog/urdu-to-english-fard-translation-in-lahore"
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2"
              >
                Read the Fard translation guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Callout Box */}
      <section className="py-8 bg-amber-50/60 border-b border-amber-200/60 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Before ordering:</strong> Tell us whether the document is for a <strong>UK visa, USCIS filing, foreign lawyer, court, inheritance matter, university or personal record</strong>. Requirements differ by receiving authority. We review the source and confirm the translation/certification deliverables before payment.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Comparison Table */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Which property documents do we translate?
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Source document</th>
                    <th className="py-3 px-4">English translation focus</th>
                    <th className="py-3 px-4">Typical document issue to check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {propertyDocuments.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">{row.doc}</td>
                      <td className="py-3.5 px-4 align-top">{row.focus}</td>
                      <td className="py-3.5 px-4 text-slate-600 align-top">{row.issue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We translate the <strong>document you provide</strong>; we do not reclassify a mutation as a sale deed or turn a land-record extract into a certificate of unencumbered title. For a plain-English explanation, see <Link href="/blog/urdu-to-english-fard-translation-in-lahore" className="text-emerald-700 font-semibold hover:underline">Fard vs Intiqal vs Jamabandi</Link>.
            </p>
          </div>

          {/* Section 2: What is Included in Fard Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu-to-English Fard translation: what is included?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A complete translated Fard should make it possible for an English-speaking reviewer to match the text to the original. Depending on the source, we assess:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Land owner and co-owner names, parentage and address fields.",
                "Mauza, tehsil, district and revenue estate details.",
                "Khewat, khatooni, khasra and mutation identifiers.",
                "Ownership fractions, land area, kanal/marla and other source units.",
                "Printed field labels, handwritten remarks and record-specific abbreviations.",
                "Legible stamps, seals, signatures, issue dates and marginal notes.",
                "Continuation pages, schedules and material endorsements."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-800 leading-normal">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Precision rule:</strong> If a source entry is genuinely illegible, it should be marked as such rather than guessed. If the source record is wrong, the issuing authority—not the translator—must correct it.
              </p>
            </div>
          </div>

          {/* Section 3: 14-Column Fard Layout */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Can you translate a 14-column Fard without losing its structure?
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>Yes.</strong> When your Fard contains 14 columns, the English document can follow that sequence and preserve the corresponding rows. We may use <strong>landscape A4 or A3 pages</strong>, split wider tables into clearly labelled continuations, or retain field numbers with source-to-translation cross-reference.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The exact layout is selected after reviewing the original because <strong>not every Fard has 14 columns</strong>. Our aim is legibility and traceability, not a misleading claim that an English PDF is identical to a government-issued original.
            </p>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
                <Table className="w-5 h-5 text-emerald-700" />
                Layout and accuracy checklist
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                <li>Review all pages and count the original fields.</li>
                <li>Map column headings before translating the data.</li>
                <li>Preserve owner-to-plot relationships and all ownership shares.</li>
                <li>Maintain the exact values for record numbers and land dimensions.</li>
                <li>Explain uncommon revenue terms without changing their meaning.</li>
                <li>Label each continuation page and review for row omissions.</li>
                <li>Include legible source annotations, seals and stamps where relevant.</li>
                <li>Attach an appropriate translation certificate if requested.</li>
              </ol>
            </div>

            <p className="text-xs text-slate-500 italic bg-slate-100 p-3 rounded-lg border border-slate-200">
              <strong>Sample policy:</strong> An approved before/after land-record sample may be shown after proper redaction and consent. No fabricated sample or client ownership record should appear on the page.
            </p>
          </div>

          {/* Section 4 & 5: UK Visas & USCIS Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>UK Visas &amp; Legal Use</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Fard translation for UK visas and British legal matters
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A UK visitor visa does <strong>not</strong> require every applicant to provide property papers. If the applicant chooses to submit a relevant Urdu Fard, the <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">GOV.UK visitor supporting-documents guidance <ExternalLink className="w-3 h-3 inline" /></a> calls for a full English translation that can be independently verified. Its translation details include the accuracy confirmation, date, full name/signature and contact details of the translator.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                A Fard is an ownership-related record—not proof of a specific property valuation, income or guaranteed immigration eligibility. For legal proceedings, follow the receiving solicitor or court&apos;s separate requirements.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>USCIS &amp; U.S. Authorities</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Property document translation for USCIS
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>USCIS requires a full certified English translation for any foreign-language document submitted to it.</strong> The translator must certify accuracy/completeness and competence under <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">8 CFR § 103.2(b)(3) <ExternalLink className="w-3 h-3 inline" /></a>. Whether a property document is even needed depends on the individual application or evidence request.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We can prepare the translated record and an appropriate translator statement; we do not make immigration-law decisions or promise that an officer will accept an underlying property claim.
              </p>
              <div className="pt-2">
                <Link href="/services/uscis-certified-translation/requirements" className="text-xs font-bold text-emerald-700 hover:underline">
                  View USCIS certified translation requirements &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Section 6: Inheritance & Overseas Courts */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Property documents for inheritance, foreign courts and overseas lawyers
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm">
              Pakistani inheritance files may contain a Fard, mutation entry, registered deed, family/relationship records, court documents and other evidence. The exact required documents depend on the matter and the foreign authority&apos;s instructions. <strong>Revenue records, succession documents and private agreements are not interchangeable.</strong>
            </p>
            <p className="text-slate-700 leading-relaxed text-sm">
              A receiving lawyer may ask for a translation that tracks section numbers, owner names and document references. Where an authority requires an affidavit, notarization or document authentication, that must be arranged separately from plain translation and confirmed in the quote.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <strong>We do not provide</strong> legal title examination, land ownership searches, valuation certificates, notarial services or government land-record issuance through this translation page.
            </div>
          </div>

          {/* Section 7: Quote Checklist */}
          <div className="bg-emerald-900 text-white p-8 md:p-10 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              What do you need to request a quotation?
            </h2>
            <p className="text-emerald-100 text-sm">
              <strong>Send only what is necessary to assess the translation.</strong>
            </p>

            <div className="space-y-3">
              {[
                "Clear and complete photographs/PDF of every relevant page.",
                "Source and target languages (usually Urdu → English).",
                "The receiving authority and purpose (UK visa, USCIS, lawyer, etc.).",
                "Any required formatting or certification instructions.",
                "Deadline and preferred digital/physical delivery method."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-emerald-50">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-emerald-200/80 pt-2 border-t border-emerald-800">
              Avoid sharing sensitive records publicly. We will use the details in the provided source for translation and will not publish them as a sample without separate approval.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold px-8 h-12 rounded-xl shadow font-sans" data-lead="quote">
                  Request an exact quote
                </Button>
              </Link>
              <a 
                href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20have%20property%20documents%20to%20translate."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors text-sm font-sans"
              >
                Contact by WhatsApp
              </a>
            </div>
          </div>

          {/* Section 8: Translation Process */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Translation process
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Step 1 — Document intake", text: "Receive the scans and destination instructions." },
                { title: "Step 2 — Feasibility review", text: "Check length, legibility, number of columns, legal terminology and any missing pages." },
                { title: "Step 3 — Written quotation", text: "Confirm scope, price, turnaround target, certification and physical delivery options." },
                { title: "Step 4 — Translation & review", text: "Translate all legible text and recheck record numbers, units, shares and names." },
                { title: "Step 5 — Delivery", text: "Provide the agreed English file and, where ordered, a signed translator statement or hard copy." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">{idx + 1}</span>
                    <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              A draft spelling-check step may be offered if appropriate. <strong>We never silently correct or replace information shown in the original government record.</strong>
            </p>
          </div>

          {/* Section 9: Pricing Policy */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Fard and property document translation prices
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Complex land records are priced after review.</strong> A 14-column handwritten record is not the same workload as a one-page typed certificate. Prices depend on pages, number of populated rows, legibility, technical terms, formatting, certification and delivery.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              The site&apos;s <Link href="/pricing" className="text-emerald-700 font-semibold underline">general translation pricing page</Link> lists rates for specified standard document categories, but <strong>those standard rates are not an automatic price for a multi-page Fard, registry deed or handwritten mutation record</strong>.
            </p>
            <p className="text-xs text-slate-500 italic">
              <strong>No guaranteed turnaround is advertised.</strong> A time commitment is agreed after reviewing the specific document.
            </p>
          </div>

          {/* Section 10: FAQs */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {serviceFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-sans flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 11: Related Resources & Sources */}
          <div className="bg-slate-100/80 p-8 rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 font-sans">Related LISAN.PK resources</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/blog/urdu-to-english-fard-translation-in-lahore" className="text-emerald-700 font-medium hover:underline">Detailed Fard translation guide</Link>
                <Link href="/services/translation/urdu-to-english-translation" className="text-emerald-700 font-medium hover:underline">Certified Urdu-to-English translation</Link>
                <Link href="/services/translation/legal-document-translation" className="text-emerald-700 font-medium hover:underline">Legal document translation</Link>
                <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 font-medium hover:underline">USCIS certified translation requirements</Link>
                <Link href="/pricing" className="text-emerald-700 font-medium hover:underline">Translation prices</Link>
                <Link href="/contact" className="text-emerald-700 font-medium hover:underline">Request a quote</Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <p>
                <strong>Sources:</strong> <a href="https://ndma.gov.pk/storage/publications/July2024/TwkByEeXdr6bUVVLmqEj.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">Government-hosted land-property training manual</a>; <a href="https://www.punjab-zameen.gov.pk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">Punjab Land Records Authority</a>; <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">GOV.UK visitor document translations</a>; <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/section-103.2" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">U.S. federal translation rule (8 CFR § 103.2(b)(3))</a>. Source requirements last checked 5 November 2026.
              </p>
              <p className="mt-2">
                <strong>Ready for a quote?</strong> <Link href="/contact" className="text-emerald-700 font-medium underline">Upload documents securely through our contact process</Link> or <a href="https://wa.me/923288155866" className="text-emerald-700 font-medium underline">message our team</a>. LISAN.PK translates submitted documents; it is not a land-registration authority or immigration decision-maker.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
