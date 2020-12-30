// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import image url builder
import urlForImage from './utils/urlForImage'
// import VueMasonry from 'vue-masonry-css'
import MagicGrid from 'vue-magic-grid'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  router.beforeEach((to, from, next) => {
    // Do stuff before next page load
    console.log(to)
    next()
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Palanquin:300,400,600,700&display=swap&subset=latin-ext'
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Vue.use(VueMasonry);

  Vue.use(MagicGrid)

  // Inject global image URL builder
  Vue.prototype.$urlForImage = urlForImage
}
