import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">404 - Page Not Found</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md">
                Oops! The page you are looking for does not exist. It might have been moved or removed.
            </p>
            <div className="flex gap-4">
                <Link href="/">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Return Home
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button variant="outline">
                        Contact Support
                    </Button>
                </Link>
            </div>
        </div>
    )
}
