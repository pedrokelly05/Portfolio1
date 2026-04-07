import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      colors: {
        base: "#0a0a0f",
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "aurora":
          "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #06b6d4 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.3)",
        "glow-pink": "0 0 30px rgba(236, 72, 153, 0.3)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
