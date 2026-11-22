/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single tinted neutral background + surface step + one accent (#2F5E9E)
        charcoalDark: "#0E1116",
        steelDark: "#0E1116",
        steelBase: "#151A22",
        steelElevated: "#1C222D",
        steelBorder: "rgba(255, 255, 255, 0.08)",
        steelBorderHover: "rgba(255, 255, 255, 0.16)",

        logoIce: "#2F5E9E",
        logoBlue: "#2F5E9E",
        logoDeep: "#264E86",
        logoMidnight: "#183256",

        silverPure: "#FFFFFF",
        silverOff: "#F4F6F9",
        silverMuted: "#A7AAB4",
        silverDark: "#7E828E",

        primary: "#0E1116",
        charcoal: "#151A22",
        elevated: "#151A22",
        brand: "#2F5E9E",
        "brand-bright": "#2F5E9E",
        "brand-dim": "#264E86",
        silver: "#F4F6F9",
        "primary-text": "#0E1116",
        "secondary-text": "#A7AAB4",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        jakarta: ["Heebo", "sans-serif"],
        barlow: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
