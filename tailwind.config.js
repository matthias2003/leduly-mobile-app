/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FBFBFB",
        secondary: "#246EE9",
        dark: "#2D2D2D",
        alphaBlack: "#000000CC"
      },
      fontFamily: {
        mblack: ["Montserrat-Black", "sans-serif"],
        mbold: ["Montserrat-Bold", "sans-serif"],
        mextrabold: ["Montserrat-ExtraBold", "sans-serif"],
        mlight: ["Montserrat-Light", "sans-serif"],
        mmedium: ["Montserrat-Medium", "sans-serif"],
        mregular: ["Montserrat-Regular", "sans-serif"],
        msemibold: ["Montserrat-SemiBold", "sans-serif"],
        rblack: ["Roboto-Black", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"],
        rextrabold: ["Roboto-ExtraBold", "sans-serif"],
        rlight: ["Roboto-Light", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        rsemibold: ["Roboto-SemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}