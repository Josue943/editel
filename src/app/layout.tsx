import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Editel",
  description: "Grupo Editel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>
          Constructora Civil MX | Construcción Profesional en México |
          Constructora Monterrey
        </title>
        <meta
          name="description"
          content="Constructora Civil MX ofrece servicios de construcción de alta calidad en México. Especialistas en obra civil, residencial y comercial. Contáctanos hoy."
        />
        <meta
          name="keywords"
          content="constructora, construcción, México, obra civil, edificios, casas, constructoras en México, Constructora Monterrey"
        />
        <meta name="author" content="Editel" />
      </Head>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EPM3ZP1BXK" // 👈 reemplaza con tu ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EPM3ZP1BXK');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        id="home"
      >
        <Suspense>
          <Navbar />
        </Suspense>
        <div style={{ minHeight: "72.7vh" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
