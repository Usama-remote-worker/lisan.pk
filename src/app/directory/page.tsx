import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Globe, ArrowRight, FileText, GraduationCap, Home, BookOpen, Layers } from "lucide-react"
import { cities, services } from "@/data/location-services"
import { universities } from "@/data/scholarship-universities"
import { getSortedPostsData } from "@/lib/blog"

export const metadata: Metadata = {
    title: "Visual Directory & Service Sitemap | Lisan.pk",
    description: "Navigate all pages, services, local branches, and guide maps of Lisan.pk. Access certified Arabic translations across Pakistan.",
    alternates: {
        canonical: "https://www.lisan.pk/directory",
    },
}

// Group cities by province/region for beautiful visual representation
const regionalGroups = {
    "Punjab": ["lahore", "faisalabad", "rawalpindi", "multan", "sialkot", "sargodha", "gujranwala", "bahawalpur", "sahiwal", "gujrat", "jhelum", "rahim-yar-khan", "dera-ghazi-khan"],
    "Sindh": ["karachi", "hyderabad", "sukkur", "larkana", "nawabshah", "mirpur-khas"],
    "Khyber Pakhtunkhwa": ["peshawar", "abbottabad", "mardan", "swat", "kohat", "bannu"],
    "Balochistan": ["quetta"],
    "Azad Jammu & Kashmir": ["mirpur", "muzaffarabad"],
    "Islamabad Capital Territory": ["islamabad"]
}

export default async function VisualDirectory() {
    const posts = await getSortedPostsData()
    const cityEntries = Object.entries(cities)
    const serviceEntries = Object.entries(services)

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-32">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-100">
                        <Layers className="w-4 h-4" /> Comprehensive Index
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">Visual Directory</h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        A detailed visual directory of all translation services, scholarship bundles, and localized legal assistance pages across Pakistan.
                    </p>
                </div>

                {/* Core Website Pages & University Guides */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Core Pages Card */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2 border-b border-slate-100 pb-4">
                            <Home className="text-emerald-600 w-5 h-5" /> Core Pages
                        </h2>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ Home Page <span className="text-xs text-slate-400 font-normal">(/)</span></Link></li>
                            <li><Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ All Services <span className="text-xs text-slate-400 font-normal">(/services)</span></Link></li>
                            <li><Link href="/consultancy/saudi-scholarship" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ Saudi Scholarships <span className="text-xs text-slate-400 font-normal">(/consultancy/saudi-scholarship)</span></Link></li>
                            <li><Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ News & Blog <span className="text-xs text-slate-400 font-normal">(/blog)</span></Link></li>
                            <li><Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ About Lisan.pk <span className="text-xs text-slate-400 font-normal">(/about)</span></Link></li>
                            <li><Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ Get in Touch <span className="text-xs text-slate-400 font-normal">(/contact)</span></Link></li>
                        </ul>
                    </div>

                    {/* University Guides Card */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2 border-b border-slate-100 pb-4">
                            <GraduationCap className="text-emerald-600 w-5 h-5" /> University Guides
                        </h2>
                        <ul className="space-y-3">
                            {Object.entries(universities).map(([slug, uni]) => (
                                <li key={slug}>
                                    <Link href={`/scholarships/${slug}`} className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">
                                        🎓 {uni.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service Templates Card */}
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2 border-b border-slate-100 pb-4">
                            <FileText className="text-emerald-600 w-5 h-5" /> Service Categories
                        </h2>
                        <ul className="space-y-3">
                            <li><Link href="/services/translation" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ Arabic Translation</Link></li>
                            <li><Link href="/services/attestation" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ MOFA Attestation</Link></li>
                            <li><Link href="/services/document" className="text-sm font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-2">✓ Legal Attestations</Link></li>
                            {serviceEntries.map(([slug, srv]) => (
                                <li key={slug} className="pl-4 border-l border-slate-100">
                                    <Link href={`/services/translation/${slug === 'saudi-scholarship-translation' ? '' : slug}`} className="text-xs text-slate-500 hover:text-emerald-700 block">
                                        ↳ {srv.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Blog Posts Directory */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm mb-16">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 font-serif flex items-center gap-2 border-b border-slate-100 pb-4">
                        <BookOpen className="text-emerald-600 w-5 h-5" /> Articles & Resources Directory
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="p-4 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 flex items-center justify-between group transition-all">
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-emerald-800">{post.title}</h3>
                                    <p className="text-[11px] text-slate-400">Published on {new Date(post.date).toLocaleDateString()}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* The Ultimate Locations Map: Fully Indexed City-Service Permalinks */}
                <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl space-y-12">
                    <div className="border-b border-slate-100 pb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-serif flex items-center gap-2">
                            <MapPin className="text-emerald-600 w-6 h-6" /> Localized Translation Directory (29 Cities of Pakistan)
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Click on any city name to view its dedicated regional translation portal, or click the sub-links to directly access localized document attestation requirements.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {Object.entries(regionalGroups).map(([regionName, citySlugs]) => (
                            <div key={regionName} className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-4 py-2 rounded-lg inline-block border border-emerald-100/50">
                                    {regionName} Region
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {citySlugs.map((slug) => {
                                        const cityData = cities[slug];
                                        if (!cityData) return null;
                                        return (
                                            <div key={slug} className="p-6 bg-slate-50/50 rounded-2xl border border-slate-200/60 hover:border-emerald-200 transition-colors">
                                                <Link href={`/locations/${slug}`} className="font-bold text-slate-900 hover:text-emerald-700 text-base flex items-center gap-2 group mb-3">
                                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                    {cityData.name} Branch
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-600" />
                                                </Link>
                                                <p className="text-xs text-slate-400 mb-4 line-clamp-1 italic">
                                                    Serving {cityData.landmark}
                                                </p>
                                                {/* In-City Direct Service Sublinks */}
                                                <div className="flex flex-wrap gap-x-2 gap-y-1.5 border-t border-slate-100 pt-3">
                                                    {serviceEntries.slice(0, 4).map(([serviceSlug, serviceData]) => (
                                                        <Link 
                                                            key={serviceSlug} 
                                                            href={`/locations/${slug}/${serviceSlug}`}
                                                            className="text-[10px] bg-white hover:bg-emerald-600 hover:text-white text-slate-500 border border-slate-200 px-2.5 py-1 rounded-md font-semibold transition-all"
                                                        >
                                                            {serviceData.title.split(' ')[0]} Translation
                                                        </Link>
                                                    ))}
                                                    <Link 
                                                        href={`/locations/${slug}`} 
                                                        className="text-[10px] text-emerald-700 hover:underline font-bold px-1.5 py-1"
                                                    >
                                                        + {serviceEntries.length - 4} more services
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
