"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Quote } from "lucide-react";

const reviews = [
  {
    name: "Naga Shruthi Sonth",
    source: "Yappe",
    quote: "…designed to perfection as per our required customization…",
    href: "https://yappe.in/karnataka/kalaburagi/vasavi-offset-printers-since-1968/1738169",
  },
  {
    name: "shweta bhoske",
    source: "Yappe",
    quote: "…cards were given in someother colour print…",
    href: "https://yappe.in/karnataka/kalaburagi/vasavi-offset-printers-since-1968/1738169",
  },
  {
    name: "Vishal Yalwarkar",
    source: "Yappe",
    quote: "…association with vasavi printers has been amazing…",
    href: "https://yappe.in/karnataka/kalaburagi/vasavi-offset-printers-since-1968/1738169",
  },
  {
    name: "sheela",
    source: "Justdial",
    quote: "…he was very helpful and got the req things done at the earliest…",
    href: "https://www.justdial.com/Gulbarga/Offset-Printing-Services-For-Calendar/nct-10341419",
  },
];

export default function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || hovered || focused || reduceMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reduceMotion]);

  const go = (direction: number) => setActive((current) => (current + direction + reviews.length) % reviews.length);
  const review = reviews[active];

  return (
    <section
      className="review-carousel"
      aria-label="Public customer reviews"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="review-carousel-top"><span className="eyebrow">Publicly posted reviews · {active + 1} of {reviews.length}</span><Quote size={25} strokeWidth={1.2} aria-hidden="true" /></div>
      <div className="review-slide" aria-live={paused || hovered || focused ? "polite" : "off"} aria-atomic="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="review-slide-content"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.32 }}
          >
            <blockquote>“{review.quote}”</blockquote>
            <div className="review-byline"><strong>{review.name}</strong><span>Public name as shown on {review.source}</span></div>
            <a className="review-link" href={review.href} target="_blank" rel="noreferrer">View original on {review.source} <ArrowUpRight size={15} /></a>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="review-carousel-controls">
        <div className="review-carousel-dots" aria-label="Choose a review">{reviews.map((item, index) => <button key={item.name} type="button" aria-label={`Show review by ${item.name}`} aria-current={active === index ? "true" : undefined} className={active === index ? "is-active" : ""} onClick={() => setActive(index)} />)}</div>
        <div className="review-carousel-buttons">
          <button type="button" aria-label="Previous review" onClick={() => go(-1)}><ArrowLeft size={16} /></button>
          <button type="button" aria-label={paused ? "Resume automatic reviews" : "Pause automatic reviews"} onClick={() => setPaused((value) => !value)}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>
          <button type="button" aria-label="Next review" onClick={() => go(1)}><ArrowRight size={16} /></button>
        </div>
      </div>
      <p className="review-note">Excerpts are shown as published on their respective directories. Names and sources are preserved; these are not Google reviews.</p>
    </section>
  );
}
