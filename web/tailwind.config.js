const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    colors: {
      gray: {
        ...defaultTheme.colors.gray,
        707070: '#707070'
      }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.707070'),
            maxWidth: '71ch',
            strong: null,
          }
        }
      })
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
