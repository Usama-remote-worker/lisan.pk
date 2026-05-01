import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100">

            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-8 shadow-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                        Embassy Recommended Services
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-8xl mb-8 animate-fade-in-up animate-delay-100 font-serif">
                        Pakistan’s #1 <br />
                        <span className="text-emerald-600">Arabic Translation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                        Trusted by 100k+ clients for over 40 years. We provide accurate, certified translation and attestation services with doorstep delivery across Pakistan.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-300 mb-16">
                        <Link href="/contact">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 h-16 text-sm font-bold uppercase tracking-widest shadow-2xl shadow-emerald-600/20 rounded-full transition-all duration-300">
                                Get a Free Quote
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-50 h-16 text-sm px-12 rounded-full font-bold uppercase tracking-widest transition-all duration-300">
                                View All Services
                            </Button>
                        </Link>
                    </div>


                    <div className="mt-8 animate-fade-in-up animate-delay-400 space-y-4">
                        <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 font-bold hover:underline text-[15px] flex items-center justify-center gap-2">
                            Looking for Saudi Arabia Fully Funded Scholarship 2026? Click here.
                        </Link>
                        <Link href="/blog/saudia-scholarship-programs-still-open-2026" className="text-slate-400 font-medium hover:text-emerald-600 hover:underline text-[13px] flex items-center justify-center gap-2 transition-colors">
                            Latest Update: Saudia Scholarship Programs Still Open for 2026
                        </Link>
                    </div>

                    <div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-12">
                        <div className="flex items-center">
                            <span>Embassy Approved</span>
                        </div>
                        <div className="flex items-center">
                            <span>Same Day Delivery</span>
                        </div>
                        <div className="flex items-center">
                            <span>100% Accuracy Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

