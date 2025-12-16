import { Phone, MessageCircle } from "lucide-react"

export function FloatingActions() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            <a
                href="tel:03034041132"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg transition-transform hover:scale-110 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                aria-label="Call us"
            >
                <Phone className="h-6 w-6" />
            </a>
            <a
                href="https://wa.me/923034041132"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="h-8 w-8" />
            </a>
        </div>
    )
}
