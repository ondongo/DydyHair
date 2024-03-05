import { Providers } from "../providers/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dydyhair.com/"),
  title: "dydy hair",
  description:
    "Sublimez votre style chez Dydy Hair et laissez votre beauté rayonner.",
  openGraph: {
    title: "dydy hair",
    description:
      "Sublimez votre style chez Dydy Hair et laissez votre beauté rayonner.",
    images: ["/image/dydyhair-removebg-preview.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
      <script
        src="//code.tidio.co/ctthkrbemuzwkzdtga5zcn6hwozf1vfs.js"
        async
      ></script>
    </html>
  );
}
