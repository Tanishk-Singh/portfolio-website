import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanishksingh.com"),
  title: {
    default: "Tanishk Singh — Data Scientist, Edge AI",
    template: "%s — Tanishk Singh",
  },
  description:
    "MS Data Science candidate at the University of Arizona, focused on neural network compression and hardware-aware inference for Edge AI.",
  openGraph: {
    title: "Tanishk Singh — Data Scientist, Edge AI",
    description:
      "MS Data Science candidate at the University of Arizona, focused on neural network compression and hardware-aware inference for Edge AI.",
    url: "https://tanishksingh.com",
    siteName: "Tanishk Singh",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
