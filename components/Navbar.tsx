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
      setScrolled(window.scrollY > 20);
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
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b ${
        scrolled
          ? "bg-[#F5F5F2]/95 backdrop-blur-md border-[#A8B0B7]/35 shadow-[0_2px_12px_rgba(20,35,51,0.04)]"
          : "bg-[#F5F5F2] border-[#A8B0B7]/25"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Right (RTL): Brand Logo */}
        <Link
          href="/#top"
          className="flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#142333] shrink-0"
          aria-label="Okonski Performance — עמוד הבית"
        >
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center: Editorial Nav Links */}
        <nav aria-label="ניווט ראשי" className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors duration-150 ${
                  isActive
                    ? "text-[#142333] font-semibold"
                    : "text-[#22272C]/80 hover:text-[#142333] font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Left (RTL): Discreet WhatsApp + Primary CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Discreet WhatsApp Link */}
          <a
            href="https://wa.me/972555172571"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="פנייה דיסקרטית בוואטסאפ"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#49677F] hover:text-[#142333] font-medium transition-colors py-2 px-2.5 rounded-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Primary Action Button — Architectural, not a pill */}
          <a
            href="/#performance-list"
            className="bg-[#142333] hover:bg-[#22272C] text-[#F5F5F2] text-xs sm:text-sm font-medium py-2 px-3.5 sm:px-5 rounded-sm transition-colors tracking-wide whitespace-nowrap active:scale-[0.99]"
          >
            <span>שריון קדימות</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="lg:hidden text-[#22272C] p-2 rounded-sm border border-[#A8B0B7]/40 hover:bg-black/5 focus:outline-none"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 7h16M4 17h16" />
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
          className="lg:hidden border-t border-[#A8B0B7]/30 bg-[#F5F5F2] px-6 py-5 flex flex-col gap-3 shadow-lg"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#22272C] py-2 border-b border-[#A8B0B7]/20 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-[#A8B0B7] text-xs">←</span>
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/972555172571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 text-sm font-medium text-[#49677F] border border-[#A8B0B7]/40 rounded-sm"
            >
              שיחה ישירה בוואטסאפ
            </a>
            <a
              href="mailto:okonski.preformance@gmail.com"
              className="text-center py-1.5 text-xs font-mono text-[#22272C]/75 hover:text-[#142333]"
            >
              okonski.preformance@gmail.com
            </a>
            <a
              href="/#performance-list"
              onClick={() => setMenuOpen(false)}
              className="bg-[#142333] text-[#F5F5F2] text-center font-medium py-3 rounded-sm text-sm"
            >
              שריון קדימות בתורים
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
