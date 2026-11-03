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
        accentBorder: "border-[#142333]/30",
        accentBg: "bg-[#F5F5F2]",
        badgeBg: "bg-[#142333] text-[#F5F5F2]",
      };
    }
    if (hours >= 15) {
      return {
        badge: "50% חיוב",
        feeText: "חיוב חלקי (50%)",
        message: "ביטול או שינוי מועד בטווח שבין 24 ל־15 שעות לפני הטיפול כרוך בחיוב של 50% מעלות הטיפול.",
        accentBorder: "border-[#A8B0B7]/50",
        accentBg: "bg-[#F5F5F2]",
        badgeBg: "bg-[#49677F] text-[#F5F5F2]",
      };
    }
    return {
      badge: "100% חיוב מלא",
      feeText: "חיוב מלא (100%)",
      message: "ביטול בפחות מ־15 שעות לפני מועד הטיפול או אי־הגעה כרוכים בחיוב מלא של עלות הטיפול.",
      accentBorder: "border-red-300",
      accentBg: "bg-red-50/50",
      badgeBg: "bg-red-700 text-white",
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
    <div className="rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/35 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#22272C] leading-snug">
            בדקו בעצמכם: כמה זמן לפני הטיפול אתם מודיעים?
          </h3>
          <p className="text-xs sm:text-sm text-[#22272C]/70 mt-1">
            הזיזו את הנקודה על הציר או לחצו על השעות לבדיקת מדיניות החיוב.
          </p>
        </div>

        {/* Quick Preset Buttons */}
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
              className={`text-xs font-semibold px-3 py-2 min-h-[38px] rounded-sm border transition-colors cursor-pointer text-center ${
                hoursBefore === preset.val
                  ? "bg-[#142333] text-[#F5F5F2] border-[#142333]"
                  : "bg-[#F5F5F2] text-[#22272C] border-[#A8B0B7]/30 hover:bg-neutral-100"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Control */}
      <div className="mb-6">
        <div className="relative py-3">
          <input
            type="range"
            min={0}
            max={48}
            step={1}
            value={hoursBefore}
            onChange={(e) => setHoursBefore(Number(e.target.value))}
            aria-label="מספר שעות לפני הטיפול"
            className="w-full h-2 rounded-sm appearance-none cursor-pointer touch-pan-y bg-[#E5E3DC] accent-[#142333] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#142333]"
          />
        </div>

        {/* Axis Labels */}
        <div className="grid grid-cols-4 gap-2 text-xs font-mono text-[#22272C]/70 mt-1">
          <button
            type="button"
            onClick={() => setHoursBefore(48)}
            className="py-1.5 px-1 rounded-sm bg-[#F5F5F2] hover:bg-neutral-100 transition-colors cursor-pointer text-center"
          >
            48+ שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(24)}
            className="py-1.5 px-1 rounded-sm bg-[#F5F5F2] hover:bg-neutral-100 transition-colors cursor-pointer text-center"
          >
            24 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(15)}
            className="py-1.5 px-1 rounded-sm bg-[#F5F5F2] hover:bg-neutral-100 transition-colors cursor-pointer text-center"
          >
            15 שעות
          </button>
          <button
            type="button"
            onClick={() => setHoursBefore(0)}
            className="py-1.5 px-1 rounded-sm bg-[#F5F5F2] hover:bg-neutral-100 transition-colors cursor-pointer text-center"
          >
            מועד הטיפול
          </button>
        </div>
      </div>

      {/* Dynamic Output Card */}
      <div
        className={`rounded-sm border p-5 sm:p-6 transition-colors ${state.accentBorder} ${state.accentBg}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`inline-flex items-center px-3 py-0.5 rounded-sm text-xs font-bold ${state.badgeBg}`}
            >
              {state.badge}
            </span>
            <span className="text-sm sm:text-base font-bold text-[#22272C]">
              {displayHours}
            </span>
          </div>
          <span className="text-xs text-[#22272C]/70 font-mono">
            {state.feeText}
          </span>
        </div>
        <p className="text-sm text-[#22272C]/80 leading-relaxed">
          {state.message}
        </p>
      </div>
    </div>
  );
}
