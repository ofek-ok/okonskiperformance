"use client";

import Link from "next/link";
import Image from "next/image";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/okonski.performance/",
  facebook: "https://www.facebook.com/share/18Pc4EghgP/?mibextid=wwXIfr",
  linkedin: "https://www.linkedin.com/company/okonski-preformance",
  tiktok: "https://www.tiktok.com/@okonskiperformanc",
  whatsapp: "https://wa.me/972555172571",
  email: "okonski.preformance@gmail.com",
};

export default function Footer() {
  return (
    <footer
      className="bg-[#0A0B0D] text-[#E2E8F0] border-t border-white/10 pt-16 sm:pt-20 pb-14"
      aria-label="תחתית האתר"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Row: Official Brand Identity & Social Channels */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-10">
          <div className="flex flex-col items-start text-right">
            <Link href="/#hero" className="mb-4 inline-block focus:outline-none rounded-sm">
              <Image
                src="/okonski-logo-updated.svg"
                alt="Okonski Performance"
                width={450}
                height={346}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#94A3B8] tracking-wide">
              טיפול גופני, התאוששות ושיפור יכולת
            </p>
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs font-mono text-[#94A3B8]">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E2E8F0] hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white transition-colors"
              >
                WhatsApp: 055-5172571
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-[#E2E8F0] hover:text-white underline underline-offset-4 decoration-white/25 hover:decoration-white transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          {/* Official Social Platforms */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#94A3B8]" dir="ltr">
              FOLLOW OKONSKI PERFORMANCE
            </p>
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-sm bg-[#14181F] border border-white/15 text-[#94A3B8] hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-Facebook"
                title="Facebook"
                className="w-10 h-10 rounded-sm bg-[#14181F] border border-white/15 text-[#94A3B8] hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 rounded-sm bg-[#14181F] border border-white/15 text-[#94A3B8] hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-TikTok"
                title="TikTok"
                className="w-10 h-10 rounded-sm bg-[#14181F] border border-white/15 text-[#94A3B8] hover:text-white hover:border-white/40 flex items-center justify-center transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.52V8.09a8.28 8.28 0 0 0 4.82 1.54v-3.5a4.8 4.8 0 0 1-1-.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-[#94A3B8] gap-6 md:gap-4 font-mono">
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} OKONSKI PERFORMANCE. ALL RIGHTS RESERVED.
          </p>
          <nav aria-label="קישורי תחתית ומשפטי" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-center">
            <Link href="/vision" className="hover:text-white transition-colors">חזון ומדיניות</Link>
            <Link href="/vision#policy" className="hover:text-white transition-colors">מדיניות ביטול</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">נגישות</Link>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-white transition-colors underline cursor-pointer"
              aria-label="ניהול העדפות Cookies"
            >
              העדפות עוגיות
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
