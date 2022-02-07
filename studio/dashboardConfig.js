export default {
  widgets: [
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
                  buildHookId: '620155831d2e922d99a19070',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-demo-studio-1hac9ks8',
                  apiId: '98646444-58f8-457d-8193-21d10562b489'
                },
                {
                  buildHookId: '620155833dcfb2283a2cf1fa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-demo-web-u561iage',
                  apiId: 'a08f7f26-df06-4128-914f-757a1aeed4d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rileyjshaw/sanity-kitchen-sink-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-demo-web-u561iage.netlify.app', category: 'apps'}
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
