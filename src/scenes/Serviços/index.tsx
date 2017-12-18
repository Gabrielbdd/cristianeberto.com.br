import * as React from 'react'
import Helmet from 'react-helmet'
import { Grid, withStyles } from 'material-ui'
import Img from 'gatsby-image'
import { groupBy } from 'lodash'

import { StyledComponent } from 'utils/styledProps'
import {
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  MarkdownRemark,
  ImageSharp
} from 'graphql-types'

import Service from './components/Service'
import Title from '../../components/Title'
import Container from '../../components/Container'

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',
    maxWidth: theme.breakpoints.values.sm,
    margin: '20px auto 0 auto',
    padding: 8,
    color: theme.palette.grey.A400,

    '& > *': {
      marginBottom: '60px'
    },

    '& > *:last-child': {
      marginBottom: '0'
    }
  },

  categories: {
    position: 'relative' as 'relative',

    '& > *': {
      marginBottom: '15px !important'
    },

    '& > *:last-child': {
      marginBottom: '0 !important'
    }
  },

  categories__detail: {
    width: 'auto',
    margin: '0'
  },

  categories__detail__image: {
    width: '200px',
    height: '200px',
    margin: '0 auto',
    borderRadius: '90px'
  },

  categories__detail__description: {
    marginTop: '20px'
  },

  [theme.breakpoints.up('sm')]: {
    categories__detail: {
      display: 'flex'
    },

    categories__detail__image: {
      width: '125px',
      height: '125px',
      marginRight: '15px'
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      padding: '40px',
      maxWidth: theme.breakpoints.values.md
    },

    categories__detail__description: {
      marginTop: '0'
    },
  }
}))

interface IProps {
  data: {
    services: MarkdownRemarkConnection
    categories: MarkdownRemarkConnection
  }
}

@injectStyles
class Serviços extends React.Component<IProps & StyledComponent> {
  render () {
    const { classes, data } = this.props
    const servicesEdges     = data.services.edges as MarkdownRemarkEdge[]
    const categoriesEdges   = data.categories.edges as MarkdownRemarkEdge[]
    const servicesGroup     = groupBy(servicesEdges, 'node.frontmatter.category')
    const categoriesMap     = categoriesEdges.reduce((map, { node }) => {
      map.set(node!.frontmatter!.name!, node!)

      return map
    }, new Map())

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Serviços</title>
        </Helmet>

        {Object.keys(servicesGroup).map(categoryName => {
          const category = categoriesMap.get(categoryName)
          const details  = category.frontmatter
          const image    = details.image.children[0] as ImageSharp

          return (
            <div id={categoryName.toLocaleLowerCase()} className={classes.categories} key={categoryName}>
              <Title>
                {categoryName}
              </Title>
              <div className={classes.categories__detail}>
                <Img
                  sizes={image.sizes}
                  className={classes.categories__detail__image}
                />
                <div className={classes.categories__detail__description}>
                  <p>
                    {details.description}
                  </p>
                </div>
              </div>

              {servicesGroup[categoryName].map(({ node }) => (
                <Service service={node!} key={node!.frontmatter!.name!} />
              ))}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Serviços