import { Metadata } from "next"
import Link from "next/link"
import { 
  FileCheck2, 
  HelpCircle, 
  ShieldAlert, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  Scale, 
  PhoneCall, 
  Info 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "MOFA Attestation & Apostille Support in Pakistan | LISAN.PK",
  description: "Need help preparing documents for MOFA online attestation or apostille in Pakistan? Check official steps, prerequisites and certified translation options.",
  alternates: {
    canonical: "https://www.lisan.pk/services/attestation",
  },
  openGraph: {
    title: "MOFA Attestation & Apostille Support in Pakistan | LISAN.PK",
    description: "Need help preparing documents for MOFA online attestation or apostille in Pakistan? Check official steps, prerequisites and certified translation options.",
    url: "https://www.lisan.pk/services/attestation",
    type: "website",
  }
}

const serviceFaqs = [
  {
    q: "Can LISAN.PK issue a MOFA e-Certificate?",
    a: "No. MOFA is the issuing authority. LISAN.PK can provide document translation and preparation guidance but cannot approve or issue government attestations."
  },
  {
    q: "Is MOFA attestation entirely online now?",
    a: "The ministry's October notice describes remote e-Certificate processing in many cases. Its published application steps still describe appointments and original-document submission. Follow your case-specific portal instructions."
  },
  {
    q: "Can I apply for MOFA attestation myself?",
    a: "Yes. Use the official government portal. You do not have to purchase translation or consultancy services from LISAN.PK to apply."
  },
  {
    q: "Is Saudi Embassy attestation always required after MOFA?",
    a: "No universal rule applies. Check the document, the receiving authority and MOFA's country directory. Saudi Arabia is listed as an apostille destination in MOFA's current directory, but the receiving authority's requirements still matter."
  },
  {
    q: "Do I need English or Arabic translation for MOFA?",
    a: "Not automatically. A translation is needed when the relevant authority requires it; confirm which version or certificate must be translated. MOFA has document-specific rules for translated material submitted for its authentication."
  },
  {
    q: "What is the price and processing time?",
    a: "The government fee depends on your document and attestation type, and any private translation quote is separate. MOFA controls government processing; LISAN.PK will quote only the translation or support specifically agreed for your case."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/attestation/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "MOFA Attestation & Document Translation Support", "item": "https://www.lisan.pk/services/attestation" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lisan.pk/services/attestation/#service",
      "name": "MOFA Attestation & Document Translation Support in Pakistan",
      "serviceType": "Document Preparation & Certified Translation",
      "provider": {
        "@type": "Organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": "https://www.lisan.pk/logo.png",
        "telephone": "+923044296295",
        "email": "info@lisan.pk"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Preparation of documents, certified English and Arabic translation, and guidance for MOFA online attestation and Apostille in Pakistan.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Attestation Document Support",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Certified Document Translation for MOFA & Embassies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Translation Format Review & Document Preparation"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/attestation/#faq",
      "mainEntity": serviceFaqs.map(f => ({
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

export default function AttestationServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-24 pb-16 border-b border-emerald-900/60">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="text-xs text-emerald-300/80 mb-6 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Attestation</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Scale className="w-3.5 h-3.5" /> Document Preparation & Certified Translation Support
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white mb-6 leading-tight">
            MOFA Attestation and Document Translation Support in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
            Need your Pakistani documents prepared for overseas use? MOFA offers online applications for General Attestation and Apostille through its official system, and its October 2026 update introduced e-Certificates. LISAN.PK helps you identify translation requirements, review document details and prepare English or Arabic translations where requested. MOFA—not LISAN.PK—decides whether a document is accepted for government attestation.
          </p>

          {/* Quick Action Links Bar */}
          <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold mb-8">
            <a
              href="https://portal-attestation.mofa.gov.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl text-white flex items-center justify-between transition-all group"
            >
              <span>MOFA Applicant Portal</span>
              <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:text-white" />
            </a>
            <Link
              href="/guides/mofa-online-attestation"
              className="p-3.5 bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 rounded-xl text-emerald-200 flex items-center justify-between transition-all group"
            >
              <span>MOFA Online Attestation Guide</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/guides/apostille-pakistan"
              className="p-3.5 bg-emerald-600/30 hover:bg-emerald-600/40 border border-emerald-500/40 rounded-xl text-emerald-200 flex items-center justify-between transition-all group"
            >
              <span>MOFA Apostille Guide</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="p-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-between transition-all shadow-md group"
            >
              <span>Contact LISAN.PK for Quote</span>
              <Send className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 max-w-5xl py-14">
        <article className="space-y-12">

          {/* What we can help with Table */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-6">
              What we can help with
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 rounded-tl-xl w-1/4">Assistance</th>
                    <th className="p-4 w-5/12">What it includes</th>
                    <th className="p-4 rounded-tr-xl w-1/3">Important limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Document translation</td>
                    <td className="p-4 text-slate-700 leading-relaxed">
                      English or Arabic translation of readable degrees, civil records and other document types we confirm we can handle.
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed bg-amber-50/50">
                      A private translation is not a MOFA attestation or government apostille.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Translation format review</td>
                    <td className="p-4 text-slate-700 leading-relaxed">
                      Check names, dates, supporting stamps and the receiving organisation&apos;s stated translation format.
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed bg-amber-50/50">
                      The receiving authority decides what certification it accepts.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Document-preparation guidance</td>
                    <td className="p-4 text-slate-700 leading-relaxed">
                      Explain published MOFA, HEC and IBCC document-preparation requirements and the distinction between General Attestation and Apostille.
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed bg-amber-50/50">
                      Government portals, approvals and official fees remain under their respective authorities.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Quotation and delivery discussion</td>
                    <td className="p-4 text-slate-700 leading-relaxed">
                      Confirm translation scope, document count, requested language and a case-specific quote before work begins.
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed bg-amber-50/50">
                      Courier, original handling or third-party coordination is offered only if expressly confirmed for the case.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Legal Boundary Notice Card */}
          <section className="bg-amber-50/80 border-2 border-amber-300/80 rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold font-serif text-amber-950 mb-2">
                  We are not a government attestation office
                </h3>
                <p className="text-sm text-amber-900 leading-relaxed">
                  LISAN.PK is an independent translation service. We do not issue a MOFA stamp, Apostille, HEC authentication or embassy endorsement; we cannot guarantee that an authority will approve a document. Applicants can use MOFA&apos;s official portal directly without buying our translation services.
                </p>
              </div>
            </div>
          </section>

          {/* MOFA's new online attestation process in 2026 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              MOFA&apos;s new online attestation process in 2026
            </h2>
            <p className="leading-relaxed text-sm sm:text-base text-slate-700">
              The Ministry of Foreign Affairs introduced its Digital Attestation System on 12 October 2026 for General Attestation and Apostille, with electronic certificates available by email after processing. Its public portal also provides a workflow involving officer review, appointment booking, payment and, where instructed, submission of original documents at a liaison office. Check your actual application for the applicable route rather than assuming every case is fully online.
            </p>

            <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800">
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-2 font-serif">
                Typical Process Flow:
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                Choose the correct authentication route → create or access your MOFA account → submit the document details → await officer review → follow official appointment/payment directions → complete any required physical step → verify the final attestation or e-Certificate.
              </p>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-3">
              <span>Full instructions:</span>
              <Link href="/guides/mofa-online-attestation" className="font-bold text-emerald-700 underline hover:text-emerald-800">
                Read our MOFA online attestation guide
              </Link>
              <span>·</span>
              <span>Official:</span>
              <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-800 underline hover:text-emerald-700">
                MOFA Consular Services
              </a>
              <span>·</span>
              <a href="https://portal-attestation.mofa.gov.pk" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-800 underline hover:text-emerald-700">
                MOFA Applicant Portal
              </a>
            </div>
          </section>

          {/* General Attestation or Apostille Comparison */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-6">
              General Attestation or Apostille: what does your document need?
            </h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 rounded-tl-xl w-1/2">General Attestation</th>
                    <th className="p-4 rounded-tr-xl w-1/2">Apostille</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700 leading-relaxed">
                  <tr>
                    <td className="p-4">
                      Used when the destination&apos;s authentication requirements call for general legalisation, potentially including a further embassy or receiving-authority step.
                    </td>
                    <td className="p-4">
                      Used for eligible public documents where the Hague Apostille Convention applies between the relevant countries and the receiving authority accepts it.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      Available through MOFA&apos;s online application system.
                    </td>
                    <td className="p-4">
                      Available through MOFA&apos;s online application system; advance registration for apostille became mandatory on 27 July 2026.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-amber-900 bg-amber-50/40">
                      Does not automatically translate your document.
                    </td>
                    <td className="p-4 font-semibold text-amber-900 bg-amber-50/40">
                      Does not automatically translate your document.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Check the <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA official country directory</a>. Do not assume Saudi Embassy legalisation is obligatory for every Saudi-bound document; Pakistan&apos;s apostille route may be applicable, depending on the receiving authority. Similarly, do not assume an apostille is the correct route for the UAE or another destination without checking.
            </p>
          </section>

          {/* Documents we commonly discuss with clients */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Documents we commonly discuss with clients
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-2">
                  Degrees, transcripts and educational certificates
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  University degrees generally need the relevant HEC authentication before MOFA where the official checklist requires it. School and board certificates use the applicable IBCC route. Check whether the destination institution needs an English or Arabic translation and whether it wants the final authentication included in that translation.
                </p>
                <p className="text-[11px] font-bold text-amber-900">
                  MOFA does not appoint a private translation company to perform HEC&apos;s official verification.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-2">
                  Nikah Nama and NADRA Marriage Registration Certificate (MRC)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  The Urdu Nikah Nama and the computerized Marriage Registration Certificate are different records. Your receiving authority may request one or both, and may also require a translation. Ask for the exact checklist instead of assuming a single “embassy-approved” format works everywhere.
                </p>
                <Link
                  href="/services/translation/nikah-nama-marriage-certificate"
                  className="font-bold text-emerald-700 underline hover:text-emerald-800 text-xs block"
                >
                  Nikah Nama / MRC English and Arabic translation →
                </Link>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-2">
                  Birth certificates, FRC and other family records
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The correct civil record, language and authentication depend on the destination and the family/visa process. Check whether the issuing authority, MOFA, embassy or receiving organisation needs to act first.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base font-serif mb-2">
                  Police certificates, powers of attorney and legal records
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Some legal acts require additional identity checks, prior authentication or personal appearance. A digital portal does not remove those document-specific conditions.
                </p>
              </div>
            </div>
          </section>

          {/* Translate before or after MOFA attestation? */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Translate before or after MOFA attestation?
            </h2>
            <p className="leading-relaxed text-sm sm:text-base text-slate-700">
              First confirm what the receiving authority wants authenticated. Some applicants need a translated version of an already-authenticated original; others must submit a specifically formatted translation for a separate attestation. If the final MOFA e-Certificate or stamp must be included in the translated record, provide that final record for translation.
            </p>
            <p className="leading-relaxed text-sm sm:text-base text-slate-700">
              Tell us the destination country, receiving authority, document type and required language. We can quote for the appropriate translation and identify questions you should resolve with the government or receiving authority before placing an order.
            </p>
            <div className="pt-2">
              <Link
                href="/guides/mofa-online-attestation"
                className="font-bold text-emerald-700 underline hover:text-emerald-800 text-sm"
              >
                See examples of the correct sequence in our MOFA Guide →
              </Link>
            </div>
          </section>

          {/* How to request a LISAN.PK translation quote */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              How to request a LISAN.PK translation quote
            </h2>

            <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <li>
                Share a clear scan or photograph and the number of pages through our <Link href="/contact" className="text-emerald-700 underline font-semibold">contact page</Link>.
              </li>
              <li>
                Tell us the destination and receiving organisation (for example, a specific university, employer or embassy).
              </li>
              <li>
                Confirm the language and certification requested. Do not pay for an optional service unless you need it.
              </li>
              <li>
                Receive a case-specific quotation covering translation scope and any separately agreed delivery method.
              </li>
              <li>
                Review the translation details—names, dates, registration numbers and stamps—before final delivery.
              </li>
            </ol>

            <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed">
              Government attestation fees are separate from translation fees. Check the <a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="text-slate-800 underline font-semibold">official MOFA fee schedule</a> and your own portal challan. We do not list a universal government fee or promise an official processing time.
            </div>
          </section>

          {/* MOFA offices, online applications and courier options */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              MOFA offices, online applications and courier options
            </h2>
            <p className="leading-relaxed text-sm sm:text-base text-slate-700">
              MOFA&apos;s October 2026 notice covers Islamabad, Lahore, Karachi, Peshawar, Quetta and Gujrat. For searches such as “MOFA attestation in Lahore,” “MOFA near me,” or “MOFA attestation Gujranwala,” always check MOFA&apos;s actual office list and your application instructions. Gujrat and Gujranwala are different cities.
            </p>
            <p className="leading-relaxed text-sm sm:text-base text-slate-700">
              The ministry provides an <a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">authorised courier directory</a>, but a listed courier is not automatically available for every document or at every branch. Confirm handling requirements before sending an original.
            </p>
            <div className="pt-2">
              <Link
                href="/guides/mofa-online-attestation#mofa-attestation-offices-and-authorised-courier-drop-off-options"
                className="font-bold text-emerald-700 underline hover:text-emerald-800 text-sm"
              >
                Find offices, couriers and application steps in our guide →
              </Link>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {serviceFaqs.map((faq, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base font-serif mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Get a document translation quote CTA */}
          <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-3">
              Get a document translation quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Tell us what document you have, where you will submit it and which language is requested. We&apos;ll help you establish the translation scope without pretending to issue government certificates or promising an outcome controlled by someone else.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link href="/contact">
                <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-8 rounded-xl text-sm w-full sm:w-auto">
                  Contact LISAN.PK
                </Button>
              </Link>
              <a
                href="https://wa.me/923044296295?text=Assalamualaikum%2C%20I%20need%20a%20translation%20quote%20for%20documents%20intended%20for%20MOFA%20or%20overseas%20use."
                target="_blank"
                rel="noopener noreferrer"
                data-lead="whatsapp"
              >
                <Button variant="outline" className="border-slate-700 text-slate-200 hover:bg-slate-800 font-bold h-12 px-8 rounded-xl text-sm w-full sm:w-auto">
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 font-medium pt-4 border-t border-slate-800">
              <Link href="/contact" className="hover:text-emerald-400 underline">Contact LISAN.PK</Link>
              <span>·</span>
              <Link href="/guides/mofa-online-attestation" className="hover:text-emerald-400 underline">MOFA Attestation 2026 Guide</Link>
              <span>·</span>
              <Link href="/services/translation/nikah-nama-marriage-certificate" className="hover:text-emerald-400 underline">Marriage Document Translation</Link>
            </div>
          </section>

          {/* Verification Footnote */}
          <footer className="text-xs text-slate-500 border-t border-slate-200 pt-6 leading-relaxed">
            Information checked: 3 November 2026. Official sources:{" "}
            <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">
              MOFA Consular Services
            </a>,{" "}
            <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">
              MOFA&apos;s application procedure
            </a>,{" "}
            <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">
              MOFA country directory
            </a>{" "}
            and{" "}
            <a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">
              MOFA fees
            </a>. This page describes private translation assistance and publicly available process guidance, not an affiliation with MOFA or a guarantee of legal or consular acceptance.
          </footer>

        </article>
      </div>
    </main>
  )
}
