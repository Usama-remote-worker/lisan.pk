"use client"

import { ScrollReveal } from "@/components/animations/ScrollReveal"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        name: "Muhammad Ahsan Hassan",
        role: "Scholarship Applicant",
        text: "Lisan.pk handled my entire document set—Result Card, Recommendation Letter, and Medical. The Arabic translation was flawless and portal-ready.",
        city: "Rahim Yar Khan"
    },
    {
        name: "Dr. Fatima",
        role: "PhD Researcher",
        text: "Used Lisan.pk for my PhD degree attestation. The service was professional, and they handled everything from MOFA to Embassy.",
        city: "Karachi"
    },
    {
        name: "Usman Ali",
        role: "Student",
        text: "Same-day delivery in Islamabad helped me meet a very tight deadline for Madinah University. Highly recommended!",
        city: "Islamabad"
    }
]

const sampleDocs = [
    {
        title: "Academic Recommendation Letter",
        arabicTitle: "خطاب التوصية",
        src: "/recommendation-letter.png?v=3"
    },
    {
        title: "Matric / Secondary Result Card",
        arabicTitle: "بطاقة النتيجة",
        src: "/result-card.png?v=3"
    },
    {
        title: "Verified Medical Certificate",
        arabicTitle: "الشهادة الطبية",
        src: "/medical-certificate.png?v=3"
    }
]

export function TestimonialSection() {
    const [selectedDoc, setSelectedDoc] = useState<typeof sampleDocs[0] | null>(null)

    return (
        <section className="py-24 bg-white overflow-hidden select-none font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif tracking-tight">Success Verified by Results</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            Join 100,000+ satisfied clients. We don't just translate; we ensure your documents are portal-ready and embassy-approved.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Secure Document Portfolio */}
                <div className="mb-24">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-10 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl">
                            <span className="text-emerald-600 font-extrabold text-sm">✓</span>
                            <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-widest">
                                Secure Portfolio: Interactive samples protected by Lisan.pk Security protocols.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {sampleDocs.map((doc, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="group relative cursor-zoom-in" onClick={() => setSelectedDoc(doc)}>
                                    <div 
                                        className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-50 shadow-lg group-hover:shadow-2xl transition-all duration-500"
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        {/* Document Image - Clean View */}
                                        <div className="absolute inset-0">
                                            <Image 
                                                src={doc.src} 
                                                alt={doc.title}
                                                fill
                                                priority
                                                unoptimized
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                draggable={false}
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>

                                        {/* Security Overlays (Subtle) */}
                                        <div className="absolute inset-0 z-10 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                                            <p className="text-slate-900/[0.03] font-black text-4xl -rotate-45 uppercase tracking-[1em]">Lisan.pk</p>
                                        </div>

                                        {/* Hover Interaction */}
                                        <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/10 transition-colors z-25 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <div className="bg-white p-4 rounded-full shadow-xl font-bold text-lg text-emerald-600">
                                                🔎
                                            </div>
                                        </div>
                                        
                                        {/* Protection Banner */}
                                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-md z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="flex items-center justify-center gap-2 text-white text-[10px] font-bold uppercase tracking-tighter">
                                                ✓ Protected Sample
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 text-center">
                                        <h4 className="font-bold text-slate-900 text-lg">{doc.title}</h4>
                                        <p className="text-emerald-600 font-bold font-serif text-sm mt-1">{doc.arabicTitle}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedDoc && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                            onClick={() => setSelectedDoc(null)}
                        >
                            <button className="absolute top-8 right-8 text-white hover:text-emerald-400 transition-colors z-[110] font-bold text-sm bg-white/10 px-4 py-2 rounded-full">
                                ✕ Close
                            </button>

                            <motion.div 
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="relative w-full max-w-4xl aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <Image 
                                    src={selectedDoc.src} 
                                    alt={selectedDoc.title}
                                    fill
                                    priority
                                    unoptimized
                                    className="object-contain p-4 md:p-8"
                                    draggable={false}
                                />
                                {/* Watermark for Lightbox */}
                                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                    <p className="text-slate-900/[0.03] font-black text-6xl md:text-9xl -rotate-45 uppercase tracking-[1em]">LISAN.PK</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Text Testimonials */}
                <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
                    {testimonials.map((t, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="p-8 rounded-[3rem] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-emerald-500 text-sm">★</span>
                                    ))}
                                </div>

                                <p className="text-slate-700 italic mb-8 leading-relaxed font-medium">
                                    "{t.text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl select-none">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.role} • {t.city}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
