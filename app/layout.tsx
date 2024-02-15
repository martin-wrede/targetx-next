"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
 
import Header from "./components/header"
import Footer from "./components/footer"
import { ContextProvider } from './Context'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
         {/* Wrap children with ContextProvider */}
         <ContextProvider>
          <Header />
          {children}
          <Footer />
        </ContextProvider>
        </body>
    </html>
  );
}
