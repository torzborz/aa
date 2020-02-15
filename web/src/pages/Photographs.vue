<template>
  <Layout>

    <h1>Photographs</h1>

    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>

  </Layout>
</template>

<page-query>
{
  posts: allSanityPhotograph {
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
    title: 'Photographs'
  }
}
</script>
