import Link from "next/link"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { cities } from "@/data/location-services"
import { universities } from "@/data/scholarship-universities"

export function Footer() {
    const cityList = Object.keys(cities);
    const universityList = Object.entries(universities);

    return (
        <>
            <WhyChooseUs />
            <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        {/* Brand Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <img 
                                    src="/logo-icon-white.svg" 
                                    alt="Lisan.pk Icon" 
                                    className="h-8 w-8 object-contain"
                                />
                                <h3 className="text-white text-xl font-bold tracking-tight">Lisan.pk</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                                Pakistan’s most trusted Arabic translation and attestation platform. Specializing in Saudi university admissions and document legalization for over 40 years.
                            </p>
                            <div className="pt-4 border-t border-slate-800">
                                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">Office Status</h4>
                                <p className="text-xs text-slate-500">Serving Nationwide Pakistan via secure courier – No physical office visits required.</p>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div>
                            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Our Services</h4>
                            <ul className="space-y-3 text-sm">
                                <li><Link href="/services/translation" className="hover:text-emerald-400 transition-colors">Arabic Translation</Link></li>
                                <li><Link href="/services/attestation" className="hover:text-emerald-400 transition-colors">MOFA Attestation</Link></li>
                                <li><Link href="/services/document" className="hover:text-emerald-400 transition-colors">Document Legalization</Link></li>
                                <li><Link href="/services/translation/nikah-nama-marriage-certificate" className="hover:text-emerald-500 transition-colors text-slate-500">Nikah Nama Translation</Link></li>
                                <li><Link href="/services/translation/birth-certificate-translation" className="hover:text-emerald-500 transition-colors text-slate-500">Birth Certificate / B-Form</Link></li>
                                <li><Link href="/services/translation/academic-degree-transcript" className="hover:text-emerald-500 transition-colors text-slate-500">HEC Degree & Transcript</Link></li>
                                <li><Link href="/services/translation/police-character-certificate" className="hover:text-emerald-500 transition-colors text-slate-500">Police Character Certificate</Link></li>
                            </ul>
                        </div>

                        {/* Scholarships & Company Section */}
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Scholarships 2026</h4>
                                <ul className="space-y-3 text-sm">
                                    {universityList.map(([slug, uni]) => (
                                        <li key={slug}>
                                            <Link href={`/scholarships/${slug}`} className="hover:text-emerald-400 transition-colors text-emerald-500 font-medium italic">
                                                {uni.name} Guide
                                            </Link>
                                        </li>
                                    ))}
                                    <li><Link href="/consultancy/saudi-scholarship" className="hover:text-emerald-400 transition-colors font-bold text-white">All Saudi Scholarships</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Company</h4>
                                <ul className="space-y-3 text-sm">
                                    <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Lisan.pk</Link></li>
                                    <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog & Resources</Link></li>
                                    <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
                                    <li><Link href="/sitemap" className="hover:text-emerald-400 transition-colors">Visual Sitemap</Link></li>
                                    <li><Link href="/sitemap.xml" className="hover:text-emerald-400 transition-colors text-[10px] opacity-40">XML Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50">
                            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-center">Get in Touch</h4>
                            <div className="space-y-6">
                                <div className="text-center">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">WhatsApp/Phone</span>
                                    <a href="tel:03044296295" className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">0304-4296295</a>
                                </div>
                                <div className="text-center">
                                    <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1">Email Support</span>
                                    <a href="mailto:lisan.pk.services@gmail.com" className="text-sm hover:text-emerald-400 transition-colors break-all">lisan.pk.services@gmail.com</a>
                                </div>
                                <Link 
                                    href="https://forms.gle/FnBnLrbdCQXsyjVS6" 
                                    target="_blank"
                                    className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02]"
                                >
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Expandable/Comprehensive Locations Section */}
                    <div id="locations" className="pt-12 border-t border-slate-800">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Service Areas Across Pakistan</h4>
                            <span className="text-[10px] text-slate-500 bg-slate-800 px-3 py-1 rounded-full uppercase tracking-tighter">Secure Doorstep Delivery Nationwide</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
                            {cityList.sort().map((citySlug) => (
                                <Link 
                                    key={citySlug} 
                                    href={`/locations/${citySlug}`} 
                                    className="text-[11px] text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                                >
                                    <span className="h-1 w-1 bg-slate-700 group-hover:bg-emerald-500 rounded-full transition-colors"></span>
                                    {cities[citySlug].name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} Lisan.pk. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/services/translation" className="hover:text-slate-300">Terms of Service</Link>
                            <Link href="/about" className="hover:text-slate-300">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
