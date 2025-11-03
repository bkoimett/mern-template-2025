/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        serenity: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        tranquil: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        peace: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        // Professional accent colors
        accent: {
          gold: "#d4af37",
          silver: "#c0c0c0",
          bronze: "#cd7f32",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Custom Serenity Theme
        serenity: {
          primary: "#0ea5e9", // serenity-500
          "primary-focus": "#0284c7", // serenity-600
          "primary-content": "#ffffff",
          secondary: "#64748b", // tranquil-500
          "secondary-focus": "#475569", // tranquil-600
          "secondary-content": "#ffffff",
          accent: "#d4af37", // accent gold
          "accent-focus": "#b8941f",
          "accent-content": "#000000",
          neutral: "#334155", // tranquil-700
          "neutral-focus": "#1e293b", // tranquil-800
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8fafc", // tranquil-50
          "base-300": "#f1f5f9", // tranquil-100
          "base-content": "#0f172a", // tranquil-900
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        "serenity-dark": {
          primary: "#0ea5e9",
          "primary-focus": "#38bdf8",
          "primary-content": "#ffffff",
          secondary: "#475569",
          "secondary-focus": "#64748b",
          "secondary-content": "#ffffff",
          accent: "#d4af37",
          "accent-focus": "#fbbf24",
          "accent-content": "#000000",
          neutral: "#1e293b",
          "neutral-focus": "#334155",
          "neutral-content": "#f1f5f9",
          "base-100": "#0f172a",
          "base-200": "#1e293b",
          "base-300": "#334155",
          "base-content": "#f1f5f9",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "light",
      "dark",
      "cupcake",
      "corporate",
      "business",
    ],
    darkTheme: "serenity-dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
