'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
      scrolled ? "bg-white/80 backdrop-blur-md py-4 border-b border-black/5" : "bg-transparent py-8"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl tracking-[0.4em] font-serif uppercase">
          Velmoryx
        </Link>
        <div className="hidden md:flex gap-12 font-sans text-xs tracking-[0.2em] font-medium items-center uppercase text-foreground/80">
          <Link href="/destinations" className="hover:text-gold transition-colors">Destinations</Link>
          <Link href="/experiences" className="hover:text-gold transition-colors">Experiences</Link>
          <Link href="/concierge" className="hover:text-gold transition-colors">Concierge</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          <button className="px-6 py-2 border border-foreground/10 hover:border-gold hover:text-gold transition-all duration-300">
            Enquire
          </button>
        </div>
      </div>
    </nav>
  );
}
