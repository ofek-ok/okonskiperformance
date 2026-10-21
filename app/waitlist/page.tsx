import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "קביעת טיפול | Okonski Performance",
  description: "הצטרף לרשימת העדיפות של Okonski Performance וקבל עדכון ראשון עם פתיחת היומן.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      {/* ── Hero strip ─────────────────────────── */}
      <div className="relative bg-steel border-b border-white/5 overflow-hidden pt-20">
        {/* Diagonal glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(62,111,168,0.1) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-silver/30 hover:text-silver text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-200 mb-12"
          >
            <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            חזרה
          </Link>

          <div className="max-w-2xl">
            <span className="eyebrow">Okonski Performance · פתיחת דלתות רשמית</span>
            <span className="block w-12 h-px bg-brand mb-8" />
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-silver leading-[0.95] mb-6">
              הקליניקה נפתחת
              <br />
              <span className="text-gradient-blue">ב־1 בינואר.</span>
            </h1>
            <p className="text-silver/45 text-base leading-relaxed max-w-lg">
              אנחנו נערכים לפתיחת הפעילות הרשמית. בשלב ההשקה הפעילות תיפתח
              בהדרגה ובמספר מקומות מוגבל.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main content ───────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — copy */}
            <div className="lg:pt-2">

              {/* Body */}
              <p className="text-silver/60 text-base leading-relaxed mb-10">
                השאר את הפרטים שלך כדי להיכנס ל
                <strong className="text-silver font-bold"> רשימת העדיפות לפתיחה</strong>
                {" "}ולקבל עדכון ראשון כאשר היומן ייפתח.
              </p>

              {/* Trust points */}
              <div className="space-y-px mb-12">
                {[
                  { icon: "→", text: "אין התחייבות — רק קדימות ביומן" },
                  { icon: "→", text: "עדכון אישי בוואטסאפ עם פתיחת ההרשמה" },
                  { icon: "→", text: "מקומות מוגבלים בשלב ההשקה" },
                ].map((p) => (
                  <div
                    key={p.text}
                    className="flex items-center gap-5 bg-steel/40 border border-white/5 px-6 py-5"
                  >
                    <span className="text-brand font-bold text-sm">{p.icon}</span>
                    <span className="text-silver/60 text-sm">{p.text}</span>
                  </div>
                ))}
              </div>

              {/* Opening date block */}
              <div className="border border-brand/20 bg-brand/5 p-8">
                <p className="text-brand text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
                  תאריך פתיחה
                </p>
                <p className="text-4xl font-black text-silver">
                  1 ינואר 2025
                </p>
                <p className="text-silver/30 text-xs mt-2 font-semibold tracking-widest uppercase">
                  מקומות מוגבלים בשלב ההשקה
                </p>
              </div>

              {/* Brand sub */}
              <div className="mt-12 flex items-center gap-4">
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image src="/logo.png" alt="Okonski Performance" fill className="object-contain" />
                </div>
                <div>
                  <span className="block text-xs font-black text-silver tracking-widest uppercase">
                    OKONSKI PERFORMANCE
                  </span>
                  <span className="block text-[9px] font-semibold text-silver/30 tracking-[0.3em] uppercase">
                    Sports Therapy &amp; Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
