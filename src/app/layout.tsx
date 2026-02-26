import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Daniela Reyes — Content Specialist | Wellness, Sports & Lifestyle",
  description:
    "Content strategist for wellness, sports & lifestyle brands. Blending narrative, data, and cultural insight to build movements, not just campaigns.",
  openGraph: {
    title: "Daniela Reyes — Content Specialist",
    description:
      "Content strategist for wellness, sports & lifestyle brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased noise-overlay`}
      >
        <Navigation />
        <main className="relative z-10 bg-bg-primary">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
