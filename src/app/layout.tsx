import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduXEducation | Premium Financial Education Platform",
  description:
    "EduXEducation is a premium online learning platform for financial literacy, market analysis, risk management, and investment education. Learn from industry experts with structured courses, practical case studies, and lifetime access.",
  keywords: [
    "financial education",
    "online learning",
    "market analysis",
    "risk management",
    "investment education",
    "financial literacy",
    "EduXEducation",
    "online courses",
    "skill development",
  ],
  authors: [{ name: "EduXEducation" }],
  creator: "EduXEducation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduxeducation.com",
    siteName: "EduXEducation",
    title: "EduXEducation | Premium Financial Education Platform",
    description:
      "Premium online learning platform for financial literacy, market analysis, and investment education.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EduXEducation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduXEducation | Premium Financial Education Platform",
    description:
      "Premium online learning platform for financial literacy and investment education.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
