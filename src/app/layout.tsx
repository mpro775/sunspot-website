import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunspotconsultancy.com"),
  title: {
    default: "Sunspot Consultancy | Business Intelligence & Strategic Advisory in Yemen",
    template: "%s | Sunspot Consultancy"
  },
  description:
    "Market intelligence, commercial visibility, distributor audit, competitor monitoring, and strategic advisory services for Yemen.",
  openGraph: {
    title: "Sunspot Consultancy",
    description: "Business intelligence and strategic advisory for Yemen and emerging markets.",
    images: ["/images/market-intelligence-hero.png"]
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
