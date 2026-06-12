import React from "react"
import { 
  FileUp, 
  FileSearch, 
  CreditCard, 
  FileEdit, 
  CheckCircle2, 
  ChevronRight 
} from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

const steps = [
  {
    n: "01",
    title: "Submit Document",
    desc: "Send scanned documents or clear photos via WhatsApp or our secure quote form.",
    icon: FileUp,
  },
  {
    n: "02",
    title: "Review & Quote",
    desc: "We analyze details, confirm language requirements, and send a quotation.",
    icon: FileSearch,
  },
  {
    n: "03",
    title: "Payment Details",
    desc: "Proceed with the payment using our bank account details or mobile wallets.",
    icon: CreditCard,
  },
  {
    n: "04",
    title: "Draft Review",
    desc: "Review the initial draft to verify name spellings, dates, and accuracy.",
    icon: FileEdit,
  },
  {
    n: "05",
    title: "Certified Delivery",
    desc: "Receive the signed & stamped certified PDF (email) and hard copies (courier).",
    icon: CheckCircle2,
  },
]

export function TranslationProcess() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100/60 px-4 py-1.5 rounded-full border border-emerald-200/50">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-5 font-serif tracking-tight">
              How We Process Your Translation
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              A simple, reliable, and fully transparent 5-step workflow designed to ensure absolute accuracy and legal compliance.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 -translate-y-12 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <ScrollReveal key={step.n} delay={idx * 0.1}>
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col h-full group relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-2 bg-slate-900 text-emerald-400 font-black text-xs px-3 py-1 rounded-full border border-slate-800 tabular-nums shadow-md">
                      STEP {step.n}
                    </div>

                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors mt-2">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Step Details */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {step.desc}
                    </p>

                    {/* Arrow between steps (desktop only, except for the last item) */}
                    {idx < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-12 w-4 h-4 items-center justify-center text-slate-300">
                        <ChevronRight className="w-5 h-5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
