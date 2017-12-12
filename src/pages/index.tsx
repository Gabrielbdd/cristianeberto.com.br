import * as React from 'react'

import Home from '../scenes/Home'

export default Home

export const pageQuery = graphql`
  query HomePage {
    slides: allMarkdownRemark(filter: { id: { regex: "/slide\//" } }) {
      edges {
        node {
          frontmatter {
            position
            title
            image {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 880, maxHeight: 400) {
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
          html
        }
      }
    }
  }
`
