import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context"; 
// 1. We import your new Header here
import HeaderV2 from "@/components/header-v2"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome Aboard",
  description: "Luxury Vessel Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LocaleProvider>
          {/* 2. We place the Header right here, above the page content */}
          <HeaderV2 />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}