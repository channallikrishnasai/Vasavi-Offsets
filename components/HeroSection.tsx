"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 38]);

  return (
    <motion.section ref={sectionRef} className="hero" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.7 }}>
      <motion.div className="hero-image" style={reduceMotion ? undefined : { y: imageY }} initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1.02 }} transition={{ duration: reduceMotion ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}>
        <Image src="/images/hero/wedding-stationery-placeholder.jpg" alt="Illustrative wedding invitation stationery photograph by Micah and Sammie Chaffin; not a Vasavi product" fill sizes="100vw" priority />
      </motion.div>
      <div className="hero-shade" />
      <div className="hero-content section-shell">
        <motion.div initial={reduceMotion ? false : "hidden"} animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.16 } } }}>
          <motion.p className="eyebrow hero-kicker" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.5 }}>A printing house in Kalaburagi</motion.p>
          <h1 className="serif hero-title"><motion.span className="hero-title-line" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.65 }}>Every Impression</motion.span><motion.span className="hero-title-line" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.65 }}><em>Tells a Story.</em></motion.span></h1>
          <motion.p className="hero-desc" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.55 }}>From beautifully crafted wedding invitations to professional business printing, we bring your ideas to life through thoughtful design and quality craftsmanship.</motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.55 }}>
            <a className="button button-light" href="#specialties">Explore Our Collection <ArrowRight size={15} /></a>
            <a className="hero-text-link" href="#contact">Request a Quote <ArrowUpRight size={15} /></a>
          </motion.div>
        </motion.div>
      </div>
      <a className="hero-scroll" href="#intro"><span>Scroll to discover</span><ArrowDown size={15} /></a>
      <div className="hero-caption">Illustrative stationery photograph · not Vasavi work</div>
    </motion.section>
  );
}
