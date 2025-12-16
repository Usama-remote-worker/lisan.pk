import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-emerald-800 mb-8">About Us</h1>
        <div className="prose prose-lg text-slate-600 max-w-4xl">
          <p className="mb-6">
            At our company, we specialize in providing high-quality Arabic translation services, backed by over 40 years of dedicated experience in the field. We take pride in delivering accurate and reliable translations that meet the highest standards of professionalism.
          </p>
          <p className="mb-6">
            Our services are guaranteed and recommended by embassies, ensuring that your translated documents are officially accepted for legal, immigration, educational, and business purposes. Over the years, we have assisted countless individuals and corporate clients, both internationally and within Pakistan, with their translation needs.
          </p>
          <p className="mb-6">
            For added convenience, we offer doorstep services in all major cities across Pakistan, allowing you to receive prompt and efficient support without leaving your home or office. Every document we translate is carefully reviewed, officially signed, and stamped by our company to affirm its authenticity and reliability.
          </p>
          <p>
            We are committed to earning your trust through consistent quality, attention to detail, and a client-focused approach. Whether you are an individual or a business, we look forward to assisting you with your Arabic translation requirements.
          </p>
        </div>
        <div className="mt-8">
          <Link href="https://wa.me/923034041132" target="_blank">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Contact Us via WhatsApp
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
