import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, MapPin, MessageCircle, MoveUpRight, Phone } from "lucide-react";
import BusinessStructuredData from "@/components/BusinessStructuredData";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ReviewSummary from "@/components/ReviewSummary";
import WorkGallery from "@/components/WorkGallery";
import { Reveal } from "@/components/Reveal";

const categories = [
  { n: "01", title: "Wedding invitations", text: "Wedding cards and invitation printing are listed for Vasavi. Ask the team about formats and personalisation for your occasion.", photo: "/images/hero/wedding-stationery-placeholder.jpg", alt: "Illustrative wedding stationery photograph; not a Vasavi product", label: "Illustrative reference", className: "category-reference" },
  { n: "02", title: "Commercial printing", text: "Digital prints and colour Xerox are named on the services poster supplied for Vasavi.", photo: "/images/gallery/vasavi-interior.jpg", alt: "Vasavi showroom interior with a sign reading Print Partner", label: "Vasavi photo", className: "" },
  { n: "03", title: "Banners & large format", text: "Flex prints are listed on the services poster supplied for Vasavi.", photo: "/images/gallery/vasavi-storefront.jpg", alt: "Vasavi Offset Printers storefront and exterior sign", label: "Vasavi photo", className: "" },
  { n: "04", title: "Personalized gifts", text: "Personalized, corporate and return gifts are listed on the services poster supplied for Vasavi.", photo: "/images/gallery/vasavi-showroom.jpg", alt: "Vasavi showroom with card and gift displays", label: "Vasavi photo", className: "" },
];

const process = [
  { n: "01", title: "Discover", text: "Tell us what you are planning and which kind of printing or product you have in mind.", icon: MessageCircle },
  { n: "02", title: "Customize", text: "Discuss available formats and the wording or personalisation details for your request.", icon: MoveUpRight },
  { n: "03", title: "Approve", text: "Confirm the artwork, spelling and order details with the team before production begins.", icon: Check },
  { n: "04", title: "Produce", text: "Once the scope and estimate are agreed, the team can confirm production timing and next steps.", icon: ArrowRight },
];

export default function Home() {
  return <>
    <BusinessStructuredData />
    <Navigation />
    <main id="top">
      <HeroSection />

      <section className="intro-strip" id="intro" aria-label="Vasavi business details">
        <div className="section-shell intro-grid">
          <div className="intro-label"><span className="eyebrow">Print & gifting in Kalaburagi</span></div>
          <p>Wedding cards · Digital prints · Flex prints · <span>Personalized gifts</span></p>
          <div className="intro-location"><MapPin size={15} /><span><strong>58 years listed · since 1968*</strong><small className="legacy-confirmation">Year shown in supplied materials and listings; owner confirmation pending.</small></span></div>
        </div>
      </section>

      <section className="specialties section-pad" id="specialties">
        <div className="section-shell">
          <Reveal><div className="section-heading"><div><span className="eyebrow">Made for your moment</span><h2 className="section-title">A little more thought<br />in every detail.</h2></div><p className="section-intro">Explore the printing and gifting categories shown in Vasavi’s business materials, then get in touch to discuss your brief.</p></div></Reveal>
          <p className="category-image-note">Business photographs are labeled. Invitation photography is illustrative and is not a Vasavi product.</p>
          <div className="category-grid">{categories.map((category, index) => <Reveal key={category.n} delay={index * 0.07}>
            <article className="category-card">
              <div className={`category-image image-frame ${category.className}`}>
                <Image src={category.photo} alt={category.alt} fill sizes="(max-width: 700px) 85vw, (max-width: 1000px) 45vw, 25vw" />
                <span className="image-index">{category.n}</span><span className="category-photo-label">{category.label}</span>
                <span className="category-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
              </div>
              <div className="category-copy"><h3 className="serif">{category.title}</h3><p>{category.text}</p><a className="category-explore" href="#contact">Explore <ArrowRight size={13} /></a></div>
            </article>
          </Reveal>)}</div>
        </div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-shell">
          <Reveal><div className="section-heading"><div><span className="eyebrow">A look inside Vasavi</span><h2 className="section-title">Our place.<br />Our print story.</h2></div><p className="section-intro">Browse the business photographs and services poster supplied for this site. Only Vasavi-provided assets appear in this gallery.</p></div></Reveal>
          <WorkGallery />
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-shell about-grid">
          <Reveal><div className="about-photo image-frame"><Image src="/images/gallery/vasavi-showroom.jpg" alt="Vasavi showroom with invitation and gift displays, photograph supplied for this website" fill sizes="(max-width:800px) 100vw, 50vw" /><div className="photo-note">Visit us in Kalaburagi</div></div></Reveal>
          <Reveal delay={0.12}><div className="about-copy"><span className="eyebrow">The Vasavi difference</span><h2 className="section-title">Craftsmanship that<br /><em>makes an impression.</em></h2><p className="about-lede">A local printing and gifting business with a range grounded in cards, prints and personalized products.</p><p className="section-intro">Vasavi’s supplied services poster lists invitation and wedding cards, digital and flex prints, colour Xerox, and personalized, corporate and return gifts. A public Justdial review also describes help with a store request; see its source and date in the review section.</p><div className="value-list"><div><span>01</span><p><strong>Personalized options</strong><small>Personalized gifts are listed in Vasavi’s supplied service material.</small></p></div><div><span>02</span><p><strong>Cards and print services</strong><small>Wedding cards, digital prints and flex prints are listed offerings.</small></p></div><div><span>03</span><p><strong>Rooted in Kalaburagi</strong><small>Visit or call to discuss the details of your request.</small></p></div></div><a className="inline-link" href="#contact">Talk to our team <ArrowRight size={15} /></a></div></Reveal>
        </div>
      </section>

      <section className="reviews-section section-pad" id="reviews">
        <div className="section-shell reviews-grid">
          <Reveal><div><span className="eyebrow">Customer voices</span><h2 className="section-title">Their words.<br />Their experience.</h2><p className="section-intro">A rotating selection of publicly posted reviews. Each quote keeps its public name and original directory attribution; open the source to read the full review.</p><a className="inline-link" href="https://www.google.com/maps/search/?api=1&query=Vasavi+Offset+Printers+Since+1968%2C+Saraswati+Godam%2C+Kalaburagi" target="_blank" rel="noreferrer">Read All Google Reviews <ArrowUpRight size={15} /></a></div></Reveal>
          <Reveal delay={0.1}><ReviewSummary /></Reveal>
        </div>
      </section>

      <section className="process-section section-pad" id="approach">
        <div className="section-shell"><Reveal><div className="process-heading"><span className="eyebrow">From first hello to finished piece</span><h2 className="section-title">Good things begin<br />with a conversation.</h2><p className="section-intro">A simple conversation helps confirm the right scope before work begins. Artwork and order details should be confirmed directly with the team.</p></div></Reveal><div className="process-grid process-grid-four">{process.map((item, index) => <Reveal key={item.n} delay={index * 0.07}><article className="process-card"><div className="process-top"><span>{item.n}</span><item.icon size={21} strokeWidth={1.4} /></div><h3 className="serif">{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-texture" /><div className="section-shell contact-inner"><Reveal><span className="eyebrow">Have something in mind?</span><h2 className="serif">Good things begin<br /><em>with a conversation.</em></h2><p>Have a printing project in mind? Let’s bring your ideas to life.</p><div className="contact-actions"><a className="button button-light" href="https://wa.me/919845281115" target="_blank" rel="noreferrer"><MessageCircle size={15} /> Start a Quote on WhatsApp</a><a className="button button-contact-outline" href="tel:+919845281115"><Phone size={15} /> Talk to Our Team</a></div></Reveal></div><span className="contact-decoration serif" aria-hidden="true">V</span></section>
    </main>

    <footer className="footer"><div className="section-shell"><div className="footer-main"><div className="footer-brand"><a className="brand brand-footer" href="#top"><span className="brand-mark">V</span><span><strong>VASAVI</strong><small>OFFSET PRINTERS</small></span></a><p>Printing, invitation cards and personalized gifts in Kalaburagi.</p><span className="footer-since">The 1968 establishment year appears on supplied business material and directory listings; owner confirmation is pending.</span></div><div className="footer-column"><span className="eyebrow">Products</span><a href="#specialties">Wedding invitations</a><a href="#specialties">Commercial printing</a><a href="#specialties">Banners & flex prints</a><a href="#specialties">Personalized gifts</a><a href="#work">Our work</a></div><div className="footer-column"><span className="eyebrow">Contact</span><a href="tel:+919845281115">+91 98452 81115</a><span>Saraswati Godam, near Gurudwara<br />Kalaburagi, Karnataka, India</span><a href="https://www.google.com/maps/search/?api=1&query=Vasavi+Offset+Printers+Since+1968%2C+Saraswati+Godam%2C+Kalaburagi" target="_blank" rel="noreferrer">Google Maps location <ArrowUpRight size={13} /></a><a href="https://wa.me/919845281115" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a></div><div className="footer-cta"><span className="eyebrow">Your idea starts here</span><a className="footer-circle" href="#contact" aria-label="Start a conversation"><ArrowUpRight /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Vasavi Offset Printers</span><span>Made with care in Kalaburagi</span><a href="#top">Back to top ↑</a></div></div></footer>
  </>;
}
