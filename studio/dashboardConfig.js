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
                  buildHookId: '5fae9101717edc43114f5cbf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-58wqs2ah',
                  apiId: 'ae149997-5196-4e48-afbb-f916cc050318'
                },
                {
                  buildHookId: '5fae910128385c40c1d2cc7b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5fgknub9',
                  apiId: 'd3d51bbc-1cc6-4db7-85f0-341a32254f0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexbchr/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5fgknub9.netlify.app', category: 'apps'}
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
