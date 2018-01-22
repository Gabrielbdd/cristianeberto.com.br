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
      height: 300,

      '& [src*="data:image"]': {
        filter: 'blur(10px)',
      }
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

const Slide: React.SFC<IMainSlideProps & StyledComponent> = 
({ classes, image: { sizes }, title, html, position }) => (
  <div className={classes.root} onDragStart={e => e.preventDefault()} >
    <Img sizes={sizes} className="image" />

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