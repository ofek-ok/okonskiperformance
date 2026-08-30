"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }

    // Expose a way to open settings from the footer
    const handleOpenSettings = () => setShowBanner(true);
    document.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => document.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const savePreferences = (prefs: any) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Dispatch event to trigger analytics/marketing tags
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: prefs }));
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-brand/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6">
      <div className="container mx-auto max-w-4xl">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-silver/90 text-sm md:text-base leading-relaxed text-right">
                אנחנו משתמשים בעוגיות ובטכנולוגיות דומות לצורך תפעול האתר, מדידה, שיפור חוויית המשתמש ושיווק. ניתן לבחור אילו סוגי עוגיות לאפשר.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button 
                onClick={handleAcceptAll}
                className="bg-brand text-white font-bold py-2.5 px-6 rounded-full hover:bg-brand-bright transition-colors text-sm"
              >
                מאשר הכל
              </button>
              <button 
                onClick={handleRejectAll}
                className="bg-white/10 text-white font-medium py-2.5 px-6 rounded-full hover:bg-white/20 transition-colors text-sm"
              >
                דוחה עוגיות לא חיוניות
              </button>
              <button 
                onClick={() => setShowSettings(true)}
                className="text-silver/60 hover:text-white underline text-sm py-2.5 px-4"
              >
                הגדרות
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 text-right">
            <h3 className="text-xl font-bold text-white">הגדרות עוגיות</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <input type="checkbox" id="essential" checked disabled className="mt-1" />
                <div>
                  <label htmlFor="essential" className="font-bold text-white block">חיוניות (Essential)</label>
                  <p className="text-sm text-silver/60">עוגיות הכרחיות לתפעול האתר. לא ניתן לכבות אותן.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <input 
                  type="checkbox" 
                  id="analytics" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="mt-1" 
                />
                <div>
                  <label htmlFor="analytics" className="font-bold text-white block">אנליטיקה (Analytics)</label>
                  <p className="text-sm text-silver/60">מסייעות לנו להבין כיצד מבקרים משתמשים באתר ולשפר את החוויה.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <input 
                  type="checkbox" 
                  id="marketing" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                  className="mt-1" 
                />
                <div>
                  <label htmlFor="marketing" className="font-bold text-white block">שיווק (Marketing)</label>
                  <p className="text-sm text-silver/60">משמשות להצגת פרסומות רלוונטיות ולמדידת אפקטיביות קמפיינים.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button 
                onClick={() => setShowSettings(false)}
                className="text-silver/60 hover:text-white text-sm px-4 py-2"
              >
                חזור
              </button>
              <button 
                onClick={handleSaveSettings}
                className="bg-brand text-white font-bold py-2 px-6 rounded-full hover:bg-brand-bright transition-colors text-sm"
              >
                שמור העדפות
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
