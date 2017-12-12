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
                  resize(width: 880, height: 400) {
                    src
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
