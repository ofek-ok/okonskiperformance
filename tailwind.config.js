/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined Swiss / Editorial Brand Color Palette
        deepNavy: "#142333",   // Primary brand anchor (15-25% dark sections)
        charcoal: "#22272C",   // Headlines, primary body ink
        offWhite: "#F5F5F2",   // Main canvas background (65-75% light)
        steelBlue: "#49677F",  // Secondary accents & interactive elements
        coolGrey: "#A8B0B7",   // Secondary text, hairline dividers
        pureWhite: "#FFFFFF",  // Clean card / slab backgrounds

        // Functional / Semantic Aliases
        canvasLight: "#F5F5F2",
        canvasDark: "#142333",
        textPrimary: "#22272C",
        textSecondary: "#49677F",
        textMuted: "#6B7280",
        borderHairline: "rgba(168, 176, 183, 0.35)",

        // Compatibility Mappings mapped to new palette
        charcoalDark: "#F5F5F2", // Legacy dark mappings redirected to light canvas
        steelDark: "#FFFFFF",
        steelBase: "#F5F5F2",
        steelElevated: "#FFFFFF",
        steelBorder: "rgba(168, 176, 183, 0.35)",
        steelBorderHover: "#49677F",

        logoIce: "#49677F",      // Replaced cyan with Steel Blue
        logoBlue: "#142333",     // Replaced bright blue with Deep Navy
        logoDeep: "#142333",
        logoMidnight: "#0E1824",

        silverPure: "#FFFFFF",
        silverOff: "#22272C",    // Mapped to Charcoal for high readability
        silverMuted: "#49677F",
        silverDark: "#6B7280",

        primary: "#142333",
        elevated: "#FFFFFF",
        brand: "#142333",
        "brand-bright": "#49677F",
        "brand-dim": "#142333",
        silver: "#22272C",
        "primary-text": "#22272C",
        "secondary-text": "#6B7280",
      },
      fontFamily: {
        heebo: ["Heebo", "sans-serif"],
        sans: ["Heebo", "Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
      backgroundImage: {
        "gradient-editorial": "linear-gradient(180deg, #F5F5F2 0%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};

