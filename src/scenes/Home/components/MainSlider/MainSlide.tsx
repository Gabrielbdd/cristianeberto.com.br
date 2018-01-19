import * as React from 'react'
import { withStyles } from 'material-ui/styles'
import Img from 'gatsby-image'

import MainSlideText from './MainSlideText'

import { StyledComponent } from 'utils/styledProps'
import { ImageSharp } from 'graphql-types'

export type IMainSlide = {
  image: ImageSharp
  title: string
  html: string
  position: string
  order: number
}

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',

    '& .image': {
      // width: "100%",
      // height: 300,
      // backgroundSize: "cover !important",
      // backgroundPosition: "center !important",
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      '& .image': {
        height: 400
      }
    }
  }
}))

interface IMainSlideProps extends IMainSlide {}

const Slide: React.StatelessComponent<IMainSlideProps & StyledComponent> = 
({ classes, image, title, html, position, onLoad }) => (
  <div className={classes.root} onDragStart={e => e.preventDefault()} >
    <Img sizes={image.sizes} onLoad={onLoad} />

    <MainSlideText
      content={{
        title,
        html,
        position
      }}
    />
  </div>
)

export default injectStyles(Slide)