import type { Metadata } from "next";
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
  title: "Nor-tech IT solutions",
  description: "Smart, Logic, Simple Solutions",
  icons: {
    icon: "/nortechicon.png",
    shortcut: "/nortechicon.png",
    apple: "/nortechicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "Default Title")}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Microsoft Windows Tiles */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
