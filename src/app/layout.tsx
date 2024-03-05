import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className={`flex min-h-full flex-col`}>
        <Header />
        <main className="pt-14 rounded-t-[40px] bg-white text-black h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
