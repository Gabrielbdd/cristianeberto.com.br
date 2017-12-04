module.exports = {
  siteMetadata: {
    title: 'Cristiane Berto',
    disqusShortName: 'cristiane-berto'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorJson`
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve:'gatsby-remark-images',
            options: {
              maxWidth: 690,
              backgroundColor: '#f7f0eb'
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers'
        ]
      }
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cristiane Berto',
        short_name: 'Cristiane Berto',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#191919',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-material-ui`
    //'gatsby-plugin-offline',
  ]
}
