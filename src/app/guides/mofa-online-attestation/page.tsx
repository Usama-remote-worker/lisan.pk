import { Metadata } from "next"
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "MOFA Online Attestation Pakistan 2026: Apply, e-Certificate & Translation Guide",
  description: "How to apply for MOFA online attestation in Pakistan in 2026, use the official portal, prepare documents, understand e-Certificates, fees and office visits.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/mofa-online-attestation",
  },
  openGraph: {
    title: "MOFA Online Attestation Pakistan 2026: Apply, e-Certificate & Translation Guide",
    description: "How to apply for MOFA online attestation in Pakistan in 2026, use the official portal, prepare documents, understand e-Certificates, fees and office visits.",
    url: "https://www.lisan.pk/guides/mofa-online-attestation",
    type: "article",
    publishedTime: "2026-11-03T00:00:00Z",
    modifiedTime: "2026-11-03T00:00:00Z",
  }
}

const guideFaqs = [
  {
    q: "How do I apply for MOFA attestation online in Pakistan?",
    a: "Visit the official MOFA applicant portal (portal-attestation.mofa.gov.pk), register or sign in, complete your profile, choose General Attestation or Apostille, upload the requested documents and await officer review. Follow any subsequent appointment and payment instructions shown in your account."
  },
  {
    q: "Is MOFA online attestation available in Lahore?",
    a: "Yes. MOFA's October 2026 notice includes its Lahore liaison office in the Digital Attestation System. Whether your document needs a physical visit depends on your case and the current portal directions."
  },
  {
    q: "Can I get a MOFA e-Certificate by email?",
    a: "MOFA's 12 October 2026 digital-attestation notice states that an e-Certificate can be issued by email after the required process and payment. Check the certificate against MOFA's official verifier; not all cases necessarily have identical handling steps."
  },
  {
    q: "Is a MOFA appointment mandatory?",
    a: "The current published online procedure includes appointment booking after officer approval and an office visit. The ministry's newer digital-attestation notice also envisages remote handling for many cases. Treat the instructions issued for your particular application as authoritative."
  },
  {
    q: "Is MOFA attestation the same as an Apostille?",
    a: "No. General Attestation and Apostille are different forms of authentication. Their suitability depends on the country, treaty relationship, document category and receiving authority."
  },
  {
    q: "What is the MOFA attestation fee for educational documents?",
    a: "Check the official MOFA fee schedule (attestation.mofa.gov.pk/fees) and your portal-generated challan. Educational-document fees differ by General Attestation versus Apostille. This guide does not quote an amount that might become outdated."
  },
  {
    q: "Is HEC attestation required before MOFA for a degree?",
    a: "University degrees generally require the applicable HEC authentication before MOFA processing. Read the current MOFA checklist and confirm the HEC procedure for the exact record. Board certificates have different IBCC requirements."
  },
  {
    q: "Must I translate my documents before applying to MOFA?",
    a: "Not automatically. Translate if the receiving body requires it, and determine whether it wants the original authenticated, the translation authenticated, or both. If the final e-Certificate or stamps must be translated, the translator needs the final authenticated material."
  },
  {
    q: "Does MOFA attestation guarantee Saudi, UAE or other embassy acceptance?",
    a: "No. MOFA authentication is only one potential step. The receiving country or organisation decides whether the document, language, certification, apostille or embassy legalisation meets its requirements."
  },
  {
    q: "Is there a MOFA office in Gujranwala or Sialkot?",
    a: "Neither city is separately listed among the six headquarters/liaison locations named in the October 2026 MOFA notice. Gujrat is a different city and is listed. For the current designated office or available courier service, check MOFA's official portal and courier directory."
  },
  {
    q: "Can LISAN.PK issue a government MOFA attestation certificate?",
    a: "No. Only the competent government authority issues MOFA attestation or an Apostille. LISAN.PK can help review translation needs, prepare document translations and explain publicly available requirements; any additional logistical service must be confirmed separately."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/guides/mofa-online-attestation/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.lisan.pk/guides" },
        { "@type": "ListItem", "position": 3, "name": "MOFA Online Attestation in Pakistan (2026)", "item": "https://www.lisan.pk/guides/mofa-online-attestation" }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.lisan.pk/guides/mofa-online-attestation/#article",
      "headline": "MOFA Online Attestation in Pakistan (2026): How to Apply, Get an e-Certificate and Prepare Translations",
      "description": "How to apply for MOFA online attestation in Pakistan in 2026, use the official portal, prepare documents, understand e-Certificates, fees and office visits.",
      "datePublished": "2026-11-03T00:00:00Z",
      "dateModified": "2026-11-03T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "Lisan.pk Editorial Team",
        "url": "https://www.lisan.pk"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.lisan.pk/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.lisan.pk/guides/mofa-online-attestation"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/guides/mofa-online-attestation/#faq",
      "mainEntity": guideFaqs.map(f => ({
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

export default function MofaOnlineAttestationGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Guide Header */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-24 pb-16 border-b border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs text-slate-400 mb-6 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services/attestation" className="hover:text-emerald-400 transition-colors">Attestation Support</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-200">MOFA Online Attestation Guide</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            Informational Guide • P0 Reference
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white mb-6 leading-tight">
            MOFA Online Attestation in Pakistan (2026): How to Apply, Get an e-Certificate and Prepare Translations
          </h1>

          {/* Quick Answer Box */}
          <div className="bg-slate-800/90 border-l-4 border-emerald-500 p-6 rounded-r-2xl shadow-xl mb-6 text-sm sm:text-base leading-relaxed text-slate-200">
            <strong className="text-emerald-400 block mb-2 font-serif text-base">Quick answer:</strong>
            Pakistan&apos;s Ministry of Foreign Affairs (MOFA) introduced its Digital Attestation System on 12 October 2026 for General Attestation and Apostille, with electronic certificates issued by email after the required checks and payment. Applicants can start the process online through the <a href="https://portal-attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline font-semibold">official MOFA portal</a>. Not every case is confirmed to be entirely remote: MOFA&apos;s public application guide still describes approval, appointment booking and submission of originals at a Foreign Affairs Liaison Office (FALO). Follow the instructions shown for your approved application rather than assuming an office visit is—or is not—required.
          </div>

          <p className="text-xs text-slate-400 italic">
            Last checked against official MOFA sources: 3 November 2026. Procedures may change. LISAN.PK is a private translation service and is not the Ministry of Foreign Affairs, an embassy or a government portal.
          </p>
        </div>
      </section>

      {/* Guide Body */}
      <div className="container mx-auto px-4 max-w-4xl py-14">
        <article className="prose prose-slate max-w-none space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">

          {/* Section 1 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              What changed in MOFA attestation in October 2026?
            </h2>
            <p>
              MOFA announced that its digital document-attestation system became effective on Monday, 12 October 2026, at Islamabad headquarters and its liaison offices in Lahore, Karachi, Peshawar, Quetta and Gujrat. The ministry&apos;s notice says applicants can submit material electronically and receive an e-Certificate by email after completing the prescribed procedure. The notice envisages fewer office visits, while allowing exceptional cases that still require physical presence.
            </p>
            <p>
              There is an important practical detail: the <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA online application&apos;s published step-by-step guide</a> currently instructs applicants to wait for document review, book an appointment, pay after booking, and visit a FALO office with documents. In other words, digital issuance does not, by itself, prove that every original document can stay at home. Follow the latest portal status, appointment instructions and any written MOFA direction for your specific submission.
            </p>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Official notices: <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">MOFA Consular Services — Digital Attestation notice</a> · <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">MOFA Application Procedure</a> · <a href="https://pid.gov.pk/site/press_detail/34262" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">Government press release, 12 October 2026</a>.
            </p>
          </section>

          {/* Section 2: Step by Step */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              MOFA online attestation: step-by-step application process
            </h2>
            <p>
              The official applicant guidance describes the following sequence for both General Attestation and Apostille. The portal may introduce case-specific steps; the instructions displayed in your account take precedence.
            </p>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 rounded-tl-xl w-1/4">Step</th>
                    <th className="p-3.5 w-5/12">What to do</th>
                    <th className="p-3.5 rounded-tr-xl w-1/3">Important check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">1. Select the service</td>
                    <td className="p-3.5">Confirm whether the destination requires General Attestation or an Apostille.</td>
                    <td className="p-3.5 text-slate-600">A document meant for a Hague Apostille destination should not automatically follow an embassy-legalisation route.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">2. Register or sign in</td>
                    <td className="p-3.5">Open the <a href="https://portal-attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA applicant portal</a>, create an account and verify the email address if prompted.</td>
                    <td className="p-3.5 text-slate-600">Use your own active email; MOFA may send review decisions and certificate details there.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">3. Complete your profile</td>
                    <td className="p-3.5">Supply the identity details requested by the portal.</td>
                    <td className="p-3.5 text-slate-600">Match names and identification information to your official documents.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">4. Add documents</td>
                    <td className="p-3.5">Select document categories and submit readable document images or files as requested.</td>
                    <td className="p-3.5 text-slate-600">Check both sides, seals, signatures, issuing authority and necessary pre-attestation.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">5. Await officer review</td>
                    <td className="p-3.5">The responsible MOFA/FALO officer assesses the application and may request corrections.</td>
                    <td className="p-3.5 text-slate-600">Under review is not approval. Do not book travel based on an incomplete submission.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">6. Follow appointment instructions</td>
                    <td className="p-3.5">Where the portal requires a physical step, book an available appointment after approval.</td>
                    <td className="p-3.5 text-slate-600">MOFA&apos;s public process page says appointment booking follows officer approval.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">7. Check the generated fee challan</td>
                    <td className="p-3.5">Review the prescribed charge for your document category and pay through the portal&apos;s available method.</td>
                    <td className="p-3.5 text-slate-600">MOFA&apos;s public flow shows the challan after appointment booking. Never rely on an old screenshot for the amount.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">8. Complete final submission</td>
                    <td className="p-3.5">Follow the portal&apos;s actual delivery instructions: a digital completion where available, or original-document submission at the booked office where required.</td>
                    <td className="p-3.5 text-slate-600">Some documents and legal acts may require original inspection or personal appearance.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">9. Receive and check the result</td>
                    <td className="p-3.5">Check the email and portal for the issued attestation or e-Certificate, and retain the record.</td>
                    <td className="p-3.5 text-slate-600">Verify the certificate using the official checker appropriate to its type.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Simple MOFA Attestation Flow */}
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl not-prose space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Simple MOFA attestation flow
            </h2>

            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 text-xs sm:text-sm font-mono text-emerald-300 leading-relaxed overflow-x-auto">
              Document + destination check → Online account → Document upload → Officer review → Approval → Appointment/payment if instructed → Physical or digital completion as directed → e-Certificate/attested result → Verification.
            </div>

            <p className="text-xs text-slate-400">
              This flow describes government processing. An agency cannot approve an application on MOFA&apos;s behalf.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              *Authentic screenshot pending owner-provided asset.
            </p>
          </section>

          {/* Can MOFA attestation now be completed without visiting an office? */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Can MOFA attestation now be completed without visiting an office?
            </h2>
            <p>
              Sometimes, according to MOFA&apos;s October 2026 notice—but do not assume it applies to every application. MOFA says electronic certificates support remote processing except where physical presence is necessary. Meanwhile, the public portal&apos;s <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Application Procedure</a> and <a href="https://attestation.mofa.gov.pk/general-checklist" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">General Attestation Checklist</a> describe appointment-based submission of originals at a FALO office.
            </p>
            <p>
              The safest approach is to apply online first, wait for the case-specific decision and read the instructions inside your portal account. If it displays a mandatory appointment, do not skip it merely because a news article says attestation is now online. Similarly, do not travel to a liaison office before the portal or MOFA tells you to do so.
            </p>
            <p>
              When might physical attendance be relevant? Some powers of attorney, affidavits, original-document verifications and other legal documents have specific appearance or supporting-document rules. Check <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA&apos;s document requirements</a> for the exact document, rather than assuming the same rule applies to a degree, Nikah Nama and power of attorney.
            </p>
          </section>

          {/* General Attestation vs Apostille */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              General Attestation vs Apostille: which one should you choose?
            </h2>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 rounded-tl-xl w-1/4">Question</th>
                    <th className="p-3.5 w-3/8">General Attestation</th>
                    <th className="p-3.5 rounded-tr-xl w-3/8">Apostille</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700 leading-relaxed">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Purpose</td>
                    <td className="p-3.5">Authentication under a general legalisation process for the requested destination/use.</td>
                    <td className="p-3.5">Certification of an eligible public document under the Hague Apostille Convention where applicable between the issuing and receiving states.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Destination test</td>
                    <td className="p-3.5">Check whether the destination/receiving body requires general legalisation and whether another embassy step applies.</td>
                    <td className="p-3.5">Check the destination&apos;s treaty relationship and the receiving organisation&apos;s requirements.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Application</td>
                    <td className="p-3.5">Uses MOFA&apos;s online attestation system.</td>
                    <td className="p-3.5">Also uses online registration; MOFA separately made advance apostille registration compulsory from 27 July 2026.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Outcome</td>
                    <td className="p-3.5">General attestation or corresponding verified record.</td>
                    <td className="p-3.5">Apostille certificate for an eligible document.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Does it translate the document?</td>
                    <td className="p-3.5 font-semibold text-amber-900 bg-amber-50/40">No.</td>
                    <td className="p-3.5 font-semibold text-amber-900 bg-amber-50/40">No.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Must an embassy always attest it afterward?</td>
                    <td className="p-3.5">Not universally; confirm the receiving authority&apos;s rules.</td>
                    <td className="p-3.5">Usually the apostille replaces the traditional diplomatic legalisation chain between applicable Convention states, but the receiving authority can still require translations or other document conditions.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium">
              <strong>Important:</strong> An Apostille authenticates a document&apos;s origin; it does not certify the accuracy of its translation or guarantee that a visa, job or university application will be accepted.
            </p>

            <p>
              For current country guidance, consult <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA&apos;s destination-country directory</a>. Saudi Arabia is listed under Apostille, whereas the United Arab Emirates appears under General Attestation on the directory reviewed for this guide. Always check your particular document and receiving authority before paying for either service.
            </p>
            <div className="pt-2">
              <Link
                href="/guides/apostille-pakistan"
                className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-semibold underline text-sm"
              >
                <span>Apostille in Pakistan: Official Registration &amp; Requirements</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Documents Required */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              MOFA online attestation documents required
            </h2>
            <p>
              The requirements depend on the original document, the issuing body and whether you request General Attestation or Apostille. MOFA&apos;s <a href="https://attestation.mofa.gov.pk/general-checklist" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">general checklist</a> and <a href="https://attestation.mofa.gov.pk/list-of-public-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">list of attestable documents</a> are the primary sources.
            </p>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 rounded-tl-xl w-1/3">Document group</th>
                    <th className="p-3.5 w-1/3">Prepare before applying</th>
                    <th className="p-3.5 rounded-tr-xl w-1/3">What to check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Degree, transcript or other university record</td>
                    <td className="p-3.5">Clear document copies plus any HEC authentication required for that record.</td>
                    <td className="p-3.5 text-slate-600">The official HEC process may need to be completed before MOFA. Do not assume a private agent can do HEC&apos;s official verification.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Matric, intermediate or board documents</td>
                    <td className="p-3.5">Educational records and the IBCC authentication required for the category.</td>
                    <td className="p-3.5 text-slate-600">Check the specific board certificate and the receiving institution&apos;s rules.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Nikah Nama / Marriage Registration Certificate (MRC)</td>
                    <td className="p-3.5">Marriage record, relevant identity documents and any additional documents specified for the case.</td>
                    <td className="p-3.5 text-slate-600">Documents connected with a foreign spouse can have extra supporting-document requirements.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Birth certificate / FRC / death certificate</td>
                    <td className="p-3.5">Authentic civil record with clear issuing details and identity information where requested.</td>
                    <td className="p-3.5 text-slate-600">The correct issuing office and record type matter.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Police character / clearance certificate</td>
                    <td className="p-3.5">The police-issued document and any prerequisite checks stated in MOFA&apos;s SOPs.</td>
                    <td className="p-3.5 text-slate-600">Check validity and the destination&apos;s latest requirements.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Power of attorney / affidavit / court document</td>
                    <td className="p-3.5">Original legal record and any prescribed attestation, personal-appearance or identity evidence.</td>
                    <td className="p-3.5 text-slate-600">Do not assume fully remote completion.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Commercial document</td>
                    <td className="p-3.5">Relevant business record and prior Chamber/issuing-authority authentication where prescribed.</td>
                    <td className="p-3.5 text-slate-600">Confirm business signatory and category.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs sm:text-sm text-slate-600">
              Basic pre-submission check: names match; pages are complete; stamps/signatures are legible; the correct prior authority authenticated the document; and the destination accepts the selected route. The portal may request additional evidence beyond this summary.
            </p>
          </section>

          {/* Fee in 2026 */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              What is the MOFA online attestation fee in 2026?
            </h2>
            <p>
              There is no single fee for every MOFA document. The amount depends on the service (General Attestation or Apostille) and the document category (personal, educational, legal, commercial, etc.). Extra private courier charges and translation charges, if used, are separate.
            </p>
            <p>
              Before paying, open the <a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official MOFA fees page</a> and compare the amount with the challan generated for your own approved application. This guide intentionally does not publish a fixed rupee amount: prices, category classification and payment options can change. A quotation from LISAN.PK is not a government fee schedule.
            </p>
          </section>

          {/* Translation before or after */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Where does document translation fit—before or after MOFA attestation?
            </h2>
            <p>
              Neither order is correct for every destination. First ask which item must be authenticated: the original Pakistani record, a translated copy, or both. Then follow the issuing and receiving authorities&apos; instructions.
            </p>
            <p>A practical decision sequence is:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Check the receiving authority. Ask which language it accepts, whether a certified translation is required and whether the original and/or translation needs authentication.</li>
              <li>Check the original&apos;s prerequisite authentication. For example, a university degree or board certificate may need HEC or IBCC processing before the MOFA stage.</li>
              <li>Apply for the required MOFA service on the correct record. Choose General Attestation or Apostille based on the destination and document.</li>
              <li>Prepare the translation in the required format. If the authority wants the final attestation or e-Certificate translated too, provide that final record to the translator. If MOFA is being asked to attest the translation itself, first confirm MOFA&apos;s accepted bilingual formatting and underlying authentication requirements.</li>
              <li>Check the final submission package. Ensure spelling, dates, document numbers, stamps and references match the originals.</li>
            </ol>
            <p>
              MOFA&apos;s consular SOPs contain rules for translations submitted to MOFA, including English being present alongside another language in relevant translated-document formats. That is different from saying every translated document must be attested. Read the current <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA Consular SOPs</a> and ask the receiving authority what it actually wants.
            </p>
            <p>
              <em>Example:</em> A student applying abroad may need the degree&apos;s official authentication followed by an English or Arabic translation of the authenticated record. Another institution may accept an English degree without translation. Never order a translation or apostille solely because a general blog says it is mandatory.
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs sm:text-sm">
              Need a translation, not a government attestation? You can ask LISAN.PK to review your document and quote for an English or Arabic translation via our <Link href="/contact" className="text-emerald-700 underline font-bold">contact page</Link>. For marriage documents, see our <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-bold">Nikah Nama and MRC translation service</Link>.
            </div>
          </section>

          {/* MOFA offices and courier options (with exact anchor id) */}
          <section id="mofa-attestation-offices-and-authorised-courier-drop-off-options" className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              MOFA attestation offices and authorised courier drop-off options
            </h2>
            <p>
              People searching for “MOFA attestation near me,” “MOFA Lahore,” “MOFA Gujranwala,” “MOFA Sialkot,” “MOFA Multan” or “MOFA Bahawalpur” should distinguish a MOFA liaison office from a private courier branch. Not every city with an attestation-related search query has its own MOFA/FALO office.
            </p>
            <p>
              MOFA&apos;s October notice identifies its headquarters in Islamabad, plus liaison offices in Lahore, Karachi, Peshawar, Quetta and Gujrat.
            </p>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 rounded-tl-xl w-1/4">Location</th>
                    <th className="p-3.5 w-1/3">MOFA presence mentioned in the October 2026 notice</th>
                    <th className="p-3.5 rounded-tr-xl w-5/12">Guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Islamabad</td>
                    <td className="p-3.5">Ministry headquarters</td>
                    <td className="p-3.5 text-slate-600">Use the current portal for your assigned office and appointment instructions.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Lahore</td>
                    <td className="p-3.5">Foreign Affairs Liaison Office</td>
                    <td className="p-3.5 text-slate-600">Searchers for “MOFA attestation service Lahore” should confirm whether remote processing or an office appointment applies.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Karachi</td>
                    <td className="p-3.5">Foreign Affairs Liaison Office</td>
                    <td className="p-3.5 text-slate-600">Check whether courier handling or an in-person step is supported for your document.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Peshawar</td>
                    <td className="p-3.5">Foreign Affairs Liaison Office</td>
                    <td className="p-3.5 text-slate-600">Check the correct office selection and case instructions.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Quetta</td>
                    <td className="p-3.5">Foreign Affairs Liaison Office</td>
                    <td className="p-3.5 text-slate-600">Check the correct office selection and case instructions.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Gujrat</td>
                    <td className="p-3.5">Foreign Affairs Liaison Office</td>
                    <td className="p-3.5 text-slate-600">This is Gujrat, not Gujranwala.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Gujranwala, Sialkot, Multan, Bahawalpur</td>
                    <td className="p-3.5 text-slate-500">Not listed as separate FALO locations in the October notice</td>
                    <td className="p-3.5 text-slate-600">Start online; ask MOFA or an authorised courier which eligible service point handles your case. Do not assume a local private shop is a MOFA office.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              MOFA lists these authorised courier companies on its official directory: TCS; Gerry&apos;s International; Excellent Courier Services; Leopards Courier Service; and M&amp;P Express Logistics. That listing does not mean every branch supports every attestation category or that every courier service can replace a required personal appearance. Check current branch participation and official instructions before dispatching an original.
            </p>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Check directly: <a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">MOFA authorised courier directory</a> · <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">MOFA Consular Services and liaison-office information</a> · <a href="https://portal-attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">Application Portal</a>.
            </p>
          </section>

          {/* Verification */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              How do I verify a MOFA e-Certificate or Apostille?
            </h2>
            <p>
              After you receive the attestation output, open the official verification page for its specific type:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="https://attestation.mofa.gov.pk/verify-general" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA General Attestation verification</a></li>
              <li><a href="https://attestation.mofa.gov.pk/verify-apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">MOFA Apostille verification</a></li>
            </ul>
            <p>
              Use the reference number, security features or details requested by the actual checker. Do not assume that a screenshot sent on WhatsApp or a PDF bearing a logo is genuine. If the reference cannot be verified, contact MOFA through its official contact information rather than paying a third party for an alleged “verification fix.”
            </p>
          </section>

          {/* Why is my destination country missing? */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Why is my destination country missing from the online list?
            </h2>
            <p>
              A country not appearing in a dropdown or online country directory does not establish that documents for that country can never be attested. It may be a portal-data or classification issue, or that destination may require a different legalisation route.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Recheck the exact country spelling and the <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official MOFA country directory</a>.</li>
              <li>Check whether you selected General Attestation or Apostille correctly.</li>
              <li>Ask the receiving institution or embassy exactly which authentication it accepts.</li>
              <li>Seek clarification from MOFA&apos;s official support rather than selecting an unrelated country to make the form submit.</li>
            </ul>
            <p className="text-xs font-bold text-amber-900">
              Never choose a false destination country simply to bypass a portal limitation.
            </p>
          </section>

          {/* Common Problems Table */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Common MOFA online attestation problems
            </h2>

            <div className="overflow-x-auto not-prose my-6">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 rounded-tl-xl w-5/12">Problem</th>
                    <th className="p-3.5 rounded-tr-xl w-7/12">Likely next step</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-slate-50 text-slate-700">
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Application says “under review”</td>
                    <td className="p-3.5">Wait for the officer decision or a request for corrections; review does not mean an appointment is approved.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Appointment button is unavailable</td>
                    <td className="p-3.5">Check whether each document has passed officer review first.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Fee challan is not visible</td>
                    <td className="p-3.5">The published portal flow displays it after the appointment is booked; check the application stage.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Document rejected for insufficient authentication</td>
                    <td className="p-3.5">Consult the category checklist and obtain the required HEC, IBCC, civil or issuing-authority record.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Need an e-Certificate urgently</td>
                    <td className="p-3.5">There is no guaranteed universal MOFA processing time; follow official status and support channels.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Name differs across the CNIC, degree and passport</td>
                    <td className="p-3.5">Seek a lawful correction or accepted supporting evidence from the issuing authority; never alter a scan.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Apostille isn&apos;t available for the destination</td>
                    <td className="p-3.5">Recheck the country directory and receiving authority before considering the General Attestation route.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold text-slate-900">Translation looks different from the original</td>
                    <td className="p-3.5">Review spellings, dates, document fields, stamps and missing reverse-side text with the translator before submission.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Guide FAQs */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Frequently asked questions
            </h2>

            <div className="space-y-4 not-prose">
              {guideFaqs.map((faq, idx) => (
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

          {/* 60-second checklist */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 not-prose">
              Before you submit: 60-second checklist
            </h2>

            <div className="space-y-2.5 not-prose text-xs sm:text-sm">
              {[
                "I know the receiving institution and destination country.",
                "I selected the correct General Attestation / Apostille service.",
                "My identity details match the documents.",
                "HEC, IBCC or other required pre-authentication is complete.",
                "My uploaded documents are complete and legible.",
                "I have read the actual portal instructions about approval, appointment and delivery.",
                "I will pay only the amount shown on the official payment instruction.",
                "I understand whether English/Arabic translation is required and whether stamps/e-Certificate details must be included.",
                "I will verify the issued attestation using the official verifier."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                    ✓
                  </span>
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Need English or Arabic translation for an attested document? */}
          <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl not-prose space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
              Need English or Arabic translation for an attested document?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              LISAN.PK provides document translation assistance; MOFA performs government authentication. Send a readable copy and tell us the destination country, document type and receiving organisation. We can assess the translation scope and provide a quote. We do not promise a visa, university decision, an attestation outcome or embassy acceptance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 text-xs font-bold">
              <Link
                href="/contact"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all shadow-md"
              >
                Request a document translation quote →
              </Link>
              <Link
                href="/services/attestation"
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl transition-all"
              >
                View document attestation support
              </Link>
              <Link
                href="/services/translation/nikah-nama-marriage-certificate"
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-xl transition-all"
              >
                Nikah Nama / MRC translation
              </Link>
            </div>
          </section>

          {/* Official references and editorial record */}
          <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-4 text-xs text-slate-600">
            <h2 className="text-lg font-bold font-serif text-slate-900 not-prose mb-3">
              Official references and editorial record
            </h2>
            <p>Official sources reviewed on 3 November 2026:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Pakistan MOFA — Consular Services, digital attestation notice, prior apostille-registration notice and document SOPs</a>.</li>
              <li><a href="https://pid.gov.pk/site/press_detail/34262" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Government of Pakistan Press Information Department — 12 October 2026 reform announcement</a>.</li>
              <li><a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">MOFA Document Attestation — application steps</a>.</li>
              <li><a href="https://attestation.mofa.gov.pk/general-attestation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">MOFA Document Attestation — General Attestation</a> and <a href="https://attestation.mofa.gov.pk/apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Apostille</a>.</li>
              <li><a href="https://attestation.mofa.gov.pk/general-checklist" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">MOFA — category requirements</a>, <a href="https://attestation.mofa.gov.pk/list-of-public-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">public document list</a> and <a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">official fees</a>.</li>
              <li><a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">MOFA — destination country directory</a> and <a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">authorised courier directory</a>.</li>
              <li><a href="https://attestation.mofa.gov.pk/verify-general" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">MOFA — General verification</a> and <a href="https://attestation.mofa.gov.pk/verify-apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Apostille verification</a>.</li>
            </ul>
            <p className="pt-3 border-t border-slate-100 text-slate-500 leading-relaxed italic">
              <strong>Editorial note (3 November 2026):</strong> MOFA&apos;s general October notice and its published online application steps differ on whether an in-person stage is required. This article discloses that difference and directs readers to their own application instructions. Any future portal changes should prompt a content review. This is independent guidance, not an official MOFA publication.
            </p>
          </section>

        </article>
      </div>
    </main>
  )
}
