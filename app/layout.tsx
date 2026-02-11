import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welcome Aboard | Luxury Vessel Management",
  description: "Premier yacht management and concierge services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}