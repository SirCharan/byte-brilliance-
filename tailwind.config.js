/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    container: {
      center: true,
      
      padding: {
        DEFAULT: "1rem",
        xl: "2.5rem",
      },
    },
    extend: {
      backgroundColor:{
				blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
			},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "black-deep":"linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.08) 100%);"
      },
      colors: {
        primary: "#C04BF2",
        secondary: "#F8F8F8",
      },

      fontFamily: {
        jeju: ["Jeju Gothic", "sans-serif"],
        mightyShadow: ["var(--font-mighty-shadow)"],
        hubbali: ["var(--font-hubballi)"],
        judson: ["var(--font-judson)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
