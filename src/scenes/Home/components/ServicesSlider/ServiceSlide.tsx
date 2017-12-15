import * as React from 'react'
import { Divider, withStyles } from 'material-ui'
import Link, { navigateTo } from 'gatsby-link'

import { ImageSharp } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'

export type IServiceSlide = {
  image: ImageSharp
  name: string
  description: string
}

interface IServiceSlideProps extends IServiceSlide {}

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',
    padding: '20px 0',

    '& .image-shadow': {
      height: '100%',
      borderRadius: "inherit",
      transition: `all 250ms ${theme.transitions.easing.easeIn}`,
      opacity: 0.3,

      '&:hover': {
        background: theme.palette.primary[500]
      }
    },

    '& .image': {
      width: 200,
      height: 200,
      margin: '0 auto',
      borderRadius: 180,
      backgroundSize: "cover !important",
      backgroundPosition: "center !important"
    },

    '& .name': {
      margin: '20px 0',
      textAlign: 'center',
      fontSize: 22,

      '&:after': {
        width: 50,
        height: 2,
        margin: "10px auto 0",
        content: "''",
        display: "block",
        background: "#3f51b5",
      }
    },

    '& .description': {
      padding: 8
    }
  }
}))

const ServiceSlide = (props: IServiceSlideProps & StyledComponent) => {
  const { image, name, description, classes } = props

  return (
    <div className={classes.root}>
      <Link to={`/serviços#${name.toLocaleLowerCase()}`}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${image.resize!.src})`
            }}
          >
            <div className="image-shadow" />
          </div>
      </Link>

      <Link to={`/serviços#${name.toLocaleLowerCase()}`}>
        <h3 className="name">{name}</h3>
      </Link>

      <div className="description">{description}</div>
    </div>
  )
}

export default injectStyles(ServiceSlide)