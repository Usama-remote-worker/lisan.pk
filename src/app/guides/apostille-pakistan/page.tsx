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
  ChevronRight,
  ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Apostille in Pakistan (2026): MOFA Registration, Fees, Documents & Verification",
  description: "How to get an apostille in Pakistan in 2026: MOFA online registration, appointments, current fees, documents, approved couriers, QR verification and translation order.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/apostille-pakistan",
  },
  openGraph: {
    title: "Apostille in Pakistan (2026): MOFA Registration, Fees, Documents & Verification",
    description: "How to get an apostille in Pakistan in 2026: MOFA online registration, appointments, current fees, documents, approved couriers, QR verification and translation order.",
    url: "https://www.lisan.pk/guides/apostille-pakistan",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
  }
}

const guideFaqs = [
  {
    "q": "How do I get an apostille in Pakistan in 2026?",
    "a": "Check the destination and eligible document, register through MOFA's official online service, upload the required records, await officer review and follow the appointment, payment and document-delivery instructions for your approved application. Verify the certificate after issuance."
  },
  {
    "q": "Is apostille online registration compulsory in Pakistan?",
    "a": "Yes. MOFA announced mandatory advance online registration from **27 July 2026**. Use an official MOFA portal linked from its current consular instructions."
  },
  {
    "q": "Can I get an apostille without an appointment?",
    "a": "Do not assume you can. MOFA's current application procedure describes an appointment after approval, while its newer digital-attestation notice describes additional remote services. Follow the instructions issued for your application."
  },
  {
    "q": "What is the apostille fee in Pakistan?",
    "a": "The current published MOFA schedule lists **PKR 3,000** for personal, educational and experience documents; **PKR 4,500** for legal documents; and **PKR 12,000** for commercial documents, each per document. Recheck the official fee page and final portal challan."
  },
  {
    "q": "Can an apostille be obtained for a Nikah Nama?",
    "a": "MOFA lists Nikah Nama and marriage registration documents, subject to its published requirements. The required supporting documents depend on the marriage record and whether a foreign spouse is involved."
  },
  {
    "q": "Does a Pakistani degree need HEC verification before MOFA apostille?",
    "a": "University credentials can require prior HEC authentication; school and board credentials may require IBCC authentication. Follow the correct document-specific MOFA checklist and the current HEC/IBCC procedure."
  },
  {
    "q": "Which couriers are authorised for apostille services?",
    "a": "MOFA currently lists **TCS, Gerry's International, Excellent Courier Services, Leopards Courier Service and M&P Express Logistics**. Confirm that a particular branch is accepting your document type and that its route complies with MOFA's registration and attendance instructions."
  },
  {
    "q": "Can I verify a Pakistani apostille online?",
    "a": "Yes. Use the official MOFA apostille verifier (https://apostille.mofa.gov.pk/verify-attestation) with the apostille number and date, or check the QR code against the genuine government site."
  },
  {
    "q": "Should I translate my document before or after apostille?",
    "a": "It depends on the recipient's instructions. When it requests an **apostilled original plus a certified translation**, apostilling first may help ensure the translation includes the endorsement. If it requests authentication of a **notarised translation**, confirm that exact process with MOFA and the recipient before proceeding."
  },
  {
    "q": "Does MOFA apostille also certify the translation?",
    "a": "No. The apostille authenticates the origin of the particular eligible public document or official act. It does not independently certify the linguistic accuracy of a translation."
  },
  {
    "q": "Does an apostille guarantee embassy or university acceptance?",
    "a": "No. Eligibility, document content, translation format, completeness and destination-specific rules remain separate questions."
  },
  {
    "q": "Is an apostille the same as notarisation?",
    "a": "No. A notary performs a notarial act; an apostille issued by a competent authority authenticates the origin of an eligible public act for use abroad where the Convention applies."
  },
  {
    "q": "Can a courier process a power of attorney or affidavit apostille?",
    "a": "Do not assume so. MOFA's consular instructions describe exceptions requiring personal attendance for certain powers of attorney and affidavits. Check the latest MOFA rules for your exact instrument."
  },
  {
    "q": "Does Germany automatically accept a Pakistani apostille?",
    "a": "No such assumption is safe. Germany is among the countries whose objections to Pakistan's accession are recorded by the HCCH. Check the current legal position and the German authority's requirements before selecting a legalisation route."
  },
  {
    "q": "Are the government apostille fee and certified-translation fee the same?",
    "a": "No. MOFA's fee is a government authentication charge. Certified translation is a separate service, quoted according to language, document length and the requested format."
  },
  {
    "q": "Can LISAN.PK issue or verify an apostille itself?",
    "a": "No. **Only MOFA's competent officials issue Pakistani apostilles**, and official authentication should be checked through MOFA. LISAN.PK can discuss document-language and certified-translation requirements; it is not a government issuing authority."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/guides/apostille-pakistan/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.lisan.pk/guides" },
        { "@type": "ListItem", "position": 3, "name": "Apostille in Pakistan (2026)", "item": "https://www.lisan.pk/guides/apostille-pakistan" }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.lisan.pk/guides/apostille-pakistan/#article",
      "headline": "Apostille in Pakistan (2026): MOFA Registration, Required Documents, Fees, Couriers and Verification",
      "description": "How to get an apostille in Pakistan in 2026: MOFA online registration, appointments, current fees, documents, approved couriers, QR verification and translation order.",
      "datePublished": "2026-11-05T00:00:00Z",
      "dateModified": "2026-11-05T00:00:00Z",
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
        "@id": "https://www.lisan.pk/guides/apostille-pakistan"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/guides/apostille-pakistan/#faq",
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

export default function ApostillePakistanGuidePage() {
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
            <Link href="/guides" className="hover:text-emerald-400 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-200">Apostille in Pakistan</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            Informational Guide • B:T02 Reference
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white mb-6 leading-tight">
            Apostille in Pakistan (2026): MOFA Registration, Required Documents, Fees, Couriers and Verification
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official Reference • MOFA &amp; HCCH Sources</span>
            </div>
            <span className="text-slate-600">•</span>
            <div>Published: <span className="text-white font-medium">5 November 2026</span></div>
            <span className="text-slate-600">•</span>
            <div>Last Verified: <span className="text-white font-medium">3 November 2026</span></div>
          </div>
        </div>
      </section>

      {/* Main Guide Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <article className="prose prose-slate max-w-none">
          <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>Quick answer:</strong> To obtain an apostille in Pakistan, first check whether the destination country can accept a <strong>Pakistani apostille</strong>, then register online with Pakistan&apos;s Ministry of Foreign Affairs (MOFA), submit the required documents for review and follow the approved appointment or submission instructions. <strong>Online registration has been mandatory since 27 July 2026.</strong> An apostille authenticates the <em>origin</em> of an eligible public document; it does <strong>not</strong> translate the document or guarantee that the receiving organisation will accept it. <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Sources: MOFA consular notice</a> · <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Hague Conference (HCCH) — Apostille Convention</a>.</p>
</div>

<div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-4 my-5 text-xs text-slate-600 leading-relaxed italic not-prose">
  <p><strong>Last fact-checked against government and HCCH sources:</strong> 3 November 2026. Government portal steps, fees and appointment availability may change. <strong>LISAN.PK is a private document-translation service, not MOFA or an apostille issuing authority.</strong></p>
</div>

<h2 id="what-is-an-apostille-and-when-do-you-need-one-in-pakistan" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">What is an apostille, and when do you need one in Pakistan?</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">An <strong>apostille</strong> is a certificate issued by an authorised public authority to authenticate the origin of an eligible public document for use abroad under the <strong>Hague Apostille Convention of 5 October 1961</strong>. It verifies matters such as an official&apos;s signature, the capacity in which that person acted and, where applicable, the document&apos;s official seal or stamp. It does <strong>not</strong> prove that every statement inside the document is true. <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH Convention text</a>.</p>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">The Convention entered into force for <strong>Pakistan on 9 March 2023</strong>. Pakistan&apos;s competent authorities include designated officials at MOFA headquarters in Islamabad and Foreign Affairs Liaison Offices in Lahore, Karachi, Peshawar, Quetta and Gujrat. <a href="https://www.hcch.net/en/news-archive/details?varevent=903" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH accession notice</a> · <a href="https://www.hcch.net/en/states/authorities/details3/?aid=1179" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH list of Pakistani competent authorities</a>.</p>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">You might need an apostille when a foreign university, immigration office, employer, marriage registrar or other institution asks for authentication of a Pakistani public document. However, <strong>the receiving country and the particular authority both matter</strong>. Do not buy an apostille merely because a country appears on a generic list: the Convention may not operate between Pakistan and that country because of a formal objection, or the receiving institution may require a different process. Check the <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH status and notifications</a> and <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA destination directory</a>, then verify the receiving authority&apos;s instructions.</p>

<h2 id="how-to-apply-for-an-apostille-in-pakistan-online-step-by-step" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">How to apply for an apostille in Pakistan online: step by step</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">MOFA&apos;s July 2026 notice says <strong>applications submitted without prior online registration will not be accepted</strong> for apostille processing. The government&apos;s current application guidance also sets out document review, appointment booking and payment before submission. The exact completion method may depend on the digital service available to your application. <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA consular notice</a> · <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA application procedure</a>.</p>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Step</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">What the applicant does</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">What to check</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>1. Check your destination</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Confirm that an apostille is the appropriate route for your particular document and destination.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Check any objection affecting the Convention&apos;s application to Pakistan; also check the receiving office&apos;s own instructions.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>2. Create your MOFA account</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Visit the <a href="https://attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA digital attestation system</a> and follow its applicant-registration link. MOFA&apos;s apostille-specific notice also references <a href="https://apostille.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">apostille.mofa.gov.pk</a>.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Use official <strong>`.mofa.gov.pk`</strong> pages and follow the currently displayed route rather than making duplicate submissions.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>3. Verify your account and identity</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Complete your profile, email verification and requested identification details.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">MOFA&apos;s apostille notice specifically asks applicants to attach <strong>both sides of their CNIC</strong>.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>4. Create the application</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Choose <strong>Apostille</strong>, select the document category and upload the required documents.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Upload legible, complete documents; include prior HEC/IBCC/issuing-authority authentication where required.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>5. Submit for review</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Review names, document categories, attachments and destination details, then submit.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Submission does <strong>not</strong> mean MOFA has approved the document.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>6. Await MOFA/FALO approval</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Check your email and portal for a decision or correction request.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">The current public workflow says appointment booking comes <strong>after officer approval</strong>.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>7. Book appointment and pay</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Where the portal instructs, choose the available FALO appointment; obtain your payment challan and pay through the approved mechanism.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">MOFA&apos;s published workflow says the challan appears <strong>after appointment booking</strong>.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>8. Complete the required handover</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Follow the instructions in your application for the booked visit, courier route, or digital completion if offered.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Never assume that a courier can replace a required personal appearance for a power of attorney or affidavit.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>9. Receive and verify</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Obtain the apostilled document or e-Certificate, then check it using MOFA&apos;s official verifier.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Keep the certificate number and date; compare the verification result with your document.</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>Important 2026 update:</strong> On <strong>12 October 2026</strong>, MOFA announced a Digital Attestation System that provides e-Certificates by email and aims to reduce physical visits. At the same time, its published <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">application procedure</a> still describes an approval → appointment → payment → office-submission sequence. <strong>Follow the actual instructions for your case rather than assuming every apostille can be completed entirely from home.</strong> <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA digital attestation notice</a>.</p>
</div>

<h3 id="is-apostille-mofa-gov-pk-registration-mandatory" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Is apostille.mofa.gov.pk registration mandatory?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Yes, MOFA announced mandatory advance online registration for apostille requests from 27 July 2026.</strong> Its notice names <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">apostille.mofa.gov.pk</code>, while MOFA also provides a newer digital attestation interface at <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-xs">attestation.mofa.gov.pk</code> with an applicant portal. Because official pages can display different generations of the process, start from the current <a href="https://attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA service home page</a> or <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">consular notice</a> and follow the live instructions. Do not create duplicate applications just to use both interfaces.</p>

<h3 id="can-i-apply-for-an-apostille-without-visiting-mofa" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Can I apply for an apostille without visiting MOFA?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Do not assume so.</strong> The October digital notice describes remote electronic processing and e-Certificates for eligible cases, but MOFA&apos;s public procedure still directs applicants to attend the booked office in its standard flow. Physical appearance may also be specifically required for some legal instruments. If your approved application includes an appointment, comply with it or obtain written guidance from MOFA before using a courier. <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA consular notice</a> · <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Application procedure</a>.</p>

<h2 id="documents-required-for-an-apostille-in-pakistan" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Documents required for an apostille in Pakistan</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">There is <strong>no single universal checklist</strong> for every document. The Ministry first needs an eligible authentic record, and some records require verification by the original issuing authority before MOFA can process them. Always check the <a href="https://attestation.mofa.gov.pk/apostille-checklist" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">official MOFA apostille checklist</a> and <a href="https://apostille.mofa.gov.pk/sops" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">detailed attestation SOPs</a>.</p>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Document type</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Common prerequisite or supporting record</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Important caution</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>University degree or transcript</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Applicable HEC verification or e-attestation, where required for the specific educational document.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Confirm the latest HEC procedure before presenting the record to MOFA.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Matric / intermediate certificate</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Applicable IBCC authentication of board-issued records.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">School, board and university records follow different routes.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Nikah Nama / Marriage Registration Certificate (MRC)</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Original signed/stamped Nikah Nama and MRC, plus relevant CNIC/FRC or other evidence required by MOFA&apos;s SOP.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">A marriage with a foreign national may require the foreign spouse&apos;s passport, Pakistani visa and entry details.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Birth / death certificate and other civil records</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Authentic civil record issued by the relevant authority, with the requested identity evidence.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">The correct issuer and full readable record are essential.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Police clearance / character certificate</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Valid certificate from the proper police authority and any prescribed authentication.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">The receiving organisation may impose its own recency requirements.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Power of attorney / affidavit</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Appropriate original legal instrument, identity evidence, notarial or other authentication, and any required attendance.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">MOFA&apos;s public instructions restrict routine courier processing for some of these documents.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Commercial document</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Relevant company registration, tax and/or Chamber of Commerce verification, depending on the document.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Commercial documents have a different fee category and prerequisites.</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>Before uploading:</strong> Check spellings against passports/CNICs; ensure seals, signatures and both sides of the record are readable; capture every page; and confirm that an apostille is appropriate for the <strong>actual recipient</strong>, not just the country.</p>
</div>

<h3 id="apostille-for-nikah-nama-and-nadra-marriage-registration-certificate" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Apostille for Nikah Nama and NADRA Marriage Registration Certificate</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">MOFA&apos;s published SOP asks, for a normal Pakistani marriage, for the <strong>original Nikah Nama signed and stamped by the Nikah Registrar</strong>, the <strong>Marriage Registration Certificate (MRC)</strong> and specified identity or family-registration evidence. If a foreign national is involved, the SOP lists additional immigration and passport evidence. Because these requirements are document- and case-specific, read the relevant <a href="https://apostille.mofa.gov.pk/sops" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA marriage-document SOP</a> before submitting. <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Detailed guide to Nikah Nama and marriage certificate translations</Link>.</p>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Do not assume the Nikah Nama and MRC are interchangeable.</strong> The Urdu marriage contract and the computerised marriage registration record can contain different levels of detail. Ask the overseas receiver which document, original and translated versions it wants.</p>

<h3 id="apostille-for-degree-and-transcript-documents" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Apostille for degree and transcript documents</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">For a university degree, the usual preparation question is whether the record needs HEC authentication first. For Matric or Intermediate documents, check the applicable IBCC procedure instead. The apostille is a separate <strong>MOFA step</strong>; it is not a replacement for every preceding educational verification. See the <a href="https://apostille.mofa.gov.pk/list-of-public-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA educational-document categories</a> and relevant official HEC/IBCC guidance. A dedicated LISAN.PK HEC guide is scheduled separately; do not rely on an unpublished page.</p>

<h2 id="pakistan-apostille-fees-in-2026-official-mofa-charges" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Pakistan apostille fees in 2026: official MOFA charges</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>MOFA&apos;s currently published apostille fee schedule lists the following government fees per document.</strong> These are <strong>not LISAN.PK translation charges</strong> and do not include any separate courier or private service costs. Confirm the final amount in the government&apos;s generated challan before making payment. <a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA fees</a> · <a href="https://apostille.mofa.gov.pk/fee-structure" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA apostille fee structure</a>.</p>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Government apostille document category</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-right">Published fee (PKR / document)</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Personal documents</td>
        <td className="px-5 py-3.5 text-right font-semibold text-slate-900 leading-relaxed"><strong>3,000</strong></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Educational documents</td>
        <td className="px-5 py-3.5 text-right font-semibold text-slate-900 leading-relaxed"><strong>3,000</strong></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Experience certificates</td>
        <td className="px-5 py-3.5 text-right font-semibold text-slate-900 leading-relaxed"><strong>3,000</strong></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Legal documents</td>
        <td className="px-5 py-3.5 text-right font-semibold text-slate-900 leading-relaxed"><strong>4,500</strong></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Commercial documents</td>
        <td className="px-5 py-3.5 text-right font-semibold text-slate-900 leading-relaxed"><strong>12,000</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>How payment works:</strong> MOFA&apos;s current public application sequence is <strong>officer approval → appointment booking → fee challan → online payment</strong>. You should not pay an unverified private account or assume a screenshot from another applicant reflects your official charge. <a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA application procedure</a>.</p>
</div>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Separate costs:</strong> If your receiving authority also requires translation, there may be a separate <strong>certified-translation fee</strong>, and a courier may have its own handling charge. Request a document-specific quote from <Link href="/contact" className="text-emerald-700 hover:text-emerald-800 underline font-medium">LISAN.PK</Link> rather than treating a government apostille fee as a translation package.</p>

<h2 id="mofa-authorised-courier-companies-for-apostille-in-pakistan" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">MOFA-authorised courier companies for apostille in Pakistan</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">MOFA&apos;s current courier directory lists these five providers for document attestation enquiries:</p>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">MOFA-listed courier company</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Where to verify availability</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>TCS</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Official MOFA courier directory</a></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Gerry&apos;s International</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Official MOFA courier directory</a></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Excellent Courier Services (ECS)</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Official MOFA courier directory</a></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Leopards Courier Service</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Official MOFA courier directory</a></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>M&P Express Logistics</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Official MOFA courier directory</a></td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Courier listing does not mean every document can be mailed at any time.</strong> MOFA separately instructs applicants to attend the specified appointment where required, and its consular SOP notes restrictions for powers of attorney and affidavits. Ask the courier whether it currently handles <strong>your exact document type and apostille route</strong>, whether online pre-registration and an appointment are required, and how originals will be returned. Do not send irreplaceable originals before the process is confirmed. <a href="https://apostille.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA courier directory</a> · <a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA consular services</a>.</p>

<h3 id="mofa-offices-and-liaison-offices" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">MOFA offices and liaison offices</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Pakistan&apos;s designated MOFA apostille officials operate through <strong>Islamabad headquarters</strong> and liaison offices in <strong>Lahore, Karachi, Peshawar, Quetta and Gujrat</strong>. A city name does not guarantee walk-in service without appointment; use the location and procedure displayed in your approved MOFA case. <a href="https://www.hcch.net/en/states/authorities/details3/?aid=1179" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH official competent-authority listing</a>.</p>

<h2 id="how-to-verify-a-pakistani-apostille-by-qr-code-or-certificate-number" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">How to verify a Pakistani apostille by QR code or certificate number</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>A Pakistani apostille can be checked using MOFA&apos;s official verification service.</strong> Certificates may carry a QR code, and the MOFA verification form also accepts the <strong>apostille number and issuance date</strong>. An apostille that is genuine does not automatically validate the content of the underlying document or replace a requested translation. <a href="https://apostille.mofa.gov.pk/verify-attestation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA apostille verifier</a> · <a href="https://www.hcch.net/en/states/authorities/details3/?aid=1179" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH — Pakistan competent authority</a>.</p>

<ol className="list-decimal pl-5 space-y-2 my-4 text-slate-700 leading-relaxed">
  <li>Examine the certificate for the QR code, apostille number and date.</li>
  <li>Scan the QR code, checking that it leads to an authentic government domain rather than an unfamiliar commercial page.</li>
  <li>If needed, open the <a href="https://apostille.mofa.gov.pk/verify-attestation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">official apostille verification form</a> manually and enter the certificate number and date.</li>
  <li>Compare the returned status and identifying details with the certificate in your possession.</li>
  <li>If verification fails or details do not match, contact MOFA through the contact channel on its official verifier. <strong>Do not submit an altered certificate.</strong></li>
</ol>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">The newer <a href="https://attestation.mofa.gov.pk/verify-apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA digital verification interface</a> is another official entry point. For sensitive transactions, verify through the site directly instead of trusting a screenshot forwarded by a third party.</p>

<h2 id="apostille-vs-mofa-attestation-vs-notarisation-vs-certified-translation" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Apostille vs MOFA attestation vs notarisation vs certified translation</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">These are <strong>different legal and administrative functions</strong>. Buying one does not automatically satisfy a request for the others.</p>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Process</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">What it establishes or provides</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">What it does <strong>not</strong> do</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Certified translation</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">A translation accompanied by an accuracy statement or certification according to the receiving body&apos;s requirements.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">It does not authenticate the original issuing officer&apos;s signature.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Notarisation</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">A notarial act, such as witnessing a signature or certifying a document copy, within the notary&apos;s lawful authority.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">It does not make the translated text automatically acceptable to every foreign institution.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>MOFA General Attestation</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Authentication under the ordinary government attestation/legalisation pathway.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">It is not necessarily interchangeable with an apostille or a foreign embassy&apos;s further requirements.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>MOFA Apostille</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Authentication of the origin of an eligible public document under the Convention, when it applies between relevant states.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">It does not certify the document&apos;s contents or translate it.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Embassy legalisation</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">A separate diplomatic/consular formality where applicable to the destination and document.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">It is not automatically required after a valid apostille where the Convention applies.</td>
      </tr>
    </tbody>
  </table>
</div>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">See our <Link href="/guides/mofa-online-attestation" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA online attestation guide</Link> and <Link href="/services/attestation" className="text-emerald-700 hover:text-emerald-800 underline font-medium">document translation and attestation service</Link>. For the Convention&apos;s scope, see the <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH full text</a>.</p>

<h2 id="translate-before-or-after-an-apostille-the-correct-order-for-pakistani-documents" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Translate before or after an apostille? The correct order for Pakistani documents</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>There is no universal "translate first" or "apostille first" rule.</strong> The answer depends on <strong>what the destination authority wants apostilled</strong>: the original public document, an officially certified/notarised translation, or both. Some receivers simply want an apostilled original plus a separately certified translation; others specify a translation with an additional official certification step. Ask the receiving institution <strong>in writing</strong> before paying twice.</p>

<h3 id="translation-and-apostille-order-decision-table" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Translation and apostille order: decision table</h3>

<div className="overflow-x-auto my-6 rounded-2xl border border-slate-200/80 shadow-xs bg-white not-prose">
  <table className="min-w-full text-left text-sm divide-y divide-slate-200">
    <thead className="bg-slate-100/90 text-xs font-bold text-slate-800 uppercase tracking-wider">
      <tr>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Receiving authority&apos;s stated requirement</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Typical sequence to discuss with MOFA/receiver</th>
        <th scope="col" className="px-5 py-3.5 font-bold text-left">Why</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-100 bg-white">
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>"Apostilled original + certified translation"</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Check original&apos;s prerequisite authentication → <strong>apostille the original</strong> → translate the full document, <strong>including apostille wording if requested</strong> → submit both.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">The apostille authenticates the original&apos;s official signature/seal; translation is a separate service.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>"Certified or notarised translation must itself be authenticated"</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Arrange acceptable translation → obtain the prescribed notarial/official certification, if legally possible → ask the competent authority <strong>whether that specific notarial/official act can be apostilled</strong> → submit as instructed.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">A notarised certificate attached to a translation is a different object from the original document&apos;s apostille. <strong>Do not assume MOFA apostilles every private translator declaration.</strong></td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>"Original and translation both apostilled"</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Obtain written recipient instructions identifying the two certificates and eligible public acts → verify with MOFA → complete only the eligible routes.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Separate apostilles, if possible, authenticate separate official acts; they do not prove the translation&apos;s linguistic accuracy.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>"Translation must show the apostille stamp / QR / endorsements"</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Authenticate original first → translate original plus all relevant endorsements and apostille text → attach both versions.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Translating too early may omit later endorsements.</td>
      </tr>
      <tr className="hover:bg-slate-50/60 transition-colors">
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed"><strong>Non-Apostille destination or Convention objection</strong></td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">Follow the receiving authority&apos;s prescribed <strong>general attestation / legalisation</strong> and translation procedure.</td>
        <td className="px-5 py-3.5 text-slate-700 leading-relaxed">An apostille may be the wrong route even if the destination is a Convention member.</td>
      </tr>
    </tbody>
  </table>
</div>

<div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>Key distinction:</strong> Under the Hague Convention, an apostille verifies the <em>origin</em> of the public act to which it relates—not the factual or linguistic accuracy of the underlying content. When an apostille is placed on a <strong>notarial act attached to a translation</strong>, it authenticates that notarial act. Read the <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH Apostille Convention</a> and check the precise recipient requirement.</p>
</div>

<div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 my-5 text-slate-800 leading-relaxed shadow-xs not-prose">
  <p className="text-sm sm:text-base"><strong>A Pakistan-specific translation-format caution:</strong> MOFA&apos;s published attestation SOP states that the ministry attests documents in <strong>Urdu/English</strong>, and that translations intended for certain other languages should include <strong>English in one column on the same page alongside the target language</strong>. That is an MOFA processing condition reported in its SOP; it is <strong>not</strong> proof that every destination requires bilingual columns or that all private translations are eligible for MOFA apostilling. Check the <a href="https://apostille.mofa.gov.pk/sops" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">current MOFA SOP</a> and the receiving institution&apos;s separate requirements.</p>
</div>

<h3 id="example-pakistani-marriage-document-for-an-overseas-family-application" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Example: Pakistani marriage document for an overseas family application</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Suppose an overseas authority asks for an <strong>apostilled Pakistani marriage record plus English translation</strong>. First confirm whether it specifically requires the Urdu Nikah Nama, the MRC, or both. Gather the records and MOFA supporting evidence; obtain the apostille for the specified eligible original. Then prepare a certified English translation covering the information and any endorsement the receiving authority needs. <strong>Do not assume that the translation itself needs another apostille unless the receiving authority asks for one.</strong> <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Nikah Nama and MRC translation guide</Link>.</p>

<h3 id="example-pakistani-degree-for-study-or-employment-abroad" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">Example: Pakistani degree for study or employment abroad</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">If an institution requests <strong>an apostilled degree and an English translation</strong>, confirm whether HEC authentication is required first; complete the appropriate authentication and MOFA steps, and translate the complete record in the form the institution requests. If the institution specifically asks for a <strong>notarised translated copy</strong>, request the exact format rather than guessing. Never state that one country&apos;s degree procedure applies to all universities, employers or visa categories.</p>

<h2 id="which-countries-accept-apostilles-from-pakistan" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Which countries accept apostilles from Pakistan?</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">A country&apos;s membership in the Apostille Convention <strong>does not by itself prove that the Convention operates between that country and Pakistan</strong>. Several states filed formal objections to Pakistan&apos;s accession. The HCCH notification record includes <strong>Germany, the Netherlands, Denmark, Finland, Austria, Poland, the Czech Republic and Greece</strong>. An objection can affect whether a Pakistani apostille replaces diplomatic legalisation in that bilateral relationship. <a href="https://www.hcch.net/en/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH objections and notifications</a>.</p>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">For <strong>your destination today</strong>, check three sources in this order: the <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH Convention status/objections</a>, the <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA country directory</a>, and the receiving embassy, university, employer or immigration authority. A simple A–Z website list that ignores formal objections can be misleading. LISAN.PK&apos;s detailed <strong>country-by-country apostille acceptance guide</strong> is scheduled separately; this article deliberately does not claim every Hague country accepts Pakistani apostilles.</p>

<h2 id="common-apostille-mistakes-that-cause-avoidable-delays" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Common apostille mistakes that cause avoidable delays</h2>

<ul className="list-disc pl-5 space-y-2 my-4 text-slate-700 leading-relaxed">
  <li><strong>Using general attestation when an apostille was required</strong>, or requesting an apostille where the Convention does not apply between Pakistan and the destination.</li>
  <li><strong>Skipping MOFA online registration</strong>, which has been mandatory for apostille applications since 27 July 2026.</li>
  <li><strong>Assuming every online application is fully remote</strong>, despite case-specific appointment and original-document requirements.</li>
  <li><strong>Uploading a degree without required prior HEC authentication</strong> or a school certificate without applicable IBCC authentication.</li>
  <li><strong>Sending only an MRC when the recipient wants the full Urdu Nikah Nama</strong>, or omitting MOFA&apos;s extra supporting evidence.</li>
  <li><strong>Translating an earlier version of the document and omitting later stamps</strong>, where a complete translation is required.</li>
  <li><strong>Paying a private company without checking the official challan</strong>, mistaking a service charge for a government fee.</li>
  <li><strong>Using an unverified QR-code screenshot instead of checking the MOFA certificate number and date.</strong></li>
</ul>

<h2 id="apostille-pakistan-frequently-asked-questions" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Apostille Pakistan: frequently asked questions</h2>

<h3 id="1-how-do-i-get-an-apostille-in-pakistan-in-2026" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">1. How do I get an apostille in Pakistan in 2026?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Check the destination and eligible document, register through MOFA&apos;s official online service, upload the required records, await officer review and follow the appointment, payment and document-delivery instructions for your approved application. Verify the certificate after issuance.</p>

<h3 id="2-is-apostille-online-registration-compulsory-in-pakistan" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">2. Is apostille online registration compulsory in Pakistan?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Yes. MOFA announced mandatory advance online registration from <strong>27 July 2026</strong>. Use an official MOFA portal linked from its current consular instructions.</p>

<h3 id="3-can-i-get-an-apostille-without-an-appointment" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">3. Can I get an apostille without an appointment?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Do not assume you can. MOFA&apos;s current application procedure describes an appointment after approval, while its newer digital-attestation notice describes additional remote services. Follow the instructions issued for your application.</p>

<h3 id="4-what-is-the-apostille-fee-in-pakistan" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">4. What is the apostille fee in Pakistan?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">The current published MOFA schedule lists <strong>PKR 3,000</strong> for personal, educational and experience documents; <strong>PKR 4,500</strong> for legal documents; and <strong>PKR 12,000</strong> for commercial documents, each per document. Recheck the official fee page and final portal challan.</p>

<h3 id="5-can-an-apostille-be-obtained-for-a-nikah-nama" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">5. Can an apostille be obtained for a Nikah Nama?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">MOFA lists Nikah Nama and marriage registration documents, subject to its published requirements. The required supporting documents depend on the marriage record and whether a foreign spouse is involved.</p>

<h3 id="6-does-a-pakistani-degree-need-hec-verification-before-mofa-apostille" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">6. Does a Pakistani degree need HEC verification before MOFA apostille?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">University credentials can require prior HEC authentication; school and board credentials may require IBCC authentication. Follow the correct document-specific MOFA checklist and the current HEC/IBCC procedure.</p>

<h3 id="7-which-couriers-are-authorised-for-apostille-services" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">7. Which couriers are authorised for apostille services?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">MOFA currently lists <strong>TCS, Gerry&apos;s International, Excellent Courier Services, Leopards Courier Service and M&P Express Logistics</strong>. Confirm that a particular branch is accepting your document type and that its route complies with MOFA&apos;s registration and attendance instructions.</p>

<h3 id="8-can-i-verify-a-pakistani-apostille-online" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">8. Can I verify a Pakistani apostille online?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Yes. Use the <a href="https://apostille.mofa.gov.pk/verify-attestation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">official MOFA apostille verifier</a> with the apostille number and date, or check the QR code against the genuine government site.</p>

<h3 id="9-should-i-translate-my-document-before-or-after-apostille" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">9. Should I translate my document before or after apostille?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">It depends on the recipient&apos;s instructions. When it requests an <strong>apostilled original plus a certified translation</strong>, apostilling first may help ensure the translation includes the endorsement. If it requests authentication of a <strong>notarised translation</strong>, confirm that exact process with MOFA and the recipient before proceeding.</p>

<h3 id="10-does-mofa-apostille-also-certify-the-translation" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">10. Does MOFA apostille also certify the translation?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No. The apostille authenticates the origin of the particular eligible public document or official act. It does not independently certify the linguistic accuracy of a translation.</p>

<h3 id="11-does-an-apostille-guarantee-embassy-or-university-acceptance" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">11. Does an apostille guarantee embassy or university acceptance?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No. Eligibility, document content, translation format, completeness and destination-specific rules remain separate questions.</p>

<h3 id="12-is-an-apostille-the-same-as-notarisation" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">12. Is an apostille the same as notarisation?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No. A notary performs a notarial act; an apostille issued by a competent authority authenticates the origin of an eligible public act for use abroad where the Convention applies.</p>

<h3 id="13-can-a-courier-process-a-power-of-attorney-or-affidavit-apostille" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">13. Can a courier process a power of attorney or affidavit apostille?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">Do not assume so. MOFA&apos;s consular instructions describe exceptions requiring personal attendance for certain powers of attorney and affidavits. Check the latest MOFA rules for your exact instrument.</p>

<h3 id="14-does-germany-automatically-accept-a-pakistani-apostille" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">14. Does Germany automatically accept a Pakistani apostille?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No such assumption is safe. Germany is among the countries whose objections to Pakistan&apos;s accession are recorded by the HCCH. Check the current legal position and the German authority&apos;s requirements before selecting a legalisation route.</p>

<h3 id="15-are-the-government-apostille-fee-and-certified-translation-fee-the-same" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">15. Are the government apostille fee and certified-translation fee the same?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No. MOFA&apos;s fee is a government authentication charge. Certified translation is a separate service, quoted according to language, document length and the requested format.</p>

<h3 id="16-can-lisan-pk-issue-or-verify-an-apostille-itself" className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-8 mb-4 not-prose">16. Can LISAN.PK issue or verify an apostille itself?</h3>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg">No. <strong>Only MOFA&apos;s competent officials issue Pakistani apostilles</strong>, and official authentication should be checked through MOFA. LISAN.PK can discuss document-language and certified-translation requirements; it is not a government issuing authority.</p>

<h2 id="get-your-apostilled-document-translated-for-overseas-use" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Get your apostilled document translated for overseas use</h2>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Have the government checklist but not the required English or Arabic translation?</strong> <Link href="/contact" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Contact LISAN.PK for a document-specific translation quote</Link>. Tell us the <strong>destination country, receiving organisation, document type, original language and requested language</strong>. If you already have an apostille, include clear images of its page and any official endorsements so we can identify what needs to appear in the translation.</p>

<p className="text-slate-700 leading-relaxed my-4 text-base sm:text-lg"><strong>Already working on your government application?</strong> Start with <a href="https://attestation.mofa.gov.pk/apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA&apos;s official apostille service</a>, then read our <Link href="/guides/mofa-online-attestation" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA online attestation guide</Link>. For marriage records, see <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Nikah Nama and NADRA MRC translation</Link>. For private assistance with document-language preparation, see <Link href="/services/attestation" className="text-emerald-700 hover:text-emerald-800 underline font-medium">LISAN.PK&apos;s attestation and translation support page</Link>.</p>

<div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-4 my-5 text-xs text-slate-600 leading-relaxed italic not-prose">
  <p><em>LISAN.PK does not guarantee acceptance by any government, embassy, university or immigration authority. Our translation fees are separate from MOFA charges. Do not transmit original documents until the recipient&apos;s and MOFA&apos;s requirements are confirmed.</em></p>
</div>

<h2 id="primary-official-sources-and-verification-links" className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-12 mb-5 pt-6 border-t border-slate-200/80 not-prose">Primary official sources and verification links</h2>

<ol className="list-decimal pl-5 space-y-2 my-4 text-slate-700 leading-relaxed">
  <li><a href="https://mofa.gov.pk/consular-service-attestation-of-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Pakistan MOFA — Consular services, mandatory apostille registration and October 2026 digital update</a>.</li>
  <li><a href="https://attestation.mofa.gov.pk/apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA Digital Attestation — Apostille service</a>.</li>
  <li><a href="https://attestation.mofa.gov.pk/how-it-works" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA Digital Attestation — How the application works</a>.</li>
  <li><a href="https://attestation.mofa.gov.pk/fees" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA — Official government fees</a>.</li>
  <li><a href="https://apostille.mofa.gov.pk/sops" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA — Apostille SOPs and document checklists</a>.</li>
  <li><a href="https://attestation.mofa.gov.pk/authorized-courier-companies" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA — Authorised courier company directory</a>.</li>
  <li><a href="https://apostille.mofa.gov.pk/verify-attestation" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA — Apostille verification by number and date</a>.</li>
  <li><a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">MOFA — Destination guidance</a>.</li>
  <li><a href="https://www.hcch.net/en/news-archive/details?varevent=903" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH — Apostille Convention enters into force for Pakistan (9 March 2023)</a>.</li>
  <li><a href="https://www.hcch.net/en/states/authorities/details3/?aid=1179" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH — Pakistani competent authorities</a>.</li>
  <li><a href="https://www.hcch.net/en/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH — State objections to Pakistan&apos;s accession</a>.</li>
  <li><a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">HCCH — Text of the Apostille Convention</a>.</li>
</ol>

<div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-4 my-5 text-xs text-slate-600 leading-relaxed italic not-prose">
  <p><strong>Editorial update note:</strong> This guide was researched against the official sources on <strong>3 November 2026</strong> for scheduled publication on <strong>6 November 2026</strong>. Set the public <em>publication date</em> to the real date it first goes live; recheck government portal notices, fees, country guidance and all hyperlinks at deployment. The source-verification date is not a claim of a later live check.</p>
</div>

        </article>

        {/* Commercial & Internal Linking Hub */}
        <div className="mt-16 pt-10 border-t border-slate-200 space-y-8">
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider">
              LISAN.PK Document Translation Services
            </div>
            <h2 className="text-2xl font-bold font-serif not-prose text-white">
              Need Certified Translation for Your Apostilled Documents?
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              LISAN.PK provides certified English and Arabic translations for civil records, university degrees, police certificates, and legal instruments required for overseas embassies, universities, and immigration authorities.
            </p>
            <div className="flex flex-wrap gap-4 pt-3 not-prose">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-sm"
              >
                Request a Translation Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services/attestation"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20"
              >
                Attestation &amp; Apostille Support
              </Link>
              <Link
                href="/guides/mofa-online-attestation"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors border border-white/20"
              >
                MOFA Online Attestation Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
