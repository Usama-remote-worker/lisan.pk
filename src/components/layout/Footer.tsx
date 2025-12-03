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
                        <li><Link href="/services/translation" className="hover:text-emerald-400 transition-colors">Translation</Link></li>
                        <li><Link href="/services/attestation" className="hover:text-emerald-400 transition-colors">Attestation</Link></li>
                        <li><Link href="/services/document" className="hover:text-emerald-400 transition-colors">Document Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Islamabad, Pakistan</li>
                        <li>+92 300 123 4567</li>
                        <li>info@lisan.pk</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Lisan.pk. All rights reserved.
            </div>
        </footer>
    )
}
