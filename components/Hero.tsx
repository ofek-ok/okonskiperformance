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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-[#2F5E9E]/25 bg-[#0B0B0F] pt-28 pb-16 sm:pt-36 sm:pb-24"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* 5-Scene Ambient Video Sequence */}
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
              className={`absolute inset-0 w-full h-full object-cover object-center sm:scale-105 transition-opacity duration-1000 ease-in-out filter brightness-[0.98] contrast-[1.1] ${
                isActive ? "opacity-70 sm:opacity-75" : "opacity-0"
              }`}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Deep Obsidian Overlays (#0B0B0F + #2F5E9E ambient vignette) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/80 via-[#0B0B0F]/45 to-[#0B0B0F] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,11,15,0.45)_0%,_rgba(47,94,158,0.22)_55%,_transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Choreographed Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Prominent Centerpiece Brand Logo */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center stagger-1">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-[0_14px_34px_rgba(0,0,0,0.9)]"
            priority
          />
        </div>

        {/* Main H1 Headline — White (#FFFFFF) + Performance Blue (#2F5E9E) matching OP Brand Board */}
        <div className="stagger-2 flex flex-col items-center mb-8 sm:mb-10">
          <h1 className="text-[30px] xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-4xl mx-auto text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            הגוף שלך חייב{" "}
            <span className="text-[#437ACA] drop-shadow-[0_2px_18px_rgba(47,94,158,0.45)]">
              לעמוד בקצב שלך.
            </span>
          </h1>
          {/* Signature OP Brand Board Horizontal Accent Rule */}
          <span className="mt-4 w-14 h-1 bg-[#2F5E9E] rounded-full shadow-[0_0_16px_rgba(47,94,158,0.8)]" aria-hidden="true" />
        </div>

        {/* 3 Pillars Strip — Directly Inspired by OP Brand Board (Rehab & Recovery | Performance Training | Long-Term Resilience) */}
        <div className="stagger-3 w-full max-w-4xl mx-auto mb-9 sm:mb-11 rounded-2xl bg-[#0B0B0F]/80 backdrop-blur-xl border border-[#2F5E9E]/35 shadow-[0_20px_50px_rgba(0,0,0,0.75)] p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/12 text-center">
            {/* Pillar 1: Rehab & Pain */}
            <div className="flex flex-col items-center px-4 pt-2 md:pt-0">
              <div className="text-[#2F5E9E] mb-2" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-14h8m-9 5h10m-8 5h6" />
                </svg>
              </div>
              <strong className="text-white text-sm sm:text-[15px] font-bold mb-1">פציעה או כאב?</strong>
              <p className="text-xs sm:text-[13px] text-[#A7AAB4] leading-relaxed">
                נמצא את המקור, לא רק את הנקודה שכואבת.
              </p>
            </div>

            {/* Pillar 2: Recovery & Maintenance */}
            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
              <div className="text-[#2F5E9E] mb-2" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10v4M7 7v10m10-10v10m4-7v4M7 12h10" />
                </svg>
              </div>
              <strong className="text-white text-sm sm:text-[15px] font-bold mb-1">דורש מעצמך הרבה?</strong>
              <p className="text-xs sm:text-[13px] text-[#A7AAB4] leading-relaxed">
                הגוף שלך צריך תחזוקה, לא רק מנוחה.
              </p>
            </div>

            {/* Pillar 3: Long-Term Resilience */}
            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
              <div className="text-[#2F5E9E] mb-2" aria-hidden="true">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V8m5 8V4" />
                </svg>
              </div>
              <strong className="text-white text-sm sm:text-[15px] font-bold mb-1">רוצה יותר?</strong>
              <p className="text-xs sm:text-[13px] text-[#A7AAB4] leading-relaxed">
                נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
              </p>
            </div>
          </div>
        </div>

        {/* Primary CTA Button — Performance Blue (#2F5E9E) + White Contrast */}
        <div className="stagger-4 flex flex-col items-center justify-center w-full sm:w-auto px-2 sm:px-0 gap-3">
          <a
            href="#performance-list"
            className="m-btn w-full sm:w-auto max-w-xs sm:max-w-none bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/20 font-bold px-9 py-4 min-h-[52px] rounded-full shadow-[0_12px_36px_-4px_rgba(47,94,158,0.75)] inline-flex items-center justify-center gap-2 text-[15px] sm:text-base tracking-wide"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
          <p className="text-xs sm:text-[13px] text-[#A7AAB4] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>
      </div>
    </section>
  );
}
