import S from '@sanity/desk-tool/structure-builder'
import {FiImage, FiTv, FiHash, FiLayers, FiSliders, FiUsers} from 'react-icons/fi'
const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'project', 'page', 'photograph', 'multimedia'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(FiSliders)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // S.listItem()
      //   .title('Blog posts')
      //   .schemaType('post')
      //   .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(FiUsers)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(FiHash)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Projects')
        .icon(FiLayers)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),
      S.listItem()
        .title('Photographs')
        .icon(FiImage)
        .schemaType('photograph')
        .child(S.documentTypeList('photograph').title('Photographs')),
      S.listItem()
        .title('Multimedia')
        .icon(FiTv)
        .schemaType('multimedia')
        .child(S.documentTypeList('multimedia').title('Multimedia')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
