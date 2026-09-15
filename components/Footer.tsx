"use client";

import Link from "next/link";
import Image from "next/image";

// =========================================================================
// SOCIAL LINKS CONFIGURATION
// To display social links, provide your verified social media profile URLs:
// If left empty or with placeholder brackets, the FOLLOW OP section will not display.
// =========================================================================
export const SOCIAL_LINKS = {
  instagram: "", // e.g. "https://instagram.com/okonskiperformance"
  facebook: "",  // e.g. "https://facebook.com/okonskiperformance"
  tiktok: "",    // e.g. "https://tiktok.com/@okonskiperformance"
  linkedin: "",  // e.g. "https://linkedin.com/company/okonskiperformance"
};

// Helper to determine if a URL is valid and configured
function isConfiguredUrl(url?: string): boolean {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim();
  return (
    (trimmed.startsWith("http://") || trimmed.startsWith("https://")) &&
    !trimmed.includes("[") &&
    !trimmed.includes("]")
  );
}

export default function Footer() {
  const hasConfiguredSocial = Object.values(SOCIAL_LINKS).some(isConfiguredUrl);

  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-12 relative overflow-hidden" aria-label="תחתית האתר">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Top footer row: Brand info & Social links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-14 gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-white">
            <div className="w-12 h-12 relative mb-4">
              <Image src="/logo-official.png" alt="Okonski Performance Logo" fill className="object-contain" />
            </div>
            <p className="font-barlow font-black tracking-widest uppercase text-2xl mb-1">
              OKONSKI PERFORMANCE
            </p>
            <p className="font-barlow text-silver/60 font-bold tracking-[0.2em] uppercase text-sm">
              Built for What You Demand.
            </p>
          </div>

          {/* Social Links — Only displayed when verified URLs are configured */}
          {hasConfiguredSocial && (
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="font-barlow text-xs font-bold tracking-[0.2em] uppercase text-silver/50" dir="ltr">
                FOLLOW OP
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                {isConfiguredUrl(SOCIAL_LINKS.instagram) && (
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="עקבו אחרי Okonski Performance ב-Instagram (נפתח בלשונית חדשה)"
                    className="p-2.5 rounded-xl bg-charcoal/80 border border-white/5 text-silver/70 hover:text-white hover:border-brand/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                )}

                {/* TikTok */}
                {isConfiguredUrl(SOCIAL_LINKS.tiktok) && (
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="עקבו אחרי Okonski Performance ב-TikTok (נפתח בלשונית חדשה)"
                    className="p-2.5 rounded-xl bg-charcoal/80 border border-white/5 text-silver/70 hover:text-white hover:border-brand/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.95-4.52V8.09a8.28 8.28 0 0 0 4.82 1.54v-3.5a4.8 4.8 0 0 1-1-.44z" />
                    </svg>
                  </a>
                )}

                {/* Facebook */}
                {isConfiguredUrl(SOCIAL_LINKS.facebook) && (
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="עקבו אחרי Okonski Performance ב-Facebook (נפתח בלשונית חדשה)"
                    className="p-2.5 rounded-xl bg-charcoal/80 border border-white/5 text-silver/70 hover:text-white hover:border-brand/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}

                {/* LinkedIn */}
                {isConfiguredUrl(SOCIAL_LINKS.linkedin) && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="עקבו אחרי Okonski Performance ב-LinkedIn (נפתח בלשונית חדשה)"
                    className="p-2.5 rounded-xl bg-charcoal/80 border border-white/5 text-silver/70 hover:text-white hover:border-brand/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Bottom footer row: Copyright & Legal links */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-silver/60 gap-8 md:gap-4">
          <p className="text-center md:text-right">&copy; {new Date().getFullYear()} Okonski Performance. All rights reserved.</p>
          <nav aria-label="קישורי תחתית ומשפטי" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded">מדיניות פרטיות</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded">תנאי שימוש</Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded">מדיניות Cookies</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded">הצהרת נגישות</Link>
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-cookie-settings"))}
              className="hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-brand rounded underline cursor-pointer"
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
