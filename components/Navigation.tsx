"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#specialties" },
  { label: "Our work", href: "#work" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
    <div className="nav-inner section-shell">
      <a className="brand" href="#top" aria-label="Vasavi Offset Printers home" onClick={closeMenu}><span className="brand-mark">V</span><span><strong>VASAVI</strong><small>OFFSET PRINTERS</small></span></a>
      <nav id="main-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {links.map(link => <a key={link.href} onClick={closeMenu} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="nav-cta" href="#contact">Request a Quote <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="main-navigation">{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    </div>
  </header>;
}
