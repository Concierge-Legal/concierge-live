import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF', // white as dominant
        'secondary': '#000000', // black as secondary (used for text)
        'accent': '#32CD32', // green as the accent color for interactions
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
