"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0E1116]/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Right (RTL): Official Brand Logo */}
        <Link
          href="/#hero"
          className="flex items-center focus:outline-none rounded-lg shrink-0"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Clean Text Links (Spacing 32px = gap-8) */}
        <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm ${
                  isActive
                    ? "text-[#F4F6F9] font-medium"
                    : "text-[#A7AAB4] hover:text-[#F4F6F9] font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Left (RTL): Quiet Secondary Button (So Hero owns the single Primary Button on screen) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="/#performance-list"
            className="btn-secondary py-2 px-4 text-xs sm:text-sm whitespace-nowrap"
          >
            <span className="sm:hidden">שריון מקום</span>
            <span className="hidden sm:inline">שריון קדימות בתורים</span>
          </a>

          <button
            type="button"
            className="lg:hidden text-[#F4F6F9] w-12 h-12 p-3 rounded-lg border border-white/[0.08] hover:border-white/[0.16] flex items-center justify-center focus:outline-none"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 17h16" />
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
          className="lg:hidden bg-[#0E1116] border-t border-white/[0.08] px-4 sm:px-8 py-6 flex flex-col divide-y divide-white/[0.08]"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#A7AAB4] hover:text-[#F4F6F9] py-3 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-xs text-[#A7AAB4]">←</span>
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="/#performance-list"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full"
            >
              שריון קדימות בתורים
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
