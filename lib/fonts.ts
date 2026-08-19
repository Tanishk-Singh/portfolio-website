import { Fraunces, Inter } from "next/font/google";

// Display face: used with restraint (hero name, section headings, big pull-quotes).
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Body/UI face: everything else.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
