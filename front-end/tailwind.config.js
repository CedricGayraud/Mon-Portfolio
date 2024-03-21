/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      bgSite: "#ececec",
      bleuFonce: "#07345e",
      bleu: "#033c70",
      grisFonce: "#D9D9D9",
      bgScroll: "#F6F6F6",
      blanc: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
