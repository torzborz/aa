<template>
  <Layout>

    <!-- <h1>Photographs</h1> -->
    <div class="grid-colcade">
      <!-- columns -->
      <div class="grid-col grid-col--1"></div>
      <div class="grid-col grid-col--2"></div>
      <div class="grid-col grid-col--3"></div>
      <div class="grid-col grid-col--4"></div>

      <div v-for="photo in photos" :key="photo.id" class="photo grid-item">
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
    this.$colcade.create({
      name: 'photographs',  // name of colcade instance -> will be used as a reference for grid instance
      el: '.grid-colcade',  // element that hosts the grid -> as mentioned in Colcade config
      config: {  // native Colcade configuration -> as mentioned in Colcade config
        columns: '.grid-col',
        items: '.grid-item',
      },
    });
    window.setTimeout(() => this.$colcade.update('photographs'), 1000);

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
  },
  beforeDestroy() {
    this.$colcade.destroy('photographs');
  },
  methods: {
  },
}
</script>
