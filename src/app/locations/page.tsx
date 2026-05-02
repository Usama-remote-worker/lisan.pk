import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Globe, ArrowRight, Building2 } from "lucide-react"
import { cities } from "@/data/location-services"

export const metadata: Metadata = {
    title: "Arabic Translation Services Across Pakistan | Service Locations",
    description: "Find certified Arabic translation services in your city. We serve 30+ cities across Pakistan including Lahore, Karachi, Islamabad, and more.",
    alternates: {
        canonical: "https://www.lisan.pk/locations",
    },
}

export default function LocationsPage() {
    const sortedCities = Object.values(cities).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
                        <Globe className="w-4 h-4" /> Nationwide Presence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Our Service Locations</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        Professional Arabic and English translation services available in all major and minor cities of Pakistan. Find your local expert below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCities.map((city) => (
                        <Link 
                            key={city.name} 
                            href={`/locations/${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors">
                                    <MapPin className="w-6 h-6 text-slate-400 group-hover:text-emerald-600" />
                                </div>
                                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors">
                                {city.name}
                            </h2>
                            <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                {city.description}
                            </p>
                            <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-slate-300" />
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                    {city.tier === 1 ? 'Primary Hub' : city.tier === 2 ? 'Regional Center' : 'Local Branch'}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
