/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],

  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#1363DF',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#1363DF',
        },
      },
    ],
  },
};
