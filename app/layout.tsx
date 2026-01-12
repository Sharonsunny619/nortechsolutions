import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nor-tech IT Solutions",
  description: "Smart, Logic, Simple Solutions",

  // 🔴 REQUIRED
  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico" }, // MUST be first
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },

  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileImage": "/icons/ms-icon-144x144.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
