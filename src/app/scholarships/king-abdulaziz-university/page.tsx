import { Metadata } from "next"
import Link from "next/link"
import { 
  FileCheck2, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ShieldCheck,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: {
    absolute: "King Abdulaziz University Scholarship 2026/27: Deadline & Requirements | LISAN.PK",
  },
  description: "KAU scholarships for Pakistani students: the verified 16 Sep–6 Oct 2026 deadline, bachelor's/master's/PhD routes, documents and next official update.",
  alternates: {
    canonical: "https://www.lisan.pk/scholarships/king-abdulaziz-university",
  },
  openGraph: {
    title: {
      absolute: "King Abdulaziz University Scholarship 2026/27: Deadline & Requirements | LISAN.PK",
    },
    description: "KAU scholarships for Pakistani students: the verified 16 Sep–6 Oct 2026 deadline, bachelor's/master's/PhD routes, documents and next official update.",
    url: "https://www.lisan.pk/scholarships/king-abdulaziz-university",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "King Abdulaziz University Scholarship 2026/27: Deadline & Requirements | LISAN.PK",
    },
    description: "KAU scholarships for Pakistani students: the verified 16 Sep–6 Oct 2026 deadline, bachelor's/master's/PhD routes, documents and next official update.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const keyDates = [
  { item: "KAU's September 2026 admission announcement", status: "Published 8 September 2026", action: "Read the original university notice" },
  { item: "Application opening", status: "16 September 2026", action: "Historical date" },
  { item: "Application deadline", status: "6 October 2026", action: "That announced window has ended" },
  { item: "Application channel in the notice", status: "Study in Saudi", action: "Follow university and portal instructions" },
  { item: "Next new university-wide 2027 window", status: "Not confirmed in sources reviewed", action: "Watch official university updates" },
  { item: "Decisions/results", status: "No universal result date verified", action: "Check your own portal account and university notices" }
]

const studyLevels = [
  { level: "Bachelor's", first: "Accepted high-school qualification, e.g., qualifying FSc/A-Level equivalent", extra: "Age, marks, subject prerequisites, language, residency and gender rules" },
  { level: "Master's", first: "Recognized relevant bachelor's degree", extra: "CGPA/class standing, English/Arabic test, references, department-specific requirements" },
  { level: "PhD", first: "Recognized relevant postgraduate qualification, where required", extra: "Research area, academic record, proposal/interview, supervisor/department requirements" }
]

const uniCompare = [
  { uni: "KAU — King Abdulaziz University", city: "Jeddah", focus: "Bachelor's / graduate international scholarships", source: "KAU announcement and Study in Saudi" },
  { uni: "KSU — King Saud University", city: "Riyadh", focus: "External scholarships and various admissions routes", source: "KSU and current Study in Saudi listings" },
  { uni: "KAUST — King Abdullah University of Science and Technology", city: "Thuwal", focus: "MS, MS/PhD and PhD research programs", source: "Separate KAUST graduate timeline" }
]

const kauFaqs = [
  { q: "Is King Abdulaziz University scholarship open in November 2026?", a: "The announced 16 September–6 October 2026 window is closed. Verify whether a distinct program or later intake has been officially opened; no new general 2027 window was confirmed in this review. [1]" },
  { q: "What is the King Abdulaziz University scholarship deadline 2027?", a: "No new universal 2027 deadline was verified. Do not reuse 6 October 2026 or the separate KAUST deadline as a 2027 KAU date. [1]" },
  { q: "Does KAU offer master's and PhD scholarships?", a: "KAU describes international postgraduate scholarship opportunities, subject to program and admission conditions. [2][3]" },
  { q: "Can Pakistani female students apply?", a: "The university describes international opportunities for both male and female applicants, but eligibility depends on the specific course and track. [3][5]" },
  { q: "Does KAU require IELTS 5?", a: "A legacy scholarship page lists IELTS 5 among example criteria, but it should not be presented as a current universal test threshold across all departments. Check the active program. [3]" },
  { q: "Is admission to KAU guaranteed with a 3.0 CGPA?", a: "No. Admission is competitive and program-specific. The reviewed sources do not support any guaranteed-admission CGPA." },
  { q: "Does a Pakistani FSc certificate need Arabic translation?", a: "Only when the receiving program or university requires that language. English-language originals are not automatically required to be translated into Arabic. [6]" },
  { q: "Can I check my application at LISAN.PK?", a: "No. Official status is available via the university/Ministry system used for your application. LISAN.PK provides independent informational and translation support." }
]

export default function KingAbdulazizUniversityPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "King Abdulaziz University Scholarship for Pakistani Students: 2026/27 Deadline and Requirements",
    "description": "KAU scholarships for Pakistani students: the verified 16 Sep–6 Oct 2026 deadline, bachelor's/master's/PhD routes, documents and next official update.",
    "author": { "@type": "Organization", "name": "LISAN.PK Editorial Team" },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": { "@type": "ImageObject", "url": "https://www.lisan.pk/logo.png" }
    },
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.lisan.pk/scholarships/king-abdulaziz-university" }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
      { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://www.lisan.pk/scholarships" },
      { "@type": "ListItem", "position": 3, "name": "King Abdulaziz University", "item": "https://www.lisan.pk/scholarships/king-abdulaziz-university" }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": kauFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-16 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/scholarships" className="hover:text-emerald-700">Scholarships</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">King Abdulaziz University</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Jeddah &bull; International Scholarships</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              King Abdulaziz University Scholarship for Pakistani Students: 2026/27 Deadline and Requirements
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>King Abdulaziz University (KAU) announced a Study in Saudi application period of 16 September to 6 October 2026 for non-Saudi undergraduate and graduate candidates living inside or outside the Kingdom. That announced window is closed.</strong> Pakistani applicants seeking a future KAU scholarship should monitor the official Study in Saudi portal and university announcements; a new universal 2027 deadline was not confirmed in the reviewed official sources. [1]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              <strong>Verified: 5 November 2026.</strong> KAU is in <strong>Jeddah</strong>. It is not the same as <strong>King Saud University (KSU)</strong> or <strong>KAUST</strong>, whose separate Fall 2027 graduate deadline is <strong>3 January 2027</strong>.
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  KAU Official Notice
                </Button>
              </a>
              <Link href="/saudi-scholarships/program-finder" className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans">
                Browse Saudi Programs
              </Link>
              <Link href="/contact" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2">
                Document Review Support &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Key Dates */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              King Abdulaziz University scholarship: key dates
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Item</th>
                    <th className="p-3.5 font-semibold">Official status</th>
                    <th className="p-3.5 font-semibold">What Pakistani applicants should do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {keyDates.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-medium text-slate-900">{row.item}</td>
                      <td className="p-3.5 font-bold text-emerald-950">{row.status}</td>
                      <td className="p-3.5">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Official source:</strong> <a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KAU announcement for non-Saudi applicants</a>. [1]
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Avoid a common mistake:</strong> A university&apos;s next semester-start date is not proof that scholarship applications are open. Nor does KAUST&apos;s January 2027 deadline transfer to King Abdulaziz University.
            </div>
          </div>

          {/* Section 2: Funding & Eligibility */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Does KAU offer fully funded scholarships to Pakistani students?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              KAU describes scholarships for non-Saudi students at <strong>bachelor&apos;s, master&apos;s and PhD</strong> levels. Its general scholarship pages mention tuition support, housing, health services and student support arrangements; a legacy international scholarship page also lists stipends, arrival assistance, accommodation subject to availability and annual travel benefits. <strong>Your actual funding depends on the scholarship category, selected program and offer letter.</strong> Do not assume every available university course is fully funded. [2][3]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              KAU distinguishes applicants living <strong>outside</strong> Saudi Arabia from those who already hold a valid Saudi residence permit. A Pakistani citizen applying from Pakistan will normally investigate the <strong>external international</strong> route; a Pakistani resident in Saudi Arabia must check the separate local-resident criteria. [2][4]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Who can apply for KAU external scholarships?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The university&apos;s published scholarship material describes international applicant categories, but requirements differ by academic level, residency, department and cycle. Before applying, check:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>The chosen bachelor&apos;s, master&apos;s or PhD program is actually open to non-Saudi applicants.</li>
              <li>The applicant is eligible under the relevant <strong>external</strong> or <strong>internal</strong> route.</li>
              <li>The listed gender eligibility, study language, academic background and tests match the applicant.</li>
              <li>The relevant degree or prior certificate is recognized.</li>
              <li>Any specific age, recommendation-letter, language-test or document-attestation rules are fulfilled.</li>
              <li>The application is <strong>open now</strong>, not simply shown in an older announcement archive. [2][4][5]</li>
            </ul>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Special warning:</strong> The university&apos;s legacy external-scholarship page describes master&apos;s age <strong>up to 30</strong> and PhD age <strong>up to 35</strong>, a generally <strong>Very Good</strong> qualification, and two academic recommendations, alongside example IELTS/TOEFL thresholds. Because this material is a <strong>legacy page</strong>, those numbers must not override current program-specific conditions or be advertised as universal 2027 rules. [3]
            </div>
          </div>

          {/* Section 3: Requirements by Level */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAU scholarship requirements: bachelor&apos;s vs master&apos;s vs PhD
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Study level</th>
                    <th className="p-3.5 font-semibold">First qualification to verify</th>
                    <th className="p-3.5 font-semibold">Additional program-specific checks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {studyLevels.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.level}</td>
                      <td className="p-3.5">{row.first}</td>
                      <td className="p-3.5 text-slate-600">{row.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>No single CGPA, IELTS score or &ldquo;without IELTS&rdquo; promise applies to every KAU scholarship.</strong> Degree/program restrictions can be narrower than a general university admission page. A graduate program shown on a university service page may also have a different application channel or funding status from the international Study in Saudi scholarship stream. [4][5]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Is KAU open to female international students?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              KAU&apos;s scholarship information describes international seats for <strong>male and female</strong> students, but <strong>individual program availability must be checked</strong> rather than assumed. The official Study in Saudi catalogue presents program-level attributes such as gender and study category. An overall university listing does not guarantee every program accepts every applicant. [3][5]
            </p>
          </div>

          {/* Section 4: Documents Checklist */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Which documents are needed for King Abdulaziz University scholarship applications?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Prepare a working file before a relevant intake opens:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-base pl-2">
              <li><strong>Passport</strong> — valid identity details consistent with the application.</li>
              <li><strong>Educational certificates</strong> — Matric/FSc or relevant BS/MS degrees depending on level.</li>
              <li><strong>Transcripts / mark sheets</strong> — complete academic records and degree classification.</li>
              <li><strong>English or Arabic test evidence</strong> — only if specified for your selected program.</li>
              <li><strong>References, CV or statement</strong> — based on the current program checklist.</li>
              <li><strong>Medical or background documents</strong> — only when officially required for your stage.</li>
              <li><strong>Translation and attestation</strong> — follow the receiving institution&apos;s actual published requirement; avoid blanket claims that every certificate requires Arabic translation.</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Do Pakistani documents have to be translated into Arabic?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Not necessarily.</strong> Some programs accept English originals; others request Arabic versions or particular certification. The official Study in Saudi FAQ itself tells students to follow their institution&apos;s requirements for attestations and documents. Avoid paying for unnecessary translation before checking the target program. [6]
            </p>
            <p className="text-sm text-slate-600">
              For translation help, see <Link href="/guides/certified-translation-pakistan-explained" className="text-emerald-700 underline font-semibold">certified translation meaning</Link>, <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">Urdu-to-Arabic translation</Link> and <Link href="/pricing" className="text-emerald-700 underline font-semibold">translation charges</Link>.
            </p>
          </div>

          {/* Section 5: How to apply */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to apply to King Abdulaziz University from Pakistan
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li>Read the <a href="https://kau.edu.sa/en/page/scholarship" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official KAU scholarship information</a> and its latest announcements.</li>
              <li>Visit the <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi program search</a>.</li>
              <li>Select <strong>King Abdulaziz University</strong>, if listed, and inspect the exact program.</li>
              <li>Verify the program&apos;s <strong>study level, location, language, gender, scholarship type and residency category</strong>.</li>
              <li>Check whether applications are open for the relevant cycle; the 16 September–6 October <strong>2026</strong> period is over.</li>
              <li>Prepare required original records and any institution-requested certified translations.</li>
              <li>Submit through the <strong>officially designated</strong> application platform only when a new window opens.</li>
              <li>Track your status via the official portal and comply with any actual university requests.</li>
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Important platform distinction:</strong> KAU also operates a graduate admission e-service described on its website. That existence alone does not prove a specific international graduate <strong>scholarship</strong> intake is open or that the e-service replaces Study in Saudi for every foreign applicant. Follow the instructions linked from the current scholarship announcement. [1][7]
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              After submission: Under Process, Returned or Rejected
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The Ministry&apos;s Study in Saudi FAQ states that applications pass through institution review and may involve further Ministry/university processing. <strong>Under Process means the application is being reviewed</strong>, not that final admission is confirmed. Returned applications may permit some qualification-field corrections, but core identity information—including passport number—may be locked. [6]
            </p>
            <p className="text-sm text-slate-600">
              Read our <Link href="/blog/study-in-saudi-application-status-under-process" className="text-emerald-700 underline font-semibold">Study in Saudi status guide</Link> and <Link href="/guides/study-in-saudi-edit-application-after-submission" className="text-emerald-700 underline font-semibold">edit-after-submission guide</Link> before attempting account changes.
            </p>
          </div>

          {/* Section 6: University comparison */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAU, KSU and KAUST: don&apos;t confuse the three
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">University</th>
                    <th className="p-3.5 font-semibold">City</th>
                    <th className="p-3.5 font-semibold">Admissions focus here</th>
                    <th className="p-3.5 font-semibold">Source of deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {uniCompare.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.uni}</td>
                      <td className="p-3.5">{row.city}</td>
                      <td className="p-3.5">{row.focus}</td>
                      <td className="p-3.5 text-slate-600">{row.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              Continue with the <Link href="/scholarships/king-saud-university" className="text-emerald-700 underline font-semibold">KSU guide</Link>, <Link href="/scholarships/kaust" className="text-emerald-700 underline font-semibold">KAUST Fall 2027 guide</Link> and <Link href="/saudi-scholarships/program-finder" className="text-emerald-700 underline font-semibold">Saudi university program finder</Link>.
            </p>
          </div>

          {/* Section 7: FAQs */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {kauFaqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 font-serif">
                    {index + 1}. {faq.q}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Review Box */}
          <EditorialReviewBox />

          {/* Section 8: Official sources */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2">
              <li><a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAU — September 2026 international admissions announcement</a></li>
              <li><a href="https://kau.edu.sa/en/page/scholarship" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">King Abdulaziz University — scholarship overview</a></li>
              <li><a href="https://kau.edu.sa/en/page-legacy/international-student-scholarships" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAU — legacy international scholarship details; verify against live program terms</a></li>
              <li><a href="https://kau.edu.sa/en/page/external-scholarships-for-international-students" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAU — external international scholarship portal</a></li>
              <li><a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi — programs and filters</a></li>
              <li><a href="https://studyinsaudi.sa/en/Faq" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi — Ministry FAQ</a></li>
              <li><a href="https://kau.edu.sa/en/e-services/52" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAU — graduate admissions online service</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              Source check: 5 November 2026. Preserve the existing URL and true original publication date. LISAN.PK is not affiliated with KAU or the Saudi Ministry of Education.
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="bg-[#064E3B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Need Certified Translation for King Abdulaziz University?
            </h3>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide accurate, certified Arabic and English translations of degrees, transcripts, Nikah Nama and police clearance records.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-emerald-950 hover:bg-emerald-50 min-w-[200px] h-12 text-sm font-bold shadow-md">
                  Request a Quotation
                </Button>
              </Link>
              <Link href="https://wa.me/923288155866" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border border-emerald-300 text-white hover:bg-emerald-800 min-w-[200px] h-12 text-sm font-bold bg-transparent">
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
