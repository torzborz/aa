<template>
  <Layout>

    <div class="flex">
      <dl class="w-1/3">
        <dt class="text-xs uppercase">project name</dt>
        <dd class="font-black mb-4 ml-7 text-4xl">{{ $page.project.title }}</dd>

        <div v-if="$page.project.media">
          <dt class="text-xs uppercase">medium</dt>
          <dd class="mb-4 ml-7" v-for="medium in $page.project.media" :key="medium">{{ medium }}</dd>
        </div>

        <div class="flex">
          <div class="w-1/2">
            <dt class="text-xs uppercase">year</dt>
            <dd class="mb-4 ml-7">{{ $page.project.year }}</dd>
          </div>

          <div class="w-1/2">
            <dt class="text-xs uppercase">location</dt>
            <dd class="mb-4 ml-7">{{ $page.project.location }}</dd>
          </div>
        </div>
      </dl>

      <dl class="w-2/3">
        <dt class="text-xs uppercase">about</dt>
        <dd class="mb-4 ml-7">{{ $page.project.about }}</dd>

        <dt v-if="$page.project.collaboration" class="text-xs uppercase">collaboration with</dt>
        <dd class="mb-4 ml-7" v-if="$page.project.collaboration">{{ $page.project.collaboration }}</dd>

        <dt v-if="$page.project.download" class="text-xs uppercase">download</dt>
        <dd class="mb-4 ml-7" v-if="$page.project.download">{{ $page.project.download }}</dd>
      </dl>
    </div>

    <block-content
      class="project__content"
      :blocks="$page.project._rawBody"
      v-if="$page.project._rawBody"
    />

  </Layout>
</template>

<page-query>
query Project ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  project: sanityProject (id: $id) {
    title
    media
    year (format: "Y")
    location
    about
    collaboration
    download {
      asset {
        source {
          url
        }
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
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    };
  }
}
</script>
