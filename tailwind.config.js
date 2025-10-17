/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        'student-green': '#10B981',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
}
