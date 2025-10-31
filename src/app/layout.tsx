import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import BlobBackground from "@/components/blob-background";
import { siteConfig } from "@/config/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default:
      "Verichains Careers — Join Our Security Research & Blockchain Team",
    template: "%s | Verichains Careers",
  },
  description:
    "Explore job opportunities at Verichains — Asia's leading blockchain security firm.",
  keywords: [
    "blockchain security",
    "smart contract auditing",
    "Web3 jobs",
    "cryptocurrency security",
    "DeFi security",
  ],
  authors: [{ name: "Verichains" }],
  creator: "Verichains",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Verichains Careers — Join Our Security Research & Blockchain Team",
    description:
      "Explore job opportunities at Verichains — Asia's leading blockchain security firm.",
    siteName: "Verichains Careers",
    images: [
      {
        url: "/verichains-logo.svg",
        width: 800,
        height: 600,
        alt: "Verichains Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verichains Careers — Join Our Security Research & Blockchain Team",
    description:
      "Explore job opportunities at Verichains — Asia's leading blockchain security firm.",
    creator: "@verichains",
    images: ["/verichains-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased relative overflow-x-hidden`}
      >
        {/* Blob Backgrounds for all pages */}
        <BlobBackground className="left-0 top-[20%] -translate-y-1/2 -translate-x-1/2" />
        <BlobBackground className="right-0 top-[60%] -translate-y-1/2 translate-x-1/2" />

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
