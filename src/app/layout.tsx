import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Software Engineer & AI Automation Specialist in Lagos, Nigeria. Backend Engineer building scalable systems, APIs, and automation workflows using Node.js, Python, and AI tools. Available for remote work and roles in Lagos.",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.jobTitle}`,
    description:
      "AI Automation Specialist based in Lagos, Nigeria and Backend Engineer building scalable APIs and automation workflows. Available for remote work and roles in Lagos.",
    url: "/",
    siteName: siteConfig.name,
    images: [{ url: siteConfig.image }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.jobTitle,
    url: siteConfig.url,
    image: siteConfig.image,
    sameAs: [siteConfig.sameAs.github, siteConfig.sameAs.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.country,
    },
    areaServed: "Nigeria",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
