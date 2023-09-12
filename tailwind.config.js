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
        secondary: {
          light: '#3490dc', // ライトバージョン
          DEFAULT: '#2779bd', // デフォルトバージョン
          dark: '#1e528e', // ダークバージョン
        },
        primary: {
          light: '#ffcc80', // ライトバージョン
          DEFAULT: '#ff9800', // デフォルトバージョン
          dark: '#f57c00', // ダークバージョン
        },
        accent: {
          light: '#f66d9b', // ライトバージョン
          DEFAULT: '#ec407a', // デフォルトバージョン
          dark: '#d81b60', // ダークバージョン
        },
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}

