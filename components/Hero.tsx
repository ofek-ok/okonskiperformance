"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center bg-[#0B0B0F] border-b border-white/10 pt-20 pb-10 sm:pt-24 sm:pb-12"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Official Brand Logo */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center stagger-1">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-40 xs:w-44 sm:w-56 md:w-64 h-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Main H1 Headline — Pure White, No AI Glows or Decorative Bars */}
        <h1 className="stagger-2 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] max-w-3xl mx-auto mb-8 sm:mb-10">
          הגוף שלך חייב לעמוד בקצב שלך.
        </h1>

        {/* 3 Pillars — Plain Typographic Columns Separated by 1px Hairlines (No Card Box, No Icons) */}
        <div className="stagger-3 w-full max-w-4xl mx-auto mb-8 sm:mb-10 border-y border-white/10 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10 text-right sm:text-center">
            <div className="sm:px-6 pt-1 sm:pt-0">
              <strong className="text-white text-sm sm:text-base font-semibold block mb-1">
                פציעה או כאב?
              </strong>
              <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                נמצא את המקור, לא רק את הנקודה שכואבת.
              </p>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <strong className="text-white text-sm sm:text-base font-semibold block mb-1">
                דורש מעצמך הרבה?
              </strong>
              <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                הגוף שלך צריך תחזוקה, לא רק מנוחה.
              </p>
            </div>

            <div className="sm:px-6 pt-4 sm:pt-0">
              <strong className="text-white text-sm sm:text-base font-semibold block mb-1">
                רוצה יותר?
              </strong>
              <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                נבנה מעטפת טיפולית שתיקח אותך לשלב הבא.
              </p>
            </div>
          </div>
        </div>

        {/* Single Solid Primary Button */}
        <div className="stagger-4 flex flex-col items-center justify-center w-full sm:w-auto gap-2.5">
          <a
            href="#performance-list"
            className="m-btn w-full sm:w-auto max-w-xs sm:max-w-none bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold px-8 py-3.5 min-h-[48px] rounded-lg inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
          <p className="text-xs text-[#A7AAB4]">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>
      </div>
    </section>
  );
}
