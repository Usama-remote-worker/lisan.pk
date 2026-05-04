const features = [
    {
        title: "Over 4 Decades",
        description: "Unmatched expertise in legal and academic Arabic translation since 1980.",
    },
    {
        title: "Fast Turnaround",
        description: "Urgent translation services with same-day digital delivery available.",
    },
    {
        title: "Embassy Approved",
        description: "100% acceptance rate at Saudi, UAE, and other Gulf embassies.",
    },
    {
        title: "200% Guarantee",
        description: "Full protection against rejections caused by our translation errors.",
    },
]

import { ScrollReveal } from "@/components/animations/ScrollReveal"

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">Why Authorities Trust Lisan.pk</h2>
                        <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={feature.title} delay={index * 0.1}>
                            <div className="p-8 rounded-[2rem] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-emerald-100 flex flex-col h-full group">
                                <div className="mb-6">
                                    <div className="text-5xl font-black text-emerald-900/30 mb-4 tabular-nums group-hover:text-emerald-600 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">{feature.title}</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-[15px]">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

