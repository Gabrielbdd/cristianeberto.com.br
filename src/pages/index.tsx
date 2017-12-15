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

    servicesCategories: allMarkdownRemark(filter: { fields: { slug: { regex: "/services/categories/" } }}) {
      edges {
        node {
          frontmatter {
            name
            description
            image {
              children {
                ... on ImageSharp {
                  resize(width: 200, height: 200) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }

    cristianeBerto: allImageSharp(filter: { id: { regex: "/cristiane-berto.jpg/" } }) {
      edges {
        node {
          sizes(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
