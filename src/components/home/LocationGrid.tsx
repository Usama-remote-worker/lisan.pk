import Link from "next/link"
import { MapPin } from "lucide-react"

const cities = [
    { name: 'Lahore', slug: 'lahore' },
    { name: 'Karachi', slug: 'karachi' },
    { name: 'Islamabad', slug: 'islamabad' },
    { name: 'Faisalabad', slug: 'faisalabad' },
    { name: 'Multan', slug: 'multan' },
    { name: 'Rawalpindi', slug: 'rawalpindi' },
    { name: 'Peshawar', slug: 'peshawar' },
    { name: 'Sialkot', slug: 'sialkot' },
    { name: 'Gujranwala', slug: 'gujranwala' },
    { name: 'Quetta', slug: 'quetta' }
]

export function LocationGrid() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">Our Nationwide Presence</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Providing certified Arabic translation and embassy attestation services across all major cities of Pakistan with secure doorstep delivery.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                    {cities.map((city) => (
                        <Link 
                            key={city.slug} 
                            href={`/locations/${city.slug}`}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300 text-center"
                        >
                            <MapPin className="w-6 h-6 mx-auto mb-3 text-emerald-500 group-hover:text-white transition-colors" />
                            <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">{city.name}</h3>
                            <span className="text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-emerald-100">Translation Service</span>
                        </Link>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <p className="text-slate-500 italic">"Can't see your city? We provide nationwide courier pickup and digital delivery."</p>
                </div>
            </div>
        </section>
    )
}
