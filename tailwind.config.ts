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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
        'green-dark': '#02643E',  // R: 249, G: 66, B: 58
        'green-light': '#BCD533', // R: 188, G: 213, B: 51
        'olive': '#61812A',       // Estimativa para o verde oliva
        'brown-dark': '#412A1A',  // Estimativa para o marrom escuro
        'brown-light': '#6D523F', // Estimativa para o marrom claro
        },
      },
    },
  },
  plugins: [],
};
export default config;
