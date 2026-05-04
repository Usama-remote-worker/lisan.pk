import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic, Outfit, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { ScholarshipPopup } from "@/components/modals/ScholarshipPopup";
import { Toaster } from "react-hot-toast";
// Removed WhyChooseUs import as it is now inside Footer

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400" });
const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lisan.pk'),
  title: {
    default: "Certified Arabic Translation & Attestation Pakistan | Lisan.pk",
    template: "%s | Lisan.pk"
  },
  description: "40+ years of certified Arabic translation & attestation in Pakistan. Trusted by Saudi & UAE embassies. Fast doorstep delivery nationwide. 100% acceptance.",
  keywords: ["Arabic translation", "Attestation services", "Nikah Nama translation", "MOFA attestation", "Saudi Embassy attestation", "Pakistan translation services"],
  authors: [{ name: "Lisan.pk Team" }],
  creator: "Lisan.pk",
  publisher: "Lisan.pk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Lisan.pk | Certified Arabic Translation & Attestation",
    description: "Expert Arabic translation and document attestation services in Pakistan. Recognized by all major embassies.",
    url: 'https://www.lisan.pk',
    siteName: 'Lisan.pk',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lisan.pk | Certified Arabic Translation & Attestation",
    description: "Expert Arabic translation and document attestation services in Pakistan.",
  },
  verification: {
    google: "-cosWo_tSCd8DlUq4yq9RIxya4mkLK-UHb3607taPkU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WTR79JCL');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TK7C4ZDDRT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TK7C4ZDDRT');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${instrumentSerif.variable} ${notoArabic.variable} antialiased font-sans`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTR79JCL"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <ScholarshipPopup />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
