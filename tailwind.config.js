/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16A085",
        secondary: "#2C3E50",
        terciary: "#ECF0F1",
        grayText: "#494949"
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.grid-template-areas-HowItWorks': {
          'grid-template-areas': [
            `"card1 arrow1 card2"`,
            `". . arrow2"`,
            `"card4 arrow3 card3"`,
          ],
        },
        '.grid-area-card1': {
          'grid-area': 'card1',
        },
        '.grid-area-card2': {
          'grid-area': 'card2',
        },
        '.grid-area-card3': {
          'grid-area': 'card3',
        },
        '.grid-area-card4': {
          'grid-area': 'card4',
        },
        '.grid-area-arrow1': {
          'grid-area': 'arrow1',
        },
        '.grid-area-arrow2': {
          'grid-area': 'arrow2',
        },
        '.grid-area-arrow3': {
          'grid-area': 'arrow3',
        },
      });
    }
  ],
};
