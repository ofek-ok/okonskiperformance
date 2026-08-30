"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

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
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-official.png"
            alt="Okonski Performance Logo"
            width={64}
            height={64}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain group-hover:scale-105 transition-transform"
          />
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

        {/* Action - Visible on Mobile too */}
        <a
          href="#performance-list"
          className="flex items-center gap-2 bg-brand/10 text-brand border border-brand/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium hover:bg-brand hover:text-white transition-all text-[11px] sm:text-sm"
        >
          <span dir="ltr">Performance List</span>
        </a>
      </div>
    </header>
  );
}
