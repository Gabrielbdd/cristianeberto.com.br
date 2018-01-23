import * as React from 'react'

import Blog from '../scenes/Blog'

export default Blog

export const pageQuery = graphql`
  query BlogPage($skip: Int) {
    # Get tags
    tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] },
      filter: {
        frontmatter: {
          draft: { ne: true }
        },
        fileAbsolutePath: { regex: "/blog/" }
      }
      limit: 10,
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 250)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            updatedDate(formatString: "DD/MM/YYYY")
            image {
              name
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 350, maxHeight: 200) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`