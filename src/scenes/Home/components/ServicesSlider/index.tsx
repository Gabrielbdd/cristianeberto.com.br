import * as React from 'react'
import { withStyles, Divider } from 'material-ui'
import * as classNames from 'classnames'
import Skeleton from '../../../../components/Skeleton'
import Slider from '../../../../components/Slider'

import { ImageSharp } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'

import ServiceSlide, { IServiceSlide } from './ServiceSlide'

interface IServicesSlidesProps {
  slides: IServiceSlide[]
}

const injectStyles = withStyles(theme => ({
  root: {
    position: 'relative' as 'relative',
    height: '100%',
    width: '100%',

    '& .slick-dots': {
      bottom: -5,

      '& button:before': {
        color: `${theme.palette.primary.main} !important`,
      },
    },

    '& .hidden': {
      height: 200,
      visibility: 'hidden',
    },

    '& .skeleton': {
      position: 'absolute',
      top: "0",
      height: "100%",
      width: '100%',
    },
  },
}))

@injectStyles
class ServicesSlide extends React.Component<IServicesSlidesProps & StyledComponent> {
  state = {
    loading: true
  }

  render () {
    const { classes, slides } = this.props
    const { loading } = this.state

    return (
      <div className={classes.root}>
        <Slider
          onLoad={() => this.setState({ loading: false })}
          dots
          arrows={false}
          slidesToShow={3}
          slidesToScroll={3}
          className={classNames({ hidden: loading })}
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

        {loading
          ? <div className="skeleton">
              <Skeleton />
            </div>
          : null}
      </div>
    )
  }
}

export default ServicesSlide