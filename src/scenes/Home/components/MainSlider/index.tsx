import * as React from 'react'
import Slider from 'react-slick'
import { CircularProgress, withStyles } from 'material-ui'
import * as classNames from 'classnames'
import { ImageSharp } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'
import MainSlide, { IMainSlide } from './MainSlide'

const injectStyles = withStyles({
  root: {
    position: 'relative',

    '&.loading': {
      height: 400,

      '& .circle': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
      }
    },

    '& .hidden': {
      visibility: 'hidden',
    }
  }
})

interface IMainsSlidesProps {
  slides: IMainSlide[]
}

@injectStyles
class MainsSlide extends React.Component<IMainsSlidesProps & StyledComponent> {
  state = {
    loadedSlidesCount: 0
  }

  render () {
    const { classes, slides } = this.props
    const { loadedSlidesCount } = this.state

    const loading = loadedSlidesCount < slides.length
    // const loading = true

    return (
      <div className={classNames(classes.root, { loading })}>
        <Slider
          className={classNames({ hidden: loading })}
          arrows={false}
          infinite
          autoplay
          autoplaySpeed={5000}
        >
          {slides.sort((a, b) => Number(a.order) - Number(b.order)).map(slideProps => (
            <div key={slideProps.title}>
              <MainSlide
                {...slideProps}
                onLoad={() => this.setState({ loadedSlidesCount: loadedSlidesCount + 1 })}
              />
            </div>
          ))}
        </Slider>

        {loading
          ? <CircularProgress className="circle" size={50} />
          : null}
      </div>
    )
  }
}

export default MainsSlide
