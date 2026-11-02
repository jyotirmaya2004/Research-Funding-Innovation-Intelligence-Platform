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
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cosmic: {
          950: "#08090b",
          900: "#0b0d10",
          850: "#111419",
          800: "#161b22",
          700: "#21262d",
        },
        primary: {
          DEFAULT: "#10b981",
          foreground: "#002113",
          50: "#ecfdf5",
          100: "#d1fae5",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        accent: {
          DEFAULT: "#06b6d4",
          foreground: "#00242c",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        card: {
          DEFAULT: "#111419",
          foreground: "#e2e2e6",
        },
        muted: {
          DEFAULT: "#1c2128",
          foreground: "#8b949e",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.25rem",
        sm: "0.125rem",
        full: "9999px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        glow: "0 0 20px rgba(16, 185, 129, 0.2)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.2)",
      }
    },
  },
  plugins: [],
};

