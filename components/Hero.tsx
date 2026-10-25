import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden border-b border-neutral-800/60 bg-[#0A0B0D] pt-24 pb-16 sm:pt-28 sm:pb-20"
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
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,42,82,0.2)_0%,_transparent_75%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Content Container: Logos + H1 + CTA Architecture */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center animate-fade-up">
        {/* Prominent Centerpiece Brand Logo with Entry Animation */}
        <div className="flex items-center justify-center">
          <Image
            src="/okonski-logo-updated.svg"
            alt="Okonski Performance"
            width={450}
            height={346}
            className="w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-auto object-contain mx-auto drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* Refined Single H1 Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter mt-8 mb-10 leading-[1.1] max-w-4xl mx-auto text-balance">
          הגוף שלך חייב לעמוד בקצב שלך.
        </h1>

        {/* Single Confident CTA Button */}
        <div className="flex justify-center">
          <a
            href="#performance-list"
            className="bg-white text-black font-semibold text-base px-9 py-4 rounded-lg hover:bg-neutral-200 transition-all shadow-xl inline-flex items-center justify-center active:scale-[0.99]"
          >
            הבטחת מקום בפתיחה ←
          </a>
        </div>
      </div>
    </section>
  );
}
