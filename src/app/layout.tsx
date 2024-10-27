import "~/styles/globals.css";
import config from "~/../next.config";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "Static Next Demo",
  description: "How to deploy a static Next.js app to GitHub Pages",
  icons: [{ rel: "icon", url: `${config.basePath}/favicon.ico` }],
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    title: "Static Next Demo",
    description: "How to deploy a static Next.js app to GitHub Pages",
    images: [
      {
        url: `${config.basePath}/og-image.png`,
        width: 1200,
        height: 675,
        alt: "Static Next Demo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
