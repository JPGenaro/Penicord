import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const assetVersion = '20260311-2';

export const metadata: Metadata = {
  title: "Ruggeri - Taller Mecánico Especializado | Córdoba",
  description: "Taller mecánico especializado en electromecánica y electricidad del automotor. Más de 60 años de experiencia en Córdoba, Argentina.",
  manifest: `/favicon_io/site.webmanifest?v=${assetVersion}`,
  icons: {
    icon: [
      { url: `/favicon_io/favicon.ico?v=${assetVersion}` },
      { url: `/favicon_io/favicon-32x32.png?v=${assetVersion}`, sizes: "32x32", type: "image/png" },
      { url: `/favicon_io/favicon-16x16.png?v=${assetVersion}`, sizes: "16x16", type: "image/png" },
      { url: `/favicon.svg?v=${assetVersion}`, type: "image/svg+xml" },
    ],
    apple: [{ url: `/favicon_io/apple-touch-icon.png?v=${assetVersion}`, sizes: "180x180", type: "image/png" }],
    shortcut: [`/favicon_io/favicon.ico?v=${assetVersion}`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
