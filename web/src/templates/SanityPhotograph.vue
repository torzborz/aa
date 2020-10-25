<template>
  <Layout>
    <div class="flex">
      <div>
        <h3>Project Name</h3>
        <h1>{{ $page.photograph.title }}</h1>

        <h3>Medium</h3>
        <p>{{ $page.photograph.medium }}</p>

        <div class="flex">
          <div>
            <h3>Year</h3>
            <p>{{ $page.photograph.year }}</p>
          </div>

          <div>
            <h3>Location</h3>
            <p>{{ $page.photograph.location }}</p>
          </div>
        </div>
      </div>
      <div>
        <h3>About</h3>
        <block-content
          class="photograph__content"
          :blocks="$page.photograph._rawBody"
          v-if="$page.photograph._rawBody"
        />
      </div>
    </div>

    <g-image v-for="image in $page.photograph.images"
      :key="image.id"
      :alt="image.alt"
      :src="$urlForImage(image, $page.metadata.sanityOptions).auto('format').url()"
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
    title medium year location
    images {
      asset {
        url
      }
    }
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

export default {
  components: {
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
