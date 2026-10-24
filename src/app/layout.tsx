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
  title: "Dolce MD | Concierge Primary Care & Medical Spa in Laguna Beach",
  description:
    "Concierge primary care and medical spa in Laguna Beach, led by board-certified family physician Dr. John Sanguedolce. Call 949-209-9266.",
  robots: { index: false, follow: false },
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
