/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file types
  ],
  theme: {
    boxShadow: {
      "inner-custom": "inset 12px 1px 100px 15px rgba(6, 56, 59, 1)",
    },
    fontFamily: {
      tech: ["tech", "sans-serif"],
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'translateY(5px)' },  // Move down 2px
          '50%': { transform: 'translateY(-2px)' },    
      },
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
  
  },
  plugins: [],
};
