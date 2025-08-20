import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yūzen Matcha — Wholesale",
  description: "Premium B2B wholesale matcha for cafes, hotels, and craft kitchens."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-gradient-to-br from-mist via-white to-rice text-ink">{children}</body>
    </html>
  );
}
