export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e472d7bd963595cb62aab7c',
                  title: 'Sanity Studio',
                  name: 'aa-studio',
                  apiId: 'd2bdbd2a-7568-400b-b7a3-6839592e58bb'
                },
                {
                  buildHookId: '5e472d7b6825cffac065e14c',
                  title: 'Blog Website',
                  name: 'aa-web',
                  apiId: '85b5b30f-b6aa-4f5c-87b7-dfdce89936d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/torzborz/aa',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://aa-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
