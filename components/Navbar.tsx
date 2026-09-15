"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show sticky background after scrolling past Hero (approx 80vh)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-white/5 py-3 shadow-2xl"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-10">
          <div className="w-10 h-10 relative">
            <Image
              src="/logo-official.png"
              alt="Okonski Performance"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <span className="block text-sm font-black text-white tracking-widest uppercase">
              OKONSKI PERFORMANCE
            </span>
          </div>
        </Link>

        {/* CTA */}
        <div className="relative z-10">
          <a
            href="#performance-list"
            className={`inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 ${
              scrolled 
                ? "bg-brand text-white hover:bg-white hover:text-brand px-6 py-2.5 text-xs sm:text-sm rounded-full" 
                : "text-white hover:text-brand-bright text-xs sm:text-sm"
            }`}
          >
            {scrolled ? "הצטרפו לרשימה" : "Performance List"}
          </a>
        </div>
      </div>
    </header>
  );
}
