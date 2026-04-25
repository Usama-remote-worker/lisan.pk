import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-lg font-bold mb-4">Lisan.pk</h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Pakistan’s leading Arabic translation and attestation service provider. Trusted by thousands for accurate and timely services.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/translation" className="hover:text-emerald-400 transition-colors">Translation Services</Link></li>
                        <li><Link href="/services/attestation" className="hover:text-emerald-400 transition-colors">MOFA Attestation</Link></li>
                        <li><Link href="/services/document" className="hover:text-emerald-400 transition-colors">Document Legalization</Link></li>
                        <li><Link href="/services/translation/nikah-nama-marriage-certificate" className="hover:text-emerald-400 transition-colors text-xs text-slate-500">Nikah Nama Translation</Link></li>
                        <li><Link href="/services/translation/birth-certificate-translation" className="hover:text-emerald-400 transition-colors text-xs text-slate-500">Birth Certificate Translation</Link></li>
                        <li><Link href="/services/translation/academic-degree-transcript" className="hover:text-emerald-400 transition-colors text-xs text-slate-500">Degree/HEC Translation</Link></li>
                        <li><Link href="/consultancy/saudi-scholarship" className="hover:text-emerald-400 transition-colors text-xs font-bold text-emerald-400">Saudi Scholarship 2026</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Lisan.pk</Link></li>
                        <li><Link href="https://forms.gle/FnBnLrbdCQXsyjVS6" target="_blank" className="hover:text-emerald-400 transition-colors">Free Quote / Upload</Link></li>
                        <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
                        <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog & Guides</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Official Contact</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500 font-bold">🚀</span>
                            <span>Serving Nationwide Pakistan – No office visits needed.</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-emerald-500 font-bold">📞</span>
                            <a href="tel:03044296295" className="hover:text-emerald-400">0304-4296295</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-emerald-500 font-bold">✉️</span>
                            <a href="mailto:lisan.pk.services@gmail.com" className="hover:text-emerald-400">lisan.pk.services@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800">
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">Service Areas in Pakistan</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {['Lahore', 'Karachi', 'Islamabad', 'Faisalabad', 'Multan', 'Rawalpindi', 'Peshawar', 'Sialkot', 'Gujranwala', 'Quetta'].map((city) => (
                        <Link 
                            key={city} 
                            href={`/locations/${city.toLowerCase()}`} 
                            className="text-xs text-slate-500 hover:text-emerald-400 transition-colors flex items-center gap-2"
                        >
                            <span className="h-1 w-1 bg-emerald-500 rounded-full"></span>
                            {city} Translation
                        </Link>
                    ))}
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Lisan.pk. All rights reserved.
            </div>
        </footer>
    )
}
