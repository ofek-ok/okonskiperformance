"use client";

import Link from "next/link";
import Image from "next/image";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/okonski.performance/",
  facebook: "https://www.facebook.com/share/18Pc4EghgP/?mibextid=wwXIfr",
  linkedin: "https://www.linkedin.com/company/okonski-preformance",
  tiktok: "https://www.tiktok.com/@okonskiperformanc",
};

export default function Footer() {
  return (
    <footer className="bg-[#0E1116] border-t border-white/[0.08] pt-12 sm:pt-16 pb-24 sm:pb-12 relative overflow-hidden" aria-label="תחתית האתר">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Top footer row: Brand info & Social links (Natural RTL right alignment, no uppercase tracked label) */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8 text-right">
          <div className="flex flex-col items-start text-[#F4F6F9]">
            <Link href="/#hero" className="mb-3 inline-block focus:outline-none rounded-lg">
              <Image
                src="/okonski-logo-updated.svg"
                alt="Okonski Performance — ספורטתרפיה ושיקום תנועתי"
                width={450}
                height={346}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-[#A7AAB4] font-normal mt-1">
              טיפול גופני, התאוששות ושיפור יכולת
            </p>
          </div>

          {/* Official Social Links — Sentence Case Label, Radius 8px (rounded-lg), Spacing 8px (gap-2) */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-xs font-normal text-[#A7AAB4]">
              עקבו אחרינו ברשתות
            </p>
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-Instagram"
                title="Instagram"
                className="m-btn w-10 h-10 rounded-lg bg-[#151A22] border border-white/[0.08] text-[#A7AAB4] hover:text-[#F4F6F9] hover:border-white/[0.16] flex items-center justify-center cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-Facebook"
                title="Facebook"
                className="m-btn w-10 h-10 rounded-lg bg-[#151A22] border border-white/[0.08] text-[#A7AAB4] hover:text-[#F4F6F9] hover:border-white/[0.16] flex items-center justify-center cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-LinkedIn"
                title="LinkedIn"
                className="m-btn w-10 h-10 rounded-lg bg-[#151A22] border border-white/[0.08] text-[#A7AAB4] hover:text-[#F4F6F9] hover:border-white/[0.16] flex items-center justify-center cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="עקבו אחרי Okonski Performance ב-TikTok"
                title="TikTok"
                className="m-btn w-10 h-10 rounded-lg bg-[#151A22] border border-white/[0.08] text-[#A7AAB4] hover:text-[#F4F6F9] hover:border-white/[0.16] flex items-center justify-center cursor-pointer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.52V8.09a8.28 8.28 0 0 0 4.82 1.54v-3.5a4.8 4.8 0 0 1-1-.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer row: Copyright & Legal links (Right-aligned on mobile, spaced on 4px grid) */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/[0.08] text-sm text-[#A7AAB4] gap-6 md:gap-4 text-right">
          <p>&copy; {new Date().getFullYear()} Okonski Performance. All rights reserved.</p>
          <nav aria-label="קישורי תחתית ומשפטי" className="flex flex-wrap justify-start gap-x-6 gap-y-3">
            <Link href="/vision" className="hover:text-[#F4F6F9]">חזון ומדיניות</Link>
            <Link href="/vision#policy" className="hover:text-[#F4F6F9]">מדיניות ביטול</Link>
            <Link href="/privacy" className="hover:text-[#F4F6F9]">מדיניות פרטיות</Link>
            <Link href="/terms" className="hover:text-[#F4F6F9]">תנאי שימוש</Link>
            <Link href="/cookies" className="hover:text-[#F4F6F9]">מדיניות Cookies</Link>
            <Link href="/accessibility" className="hover:text-[#F4F6F9]">הצהרת נגישות</Link>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-[#F4F6F9] underline cursor-pointer"
              aria-label="ניהול העדפות Cookies"
            >
              ניהול העדפות Cookies
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
