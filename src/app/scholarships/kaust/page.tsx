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
  Calendar,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: {
    absolute: "KAUST Fellowship 2027 for Pakistani Students: Deadline, Funding & Requirements | LISAN.PK",
  },
  description: "KAUST Fall 2027 applications are open. Check the official 3 January 2027 deadline, MS/PhD eligibility, IELTS rules, documents, transcripts and fellowship funding.",
  alternates: {
    canonical: "https://www.lisan.pk/scholarships/kaust",
  },
  openGraph: {
    title: {
      absolute: "KAUST Fellowship 2027 for Pakistani Students: Deadline, Funding & Requirements | LISAN.PK",
    },
    description: "KAUST Fall 2027 applications are open. Check the official 3 January 2027 deadline, MS/PhD eligibility, IELTS rules, documents, transcripts and fellowship funding.",
    url: "https://www.lisan.pk/scholarships/kaust",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "KAUST Fellowship 2027 for Pakistani Students: Deadline, Funding & Requirements | LISAN.PK",
    },
    description: "KAUST Fall 2027 applications are open. Check the official 3 January 2027 deadline, MS/PhD eligibility, IELTS rules, documents, transcripts and fellowship funding.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const timelineData = [
  { milestone: "Fall 2027 Round 2 applications opened", date: "28 September 2026", meaning: "Applications opened for eligible graduate degrees" },
  { milestone: "Fall 2027 Round 2 deadline", date: "3 January 2027", meaning: "Date to submit the application in KAUST's system" },
  { milestone: "Planned Round 2 decisions", date: "25 February 2027", meaning: "University-published target; individual notifications may vary" },
  { milestone: "Fall semester begins", date: "29 August 2027", meaning: "Semester start, not the application deadline" },
  { milestone: "Spring 2027 Round 1 deadline", date: "27 September 2026", meaning: "Already passed; Spring admissions were PhD-only" }
]

const fundingData = [
  { comp: "Tuition and bench fees", desc: "Full coverage", qual: "Not a fee charged to a typical Fellowship recipient" },
  { comp: "Student stipend", desc: "Funding toward living expenses", qual: "Amount depends on MS or PhD status and conditions in the offer" },
  { comp: "Accommodation", desc: "Base accommodation provided", qual: "Upgraded housing can involve additional charges" },
  { comp: "Health insurance", desc: "Coverage for student and eligible on-campus dependants", qual: "Check family eligibility and policy conditions" },
  { comp: "Relocation", desc: "Visa, travel and relocation assistance", qual: "University describes initial move and return-home provisions" }
]

const degreeRoutes = [
  { route: "Master of Science (MS)", qual: "Relevant recognized bachelor's degree", avail: "Offered across listed eligible programs" },
  { route: "Integrated MS/PhD", qual: "Relevant bachelor's degree; research-focused", avail: "Only where the chosen program offers this pathway" },
  { route: "PhD", qual: "Usually a relevant master's degree for the direct PhD route", avail: "Available in relevant fields; check program details" }
]

const englishStandards = [
  { exam: "IELTS Academic", std: "Overall 7.0; at least 6.5 in each section", notes: "KAUST accepts IELTS Online" },
  { exam: "TOEFL iBT", std: "Overall 5.0; at least 4.5 in each section", notes: "KAUST's current site uses the newer 1–6 reporting scale; don't confuse it with old 0–120 scores" },
  { exam: "PTE Academic", std: "Overall 71; at least 67 in each section", notes: "Official score required" },
  { exam: "Cambridge C1/C2", std: "Overall 185; at least 176 in each section", notes: "Official score required" }
]

const documentChecklist = [
  { doc: "Passport", req: "Clear biography-page copy", prep: "Check name spelling and passport validity" },
  { doc: "University transcript", req: "Academic record from each higher-education institution", prep: "Include all semesters, grades, credits and grading scale" },
  { doc: "Degree / qualification evidence", req: "Required where applicable to establish eligibility", prep: "Do not hide incomplete or ongoing qualifications" },
  { doc: "CV / résumé", req: "Educational and relevant professional/research background", prep: "Include projects, research, publications and dates accurately" },
  { doc: "Statement of purpose", req: "Approximately 750 words", prep: "Explain research interests, preparation, program fit and plans" },
  { doc: "Three referee contacts", req: "Three referees with academic/professional email addresses", prep: "Ask permission before adding; institutional email preferred/required" },
  { doc: "English test score", req: "If available when applying; required by enrolment unless exempt", prep: "Verify test validity and the exact score standard" }
]

const uniComparison = [
  { inst: "King Abdullah University of Science and Technology (KAUST)", channel: "KAUST graduate admissions portal", caution: "Fall 2027 graduate deadline currently shown as 3 January 2027" },
  { inst: "King Saud University (KSU)", channel: "Study in Saudi and relevant KSU channels", caution: "External scholarship conditions are not KAUST's rules" },
  { inst: "King Abdulaziz University (KAU)", channel: "Study in Saudi and relevant KAU channels", caution: "Announced September–October 2026 window is closed" }
]

const kaustFaqs = [
  { q: "Is the KAUST Fall 2027 application open?", a: "Yes. Its official application portal says Fall 2027 MS, MS/PhD and PhD applications are open. Check the university portal for changes. [2]" },
  { q: "What is the KAUST Fall 2027 application deadline?", a: "3 January 2027 for the Round 2 window shown on the official timeline. The university states its dates are tentative. [1]" },
  { q: "Is KAUST open to Pakistani students?", a: "KAUST is an international graduate university. Pakistani applicants can apply to degrees for which they meet the published entry requirements; selection is competitive. [5][6]" },
  { q: "Is there a separate KAUST Fellowship application?", a: "No. The Fellowship normally accompanies eligible admission, with exceptions for certain sponsorship arrangements. [4]" },
  { q: "Is KAUST fully funded?", a: "The standard KAUST Fellowship covers tuition and offers a stipend, housing, health insurance and relocation support. Details depend on admission and sponsorship. [3]" },
  { q: "Can I apply for KAUST MS with a four-year Pakistani BS or BE?", a: "A relevant recognized bachelor's qualification is the general minimum for an MS. Your specific program's requirements must also be satisfied. [6]" },
  { q: "Can a BS graduate apply directly for PhD?", a: "Check the integrated MS/PhD option where available. The separately described direct PhD route normally requires a relevant master's degree. [6][9]" },
  { q: "What GPA is required for KAUST 2027?", a: "The official general minimum is 3.0/4.0 or equivalent; admissions are competitive and many accepted students have significantly higher scores. [6][7]" },
  { q: "Can I apply without IELTS?", a: "You can submit an application without a score, but unless exempt under KAUST's narrow conditions, you normally must provide qualifying English results before enrolment. [6][7]" },
  { q: "Does a Pakistani MOI certificate waive IELTS at KAUST?", a: "No. KAUST explicitly lists Medium of Instruction certificates among evidence it does not accept for the standard English requirement. [6]" },
  { q: "Do I need a GRE score?", a: "GRE/PGAT scores are not generally compulsory, though optional scores may support the application. [6][7]" },
  { q: "Do Pakistani transcripts need Arabic translation for KAUST?", a: "Not generally. KAUST requests supporting documents in English; an original non-English transcript must be accompanied by a certified English translation. [6][7]" },
  { q: "Does KAUST need my grading scale?", a: "Yes. KAUST asks for the grading scale used by the awarding institution, even when grades are not on a 4.0 scale. [6][7]" },
  { q: "Can final-year students apply?", a: "KAUST permits recent available or partial academic records for an ongoing degree in specified circumstances; final documents are required later. [6]" },
  { q: "How many recommendation letters are required?", a: "Provide details for three referees. KAUST contacts them directly through the application system. [6]" },
  { q: "Can I edit my KAUST application after submitting?", a: "KAUST's FAQ says applicants cannot normally change a submitted application unless admissions requests additional information. Carefully verify before submission. [4]" },
  { q: "Must I email a KAUST professor before applying?", a: "No. KAUST says securing a faculty adviser before the application is not required. [4]" },
  { q: "When will Fall 2027 decisions be announced?", a: "The current Round 2 schedule lists 25 February 2027 as a planned decision date. Follow your portal and email for the official outcome. [1]" }
]

export default function KaustScholarshipGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "KAUST Fellowship 2027 for Pakistani Students: Fall Deadline, Fully Funded MS & PhD Requirements",
    "description": "KAUST Fall 2027 applications are open. Check the official 3 January 2027 deadline, MS/PhD eligibility, IELTS rules, documents, transcripts and fellowship funding.",
    "author": { "@type": "Organization", "name": "LISAN.PK Editorial Team" },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": { "@type": "ImageObject", "url": "https://www.lisan.pk/logo.png" }
    },
    "datePublished": "2026-11-05T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.lisan.pk/scholarships/kaust" }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
      { "@type": "ListItem", "position": 2, "name": "Scholarships", "item": "https://www.lisan.pk/scholarships" },
      { "@type": "ListItem", "position": 3, "name": "KAUST", "item": "https://www.lisan.pk/scholarships/kaust" }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": kaustFaqs.map(faq => ({
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
            <span className="text-slate-800 font-medium">KAUST Fellowship 2027</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
              <span>Fall 2027 Admissions Open &bull; Official Timeline</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              KAUST Fellowship 2027 for Pakistani Students: Fall Deadline, Fully Funded MS &amp; PhD Requirements
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>KAUST Fall 2027 graduate applications are open, with a Round 2 deadline of 3 January 2027.</strong> Pakistani applicants can apply for eligible MS, MS/PhD and PhD programs through KAUST&apos;s own admissions system. The Fellowship normally accompanies an eligible admission offer; <strong>no separate Fellowship application is required</strong>. [1][2][3]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              <strong>Checked against KAUST official sources: 5 November 2026.</strong> Dates are described by the university as tentative, so applicants should recheck the official calendar before submission. This guide concerns <strong>King Abdullah University of Science and Technology (KAUST)</strong>, not King Saud University (KSU) or King Abdulaziz University (KAU).
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://apply.kaust.edu.sa/apply/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  KAUST Application Portal
                </Button>
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans">
                Request Document Translation
              </Link>
              <Link href="/saudi-scholarships/program-finder" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2">
                Program Finder &rarr;
              </Link>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-950 leading-relaxed">
              <strong>Important action:</strong> Browse <a href="https://admissions.kaust.edu.sa/how-to-apply/admission-timelines" target="_blank" rel="noopener noreferrer" className="underline font-semibold">KAUST&apos;s official Fall 2027 admissions timeline</a>, identify an eligible graduate degree, and apply at <a href="https://apply.kaust.edu.sa/apply/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">KAUST&apos;s application portal</a>. LISAN.PK is an independent translation/document-preparation service, not a KAUST representative or admissions authority.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Confirmed Dates */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAUST Fall 2027 admissions: confirmed dates
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Milestone</th>
                    <th className="p-3.5 font-semibold">KAUST-published date</th>
                    <th className="p-3.5 font-semibold">What it means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {timelineData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-medium text-slate-900">{row.milestone}</td>
                      <td className="p-3.5 font-bold text-emerald-950 whitespace-nowrap">{row.date}</td>
                      <td className="p-3.5">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Source:</strong> <a href="https://admissions.kaust.edu.sa/how-to-apply/admission-timelines" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KAUST Admissions Timeline</a>. KAUST labels these dates tentative. Its <a href="https://apply.kaust.edu.sa/apply/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">application portal</a> currently shows Fall 2027 admissions open and Spring 2027 applications closed. [1][2]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Does the Study in Saudi October 2026 deadline apply to KAUST?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>No: do not substitute a Study in Saudi deadline for KAUST&apos;s published graduate deadline.</strong> The Study in Saudi application window announced for many Saudi universities ended on 6 October 2026, but KAUST has a separate graduate application platform and Fall 2027 timeline. Use KAUST&apos;s own deadlines for KAUST degrees. Compare the <Link href="/blog/fully-funded-scholarship-deadlines-saudi-universities-2026" className="text-emerald-700 underline font-semibold">Study in Saudi deadline guide</Link> only when considering other participating universities. [1][8]
            </p>
          </div>

          {/* Section 2: What is the KAUST Fellowship */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What is the KAUST Fellowship?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              The KAUST Fellowship is financial support typically attached to admission to an eligible KAUST graduate program. The official university funding page lists:
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Funding component</th>
                    <th className="p-3.5 font-semibold">University description</th>
                    <th className="p-3.5 font-semibold">Important qualification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {fundingData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.comp}</td>
                      <td className="p-3.5">{row.desc}</td>
                      <td className="p-3.5 text-slate-600">{row.qual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              KAUST estimates the <strong>total annual value</strong> of a Fellowship at approximately <strong>USD 70,000–80,000</strong>, including non-cash items such as tuition and accommodation. <strong>That is not the student&apos;s cash stipend or take-home salary.</strong> The funding page separately describes an MS stipend valued around <strong>USD 20,000/year</strong> and a PhD stipend valued around <strong>USD 25,000–30,000/year</strong>, depending on qualifications and progress. Always rely on your own offer letter. [3]
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Exception:</strong> Students funded through specific external sponsorships or institutional partnerships may not receive the same KAUST Fellowship. Applicants must disclose relevant external sponsorship. [3][4]
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              Must Pakistani students apply separately for the fellowship?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>No.</strong> KAUST&apos;s FAQ states that admitted students generally receive the Fellowship automatically, apart from relevant partnership/external-sponsorship arrangements. An online claim that you must pay to submit a separate Fellowship form should be treated cautiously. Apply for the <strong>academic program</strong> through KAUST&apos;s official portal. [4]
            </p>
          </div>

          {/* Section 3: Which KAUST degrees can Pakistani applicants apply for? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Which KAUST degrees can Pakistani applicants apply for?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              KAUST is a <strong>graduate-focused</strong> university. Its Fall 2027 admissions cover MS, MS/PhD and PhD options in science, technology, engineering and related research areas. KAUST&apos;s course directory lists 17 STEM fields; availability varies by degree pathway. [5]
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Route</th>
                    <th className="p-3.5 font-semibold">Typical starting qualification</th>
                    <th className="p-3.5 font-semibold">Fall 2027 availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {degreeRoutes.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.route}</td>
                      <td className="p-3.5">{row.qual}</td>
                      <td className="p-3.5 text-slate-700">{row.avail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              Examples of programs appearing in the official Fall 2027 directory include <strong>Computer Science, Electrical and Computer Engineering, Mechanical Engineering, Chemical Engineering, Chemistry, Applied Mathematics and Computational Science, Environmental Science and Engineering, Marine Science, Material Science and Engineering, Plant Science, and Statistics</strong>. The combined MS/PhD route is <strong>not available in every discipline</strong>. [5][9]
            </p>
            <p className="text-sm text-slate-600">
              <strong>For Pakistan:</strong> BS/BE applicants may consider a relevant MS or eligible MS/PhD route. MS/MPhil applicants can assess direct PhD eligibility. A degree title alone does not secure eligibility: academic relevance, minimum grades, English requirements and research fit still matter.
            </p>
          </div>

          {/* Section 4: Admissions Requirements */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAUST admissions requirements for 2027
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              KAUST&apos;s published general entry requirements include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li><strong>Age:</strong> at least 18 on entry.</li>
              <li><strong>GPA:</strong> minimum 3.0/4.0 or equivalent. KAUST notes that competitive admitted students often score much higher.</li>
              <li><strong>Academic qualification:</strong> a relevant recognized bachelor&apos;s degree for MS; a relevant master&apos;s degree for direct PhD, with integrated MS/PhD offered in eligible programs.</li>
              <li><strong>Research fit:</strong> academic motivation and alignment with the selected graduate program.</li>
              <li><strong>English proficiency:</strong> official scores meeting KAUST&apos;s published standard by enrolment, unless an explicit university exemption applies.</li>
              <li><strong>Documents:</strong> academic transcripts, CV, statement of purpose, three referees and passport bio-page. [6]</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Is a 3.0 CGPA enough to win the KAUST scholarship?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>A 3.0/4.0 meets the university&apos;s stated minimum threshold; it does not guarantee admission.</strong> KAUST explains that most admitted students have higher GPAs: it reports 90% above 3.3 and 75% above 3.5. Application review is holistic, taking research preparation, motivation, academic record and other qualities into account. Applicants with grades close to the minimum should concentrate on demonstrable research fit and a strong application rather than rely on a guaranteed-offer claim. [6][7]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              What if my Pakistani university uses percentages or a different CGPA scale?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              KAUST says it evaluates grading systems from around the world. Submit the <strong>original grading format</strong> and your university&apos;s <strong>official grading scale</strong> rather than inventing a 4.0 conversion. If an application field requires a conversion, follow the actual portal instructions and seek clarification from admissions. [6][7]
            </p>
          </div>

          {/* Section 5: IELTS, TOEFL and MOI rules */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAUST IELTS, TOEFL and Medium of Instruction rules
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>A Pakistani Medium of Instruction (MOI) letter is not an accepted substitute for the KAUST English test requirement.</strong> KAUST says applicants may submit the application without a test score, but admitted candidates normally need the required result <strong>before enrolment</strong>. [6][7]
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Examination</th>
                    <th className="p-3.5 font-semibold">KAUST&apos;s currently published standard</th>
                    <th className="p-3.5 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {englishStandards.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.exam}</td>
                      <td className="p-3.5 font-medium text-emerald-950">{row.std}</td>
                      <td className="p-3.5 text-slate-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              Test results are generally valid for <strong>two years</strong>. KAUST says it does not accept <strong>MOI certificates</strong>, Duolingo English Test for standard graduate applicants, TOEFL MyBest superscores, or IELTS One Skill Retake as its evidence of proficiency. A degree physically completed in certain named English-speaking countries, or a previous qualifying KAUST campus degree, can give an exemption; <strong>study in English at a Pakistani university alone does not</strong>. KAUST publishes limited conditional language-course pathways for some PhD candidates; these are not a general waiver. Check its live requirements before testing. [6][7]
            </p>
            <p className="text-sm text-slate-600">
              <strong>GRE/PGAT:</strong> KAUST does <strong>not</strong> require GRE or PGAT for the standard application, though it may consider optional scores and specific programs can have additional conditions. [6]
            </p>
          </div>

          {/* Section 6: Document Checklist */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Complete KAUST Fall 2027 application documents checklist
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Document</th>
                    <th className="p-3.5 font-semibold">KAUST requirement</th>
                    <th className="p-3.5 font-semibold">Practical preparation for Pakistani applicants</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {documentChecklist.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.doc}</td>
                      <td className="p-3.5">{row.req}</td>
                      <td className="p-3.5 text-slate-600">{row.prep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Reference-letter workflow:</strong> Applicants provide referee details; KAUST sends requests directly. Referees—not applicants—submit recommendations. The university expects references within <strong>seven calendar days after the application deadline</strong>; delayed letters can slow review. [6]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              KAUST transcript requirements: a common Pakistani application problem
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              KAUST explicitly requires academic documents to show the <strong>institution&apos;s grading scale</strong>. For example, a transcript that gives semester marks but omits an explanation of letter grades or CGPA weighting may need an official legend from the university. Before submission, confirm:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>Your official name matches your passport or that differences are explainable.</li>
              <li>University and degree names are spelled consistently across the application, CV and records.</li>
              <li>Every prior higher-education institution is represented.</li>
              <li>Each record shows courses, grades, credits where applicable, overall award and grading scale.</li>
              <li>Every non-English record includes its <strong>original document plus a certified English translation</strong>.</li>
              <li>Scans are complete, readable, properly oriented and not cropped.</li>
              <li>Your program and degree pathway match the admission requirements.</li>
            </ol>
            <p className="text-slate-700 leading-relaxed text-base">
              For Pakistani universities that issue a transcript in English, <strong>an additional Arabic translation is not a general KAUST admission requirement</strong>. Translate only a document that is not already in English or when KAUST specifically requests another format. KAUST may request final official records to be sent directly by the awarding institution after admission. [6][7]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              Can I apply with a provisional or partial transcript?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Yes, in specified circumstances.</strong> If your current degree is not finished, KAUST allows recent available academic records, including a partial transcript or other evidence of progress, at the application stage. A final official academic record is then required later if admitted. This does <strong>not</strong> mean that students can fabricate grades or omit previously attended institutions. [6][7]
            </p>
          </div>

          {/* Section 7: How to apply step by step */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to apply to KAUST from Pakistan: step by step
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li>Open the <a href="https://admissions.kaust.edu.sa/study" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official KAUST programs directory</a> and select an eligible MS, MS/PhD or PhD route.</li>
              <li>Read that program&apos;s prerequisites and research areas. Confirm the degree pathway exists for <strong>Fall 2027</strong>.</li>
              <li>Confirm the latest deadline at <a href="https://admissions.kaust.edu.sa/how-to-apply/admission-timelines" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">KAUST&apos;s official timeline</a>.</li>
              <li>Prepare your passport, academic records, grading scale, CV, approximately 750-word SOP and three referees.</li>
              <li>Translate <strong>non-English</strong> records into certified English, keeping the original scans as well.</li>
              <li>Create an account on the <a href="https://apply.kaust.edu.sa/apply/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official KAUST application portal</a>.</li>
              <li>Enter consistent personal and academic information. Upload all required documents.</li>
              <li>Add referee details only after confirming they can respond. Requests may be sent as soon as their details are entered.</li>
              <li>Review carefully before final submission; KAUST normally does <strong>not</strong> permit free editing after submission.</li>
              <li>Follow your KAUST applicant dashboard and email for requests, an interview or decision.</li>
            </ol>
            <p className="text-slate-700 leading-relaxed text-base pt-2">
              KAUST outlines a review process involving document screening, faculty evaluation, possible interview/test and final decision. The admissions site says applicants do <strong>not</strong> need to secure a faculty adviser before applying. [4][6][10]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              What happens after applying?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>KAUST&apos;s own portal—not the Study in Saudi portal—is where KAUST applicants check their status.</strong> The university may request missing material or invite shortlisted candidates to an academic interview. The official timeline currently lists <strong>25 February 2027</strong> for Round 2 decisions, but those target dates can change. A submitted application is not an acceptance, and an interview invitation is not a fellowship award. [1][10]
            </p>
            <p className="text-sm text-slate-600">
              For admitted students, follow the actual offer letter for enrollment, original-document requirements, visa and arrival steps. KAUST&apos;s published onboarding information describes additional credential and visa processes after admission; do not assume that the online application alone completes them. [11]
            </p>
          </div>

          {/* Section 8: Comparison Table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              KAUST vs King Saud University vs King Abdulaziz University
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Institution</th>
                    <th className="p-3.5 font-semibold">Relevant application channel</th>
                    <th className="p-3.5 font-semibold">What to remember</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {uniComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900">{row.inst}</td>
                      <td className="p-3.5">{row.channel}</td>
                      <td className="p-3.5 text-slate-600">{row.caution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              Compare the <Link href="/scholarships/king-saud-university" className="text-emerald-700 underline font-semibold">KSU scholarship guide</Link>, <Link href="/scholarships/king-abdulaziz-university" className="text-emerald-700 underline font-semibold">KAU scholarship guide</Link>, and <Link href="/saudi-scholarships/program-finder" className="text-emerald-700 underline font-semibold">LISAN.PK Saudi University Program Finder</Link>. Do not interchange the three universities&apos; deadlines or GPA requirements.
            </p>
          </div>

          {/* Section 9: Where LISAN.PK can help */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Where LISAN.PK can help
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              LISAN.PK can assist with document-readiness checks and <strong>certified translation of academic records that are not in English</strong>, including grade legends and supporting certificates where requested. We do not issue university grades, validate admission eligibility on KAUST&apos;s behalf or guarantee a scholarship.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/services/translation" className="text-emerald-700 font-bold underline text-sm">
                Certified translation services &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/services/translation/urdu-to-english-translation" className="text-emerald-700 font-bold underline text-sm">
                English translation from Urdu &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/pricing" className="text-emerald-700 font-bold underline text-sm">
                Translation pricing &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 font-bold underline text-sm">
                Saudi scholarship guidance &rarr;
              </Link>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              <strong>Need a translation quotation?</strong> Send redacted sample pages and tell us the source language, target language, number of pages and submission deadline. Never share KAUST account passwords or one-time codes.
            </p>
          </div>

          {/* Section 10: FAQs */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                KAUST Fellowship 2027: frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {kaustFaqs.map((faq, index) => (
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

          {/* Section 11: Official sources */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources and verification
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              Verified <strong>5 November 2026</strong>; recheck on publication day and after any university announcements.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2">
              <li><a href="https://admissions.kaust.edu.sa/how-to-apply/admission-timelines" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST official admission timeline — Fall 2027</a></li>
              <li><a href="https://apply.kaust.edu.sa/apply/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST application portal</a></li>
              <li><a href="https://admissions.kaust.edu.sa/fees-funding" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST fees and Fellowship funding</a></li>
              <li><a href="https://admissions.kaust.edu.sa/info-and-contact/faqs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST admissions FAQ</a></li>
              <li><a href="https://admissions.kaust.edu.sa/study" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST programs of study</a></li>
              <li><a href="https://admissions.kaust.edu.sa/how-to-apply/entry-requirements" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST official entry requirements</a></li>
              <li><a href="https://admissions.kaust.edu.sa/info-and-contact/faqs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST admissions FAQs on GPA, transcripts and English tests</a></li>
              <li><a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">King Abdulaziz University — published 16 Sep–6 Oct 2026 Study in Saudi window</a></li>
              <li><a href="https://admissions.kaust.edu.sa/study/ms-phd-degree" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST MS/PhD program information</a></li>
              <li><a href="https://admissions.kaust.edu.sa/how-to-apply/application-process" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST admissions process</a></li>
              <li><a href="https://admissions.kaust.edu.sa/onboarding" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST admitted-student onboarding</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              Independent educational information by LISAN.PK. Universities and government authorities determine eligibility, admission, scholarship outcomes and document acceptance.
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="bg-[#064E3B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Applying for KAUST Fall 2027 from Pakistan?
            </h3>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Ensure your non-English academic transcripts, degree awards and grade legends are accompanied by accurate, certified English translations.
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
