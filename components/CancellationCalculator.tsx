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
    <div className="rounded-3xl bg-charcoalDark/90 border border-white/[0.09] p-6 sm:p-8 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            בדקו בעצמכם: כמה זמן לפני הטיפול אתם מודיעים?
          </h3>
          <p className="text-xs sm:text-sm text-silver mt-1">
            הזיזו את הנקודה על הציר כדי לראות את מדיניות החיוב בזמן אמת.
          </p>
        </div>

        {/* Quick Preset Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "30 שעות", val: 30 },
            { label: "18 שעות", val: 18 },
            { label: "6 שעות", val: 6 },
          ].map((preset) => (
            <button
              key={preset.val}
              type="button"
              onClick={() => setHoursBefore(preset.val)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                hoursBefore === preset.val
                  ? "bg-logoIce/20 text-white border-logoIce/50 shadow-sm"
                  : "bg-white/[0.04] text-silver hover:text-white border-white/10 hover:bg-white/[0.08]"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Control (RTL-friendly layout: 48+ on right, 0 on left) */}
      <div className="mb-6">
        <div className="relative pt-2 pb-1">
          <input
            type="range"
            min={0}
            max={48}
            step={1}
            value={hoursBefore}
            onChange={(e) => setHoursBefore(Number(e.target.value))}
            aria-label="מספר שעות לפני הטיפול"
            className="w-full h-2.5 rounded-full appearance-none cursor-pointer bg-gradient-to-l from-emerald-500/50 via-amber-500/50 to-rose-500/50 accent-white focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce"
          />
        </div>

        {/* Axis Labels */}
        <div className="flex justify-between items-center text-[11px] sm:text-xs font-medium text-silver/80 mt-2.5 px-1">
          <button
            type="button"
            onClick={() => setHoursBefore(48)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            48+ שעות לפני
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(24)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            24 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(15)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            15 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(0)}
            className="hover:text-white transition-colors cursor-pointer"
          >
            מועד הטיפול
          </button>
        </div>
      </div>

      {/* Dynamic Output Card */}
      <div
        className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${state.accentBorder} ${state.accentBg} ${state.glow}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-3">
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
        <p className="text-sm sm:text-[15px] text-silverOff leading-relaxed">
          {state.message}
        </p>
      </div>
    </div>
  );
}
