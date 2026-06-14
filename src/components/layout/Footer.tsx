import Link from "next/link"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { TranslationProcess } from "@/components/layout/TranslationProcess"
import { cities } from "@/data/location-services"
import { universities } from "@/data/scholarship-universities"

export function Footer() {
    const universityList = Object.entries(universities);

    // Curated top Pakistan cities for the location architecture
    const topPakistanCities = [
        "karachi", "lahore", "islamabad", "rawalpindi", "faisalabad", 
        "multan", "sialkot", "peshawar", "gujranwala", "quetta", "hyderabad", "bahawalpur"
    ];

    const internationalLocations = [
        { name: "USA", href: "/contact" },
        { name: "UK", href: "/contact" },
        { name: "Canada", href: "/contact" },
        { name: "Australia", href: "/contact" },
        { name: "UAE", href: "/contact" },
        { name: "Saudi Arabia", href: "/contact" },
        { name: "Qatar", href: "/contact" },
        { name: "Turkey", href: "/contact" },
        { name: "Germany", href: "/contact" },
        { name: "France", href: "/contact" }
    ];

    const trustFeatures = [
        { label: "Certified Translations", desc: "100% Embassy Accepted" },
        { label: "100+ Languages", desc: "Global Coverage" },
        { label: "Worldwide Delivery", desc: "Secure Tracked Courier" },
        { label: "Native Linguists", desc: "Professional Accuracy" },
        { label: "Secure & Confidential", desc: "Strict Data Protection" },
        { label: "Fast Turnaround", desc: "Same-Day Express Available" }
    ];

    return (
        <>
            <WhyChooseUs />
            <TranslationProcess />
            <footer className="bg-slate-100 text-slate-600 py-16 border-t border-slate-200 font-sans">
                <div className="container mx-auto px-4 max-w-7xl">
                    
                    {/* Horizontal Trust Banner (Why Lisan.pk) */}
                    <div className="border-b border-slate-200 pb-10 mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {trustFeatures.map((feat) => (
                                <div 
                                    key={feat.label} 
                                    className="p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-emerald-500/50 transition-all duration-300 flex flex-col items-center text-center group"
                                >
                                    <span className="text-emerald-600 text-lg mb-2 font-bold select-none group-hover:scale-110 transition-transform">✓</span>
                                    <h5 className="text-slate-900 text-xs font-bold mb-1 tracking-tight">{feat.label}</h5>
                                    <p className="text-[10px] text-slate-500 font-medium">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Grid with Custom Proportions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[3fr_2fr_2fr_2fr_2fr_3fr] gap-8 mb-14 pb-14 border-b border-slate-200">
                        
                        {/* Column 1: About Lisan.pk */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <img 
                                    src="/logo-icon.svg" 
                                    alt="Lisan.pk Icon" 
                                    className="h-8 w-8 object-contain"
                                />
                                <h3 className="text-slate-900 text-xl font-bold tracking-tight font-serif">Lisan<span className="text-emerald-600">.pk</span></h3>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-600 font-medium">
                                Lisan.pk is a professional multilingual translation agency providing certified translation services in 100+ languages for individuals, businesses, universities, immigration applications, legal matters, and international organizations worldwide.
                            </p>
                            <div className="pt-4 border-t border-slate-200">
                                <h4 className="text-slate-900 text-[10px] font-bold uppercase tracking-widest mb-1.5">Office Status</h4>
                                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">Serving Nationwide Pakistan & International Markets via secure courier & digital delivery.</p>
                            </div>
                        </div>

                        {/* Column 2: Translation Services */}
                        <div>
                            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-wider">Services</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-600">
                                <li><Link href="/certified-document-translation" className="hover:text-emerald-700 transition-colors font-bold text-slate-900">Embassy Document Hub</Link></li>
                                <li><Link href="/services/translation/legal-translation" className="hover:text-emerald-700 transition-colors">Legal Translation</Link></li>
                                <li><Link href="/services/translation/academic-degree-transcript" className="hover:text-emerald-700 transition-colors">Academic Translation</Link></li>
                                <li><Link href="/services/uscis-certified-translation" className="hover:text-emerald-700 transition-colors">Immigration Translation</Link></li>
                                <li><Link href="/services/translation/iata-dts-umrah-travel-agency" className="hover:text-emerald-700 transition-colors">Business Translation</Link></li>
                                <li><Link href="/services/document" className="hover:text-emerald-700 transition-colors">Document Legalization</Link></li>
                                <li><Link href="/services/attestation" className="hover:text-emerald-700 transition-colors">MOFA Attestation</Link></li>
                            </ul>
                        </div>

                        {/* Column 3: Languages */}
                        <div>
                            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-wider">Languages</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-600">
                                <li><Link href="/english-to-indonesian-translators" className="hover:text-emerald-700 transition-colors font-bold text-slate-900">English to Indonesian</Link></li>
                                <li><Link href="/translation-english-to-arabic" className="hover:text-emerald-700 transition-colors font-bold text-slate-900">English to Arabic</Link></li>
                                <li><Link href="/chinese-language-translation-in-urdu" className="hover:text-emerald-700 transition-colors font-bold text-slate-900">Chinese to Urdu</Link></li>
                                <li><Link href="/services/translation/arabic-translation" className="hover:text-emerald-700 transition-colors">Arabic Translation</Link></li>
                                <li><Link href="/services/translation/urdu-to-english-translation" className="hover:text-emerald-700 transition-colors">Urdu Translation</Link></li>
                                <li><Link href="/services/translation/english-translation" className="hover:text-emerald-700 transition-colors">English Translation</Link></li>
                                <li><Link href="/services/translation/turkish-translation" className="hover:text-emerald-700 transition-colors">Turkish Translation</Link></li>
                                <li><Link href="/services/translation/spanish-translation" className="hover:text-emerald-700 transition-colors">Spanish Translation</Link></li>
                                <li><Link href="/services/translation/french-translation" className="hover:text-emerald-700 transition-colors">French Translation</Link></li>
                                <li><Link href="/services/translation/german-translation" className="hover:text-emerald-700 transition-colors">German Translation</Link></li>
                            </ul>
                        </div>

                        {/* Column 4: Countries Served */}
                        <div>
                            <h4 className="text-slate-900 font-bold mb-6 uppercase text-xs tracking-wider">Countries</h4>
                            <ul className="space-y-3 text-xs font-medium text-slate-600">
                                <li><span className="hover:text-emerald-700 transition-colors">United States</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">United Kingdom</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Canada</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Australia</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Saudi Arabia</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">UAE</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Qatar</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Turkey</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">Germany</span></li>
                                <li><span className="hover:text-emerald-700 transition-colors">France</span></li>
                            </ul>
                        </div>

                        {/* Column 5: Resources & Study Abroad */}
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-slate-900 font-bold mb-5 uppercase text-xs tracking-wider">Resources</h4>
                                <ul className="space-y-3 text-xs font-medium text-slate-600">
                                    <li><Link href="/blog" className="hover:text-emerald-700 transition-colors">Blog & Resources</Link></li>
                                    <li><Link href="/contact" className="hover:text-emerald-700 transition-colors">Contact Support</Link></li>
                                    <li><Link href="/directory" className="hover:text-emerald-700 transition-colors">Visual Directory</Link></li>
                                    <li><Link href="/sitemap.xml" className="hover:text-emerald-700 transition-colors text-[10px] opacity-30">XML Sitemap</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-slate-900 font-bold mb-4 uppercase text-xs tracking-wider">Study Abroad</h4>
                                <ul className="space-y-2.5 text-xs">
                                    <li><Link href="/consultancy/saudi-scholarship" className="hover:text-emerald-700 transition-colors font-bold text-slate-900">All Saudi Scholarships</Link></li>
                                    <li><Link href="/study-in-turkey" className="hover:text-emerald-700 transition-colors font-bold text-emerald-600">Turkey Admissions Hub</Link></li>
                                    {universityList.map(([slug, uni]) => (
                                        <li key={slug}>
                                            <Link href={`/scholarships/${slug}`} className="hover:text-emerald-700 transition-colors text-emerald-600 font-medium italic text-[11px]">
                                                {uni.name} Guide
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Column 6: Contact & Call to Action */}
                        <div>
                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 font-sans space-y-5">
                                <h4 className="text-slate-900 font-bold uppercase text-xs tracking-wider">Get in Touch</h4>
                                <div className="space-y-3">
                                    <div>
                                        <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">WhatsApp / Call</span>
                                        <a href="tel:03044296295" className="text-base font-extrabold text-slate-900 hover:text-emerald-700 transition-colors font-mono tracking-tight">0304-4296295</a>
                                    </div>
                                    <div>
                                        <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Email Support</span>
                                        <a href="mailto:lisan.pk.services@gmail.com" className="text-[11px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors break-all font-mono">lisan.pk.services@gmail.com</a>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <Link 
                                        href="https://forms.gle/FnBnLrbdCQXsyjVS6" 
                                        target="_blank"
                                        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 rounded-xl text-xs font-extrabold transition-all transform hover:scale-[1.02] border border-emerald-500/20 shadow-md shadow-emerald-900/10"
                                    >
                                        Get a Free Quote
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Symmetrical Location Architecture Section */}
                    <div id="locations" className="pt-10 border-t border-slate-200 font-sans">
                        <div className="grid md:grid-cols-12 gap-8">
                            {/* Pakistan Locations */}
                            <div className="md:col-span-6 lg:col-span-7 space-y-4">
                                <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Pakistan Locations</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2.5">
                                    {topPakistanCities.map((citySlug) => (
                                        <Link 
                                            key={citySlug} 
                                            href={`/locations/${citySlug}`} 
                                            className="text-[11px] text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5 group font-medium"
                                        >
                                            <span className="h-1 w-1 bg-emerald-500/40 group-hover:bg-emerald-600 rounded-full transition-colors"></span>
                                            {cities[citySlug]?.name || citySlug}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* International Locations */}
                            <div className="md:col-span-6 lg:col-span-5 space-y-4">
                                <div>
                                    <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider mb-1">Global Services</h4>
                                    <p className="text-[10px] text-slate-500 leading-tight">We serve international clients globally via Email & WhatsApp (no physical offices in these regions).</p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 mt-3">
                                    {internationalLocations.map((loc) => (
                                        <Link 
                                            key={loc.name} 
                                            href={loc.href} 
                                            className="text-[11px] text-slate-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5 group font-medium"
                                        >
                                            <span className="h-1 w-1 bg-emerald-500/40 group-hover:bg-emerald-600 rounded-full transition-colors"></span>
                                            {loc.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Text Block for SEO / Entity Recognition */}
                    <div className="border-t border-slate-200 pt-8 mt-12 text-center text-xs text-slate-500 font-sans leading-relaxed max-w-4xl mx-auto">
                        Lisan.pk is a professional multilingual translation agency serving clients across Pakistan, the United States, Canada, the United Kingdom, Australia, Saudi Arabia, the UAE, and other international markets. We provide certified translation services, legal translation, academic translation, immigration translation, website localization, and document translation in over 100 languages.
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
                        <p>&copy; {new Date().getFullYear()} Lisan.pk. All rights reserved. Multilingual translation services in 100+ languages worldwide.</p>
                        <div className="flex gap-6 font-semibold">
                            <Link href="/services/translation/certified-translation" className="hover:text-emerald-700 transition-colors">Terms of Service</Link>
                            <Link href="/about" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
