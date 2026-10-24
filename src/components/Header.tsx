"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const BOOK = site.book;

const links = [
  { href: "#concierge", label: "Concierge Care" },
  { href: "#medspa", label: "Medical Spa" },
  { href: "#physical", label: "Executive Physical" },
  { href: "#providers", label: "Providers" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-3 focus-ring">
          <span className="font-display text-[22px] leading-none tracking-tight text-white">
            Dolce <span className="text-gold">MD</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-[13px] tracking-wide text-white/80 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white focus-ring">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:9492099266" className="text-[13px] text-white/80 hover:text-white focus-ring">
            949-209-9266
          </a>
          <a
            href={BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal px-4 py-2 text-[12px] font-semibold tracking-[0.12em] text-white uppercase focus-ring hover:bg-teal-2"
          >
            Book
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden text-white focus-ring px-2 py-1"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 px-5 py-4 text-white">
          <div className="flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="tel:9492099266">Call 949-209-9266</a>
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="bg-teal px-4 py-3 text-center uppercase tracking-widest text-xs">
              Book an Appointment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
