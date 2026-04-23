import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 mb-6 shadow-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                        Embassy Recommended Services
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl mb-6 animate-fade-in-up animate-delay-100">
                        Pakistan’s #1 <span className="text-emerald-600">Arabic Translation</span> Service
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                        Trusted by 100k+ clients for over 40 years. We provide accurate, certified translation and attestation services with doorstep delivery across Pakistan.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-300">
                        <Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 text-base shadow-lg shadow-emerald-600/20">
                                Get a Free Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/services/translation">
                            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-white h-12 text-base">
                                View Services
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
                        <div className="flex items-center">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600" />
                            <span>Embassy Approved</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600" />
                            <span>Same Day Delivery</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle2 className="mr-2 h-5 w-5 text-emerald-600" />
                            <span>100% Accuracy Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
