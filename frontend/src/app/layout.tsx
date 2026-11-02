import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexora — Research Funding & Innovation Intelligence Platform",
  description: "AI-powered intelligence platform connecting research, intellectual property, grants, and commercialization pathways.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-[#0b0d10] text-[#e2e2e6] selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

