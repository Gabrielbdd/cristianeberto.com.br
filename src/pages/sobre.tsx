import * as React from 'react'

import Sobre from '../scenes/Sobre'

export default Sobre

export const pageQuery = graphql`
  query AboutPage {
    internalImages: allImageSharp(filter: { id: { regex: "/internal-images/" }}) {
      edges {
        node {
          sizes(maxWidth: 568, maxHeight: 400) {
            ...GatsbyImageSharpSizes
          }
          id
        }
      }
    }
  }
`
