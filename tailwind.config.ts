import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        default: 'Plus Jakarta Sans',
        body: 'Plus Jakarta Sans',
        display: 'Plus Jakarta Sans',
      },
      colors: {
        'transparent': 'transparent',
        'main-purple': '#635FC7',
        'main-purple-hover': '#A8A4FF',
        'black': '#000112',
        'very-dark-gray': '#20212C',
        'dark-gray': '#2B2C37',
        'lines-dark': '#3E3F4E',
        'medium-gray': '#828FA3',
        'lines-light': '#E4EBFA',
        'light-gray': '#F4F7FD',
        'white': '#FFFFFF',
        'red': '#EA5555',
        'red-hover': '#FF9898',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config