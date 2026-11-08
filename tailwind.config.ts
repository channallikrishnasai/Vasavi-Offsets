import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#292622", paper: "#f7f5ef", wine: "#702f3e", brass: "#a88959" }, fontFamily: { serif: ["var(--font-editorial)"], sans: ["var(--font-sans)"] } } },
  plugins: []
};
export default config;
