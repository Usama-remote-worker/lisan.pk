import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-emerald-800 mb-8">Contact Us</h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-slate-600 mb-6">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-medium text-slate-900">Address</h3>
                                <p className="text-slate-600">Lahore, Pakistan</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-slate-900">Phone</h3>
                                <p className="text-slate-600">0303 404 1132</p>
                            </div>
                            <div>
                                <h3 className="font-medium text-slate-900">Email</h3>
                                <p className="text-slate-600">info@lisan.pk</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full p-2 border border-slate-300 rounded-md" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full p-2 border border-slate-300 rounded-md" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full p-2 border border-slate-300 rounded-md" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
