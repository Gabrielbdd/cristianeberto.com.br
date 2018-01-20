import * as React from 'react'
import { Divider, withStyles } from 'material-ui'
import Link, { navigateTo } from 'gatsby-link'
import Img from 'gatsby-image'

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

    '& .taint': {
      display: 'table',
      position: 'relative',
      margin: '0 auto',

      '&:before': {
        position: 'absolute',
        display: 'block',
        content: "''",
        height: '100%',
        width: '100%',
        zIndex: 10000,
        opacity: '0.3',
        transition: `background-color .${theme.transitions.duration.standard}s ${theme.transitions.easing.easeIn}`,
        borderRadius: 180,
      },

      '&:hover:before': {
        backgroundColor: theme.palette.primary.main,
      }
    },

    '& .image': {
      borderRadius: 180,
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
        background: theme.palette.primary.main,
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
        {/* <Img resolutions={image.resolutions} className="image" /> */}
        <figure className="taint">
          <img
            src={image.resolutions!.src!}
            srcSet={image.resolutions!.srcSet!}
            className="image"
          />
        </figure>
      </Link>

      <Link to={`/serviços#${name.toLocaleLowerCase()}`}>
        <h3 className="name">{name}</h3>
      </Link>

      <div className="description">{description}</div>
    </div>
  )
}

export default injectStyles(ServiceSlide)