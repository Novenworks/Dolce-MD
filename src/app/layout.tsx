import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dolce MD | Physician-Led Longevity + Primary Care in Laguna Beach",
  description:
    "Concierge primary care with advanced diagnostics, wellness programs, and physician-guided longevity services led by Dr. John Sanguedolce in Laguna Beach.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-foam text-ink">{children}</body>
    </html>
  );
}
