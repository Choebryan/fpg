/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: '#1a3f29',
        bunker: '#E9C46A',
        bunkerDark: '#D1A800',
      },
    },
  },
  plugins: [require("daisyui")],
}

