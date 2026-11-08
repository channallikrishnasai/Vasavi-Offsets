import { ArrowUpRight, Star } from "lucide-react";
const reviewsUrl = "https://www.google.com/search?q=Vasavi+Offset+Printers+Kalaburagi+reviews";
export default function ReviewSummary() {
  return <div className="review-card"><div className="google-wordmark" aria-label="Google">G<span>o</span><b>o</b><i>g</i><em>l</em><strong>e</strong></div><div className="review-score"><strong>4.5</strong><span className="stars" aria-label="4.5 out of 5 stars"><Star/><Star/><Star/><Star/><Star className="half-star"/></span><small>Based on 85 public reviews</small></div><a className="review-link" href={reviewsUrl} target="_blank" rel="noreferrer">Read all Google reviews <ArrowUpRight size={15}/></a><p className="review-note">Rating and review count provided by the business. Review text is shown on Google.</p></div>;
}
