// import {format} from 'date-fns'

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'shortTitle',
      type: 'string',
      title: 'Short Title',
      description: 'Shorter alternative of the title to be shown on smaller screens'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    // {
    //   name: 'authors',
    //   title: 'Authors',
    //   type: 'array',
    //   of: [{
    //     type: 'authorReference'
    //   }]
    // },
    // {
    //   name: 'categories',
    //   type: 'array',
    //   title: 'Categories',
    //   of: [{
    //     type: 'reference',
    //     to: {
    //       type: 'category'
    //     }
    //   }]
    // },
    {
      name: 'media',
      type: 'array',
      title: 'Media',
      of: [{
        type: 'string'
      }]
    },
    {
      name: 'year',
      type: 'date',
      title: 'Year',
      options: {
        dateFormat: 'yyyy',
        calendarTodayLabel: 'Today'
      },
      validation: Rule => Rule.custom(val => !val || Number.parseInt(val) <= new Date().getFullYear() ? true : 'No future')
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location'
    },
    {
      name: 'about',
      type: 'text',
      title: 'About'
    },
    {
      name: 'collaboration',
      type: 'string',
      title: 'Collaboration with'
    },
    {
      name: 'download',
      type: 'file',
      title: 'Download'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    }
  }
}
