import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      windSong: ["WindSong"],
      notoSerifDisplay: ["NotoSerifDisplay"],
    },
    extend: {
      colors: {
        background: "#fcf5f2",
        primaryColor: "#6D3E28",
        secondaryColor: "#6D3E28",
        textWhite: "#fff",
        textBlack: "#000",
        textGray: "#6e6e6e",
        textDảl: "#2c2c2c",
      },
      maxWidth: {
        maxWidth: "1024px",
      },
    },
  },
  plugins: [],
};
export default config;
