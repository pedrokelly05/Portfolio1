import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pedro Tomás Kelly — Portfolio",
  description:
    "Portfolio personal de Pedro Tomás Kelly, diseñador y desarrollador creativo. Proyectos de diseño, desarrollo web y experiencias digitales.",
  keywords: [
    "Pedro Tomás Kelly",
    "portfolio",
    "diseño",
    "desarrollo web",
    "Next.js",
    "Figma",
    "UI/UX",
  ],
  authors: [{ name: "Pedro Tomás Kelly", url: "https://www.linkedin.com/in/pedro-tomas-kelly/" }],
  openGraph: {
    type: "website",
    title: "Pedro Tomás Kelly — Portfolio",
    description:
      "Experiencias digitales que combinan diseño cuidadoso con tecnología moderna.",
    siteName: "Pedro Tomás Kelly",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Tomás Kelly — Portfolio",
    description: "Diseñador & Desarrollador Creativo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans noise`}>{children}</body>
    </html>
  );
}
