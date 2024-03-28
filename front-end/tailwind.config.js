/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  important: "#root",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      bgSite: "#ececec",
      bleuFonce: "#07345e",
      bleu: "#033c70",
      grisBtn: "#D9D9D9",
      grisFonce: "#818181",
      bgScroll: "#F6F6F6",
      blanc: "#FFFFFF",
      rouge: "#ff605c",
      jaune: "#ffbd44",
      vert: "#00ca4e",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
