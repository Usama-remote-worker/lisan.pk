import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"
import { ShieldCheck, Award, Clock, Users, CheckCircle, Search, FileText, Check, ArrowRight, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
    title: "About Lisan.pk: 40+ Years of Arabic Translation Expertise",
    description: "Learn how Lisan.pk became Pakistan’s #1 trusted name for Arabic translation and embassy attestation. Led by MA Arabic experts with a 40-year legacy.",
    alternates: {
        canonical: "https://www.lisan.pk/about",
    },
}

// JSON-LD structured data for the page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lisan.pk",
  "url": "https://www.lisan.pk",
  "logo": "https://www.lisan.pk/logo.png",
  "foundingDate": "1984",
  "founder": {
    "@type": "Person",
    "name": "Muhammad Iftikhar Zahid",
    "educationalCredential": "MA in Arabic and Islamiyat"
  },
  "description": "40+ years of certified Arabic translation in Pakistan. MA Arabic qualified. 200% guarantee. Accepted by MOFA, HEC, Saudi and UAE embassies.",
  "areaServed": "Pakistan",
  "knowsLanguage": ["Urdu", "Arabic", "English"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Translation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nikah Nama Translation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Degree Attestation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Police Certificate Translation"
        }
      }
    ]
  }
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-[1280px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-900 mb-6 font-serif leading-tight">
              40+ Years of Certified Arabic Translation in Pakistan – MA Arabic Qualified
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-6 font-medium leading-relaxed max-w-xl">
              We translate nikah nama, degrees, and police certificates for Saudi, UAE, and Gulf visas – with a 200% guarantee if rejected due to our error.
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              Lisan (لسان) – meaning "tongue" or "language" in Arabic. For over 40 years, we have been Pakistan's trusted voice for embassy‑ready translation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="w-full sm:w-auto">
                <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white min-w-[200px] h-14 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                  Our Certified Services
                </Button>
              </Link>
              <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20read%20about%20your%20services%20and%20would%20like%20to%20know%20more." target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-2 border-emerald-700 text-emerald-800 hover:bg-emerald-50 min-w-[200px] h-14 text-lg font-bold transition-all bg-white">
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-64 md:h-[450px] rounded-2xl bg-emerald-50 overflow-hidden relative shadow-lg">
            <img 
              alt="Vintage typewriter marking 40+ years of translation legacy" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKiscN2FFIY96QUQBv1Nmywfnk68AK8qtOU3sJUKXqYRn0SU15fe8_TgpCmWfUDUwfCqA3q2Jf0jl1dn0Imzfgfy-bhjdrm2em0giaB-T9DTrhkYHWCJX3vx7KDd_VqpEScz5Yl0OWQcq6iRBFnx-ibdT2LGSyosJEdzJLlSUxZ5OYzFGDCeS93JzuJVAwf4J9veQatxrAiDrQIc-4DpiG1fT9HTX1fwfi-rx_HWjIn_fffX3RnT2kdF0kwagDbqmTgrfz53cbxbE"
            />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in zoom-in duration-700 delay-100">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">40+</div>
              <div className="text-slate-600 font-medium tracking-wide">Years Experience</div>
            </div>
            <div className="text-center animate-in fade-in zoom-in duration-700 delay-200">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">10,000+</div>
              <div className="text-slate-600 font-medium tracking-wide">Documents Translated</div>
            </div>
            <div className="text-center animate-in fade-in zoom-in duration-700 delay-300">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">100%<span className="text-2xl align-top">*</span></div>
              <div className="text-slate-600 font-medium tracking-wide">Embassy Acceptance</div>
            </div>
            <div className="text-center animate-in fade-in zoom-in duration-700 delay-400">
              <div className="text-4xl md:text-5xl font-bold text-emerald-900 mb-2">4.9/5</div>
              <div className="text-slate-600 font-medium tracking-wide">Client Rating</div>
            </div>
          </div>
          <p className="text-center mt-10 text-sm text-slate-500 italic max-w-2xl mx-auto">
            *Based on verified client records since 2015. Individual results may vary.
          </p>
        </div>
      </section>

      {/* Founder Legacy Section */}
      <section className="py-24 container mx-auto px-4 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-900 mb-8 font-serif leading-tight">
              The Legacy of Muhammad Iftikhar Zahid – MA Arabic & Islamiyat
            </h2>
            <div className="prose prose-lg text-slate-700 max-w-none">
              <p>
                Born in Sargodha, Pakistan, Muhammad Iftikhar Zahid’s passion for Arabic emerged early in life. This deep devotion led him to Lahore, where he pursued an MA in Arabic and an MA in Islamiyat, mastering the intricacies of a language that would define his life's work.
              </p>
              <p>
                In the late 1980s, his exceptional linguistic command drew the attention of Arab professionals and companies operating in Pakistan. What began as a personal passion soon blossomed into a vital link between two cultures.
              </p>
              <p>
                Over four decades later, Mr. Zahid continues to personally oversee Lisan.pk. Every Arabic translation is still reviewed by Mr. Zahid – an MA Arabic holder. He maintains a family-like tradition of service, treating every client's document with the utmost confidentiality, precision, and care. His signature on a translation guarantees uncompromising quality and undisputed acceptance.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[500px] relative animate-in fade-in zoom-in duration-700">
            <img
              src="/images/about-story-elegant.png"
              alt="Muhammad Iftikhar Zahid working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* The 200% Guarantee Section */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="border-2 border-emerald-500 bg-white p-10 md:p-16 rounded-2xl shadow-xl relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider shadow-md whitespace-nowrap">
              Industry Exclusive
            </div>
            <div className="text-center mb-10">
              <ShieldCheck className="w-16 h-16 text-emerald-700 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-emerald-900 mb-6">The 200% Guarantee – No Risk to You</h2>
              <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                We stand firmly behind our work. If your translated document is rejected by a Saudi or UAE embassy due to our error, we will:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Check className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">100% Protection</h3>
                </div>
                <p className="text-slate-700 text-lg">Correct the translation immediately and refund that portion of your project.</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Check className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900">200% Commitment</h3>
                </div>
                <p className="text-slate-700 text-lg">Refund double your payment or redo the translation for free + pay your courier costs.</p>
              </div>
            </div>
            
            <p className="text-center text-xl font-bold text-emerald-800">Absolute accuracy is our standard, not a premium feature.</p>
          </div>
        </div>
      </section>

      {/* The Truth About "Certified" Translation in Pakistan */}
      <section className="bg-emerald-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-[1280px]">
          <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur border border-white/10 p-8 md:p-12 rounded-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <Award className="w-12 h-12 text-emerald-400 flex-shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">The Truth About "Certified" Translation in Pakistan</h2>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-emerald-50 mb-6 leading-relaxed">
                Unlike the UK, US, or Australia, the Government of Pakistan does not issue an official license for "Sworn Translators." There is no national registry or specific government badge for translators.
              </p>
              <p className="text-xl text-emerald-50 mb-8 leading-relaxed">
                Instead, a translation is deemed "certified" based purely on the credibility, academic qualifications, and reputation of the translator as stamped on their official letterhead.
              </p>
              <div className="bg-white/10 rounded-2xl p-6 border-l-4 border-emerald-400 mb-8">
                <p className="text-xl text-white font-medium m-0">
                  This is why Lisan.pk is uniquely trusted. With 40+ years of flawless standing, verifiable MA Arabic qualifications, and a track record of 100% acceptance by MOFA and foreign embassies, our letterhead carries the weight of unquestionable authority.
                </p>
              </div>
              <Link href="/why-no-license" className="inline-flex items-center text-emerald-200 hover:text-white font-bold text-lg group transition-colors">
                [Learn more about why Pakistan has no official translator license →]
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Officially Recognized & Accepted By */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-[1280px]">
           <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
               <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-12 font-serif">Officially Recognized & Accepted By</h2>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                 {['MOFA Pakistan', 'HEC Pakistan', 'Saudi Embassy', 'UAE Embassy', 'Qatar Embassy', 'Oman Embassy', 'German Embassy', 'Turkish Embassy'].map((auth, i) => (
                    <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-emerald-900 font-bold text-lg flex items-center justify-center text-center hover:border-emerald-500 hover:shadow-md transition-all">
                      {auth}
                    </div>
                 ))}
               </div>
               <p className="mt-10 text-slate-500 italic max-w-3xl mx-auto">
                 Our translations comply fully with the strict regulations of these domestic ministries and international diplomatic missions.
               </p>
           </div>
        </div>
      </section>

      {/* Our 4-Step Quality Process */}
      <section className="py-24 container mx-auto px-4 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 font-serif">Our 4-Step Quality Process – Zero Room for Error</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] w-[80%] h-[2px] bg-slate-200 -z-10 rounded-full"></div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 text-center transition-transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Assessment</h3>
            <p className="text-slate-600 leading-relaxed">We analyze your document's structure, legal nuances, and the exact target country requirements.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 text-center transition-transform hover:-translate-y-2">
             <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Translation</h3>
            <p className="text-slate-600 leading-relaxed">Drafting is meticulously handled by our MA-qualified experts with deep cultural contextual knowledge.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 text-center transition-transform hover:-translate-y-2">
             <div className="w-20 h-20 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Proofreading</h3>
            <p className="text-slate-600 leading-relaxed">Names, dates, and sensitive details are rigorously double-checked against passports, ID cards, and official data.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative z-10 text-center transition-transform hover:-translate-y-2">
             <div className="w-20 h-20 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-white shadow-md">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Certification</h3>
            <p className="text-slate-600 leading-relaxed">The final document is stamped, signed on official letterhead, sealed, and securely delivered to you.</p>
          </div>
        </div>
      </section>

      {/* What Drives Us (Core Values) */}
      <section className="bg-slate-100 py-24">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 font-serif">What Drives Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 group">
              <ShieldCheck className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Absolute Accuracy</h3>
              <p className="text-slate-700">A single typo can ruin a visa application. We translate with pinpoint precision and zero compromises.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 group">
              <Award className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Cultural Nuance</h3>
              <p className="text-slate-700">We don't just translate words; we adapt legal conventions and academic phrasing perfectly for the target.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 group">
              <Clock className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Rapid Turnaround</h3>
              <p className="text-slate-700">Flight deadlines matter. We deliver on time, supporting urgent and same-day cases.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-emerald-300 group">
              <Users className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Total Confidentiality</h3>
              <p className="text-slate-700">Your sensitive documents (FRC, Police Records, degrees) are safe with us. We maintain absolute privacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Certified Services */}
      <section className="py-24 container mx-auto px-4 max-w-[1280px]">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 font-serif">Explore Our Certified Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <Link href="/services/translation/nikah-nama" className="group p-8 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-emerald-600 hover:shadow-lg transition-all duration-300 bg-white">
                <span className="font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">Nikah Nama Translation for Saudi Visa</span>
                <ArrowRight className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-transform w-6 h-6" />
             </Link>
             <Link href="/services/attestation/degree" className="group p-8 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-emerald-600 hover:shadow-lg transition-all duration-300 bg-white">
                <span className="font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">Degree Attestation for UAE</span>
                <ArrowRight className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-transform w-6 h-6" />
             </Link>
             <Link href="/services/translation/police-certificate" className="group p-8 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-emerald-600 hover:shadow-lg transition-all duration-300 bg-white">
                <span className="font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">Police Certificate Translation for Qatar</span>
                <ArrowRight className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-transform w-6 h-6" />
             </Link>
             <Link href="/services/translation/birth-certificate" className="group p-8 border border-slate-200 rounded-2xl flex items-center justify-between hover:border-emerald-600 hover:shadow-lg transition-all duration-300 bg-white">
                <span className="font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">Birth Certificate (FRC) Translation</span>
                <ArrowRight className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-transform w-6 h-6" />
             </Link>
             
             <Link href="/services/translation" className="group md:col-span-2 mt-6 text-center text-emerald-800 font-bold text-xl hover:text-emerald-900 transition-colors py-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center gap-2">
                 View All Services & Languages <ExternalLink className="w-5 h-5" />
             </Link>
          </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-[1280px]">
          <div className="bg-[#064E3B] rounded-[2.5rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Trust 40 Years of Excellence</h2>
              <p className="text-xl text-emerald-50 mb-12 leading-relaxed max-w-3xl mx-auto">
                Don't risk visa rejections or delays with unverified translators. Partner with the most trusted name in certified Arabic translation in Pakistan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-emerald-900 hover:bg-slate-100 min-w-[220px] h-14 text-lg font-bold shadow-lg transition-all">
                  Reach out to us
                </Button>
              </Link>
                <Link href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20read%20about%20your%20services%20and%20would%20like%20to%20know%20more." target="_blank" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 min-w-[220px] h-14 text-lg font-bold bg-transparent transition-all">
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
