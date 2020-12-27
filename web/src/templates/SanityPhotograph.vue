<template>
  <Layout>
    <div class="flex">
      <dl class="w-1/3">
        <dt class="text-xs uppercase">project name</dt>
        <dd class="font-black mb-4 ml-7 text-4xl">{{ $page.photograph.title }}</dd>

        <dt class="text-xs uppercase">medium</dt>
        <dd class="mb-4 ml-7">{{ $page.photograph.medium }}</dd>

        <div class="flex">
          <div class="w-1/2">
            <dt class="text-xs uppercase">year</dt>
            <dd class="mb-4 ml-7">{{ $page.photograph.year }}</dd>
          </div>

          <div class="w-1/2">
            <dt class="text-xs uppercase">location</dt>
            <dd class="mb-4 ml-7">{{ $page.photograph.location }}</dd>
          </div>
        </div>
      </dl>

      <div class="w-2/3">
        <h3>About</h3>
        <block-content
          class="photograph__content"
          :blocks="$page.photograph._rawBody"
          v-if="$page.photograph._rawBody"
        />
      </div>
    </div>

    <g-image v-for="image in $page.photograph.images"
      :key="image.id"
      :alt="image.alt"
      :src="$urlForImage(image, $page.metadata.sanityOptions).auto('format').url()"
    />
  </Layout>
</template>

<page-query>
query Photograph ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  photograph: sanityPhotograph (id: $id) {
    title medium year location
    images {
      asset {
        url
      }
    }
    _rawBody
  }
}
</page-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.photograph.title,
      meta: [
        {
          name: 'description',
          content: this.$page.photograph.description
        }
      ]
    };
  }
}
</script>
