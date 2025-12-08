import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Great Resource Divide",
  description: "A data visualization campaign highlighting inequitable school funding and resource distribution",
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
