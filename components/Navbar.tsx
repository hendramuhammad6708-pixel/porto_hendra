"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-line bg-bg/95 shadow-sm md:bg-bg/80 md:backdrop-blur-xl">
        <div className="flex h-14 items-center justify-between px-4 sm:px-5">
          <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="grad-bg grid size-8 place-items-center rounded-lg text-white" aria-hidden>
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"><path d="M6 5v14M18 5v14M6 12h12" /></svg>
            </span>
            <span className="sr-only sm:not-sr-only">Hendra</span>
          </a>
          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="grid size-10 place-items-center rounded-full border border-line md:hidden"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-menu" aria-label="Navigasi seluler" className="border-t border-line p-2 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-accent-soft">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
