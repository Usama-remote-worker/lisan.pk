import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingActions } from "@/components/layout/FloatingActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lisan.pk | #1 Arabic Translation & Attestation Services in Pakistan",
  description: "Certified Arabic translation and attestation services in Pakistan. Trusted by embassies and 100k+ clients. Doorstep delivery nationwide.",
  keywords: ["Arabic Translation", "Attestation Pakistan", "Nikahnama Translation", "Degree Attestation", "Saudi Embassy Attestation"],
  openGraph: {
    title: "Lisan.pk | #1 Arabic Translation & Attestation Services",
    description: "Certified Arabic translation and attestation services in Pakistan. Trusted by embassies and 100k+ clients.",
    url: "https://lisan.pk",
    siteName: "Lisan.pk",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lisan.pk",
    "image": "https://lisan.pk/logo.png",
    "url": "https://lisan.pk",
    "telephone": "03034041132",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office Address",
      "addressLocality": "Lahore",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
