import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TSUE - Tashkent State University of Economics",
  description: "Building the future of economics and finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900`}>
        <Navbar />
        <main className="flex flex-col min-h-screen pt-0">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
