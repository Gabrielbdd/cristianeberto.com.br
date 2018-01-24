module.exports = {
  siteMetadata: {
    title: 'Cristiane Berto',
    disqusShortName: 'cristiane-berto',
    siteUrl: `https://www.cristianeberto.com.br`
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.cristianeberto.com.br`,
      },
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
        start_url: '/?utm_source=donwloaded-pwa',
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
            src: `android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: process.env.SEGMENT_WRITE_KEY
      }
    },
    `gatsby-plugin-netlify`,
    `cp-nprogress`,
  ]
}
