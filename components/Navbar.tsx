"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start gap-0.5 group">
          <span className="font-barlow text-xl sm:text-2xl font-black tracking-widest text-silver group-hover:text-brand transition-colors">
            OKONSKI
          </span>
          <span className="font-barlow text-[10px] sm:text-xs font-bold tracking-[0.3em] text-brand uppercase">
            Performance
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-silver/70 hover:text-white transition-colors">
            אודות
          </Link>
          <Link href="#services" className="text-sm font-medium text-silver/70 hover:text-white transition-colors">
            טיפולים
          </Link>
          <Link href="#audiences" className="text-sm font-medium text-silver/70 hover:text-white transition-colors">
            למי מתאים
          </Link>
        </nav>

        {/* Action */}
        <a
          href="https://wa.me/972500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-brand/10 text-brand border border-brand/20 px-4 py-2 rounded-full font-medium hover:bg-brand hover:text-white transition-all text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 21.096A9.97 9.97 0 017.39 19.8l-.348-.205-3.412.894.912-3.324-.225-.357a9.962 9.962 0 01-1.528-5.32 9.99 9.99 0 119.242 9.608zm.006-18.3A8.307 8.307 0 003.73 11.488c0 1.485.394 2.924 1.144 4.195l-1.042 3.797 3.882-1.018a8.27 8.27 0 003.993 1.026h.004c4.582 0 8.31-3.73 8.31-8.31a8.316 8.316 0 00-8.31-8.31h.001v-.069h-.001zm4.567 11.758c-.25-.125-1.484-.734-1.714-.818-.231-.084-.4-.125-.568.125-.168.25-.648.818-.795.986-.147.168-.295.188-.545.063a6.837 6.837 0 01-2.008-1.238 7.55 7.55 0 01-1.39-1.74c-.147-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.084-.167.042-.313-.02-.438-.063-.125-.568-1.368-.778-1.874-.204-.492-.41-.424-.568-.432h-.484c-.21 0-.545.084-.83.395-.284.312-1.09 1.066-1.09 2.597 0 1.531 1.116 3.013 1.272 3.22.156.208 2.195 3.35 5.318 4.698 2.08.898 2.766.974 3.266.924.571-.057 1.484-.606 1.694-1.19.21-.585.21-1.087.147-1.191-.063-.105-.231-.168-.484-.294h.004z" />
          </svg>
          <span dir="ltr">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
