import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/home/Hero"
import { TrustSection } from "@/components/home/TrustSection"
import { ServiceGrid } from "@/components/home/ServiceGrid"
import { AttestationList } from "@/components/home/AttestationList"
import { BlogPreview } from "@/components/home/BlogPreview"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <Hero />
      <TrustSection />
      <ServiceGrid />
      <AttestationList />
      <BlogPreview />
      <Footer />
    </main>
  )
}
