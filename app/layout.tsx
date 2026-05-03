import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://jminfrastructure.co.uk";
const title = "JM Infrastructure | Digital Systems for Stronger Business Presence";
const description =
  "JM Infrastructure builds digital systems for businesses across Glasgow and Central Scotland: search presence, credibility, enquiry flow, follow-up, and reviews.";

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
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "JM Infrastructure",
    type: "website",
    locale: "en_GB",
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
