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
          `gatsby-remark-emoji`,
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
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cristiane Berto - Clínica da Pele',
        short_name: 'Cristiane Berto',
        start_url: '/',
        background_color: '#f7f7f7',
        theme_color: '#d7b46a',
        display: 'standalone',
        icons: [
          {
            src: `android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
  ]
}
