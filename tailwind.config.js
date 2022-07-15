/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/pages/**/*.tsx', 'src/components/**/*.tsx'],

  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: { themes: ['light', 'dark'] },
};
