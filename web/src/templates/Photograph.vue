<template>
  <Layout>
    <div v-html="$page.photograph.content"/>
  </Layout>
</template>

<page-query>
query Photograph ($path: String!) {
  photograph: photograph (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.photograph.title
    };
  }
}
</script>
