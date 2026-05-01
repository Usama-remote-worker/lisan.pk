import { MessageCircle } from "lucide-react"

export function FloatingActions() {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            <a
                href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20visited%20your%20website%20and%20I%20am%20interested%20in%20your%20translation%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 group relative"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-8 w-8" />
                <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Chat with an Expert
                </span>
            </a>
        </div>
    )
}

