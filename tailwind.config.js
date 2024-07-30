/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#34353A",
        shadowBg:"#3D3E42",
        yellow:"#FFC86B",
        whitenew:"#E6E6E8"
      }
    },
  },
  plugins: [],
}
