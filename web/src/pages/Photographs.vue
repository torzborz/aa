<template>
  <Layout>

    <!-- <h1>Photographs</h1> -->
    <div class="flex flex-wrap">
      <div v-for="photo in photos" :key="photo.id" class="photo">
        <g-link :to="'/photograph/' + photo.slug" class="photo__link">
          <g-image
            class="photo__img"
            :alt="photo.alt"
            :src="$urlForImage(photo.image, $static.metadata.sanityOptions).auto('format').url()"
          />
          <div class="photo__txt" v-if="photo.excerpt">
            <block-content :blocks="photo.excerpt" />
          </div>
        </g-link>
      </div>
    </div>

  </Layout>
</template>
<static-query>
{
  metadata {
    siteName,
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<page-query>
{
  posts: allSanityPhotograph {
    edges {
      node {
        id title _rawExcerpt
        slug { current }
        images {
          asset {
            url
            path
          }
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
    BlockContent,
  },
  metaInfo: {
    title: 'Photographs'
  },
  data() {
    return {
      photos: []
    }
  },
  mounted() {
    let j = 0;
    for (const edge of this.$page.posts.edges) {
      if (edge.node.images.length > 0) {
        const photo = {};
        const i = Math.floor(Math.random() * edge.node.images.length);
        photo.id = j++;
        photo.slug = edge.node.slug.current;
        photo.alt = edge.node.title;
        photo.image = edge.node.images[i];
        photo.excerpt = edge.node._rawExcerpt;
        this.photos.push(photo);
      }
    }
  }
}
</script>
