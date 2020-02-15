<template>
  <Layout>

      <block-content
        class="photograph__content"
        :blocks="$page.photograph._rawBody"
        v-if="$page.photograph._rawBody"
      />

  </Layout>
</template>

<page-query>
query Photograph ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  photograph: sanityPhotograph (id: $id) {
    title
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
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
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import AuthorCard from '~/components/AuthorCard'

export default {
  components: {
    AuthorCard,
    PostMeta,
    PostTags,
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.photograph.title,
      meta: [
        {
          name: 'description',
          content: this.$page.photograph.description
        }
      ]
    };
  }
}
</script>
