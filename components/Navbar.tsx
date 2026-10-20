"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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
    { href: "/#who-its-for", label: "למי זה מתאים" },
    { href: "/treatments", label: "טיפולים וחבילות" },
    { href: "/#how-it-works", label: "איך זה עובד" },
    { href: "/#about", label: "על אופק" },
    { href: "/#faq", label: "שאלות נפוצות" },
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
          href="/#top"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-lg"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <Image
            src="/logo-official.png"
            alt="Okonski Performance"
            width={150}
            height={72}
            className="w-[112px] sm:w-[142px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-4 xl:gap-7 text-[13px] font-semibold text-silverMuted">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="/#performance-list"
            className="btn-logo-metallic text-white text-[11px] sm:text-[13px] font-bold py-2.5 px-3 sm:px-6 rounded-full tracking-wide shadow-lg whitespace-nowrap"
          >
            עדכנו אותי בפתיחה
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-silverOff p-2 rounded-lg border border-white/15 bg-steelBase hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce"
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
          className="lg:hidden bg-charcoalDark/98 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white animate-fade-up shadow-2xl"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-silverOff hover:text-white py-1 border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#performance-list"
            onClick={() => setMenuOpen(false)}
            className="btn-logo-metallic text-center text-white font-bold py-3 px-6 rounded-full text-sm mt-2"
          >
            עדכנו אותי בפתיחה
          </a>
        </nav>
      )}
    </header>
  );
}

