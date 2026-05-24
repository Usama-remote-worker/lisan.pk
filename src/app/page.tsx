import { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { DocumentTranslationGrid } from "@/components/home/DocumentTranslationGrid"
import { B2BTravelSection } from "@/components/home/B2BTravelSection"
import { AttestationList } from "@/components/home/AttestationList"
import { StudyAbroadPromo } from "@/components/home/StudyAbroadPromo"
import { TestimonialSection } from "@/components/home/TestimonialSection"
import { FaqSection } from "@/components/home/FaqSection"
import { BlogPreview } from "@/components/home/BlogPreview"
import { TrustSection } from "@/components/home/TrustSection"
import { LocationGrid } from "@/components/home/LocationGrid"
import { FadeIn } from "@/components/ui/fade-in"
import { JsonLd } from "@/components/seo/JsonLd"
import { getSortedPostsData } from "@/lib/blog"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lisan.pk",
  "url": "https://www.lisan.pk",
  "logo": "https://www.lisan.pk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923044296295",
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
  "image": "https://www.lisan.pk/images/hero-bg.jpg",
  "@id": "https://www.lisan.pk",
  "url": "https://www.lisan.pk",
  "telephone": "+923044296295",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressRegion": "Punjab",
    "addressCountry": "PK"
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
    "closes": "20:00"
  },
  "sameAs": [
    "https://facebook.com/lisanpk"
  ]
};


export default async function Home() {
  const posts = await getSortedPostsData()

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <FadeIn>
        <Hero />
      </FadeIn>

      <TrustSection />

      <DocumentTranslationGrid />
      
      <B2BTravelSection />
      
      <AttestationList />

      {/* Premium Study Abroad Turkey Section */}
      <StudyAbroadPromo />

      <LocationGrid />
      <TestimonialSection />
      <FaqSection />

      <BlogPreview posts={posts} />
    </main>
  )
}
