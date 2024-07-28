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
        season: ["var(--season)"],
        pt: ["var(--PT)"],
      },
    },
    colors: {
      transparent: "transparent",
      dark: "#2b2b2b",
      white: "#efefef",
      gold: "#d9bb6e",
    },
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
export default config;
