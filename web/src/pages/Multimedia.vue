<template>
  <Layout>

    <!-- <h1>Multimedia</h1> -->
    <div class="grid sm:grid-cols-2 gap-4">
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <div v-if="edge.node.vimeo" style="padding:56% 0 0 0;position:relative;">
          <iframe
            :src="'https://player.vimeo.com/video' + getId(edge.node.vimeo.url) + '?color=ffffff&title=0&byline=0'"
            style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;"
            frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>

        <h2 class="multimedia__title text-2xl font-bold my-2">{{ edge.node.title }}</h2>

        <block-content
          class="multimedia__content mb-4"
          :blocks="edge.node._rawBody"
          v-if="edge.node._rawBody"/>

        <!-- <g-link :to="'/multimedia/' + edge.node.slug.current"> -->
          <!-- {{ edge.node.title }} -->
        <!-- </g-link> -->
      </div>
    </div>

  </Layout>
</template>

<page-query>
{
  posts: allSanityMultimedia(order: ASC) {
    edges {
      node {
        id title
        slug { current }
        _rawBody
        vimeo {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo: {
    title: 'Multimedia'
  },
  methods: {
    getId(url) {
      const id = new URL(url).pathname;
      return id;
    }
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://player.vimeo.com/api/player.js')
    document.head.appendChild(externalScript)
  }
}
</script>
