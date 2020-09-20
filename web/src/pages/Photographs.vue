<template>
  <Layout>

    <!-- <h1>Photographs</h1> -->
    <div class="flex flex-wrap">
      <div v-for="photo in photos" :key="photo.id" class="w-1/2 p-1 flex items-center justify-center">
        <g-link :to="'/photograph/' + photo.slug">
          <g-image
            class="m-auto"
            :alt="photo.alt"
            :src="$urlForImage(photo.image, $static.metadata.sanityOptions).auto('format').url()"
          />
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
    let j = 0;
    for (const edge of this.$page.posts.edges) {
      if (edge.node.images.length > 0) {
        const photo = {};
        const i = Math.round(Math.random() * edge.node.images.length);
        photo.id = j++;
        photo.slug = edge.node.slug.current;
        photo.alt = edge.node.title;
        photo.image = edge.node.images[i];
        this.photos.push(photo);
      }
    }
  }
}
</script>
