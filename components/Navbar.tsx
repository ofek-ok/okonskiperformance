"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
      {/* Floating Capsule / Rounded Glass Panel Navbar */}
      <header
        className={`fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] sm:w-auto max-w-4xl transition-all duration-300 ${
          menuOpen ? "rounded-3xl" : "rounded-full"
        } bg-white/[0.15] backdrop-blur-2xl border border-white/25 shadow-[0_12px_36px_-10px_rgba(0,0,0,0.5),_0_2px_10px_rgba(255,255,255,0.06)] px-4 sm:px-6 py-2 sm:py-2.5`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-7 lg:gap-10">
          
          {/* Logo on the right (RTL) - Preserving exact artwork and proportions */}
          <Link
            href="/#hero"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-full shrink-0"
            aria-label="Okonski Performance — עמוד הבית"
          >
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance — ספורטתרפיה ושיקום תנועתי"
              width={450}
              height={346}
              className="h-7 sm:h-7.5 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation links in the center - Soft rounded pill items */}
          <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="text-[13px] lg:text-[13.5px] font-medium text-white/85 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.12] transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA button on the left (RTL) - Rounded Capsule Pill */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="/#performance-list"
              className="bg-white text-black hover:bg-neutral-100 transition-all duration-200 text-xs sm:text-[13px] font-semibold py-2 px-4 sm:px-5 rounded-full tracking-wide whitespace-nowrap inline-flex items-center justify-center min-h-[36px] shadow-sm active:scale-[0.98]"
            >
              הבטחת מקום בפתיחה
            </a>

            {/* Mobile Menu Button - Rounded pill toggle */}
            <button
              type="button"
              className="md:hidden text-white/90 min-w-[36px] min-h-[36px] p-2 rounded-full border border-white/20 bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center focus:outline-none transition-colors"
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

        {/* Mobile Drawer inside floating container */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="ניווט מובייל"
            className="md:hidden mt-3 pt-3 border-t border-white/15 flex flex-col gap-1 text-white animate-fade-up"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/90 hover:text-white py-2.5 px-3 rounded-xl hover:bg-white/[0.12] active:bg-white/[0.18] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-white/50 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
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
