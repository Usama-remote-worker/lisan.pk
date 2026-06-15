import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/home/Hero"
import { FadeIn } from "@/components/ui/fade-in"
import { JsonLd } from "@/components/seo/JsonLd"
import { getSortedPostsData } from "@/lib/blog"

// Dynamically import below-the-fold components to improve mobile LCP and TTI
const DocumentTranslationGrid = dynamic(() => import("@/components/home/DocumentTranslationGrid").then(mod => mod.DocumentTranslationGrid))
const B2BTravelSection = dynamic(() => import("@/components/home/B2BTravelSection").then(mod => mod.B2BTravelSection))
const AttestationList = dynamic(() => import("@/components/home/AttestationList").then(mod => mod.AttestationList))
const StudyAbroadPromo = dynamic(() => import("@/components/home/StudyAbroadPromo").then(mod => mod.StudyAbroadPromo))
const TestimonialSection = dynamic(() => import("@/components/home/TestimonialSection").then(mod => mod.TestimonialSection))
const FaqSection = dynamic(() => import("@/components/home/FaqSection").then(mod => mod.FaqSection))
const BlogPreview = dynamic(() => import("@/components/home/BlogPreview").then(mod => mod.BlogPreview))
const TrustSection = dynamic(() => import("@/components/home/TrustSection").then(mod => mod.TrustSection))
const LocationGrid = dynamic(() => import("@/components/home/LocationGrid").then(mod => mod.LocationGrid))

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
