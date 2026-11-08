import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import "./home.css";

const editorial = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-editorial", weight: ["400", "500", "600", "700"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Vasavi Offset Printers | Thoughtful Printing, Kalaburagi",
  description: "Thoughtfully designed wedding invitations, commercial printing, large format and personalized print solutions in Kalaburagi, Karnataka.",
  openGraph: { title: "Vasavi Offset Printers", description: "Every impression tells a story.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: "Vasavi Offset Printers", description: "Every impression tells a story." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${editorial.variable} ${sans.variable}`}><body>{children}</body></html>;
}
