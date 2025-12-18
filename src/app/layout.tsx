import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GenZ Owais | Digital Craftsman & Full-Stack Engineer",
  description: "Crafting digital experiences that push boundaries. Portfolio of GenZ Owais - Full-stack engineer specializing in high-performance web applications, scalable systems, and innovative digital solutions.",
  keywords: ["Full Stack Developer", "Web Developer", "React Developer", "Next.js", "TypeScript", "GenZ Owais", "Portfolio", "Software Engineer"],
  authors: [{ name: "GenZ Owais" }],
  creator: "GenZ Owais",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genzowais.com",
    title: "GenZ Owais | Digital Craftsman & Full-Stack Engineer",
    description: "Crafting digital experiences that push boundaries. Full-stack engineer specializing in high-performance web applications.",
    siteName: "GenZ Owais",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenZ Owais | Digital Craftsman & Full-Stack Engineer",
    description: "Crafting digital experiences that push boundaries.",
    creator: "@genzowais",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="85f156a7-29c4-4846-b1fb-9564a39502c3"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
