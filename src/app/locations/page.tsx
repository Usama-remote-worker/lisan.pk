import { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/data/location-services"

export const metadata: Metadata = {
    title: "Arabic Translation Services Across Pakistan | Service Locations",
    description: "Find certified Arabic translation services in your city. We serve 30+ cities across Pakistan including Lahore, Karachi, Islamabad, and more.",
    alternates: {
        canonical: "https://www.lisan.pk/locations",
    },
}

export default function LocationsPage() {
    const sortedCities = Object.entries(cities).map(([slug, city]) => ({
        slug,
        ...city
    })).sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-32 font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100 select-none">
                        Nationwide Presence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Our Service Locations</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Professional Arabic and English translation services available in all major and minor cities of Pakistan. Find your local expert below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                    {sortedCities.map((city) => (
                        <Link 
                            key={city.name} 
                            href={`/locations/${city.slug}`}
                            className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition-colors text-emerald-600 font-bold select-none text-sm">
                                        📍
                                    </div>
                                    <span className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all font-bold">→</span>
                                </div>
                                <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-900 transition-colors font-serif">
                                    {city.name}
                                </h2>
                                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                                    {city.description}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
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
