"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [{ label: "Our work", href: "#work" }, { label: "Specialties", href: "#specialties" }, { label: "Our approach", href: "#approach" }, { label: "About us", href: "#about" }];
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="nav"><div className="nav-inner section-shell"><a className="brand" href="#top" aria-label="Vasavi Offset Printers home"><span className="brand-mark">V</span><span><strong>VASAVI</strong><small>OFFSET PRINTERS</small></span></a><nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">{links.map(l => <a key={l.href} onClick={() => setOpen(false)} href={l.href}>{l.label}</a>)}<a className="nav-mobile-cta" onClick={() => setOpen(false)} href="#contact">Let’s talk <ArrowUpRight size={14}/></a></nav><a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={14}/></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open}>{open ? <X/> : <Menu/>}</button></div></header>;
}
