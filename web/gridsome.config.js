// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Barbara Nyíri',
  siteDescription: 'Photographer + Motion graphics designer',

  icon: './src/assets/images/aa.svg',

  templates: {
    // SanityPost: '/:slug__current',
    SanityProject: [
      {
        name: 'project',
        path: '/project/:slug__current'
      }
    ],
    SanityPhotograph: [
      {
        name: 'photograph',
        path: '/photograph/:slug__current'
      }
    ],
    SanityMultimedia: [
      {
        name: 'multimedia',
        path: '/multimedia/:slug__current'
      }
    ],
  },

  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        ...clientConfig.sanity,
        overlayDrafts: !isProd,
        token: process.env.SANITY_TOKEN,
        typeName: 'Sanity',
        watchMode: !isProd
      }
    }, {
      use: 'gridsome-plugin-tailwindcss'
    }
  ]
}
