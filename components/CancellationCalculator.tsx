"use client";

import { useState } from "react";

export default function CancellationCalculator() {
  const [hoursBefore, setHoursBefore] = useState<number>(30);

  const getPolicyState = (hours: number) => {
    if (hours >= 24) {
      return {
        badge: "ללא עלות",
        feeText: "0% חיוב",
        message: "ביטול או שינוי מועד – בלי חיוב. תודה שהודעתם מראש!",
        accentBorder: "border-emerald-400/35",
        accentBg: "bg-emerald-500/10",
        badgeBg: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
        glow: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.2)]",
      };
    }
    if (hours >= 15) {
      return {
        badge: "50% חיוב",
        feeText: "חיוב חלקי (50%)",
        message: "ביטול או שינוי מועד בטווח שבין 24 ל־15 שעות לפני הטיפול כרוך בחיוב של 50% מעלות הטיפול.",
        accentBorder: "border-amber-400/35",
        accentBg: "bg-amber-500/10",
        badgeBg: "bg-amber-400/15 text-amber-300 border-amber-400/30",
        glow: "shadow-[0_0_30px_-5px_rgba(245,158,11,0.2)]",
      };
    }
    return {
      badge: "100% חיוב מלא",
      feeText: "חיוב מלא (100%)",
      message: "ביטול בפחות מ־15 שעות לפני מועד הטיפול או אי־הגעה כרוכים בחיוב מלא של עלות הטיפול.",
      accentBorder: "border-rose-400/35",
      accentBg: "bg-rose-500/10",
      badgeBg: "bg-rose-400/15 text-rose-300 border-rose-400/30",
      glow: "shadow-[0_0_30px_-5px_rgba(244,63,94,0.2)]",
    };
  };

  const state = getPolicyState(hoursBefore);
  const displayHours =
    hoursBefore === 48
      ? "48+ שעות לפני הטיפול"
      : hoursBefore === 0
      ? "במועד הטיפול (אי־הגעה)"
      : `${hoursBefore} שעות לפני הטיפול`;

  return (
    <div className="rounded-3xl bg-charcoalDark/90 border border-white/[0.09] p-5 sm:p-8 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 mb-5 sm:mb-6">
        <div>
          <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
            בדקו בעצמכם: כמה זמן לפני הטיפול אתם מודיעים?
          </h3>
          <p className="text-[13px] sm:text-sm text-silver mt-1">
            הזיזו את הנקודה על הציר או לחצו על השעות לבדיקת מדיניות החיוב.
          </p>
        </div>

        {/* Quick Preset Pills (40px+ mobile touch height) */}
        <div className="grid grid-cols-3 sm:flex items-center gap-2">
          {[
            { label: "30 שעות", val: 30 },
            { label: "18 שעות", val: 18 },
            { label: "6 שעות", val: 6 },
          ].map((preset) => (
            <button
              key={preset.val}
              type="button"
              onClick={() => setHoursBefore(preset.val)}
              className={`text-xs font-semibold px-3 py-2 min-h-[38px] rounded-full border transition-all duration-200 cursor-pointer text-center ${
                hoursBefore === preset.val
                  ? "bg-logoIce/20 text-white border-logoIce/50 shadow-sm"
                  : "bg-white/[0.04] text-silver hover:text-white border-white/10 hover:bg-white/[0.08] active:bg-white/[0.15]"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Control (RTL-friendly layout: 48+ on right, 0 on left) */}
      <div className="mb-5 sm:mb-6">
        <div className="relative py-3">
          <input
            type="range"
            min={0}
            max={48}
            step={1}
            value={hoursBefore}
            onChange={(e) => setHoursBefore(Number(e.target.value))}
            aria-label="מספר שעות לפני הטיפול"
            className="w-full h-3 rounded-full appearance-none cursor-pointer touch-pan-y bg-gradient-to-l from-emerald-500/55 via-amber-500/55 to-rose-500/55 accent-white focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.65)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-logoIce"
          />
        </div>

        {/* Axis Labels (Tappable on Mobile) */}
        <div className="grid grid-cols-4 gap-1.5 text-[11px] sm:text-xs font-medium text-silver/85 mt-1">
          <button
            type="button"
            onClick={() => setHoursBefore(48)}
            className="min-h-[36px] py-1.5 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.14] hover:text-white transition-colors cursor-pointer text-center"
          >
            48+ שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(24)}
            className="min-h-[36px] py-1.5 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.14] hover:text-white transition-colors cursor-pointer text-center"
          >
            24 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(15)}
            className="min-h-[36px] py-1.5 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.14] hover:text-white transition-colors cursor-pointer text-center"
          >
            15 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(0)}
            className="min-h-[36px] py-1.5 px-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-white/[0.14] hover:text-white transition-colors cursor-pointer text-center"
          >
            מועד הטיפול
          </button>
        </div>
      </div>

      {/* Dynamic Output Card */}
      <div
        className={`rounded-2xl border p-4 sm:p-6 transition-all duration-300 ${state.accentBorder} ${state.accentBg} ${state.glow}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold border ${state.badgeBg}`}
            >
              {state.badge}
            </span>
            <span className="text-sm sm:text-base font-bold text-white">
              {displayHours}
            </span>
          </div>
          <span className="text-xs text-silver/80 font-medium">
            {state.feeText}
          </span>
        </div>
        <p className="text-[13.5px] sm:text-[15px] text-silverOff leading-relaxed">
          {state.message}
        </p>
      </div>
    </div>
  );
}
