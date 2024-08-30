import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor:{
        primary:"#7A1DC5",
        secondary:"#4C286A",
        tertiary:"#1A73E9"
      },
      fontFamily: {
        primaryFont:'Poppins,sans-serif',
        secondaryFont:'Noto Sans,sans-serif'
      },
      backgroundColor:{
        primary:"#7A1DC5",
        secondary:"#4C286A",
        tertiary:"#1A73E9",
        greenBadge:"#4D9C10"
      },
      boxShadow:{
        light:"rgba(99, 99, 99, 0.1) 0px 1px 5px 1px;"
      }
    },
  },
  plugins: [],
};
export default config;
