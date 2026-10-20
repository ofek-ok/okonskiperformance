"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="font-black text-white">OKONSKI</span> <span className="font-normal text-silverOff">PERFORMANCE</span>
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden lg:flex gap-5 text-sm text-white/80"><a href="#who-its-for">למי זה מתאים</a><a href="#treatment">מה כולל הטיפול</a><a href="#about">על אופק</a><a href="#faq">שאלות נפוצות</a></nav>
        <button type="button" className="lg:hidden text-white border border-white/30 rounded-lg px-3 py-2 text-sm" aria-expanded={menuOpen} aria-controls="mobile-site-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "סגור" : "תפריט"}</button>
        {/* CTA — always visible, style changes with scroll */}
        <a
          href="#performance-list"
          className={`inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-full active:scale-[0.98] ${
            scrolled
              ? "btn-logo-metallic text-xs px-5 py-2.5"
              : "btn-logo-metallic text-xs sm:text-sm px-4 py-2.5"
          }`}
        >
          {scrolled ? "הצטרפו לרשימה" : "Performance List"}
        </a>
      </div>
      {menuOpen && <nav id="mobile-site-navigation" aria-label="ניווט מובייל" className="lg:hidden bg-steelDark/95 backdrop-blur-xl border-t border-white/10 px-6 py-5 flex flex-col gap-4 text-white">{[["#who-its-for","למי זה מתאים"],["#treatment","מה כולל הטיפול"],["#about","על אופק"],["#faq","שאלות נפוצות"],["#performance-list","הצטרפות לרשימה"]].map(([href,label])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>}
    </header>
  );
}
