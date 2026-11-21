"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-[#2F5E9E]/25 bg-[#0B0B0F] pt-20 pb-8 sm:pt-24 sm:pb-10"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* OP Brand Board Studio Lighting Ground (No Video — Clean Obsidian & Performance Blue Spotlight) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(47,94,158,0.22)_0%,rgba(11,11,15,0)_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.04)_0%,transparent_45%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0F] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Single-Viewport Calibrated Hero Container (Fits 100% Above the Fold Including CTA Button) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Official Brand Logo — Sized for Single-Screen Balance */}
        <div className="mb-3 sm:mb-5 flex items-center justify-center stagger-1">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-36 xs:w-40 sm:w-48 md:w-56 h-auto object-contain mx-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
            priority
          />
        </div>

        {/* Main H1 Headline — White (#FFFFFF) + Performance Blue (#2F5E9E) */}
        <div className="stagger-2 flex flex-col items-center mb-5 sm:mb-6">
          <h1 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-[52px] font-black text-white tracking-tight leading-[1.12] max-w-3xl mx-auto text-balance">
            הגוף שלך חייב{" "}
            <span className="text-[#3B73B9]">
              לעמוד בקצב שלך.
            </span>
          </h1>
          <span
            className="mt-3 w-12 h-1 bg-[#2F5E9E] rounded-full shadow-[0_0_14px_rgba(47,94,158,0.75)]"
            aria-hidden="true"
          />
        </div>

        {/* 3 Pillars Strip — Compact Architectural Panel (OP Brand Board Center Motif) */}
        <div className="stagger-3 w-full max-w-3xl mx-auto mb-5 sm:mb-7 rounded-2xl bg-[#11131A]/90 border border-[#2F5E9E]/30 shadow-[0_16px_40px_rgba(0,0,0,0.65)] px-3.5 py-3 sm:px-5 sm:py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10 text-right sm:text-center">
            {/* Pillar 1 */}
            <div className="flex sm:flex-col items-center gap-2.5 sm:gap-1 sm:px-3 pt-1 sm:pt-0">
              <div className="text-[#2F5E9E] shrink-0" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-14h8m-9 5h10m-8 5h6" />
                </svg>
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <strong className="text-white font-bold block sm:mb-0.5">פציעה או כאב?</strong>
                <span className="text-[#A7AAB4]">נמצא את המקור, לא רק את הנקודה שכואבת.</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex sm:flex-col items-center gap-2.5 sm:gap-1 sm:px-3 pt-2.5 sm:pt-0">
              <div className="text-[#2F5E9E] shrink-0" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4M7 7v10m10-10v10m4-7v4M7 12h10" />
                </svg>
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <strong className="text-white font-bold block sm:mb-0.5">דורש מעצמך הרבה?</strong>
                <span className="text-[#A7AAB4]">הגוף שלך צריך תחזוקה, לא רק מנוחה.</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex sm:flex-col items-center gap-2.5 sm:gap-1 sm:px-3 pt-2.5 sm:pt-0">
              <div className="text-[#2F5E9E] shrink-0" aria-hidden="true">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V8m5 8V4" />
                </svg>
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <strong className="text-white font-bold block sm:mb-0.5">רוצה יותר?</strong>
                <span className="text-[#A7AAB4]">נבנה מעטפת טיפולית שתיקח אותך לשלב הבא.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Button — Guaranteed Above the Fold */}
        <div className="stagger-4 flex flex-col items-center justify-center w-full sm:w-auto px-2 sm:px-0 gap-2">
          <a
            href="#performance-list"
            className="m-btn w-full sm:w-auto max-w-xs sm:max-w-none bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/20 font-bold px-8 py-3.5 min-h-[48px] rounded-full shadow-[0_12px_34px_-4px_rgba(47,94,158,0.7)] inline-flex items-center justify-center gap-2 text-sm sm:text-base tracking-wide"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
          <p className="text-[11.5px] sm:text-xs text-[#A7AAB4]">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>
      </div>
    </section>
  );
}
