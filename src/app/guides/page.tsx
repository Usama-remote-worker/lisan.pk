import { Metadata } from "next"
import Link from "next/link"
import { FileText, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Official Document & Translation Guides | LISAN.PK",
  description: "Comprehensive step-by-step guides on Pakistani document attestation, MOFA online procedures, e-Certificates, apostille registration, and certified translation requirements.",
  alternates: {
    canonical: "https://www.lisan.pk/guides",
  },
}

export default function GuidesIndexPage() {
  const guides = [
    {
      title: "Certified Translation vs Notarization vs Attestation vs Apostille in Pakistan (2026)",
      description: "Understand the critical differences between a private certified translation, a notary stamp, departmental attestation (HEC/IBCC), MOFA General Attestation, and a Hague Apostille in Pakistan. Clarifies legal weight, typical sequence, and country-specific rules.",
      href: "/guides/certified-translation-vs-apostille-pakistan",
      updated: "5 November 2026",
      tag: "Decision Guide (A:T46)",
    },
    {
      title: "Apostille in Pakistan (2026): MOFA Registration, Fees, Documents & Verification",
      description: "Complete guide to obtaining a Pakistani apostille under the Hague Convention: mandatory MOFA online registration, fees by category, prerequisite verifications, authorised couriers, and translation sequence.",
      href: "/guides/apostille-pakistan",
      updated: "5 November 2026",
      tag: "Hague Apostille (B:T02)",
    },
    {
      title: "MOFA Online Attestation in Pakistan (2026): Step-by-Step Guide",
      description: "How to use the official MOFA applicant portal, apply for General Attestation or Apostille, understand the October 2026 digital e-Certificate system, courier drop-offs, and pre-attestation requirements.",
      href: "/guides/mofa-online-attestation",
      updated: "3 November 2026",
      tag: "Attestation & Apostille",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Breadcrumb */}
        <nav className="text-xs font-medium text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Guides</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Process Guides & Resources
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 tracking-tight">
            Document Preparation & Attestation Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Independent, step-by-step guides helping applicants navigate Pakistani government portals, MOFA attestation, Apostille requirements, and certified translations.
          </p>
        </header>

        {/* Guides List */}
        <section className="space-y-6">
          {guides.map((guide) => (
            <article 
              key={guide.href}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {guide.tag}
                  </span>
                  <span className="text-xs text-slate-400">
                    Updated {guide.updated}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 hover:text-emerald-800 transition-colors">
                  <Link href={guide.href}>
                    {guide.title}
                  </Link>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={guide.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  Read complete guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Support Section */}
        <section className="bg-emerald-900 text-white p-8 rounded-3xl space-y-4 shadow-sm">
          <h2 className="text-xl font-bold font-serif">Need Certified Translation for Your Attested or Apostilled Documents?</h2>
          <p className="text-emerald-100 text-sm leading-relaxed max-w-2xl">
            LISAN.PK provides certified English and Arabic translations for civil records, degrees, and legal documents required for MOFA, embassy submissions, and overseas immigration.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/services/attestation"
              className="inline-flex items-center gap-2 bg-white text-emerald-950 font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
            >
              Attestation Translation Support
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-800 transition-colors"
            >
              Contact LISAN.PK
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
