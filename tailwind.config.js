/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoalDark: "#0A0B0D", // Brand Charcoal Black - מתוך brand.png
        steelDark: "#14181F",    // משטחי בסיס עשירים
        steelBase: "#1E2229",    // Brand Dark Steel Grey - מתוך brand.png
        steelElevated: "#252C36",// משטחים מוגבהים
        steelBorder: "rgba(226, 232, 240, 0.12)",
        steelBorderHover: "rgba(115, 180, 230, 0.35)",

        // צבעי גרדיאנט מטאליים שנלקחו ישירות מסמל ה-Ø הרשמי
        logoIce: "#73B4E6",      // הברק העליון בלוגו
        logoBlue: "#3E6FA8",     // כחול המותג הרשמי - Premium Steel Blue
        logoDeep: "#1E4E8C",     // גוף הסמל בלוגו
        logoMidnight: "#0E2A52", // צל הלוגו העמוק

        silverPure: "#FFFFFF",
        silverOff: "#E2E8F0",    // Brand Off-White / Silver - מתוך brand.png
        silverMuted: "#94A3B8",  // טקסט גוף קריא ונינוח
        silverDark: "#64748B",   // תוויות משניות ומטא

        // Backward compatibility mappings
        primary: "#0A0B0D",
        charcoal: "#14181F",
        elevated: "#1E2229",
        brand: "#3E6FA8",
        "brand-bright": "#73B4E6",
        "brand-dim": "#1E4E8C",
        silver: "#E2E8F0",
        "primary-text": "#111317",
        "secondary-text": "#94A3B8",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0A0B0D 0%, #14181F 100%)",
        "gradient-card": "linear-gradient(135deg, #1A1F26 0%, #13171D 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

