"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_VIDEOS = [
  {
    src: "/hero-pain.mp4",
    label: "מתאמנים וכאבי ספורט",
  },
  {
    src: "/hero-office.mp4",
    label: "עבודה משרדית ועומס יומיומי",
  },
  {
    src: "/hero-cupping.mp4",
    label: "טיפול כוסות רוח",
  },
  {
    src: "/hero-needling.mp4",
    label: "דיקור יבש ושחרור ממוקד",
  },
  {
    src: "/hero-strength.mp4",
    label: "חיזוק ושיפור ביצועים",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0B0B0F] border-b border-white/10 pt-20 pb-8 sm:pt-24 sm:pb-10"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Background Video Sequence (Absolute layer — does not push content height) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {HERO_VIDEOS.map((clip, idx) => {
          const isActive = idx === activeIndex;
          const isNext = idx === (activeIndex + 1) % HERO_VIDEOS.length;
          return (
            <video
              key={clip.src}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              autoPlay={isActive}
              loop
              muted
              playsInline
              preload={isActive || isNext ? "auto" : "metadata"}
              poster={idx === 0 ? "/hero-bg.jpg" : undefined}
              className={`absolute inset-0 w-full h-full object-cover object-center sm:scale-105 transition-opacity duration-1000 ease-in-out filter brightness-[1.04] contrast-[1.08] ${
                isActive ? "opacity-75 sm:opacity-80" : "opacity-0"
              }`}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Balanced Dark Overlay for High Text Contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/75 via-[#0B0B0F]/45 to-[#0B0B0F] pointer-events-none"
        aria-hidden="true"
      />

      {/* Single-Screen Calibrated Content (100% fits above the fold including CTA) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
        {/* Official Brand Logo */}
        <div className="mb-4 sm:mb-6 flex items-center justify-center stagger-1">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-36 xs:w-40 sm:w-52 md:w-60 h-auto object-contain mx-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
            priority
          />
        </div>

        {/* Main H1 Headline + Clear Service Definition Subtitle */}
        <div className="stagger-2 max-w-3xl mx-auto mb-5 sm:mb-7">
          <h1 className="text-[28px] xs:text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] mb-3 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            הגוף שלך חייב לעמוד בקצב שלך.
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#EAECEF] font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            טיפול גופני אישי, שיקום מפציעות והתאוששות מעומסים — לספורטאים, למתאמנים ולאנשי קריירה.
          </p>
        </div>

        {/* 3 Pillars Row (Desktop 3-col / Mobile compact) */}
        <div className="stagger-3 hidden sm:grid grid-cols-3 gap-0 w-full max-w-4xl mx-auto mb-7 border-y border-white/15 py-4 divide-x divide-x-reverse divide-white/15 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
          <div className="px-4">
            <strong className="text-white text-sm font-semibold block mb-0.5">
              פציעה או כאב?
            </strong>
            <p className="text-xs sm:text-[13px] text-[#EAECEF]/85 leading-snug">
              נמצא את המקור, לא רק את הנקודה שכואבת.
            </p>
          </div>

          <div className="px-4">
            <strong className="text-white text-sm font-semibold block mb-0.5">
              דורש מעצמך הרבה?
            </strong>
            <p className="text-xs sm:text-[13px] text-[#EAECEF]/85 leading-snug">
              הגוף שלך צריך תחזוקה, לא רק מנוחה.
            </p>
          </div>

          <div className="px-4">
            <strong className="text-white text-sm font-semibold block mb-0.5">
              רוצה יותר?
            </strong>
            <p className="text-xs sm:text-[13px] text-[#EAECEF]/85 leading-snug">
              נבנה מעטפת טיפולית שתיקח אותך לשלב הבא.
            </p>
          </div>
        </div>

        {/* Primary CTA Button — Fits Above the Fold on Desktop & Mobile */}
        <div className="stagger-4 flex flex-col items-center justify-center w-full sm:w-auto gap-2">
          <a
            href="#performance-list"
            className="m-btn w-full sm:w-auto max-w-xs sm:max-w-none bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold px-8 py-3.5 min-h-[48px] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.6)] inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
          <p className="text-xs text-[#EAECEF]/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>
      </div>
    </section>
  );
}
