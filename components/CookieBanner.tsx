"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ConsentPreferences {
  essential: true; // Always true — no opt-out
  analytics: boolean;
  marketing: boolean;
}

const CONSENT_KEY = "cookie_consent";

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
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10 shadow-[0_-10px_60px_rgba(0,0,0,0.6)] p-6"
    >
      <div className="container mx-auto max-w-5xl">

        {!showSettings ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex-1 text-right">
              <h2 className="text-white font-bold text-lg mb-2">הפרטיות שלך חשובה לנו</h2>
              <p className="text-silver/70 text-sm sm:text-base leading-relaxed">
                אנחנו משתמשים בטכנולוגיות הנדרשות להפעלת האתר, ובכפוף לבחירתך עשויים להשתמש גם בכלי מדידה ושיווק כדי להבין את השימוש באתר ולשפר את הפעילות שלנו.{" "}
                <Link href="/cookies" className="text-brand hover:text-brand-bright underline text-sm">
                  מידע נוסף
                </Link>
              </p>
            </div>

            {/* Buttons: Accept and Reject are equal prominence to avoid dark patterns */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={handleAcceptAll}
                className="bg-brand text-white font-bold py-3 px-6 rounded-full hover:bg-brand-bright cursor-pointer transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                אישור
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="bg-white/10 text-white font-bold py-3 px-6 rounded-full hover:bg-white/20 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                דחיית Cookies לא חיוניים
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="text-silver/60 hover:text-white underline text-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand rounded"
              >
                ניהול העדפות
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-right">
            <h2 className="text-xl font-bold text-white">ניהול העדפות Cookies</h2>
            <p className="text-silver/60 text-sm">
              בחרו אילו סוגי Cookies לאפשר. Cookies חיוניים נדרשים תמיד לתפעול האתר.{" "}
              <Link href="/cookies" className="text-brand hover:text-brand-bright underline">
                מדיניות Cookies מלאה
              </Link>
            </p>

            <div className="space-y-5" role="group" aria-label="סוגי Cookies">

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-essential"
                  checked={true}
                  disabled
                  aria-disabled="true"
                  className="mt-1 w-4 h-4 accent-brand"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-essential" className="font-bold text-white block mb-0.5">
                    חיוניים (Essential)
                  </label>
                  <p className="text-sm text-silver/50">עוגיות הכרחיות לתפעול האתר. לא ניתן לכבות אותן.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-analytics"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-brand cursor-pointer focus:ring-2 focus:ring-brand"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-analytics" className="font-bold text-white block mb-0.5 cursor-pointer">
                    אנליטיקה (Analytics)
                  </label>
                  <p className="text-sm text-silver/50">מסייעות לנו להבין כיצד מבקרים משתמשים באתר ולשפר את החוויה.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="cookie-marketing"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-brand cursor-pointer focus:ring-2 focus:ring-brand"
                />
                <div className="flex-1">
                  <label htmlFor="cookie-marketing" className="font-bold text-white block mb-0.5 cursor-pointer">
                    שיווק (Marketing)
                  </label>
                  <p className="text-sm text-silver/50">משמשות למדידת קמפיינים ולהצגת פרסום רלוונטי.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-start pt-2">
              <button
                onClick={handleSaveSettings}
                className="bg-brand text-white font-bold py-3 px-8 rounded-full hover:bg-brand-bright transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                שמור העדפות
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="text-silver/60 hover:text-white text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand rounded"
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
