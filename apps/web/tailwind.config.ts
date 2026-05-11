import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        habana: {
          black: "#050706",
          ink: "#0A0F0C",
          panel: "#101611",
          glass: "rgba(255,255,255,0.075)",
          green: "#1ED760",
          mint: "#7CFFB2",
          gold: "#D6A84F",
          amber: "#F5D37D",
          rose: "#E45A7C"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(30,215,96,0.25)",
        gold: "0 0 40px rgba(214,168,79,0.2)"
      },
      backgroundImage: {
        "radial-stage": "radial-gradient(circle at 30% 0%, rgba(30,215,96,.24), transparent 34%), radial-gradient(circle at 84% 18%, rgba(214,168,79,.2), transparent 30%), linear-gradient(180deg, #101611 0%, #050706 58%)"
      },
      keyframes: {
        equalize: {
          "0%,100%": { transform: "scaleY(.35)" },
          "45%": { transform: "scaleY(1)" }
        }
      },
      animation: {
        equalize: "equalize 900ms ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
