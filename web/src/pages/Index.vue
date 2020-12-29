<template>
  <Layout>

    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id" class="text-left md:text-center py-1 md:py-2">
        <g-link :to="'/project/' + edge.node.slug.current" v-slot="{ href, navigate }">
          <a :href="href"
            class="hover:font-bold transition-all"
            @click="navigate"
            @mouseover="$emit('change-picture', edge.node)"
            mouseout="$emit('change-picture', false)">
            {{ edge.node.title }}
          </a>
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
{
#  metadata {
#    sanityOptions {
#      projectId
#      dataset
#    }
#  }
  posts: allSanityProject(sortBy: "publishedAt") {
    edges {
      node {
        id
        title
        slug {
          current
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
