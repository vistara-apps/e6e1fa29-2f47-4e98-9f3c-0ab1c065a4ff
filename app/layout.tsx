import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScentChain - Collaborative Perfume Creation on Base",
  description: "Create, own, and share unique perfume formulas as NFTs on Base",
  openGraph: {
    title: "ScentChain",
    description: "Collaborative perfume creation and ownership on Base",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
