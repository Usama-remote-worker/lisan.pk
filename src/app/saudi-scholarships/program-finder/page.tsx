import { Metadata } from "next"
import Link from "next/link"
import { ProgramFinderClient } from "@/components/scholarship/ProgramFinderClient"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"
import { HelpCircle, ExternalLink, ArrowRight, ShieldCheck, Info, AlertTriangle, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: {
    absolute: "Saudi University Program Finder for Pakistani Students | LISAN.PK",
  },
  description: "Compare Saudi universities by study level, program, gender eligibility, language and scholarship type. Verify every option in the official Study in Saudi catalogue.",
  alternates: {
    canonical: "https://www.lisan.pk/saudi-scholarships/program-finder",
  },
  openGraph: {
    title: {
      absolute: "Saudi University Program Finder for Pakistani Students | LISAN.PK",
    },
    description: "Compare Saudi universities by study level, program, gender eligibility, language and scholarship type. Verify every option in the official Study in Saudi catalogue.",
    url: "https://www.lisan.pk/saudi-scholarships/program-finder",
    siteName: "Lisan.pk",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const fundingComparison = [
  { label: "Scholarship", meaning: "Official institution or program evidence indicates a scholarship route" },
  { label: "Paid study", meaning: "Official program record identifies a fee-funded/paid option" },
  { label: "Funding not confirmed", meaning: "Available evidence is insufficient to classify this program" },
  { label: "Intake closed", meaning: "Verified announced application window has ended" },
  { label: "Check intake", meaning: "No reliable current opening/deadline data available" }
]

const uniConfusion = [
  {
    uni: "King Saud University",
    short: "KSU",
    caution: "KSU currently specifies SAT 1010 for its published external undergraduate scholarship track; postgraduate rules vary. [4]",
    href: "/scholarships/king-saud-university"
  },
  {
    uni: "King Abdulaziz University",
    short: "KAU",
    caution: "The university announced 16 September–6 October 2026 for a Study in Saudi international intake; it is now closed. [2]",
    href: "/scholarships/king-abdulaziz-university"
  },
  {
    uni: "King Abdullah University of Science and Technology",
    short: "KAUST",
    caution: "Different institution and graduate application system; its official Fall 2027 Round 2 deadline is 3 January 2027. [3]",
    href: "/scholarships/kaust"
  }
]

const finderFaqs = [
  {
    q: "Is the Program Finder an official Saudi government service?",
    a: "No. It is an independent LISAN.PK comparison tool. Official applications and decisions belong to the relevant universities and Study in Saudi (https://studyinsaudi.sa/en). [1]"
  },
  {
    q: "Does a matched program guarantee scholarship approval?",
    a: "No. Eligibility screening and scholarships are competitive and depend on the institution's official assessment."
  },
  {
    q: "Are all programs free?",
    a: "No. Study in Saudi lists paid options as well as scholarship-related opportunities. Always inspect the actual funding category. [1]"
  },
  {
    q: "Does 'open' mean the deadline has not passed?",
    a: "Only when the institution's official current-cycle dates are verified. An available program description does not by itself prove active application intake."
  },
  {
    q: "Does KAUST use the same application window as KAU and KSU?",
    a: "No. KAUST graduate applicants use KAUST's own published admissions timeline and portal. [3]"
  },
  {
    q: "Will LISAN.PK apply on my behalf automatically?",
    a: "No. The finder helps students research programs; it does not submit applications or collect official portal credentials."
  }
]

export default function ProgramFinderPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Saudi University Program Finder for Pakistani Students",
    "description": "Compare Saudi universities by study level, program, gender eligibility, language and scholarship type. Verify every option in the official Study in Saudi catalogue.",
    "url": "https://www.lisan.pk/saudi-scholarships/program-finder",
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lisan.pk/logo.png"
      }
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
      { "@type": "ListItem", "position": 2, "name": "Saudi Scholarships", "item": "https://www.lisan.pk/blog" },
      { "@type": "ListItem", "position": 3, "name": "Program Finder", "item": "https://www.lisan.pk/saudi-scholarships/program-finder" }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": finderFaqs.map(faq => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Crawlable Header and Intro */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-8 font-sans">
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-6 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-emerald-700">Saudi Scholarships</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Program Finder</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 font-sans">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              <span>Independent University Research &bull; Catalogue Search</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              Saudi University Program Finder for Pakistani Students
            </h1>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-sans mb-4">
              <strong>Compare Saudi university programs by qualification level, institution, language, scholarship type and any published gender restrictions.</strong> LISAN.PK&apos;s Program Finder is a research and shortlisting tool, <strong>not</strong> the official application system: a matching result does not prove that applications are currently open, that funding is guaranteed, or that a particular applicant is eligible. Confirm every result on the <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official Study in Saudi program catalogue</a> or the relevant university website. [1]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed mb-6">
              <strong>Information checked: 5 November 2026.</strong> University programs and intake conditions may change without advance notice. The announced Study in Saudi window of <strong>16 September–6 October 2026</strong> is closed; separate university admission cycles may differ. KAUST Fall 2027 graduate applications operate through <strong>KAUST&apos;s own portal</strong>, with a different published deadline. [2][3]
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs md:text-sm text-emerald-950 leading-relaxed">
              <strong>Filter guidance:</strong> Choose your study level and academic interests first. Then check whether a result is listed for international students, whether it is scholarship-funded or fee-based, what study language is used, and whether any program-specific gender rules apply. Open the official program listing before preparing documents or paying for services.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Client Component */}
      <section className="py-8 font-sans">
        <ProgramFinderClient />
      </section>

      {/* Crawlable Structured Content Below Finder */}
      <section className="py-14 bg-white border-t border-slate-200 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Scholarship vs Paid Study */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What is the difference between scholarship and paid study?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A <strong>scholarship</strong> may cover some or all study and living costs, depending on the actual award. <strong>Paid study</strong> requires the student to cover specified costs, and other programs may have funding information that is incomplete or pending. The official Study in Saudi catalogue includes study categories that must not be shown as universally fully funded. A page that simply lists &apos;available&apos; programs may also include courses whose current application window has ended. [1]
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Label in results</th>
                    <th className="p-3.5 font-semibold">What it should mean</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {fundingComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.label}</td>
                      <td className="p-3.5">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Female Students */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Can female Pakistani students apply to Saudi universities?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Yes, many institutions have programs available to female international students, but eligibility is program-specific.</strong> Check the official program&apos;s gender, residency and study-level fields. Do not assume that a university-wide claim of admitting women makes every program available to women, or vice versa. When the underlying record does not confirm eligibility, the finder should show <strong>Not confirmed</strong> rather than guess. [1]
            </p>
          </div>

          {/* Section 3: Three universities students often confuse */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Three universities students often confuse
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">University</th>
                    <th className="p-3.5 font-semibold">Short name</th>
                    <th className="p-3.5 font-semibold">Applications and key caution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {uniConfusion.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900">
                        <Link href={row.href} className="text-emerald-700 underline hover:text-emerald-800">
                          {row.uni}
                        </Link>
                      </td>
                      <td className="p-3.5 font-semibold text-slate-700">{row.short}</td>
                      <td className="p-3.5 text-slate-600">{row.caution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Read the detailed guides:</strong> <Link href="/scholarships/king-saud-university" className="text-emerald-700 underline font-semibold">KSU Scholarships</Link> &bull; <Link href="/scholarships/king-abdulaziz-university" className="text-emerald-700 underline font-semibold">KAU Scholarships</Link> &bull; <Link href="/scholarships/kaust" className="text-emerald-700 underline font-semibold">KAUST Fellowship Fall 2027</Link>.
            </p>
          </div>

          {/* Section 4: How to verify a program before applying */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to verify a program before applying
            </h2>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-700 text-base pl-2">
              <li>Open the selected university&apos;s official listing or <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi program page</a>.</li>
              <li>Confirm the <strong>exact program title</strong>, degree level, faculty and study language.</li>
              <li>Check that the applicant&apos;s <strong>nationality/residency category</strong>, gender and prior qualification fit the stated requirements.</li>
              <li>Read the scholarship/paid-study classification, official fees (if relevant) and application dates.</li>
              <li>Check English/Arabic tests, academic marks, interviews and document format requirements.</li>
              <li>Recheck the information directly on the application day.</li>
              <li>Use only the university&apos;s or Ministry&apos;s official application link for submission.</li>
            </ol>
          </div>

          {/* Section 5: FAQs */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {finderFaqs.map((faq, index) => (
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

          {/* Section 6: Documents and translation guidance */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Documents and translation guidance
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Depending on the university and program, applicants may need educational certificates, transcripts, passports, language scores and certified translations. <strong>Do not assume Arabic translation is mandatory for every scholarship or that every English-language document must be translated again.</strong> Confirm language direction, attestation and document acceptance with the university. [5]
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/blog/saudi-scholarship-eligibility-pakistani-students" className="text-emerald-700 font-bold underline text-sm">
                Scholarship eligibility guide &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/pricing" className="text-emerald-700 font-bold underline text-sm">
                Translation pricing &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/services/translation" className="text-emerald-700 font-bold underline text-sm">
                Certified translation services &rarr;
              </Link>
            </div>
          </div>

          {/* Section 7: Official sources */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2">
              <li><a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi — academic programs catalogue</a></li>
              <li><a href="https://kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAU official 2026 international application announcement</a></li>
              <li><a href="https://admissions.kaust.edu.sa/how-to-apply/admission-timelines" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KAUST official Fall 2027 admission timeline</a></li>
              <li><a href="https://dar.ksu.edu.sa/en/overseas" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">KSU official admissions requirements for non-Saudi students</a></li>
              <li><a href="https://studyinsaudi.sa/en/Faq" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">Study in Saudi FAQ — documents and institutional conditions</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              University and program data are subject to change. No scholarship guarantee, official affiliation, or application-submission service is implied.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
