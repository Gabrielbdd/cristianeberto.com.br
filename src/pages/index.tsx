import * as React from 'react'
import Home from '../scenes/Home'
// import withRoot from '../withRoot'

export default Home
// export default withRoot(Home)

export const pageQuery = graphql`
  query HomePage {
    slides: allMarkdownRemark(filter: { id: { regex: "/slide\//" } }) {
      edges {
        node {
          frontmatter {
            order
            position
            title
            image {
              name
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 864, maxHeight: 400) {
                    ...GatsbyImageSharpSizes
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
              name
              children {
                ... on ImageSharp {
                  resolutions(width: 200, height: 200) {
                    ...GatsbyImageSharpResolutions
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
