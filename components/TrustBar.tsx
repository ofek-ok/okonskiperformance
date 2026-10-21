const stats = [
  { value: "100+", label: "לקוחות מרוצים" },
  { value: "8+", label: "שנות ניסיון" },
  { value: "4", label: "שיטות טיפול" },
  { value: "100%", label: "טיפול אישי" },
];

export default function TrustBar() {
  return (
    <section className="bg-steel border-y border-white/5 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(62,111,168,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/8 sm:divide-y-0 lg:divide-x lg:divide-x-reverse">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 sm:py-10 px-4 sm:px-8 text-center group hover:bg-brand/5 transition-colors duration-300 ${
                i % 2 === 0 ? "border-l border-white/8 lg:border-l-0" : ""
              }`}
            >
              <p
                className="font-barlow font-black text-brand mb-1 leading-none"
                style={{ fontSize: "clamp(2.25rem, 7vw, 3.5rem)" }}
              >
                {stat.value}
              </p>
              <p className="text-silver/50 text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
