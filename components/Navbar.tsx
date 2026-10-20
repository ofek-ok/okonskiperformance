"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#who-its-for", label: "למי זה מתאים" },
    { href: "#treatment", label: "מה כולל הטיפול" },
    { href: "#how-it-works", label: "התהליך" },
    { href: "#about", label: "על אופק" },
    { href: "#faq", label: "שאלות נפוצות" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0B0D]/95 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-[#0A0B0D]/80 backdrop-blur-md border-b border-white/[0.05] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand & Official Logo */}
        <Link
          href="#top"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-lg"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <div className="w-10 h-10 rounded-full bg-steelBase border border-white/15 p-1 shadow-md group-hover:border-logoIce/50 transition-colors shrink-0">
            <Image
              src="/logo-official.png"
              alt="Okonski Performance Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col text-right">
            <div className="font-jakarta tracking-[0.16em] uppercase text-sm leading-none" dir="ltr">
              <span className="font-extrabold text-white">OKONSKI</span>{" "}
              <span className="font-normal text-silverMuted">PERFORMANCE</span>
            </div>
            <span className="text-[11px] text-silverDark font-medium tracking-normal mt-1 hidden sm:block">
              טיפול גופני, התאוששות ושיפור יכולת
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-7 lg:gap-8 text-[13px] font-semibold text-silverMuted">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Region Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden lg:flex items-center gap-2 text-xs text-silverMuted border-l border-white/10 pl-4" dir="ltr">
            <span className="w-2 h-2 rounded-full bg-logoIce animate-pulse"></span>
            <span className="font-jakarta text-[11px] font-bold text-silverOff">SHARON REGION</span>
          </div>
          
          <a
            href="#performance-list"
            className="btn-logo-metallic text-white text-xs sm:text-[13px] font-bold py-2.5 px-5 sm:px-6 rounded-full tracking-wide shadow-lg"
          >
            הצטרפו ל־Performance List
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-silverOff p-2 rounded-lg border border-white/15 bg-steelBase hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="ניווט מובייל"
          className="md:hidden bg-charcoalDark/98 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white animate-fade-up shadow-2xl"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-silverOff hover:text-white py-1 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#performance-list"
            onClick={() => setMenuOpen(false)}
            className="btn-logo-metallic text-center text-white font-bold py-3 px-6 rounded-full text-sm mt-2"
          >
            הצטרפו ל־Performance List
          </a>
        </nav>
      )}
    </header>
  );
}

