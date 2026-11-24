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
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-lg z-50 bg-[#151A22] rounded-xl border border-white/[0.08] p-6"
    >
      <div>

        {!showSettings ? (
          <div className="flex flex-col gap-4 text-right">
            <div>
              <h2 className="text-[#F4F6F9] font-medium text-base mb-2">הפרטיות שלך חשובה לנו</h2>
              <p className="text-[#A7AAB4] text-xs sm:text-sm leading-relaxed">
                אנחנו משתמשים בטכנולוגיות הנדרשות להפעלת האתר, ובכפוף לבחירתך עשויים להשתמש גם בכלי מדידה כדי לשפר את השירות.{" "}
                <Link href="/cookies" className="text-[#F4F6F9] underline text-xs">
                  מידע נוסף
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                onClick={handleAcceptAll}
                className="btn-secondary py-2 px-4 text-xs"
              >
                אישור
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="btn-ghost py-2 px-4 text-xs"
              >
                דחיית לא חיוניים
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="text-[#A7AAB4] hover:text-[#F4F6F9] text-xs py-2 px-2 underline mr-auto"
              >
                ניהול העדפות
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-right">
            <h2 className="text-xl font-medium text-[#F4F6F9]">ניהול העדפות Cookies</h2>
            <p className="text-[#A7AAB4] text-sm">
              בחרו אילו סוגי Cookies לאפשר. Cookies חיוניים נדרשים תמיד לתפעול האתר.{" "}
              <Link href="/cookies" className="text-[#F4F6F9] hover:text-[#2F5E9E] underline">
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
                  className="mt-1 w-4 h-4 accent-[#2F5E9E]"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-essential" className="font-medium text-[#F4F6F9] block mb-1">
                    חיוניים (Essential)
                  </label>
                  <p className="text-sm text-[#A7AAB4]">עוגיות הכרחיות לתפעול האתר. לא ניתן לכבות אותן.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-[#2F5E9E] cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-analytics" className="font-medium text-[#F4F6F9] block mb-1 cursor-pointer">
                    אנליטיקה (Analytics)
                  </label>
                  <p className="text-sm text-[#A7AAB4]">מסייעות לנו להבין כיצד מבקרים משתמשים באתר ולשפר את החוויה.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-[#2F5E9E] cursor-pointer"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-marketing" className="font-medium text-[#F4F6F9] block mb-1 cursor-pointer">
                    שיווק (Marketing)
                  </label>
                  <p className="text-sm text-[#A7AAB4]">משמשות למדידת קמפיינים ולהצגת פרסום רלוונטי.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start pt-2">
              <button
                onClick={handleSaveSettings}
                className="btn-secondary py-2 px-6 text-sm"
              >
                שמור העדפות
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="m-btn text-[#A7AAB4] hover:text-[#F4F6F9] text-sm px-4 py-2"
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
