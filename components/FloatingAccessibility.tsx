"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingAccessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // -1, 0, 1, 2
  const [highContrast, setHighContrast] = useState(false);
  const [readableFont, setReadableFont] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [stopMotion, setStopMotion] = useState(false);

  // Apply accessibility settings to <html> or <body>
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.classList.remove("text-size-sm", "text-size-lg", "text-size-xl");
    if (fontSizeLevel === -1) root.classList.add("text-size-sm");
    if (fontSizeLevel === 1) root.classList.add("text-size-lg");
    if (fontSizeLevel === 2) root.classList.add("text-size-xl");

    // High contrast
    if (highContrast) {
      root.classList.add("a11y-high-contrast");
    } else {
      root.classList.remove("a11y-high-contrast");
    }

    // Readable font
    if (readableFont) {
      root.classList.add("a11y-readable-font");
    } else {
      root.classList.remove("a11y-readable-font");
    }

    // Highlight links
    if (highlightLinks) {
      root.classList.add("a11y-highlight-links");
    } else {
      root.classList.remove("a11y-highlight-links");
    }

    // Stop motion
    if (stopMotion) {
      root.classList.add("a11y-stop-motion");
    } else {
      root.classList.remove("a11y-stop-motion");
    }
  }, [fontSizeLevel, highContrast, readableFont, highlightLinks, stopMotion]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const resetAll = () => {
    setFontSizeLevel(0);
    setHighContrast(false);
    setReadableFont(false);
    setHighlightLinks(false);
    setStopMotion(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={isOpen}
        aria-controls="a11y-modal"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-brand text-white shadow-xl hover:bg-brand-bright transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary cursor-pointer border border-white/10"
      >
        {/* Universal Accessibility Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="2" />
          <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.49-.24-1.07-.27-1.58-.09-.28.1-.53.27-.74.49L9.42 9.12C8.44 10.2 6.89 10.98 5.35 11v2c1.99-.02 3.99-.95 5.24-2.31l.41-.45v4.76l-3.34 5.35 1.7 1.06 3.14-5.02c.07-.11.14-.23.19-.36l.32-.78.32.78c.05.13.12.25.19.36l3.14 5.02 1.7-1.06-3.34-5.35v-4.76l.41.45C14.66 12.03 16.66 12.98 18.65 13H19z" />
        </svg>
      </button>

      {/* Accessibility Modal */}
      {isOpen && (
        <div
          id="a11y-modal"
          role="dialog"
          aria-modal="true"
          aria-label="תפריט נגישות האתר"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <div
            className="w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl bg-charcoal border border-white/15 p-6 sm:p-7 shadow-2xl text-right animate-fade-up max-h-[90vh] overflow-y-auto"
            dir="rtl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-brand"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="4" r="2" />
                  <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.49-.24-1.07-.27-1.58-.09-.28.1-.53.27-.74.49L9.42 9.12C8.44 10.2 6.89 10.98 5.35 11v2c1.99-.02 3.99-.95 5.24-2.31l.41-.45v4.76l-3.34 5.35 1.7 1.06 3.14-5.02c.07-.11.14-.23.19-.36l.32-.78.32.78c.05.13.12.25.19.36l3.14 5.02 1.7-1.06-3.34-5.35v-4.76l.41.45C14.66 12.03 16.66 12.98 18.65 13H19z" />
                </svg>
                <h2 className="text-lg font-bold text-white">תפריט נגישות</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-silver/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="סגירת תפריט נגישות"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Options list */}
            <div className="space-y-4">
              {/* Font size */}
              <div className="p-3.5 rounded-xl bg-primary/70 border border-white/5 flex items-center justify-between">
                <span className="text-sm font-medium text-white">גודל טקסט</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setFontSizeLevel(Math.max(-1, fontSizeLevel - 1))}
                    disabled={fontSizeLevel <= -1}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="הקטנת גודל טקסט"
                  >
                    א-
                  </button>
                  <button
                    onClick={() => setFontSizeLevel(0)}
                    className="px-2.5 py-1.5 text-xs rounded-lg bg-white/10 text-silver/80 hover:bg-white/20 cursor-pointer"
                    aria-label="איפוס גודל טקסט"
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setFontSizeLevel(Math.min(2, fontSizeLevel + 1))}
                    disabled={fontSizeLevel >= 2}
                    className="px-3 py-1.5 text-xs font-bold rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="הגדלת גודל טקסט"
                  >
                    א+
                  </button>
                </div>
              </div>

              {/* High contrast toggle */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition-colors cursor-pointer ${
                  highContrast
                    ? "bg-brand/20 border-brand text-white"
                    : "bg-primary/70 border-white/5 text-silver/90 hover:border-white/20"
                }`}
                aria-pressed={highContrast}
              >
                <span>ניגודיות גבוהה</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10">
                  {highContrast ? "פעיל" : "כבוי"}
                </span>
              </button>

              {/* Readable font toggle */}
              <button
                onClick={() => setReadableFont(!readableFont)}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition-colors cursor-pointer ${
                  readableFont
                    ? "bg-brand/20 border-brand text-white"
                    : "bg-primary/70 border-white/5 text-silver/90 hover:border-white/20"
                }`}
                aria-pressed={readableFont}
              >
                <span>גופן קריא במיוחד</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10">
                  {readableFont ? "פעיל" : "כבוי"}
                </span>
              </button>

              {/* Highlight links toggle */}
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition-colors cursor-pointer ${
                  highlightLinks
                    ? "bg-brand/20 border-brand text-white"
                    : "bg-primary/70 border-white/5 text-silver/90 hover:border-white/20"
                }`}
                aria-pressed={highlightLinks}
              >
                <span>הדגשת קישורים</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10">
                  {highlightLinks ? "פעיל" : "כבוי"}
                </span>
              </button>

              {/* Stop motion toggle */}
              <button
                onClick={() => setStopMotion(!stopMotion)}
                className={`w-full p-3.5 rounded-xl border flex items-center justify-between text-sm font-medium transition-colors cursor-pointer ${
                  stopMotion
                    ? "bg-brand/20 border-brand text-white"
                    : "bg-primary/70 border-white/5 text-silver/90 hover:border-white/20"
                }`}
                aria-pressed={stopMotion}
              >
                <span>עצירת אנימציות ותנועה</span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10">
                  {stopMotion ? "פעיל" : "כבוי"}
                </span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
              <button
                onClick={resetAll}
                className="text-xs text-silver/60 hover:text-white underline cursor-pointer"
              >
                איפוס כל ההגדרות
              </button>
              <Link
                href="/accessibility"
                onClick={() => setIsOpen(false)}
                className="text-xs text-brand hover:text-brand-bright font-medium underline"
              >
                הצהרת נגישות מלאה
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
