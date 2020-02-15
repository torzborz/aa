<template>
  <Layout>
    <div v-html="$page.multimedia.content"/>
  </Layout>
</template>

<page-query>
query Multimedia ($path: String!) {
  multimedia: multimedia (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.multimedia.title
    };
  }
}
</script>
