/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#0B4F6C',
        brandSecondary: '#2563EB',
        brandSky: '#3498E3',
        brandBg: '#FFFFFF',
        brandSurface: '#F4F8FC',
        brandText: '#0F172A',
        brandMuted: '#475569',
        brandBorder: '#DCE6F2',
      },
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
