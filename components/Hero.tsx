import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#0A0B0D] pt-28 pb-16 sm:pt-32 sm:pb-20"
      aria-label="Okonski Performance"
    >
      {/* Anchor for top of page */}
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Ambient Video Background Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none opacity-35 filter brightness-[0.7] contrast-[1.1]"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Ambient Overlays for Depth and Seamless Blending */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/85 via-[#0A0B0D]/65 to-[#0A0B0D] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,42,82,0.22)_0%,_transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Clean Un-boxed Typography & Centerpiece Logo Directly on Dark Video Overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center animate-fade-up">
        {/* Prominent Centerpiece Brand Logo (Inspired by Adir Asher Hero Emblem) */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-[0_14px_30px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Main H1 Headline with Subtle Split-Tone Hierarchy */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl mx-auto text-balance">
          הגוף שלך חייב{" "}
          <span className="text-silverOff">לעמוד בקצב שלך.</span>
        </h1>

        {/* 3 Needs Text Stack (Pure text with bold highlights — NO boxes, NO pills) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 max-w-3xl mx-auto mb-9 sm:mb-10 text-xs md:text-sm text-neutral-300 font-medium text-center md:divide-x md:divide-x-reverse md:divide-white/10">
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
            className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-all duration-200 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)] inline-flex items-center justify-center active:scale-[0.98] text-sm sm:text-base tracking-wide"
          >
            הבטחת מקום בפתיחה ←
          </a>
        </div>
      </div>
    </section>
  );
}
