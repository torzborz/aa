const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          707070: '#707070'
        }
      }
    },
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.gray.707070'),
          maxWidth: '71ch',
          strong: null,
        }
      }
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
