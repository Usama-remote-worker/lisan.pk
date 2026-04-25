import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lisan.pk'),
  title: {
    default: "Lisan.pk | #1 Arabic Translation & Attestation Services in Pakistan",
    template: "%s | Lisan.pk"
  },
  description: "Certified Arabic translation and attestation services in Pakistan. Trusted by embassies and 100k+ clients. Doorstep delivery nationwide.",
  keywords: ["Arabic translation", "Attestation services", "Nikah Nama translation", "MOFA attestation", "Saudi Embassy attestation", "Pakistan translation services"],
  authors: [{ name: "Lisan.pk Team" }],
  creator: "Lisan.pk",
  publisher: "Lisan.pk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Lisan.pk | Certified Arabic Translation & Attestation",
    description: "Expert Arabic translation and document attestation services in Pakistan. Recognized by all major embassies.",
    url: 'https://lisan.pk',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoArabic.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
