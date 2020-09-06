<template>
  <Layout>
    <div class="sm:flex gap-16">
      <div>
        <figure v-if="$static.site.author.image">
          <g-image style="height: 232px; width: 236px;"
            :alt="$static.site.author.image.asset.alt"
            :src="$urlForImage($static.site.author.image, $static.metadata.sanityOptions).height(232).width(236).auto('format').url()"
          />
          <figcaption class="caption my-2">{{ $static.site.author.image.caption }}</figcaption>
        </figure>

        <div class="sm:text-right sm:w-2/3 sm:ml-auto sm:mt-12" v-if="$static.site.author.cv">
          <p class="caption">Download</p>
          <p>
            <a :href="$static.site.author.cv.asset.url" class="font-bold text-3xl">Curriculum Vitae</a>
          </p>
        </div>
      </div>

      <div>
        <h1 class="caption mb-4">Biography</h1>

        <block-content
          class="about__content prose"
          :blocks="$static.site.author._rawBio"
          v-if="$static.site.author._rawBio"
        />
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
  site: sanitySiteSettings(id: "siteSettings") {
    author {
      _rawBio
      image {
        asset {
          _id
          url
        }
        hotspot {
          x
          y
          width
          height
        }
        crop {
          top
          left
          right
          bottom
        }
        caption
      }
      cv {
        asset { url }
      }
    }
  }
}
</static-query>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    // AuthorCard,
    BlockContent,
    // PostMeta,
    // PostTags,
  },
  metaInfo: {
    title: 'Biography'
  }
}
</script>
