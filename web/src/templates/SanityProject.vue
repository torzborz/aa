<template>
  <Layout>

    <div class="flex">
      <dl class="w-1/2">
        <dt class="text-xs uppercase">project name</dt>
        <dd>{{ $page.project.title }}</dd>

        <dt class="text-xs uppercase">medium</dt>
        <dd>{{ $page.project.mediums }}</dd>

        <div class="flex">
          <div class="w-1/2">
            <dt class="text-xs uppercase">year</dt>
            <dd>{{ $page.project.year }}</dd>
          </div>

          <div class="w-1/2">
            <dt class="text-xs uppercase">location</dt>
            <dd>{{ $page.project.location }}</dd>
          </div>
        </div>
      </dl>

      <dl class="w-1/2">
        <dt class="text-xs uppercase">about</dt>
        <dd>{{ $page.project.about }}</dd>

        <dt v-if="$page.project.location" class="text-xs uppercase">collaboration with</dt>
        <dd v-if="$page.project.location">{{ $page.project.location }}</dd>

        <dt v-if="$page.project.download" class="text-xs uppercase">download</dt>
        <dd v-if="$page.project.download">{{ $page.project.download }}</dd>
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
    publishedAt (format: "D. MMMM YYYY")
    categories {
      id
      title
    }
    _rawExcerpt
    _rawBody
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
