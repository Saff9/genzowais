import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",
        fg: "#ffffff"
      }
    }
  },
  plugins: []
};

export default config;
