<template>
  <Layout>

      <block-content
        class="multimedia__content"
        :blocks="$page.multimedia._rawBody"
        v-if="$page.multimedia._rawBody"
      />

  </Layout>
</template>

<page-query>
query Multimedia ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  multimedia: sanityMultimedia (id: $id) {
    title
    _rawExcerpt
    _rawBody
    mainImage {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
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
  metaInfo() {
    return {
      title: this.$page.multimedia.title,
      meta: [
        {
          name: 'description',
          content: this.$page.multimedia.description
        }
      ]
    };
  }
}
</script>
