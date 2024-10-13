/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file types
  ],
  theme: {
    boxShadow: {
      'inner-custom': 'inset 12px 1px 100px 15px rgba(6, 56, 59, 1)',
    }  },
  plugins: [],
};
