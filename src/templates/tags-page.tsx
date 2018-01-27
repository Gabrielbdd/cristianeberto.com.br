import * as React from "react";
import Blog from "../pages/blog";

export default Blog;

export const pageQuery = graphql`
  query TemplateTagPage($tag: String) {
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
          tags: { in: [$tag] }
        },
        fileAbsolutePath: { regex: "/blog/" }
      }
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
            tags
            title
            updatedDate(formatString: "DD/MM/YYYY")
            image {
              name
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 400, maxHeight: 300) {
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
