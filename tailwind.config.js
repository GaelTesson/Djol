/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7a534b",   // couleur principale (brun-rose)
        secondary: "#B5A99D", // couleur secondaire (beige-gris)
        noir: "#000000",      // noir pur
      },
      fontFamily: {
        
        Alegreya: ["'Alegreya'", "serif"], // police Alegreya
        zapfino: ["'ZapfinoCustom'", "cursive"], // ici c’est ta police téléchargée
      },
      
    },
  },
  plugins: [],
};
