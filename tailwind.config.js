/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "xl": "2rem",
        "2xl": "2.5rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary": "#C04BF2",
        "secondary": "#F8F8F8",
      },
      screens: {
        "2xl": "1400px",
      },
      fontFamily: {
        "jeju": ["Jeju Gothic", "sans-serif"],
        "mightyShadow": ['var(--font-mighty-shadow)']
      }
    },
  },
  plugins: [],
};
