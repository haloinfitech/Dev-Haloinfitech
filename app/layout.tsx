import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://haloinfitech.com"),
  title: {
    default: "HaloInfitech - Solusi Digital Tanpa Batas",
    template: "%s | HaloInfitech",
  },
  description:
    "Platform digital terdepan dari UKM IT Universitas Negeri Padang. Layanan web development, mobile apps, dan solusi digital dengan harga mahasiswa, kualitas profesional.",
  keywords: [
    "web development",
    "mobile app",
    "UKM IT",
    "Universitas Negeri Padang",
    "digital solutions",
    "haloinfitech",
    "infinity technology",
    "konsultasi IT",
    "aplikasi mobile",
    "website development",
  ],
  authors: [{ name: "infitech" }],
  creator: "infitech - Infinity Technology",
  publisher: "ititanix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/logo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/logo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://haloinfitech.vercel.app/images/logo.jpg",
    title: "HaloInfitech - Solusi Digital Tanpa Batas",
    description:
      "Transformasi digital dimulai dari sini. Konsultasi gratis, response 24 jam.",
    siteName: "HaloInfitech",
    images: [
      {
        url: "https://haloinfitech.vercel.app/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HaloInfitech - Infinity Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaloInfitech - Solusi Digital Tanpa Batas",
    description:
      "Transformasi digital dimulai dari sini. Konsultasi gratis, response 24 jam.",
    images: ["/images/logo.jpg"],
    creator: "@haloinfitech",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <link rel="shortcut icon" href="/images/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-TileImage" content="/images/logo.jpg" />
        <meta name="application-name" content="HaloInfitech" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HaloInfitech" />
      </head>
      <body
        className={`${inter.className} antialiased bg-gray-50 text-gray-900 leading-relaxed`}
      >
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
