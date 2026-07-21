
export function JsonLd({ data }: { data: any }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}

export function generateLocalBusinessSchema(city: string, description: string, url: string, lat?: number, lng?: number) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Lisan.pk Arabic Translation & Legalization - ${city}`,
        "description": description,
        "url": url,
        "telephone": "+923044296295",
        "priceRange": "$$",
        "image": "https://www.lisan.pk/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressCountry": "PK"
        },
        ...(lat && lng ? {
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": lat,
                "longitude": lng
            }
        } : {}),
        "areaServed": {
            "@type": "City",
            "name": city
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "Lisan.pk",
            "url": "https://www.lisan.pk",
            "description": "Pakistan's leading certified Arabic and English document translation service with 40+ years of legal and embassy accreditation."
        }
    }
}

export function generateServiceSchema(city: string, service: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${service} in ${city}`,
        "description": `Certified Arabic translation, attestation, and document legalization services for ${service} in ${city}, Pakistan.`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Lisan.pk",
            "url": "https://www.lisan.pk",
            "telephone": "+923044296295",
            "image": "https://www.lisan.pk/logo.png",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city,
                "addressCountry": "PK"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Certified Translation Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Embassy Certified Arabic Translation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "MOFA & HEC Document Legalization Support"
                    }
                }
            ]
        }
    }
}

