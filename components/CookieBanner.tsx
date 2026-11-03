"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface ConsentPreferences {
  essential: true; // Always true — no opt-out
  analytics: boolean;
  marketing: boolean;
}

export const CONSENT_KEY = "cookie_consent";

export function hasConsent(type: "analytics" | "marketing"): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) return false;
    const parsed = JSON.parse(stored);
    return Boolean(parsed[type]);
  } catch {
    return false;
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(stored);
        const validated = { ...parsed, essential: true as const };
        setPreferences(validated);
        if (typeof window !== "undefined") {
          (window as any).cookieConsent = validated;
          window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: validated }));
        }
      } catch {
        setShowBanner(true);
      }
    }

    // Allow footer "manage preferences" button to reopen the banner
    const handleOpenSettings = () => {
      setShowSettings(true);
      setShowBanner(true);
    };
    document.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => document.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const savePreferences = (prefs: ConsentPreferences) => {
    const record = { ...prefs, essential: true as const, saved_at: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
    setPreferences(record);
    setShowBanner(false);
    setShowSettings(false);
    if (typeof window !== "undefined") {
      (window as any).cookieConsent = record;
      window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: record }));
    }
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  };

  // Reject is just as easy as Accept — no dark patterns
  const handleRejectNonEssential = () => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="הגדרות פרטיות ו-Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-lg z-50 bg-[#FFFFFF] text-[#22272C] rounded-sm border border-[#A8B0B7]/40 shadow-xl p-5 sm:p-6"
    >
      <div>

        {!showSettings ? (
          <div className="flex flex-col gap-4 text-right">
            <div>
              <h2 className="text-[#22272C] font-bold text-base mb-1.5">הפרטיות שלך חשובה לנו</h2>
              <p className="text-[#22272C]/75 text-xs sm:text-sm leading-relaxed">
                אנחנו משתמשים בטכנולוגיות הנדרשות להפעלת האתר, ובכפוף לבחירתך עשויים להשתמש גם בכלי מדידה כדי לשפר את השירות.{" "}
                <Link href="/cookies" className="text-[#142333] hover:text-[#49677F] underline text-xs">
                  מידע נוסף
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                onClick={handleAcceptAll}
                className="bg-[#142333] text-[#F5F5F2] font-semibold hover:bg-[#22272C] transition-colors py-2 px-4 rounded-sm text-xs cursor-pointer"
              >
                אישור
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="bg-transparent text-[#22272C] border border-[#A8B0B7]/60 hover:bg-[#F5F5F2] font-medium py-2 px-3.5 rounded-sm text-xs transition-colors cursor-pointer"
              >
                דחיית לא חיוניים
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="text-[#22272C]/70 hover:text-[#142333] text-xs py-2 px-2 underline transition-colors mr-auto"
              >
                ניהול העדפות
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-right">
            <h2 className="text-xl font-bold text-[#22272C]">ניהול העדפות Cookies</h2>
            <p className="text-[#22272C]/70 text-sm">
              בחרו אילו סוגי Cookies לאפשר. Cookies חיוניים נדרשים תמיד לתפעול האתר.{" "}
              <Link href="/cookies" className="text-[#142333] hover:text-[#49677F] underline">
                מדיניות Cookies מלאה
              </Link>
            </p>

            <div className="space-y-4" role="group" aria-label="סוגי Cookies">

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-essential"
                  checked={true}
                  disabled
                  aria-disabled="true"
                  className="mt-1 w-4 h-4 accent-[#142333]"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-essential" className="font-bold text-[#22272C] block mb-0.5">
                    חיוניים (Essential)
                  </label>
                  <p className="text-xs sm:text-sm text-[#22272C]/60">עוגיות הכרחיות לתפעול האתר. לא ניתן לכבות אותן.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-[#142333] cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-analytics" className="font-bold text-[#22272C] block mb-0.5 cursor-pointer">
                    אנליטיקה (Analytics)
                  </label>
                  <p className="text-xs sm:text-sm text-[#22272C]/60">מסייעות לנו להבין כיצד מבקרים משתמשים באתר ולשפר את החוויה.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-[#142333] cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-marketing" className="font-bold text-[#22272C] block mb-0.5 cursor-pointer">
                    שיווק (Marketing)
                  </label>
                  <p className="text-xs sm:text-sm text-[#22272C]/60">משמשות למדידת קמפיינים ולהצגת פרסום רלוונטי.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start pt-2 border-t border-[#A8B0B7]/20">
              <button
                onClick={handleSaveSettings}
                className="bg-[#142333] text-[#F5F5F2] font-semibold hover:bg-[#22272C] transition-colors py-2.5 px-6 rounded-sm text-sm"
              >
                שמור העדפות
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="text-[#22272C]/70 hover:text-[#142333] text-sm px-4 py-2.5 transition-colors"
              >
                חזור
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
