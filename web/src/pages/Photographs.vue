<template>
  <Layout>
<!--
    <h1>Photographs</h1>
    <div class="grid-colcade">
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

    <vue-masonry-wall :items="photos" :options="{width: 300, padding: 12}" @append="append">
      <template v-slot:default="{item}">
        <div class="item">
          <g-link :to="'/photograph/' + item.slug" class="photo__link">
            <g-image
              class="photo__img"
              :alt="item.alt"
              :src="$urlForImage(item.image, $static.metadata.sanityOptions).auto('format').url()"
            />
            <div class="photo__txt" v-if="item.excerpt">
              <block-content :blocks="item.excerpt" />
            </div>
          </g-link>
        </div>
      </template>
    </vue-masonry-wall>
-->

<masonry
  :cols="{default: 3, 700: 2, 400: 1}"
  :gutter="{default: '1rem'}"
  >
  <div v-for="(photo, index) in photos" :key="index" class="relative">
    <g-link :to="'/photograph/' + photo.slug" class="photo__link">
      <g-image
        class="photo__img"
        :alt="photo.alt"
        :src="$urlForImage(photo.image, $static.metadata.sanityOptions).auto('format').url()"
      />
    </g-link>
    <div class="absolute bottom-0 left-0 right-0 p-2">
      <h3>{{ photo.alt }}</h3>
      <!-- <block-content :blocks="photo.excerpt" /> -->
    </div>
  </div>
</masonry>

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
    BlockContent
  },
  metaInfo: {
    title: 'Photographs'
  },
  data() {
    return {
      photos: [],
    }
  },
  created() {
    // this.$colcade.create({
    //   name: 'photographs',  // name of colcade instance -> will be used as a reference for grid instance
    //   el: '.grid-colcade',  // element that hosts the grid -> as mentioned in Colcade config
    //   config: {  // native Colcade configuration -> as mentioned in Colcade config
    //     columns: '.grid-col',
    //     items: '.grid-item',
    //   },
    // });
    // this.$nextTick(() => this.$colcade.update('photographs'));

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
    // this.$colcade.destroy('photographs');
  },
  methods: {
    append() {
      // for (let i = 0; i < 20; i++) {
        // this.items.push({title: `Item ${this.items.length}`, content: 'Content'})
      // }
    }
  },
}
</script>
