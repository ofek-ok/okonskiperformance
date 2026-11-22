import Image from "next/image";

const trustPoints = [
  "15+ שנות ניסיון באומנויות לחימה ואימון",
  "שילוב של טכניקות מנואליות, דיקור מערבי ותרגול תנועתי",
  "התאמה אישית לפי עומסי שגרה ועבודה",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-[#0E1116] border-b border-white/[0.08] pt-24 pb-16"
      aria-label="Okonski Performance"
    >
      <div id="top" className="absolute -top-24" aria-hidden="true" />

      {/* Steady Background Video */}
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

      {/* Solid Tinted Neutral Overlay */}
      <div className="absolute inset-0 bg-[#0E1116]/70 pointer-events-none" aria-hidden="true" />

      {/* Natural RTL Right-Aligned Composition */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl flex flex-col items-start">
          {/* Brand Logo + Plain Editorial Line (No pill badge) */}
          <div className="mb-6 flex flex-col items-start gap-3">
            <Image
              src="/okonski-logo-updated.svg"
              alt="Okonski Performance"
              width={450}
              height={346}
              className="w-36 sm:w-44 h-auto object-contain"
              priority
            />
            <p className="text-xs sm:text-sm text-[#A7AAB4] font-normal">
              Okonski Performance | ספורטתרפיה ושיקום מתקדם
            </p>
          </div>

          {/* Main Headline (H1) at weight 500 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#F4F6F9] tracking-tight leading-[1.14] mb-4">
            לחזור לביצועי שיא. בלי כאבים כרוניים, בלי פשרות.
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg text-[#A7AAB4] font-normal leading-relaxed max-w-2xl mb-8">
            טיפול גופני, שיקום מפציעות והתאוששות מותאמת אישית לספורטאים, מתאמנים ואנשי הייטק. אנחנו לא שמים פלסטר על הסימפטום – אנחנו פותרים את שורש הבעיה.
          </p>

          {/* Trust Elements — Right-Aligned Architectural Grid on 8% Hairlines */}
          <div className="w-full border-y border-white/[0.08] py-6 mb-8">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-right">
              {trustPoints.map((point, index) => (
                <li
                  key={point}
                  className={
                    index > 0
                      ? "sm:pr-6 sm:border-r sm:border-white/[0.08] flex items-start gap-2"
                      : "flex items-start gap-2"
                  }
                >
                  <span className="font-mono tabular-nums text-xs text-[#2F5E9E] mt-1 shrink-0">
                    0{index + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#F4F6F9] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Single Primary CTA Button + Quiet Secondary Button Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a href="#performance-list" className="btn-primary">
              <span>שריון קדימות בתורים + הטבת השקה</span>
              <span>←</span>
            </a>
            <a href="#treatment" className="btn-secondary">
              <span>איך זה עובד?</span>
            </a>
          </div>
          <p className="text-xs text-[#A7AAB4] mt-3">
            נותרו מקומות מוגבלים לחודש הפתיחה | ללא התחייבות
          </p>
        </div>
      </div>
    </section>
  );
}
