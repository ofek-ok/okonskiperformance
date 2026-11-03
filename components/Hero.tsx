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
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#A8B0B7]/25 bg-[#142333] pt-20 pb-14 sm:pt-28 sm:pb-20"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-20" aria-hidden="true" />

      {/* Authentic Clinical & Movement Video Sequence */}
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
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-60" : "opacity-0"
              }`}
            >
              <source src={clip.src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Restrained Editorial Overlay (Deep Navy Vignette) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#142333]/85 via-[#142333]/55 to-[#142333]/90 pointer-events-none"
        aria-hidden="true"
      />

      {/* Editorial Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Brand Emblem */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-36 xs:w-44 sm:w-56 md:w-64 h-auto object-contain mx-auto"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F5F2] tracking-tight leading-[1.15] mb-6 sm:mb-8 max-w-3xl mx-auto text-balance">
          הגוף שלך חייב{" "}
          <span className="text-[#A8B0B7]">לעמוד בקצב שלך.</span>
        </h1>

        {/* 3 Needs Text Stack (Editorial Dividers) */}
        <div className="hidden md:grid grid-cols-3 gap-0 max-w-3xl w-full mx-auto mb-10 text-sm text-[#F5F5F2] font-normal text-center divide-x divide-x-reverse divide-white/20">
          <p className="leading-relaxed px-5">
            <strong className="text-white font-medium">פציעה או כאב?</strong> נמצא את המקור, לא רק את הנקודה שכואבת.
          </p>
          <p className="leading-relaxed px-5">
            <strong className="text-white font-medium">דורש מעצמך הרבה?</strong> הגוף שלך צריך תחזוקה, לא רק מנוחה.
          </p>
          <p className="leading-relaxed px-5">
            <strong className="text-white font-medium">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
          </p>
        </div>

        {/* Primary CTA Button — Architectural, Minimalist */}
        <div className="flex flex-col items-center justify-center w-full sm:w-auto px-2 sm:px-0 gap-3">
          <a
            href="#performance-list"
            className="w-full sm:w-auto bg-[#F5F5F2] text-[#142333] hover:bg-white font-medium px-8 py-3.5 rounded-sm transition-colors text-sm sm:text-base tracking-wide inline-flex items-center justify-center active:scale-[0.99]"
          >
            שריון קדימות בתורים ←
          </a>
          <p className="text-xs text-[#A8B0B7] tracking-normal">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>

      </div>
    </section>
  );
}
