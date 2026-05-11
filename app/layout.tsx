import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ScrollSmoothingProvider } from "./components/scroll-smoothing-provider";
import "./globals.css";

const siteUrl = "https://jminfrastructure.co.uk";
const title = "JM Infrastructure | Glasgow Digital Infrastructure";
const description =
  "Online infrastructure for trades and local service businesses across Glasgow and Central Scotland: website, Google profile, enquiry flow, follow-up, and reviews.";
const socialImage = {
  url: "/og-image.png",
  width: 1731,
  height: 909,
  alt: "JM Infrastructure brand preview",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "JM Infrastructure",
    type: "website",
    locale: "en_GB",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollSmoothingProvider>{children}</ScrollSmoothingProvider>
      </body>
    </html>
  );
}
