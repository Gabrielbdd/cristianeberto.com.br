import Serviços from '../scenes/Serviços'

export default Serviços

export const pageQuery = graphql`
  query ServicosPage {
    services: allMarkdownRemark(filter: { fields: { slug: { regex: "/services\/(?!categories)/" } }}) {
      edges {
        node {
          frontmatter {
            category
            price
            name
            time
          }
          html
        }
      }
    }
    
    categories:allMarkdownRemark(filter: { fields: { slug: { regex: "/services/categories/" } }}) {
      edges {
        node {
          frontmatter {
            name
            description
            image {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 200) {
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
