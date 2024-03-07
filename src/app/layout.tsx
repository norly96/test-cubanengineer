import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test - Cuban Engineer",
  description: "TECHNICAL TEST BY CUBAN ENGINEERS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
