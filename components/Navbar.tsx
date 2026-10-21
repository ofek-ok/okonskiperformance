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

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "/#who-its-for", label: "תחומי טיפול" },
    { href: "/#treatment", label: "תהליך הטיפול" },
    { href: "/#about", label: "מי אני" },
    { href: "/#faq", label: "שאלות נפוצות" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0B0D]/95 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl"
            : "bg-[#0A0B0D]/85 backdrop-blur-md border-b border-white/[0.05] py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Brand & Official Logo */}
          <Link
            href="/#top"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-lg shrink-0"
            aria-label="Okonski Performance — עמוד הבית"
          >
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance — ספורטרפיה וטיפול בכאב ובפציעות ספורט, שיקום תנועתי והגעה עד הבית לספורטאים בשרון"
              width={450}
              height={346}
              className="w-[90px] xs:w-[102px] sm:w-[116px] h-auto object-contain"
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
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/#performance-list"
              className="btn-logo-metallic text-white text-[10.5px] xs:text-[11.5px] sm:text-[13px] font-bold py-2 px-2.5 xs:px-3 sm:px-6 rounded-full tracking-wide shadow-lg whitespace-nowrap inline-flex items-center justify-center min-h-[38px] sm:min-h-[42px]"
            >
              הבטחת מקום בפתיחה
            </a>

            {/* Mobile Menu Button - 44x44px min touch target */}
            <button
              type="button"
              className="lg:hidden text-silverOff min-w-[44px] min-h-[44px] p-2.5 rounded-xl border border-white/15 bg-steelBase hover:border-white/30 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce transition-colors"
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
            className="lg:hidden bg-charcoalDark/98 border-t border-white/10 px-5 py-6 flex flex-col gap-2 text-white animate-fade-up shadow-2xl max-h-[calc(100svh-65px)] overflow-y-auto"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-silverOff hover:text-white py-3.5 px-3 rounded-xl hover:bg-white/[0.04] active:bg-white/[0.08] transition-colors border-b border-white/5 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-silverDark rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <div className="pt-3">
              <a
                href="/#performance-list"
                onClick={() => setMenuOpen(false)}
                className="btn-logo-metallic text-center text-white font-bold py-3.5 px-6 rounded-full text-sm block w-full min-h-[48px] flex items-center justify-center shadow-lg"
              >
                הבטחת מקום בפתיחה
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
