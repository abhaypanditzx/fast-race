/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: { xs: "450px" },
      backgroundImage: { 
        'sneaker': "url('/src/assets/sneakers.jpg')" ,
        'heel': "url('/src/assets/heels.jpg')" ,
        'pattern':"url('/src/assets/pattern_bg.svg')",
        'aboutImage':"url('/src/assets/dog_man.png')",

    },
    colors:{
      Lgrey: "#393939",
      Mgrey:"#161616",
      Lgreen:"#28CD0D" , 
      Mgreen:"#0E6500"

    }
    },
  },
  plugins: [],
};
