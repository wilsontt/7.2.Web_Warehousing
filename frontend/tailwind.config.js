/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1fe',
          100: '#b3d9fc',
          200: '#80c1fa',
          300: '#4da9f8',
          400: '#1a91f6',
          500: '#0079e4',
          600: '#0061b6',
          700: '#004988',
          800: '#00315a',
          900: '#00192c',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // 支援手動切換和系統偏好
}

