"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const reviews = [
    {
        id: 1,
        name: "Muhammad Usman",
        date: "2 days ago",
        rating: 5,
        text: "Excellent service! I needed my degree attested for a Saudi work visa urgently. They handled everything from HEC to MOFA and the Embassy. Got it back within the promised time. Highly recommended for professionalism.",
        avatar: "M"
    },
    {
        id: 2,
        name: "Sarah Ahmed",
        date: "1 week ago",
        rating: 5,
        text: "Very cooperative staff. I contacted them for Arabic translation of my marriage certificate. The translation was accurate and accepted by the UAE embassy without any objection. Doorstep delivery was a lifesaver.",
        avatar: "S"
    },
    {
        id: 3,
        name: "Ali Hassan",
        date: "3 weeks ago",
        rating: 5,
        text: "Best consultancy for Saudi scholarships. They guided me perfectly for the KSU application. The team is very knowledgeable about the requirements. Thank you Lisan.pk!",
        avatar: "A"
    },
    {
        id: 4,
        name: "Zainab Bibi",
        date: "1 month ago",
        rating: 5,
        text: "I needed my birth certificate translated for a UK visa. The team was very professional and delivered the certified translation within 24 hours. Great experience!",
        avatar: "Z"
    },
    {
        id: 5,
        name: "Fahad Mustafa",
        date: "1 month ago",
        rating: 5,
        text: "Highly reliable for Police Clearance Certificate attestation. They managed the entire MOFA process while I was busy with work. Saved me so much time.",
        avatar: "F"
    },
    {
        id: 6,
        name: "Oman Trading Co",
        date: "2 months ago",
        rating: 5,
        text: "We regularly use Lisan.pk for our business contract translations. Their legal terminology is always precise, and they handle bulk orders efficiently.",
        avatar: "O"
    }
]

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 400
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" })
            }
        }
    }

    return (
        <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1 text-emerald-600 font-bold text-xl font-serif">
                                4.9
                            </div>
                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                                Verified Google Reviews
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 font-serif">
                            Trusted by Students & Professionals
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Over 40 years of building trust through precision and reliability. Here is what our clients say about our institutional service standards.
                        </p>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("left")}
                            className="rounded-full w-14 h-14 border-slate-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("right")}
                            className="rounded-full w-14 h-14 border-slate-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="min-w-[320px] md:min-w-[440px] bg-white p-10 rounded-[2.5rem] border border-slate-100 relative hover:shadow-2xl transition-all duration-500 snap-center flex flex-col group"
                            >
                                <div className="mb-8">
                                    <div className="text-emerald-600 font-bold text-sm uppercase tracking-[0.2em] mb-4">Excellent Service</div>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium italic group-hover:text-slate-900 transition-colors">
                                        "{review.text}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-8 border-t border-slate-50">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold shrink-0 text-lg">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{review.name}</p>
                                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


