"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_VIDEOS = [
  "/hero-pain.mp4",
  "/hero-office.mp4",
  "/hero-cupping.mp4",
  "/hero-needling.mp4",
  "/hero-strength.mp4",
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
      className="relative min-h-[88vh] lg:min-h-[90vh] flex items-end overflow-hidden bg-[#0A0B0D] border-b border-white/10 pt-24 pb-16 sm:pb-24"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-20" aria-hidden="true" />

      {/* Authentic Sports Therapy & Movement Video Sequence */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {HERO_VIDEOS.map((src, idx) => {
          const isActive = idx === activeIndex;
          const isNext = idx === (activeIndex + 1) % HERO_VIDEOS.length;
          return (
            <video
              key={src}
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
                isActive ? "opacity-55" : "opacity-0"
              }`}
            >
              <source src={src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Deep Charcoal Overlay (no neon or decorative gradients) */}
      <div className="absolute inset-0 bg-[#0A0B0D]/60 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="mb-7 sm:mb-9">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-32 sm:w-44 h-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-white leading-[1.06] tracking-tight max-w-4xl mb-8 sm:mb-10">
          הגוף שלך חייב לעמוד בקצב שלך.
        </h1>

        {/* Editorial 3-Part Brand Statement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-4xl mb-10 sm:mb-12 text-sm sm:text-base text-[#E2E8F0]/90 md:divide-x md:divide-x-reverse divide-white/20 border-t border-white/15 pt-6">
          <p className="leading-relaxed md:pl-6">
            <strong className="text-white font-semibold">פציעה או כאב?</strong> נמצא את המקור, לא רק את הנקודה שכואבת.
          </p>
          <p className="leading-relaxed md:px-6">
            <strong className="text-white font-semibold">דורש מעצמך הרבה?</strong> הגוף שלך צריך תחזוקה, לא רק מנוחה.
          </p>
          <p className="leading-relaxed md:pr-6">
            <strong className="text-white font-semibold">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a href="#performance-list" className="btn-primary w-full sm:w-auto text-center">
            <span>הצטרפות לרשימת המתעניינים</span>
            <span aria-hidden="true">←</span>
          </a>
          <span className="text-xs text-[#94A3B8]">
            הפעילות בהקמה · הרשמה מוקדמת ללא התחייבות
          </span>
        </div>
      </div>
    </section>
  );
}
