"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface UniItem {
    name: string
    city: "Istanbul" | "Ankara" | "Izmir" | "Antalya" | "Others"
    featured?: boolean
    scholarship?: string
}

const universitiesList: UniItem[] = [
    { name: "Yeditepe University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Özyeğin University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Bahçeşehir University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Acıbadem University", city: "Istanbul" },
    { name: "Bezmialem Vakıf University", city: "Istanbul" },
    { name: "Biruni University", city: "Istanbul" },
    { name: "İstinye University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Istanbul Medipol University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Ankara Medipol University", city: "Ankara" },
    { name: "Gelişim University", city: "Istanbul" },
    { name: "Istanbul Aydın University", city: "Istanbul" },
    { name: "Okan University", city: "Istanbul" },
    { name: "Üsküdar University", city: "Istanbul" },
    { name: "Beykent University", city: "Istanbul" },
    { name: "Atılım University", city: "Ankara" },
    { name: "Beykoz University", city: "Istanbul", featured: true, scholarship: "Guaranteed 50% Waiver" },
    { name: "Fenerbahçe University", city: "Istanbul" },
    { name: "Altınbaş University", city: "Istanbul" },
    { name: "Işık University", city: "Istanbul" },
    { name: "Nişantaşı University", city: "Istanbul" },
    { name: "Atlas University", city: "Istanbul" },
    { name: "Haliç University", city: "Istanbul" },
    { name: "Kültür University", city: "Istanbul" },
    { name: "İzmir Yaşar University", city: "Izmir" },
    { name: "TED University", city: "Ankara" },
    { name: "Fatih Sultan Mehmet University", city: "Istanbul" },
    { name: "TOBB University of Economics and Technology", city: "Ankara" },
    { name: "Antalya Bilim University", city: "Antalya" },
    { name: "Mudanya University", city: "Others" },
    { name: "Maltepe University", city: "Istanbul" },
    { name: "Piri Reis University", city: "Istanbul" },
    { name: "Ufuk University", city: "Ankara" },
    { name: "İzmir University of Economics", city: "Izmir" },
    { name: "İzmir Tınaztepe University", city: "Izmir" },
    { name: "Ibn Haldun University", city: "Istanbul" },
    { name: "Turkish Aeronautical Association University", city: "Ankara" },
    { name: "Istanbul Health and Technology University", city: "Istanbul" },
    { name: "Galata University", city: "Istanbul" },
    { name: "Lokman Hekim University", city: "Ankara" },
    { name: "Ankara Bilim University", city: "Ankara" },
    { name: "Istanbul Commerce University", city: "Istanbul" },
    { name: "Hasan Kalyoncu University", city: "Others" },
    { name: "Arel University", city: "Istanbul" },
    { name: "Kent University", city: "Istanbul", featured: true, scholarship: "Up to 50% Waiver" },
    { name: "Gedik University", city: "Istanbul" },
    { name: "Topkapı University", city: "Istanbul", featured: true, scholarship: "Flat budget packages" },
    { name: "Yeni Yüzyıl University", city: "Istanbul" },
    { name: "Sabahattin Zaim University", city: "Istanbul" },
    { name: "Antalya Belek University", city: "Antalya" },
    { name: "Yüksek İhtisas University", city: "Ankara" },
    { name: "Doğuş University", city: "Istanbul" }
]

export function UniversitySection() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCity, setSelectedCity] = useState<string>("All")

    const filteredUniversities = useMemo(() => {
        return universitiesList.filter((uni) => {
            const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCity = selectedCity === "All" || uni.city === selectedCity
            return matchesSearch && matchesCity
        })
    }, [searchQuery, selectedCity])

    const cities = ["All", "Istanbul", "Ankara", "Izmir", "Antalya", "Others"]

    return (
        <section id="turkish-universities" className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4 max-w-7xl">
                
                {/* Header Block */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 font-sans">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/5 text-emerald-700 rounded-full text-xs font-semibold tracking-wider uppercase border border-emerald-500/10">
                        Direct University Partner Matrix
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif leading-tight">
                        50+ Prestigious Private & Foundation Universities
                    </h2>
                    
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                        Lisan.pk holds direct admissions channels with all active foundation and private campuses in Turkey. Secure guaranteed entry with flat scholarship rates under our zero-fee model.
                    </p>
                </div>

                {/* Filter and Search Bar Block */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm mb-10 max-w-4xl mx-auto font-sans">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        
                        {/* Search Input */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Search university..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600/50 transition-colors font-medium text-slate-700"
                            />
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 font-extrabold text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* City Filters */}
                        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-end">
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => setSelectedCity(city)}
                                    className={`px-4 h-10 rounded-xl text-xs font-bold transition-all ${
                                        selectedCity === city
                                            ? "bg-slate-900 text-white shadow-md shadow-slate-950/10"
                                             : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Displaying Count */}
                <div className="text-center md:text-left max-w-6xl mx-auto mb-6 px-2 font-sans">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Showing {filteredUniversities.length} of {universitiesList.length} Partner Campuses
                    </p>
                </div>

                {/* Universities Grid */}
                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto font-sans"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredUniversities.map((uni) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                key={uni.name}
                                className="bg-white border border-slate-200 hover:border-emerald-500/20 hover:shadow-lg transition-all rounded-2xl p-6 flex flex-col justify-between group"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-2">
                                        <div className="flex items-center gap-1 text-[10px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full font-bold">
                                            <span>{uni.city}</span>
                                        </div>
                                        {uni.featured && (
                                            <div className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                                                Direct Desk Partner
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h4 className="text-lg font-black text-slate-950 leading-snug group-hover:text-emerald-700 transition-colors">
                                        {uni.name}
                                    </h4>
                                </div>

                                <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                        {uni.scholarship || "Direct Applications Open"}
                                    </span>
                                    <Link href="#turkey-lead-form">
                                        <button className="text-xs font-extrabold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors">
                                            Apply Now
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredUniversities.length === 0 && (
                    <div className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl max-w-xl mx-auto font-sans space-y-3">
                        <h4 className="font-extrabold text-slate-800 text-sm">No Universities Found</h4>
                        <p className="text-xs text-slate-500 max-w-xs mx-auto">We couldn't find any partner campus matching your current query. Try broadening your terms.</p>
                    </div>
                )}

            </div>
        </section>
    )
}
