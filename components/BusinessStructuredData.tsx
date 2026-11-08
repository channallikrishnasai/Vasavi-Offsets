import { siteUrl } from "@/lib/site";

const business = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vasavi Offset Printers",
  telephone: "+91 98452 81115",
  description: "Printing, invitation cards and personalized gifts in Kalaburagi, Karnataka.",
  url: siteUrl,
  image: `${siteUrl}/images/gallery/vasavi-interior.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Saraswati Godam, near Gurudwara, Jagat to City Bus Stand Road",
    addressLocality: "Kalaburagi",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
};

export default function BusinessStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />;
}
