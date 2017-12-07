import BlogPost from '../scenes/BlogPost'

export default BlogPost

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    post: markdownRemark(fields: { slug:  { eq: $slug } }) {
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
              responsiveResolution(width: 900, height: 300, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
    recents: allMarkdownRemark(
      filter: {
        fields: { slug: { ne: $slug } }
        frontmatter: { draft: { ne: true } },
        fileAbsolutePath: { regex: "/blog/" },
      },
      sort: { order: DESC, fields: [ frontmatter___updatedDate ] },
      limit: 4
    ) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            image {
              children {
                ... on ImageSharp {
                  responsiveResolution(width: 300, height: 100) {
                    src
                    srcSet
                  }
                }
              }
            }
            author {
              id
              avatar {
                children {
                  ... on ImageSharp {
                    responsiveResolution(width: 36, height: 36) {
                      src
                      srcSet
                    }
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
