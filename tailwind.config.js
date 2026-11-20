/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070D",
        surface: {
          DEFAULT: "rgba(13, 18, 30, 0.7)",
          card: "rgba(16, 23, 38, 0.65)",
          hover: "rgba(24, 34, 56, 0.8)",
          border: "rgba(255, 255, 255, 0.08)",
          "border-bright": "rgba(99, 102, 241, 0.35)",
        },
        navy: {
          950: "#05070D",
          900: "#090D18",
          850: "#0D1322",
          800: "#131C31",
          700: "#1E2C4C",
          600: "#2C3E6B",
        },
        accent: {
          cyan: "#00F0FF",
          sky: "#38BDF8",
          indigo: "#6366F1",
          violet: "#8B5CF6",
          purple: "#A855F7",
        },
        urgency: {
          low: "#10B981",
          medium: "#38BDF8",
          urgent: "#F59E0B",
          critical: "#EF4444",
        },
        status: {
          reported: "#94A3B8",
          acknowledged: "#38BDF8",
          assigned: "#A855F7",
          in_progress: "#F59E0B",
          resolved: "#10B981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.35)",
        "glow-violet": "0 0 30px -5px rgba(139, 92, 246, 0.35)",
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.4)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "aurora": "aurora 18s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
            opacity: "0.45",
          },
          "33%": {
            transform: "translate(40px, -30px) scale(1.12) rotate(60deg)",
            opacity: "0.65",
          },
          "66%": {
            transform: "translate(-30px, 20px) scale(0.95) rotate(120deg)",
            opacity: "0.4",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
