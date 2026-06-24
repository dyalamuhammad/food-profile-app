import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "sonner";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body >
          {children}
          <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}