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
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "HEC Degree Attestation Online 2026: Apply, Fee, Documents & e-Certificate",
  description: "Apply for HEC degree attestation online in 2026. Follow the new paperless DAS steps, check the Rs 3,000 per-document fee, required scans and Saudi/UAE next steps.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/hec-online-degree-attestation",
  },
  openGraph: {
    title: "HEC Degree Attestation Online 2026: Apply, Fee, Documents & e-Certificate",
    description: "Apply for HEC degree attestation online in 2026. Follow the new paperless DAS steps, check the Rs 3,000 per-document fee, required scans and Saudi/UAE next steps.",
    url: "https://www.lisan.pk/guides/hec-online-degree-attestation",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
  }
}

const guideFaqs = [
  {
    "q": "Can I apply for HEC degree attestation online from Lahore, Karachi or abroad?",
    "a": "Yes. HEC's new DAS permits online applications through its official portal. Availability of the online application does not remove separate destination-country requirements."
  },
  {
    "q": "Do I still have to send original documents to HEC?",
    "a": "Not for the new standard paperless DAS attestation process described on HEC's current official page."
  },
  {
    "q": "Is HEC attestation Rs 3,000 in 2026?",
    "a": "HEC currently lists PKR 3,000 per document. Verify the calculated charge in the official portal before paying."
  },
  {
    "q": "If I attest my degree and transcript, is that one fee?",
    "a": "No. HEC lists the degree and transcript as separate document selections; at its current rate two such documents total PKR 6,000."
  },
  {
    "q": "How do I confirm my online application was submitted?",
    "a": "Verify the payment in your HEC dashboard, then check the application status. A saved or pending-payment record may not be submitted."
  },
  {
    "q": "What if my university has not verified my degree yet?",
    "a": "Monitor the status and follow HEC's instructions; issuance depends on confirmation from the awarding university/HEI and HEC final review."
  },
  {
    "q": "Can I attest a transcript before my final degree is issued?",
    "a": "HEC says qualifying transcripts may be attested even before the degree is issued, subject to its requirements for incomplete records."
  },
  {
    "q": "Does HEC attest my matric or FSc certificate?",
    "a": "HEC's degree-attestation process concerns higher-education records. For Pakistan's Board-issued matric/intermediate documents, check IBCC and the relevant issuing Board."
  },
  {
    "q": "Can HEC attest a foreign university's degree?",
    "a": "HEC does not ordinarily attest foreign-issued degrees. It provides an equivalence process for qualifying foreign degrees and can attest its own equivalence letters under the current system."
  },
  {
    "q": "Does HEC e-Attestation mean my degree is accepted in Saudi Arabia?",
    "a": "No. HEC verifies a Pakistani higher-education credential; the Saudi university, employer or authority decides the documentation it will accept."
  },
  {
    "q": "Does the UAE require the original degree even though HEC is digital?",
    "a": "The UAE attestation process has separate rules. Its Islamabad guidance describes courier collection of physical original documents for the UAE digital attestation service."
  },
  {
    "q": "Must my English degree be translated into Arabic?",
    "a": "Only if the receiving institution or authority requests it. Confirm whether it wants the degree, transcript, e-Attestation Certificate or all relevant records translated."
  },
  {
    "q": "Are old HEC stamps automatically invalid after May 2026?",
    "a": "We found no blanket cancellation statement in HEC's current new-process instructions. Ask the receiving authority whether the existing genuine attestation suffices."
  },
  {
    "q": "How quickly can HEC issue my e-Attestation Certificate?",
    "a": "There is no universal guarantee. HEC's scrutiny, your university's verification and any revision requests determine timing."
  },
  {
    "q": "Can LISAN.PK get me an HEC approval faster?",
    "a": "No independent translation company can promise HEC approval or priority. Apply and pay through HEC directly; LISAN.PK can assist with translation and understanding published document requirements without claiming to be HEC or an authorised attestation agent."
  },
  {
    "q": "Where should I report an HEC portal or verification problem?",
    "a": "Use HEC's official online help system (onlinehelp.hec.gov.pk) and contacts published by HEC, rather than an unfamiliar private payment or verification website."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/guides/hec-online-degree-attestation/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.lisan.pk/guides" },
        { "@type": "ListItem", "position": 3, "name": "HEC Degree Attestation Online 2026", "item": "https://www.lisan.pk/guides/hec-online-degree-attestation" }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.lisan.pk/guides/hec-online-degree-attestation/#article",
      "headline": "HEC Degree Attestation Online in Pakistan (2026): Full DAS Application Guide",
      "description": "Apply for HEC degree attestation online in 2026. Follow the new paperless DAS steps, check the Rs 3,000 per-document fee, required scans and Saudi/UAE next steps.",
      "url": "https://www.lisan.pk/guides/hec-online-degree-attestation",
      "datePublished": "2026-11-05T00:00:00Z",
      "dateModified": "2026-11-05T00:00:00Z",
      "author": {
        "@type": "Organization",
        "name": "LISAN.PK Editorial Team",
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
      "mainEntityOfPage": "https://www.lisan.pk/guides/hec-online-degree-attestation"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/guides/hec-online-degree-attestation/#faq",
      "mainEntity": guideFaqs.map(faq => ({
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

export default function HecOnlineAttestationGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Header / Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 max-w-4xl py-4">
          <nav className="text-xs font-medium text-slate-500 flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/guides" className="hover:text-emerald-700 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate">HEC Degree Attestation Online (2026)</span>
          </nav>
        </div>
      </div>

      <article className="container mx-auto px-4 max-w-4xl py-10 sm:py-14 space-y-12">
        {/* Header Block */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <GraduationCap className="w-3.5 h-3.5" />
            Official Procedure Guide (B:T05) • Updated 5 November 2026
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-[1.15]">
            HEC Degree Attestation Online in Pakistan (2026): Full DAS Application Guide
          </h1>

          <div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong>HEC degree attestation is now an online, paperless process.</strong> Under the new Degree Attestation System (DAS), effective <strong>11 May 2026</strong>, applicants submit scanned academic records, pay the government fee online, and receive an <strong>HEC e-Attestation Certificate</strong> after HEC scrutiny and verification by the awarding institution. HEC&apos;s current published fee is <strong>PKR 3,000 per document</strong>. Apply only through{" "}
              <a href="https://eservices.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                HEC e-Services
              </a>
              . [Source:{" "}
              <a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold hover:text-emerald-800">
                HEC official procedure
              </a>
              ].
            </p>
          </div>

          {/* Quick Answer Callout */}
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div className="text-sm sm:text-base leading-relaxed">
                <strong>Quick answer:</strong> You do <strong>not</strong> need to send your original degree to HEC or attend an HEC office for the new paperless attestation application. If you need to use your degree in Saudi Arabia, the UAE, or elsewhere, check the <strong>receiving university, employer, visa authority and destination-country authentication rules separately</strong>. An HEC e-Attestation Certificate does not by itself establish that every foreign authority has approved your document.
              </div>
            </div>
            <div className="pt-2 border-t border-emerald-200/60 text-xs sm:text-sm text-emerald-900">
              <strong>Official process:</strong> Online application → HEC scrutiny → university/HEI verification → HEC e-Attestation Certificate.
            </div>
            <div className="text-xs text-emerald-800">
              <strong>Last checked:</strong> 5 November 2026. This guide explains the current new process; older HEC help pages describing walk-in visits and courier-based paper stamping can still appear in search results.
            </div>
          </div>
        </header>

        {/* Section 1: What changed on 11 May 2026 */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            What changed in HEC attestation on 11 May 2026?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The Higher Education Commission launched the updated, fully online degree-attestation process on <strong>11 May 2026</strong>. The key change is not merely that the form moved online. Under the current model, the awarding university or higher-education institution participates electronically in verification, and HEC issues a downloadable <strong>e-Attestation Certificate</strong> after its final review. [
            <a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold hover:text-emerald-800">HEC procedure</a>;{" "}
            <a href="https://www.app.com.pk/national/hec-launches-fully-online-paperless-degree-attestation-system/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold hover:text-emerald-800">Associated Press of Pakistan, 11 May 2026</a>].
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Question</th>
                  <th className="py-3 px-4">New HEC DAS (2026)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Where do I apply?</td>
                  <td className="py-3 px-4">
                    <a href="https://eservices.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">eservices.hec.gov.pk</a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Must I visit an HEC office?</td>
                  <td className="py-3 px-4"><strong>No</strong>, for the new standard paperless DAS process</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Must I send my original degree to HEC?</td>
                  <td className="py-3 px-4"><strong>No</strong>, the new process uses electronic document submission and institutional verification</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Who confirms the degree?</td>
                  <td className="py-3 px-4">The awarding university/HEI provides verification to HEC</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">What does the applicant receive?</td>
                  <td className="py-3 px-4">Downloadable HEC <strong>e-Attestation Certificate</strong> when approved</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">What is the fee?</td>
                  <td className="py-3 px-4"><strong>PKR 3,000 per selected document</strong>, as currently published by HEC</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Is it the same as MOFA or an apostille?</td>
                  <td className="py-3 px-4"><strong>No.</strong> Foreign-use authentication is a separate question</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-sm leading-relaxed">
            <strong>Avoid outdated instructions:</strong> If a third-party article tells you that every applicant must book an HEC walk-in appointment, send original certificates to a representative, or buy an agent&apos;s mandatory service, verify that claim against the <strong>new</strong> HEC system page first.
          </div>
        </section>

        {/* Section 2: Step-by-Step Instructions */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How to apply for HEC degree attestation online: step by step
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The sequence below follows HEC&apos;s published new DAS instructions. Minor dashboard labels can change as the portal is updated.
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">1</span>
                Step 1: Register or sign in at the official portal
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Open <a href="https://eservices.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">https://eservices.hec.gov.pk</a>. Create an account if you are a first-time user; otherwise sign in. Choose <strong>Degree Attestation</strong> from the dashboard menu.
              </p>
              <p className="text-xs text-slate-500">
                Use your own email address and phone number. Do not share your password or one-time passcode with a third party. HEC specifically warns applicants about fraudulent portals and people pretending to offer official attestation services. [<a href="https://www.hec.gov.pk/english/HECAnnouncements/Pages/Scam.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">HEC scam alert</a>].
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">2</span>
                Step 2: Check personal information against your documents
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enter your name, father&apos;s name, birth date and other personal details accurately. HEC checks the consistency of the application against CNIC/NADRA information and academic documents. A mismatch can prevent the process from progressing.
              </p>
              <ul className="text-xs text-slate-600 space-y-1 list-disc pl-5">
                <li>Name and father&apos;s name on CNIC, degree and transcript.</li>
                <li>Date of birth, where stated.</li>
                <li>University, campus/affiliated college and degree title.</li>
                <li>Registration, roll or student number.</li>
                <li>Study dates/session and program details.</li>
              </ul>
              <p className="text-xs text-slate-500 italic">
                Do not change the spelling on your application simply to match a future Arabic transliteration. Any actual discrepancy in a source document should be addressed with the issuing authority where required.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">3</span>
                Step 3: Enter your degree details
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select the correct qualification level, degree, awarding university/HEI, campus and academic session. HEC warns that similar degree titles may appear as separate options, so select the entry that matches your qualification.
              </p>
              <p className="text-xs text-slate-500">
                Only request attestation of documents you genuinely need. Select the corresponding degree program before choosing its document types.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">4</span>
                Step 4: Choose the documents for attestation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                HEC&apos;s current online system permits selection of: <strong>1. Degree</strong>, <strong>2. Transcript</strong> (including result card/detailed marks documentation where applicable), <strong>3. Provisional Certificate</strong> (where issued by university&apos;s examination office), and <strong>4. HEC Equivalence Letter</strong>.
              </p>
              <p className="text-xs text-slate-500">
                HEC states that <strong>attestation of photocopies is no longer offered</strong> under the new procedure. It also permits qualifying complete or incomplete transcripts, subject to its specific conditions. [<a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">HEC official guidance</a>].
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">5</span>
                Step 5: Upload clear scans
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upload readable scanned copies of the <strong>front and back of your CNIC</strong> and the academic records selected for attestation. Use the <strong>Other Documents</strong> area for any additional material relevant to your case, such as a professional registration credential if HEC asks for it. Follow the portal&apos;s accepted file type/size requirements. Keep scans straight, complete and legible.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">6</span>
                Step 6: Review the undertaking and fee selection
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Check every selected document and the calculated total before agreeing to the applicant undertaking. HEC states that fees caused by incorrect document selection are <strong>not refundable, adjustable or transferable</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">7</span>
                Step 7: Pay through 1-Link / 1-Bill and verify the payment
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Click <strong>Proceed for Payment</strong> to generate the Consumer Number. Pay through a supported online banking/payment channel, then return to your HEC account and click <strong>Verify Payment</strong>.
              </p>
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-950 text-xs">
                <strong>Crucial:</strong> Making a payment alone does not necessarily mean your application has been submitted. HEC says the application is submitted automatically <strong>after the payment is successfully verified</strong>. Check that your dashboard shows the correct status. [<a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">HEC payment instructions</a>].
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">8</span>
                Step 8: Track scrutiny and university verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                HEC checks your personal information, uploaded records, degree program and institution. If something is missing, the portal can send the application back with a revision request. Open <strong>Task Assigned to Me</strong>, read the remarks, correct the deficiency, and resubmit. A complete application then goes to your university/HEI for confirmation against its records.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-6 w-6 rounded-full bg-emerald-100 text-emerald-800 text-xs items-center justify-center font-bold">9</span>
                Step 9: Download the e-Attestation Certificate
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                After university verification and HEC&apos;s final review, an approved applicant receives an issuance notification by email/SMS and can <strong>download the e-Attestation Certificate from the HEC account</strong>. Retain the original digital file; do not modify an issued certificate or fabricate its details. [<a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">HEC certificate issuance</a>].
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Fee in 2026 */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            HEC attestation fee in 2026
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>The current official HEC fee is PKR 3,000 for each document requested for attestation.</strong> This is a government charge, not a translation fee or an LISAN.PK service fee.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Documents requested</th>
                  <th className="py-3 px-4 text-right">HEC fee at current published rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">One degree</td>
                  <td className="py-3 px-4 text-right font-semibold">PKR 3,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">One transcript</td>
                  <td className="py-3 px-4 text-right font-semibold">PKR 3,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Degree + transcript</td>
                  <td className="py-3 px-4 text-right font-semibold">PKR 6,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Degree + transcript + eligible provisional certificate</td>
                  <td className="py-3 px-4 text-right font-semibold">PKR 9,000</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">One HEC equivalence letter</td>
                  <td className="py-3 px-4 text-right font-semibold">PKR 3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            *Examples assume one chargeable document per selected category. Your portal&apos;s generated total is controlling. Extra services, translations, MOFA/Apostille or destination-country processes are <strong>not</strong> included. Source: <a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">HEC&apos;s current attestation instructions</a>, reviewed 5 November 2026.
          </p>
        </section>

        {/* Section 4: Documents Required */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Documents required for HEC online attestation
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Prepare this checklist before opening the application:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Item</th>
                  <th className="py-3 px-4">When needed</th>
                  <th className="py-3 px-4">Practical check</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">CNIC scans — both sides</td>
                  <td className="py-3 px-4">Standard applicant identification</td>
                  <td className="py-3 px-4">Name details and scans must be readable</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">University degree</td>
                  <td className="py-3 px-4">If requesting degree attestation</td>
                  <td className="py-3 px-4">Include entire document and identifying details</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">University transcript / marks record</td>
                  <td className="py-3 px-4">If requesting transcript attestation</td>
                  <td className="py-3 px-4">Include the correct academic record</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Provisional certificate</td>
                  <td className="py-3 px-4">Only if requesting that category</td>
                  <td className="py-3 px-4">Must meet HEC&apos;s issuer requirements</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">HEC equivalence letter</td>
                  <td className="py-3 px-4">If attesting an HEC-issued equivalence</td>
                  <td className="py-3 px-4">Do not mistake it for direct attestation of a foreign degree</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Professional council registration</td>
                  <td className="py-3 px-4">Where required, e.g., medical or nursing</td>
                  <td className="py-3 px-4">Follow HEC&apos;s case-specific instruction</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Additional clarification/record</td>
                  <td className="py-3 px-4">Only if HEC requests it</td>
                  <td className="py-3 px-4">Use the portal&apos;s task/revision workflow</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm leading-relaxed">
            <strong>Foreign degrees:</strong> HEC explicitly states that it does <strong>not</strong> attest degrees awarded by foreign universities as ordinary Pakistani university degrees. It may issue an equivalence letter for eligible foreign qualifications, and its own equivalence letter can be attested through the current system. [<a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Source</a>].
          </div>
        </section>

        {/* Section 5: Timeline */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How long does HEC degree attestation take?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>There is no safe, universally guaranteed completion time.</strong> The online application is available around the clock, but actual completion depends on HEC scrutiny, the issuing institution&apos;s response and whether revisions are required. An applicant may be delayed by incorrect campus selection, name mismatches or unclear scans.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Track your case inside <strong>HEC e-Services</strong> instead of trusting a third-party claim of “guaranteed same-day HEC attestation.” If an employer or university has a deadline, submit early and confirm whether it accepts a pending status or requires the issued certificate.
          </p>
        </section>

        {/* Section 6: Verification */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How to verify an HEC e-Attestation Certificate
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>Check authenticity through HEC, not a random verification website.</strong> The new certificate is issued through the applicant&apos;s official HEC account after institutional verification. A receiving organisation should follow the official verification method or direct contact route that HEC makes available for that certificate and institution.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-sm sm:text-base">
            <li>Request the <strong>unmodified HEC-issued certificate file</strong>, not a cropped screenshot.</li>
            <li>Compare the degree holder&apos;s name, degree title and other details with the underlying academic record.</li>
            <li>Use only an official HEC-linked verification method shown on the certificate or advised by HEC; do not assume any QR code or third-party website is a valid universal verifier.</li>
            <li>If the receiving authority cannot validate the record, contact HEC support through <a href="https://onlinehelp.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">onlinehelp.hec.gov.pk</a> or the official HEC website.</li>
          </ol>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm">
            <strong>Do not upload another person&apos;s degree/CNIC to an unknown verification tool.</strong> HEC has published a specific warning about impersonation and phishing. [<a href="https://www.hec.gov.pk/english/HECAnnouncements/Pages/Scam.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">HEC official safety alert</a>].
          </div>
        </section>

        {/* Section 7: Older HEC stamps */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Are older HEC stamps and previously attested degrees still valid?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Do <strong>not</strong> assume an older, genuine HEC attestation became invalid merely because the new paperless system launched. Equally, do not assume that every foreign recipient will accept an old stamp indefinitely. Acceptance depends on the document, the receiving authority, and any request for an updated verification format.
          </p>
          <p className="text-slate-700 leading-relaxed">
            The current HEC overview describes the new method but <strong>does not establish a blanket cancellation of all older genuine attestations</strong>. If you already have an HEC-attested degree, ask your destination institution whether it needs a new e-Attestation Certificate before paying again.
          </p>
        </section>

        {/* Section 8: Saudi Arabia Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            HEC attestation for Saudi Arabia: what comes next?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>For a Pakistani university degree, HEC is the Pakistani higher-education authentication step—not automatically the end of the Saudi document process.</strong> Check the exact university, employer or visa authority&apos;s written requirement before spending money on an apostille or Arabic translation.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-emerald-800">Practical Sequence</h3>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700 text-sm">
              <li>Obtain the relevant <strong>HEC e-Attestation Certificate</strong> for your Pakistani degree/transcript.</li>
              <li>Ask the Saudi receiving body whether it needs <strong>Pakistan MOFA Apostille</strong> or a different authentication procedure for that document and use case.</li>
              <li>If Arabic is specifically required, obtain an accurate <strong>English-to-Arabic translation</strong> covering the requested academic content and any relevant certificates or annotations.</li>
              <li>Ask whether the receiving authority expects certification or authentication of the <strong>translation itself</strong>, rather than only the original academic record.</li>
            </ol>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Saudi Arabia is listed by Pakistan&apos;s MOFA as accepting apostilles for eligible documents, but receiving authorities may impose document-specific conditions. See our <Link href="/blog/saudi-embassy-attested-document-translation-process-pakistan" className="text-emerald-700 underline font-semibold">Saudi Embassy Attestation vs Apostille guide</Link> and <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Apostille Pakistan guide</Link>.
          </p>
          <p className="text-xs text-slate-500">
            <strong>Do all Saudi scholarship applications require HEC attestation and Arabic translation?</strong> No universal rule should be inferred. Requirements can differ between the initial application, admission, visa and enrollment stages. Use the destination university&apos;s published checklist as the primary decision source.
          </p>
        </section>

        {/* Section 9: UAE Next Steps */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            HEC attestation for the UAE: what comes next?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>HEC attestation and UAE recognition are separate steps.</strong> The UAE Ministry of Foreign Affairs&apos; <a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official Islamabad guidance</a> describes a UAE digital attestation service for Pakistani-issued documents. It requires prior authentication by the <strong>Pakistan Ministry of Foreign Affairs</strong> for Pakistan-issued documents, subject to specified exceptions, and may involve collection and return of the physical originals even though the resulting UAE attestation is digital.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
            <li>Determine whether your UAE employer, university, licensing body or immigration authority needs the <strong>degree, transcript, translation or more than one</strong>.</li>
            <li>Obtain HEC authentication where applicable for the Pakistani academic record.</li>
            <li>Follow the current <strong>Pakistan MOFA</strong> authentication route requested for the document.</li>
            <li>Review the UAE mission/MOFA&apos;s own portal and rules for the remaining process.</li>
            <li>Do not assume that a Saudi document checklist also works for the UAE.</li>
          </ul>
          <div className="p-3 rounded-lg bg-slate-100 text-slate-800 text-xs">
            <strong>Important distinction:</strong> “HEC is paperless” does <strong>not</strong> mean that every later process in another country is paperless or waives original-document handling.
          </div>
        </section>

        {/* Section 10: Translation Timing */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            When should you translate your degree into Arabic—before or after HEC?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The correct order depends on what must appear on the translated copy and what the recipient accepts.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Situation</th>
                  <th className="py-3 px-4">Recommended decision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">The Saudi institution accepts the existing English degree</td>
                  <td className="py-3 px-4">Do <strong>not</strong> buy an Arabic translation unless another step requires it</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">The destination requires Arabic translation of the degree itself</td>
                  <td className="py-3 px-4">Confirm the requested format and arrange English → Arabic translation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">The receiving body needs the HEC certificate translated too</td>
                  <td className="py-3 px-4">First obtain the <strong>final HEC e-Attestation Certificate</strong>, then provide it for translation</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">A foreign authority requires apostille/authentication of the translation</td>
                  <td className="py-3 px-4">Ask that authority which document and translation-certification route it accepts</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">You have not confirmed the receiving authority&apos;s rule</td>
                  <td className="py-3 px-4">Request written clarification before paying for extra stamps or translation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            A translation is <strong>not</strong> itself HEC attestation, MOFA authentication or an apostille. These are different services with different legal functions. For academic document translation, see <Link href="/services/translation/academic-degree-transcript" className="text-emerald-700 underline font-semibold">Degree & Transcript Translation</Link>. For English source documents, see <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic Translation</Link>.
          </p>
        </section>

        {/* Section 11: Common Errors */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Common HEC portal errors and what to do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">“Saved” or “pending payment” after paying</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Return to the account and check <strong>Verify Payment</strong>. HEC says fee verification is necessary for application submission. Keep a payment reference and use HEC support if the portal still does not update.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">“Revision Requested” or “Task Assigned to Me”</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Read the specific deficiency and resubmit the corrected information or requested supporting file. A revision is not necessarily a final rejection.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Wrong university campus or degree title</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recheck the university and program entry carefully. Similar program names and affiliated colleges can appear in the system.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Mismatch between degree and CNIC</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Do not conceal the difference or ask a translator to change the source record. Follow the issuing university&apos;s and HEC&apos;s case-specific correction/verification instructions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Degree issued abroad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check HEC&apos;s foreign qualification <strong>equivalence</strong> process instead of selecting an ordinary Pakistani-degree attestation procedure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Portal asking for an unrecognised payment or OTP</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stop and verify the domain. The genuine site is <strong>eservices.hec.gov.pk</strong>. HEC does not ask applicants to send OTPs to an alleged attestation agent. [<a href="https://www.hec.gov.pk/english/HECAnnouncements/Pages/Scam.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Official alert</a>].
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: Certificate Visual */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            What does an HEC e-Attestation Certificate look like?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            It is a <strong>digital certificate issued through HEC e-Services</strong> after approval. The exact layout, validation fields and security features must be taken from a genuine current certificate rather than inferred from an old stamped-degree photograph.
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm">
            <strong>Sample status:</strong> No approved, redacted e-Attestation Certificate sample was supplied for this LISAN.PK page. Do not publish a generated imitation of an HEC certificate. A real sample may be added later only with all personal and reference identifiers safely redacted and the holder&apos;s permission.
          </div>
        </section>

        {/* Section 13: FAQs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              HEC attestation FAQs (2026)
            </h2>
          </div>

          <div className="space-y-3">
            {guideFaqs.map((faq, idx) => (
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

        {/* Section 14: Translation Assistance CTA */}
        <section className="p-8 rounded-3xl bg-emerald-900 text-white space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Need certified Arabic translation after HEC attestation?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              If your university, employer or visa authority requests an Arabic version of your <strong>English-language degree, transcript or HEC certificate</strong>, LISAN.PK can assess the document set and provide a translation quotation. Send the document type, destination country, receiving authority&apos;s instructions and the required language—not your HEC password or OTP.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/translation-english-to-arabic">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all">
                Request English-to-Arabic Quote
              </Button>
            </Link>
            <Link href="/services/translation/academic-degree-transcript">
              <Button variant="outline" className="border-emerald-700 bg-emerald-800/40 hover:bg-emerald-800 text-white font-semibold h-12 px-6 rounded-xl">
                Academic Document Translation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="text-emerald-100 hover:text-white hover:bg-emerald-800/60 font-semibold h-12 px-6 rounded-xl">
                Contact LISAN.PK
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/80 border-t border-emerald-800/60 pt-4">
            <strong>Independent-service disclosure:</strong> LISAN.PK is a translation and document-guidance business. It is <strong>not HEC</strong>, does not issue HEC e-Attestation Certificates and does not claim governmental affiliation or guaranteed foreign acceptance.
          </p>
        </section>

        {/* Section 15: Sources */}
        <footer className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Official sources and verification notes
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
            <li>
              <strong>Higher Education Commission (HEC)</strong> —{" "}
              <a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Current fully online degree attestation process, documents and PKR 3,000 fee
              </a>. Primary source; checked 5 November 2026.
            </li>
            <li>
              <strong>HEC</strong> —{" "}
              <a href="https://eservices.hec.gov.pk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Official e-Services portal
              </a>. Applications and payment occur here.
            </li>
            <li>
              <strong>HEC</strong> —{" "}
              <a href="https://www.hec.gov.pk/english/HECAnnouncements/Pages/Scam.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Public warning about fake attestation websites, calls and agents
              </a>.
            </li>
            <li>
              <strong>Associated Press of Pakistan</strong>, 11 May 2026 —{" "}
              <a href="https://www.app.com.pk/national/hec-launches-fully-online-paperless-degree-attestation-system/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Launch timing of the paperless attestation system
              </a>.
            </li>
            <li>
              <strong>Pakistan Ministry of Foreign Affairs</strong> —{" "}
              <a href="https://apostille.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Apostille processing guidance
              </a>.
            </li>
            <li>
              <strong>UAE Ministry of Foreign Affairs, Embassy in Islamabad</strong> —{" "}
              <a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Attestation requirements for Pakistan-issued documents
              </a>.
            </li>
          </ol>
          <p className="text-xs text-slate-400 italic pt-2">
            Editorial rule: If the HEC portal fee, verification method, or destination-country requirements change, update this guide and its date_modified field. Do not copy older walk-in/courier procedures into the new DAS steps.
          </p>
        </footer>
      </article>
    </main>
  )
}
