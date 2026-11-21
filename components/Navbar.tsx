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
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-6xl xl:max-w-7xl transition-[background-color,border-color,box-shadow,border-radius] duration-200 [transition-timing-function:var(--ease-out)] ${
          menuOpen
            ? "rounded-[28px] bg-[#0B0B0F]/95 backdrop-blur-2xl border border-[#2F5E9E]/45 shadow-[0_24px_60px_rgba(0,0,0,0.85)] p-4 sm:p-5"
            : scrolled
            ? "rounded-full bg-[#0B0B0F]/90 backdrop-blur-2xl border border-[#2F5E9E]/40 shadow-[0_16px_44px_-10px_rgba(0,0,0,0.85),0_0_24px_-6px_rgba(47,94,158,0.28)] px-4 sm:px-8 py-2.5 sm:py-3"
            : "rounded-full bg-[#0B0B0F]/75 backdrop-blur-2xl border border-white/20 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.65)] px-4 sm:px-8 py-2.5 sm:py-3"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Right (RTL): Official Brand Logo */}
          <Link
            href="/#hero"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5E9E] rounded-full shrink-0"
            aria-label="Okonski Performance — עמוד הבית"
          >
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance — ספורטתרפיה, טיפול בכאב ובפציעות ספורט ושיקום תנועתי"
              width={450}
              height={346}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Navigation links */}
          <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center justify-center flex-1 gap-1.5 xl:gap-4 px-3">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-[13.5px] xl:text-[14px] font-medium px-3.5 py-1.5 rounded-full transition-[background-color,color] duration-150 [transition-timing-function:var(--ease-out)] whitespace-nowrap ${
                    isActive
                      ? "bg-[#2F5E9E]/25 text-white border border-[#2F5E9E]/50 font-semibold"
                      : "text-[#A7AAB4] hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Left (RTL): Performance Blue CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="/#performance-list"
              className="m-btn bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/15 text-[11.5px] sm:text-[13px] font-semibold py-2 px-3.5 sm:px-5 rounded-full tracking-wide whitespace-nowrap inline-flex items-center justify-center min-h-[40px] sm:min-h-[38px] shadow-[0_6px_20px_-4px_rgba(47,94,158,0.65)]"
            >
              <span className="sm:hidden">שריון מקום</span>
              <span className="hidden sm:inline">שריון קדימות בתורים</span>
            </a>

            <button
              type="button"
              className="lg:hidden text-white min-w-[42px] min-h-[42px] p-2.5 rounded-full border border-[#2F5E9E]/40 bg-[#2F5E9E]/15 hover:bg-[#2F5E9E]/25 flex items-center justify-center focus:outline-none transition-colors"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="ניווט מובייל"
            className="lg:hidden mt-4 pt-4 border-t border-white/15 flex flex-col gap-1.5 animate-fade-in"
          >
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium px-4 py-3 rounded-2xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#2F5E9E]/20 text-white border border-[#2F5E9E]/40 font-semibold"
                      : "text-[#A7AAB4] hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[#2F5E9E] text-sm">←</span>
                </Link>
              );
            })}
            <div className="mt-2 pt-3 border-t border-white/10">
              <a
                href="/#performance-list"
                onClick={() => setMenuOpen(false)}
                className="m-btn w-full bg-[#2F5E9E] hover:bg-[#386CB3] text-white font-bold py-3.5 rounded-full text-center text-sm inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(47,94,158,0.65)]"
              >
                <span>שריון קדימות בתורים</span>
                <span>←</span>
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
