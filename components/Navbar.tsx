"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTA_LABEL = "הצטרפות לרשימת המתעניינים";

const navLinks = [
  { href: "/#who-its-for", label: "תחומי טיפול" },
  { href: "/#treatment", label: "תהליך הטיפול" },
  { href: "/#about", label: "מי אני" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/vision", label: "חזון ומדיניות" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        scrolled
          ? "bg-[#0A0B0D]/95 backdrop-blur-md border-white/12"
          : "bg-[#0A0B0D] border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-4">
        <Link
          href="/#top"
          className="flex items-center shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded-sm"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="h-9 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors ${
                  isActive ? "text-white font-semibold" : "text-[#E2E8F0]/80 hover:text-white font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/#performance-list"
            className="hidden sm:inline-flex bg-[#3E6FA8] hover:bg-[#1E4E8C] text-white text-xs sm:text-sm font-semibold py-2.5 px-5 rounded-sm transition-colors whitespace-nowrap"
          >
            {CTA_LABEL}
          </a>
          <button
            type="button"
            className="lg:hidden text-white p-2.5 border border-white/20 hover:border-white/40 rounded-sm focus:outline-none transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="ניווט מובייל"
          className="lg:hidden border-t border-white/10 bg-[#0A0B0D] px-6 py-5 flex flex-col"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#E2E8F0] hover:text-white py-3.5 border-b border-white/10 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[#94A3B8] text-xs">←</span>
            </Link>
          ))}
          <div className="pt-5 flex flex-col gap-3">
            <a
              href="/#performance-list"
              onClick={() => setMenuOpen(false)}
              className="bg-[#3E6FA8] hover:bg-[#1E4E8C] text-white text-center font-semibold py-3.5 rounded-sm text-sm transition-colors"
            >
              {CTA_LABEL}
            </a>
            <a
              href="https://wa.me/972555172571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 text-xs text-[#94A3B8] hover:text-white transition-colors"
            >
              פנייה ישירה בוואטסאפ: 055-5172571
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
