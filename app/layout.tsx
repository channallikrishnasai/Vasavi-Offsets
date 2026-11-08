import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "./home.css";
import { siteUrl } from "@/lib/site";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["400", "500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vasavi Offset Printers | Thoughtful Printing, Kalaburagi",
  description: "Wedding cards, digital and flex prints, colour Xerox, and personalized gifts from Vasavi Offset Printers in Kalaburagi, Karnataka.",
  alternates: { canonical: "/" },
  openGraph: { title: "Vasavi Offset Printers", description: "Every impression tells a story.", type: "website", locale: "en_IN", url: siteUrl, images: ["/images/gallery/vasavi-interior.jpg"] },
  twitter: { card: "summary_large_image", title: "Vasavi Offset Printers", description: "Every impression tells a story.", images: ["/images/gallery/vasavi-interior.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${editorial.variable} ${sans.variable}`}><body>{children}</body></html>;
}
