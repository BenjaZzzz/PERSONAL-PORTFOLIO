import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ScrollProgress } from "@/components/ui/ScrollProgress";

import { LanguageProvider } from "@/lib/LenguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felix Ogando | Full Stack Developer",

  description:
    "Portfolio profesional de Felix Benjamin Ogando Peguero, desarrollador Full Stack especializado en Java, Spring Boot, React, Next.js y tecnologías modernas.",

  keywords: [
    "Felix Ogando",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "React",
    "Next.js",
    "TypeScript",
    "Backend Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Felix Benjamin Ogando Peguero",
    },
  ],

  creator: "Felix Benjamin Ogando Peguero",

  metadataBase: new URL("https://benjazzz.dev"),

  openGraph: {
    title: "Felix Ogando | Full Stack Developer",

    description:
      "Portfolio profesional desarrollado con Next.js, React y tecnologías modernas.",

    url: "https://benjazzz.dev",

    siteName: "Felix Ogando Portfolio",

    locale: "es_DO",

    type: "website",
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`
          ${inter.className}
          bg-[var(--background)]
          text-[var(--text)]
          antialiased
        `}
      >
        <LanguageProvider>
          <ScrollProgress />

          <Navbar />

          <main>{children}</main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
