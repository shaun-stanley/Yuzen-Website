import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rice: "#FAFAF7",
        mist: "#EEF3EC",
        ceremonial: "#0B6B3A",
        gyokuro: "#1E3D32",
        ink: "#1A1D1F",
        kintsugi: "#B88A44"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(10,20,15,.08)"
      }
    }
  },
  plugins: []
};
export default config;
