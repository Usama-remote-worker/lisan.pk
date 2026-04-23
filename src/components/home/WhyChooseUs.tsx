import { Clock, Zap, UserCheck, CheckCircle2 } from "lucide-react"

const features = [
    {
        title: "Over 4 Decades",
        description: "Unmatched expertise in legal and academic Arabic translation since 1980.",
        icon: Clock,
    },
    {
        title: "Fast Turnaround",
        description: "Urgent translation services with same-day digital delivery available.",
        icon: Zap,
    },
    {
        title: "Embassy Approved",
        description: "100% acceptance rate at Saudi, UAE, and other Gulf embassies.",
        icon: UserCheck,
    },
    {
        title: "200% Guarantee",
        description: "Full protection against rejections caused by our translation errors.",
        icon: CheckCircle2,
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">What Makes Lisan.pk Different?</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="p-6 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                            <div className="mb-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
