/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: { xs: "450px" },
      backgroundImage: { 
        'sneaker': "url('/src/assets/sneakers.jpg')" ,
        'heel': "url('/src/assets/heels.jpg')" ,

    }
    },
  },
  plugins: [],
};
