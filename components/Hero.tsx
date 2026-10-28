"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const HERO_VIDEOS = [
  {
    src: "/hero-pain.mp4",
    label: "כאב ופציעות ספורט",
  },
  {
    src: "/hero-therapy.mp4",
    label: "טיפול מנואלי ופיזיותרפיה",
  },
  {
    src: "/hero-video.mp4",
    label: "אימון וביצועים גופניים",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Ensure all background videos are playing smoothly for zero-gap crossfades
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(() => {});
      }
    });

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % HERO_VIDEOS.length;
        const nextVideo = videoRefs.current[next];
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
        return next;
      });
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#0A0B0D] pt-28 pb-16 sm:pt-32 sm:pb-20"
      aria-label="Okonski Performance"
    >
      {/* Anchor for top of page */}
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Bright, High-Visibility 3-Scene Ambient Video Sequence (Pain -> Manual Therapy -> Training) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {HERO_VIDEOS.map((clip, idx) => {
          const isActive = idx === activeIndex;
          return (
            <video
              key={clip.src}
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={idx === 0 ? "/hero-bg.jpg" : undefined}
              className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out filter brightness-[1.06] contrast-[1.08] saturate-[1.05] ${
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
        className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/65 via-[#0A0B0D]/25 to-[#0A0B0D] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,11,13,0.42)_0%,_rgba(14,42,82,0.18)_55%,_transparent_80%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Clean Un-boxed Typography & Centerpiece Logo Directly on Bright Video Overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center animate-fade-up">
        {/* Prominent Centerpiece Brand Logo (Inspired by Adir Asher Hero Emblem) */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-[0_14px_34px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Main H1 Headline with Subtle Split-Tone Hierarchy */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl mx-auto text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          הגוף שלך חייב{" "}
          <span className="text-silverOff">לעמוד בקצב שלך.</span>
        </h1>

        {/* 3 Needs Text Stack (Pure text with bold highlights — NO boxes, NO pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-3xl mx-auto mb-9 sm:mb-10 text-xs md:text-sm text-neutral-100 font-medium text-center md:divide-x md:divide-x-reverse md:divide-white/15 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          <p className="leading-relaxed md:px-5">
            <strong className="text-white font-bold">פציעה או כאב?</strong> נחזיר אותך לשגרה ולביצועים גבוהים.
          </p>
          <p className="leading-relaxed md:px-5">
            <strong className="text-white font-bold">דורש מעצמך הרבה?</strong> הגוף שלך חייב תחזוקה ושימור שוטף.
          </p>
          <p className="leading-relaxed md:px-5">
            <strong className="text-white font-bold">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
          </p>
        </div>

        {/* Primary CTA Button — Full Capsule matching Navbar */}
        <div className="flex justify-center">
          <a
            href="#performance-list"
            className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-200 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.6),0_0_25px_rgba(255,255,255,0.25)] inline-flex items-center justify-center active:scale-[0.98] text-sm sm:text-base tracking-wide"
          >
            הבטחת מקום בפתיחה ←
          </a>
        </div>
      </div>
    </section>
  );
}
