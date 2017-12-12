import * as React from 'react'
import {
  StyleRules,
  Theme,

  withStyles
} from 'material-ui/styles'
import Img from 'gatsby-image'

import SlideText from './SlideText'

import { StyledComponent } from 'utils/styledProps'
import returnType from '../../utils/returnType'
import { ImageSharp } from '../../graphql-types'

export interface ISlide {
  image: ImageSharp
  title: string
  html: string
  position: string
}

const styles = (theme: Theme): StyleRules => ({
  root: {
    position: 'relative',

    '& img': {
      '-webkit-user-drag': 'none'
    }
  }
})

const stylesType = returnType(styles)

interface IProps {
  slide: ISlide
}

const Slide: React.StatelessComponent<IProps & StyledComponent> = ({ classes, slide }) => (
  <div
    className={classes.root}
  >
    <Img
      sizes={slide.image.sizes}
    />
    <SlideText
      content={{
        title: slide.title,
        html: slide.html,
        position: slide.position
      }}
    />
  </div>
)

export default withStyles(styles)(Slide)