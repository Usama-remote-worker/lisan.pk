import { Button } from "@/components/ui/button"
import Link from "next/link"

import { PageHero } from "@/components/ui/PageHeader"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <PageHero
        title="About Us"
        description="Over 40 years of excellence in Arabic translation and attestation services."
        breadcrumbs={[
          { label: "About" }
        ]}
      />
      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Connecting People Through Language
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Lisan (لسان) – meaning "tongue" or "language" in Arabic – perfectly captures our mission: connecting people, cultures, and opportunities through precise and heartfelt communication.
          </p>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                The Story of Muhammad Iftikhar Zahid <span className="text-slate-500 text-lg font-normal ml-2">(Founder & CEO)</span>
              </h3>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Muhammad Iftikhar Zahid was born in Sargodha, Pakistan, but his love for learning took him to Lahore at a very young age. There, Arabic became more than just a subject – it was his favorite, a deep passion that lit up his studies. He went on to earn his MA in Arabic and MA in Islamiyat, building a strong foundation in the language he cherished.
                </p>
                <p className="mb-4">
                  Even before completing his degrees in the late 1980s, he was already putting his skills to work. As a young man, his exceptional command of Arabic led him to collaborate with Arab professionals and companies in Pakistan. What began as a heartfelt interest soon turned into a lifelong profession.
                </p>
                <p>
                  Today, through Lisan.pk, he continues this family-like tradition of service – treating every client as part of an extended family, with warmth, confidentiality, and personal attention.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-story-elegant.png"
                alt="Muhammad Iftikhar Zahid working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Introduction */}
        <div className="mb-20 text-center bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              With decades of experience, we offer reliable, professional support tailored to your needs
            </p>
          </div>
        </div>

        {/* Translation Services Block - Image Left */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-translation-gen.png"
                alt="Certified Translation Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Professional Translation Services</h4>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Languages: Arabic ↔ English ↔ Urdu, plus German ↔ English and Turkish ↔ English</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>All niches covered: Legal, medical, academic, business, technical, religious, personal documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Certified and notarized translations for official use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Urgent and high-volume projects welcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* German Translation Block - Image Right */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">German Translation Support</h4>
              <p className="text-lg text-slate-600 mb-6">
                Germany is a prime destination for education and employment. We bridge the language gap for students and professionals heading to Deutschland.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Valid translations for German Embassy & Universities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Translation of academic degrees, transcripts, and certificates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>CV and Cover Letter translation for job seekers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Fast track services available for urgent applications</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-german.png"
                alt="German Translation Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Turkish Translation Block - Image Left */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-turkish.png"
                alt="Turkish Translation Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Turkish Translation Services</h4>
              <p className="text-lg text-slate-600 mb-6">
                Whether for tourism, business, or education, our Turkish translation services ensure your documents meet all official requirements.
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Official translations for Turkish visa and residency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Business contract and trade document translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Property purchase and legal document translation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Accurate and culturally nuanced translation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scholarship Assistance Block - Image Right (Alternating) */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Saudi University Scholarship Assistance</h4>
              <p className="text-lg text-slate-600 mb-6">
                Every year, hundreds of Pakistani students chase dreams of studying in Saudi Arabia&apos;s top universities. With over 40 years of expertise in Arabic documentation and Saudi systems, Muhammad Iftikhar Zahid provides personal guidance:
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Full document preparation and accurate translations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Application support, equivalence certificates, recommendation letters, and personal statements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Experience with prestigious institutions like King Abdulaziz University, King Saud University, and Islamic University of Madinah</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Helping students secure fully funded scholarships and turn aspirations into reality</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-scholarship-gen.png"
                alt="Saudi Scholarship Assistance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hajj & Umrah Block - Image Left (Alternating) */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-full min-h-[400px]">
              <img
                src="/images/about-hajj-gen.png"
                alt="Hajj and Umrah Documentation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Hajj & Umrah Documentation Support</h4>
              <p className="text-lg text-slate-600 mb-6">
                Make your spiritual journey peaceful and hassle-free with our expert documentation services:
              </p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Visa applications with precise translations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Medical certificates, vaccination records, and mahram documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Travel itineraries and accommodation proofs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1 min-w-4">•</span>
                  <span>Full compliance with the latest Saudi requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-emerald-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Why Choose Lisan.pk?</h3>
            <p className="text-lg text-emerald-100 mb-10 leading-relaxed">
              Because every document tells a story – of education, faith, family, or opportunity. Muhammad Iftikhar Zahid has spent his life honoring those stories with trust, expertise, and the warmth of someone who truly cares.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-emerald-900 hover:bg-emerald-50 min-w-[200px] h-12 text-lg border-none">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="https://wa.me/923034041132" target="_blank">
                <Button variant="outline" className="border-emerald-500 text-emerald-100 hover:bg-emerald-800 hover:text-white min-w-[200px] h-12 text-lg bg-transparent">
                  WhatsApp Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
