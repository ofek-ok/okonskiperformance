/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0A0B0D",
        steel: "#1E2229",
        brand: "#3E6FA8",
        "brand-bright": "#5B8EC4",
        "brand-dim": "#2A4F7A",
        silver: "#E2E8F0",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0A0B0D 0%, #111820 100%)",
        "gradient-card": "linear-gradient(135deg, #1E2229 0%, #161b22 100%)",
        "diagonal-accent":
          "linear-gradient(135deg, transparent 40%, rgba(62,111,168,0.08) 40%)",
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
