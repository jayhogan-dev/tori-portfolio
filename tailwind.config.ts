/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-blue": {
          300: "#00C2CB",
          700: "#006C8A",
        },
        "primary-dark": {
          500: "#0d1117",
        },
        "primary-white": {
          500: "#6F74A7",
          800: "#F3F8FF",
        },
        "primary-black": {
          200: "#151E2C",
          300: "#192333",
          400: "#778295",
          500: "#29374C",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        heading1: [
          "64px",
          {
            lineHeight: "130%",
            fontWeight: 700,
            letterSpacing: "-0.64px",
          },
        ],
        heading2: [
          "48px",
          {
            lineHeight: "115%",
            fontWeight: 700,
            letterSpacing: "-0.48px",
          },
        ],
        heading3: [
          "32px",
          {
            lineHeight: "105%",
            fontWeight: 600,
            letterSpacing: "-0.16px",
          },
        ],
        "base-regular": [
          "24px",
          {
            lineHeight: "130%",
            fontWeight: 400,
          },
        ],
        "base-bold": [
          "24px",
          {
            lineHeight: "130%",
            fontWeight: 600,
          },
        ],
        "paragraph-regular": [
          "20px",
          {
            lineHeight: "150%",
            fontWeight: 400,
          },
        ],
        "paragraph-bold": [
          "20px",
          {
            lineHeight: "130%",
            fontWeight: 600,
          },
        ],
        "body-regular": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: 400,
          },
        ],
        "body-bold": [
          "18px",
          {
            lineHeight: "160%",
            fontWeight: 600,
          },
        ],
        "small-regular": [
          "14px",
          {
            lineHeight: "155%",
            fontWeight: 400,
          },
        ],
        "small-bold": [
          "14px",
          {
            lineHeight: "145%",
            fontWeight: 600,
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
