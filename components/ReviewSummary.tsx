import { ArrowUpRight, Star } from "lucide-react";

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Vasavi+Offset+Printers+Since+1968%2C+Saraswati+Godam%2C+Kalaburagi";
const justdialUrl = "https://www.justdial.com/Gulbarga/Vasavi-Offsets-Prints-Cards-Gifts-Opposite-Gurudwarabehind-City-Bus-Stand-Afzalpur-Gulbarga/9999P8472-8472-090629155303-L9F5_BZDET";

export default function ReviewSummary() {
  return <div className="review-stack">
    <div className="google-map-card">
      <div className="google-map-heading"><span className="google-wordmark" aria-label="Google">Google</span><span>Business listing</span></div>
      <div className="google-map-frame"><iframe title="Vasavi Offset Printers on Google Maps" src="https://maps.google.com/maps?ie=UTF8&iwloc=&output=embed&q=17.3374102%2C76.8352527&t=&z=15" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      <a className="review-link" href={mapsUrl} target="_blank" rel="noreferrer">Read All Google Reviews <ArrowUpRight size={15} /></a>
      <p className="review-note">Current Google rating and reviews are shown on the live listing. No directory snapshot is displayed as Google data.</p>
    </div>

    <article className="review-card justdial-review">
      <div className="review-source"><span>Justdial customer review</span><span className="review-rating" aria-label="5 out of 5 on Justdial">5.0 <Star size={13} fill="currentColor" /></span></div>
      <blockquote>“Thank you so much for the owner of the shop.. he was very helpful and got the req things done at the earliest...”</blockquote>
      <div className="review-byline"><strong>Sheela</strong><span>21 Jun 2021 · Justdial</span></div>
      <a className="review-link" href={justdialUrl} target="_blank" rel="noreferrer">View source on Justdial <ArrowUpRight size={15} /></a>
    </article>
  </div>;
}
