import { Metadata } from "next"
import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ContactForm } from "@/components/contact/ContactForm"
import { Phone, Mail, Clock, ShieldCheck, FileCheck, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Certified Document Translation Online in Pakistan | LISAN.PK",
  description: "Get a quote for certified document translation online in Pakistan: Urdu, Arabic and English. Documents reviewed before payment. USCIS, UKVI and embassy formats.",
  alternates: {
    canonical: "https://www.lisan.pk/contact",
  },
  openGraph: {
    title: "Request Certified Document Translation Online in Pakistan | LISAN.PK",
    description: "Get a quote for certified document translation online in Pakistan: Urdu, Arabic and English. Documents reviewed before payment. USCIS, UKVI and embassy formats.",
    url: "https://www.lisan.pk/contact",
    type: "website",
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700/80 py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 tracking-wide uppercase">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-300">Contact</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6 leading-[1.15]">
            Request Certified Document Translation Online in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Tell us what document you need translated, the original language, the required language and the receiving authority. You can request a quote for Urdu, Arabic and English documents without ordering an unnecessary service. We will review the details you provide and confirm the available delivery format and price before paid work begins.
          </p>
        </div>
      </section>

      {/* Main Content: Form & Direct Contact */}
      <section className="py-16 container mx-auto px-4 max-w-6xl font-sans">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Callouts (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-serif">Reach Out Directly</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Connect with our translation coordinators online or by phone.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 font-sans">
              <a href="tel:03288155866" className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-700 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-serif text-sm">Call / WhatsApp</h3>
                  <p className="text-base text-emerald-800 font-bold font-mono">0328-8155866</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Quick message or consultation</p>
                </div>
              </a>

              <a href="mailto:lisan.pk.services@gmail.com" className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 text-white rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 font-serif text-sm">Email Support</h3>
                  <p className="text-xs text-slate-800 font-bold font-mono break-all">lisan.pk.services@gmail.com</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Formal document enquiries</p>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 p-5 bg-slate-900 text-white rounded-2xl shadow-md font-sans">
              <div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm font-serif">Availability</h4>
                <p className="text-emerald-100 text-xs font-sans">Request a quote — we will confirm availability and delivery timeframe before work begins.</p>
              </div>
            </div>

            {/* USCIS/NVC contextual callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-sm space-y-3">
              <h3 className="font-bold text-emerald-950 text-base font-serif flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                Translating documents for U.S. immigration?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                USCIS petitions and National Visa Center civil-document processing have different submission rules. Select the receiving authority so we can prepare the translation certification for the intended use. Translation does not guarantee immigration approval.
              </p>
              <div className="space-y-1.5 pt-1 text-xs">
                <Link href="/blog/uscis-marriage-certificate-translation" className="block text-emerald-800 hover:text-emerald-900 font-bold underline">
                  Read the Nikah Nama and NVC guide →
                </Link>
                <Link href="/services/uscis-certified-translation/requirements" className="block text-emerald-800 hover:text-emerald-900 font-bold underline">
                  View USCIS translator certification requirements →
                </Link>
              </div>
            </div>

            {/* Service Coverage Trust Block */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 font-serif text-sm">
                Document-Specific Quality Standards
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Document-specific certified translation
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Prepared for the stated receiving authority
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Signed translator accuracy certification
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Scope and certification confirmed before delivery
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: First-Party Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* SEO-Oriented Introduction Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Online Certified Translation Services in Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Request a quotation for professional document translation from anywhere in Pakistan or abroad. Tell us the language pair, document type and intended use—such as a U.S. immigration petition, NVC upload, university submission or another official process. We can review your request and explain the difference between a certified translation and a separately required attestation, notarisation or apostille. A translation is not an official government-issued record, and acceptance is decided by the receiving institution.
          </p>

          <div className="pt-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Popular Certified Document Services</h3>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <Link href="/services/translation/nikah-nama-marriage-certificate" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-800 hover:text-emerald-900 font-semibold shadow-sm hover:border-emerald-300 transition-colors">
                Nikah Nama and MRC translation
              </Link>
              <Link href="/services/uscis-certified-translation/requirements" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-800 hover:text-emerald-900 font-semibold shadow-sm hover:border-emerald-300 transition-colors">
                USCIS translation requirements
              </Link>
              <Link href="/pricing" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-800 hover:text-emerald-900 font-semibold shadow-sm hover:border-emerald-300 transition-colors">
                Certified translation prices
              </Link>
              <Link href="/services/translation/urdu-to-arabic" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-800 hover:text-emerald-900 font-semibold shadow-sm hover:border-emerald-300 transition-colors">
                Urdu to Arabic translation
              </Link>
              <Link href="/services/translation/arabic-to-english" className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-emerald-800 hover:text-emerald-900 font-semibold shadow-sm hover:border-emerald-300 transition-colors">
                Arabic to English translation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
