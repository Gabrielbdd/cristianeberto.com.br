import Serviços from '../scenes/Serviços'

export default Serviços

export const pageQuery = graphql`
  query ServicosPage {
    services: allMarkdownRemark(filter: { fields: { slug: { regex: "/^\/services\/(?!categories)/" } }}) {
      edges {
        node {
          frontmatter {
            category
            name
            price
            time
          }
          html
        }
      }
    }
    
    categories: allMarkdownRemark(filter: { fields: { slug: { regex: "/services/categories/" } }}) {
      edges {
        node {
          frontmatter {
            name
            description
            image {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 200) {
                    ...GatsbyImageSharpSizes
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
