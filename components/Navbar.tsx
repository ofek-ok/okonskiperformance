"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
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
    { href: "/vision", label: "חזון ומדיניות" },
  ];

  return (
    <>
      {/* Floating Elongated Capsule Navbar - Inspired by Adir Asher layout */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-6xl xl:max-w-7xl transition-all duration-300 ${
          menuOpen
            ? "rounded-[28px] bg-[#0E131A]/95 backdrop-blur-2xl border border-white/20 shadow-2xl p-4 sm:p-5"
            : scrolled
            ? "rounded-full bg-[#161D26]/85 backdrop-blur-2xl border border-white/20 shadow-[0_16px_44px_-10px_rgba(0,0,0,0.65)] px-4 sm:px-8 py-2.5 sm:py-3"
            : "rounded-full bg-white/[0.15] sm:bg-white/[0.16] backdrop-blur-2xl border border-white/25 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5),_0_2px_12px_rgba(255,255,255,0.06)] px-4 sm:px-8 py-2.5 sm:py-3"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* Right (RTL): Official Brand Logo */}
          <Link
            href="/#hero"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-full shrink-0"
            aria-label="Okonski Performance — עמוד הבית"
          >
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance — ספורטתרפיה וטיפול בכאב ובפציעות ספורט, שיקום תנועתי והגעה עד הבית לספורטאים בשרון"
              width={450}
              height={346}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Navigation links spaced evenly with breathing room */}
          <nav aria-label="ניווט ראשי" className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-3 xl:gap-5 px-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="text-[13.5px] lg:text-[14px] font-medium text-white/90 hover:text-white px-4 py-1.5 rounded-full hover:bg-white/[0.12] transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Left (RTL): CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="/#performance-list"
              className="bg-white text-black hover:bg-neutral-100 transition-all duration-200 text-xs sm:text-[13px] font-semibold py-2 px-3.5 sm:px-6 rounded-full tracking-wide whitespace-nowrap inline-flex items-center justify-center min-h-[38px] shadow-sm active:scale-[0.98]"
            >
              הבטחת מקום בפתיחה
            </a>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="md:hidden text-white/90 min-w-[38px] min-h-[38px] p-2 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.16] active:bg-white/[0.22] flex items-center justify-center focus:outline-none transition-colors"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile Expanded Drawer inside curved panel */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="ניווט מובייל"
            className="md:hidden mt-3.5 pt-3.5 border-t border-white/15 flex flex-col gap-1.5 text-white animate-fade-up"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[15px] font-medium text-white/95 hover:text-white py-3 px-4 rounded-xl hover:bg-white/[0.12] active:bg-white/[0.2] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-white/60 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <div className="pt-2">
              <a
                href="/#performance-list"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-white text-black font-semibold text-center py-3 px-6 rounded-full text-sm block min-h-[44px] flex items-center justify-center hover:bg-neutral-100 transition-colors shadow-sm"
              >
                הבטחת מקום בפתיחה ←
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
