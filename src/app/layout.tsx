import type { Metadata } from "next";
import { Cormorant_Garamond, Alex_Brush, Inter, Amiri } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Nathalie Rosenblum | Licensed Psychologist in Dubai",
  description:
    "CDA Licensed Psychologist in Dubai, Psychotherapist, Marriage Counselor & Family Therapist with over 25 years of international clinical experience.",
  keywords: [
    "Nathalie Rosenblum",
    "Licensed Psychologist Dubai",
    "Psychotherapist Dubai",
    "Marriage Counselor Dubai",
    "Family Therapist Dubai",
    "CDA Licensed",
  ],
  openGraph: {
    title: "Nathalie Rosenblum | Licensed Psychologist in Dubai",
    description:
      "CDA Licensed Psychologist in Dubai - Psychotherapist, Marriage Counselor, and Family Therapist.",
    images: ["/images/nathalie-rosenblum.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${alexBrush.variable} ${inter.variable} ${amiri.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#0d0e11] text-[#2a2a2e] font-sans selection:bg-[#c5a059]/30 selection:text-[#0b0c0e]">
        {children}
      </body>
    </html>
  );
}
