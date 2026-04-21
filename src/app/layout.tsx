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
  title: "Lisan.pk | #1 Arabic Translation & Attestation Services in Pakistan",
  description: "Certified Arabic translation and attestation services in Pakistan. Trusted by embassies and 100k+ clients. Doorstep delivery nationwide.",
  verification: {
    google: "-cosWo_tSCd8DlUq4yq9RIxya4mkLK-UHb3607taPkU",
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
