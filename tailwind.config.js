/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file types
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        white: {
          100: "#DCE5FB",
          200: "#EAF0F6",
          300: "#F0F3FD",
          400: "#F7F9FC",
          500: "#FFFFFF",
          DEFAULT: "#ffffff",
        },
        black: {
          100: "#E3E3E3",
          200: "#C7C7C7",
          300: "#ABABAB",
          400: "#8F8F8F",
          500: "#727272",
          600: "#575757",
          700: "#3D3D3D",
          800: "#292929",
          900: "#1E1E1E",
          1000: "#131313",
          DEFAULT: "#000000",
        },
        gray: {
          100: "#F1F3F8",
          200: "#E2E6F1",
          300: "#D4DAEA",
          400: "#C5CDE3",
          500: "#B7C1DC",
          600: "#A8B4D5",
          700: "#9AA8CE",
          800: "#8B9BC7",
          900: "#6F83B9",
        },
      },
    },

    fontFamily: {
      tech: ["tech", "sans-serif"],
    },
    keyframes: {
      wiggle: {
        "0%, 100%": { transform: "translateY(5px)" }, // Move down 2px
        "50%": { transform: "translateY(-2px)" },
      },
    },
    animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
    },
  },
  plugins: [],
};
