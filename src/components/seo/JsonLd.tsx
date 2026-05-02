
export function JsonLd({ data }: { data: any }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

export function generateServiceSchema(city: string, service: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service} in ${city}`,
        "description": `Certified Arabic translation and attestation services for ${service} in ${city}, Pakistan.`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Lisan.pk",
            "image": "https://lisan.pk/logo.png",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressRegion": "Pakistan"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Translation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Certified Arabic Translation"
                    }
                }
            ]
        }
    }
}
