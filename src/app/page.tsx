import { Hero } from "@/components/home/Hero"
import { DocumentTranslationGrid } from "@/components/home/DocumentTranslationGrid"
import { AttestationList } from "@/components/home/AttestationList"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { FaqSection } from "@/components/home/FaqSection"
import { BlogPreview } from "@/components/home/BlogPreview"
import { TrustSection } from "@/components/home/TrustSection"
import { FadeIn } from "@/components/ui/fade-in"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
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
