import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        container: "0px 0px 6px #AEAEAE",
        input:
          "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)",
      },
      colors: {
        black: "#333",
        dark: "#212121",
        light: "#EFEFEF",
        blue: "#276CB2",
        "light-blue": "#55A6C1",
        brown: "#66332F",
        gray: "#F8F8F8",
        "dark-gray": "#727272",
        "light-gray": "#ccc",
      },
    },
  },
  plugins: [],
};
export default config;
