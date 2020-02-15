<template>
  <Layout>

    <h1>Multimedia</h1>

    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="'/multimedia/' + edge.node.slug.current">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
{
  posts: allSanityMultimedia {
    edges {
      node {
        id title
        slug { current }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Multimedia'
  }
}
</script>
