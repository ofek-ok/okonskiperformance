"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/5 py-3 sm:py-3"
          : "bg-transparent border-b border-transparent py-5 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand/50 rounded"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 relative shrink-0">
            <Image
              src="/logo-official.png"
              alt="Okonski Performance Logo"
              fill
              className="object-contain"
            />
          </div>
          <span
            className={`hidden sm:block font-barlow font-black tracking-widest uppercase text-sm transition-opacity duration-500 ${
              scrolled ? "text-white opacity-100" : "text-white/80 opacity-80"
            }`}
            dir="ltr"
          >
            OKONSKI PERFORMANCE
          </span>
        </Link>

        {/* CTA — always visible, style changes with scroll */}
        <a
          href="#performance-list"
          className={`inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/50 rounded-full active:scale-[0.98] ${
            scrolled
              ? "bg-brand text-white hover:bg-brand-bright text-xs px-5 py-2.5 shadow-[0_2px_20px_rgba(62,111,168,0.3)]"
              : "text-white/70 hover:text-white text-xs sm:text-sm"
          }`}
        >
          {scrolled ? "הצטרפו לרשימה" : "Performance List"}
        </a>
      </div>
    </header>
  );
}
