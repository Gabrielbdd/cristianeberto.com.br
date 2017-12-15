import * as React from 'react'
import { withStyles } from 'material-ui/styles'

import MainSlideText from './MainSlideText'

import { StyledComponent } from 'utils/styledProps'
import { ImageSharp } from 'graphql-types'

export type IMainSlide = {
  image: ImageSharp
  title: string
  html: string
  position: string
}

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',

    '& .image': {
      width: "100%",
      height: 300,
      backgroundSize: "cover !important",
      backgroundPosition: "center !important",
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
({ classes, image, title, html, position }) => (
  <div className={classes.root} >
    <div
      className="image"
      style={{
        background: `url(${image.resize!.src})`
      }}
    />

    <MainSlideText
      content={{
        title: title,
        html: html,
        position: position
      }}
    />
  </div>
)

export default injectStyles(Slide)