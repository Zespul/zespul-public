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
        grayText: "#494949",
        footerbg: "#191919",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.parent': {
          'display': 'grid',
          'grid-template-columns': 'repeat(3, 1fr)',
          'grid-template-rows': 'repeat(3, 1fr)',
          'grid-column-gap': '0px',
          'grid-row-gap': '0px',
          'justify-items': 'center',
          'align-items': 'center',
        },

        '.div1': {
          'grid-area': '1 / 1 / 2 / 2',
        },
        '.div2': {
          'grid-area': '1 / 2 / 2 / 3',
        },
        '.div3': {
          'grid-area': '1 / 3 / 2 / 4',
        },
        '.div4': {
          'grid-area': '2 / 3 / 3 / 4',
        },
        '.div5': {
          'grid-area': '3 / 3 / 4 / 4',
        },
        '.div6': {
          'grid-area': '3 / 2 / 4 / 3',
        },
        '.div7': {
          'grid-area': '3 / 1 / 4 / 2',
        },

      });
    }
  ],
};
