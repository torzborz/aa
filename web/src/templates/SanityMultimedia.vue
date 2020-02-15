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
      title: this.$page.multimedia.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    };
  }
}
</script>
