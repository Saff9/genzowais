import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GenZ Owais – Full Stack Engineer",
    template: "%s | GenZ Owais",
  },
  description: "High-performance, modern web development by GenZ Owais.",
  openGraph: {
    title: "GenZ Owais",
    description: "Full Stack Engineer",
    images: ["/og.png"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
