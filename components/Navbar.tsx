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
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-2xl px-6 py-3 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          
          {/* Logo on the right (RTL) */}
          <Link
            href="/#hero"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded-lg shrink-0"
            aria-label="Okonski Performance — עמוד הבית"
          >
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance — ספורטתרפיה ושיקום תנועתי"
              width={450}
              height={346}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navigation links in the center */}
          <nav aria-label="ניווט ראשי" className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-[13px] font-semibold text-neutral-300">
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

          {/* CTA button on the left (RTL) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/#performance-list"
              className="bg-white text-black hover:bg-neutral-200 transition-colors text-xs sm:text-[13px] font-medium py-2 px-3.5 sm:px-5 rounded-lg tracking-wide whitespace-nowrap inline-flex items-center justify-center min-h-[36px]"
            >
              הבטחת מקום בפתיחה
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-neutral-300 min-w-[38px] min-h-[38px] p-2 rounded-lg border border-neutral-700/60 bg-neutral-800/60 hover:border-neutral-600 flex items-center justify-center focus:outline-none transition-colors"
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

        {/* Mobile Drawer inside floating container */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="ניווט מובייל"
            className="md:hidden mt-3 pt-3 border-t border-neutral-800/80 flex flex-col gap-1 text-white animate-fade-up"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-neutral-300 hover:text-white py-2.5 px-3 rounded-lg hover:bg-white/[0.06] active:bg-white/[0.1] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-neutral-500 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
