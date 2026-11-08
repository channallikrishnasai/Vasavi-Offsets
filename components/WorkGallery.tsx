"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const filters = ["All", "Wedding", "Commercial", "Banners", "Gifts"] as const;
type Filter = (typeof filters)[number];
type WorkItem = { title: string; type: string; photo: string; alt: string; categories: Exclude<Filter, "All">[]; wide?: boolean; contain?: boolean };

// Every gallery image was supplied by the business owner/user; this is not a portfolio of inferred projects.
const work: WorkItem[] = [
  { title: "A welcoming space", type: "Vasavi showroom", photo: "/images/gallery/vasavi-interior.jpg", alt: "Vasavi showroom interior with a sign reading Print Partner", categories: ["Commercial"], wide: true },
  { title: "Our home in Kalaburagi", type: "Vasavi storefront", photo: "/images/gallery/vasavi-storefront.jpg", alt: "Vasavi Offset Printers storefront in Kalaburagi", categories: ["Commercial", "Banners"] },
  { title: "A look around the showroom", type: "Vasavi showroom", photo: "/images/gallery/vasavi-showroom.jpg", alt: "Vasavi showroom with card and gift displays", categories: ["Wedding", "Gifts"] },
  { title: "Prints, cards & gifts", type: "Vasavi services poster", photo: "/images/gallery/vasavi-services-poster.jpg", alt: "Vasavi poster listing invitations, wedding cards, digital prints, flex prints, colour Xerox and personalized gifts", categories: ["Wedding", "Commercial", "Banners", "Gifts"], contain: true },
];

export default function WorkGallery() {
  const [active, setActive] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();
  const visible = useMemo(() => active === "All" ? work : work.filter(item => item.categories.includes(active)), [active]);

  return <>
    <div className="work-filters" role="group" aria-label="Filter Vasavi business photographs">
      {filters.map(filter => <button key={filter} type="button" aria-pressed={active === filter} className={active === filter ? "is-active" : ""} onClick={() => setActive(filter)}>{filter}</button>)}
    </div>
    <motion.div layout className="work-grid" aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        {visible.map((item, index) => <motion.article key={item.title} layout className={`work-card ${item.wide && active === "All" ? "work-wide" : ""} ${item.contain ? "work-poster" : ""}`} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: 8 }} transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : index * 0.04 }}>
          <div className="work-image image-frame"><Image src={item.photo} alt={item.alt} fill sizes={item.wide && active === "All" ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 50vw, 30vw"} /><span className="work-photo-label">Vasavi photo</span><span className="work-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div>
          <div className="work-caption"><div><span>{item.type}</span><h3>{item.title}</h3></div><ArrowRight size={15} aria-hidden="true" /></div>
        </motion.article>)}
      </AnimatePresence>
    </motion.div>
    <p className="gallery-disclaimer">These business photographs and the services poster were supplied for the website. Product project samples can be added when owner-approved photography is available.</p>
  </>;
}
