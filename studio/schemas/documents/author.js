export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      description: 'Some frontends will require a slug to be set to be able to show the person',
      name: 'slug',
      options: {
        maxLength: 96,
        source: 'name'
      },
      title: 'Slug',
      type: 'slug'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'bioPortableText'
    },
    {
      name: 'cv',
      title: 'Curriculum Vitae',
      type: 'file'
    },
    {
      name: 'social',
      title: 'Social',
      type: 'bioPortableText'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
