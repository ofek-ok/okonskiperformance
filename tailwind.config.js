/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OP · Official Brand Colors Board (#0B0B0F · #FFFFFF · #2F5E9E · #A7AAB4)
        charcoalDark: "#0B0B0F", // Black — רקע, בסיס
        steelDark: "#111218",    // משטחי בסיס כהים
        steelBase: "#16171F",    // משטחי כרטיסים
        steelElevated: "#1D1E28",// משטחים מוגבהים
        steelBorder: "rgba(167, 170, 180, 0.14)",
        steelBorderHover: "rgba(47, 94, 158, 0.45)",

        // Performance Blue — צבע מותג, הדגשות (#2F5E9E)
        logoIce: "#2F5E9E",      // הדגשות וכותרות משנה — Performance Blue
        logoBlue: "#2F5E9E",     // כחול המותג הרשמי — Performance Blue
        logoDeep: "#23487A",     // גוון עומק ללחיצה/ריחוף
        logoMidnight: "#142A4A", // צל עמוק

        // White & Cool Gray (#FFFFFF · #A7AAB4)
        silverPure: "#FFFFFF",   // White — לוגו, כותרות
        silverOff: "#FFFFFF",    // כותרות וטקסט ראשי
        silverMuted: "#A7AAB4",  // Cool Gray — טקסט משני, אלמנטים
        silverDark: "#7E828E",   // תוויות משניות ומטא

        // Backward compatibility mappings
        primary: "#0B0B0F",
        charcoal: "#111218",
        elevated: "#16171F",
        brand: "#2F5E9E",
        "brand-bright": "#2F5E9E",
        "brand-dim": "#23487A",
        silver: "#FFFFFF",
        "primary-text": "#0B0B0F",
        "secondary-text": "#A7AAB4",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        jakarta: ["Montserrat", "Plus Jakarta Sans", "sans-serif"],
        barlow: ["Montserrat", "Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0B0B0F 0%, #111218 100%)",
        "gradient-card": "linear-gradient(135deg, #16171F 0%, #101117 100%)",
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
