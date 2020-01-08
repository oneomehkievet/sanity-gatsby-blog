export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e160b83316a5d19c9aeed68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7cevbqy2',
                  apiId: 'b331460d-caf1-47ba-bdd5-ba4c5af0e1fa'
                },
                {
                  buildHookId: '5e160b83aca58a0c85901d9a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jztppjvm',
                  apiId: '8bcb5e6b-04f1-406c-8119-1ad3c2184291'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oneomehkievet/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jztppjvm.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
