import * as React from 'react'
import Helmet from 'react-helmet'
import { Grid, Typography } from 'material-ui'
import {
  StyleRules,
  WithStyles,
  StyledComponentProps,
  Theme,

  withStyles
} from 'material-ui/styles'
import Img from 'gatsby-image'
import { groupBy } from 'lodash'

import {
  MarkdownRemarkConnection,
  MarkdownRemarkEdge,
  MarkdownRemark,
  ImageSharp
} from '../../graphql-types'

import Service from './components/Service'
import Container from '../../components/Container'
import returnType from '../../utils/returnType'

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: 'relative',
    maxWidth: '350px',
    margin: '0 auto',
    padding: '40px 0',
    color: theme.palette.grey.A400,

    '& > *': {
      marginBottom: '60px'
    },

    '& > *:last-child': {
      marginBottom: '0'
    }
  },

  categories: {
    position: 'relative',

    '& > *': {
      marginBottom: '20px !important'
    },

    '& > *:last-child': {
      marginBottom: '0 !important'
    }
  },

  categories__title: {
    paddingLeft: '20px',
    marginBottom: '30px',
    textTransform: 'uppercase',

    '&::before': {
      content: "''",
      position: 'absolute',
      left: '0',
      width: '5px',
      height: '21px',
      backgroundColor: theme.palette.primary[500]
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
      maxWidth: '960px'
    },

    categories__detail__description: {
      marginTop: '0'
    },
  }
})

const stylesType = returnType(styles)

interface IProps extends StyledComponentProps<keyof typeof stylesType> {
  data: {
    services: MarkdownRemarkConnection
    categories: MarkdownRemarkConnection
  }
}

class Serviços extends React.Component<IProps & WithStyles> {
  render () {
    const { classes, data } = this.props
    const servicesEdges     = data.services.edges as MarkdownRemarkEdge[]
    const categoriesEdges   = data.categories.edges as MarkdownRemarkEdge[]
    const servicesGroup     = groupBy(servicesEdges, 'node.frontmatter.category')
    const categoriesMap     = categoriesEdges.reduce((map, { node }) => {
      map.set(node.frontmatter.name, node)

      return map
    }, new Map())

    return (
      <div className={classes.root}>
        <Helmet>
          <title>Serviços</title>
        </Helmet>

        {Object.keys(servicesGroup).map(categoryKey => {
          const category = categoriesMap.get(categoryKey)
          const details  = category.frontmatter
          const image    = details.image.children[0] as ImageSharp

          return (
            <div className={classes.categories} key={categoryKey}>
              <Typography className={classes.categories__title} type="title">
                {categoryKey}
              </Typography>
              <div className={classes.categories__detail}>
                <Img
                  sizes={image.sizes}
                  className={classes.categories__detail__image}
                />
                <div className={classes.categories__detail__description}>
                  <Typography paragraph>
                    {details.description}
                  </Typography>
                </div>
              </div>

              {servicesGroup[categoryKey].map(({ node }) => (
                <Service service={node} key={node.frontmatter.name} />
              ))}
            </div>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(Serviços)