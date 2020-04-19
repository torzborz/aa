<template>
  <Layout>

    <!-- <h1>Photographs</h1> -->

    <div v-for="photo in photos" :key="photo.id">
      <g-link :to="'/photograph/' + photo.slug">
        <img :src="photo.src" />
      </g-link>
    </div>

  </Layout>
</template>

<page-query>
{
  posts: allSanityPhotograph {
    edges {
      node {
        id title
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
export default {
  metaInfo: {
    title: 'Photographs'
  },
  data() {
    return {
      photos: []
    }
  },
  mounted() {
    for (const edge of this.$page.posts.edges) {
      if (edge.node.images.length>0) {
        const photo = {};
        const i = Math.round(Math.random() * edge.node.images.length);
        photo.slug = edge.node.slug.current;
        photo.src = edge.node.images[i].asset.url;
        this.photos.push(photo);
      }
    }
  }
}
</script>
