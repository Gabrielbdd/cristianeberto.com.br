import * as React from 'react'
import { withStyles } from 'material-ui'
import * as classNames from 'classnames'
import { ImageSharp } from 'graphql-types'
import { StyledComponent } from 'utils/styledProps'
import MainSlide, { IMainSlide } from './MainSlide'
import Skeleton from '../../../../components/Skeleton'
import Slider from '../../../../components/Slider'

const injectStyles = withStyles(theme => ({
  root: {
    height: 300,
    position: 'relative' as 'relative',

    '& .skeleton': {
      height: "100%",
      position: "absolute",
      width: "100%",
      top: -3,
    }
  },

  [theme.breakpoints.up('md')]: {
    root: {
      height: 400
    }
  }
}))

interface IMainsSlidesProps {
  slides: IMainSlide[]
}

@injectStyles
class MainsSlide extends React.Component<IMainsSlidesProps & StyledComponent> {
  state = {
    loading: true
  }

  handleSliderLoad = () => this.setState({ loading: false })

  render () {
    const { classes, slides } = this.props

    return (
      <div className={classNames(classes.root)}>
        <Slider
          arrows={false}
          infinite
          autoplay
          autoplaySpeed={7000}
          onLoad={this.handleSliderLoad}
        >
          {slides.sort((a, b) => Number(a.order) - Number(b.order)).map(slideProps => (
            <div key={slideProps.title}>
              <MainSlide
                {...slideProps}
              />
            </div>
          ))}
        </Slider>
        
        {this.state.loading
          ? <div className="skeleton">
              <Skeleton />
            </div>
          : null}
      </div>
    )
  }
}

export default MainsSlide
