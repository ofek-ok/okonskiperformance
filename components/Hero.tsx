import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-[#0E1116] border-b border-white/[0.08] pt-24 pb-16"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Steady Background Video (No autonomous 4.2s carousel switching) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/method-treatment.jpg"
          className="w-full h-full object-cover object-center opacity-35"
        >
          <source src="/hero-pain.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Solid Tinted Neutral Overlay (No multi-stop gradient) */}
      <div className="absolute inset-0 bg-[#0E1116]/70 pointer-events-none" aria-hidden="true" />

      {/* Natural RTL Right-Aligned Composition (Not everything centered; Spacing strictly from 4, 8, 12, 16, 24, 32, 48, 64, 96) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl flex flex-col items-start">
          {/* Official Brand Logo */}
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

          {/* Concrete H1 Headline at weight 500 (font-medium) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F6F9] tracking-tight leading-[1.14] mb-4">
            הגוף שלך חייב לעמוד בקצב שלך.
          </h1>

          <p className="text-base sm:text-lg text-[#A7AAB4] font-normal leading-relaxed max-w-2xl mb-8">
            ספורטתרפיה, טיפול גופני אישי ושיקום מפציעות ומעומסים — לספורטאים, למתאמנים ולאנשי קריירה.
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
              <span>שריון קדימות בתורים</span>
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
