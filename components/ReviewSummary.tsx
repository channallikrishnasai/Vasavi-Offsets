import { ArrowUpRight } from "lucide-react";
import ReviewCarousel from "@/components/ReviewCarousel";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vasavi+Offset+Printers+Since+1968%2C+Saraswati+Godam%2C+Kalaburagi";
export default function ReviewSummary() {
  return <div className="review-stack">
    <div className="google-map-card">
      <div className="google-map-heading"><span className="google-wordmark" aria-label="Google">Google</span><span>Business listing</span></div>
      <div className="google-map-frame"><iframe title="Vasavi Offset Printers on Google Maps" src="https://maps.google.com/maps?ie=UTF8&iwloc=&output=embed&q=17.3374102%2C76.8352527&t=&z=15" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      <a className="review-link" href={mapsUrl} target="_blank" rel="noreferrer">Read All Google Reviews <ArrowUpRight size={15} /></a>
      <p className="review-note">Open the live Google Maps listing to see Google’s current ratings and reviews. Public directory reviews below remain labeled by their source.</p>
    </div>
    <ReviewCarousel />
  </div>;
}
