<template>
  <Layout>

    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="'/project/' + edge.node.slug.current" v-slot="{ href, route, navigate }">
          <a :href="href" @click="navigate" @mouseover="$emit('changePicture', edge.node)">
            {{ edge.node.title }}
          </a>
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityProject(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawExcerpt
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
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hi!'
  }
}
</script>
