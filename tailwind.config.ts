import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#ec4899",
          dark: "#be185d",
          light: "#f472b6",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          light: "#a78bfa",
        },
        accent: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          light: "#22d3ee",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          gray: "#111111",
          card: "#1a1a1a",
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
            opacity: '0.1',
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: '0.3',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
