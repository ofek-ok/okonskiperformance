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
    // Play active video and pause inactive ones to save mobile battery & bandwidth
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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#0A0B0D] pt-24 pb-14 sm:pt-32 sm:pb-20"
      aria-label="Okonski Performance"
    >
      {/* Anchor for top of page */}
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Bright, High-Visibility 5-Scene Ambient Video Sequence (Men-Only, No Therapist Face) */}
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
              className={`absolute inset-0 w-full h-full object-cover object-center sm:scale-105 transition-opacity duration-1000 ease-in-out filter brightness-[1.06] contrast-[1.08] saturate-[1.05] ${
                isActive ? "opacity-75 sm:opacity-80" : "opacity-0"
              }`}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Balanced Overlays: Clear & Bright Center with Smooth Top/Bottom Vignette for Text Contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/70 via-[#0A0B0D]/30 to-[#0A0B0D] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,11,13,0.45)_0%,_rgba(14,42,82,0.18)_55%,_transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Clean Un-boxed Typography & Centerpiece Logo Directly on Bright Video Overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center animate-fade-up">
        {/* Prominent Centerpiece Brand Logo */}
        <div className="mb-5 sm:mb-8 flex items-center justify-center">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-40 xs:w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-[0_14px_34px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Main H1 Headline with Subtle Split-Tone Hierarchy */}
        <h1 className="text-[28px] xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-5 sm:mb-8 max-w-4xl mx-auto text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          הגוף שלך חייב{" "}
          <span className="text-silverOff">לעמוד בקצב שלך.</span>
        </h1>

        {/* 3 Needs Text Stack (Mobile scannable with subtle dividers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-md md:max-w-3xl w-full mx-auto mb-8 sm:mb-10 text-[13.5px] sm:text-sm text-neutral-100 font-medium text-center divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-x-reverse md:divide-white/15 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          <p className="leading-relaxed py-2.5 md:py-0 md:px-5">
            <strong className="text-white font-bold">פציעה או כאב?</strong> נחזיר אותך לשגרה ולביצועים גבוהים.
          </p>
          <p className="leading-relaxed py-2.5 md:py-0 md:px-5">
            <strong className="text-white font-bold">דורש מעצמך הרבה?</strong> הגוף שלך חייב תחזוקה ושימור שוטף.
          </p>
          <p className="leading-relaxed py-2.5 md:py-0 md:px-5">
            <strong className="text-white font-bold">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
          </p>
        </div>

        {/* Primary CTA Button — Full Capsule matching Navbar */}
        <div className="flex justify-center w-full sm:w-auto px-2 sm:px-0">
          <a
            href="#performance-list"
            className="w-full sm:w-auto max-w-xs sm:max-w-none bg-white text-black font-semibold px-8 py-3.5 min-h-[48px] rounded-full hover:bg-neutral-100 transition-all duration-200 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_25px_rgba(255,255,255,0.25)] inline-flex items-center justify-center active:scale-[0.98] text-[15px] sm:text-base tracking-wide"
          >
            הבטחת מקום בפתיחה ←
          </a>
        </div>
      </div>
    </section>
  );
}
