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

    cristianeBerto: allImageSharp(filter: { id: { regex: "/cristiane-berto.jpg/" } }) {
      edges {
        node {
          sizes(maxWidth: 200, maxHeight: 200) {
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
`
