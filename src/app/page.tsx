import { Hero } from "@/components/home/Hero"
import { DocumentTranslationGrid } from "@/components/home/DocumentTranslationGrid"
import { AttestationList } from "@/components/home/AttestationList"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { FaqSection } from "@/components/home/FaqSection"
import { BlogPreview } from "@/components/home/BlogPreview"
import { TrustSection } from "@/components/home/TrustSection"
import { FadeIn } from "@/components/ui/fade-in"
import { JsonLd } from "@/components/seo/JsonLd"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lisan.pk",
  "url": "https://lisan.pk",
  "logo": "https://lisan.pk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+92-303-404-1132",
    "contactType": "customer service",
    "areaServed": "PK",
    "availableLanguage": ["English", "Arabic", "Urdu"]
  },
  "sameAs": [
    "https://facebook.com/lisanpk",
    "https://twitter.com/lisanpk"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lisan.pk - Arabic Translation & Attestation",
  "image": "https://lisan.pk/images/hero-bg.jpg",
  "@id": "https://lisan.pk",
  "url": "https://lisan.pk",
  "telephone": "+923044296295",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Saqib Translation Centre, Jamia Ashrafia, Muslim Town, Ferozpur Road",
    "addressLocality": "Lahore",
    "postalCode": "54600",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.5175,
    "longitude": 74.3256
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://facebook.com/lisanpk"
  ]
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <FadeIn>
        <Hero />
      </FadeIn>

      <TrustSection />


      <DocumentTranslationGrid />
      <AttestationList />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <BlogPreview />
    </main>
  )
}
