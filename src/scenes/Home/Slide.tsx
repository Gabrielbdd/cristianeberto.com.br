import * as React from 'react'
import {
  StyleRules,
  Theme,

  withStyles
} from 'material-ui/styles'

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
})

const stylesType = returnType(styles)

interface IProps {
  slide: ISlide
}

const Slide: React.StatelessComponent<IProps & StyledComponent> = ({ classes, slide }) => (
  <div
    className={classes.root}
  >
    <div
      className="image"
      style={{
        background: `url(${slide.image.resize!.src})`
      }}
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