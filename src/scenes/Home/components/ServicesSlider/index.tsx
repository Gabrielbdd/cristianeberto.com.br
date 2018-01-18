import * as React from 'react'
import { withStyles, Divider } from 'material-ui'
import Slider from 'react-slick'

import { ImageSharp } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'

import ServiceSlide, { IServiceSlide } from './ServiceSlide'

interface IServicesSlidesProps {
  slides: IServiceSlide[]
}

const injectStyles = withStyles(theme => ({
  root: {
    '& .slick-dots': {
      bottom: -5,

      '& button:before': {
        color: `${theme.palette.primary.main} !important`
      }
    }
  }
}))

@injectStyles
class ServicesSlide extends React.Component<IServicesSlidesProps & StyledComponent> {
  render () {
    const { classes, slides } = this.props

    return (
      <Slider
        dots
        arrows={false}
        slidesToShow={3}
        slidesToScroll={3}
        className={classes.root}
        responsive={[
          {
            breakpoint: '960px',
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]}
      >
        {slides.map(({ image, name, description }, index) => (
          <div key={name} onDragStart={e => e.preventDefault()}>
            <ServiceSlide
              image={image}
              name={name}
              description={description}
            />
          </div>
        ))}
      </Slider>
    )
  }
}

export default ServicesSlide