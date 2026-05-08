import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });
// 1. Separate the Viewport export
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
// This replaces your Head.tsx
	
	export const metadata: Metadata = {
  title: "SAI TECHVERSE | Engineering the Future",
  description: "Empowering all Engineers via IOBE", // Updated
  other: {
    charset: "UTF-8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

