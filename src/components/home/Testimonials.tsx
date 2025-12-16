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
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 mb-4 bg-orange-50 rounded-full">
                        <div className="flex text-orange-400">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="ml-2 text-sm font-medium text-orange-700">Excellent 4.9/5 Rating</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here is what our satisfied clients have to say about our translation and attestation services.
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons for Desktop */}
                    <div className="hidden lg:flex justify-end gap-2 mb-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("left")}
                            className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("right")}
                            className="rounded-full hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="min-w-[300px] md:min-w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 relative hover:shadow-lg transition-all snap-center flex flex-col"
                            >
                                <Quote className="absolute top-8 right-8 w-8 h-8 text-emerald-100 fill-current" />

                                <div className="flex items-center gap-1 mb-6 text-orange-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>

                                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold shrink-0">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900">{review.name}</p>
                                        <p className="text-sm text-slate-400">{review.date}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <div className="text-xs font-bold text-slate-300">Google Review</div>
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

