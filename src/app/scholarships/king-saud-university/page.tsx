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
    absolute: "King Saud University Scholarship 2026/27: Pakistani Students, SAT & Requirements | LISAN.PK",
  },
  description: "King Saud University scholarship guide for Pakistan: official external scholarship rules, SAT 1010, age 17–25, program availability and Study in Saudi applications.",
  alternates: {
    canonical: "https://www.lisan.pk/scholarships/king-saud-university",
  },
  openGraph: {
    title: {
      absolute: "King Saud University Scholarship 2026/27: Pakistani Students, SAT & Requirements | LISAN.PK",
    },
    description: "King Saud University scholarship guide for Pakistan: official external scholarship rules, SAT 1010, age 17–25, program availability and Study in Saudi applications.",
    url: "https://www.lisan.pk/scholarships/king-saud-university",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "King Saud University Scholarship 2026/27: Pakistani Students, SAT & Requirements | LISAN.PK",
    },
    description: "King Saud University scholarship guide for Pakistan: official external scholarship rules, SAT 1010, age 17–25, program availability and Study in Saudi applications.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const quickFacts = [
  { q: "Can Pakistani students apply?", a: "International applicants residing outside Saudi Arabia may pursue eligible external scholarship routes, subject to program conditions" },
  { q: "Scholarship route", a: "External scholarship for non-resident international applicants; a separate internal route exists for Saudi residents" },
  { q: "Age for KSU's listed external undergraduate route", a: "17–25" },
  { q: "SAT for that route", a: "1010 minimum under KSU's current published requirements" },
  { q: "High-school qualification", a: "Recognized secondary qualification, generally obtained within the previous five years" },
  { q: "Where to apply", a: "Study in Saudi (https://studyinsaudi.sa/en) and any official KSU-linked admissions instructions" },
  { q: "2027 opening/deadline", a: "Not verified in the university sources reviewed; watch official announcements" },
  { q: "Master's and PhD", a: "KSU has graduate study routes, but entry conditions are program-specific, not the undergraduate SAT/age table" }
]

const documentsPrep = [
  { doc: "Passport", check: "Validity, exact name, identity details" },
  { doc: "Matric / FSc / A-Level records", check: "Qualification recognition and university-required evidence" },
  { doc: "SAT results", check: "Current KSU threshold for the applicable external bachelor's route" },
  { doc: "Academic degree and transcripts", check: "For relevant postgraduate applications" },
  { doc: "Certified translations", check: "Only when required by the specific university/program language rules" },
  { doc: "Required attestation", check: "Follow the receiving university's current instructions, not a blanket Saudi rule" },
  { doc: "Medical / additional records", check: "Provide only when required at the relevant stage" }
]

const uniCompare = [
  { inst: "KSU — King Saud University", focus: "Multiple disciplines, including undergraduate and graduate routes", caution: "Current external bachelor's page lists SAT 1010" },
  { inst: "KAU — King Abdulaziz University", focus: "Undergraduate/graduate scholarship opportunities", caution: "The published September–October 2026 intake is over" },
  { inst: "KAUST — King Abdullah University of Science and Technology", focus: "Research-oriented graduate studies", caution: "Fall 2027 graduate deadline currently 3 Jan 2027" }
]

const ksuFaqs = [
  { q: "What is the King Saud University scholarship deadline for 2027?", a: "No new general external KSU deadline was confirmed in the reviewed official material. Check KSU and Study in Saudi rather than borrowing KAUST dates. [1][4]" },
  { q: "Is SAT compulsory for KSU international scholarships?", a: "KSU's current external undergraduate scholarship requirements specify at least 1010. Rules for graduate programs and other tracks may differ. [1]" },
  { q: "Can FSc students from Pakistan apply to KSU?", a: "Applicants with qualifying high-school education may be eligible for the relevant route, subject to KSU's acceptance, age, recency, SAT and other conditions. [1]" },
  { q: "Is IELTS mandatory for all KSU students?", a: "No universal IELTS requirement for every KSU program is established by the sources reviewed. Check the program-specific language rules." },
  { q: "Are KSU scholarships automatically fully funded?", a: "KSU distinguishes external scholarships from fee-based admissions. Check the funding category shown on the specific listing or official offer. [1]" },
  { q: "Does KSU offer master's scholarships?", a: "KSU describes postgraduate opportunities for eligible international students. Eligibility and funding depend on the chosen program and track. [2]" },
  { q: "Can I use a KAUST application account for KSU?", a: "No. These are different universities with different systems and requirements." },
  { q: "What can LISAN.PK help with?", a: "We offer independent document translation and scholarship document preparation guidance. We cannot issue KSU admission decisions or guarantee scholarships." }
]

export default function KingSaudUniversityPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "King Saud University Scholarship for Pakistani Students: 2026/27 Admissions, SAT and Eligibility",
    "description": "King Saud University scholarship guide for Pakistan: official external scholarship rules, SAT 1010, age 17–25, program availability and Study in Saudi applications.",
    "author": { "@type": "Organization", "name": "LISAN.PK Editorial Team" },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": { "@type": "ImageObject", "url": "https://www.lisan.pk/logo.png" }
    },
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.lisan.pk/scholarships/king-saud-university" }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
      { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://www.lisan.pk/scholarships" },
      { "@type": "ListItem", "position": 3, "name": "King Saud University", "item": "https://www.lisan.pk/scholarships/king-saud-university" }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ksuFaqs.map(faq => ({
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
            <span className="text-slate-800 font-medium">King Saud University</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Riyadh &bull; External Scholarship Admissions</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              King Saud University Scholarship for Pakistani Students: 2026/27 Admissions, SAT and Eligibility
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>King Saud University (KSU) offers external scholarships to eligible non-Saudi students living outside Saudi Arabia.</strong> Its current official international-admissions page lists a <strong>minimum SAT score of 1010</strong> and an <strong>age range of 17–25</strong> for the external scholarship bachelor&apos;s route, alongside other conditions. The university has <strong>not confirmed a new general 2027 external-scholarship application deadline</strong> in the official sources reviewed here. [1][2]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              <strong>Checked: 5 November 2026.</strong> King Saud University (KSU) is in Riyadh and must not be confused with <strong>KAUST</strong> (King Abdullah University of Science and Technology) or <strong>KAU</strong> (King Abdulaziz University). The <Link href="/scholarships/kaust" className="text-emerald-700 underline font-semibold">KAUST Fall 2027 application deadline</Link> of 3 January 2027 <strong>does not apply to KSU</strong>.
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  KSU Non-Saudi Admissions
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

          {/* Section 1: Quick Facts */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KSU international scholarship: quick facts
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Question</th>
                    <th className="p-3.5 font-semibold">Official-source answer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {quickFacts.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-medium text-slate-900">{row.q}</td>
                      <td className="p-3.5">{row.a}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Sources:</strong> <a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KSU official non-Saudi admission page</a> and <a href="https://isd.ksu.edu.sa/en/node/3091" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KSU International Students Department</a>. [1][2]
            </p>
          </div>

          {/* Section 2: Eligibility */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KSU external scholarship eligibility for Pakistan
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              For the <strong>external undergraduate scholarship</strong> described on KSU&apos;s current admission page, the university lists several requirements. Pakistani applicants should check all of them rather than focus only on marks:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>Hold a recognized high-school diploma/equivalent accepted for the chosen program.</li>
              <li>Present a <strong>valid SAT score of at least 1010</strong>, as specified for this track.</li>
              <li>Be aged <strong>17–25</strong>.</li>
              <li>Have completed the high-school qualification within the <strong>last five years</strong>.</li>
              <li>Meet any home-country approval requirement where applicable.</li>
              <li>Not hold another scholarship at an educational institution in Saudi Arabia.</li>
              <li>Have properly attested supporting documents as required by the university.</li>
              <li>Have no disqualifying expulsion or current university enrollment under the listed conditions.</li>
              <li>Not previously hold a bachelor&apos;s degree for this bachelor-entry track.</li>
              <li>Complete required medical checks, and any interview or written assessment for certain colleges. [1]</li>
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Important:</strong> These are the published conditions for the external <strong>bachelor&apos;s</strong> pathway. Do <strong>not</strong> state that every KSU master&apos;s or PhD scholarship applicant needs SAT 1010 or is limited to age 25. Read the relevant graduate department&apos;s rules first.
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              KSU scholarship vs fee-based health-sciences admission
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              KSU also describes a separate non-resident <strong>fee-based health-sciences</strong> route. For its Medicine and Surgery track, the page states a higher <strong>SAT 1200</strong> threshold and further conditions. <strong>Fee-based admission is not the same as a fully funded scholarship.</strong> The program finder must label such routes accurately and not tag every KSU result &ldquo;fully funded.&rdquo; [1]
            </p>
          </div>

          {/* Section 3: Female Students & Graduate Admissions */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Can female students apply to King Saud University?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Eligibility depends on the <strong>actual academic program and track</strong>. KSU&apos;s published fee-based health programs include male/female program rows and certain female-only offerings. Those tables do not establish eligibility for every external scholarship major. Use the current <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi program listing</a>, select the university and degree, then check the exact gender eligibility, residency category, scholarship type and language on the individual program page. [1][3]
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif pt-4">
              King Saud University master&apos;s and PhD admissions
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              KSU&apos;s International Students Department describes master&apos;s and doctoral opportunities for eligible international students, including external applicants. It does not publish one universal master&apos;s admission rule applicable to every department. [2]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              For a postgraduate shortlist:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>Identify the <strong>exact program</strong> and faculty.</li>
              <li>Verify whether that intake accepts international applicants living outside Saudi Arabia.</li>
              <li>Confirm the required degree and academic grade.</li>
              <li>Check IELTS, TOEFL, STEP, Arabic-language or departmental language rules if specified.</li>
              <li>Check research proposal, reference-letter, interview and test requirements.</li>
              <li>Verify whether any offered place is fully funded, partially supported or fee-based.</li>
            </ul>
            <p className="text-sm text-slate-600">
              <strong>Do not use bachelor&apos;s SAT 1010 or age 17–25 rules as a blanket graduate requirement.</strong> A scholarship award remains competitive and depends on the academic program and official admissions decision.
            </p>
          </div>

          {/* Section 4: Deadline & Documents */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KSU scholarship 2027 application deadline: what is confirmed?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>No new university-wide KSU 2027 external scholarship deadline was independently confirmed in the official pages reviewed on 5 November 2026.</strong> The previously announced Study in Saudi period of <strong>16 September–6 October 2026</strong> has ended. A KSU semester start date, a paid-program announcement or KAUST&apos;s separate deadline is not evidence that KSU&apos;s external scholarships are open. [3][4]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              For a reliable next-intake check, visit the <a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KSU international admissions page</a>, review current <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi listings</a>, and follow institution-specific announcements.
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Documents Pakistani students should prepare
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Document</th>
                    <th className="p-3.5 font-semibold">What to check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {documentsPrep.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.doc}</td>
                      <td className="p-3.5">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-sm text-slate-700">
              <strong>Language-direction warning:</strong> A document already issued in English does not automatically need Arabic translation. The receiving university decides whether English, Arabic or additional authentication is required. See our <Link href="/guides/certified-translation-pakistan-explained" className="text-emerald-700 underline font-semibold">certified translation guide</Link>.
            </div>
          </div>

          {/* Section 5: How to apply */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to apply for KSU from Pakistan
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li>Check the <a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KSU official international admissions page</a> for your correct route.</li>
              <li>Open the <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi program catalogue</a>; verify the exact KSU course and its application availability.</li>
              <li>Confirm the study level, scholarship category, residency eligibility, gender conditions and language requirements on the individual listing.</li>
              <li>Verify relevant tests—SAT for the published external bachelor&apos;s route; graduate testing based on the actual postgraduate program.</li>
              <li>Prepare accurate records and required translations/attestations.</li>
              <li>Apply through the officially linked system while the applicable window is open.</li>
              <li>Monitor the submitted application through the official account; <strong>Under Process</strong> is not an acceptance. [1][3][5]</li>
            </ol>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              What does KSU scholarship status &ldquo;Under Process&rdquo; mean?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The Ministry&apos;s Study in Saudi FAQ says <strong>Under Process</strong> means institutional review. It does not promise selection or a fixed result date. Read our <Link href="/blog/study-in-saudi-application-status-under-process" className="text-emerald-700 underline font-semibold">application status explanation</Link> and <Link href="/guides/study-in-saudi-edit-application-after-submission" className="text-emerald-700 underline font-semibold">post-submission correction guide</Link>. [5]
            </p>
          </div>

          {/* Section 6: University comparison */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KSU vs KAU vs KAUST
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Institution</th>
                    <th className="p-3.5 font-semibold">Study level / focus</th>
                    <th className="p-3.5 font-semibold">Relevant caution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {uniCompare.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.inst}</td>
                      <td className="p-3.5">{row.focus}</td>
                      <td className="p-3.5 text-slate-600">{row.caution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              Explore the <Link href="/scholarships/king-abdulaziz-university" className="text-emerald-700 underline font-semibold">KAU scholarship guide</Link>, <Link href="/scholarships/kaust" className="text-emerald-700 underline font-semibold">KAUST Fall 2027 guide</Link>, and <Link href="/saudi-scholarships/program-finder" className="text-emerald-700 underline font-semibold">program finder</Link> before choosing.
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
              {ksuFaqs.map((faq, index) => (
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
              <li><a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">King Saud University — admission for non-Saudi students</a></li>
              <li><a href="https://isd.ksu.edu.sa/en/node/3091" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KSU International Students Department — external scholarships</a></li>
              <li><a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi — program catalogue</a></li>
              <li><a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">King Abdulaziz University — historical 16 Sep–6 Oct 2026 application window</a></li>
              <li><a href="https://studyinsaudi.sa/en/Faq" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi — official FAQ</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              Updated research 5 November 2026. Original page URL and initial publication date should be preserved. LISAN.PK is not affiliated with KSU or Saudi government agencies.
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="bg-[#064E3B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Preparing Documents for King Saud University?
            </h3>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              We provide certified translations for FSc certificates, degrees, transcripts, and police clearance records formatted to university standards.
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
