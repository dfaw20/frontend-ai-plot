/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // カスタムカラーを定義
      colors: {
        primary: {
          DEFAULT: '#F674A7',
        },
        secondary: {
          DEFAULT: '#4097DD',
        },
        accent: {
          DEFAULT: '#FCDEE6',
        },
        palePink: {
          DEFAULT: '#FDDFEA',
        },
        paleThinPink: {
          DEFAULT: '#FFF0F5',
        },
        sensitiveContent: {
          DEFAULT: '#F674A7',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}

