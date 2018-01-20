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
  
  componentDidMount () {
    const checkSlides = () => {
      const $slideImages = document.querySelectorAll<HTMLImageElement>('.slick-slide:not(.slick-cloned) .gatsby-image-wrapper img[src*="data:image"]')

      if ($slideImages.length === this.props.slides.length) {
        const increaseLoadedCount = () => {
          this.setState({ loadedSlidesCount: this.state.loadedSlidesCount + 1 })
        }

        Array.from($slideImages).forEach($slideImage => {
          if ($slideImage.complete) {
            increaseLoadedCount()
          } else {
            $slideImage.addEventListener('load', increaseLoadedCount)
          }
        })

        off()
      }
    }

    const imagesObserver = new MutationObserver(checkSlides)
  
    imagesObserver.observe(document.documentElement, { subtree: true, childList: true })
    
    checkSlides()

    function off () {
      imagesObserver.disconnect()
    }
  }

  render () {
    const { classes, slides } = this.props
    const { loadedSlidesCount } = this.state

    const loading = loadedSlidesCount < slides.length
    // const loading = false

    return (
      <div
        className={classNames(classes.root, { loading })}
      >
        <Slider
          className={classNames({ hidden: loading })}
          arrows={false}
          infinite
          autoplay
          autoplaySpeed={7000}
        >
          {slides.sort((a, b) => Number(a.order) - Number(b.order)).map(slideProps => (
            <div key={slideProps.title}>
              <MainSlide
                {...slideProps}
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
