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

  const handleEnded = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-[#0E1116] border-b border-white/[0.08] pt-24 pb-16 overflow-hidden"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Continuous 5-Scene Background Video Sequence */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
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
              muted
              playsInline
              preload={isActive || isNext ? "auto" : "metadata"}
              poster={idx === 0 ? "/method-treatment.jpg" : undefined}
              onEnded={isActive ? handleEnded : undefined}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                isActive ? "opacity-55" : "opacity-0"
              }`}
            >
              <source src={src} type="video/mp4" />
            </video>
          );
        })}
      </div>

      {/* Balanced Neutral Overlay for Clear Video & Crisp Text Contrast */}
      <div className="absolute inset-0 bg-[#0E1116]/60 pointer-events-none" aria-hidden="true" />

      {/* Natural RTL Right-Aligned Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl flex flex-col items-start">
          {/* Official Brand Logo (No eyebrow/caption under logo) */}
          <div className="mb-6">
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance"
              width={450}
              height={346}
              className="w-36 sm:w-44 h-auto object-contain"
              priority
            />
          </div>

          {/* Main Headline (H1) at weight 600 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#F4F6F9] tracking-tight leading-[1.14] mb-4">
            סובל מכאבים? הגיע הזמן לחזור לתפקוד.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-[#D0D5DF] font-normal leading-relaxed max-w-2xl mb-8">
            ספורטתרפיה וטיפול גופני אישי לשיקום פציעות וכאבים, תחזוקה והתאוששות שוטפת, ושיפור התנועה והביצועים.
          </p>

          {/* 3 Pillars — Right-Aligned Architectural Grid on 8% Hairlines */}
          <div className="w-full border-y border-white/[0.08] py-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
              <div>
                <strong className="text-[#F4F6F9] text-sm sm:text-base font-medium block mb-1">
                  פציעה או כאב?
                </strong>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  נמצא את המקור, לא רק את הנקודה שכואבת.
                </p>
              </div>

              <div className="sm:pr-6 sm:border-r sm:border-white/[0.08]">
                <strong className="text-[#F4F6F9] text-sm sm:text-base font-medium block mb-1">
                  דורש מעצמך הרבה?
                </strong>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  הגוף שלך צריך תחזוקה, לא רק מנוחה.
                </p>
              </div>

              <div className="sm:pr-6 sm:border-r sm:border-white/[0.08]">
                <strong className="text-[#F4F6F9] text-sm sm:text-base font-medium block mb-1">
                  רוצה יותר?
                </strong>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  נבנה מעטפת טיפולית שתיקח אותך לשלב הבא.
                </p>
              </div>
            </div>
          </div>

          {/* Single Primary Button + Quiet Secondary Button Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a href="#performance-list" className="btn-primary">
              <span>הצטרפות לרשימת המתעניינים</span>
              <span>←</span>
            </a>
            <a href="#treatment" className="btn-secondary">
              <span>איך עובד הטיפול</span>
            </a>
          </div>
          <p className="text-xs text-[#A7AAB4] mt-3">
            ללא התחייבות · קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים
          </p>
        </div>
      </div>
    </section>
  );
}
