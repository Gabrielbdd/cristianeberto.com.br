import BlogPost from '../scenes/BlogPost'

export default BlogPost

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    post: markdownRemark(fields: { slug:  { eq: $slug } }) {
      wordCount {
    	  words
    	}
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        tags
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                responsiveResolution(width: 114, height: 114, quality: 100) {
                  src
                  srcSet
                }
              }
            }
          }
        }
        title
        createdDate(formatString: "D MMM, YYYY")
        updatedDate(formatString: "D MMM, YYYY")
        image {
          children {
            ... on ImageSharp {
              responsiveResolution(width: 1200, height: 630, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
